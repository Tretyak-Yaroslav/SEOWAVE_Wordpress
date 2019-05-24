<?php
/**
 * Storefront engine room
 *
 * @package storefront
 */

/**
 * Assign the Storefront version to a var
 */
$theme              = wp_get_theme( 'storefront' );
$storefront_version = $theme['Version'];

/**
 * Set the content width based on the theme's design and stylesheet.
 */

add_theme_support( ‘woocommerce’ );


if ( ! isset( $content_width ) ) {
	$content_width = 980; /* pixels */
}

$storefront = (object) array(
	'version'    => $storefront_version,

	/**
	 * Initialize all the things.
	 */
	'main'       => require 'inc/class-storefront.php',
	'customizer' => require 'inc/customizer/class-storefront-customizer.php',
);

require 'inc/storefront-functions.php';
require 'inc/storefront-template-hooks.php';
require 'inc/storefront-template-functions.php';

if ( class_exists( 'Jetpack' ) ) {
	$storefront->jetpack = require 'inc/jetpack/class-storefront-jetpack.php';
}

if ( storefront_is_woocommerce_activated() ) {
	$storefront->woocommerce            = require 'inc/woocommerce/class-storefront-woocommerce.php';
	$storefront->woocommerce_customizer = require 'inc/woocommerce/class-storefront-woocommerce-customizer.php';

	require 'inc/woocommerce/class-storefront-woocommerce-adjacent-products.php';

	require 'inc/woocommerce/storefront-woocommerce-template-hooks.php';
	require 'inc/woocommerce/storefront-woocommerce-template-functions.php';
	require 'inc/woocommerce/storefront-woocommerce-functions.php';
}

if ( is_admin() ) {
	$storefront->admin = require 'inc/admin/class-storefront-admin.php';

	require 'inc/admin/class-storefront-plugin-install.php';
}

/**
 * NUX
 * Only load if wp version is 4.7.3 or above because of this issue;
 * https://core.trac.wordpress.org/ticket/39610?cversion=1&cnum_hist=2
 */
if ( version_compare( get_bloginfo( 'version' ), '4.7.3', '>=' ) && ( is_admin() || is_customize_preview() ) ) {
	require 'inc/nux/class-storefront-nux-admin.php';
	require 'inc/nux/class-storefront-nux-guided-tour.php';

	if ( defined( 'WC_VERSION' ) && version_compare( WC_VERSION, '3.0.0', '>=' ) ) {
		require 'inc/nux/class-storefront-nux-starter-content.php';
	}
}

/**
 * Note: Do not add any custom code here. Please use a custom plugin so that your customizations aren't lost during updates.
 * https://github.com/woocommerce/theme-customisations
 */

// Правки 28.02.2019
remove_filter( 'the_excerpt', 'wpautop' );
add_filter('excerpt_more', function($more) {
	return '';
});
add_filter( 'excerpt_length', function(){
	return 50;
} );
function custom_registration_function() {
    if (isset($_POST['submit'])) {
        registration_validation(
            $_POST['username'],
            $_POST['password'],
            $_POST['email']
        );

        // sanitize user form input
        global $username, $password, $email;
        $username	= 	sanitize_user($_POST['username']);
        $password 	= 	esc_attr($_POST['password']);
        $email 		= 	sanitize_email($_POST['email']);

        // call @function complete_registration to create the user
        // only when no WP_error is found
        complete_registration(
            $username,
            $password,
            $email
        );
    }

    registration_form(
        $username,
        $password,
        $email
    );
}

function registration_form( $username, $password, $email ) {
    echo '
    <form action="' . $_SERVER['REQUEST_URI'] . '" method="post">
    <label for="username">Username <strong>*</strong>
    <input type="text" name="username" value="' . ( isset( $_POST['username'] ) ? $username : null ) . '">
    </label>
      
    <label for="password">Password <strong>*</strong>
    <input type="password" name="password" value="' . ( isset( $_POST['password'] ) ? $password : null ) . '">
    </label>
      
    <label for="email">Email <strong>*</strong>
    <input type="text" name="email" value="' . ( isset( $_POST['email']) ? $email : null ) . '">
    </label>
    
    <p class="submit"><input type="submit" name="submit" value="Register"/><img src="' . get_template_directory_uri() . '/img/line-right.png" alt=""></p>
    </form>
    ';
}

function registration_validation( $username, $password, $email)  {
    global $reg_errors;
    $reg_errors = new WP_Error;

    if ( empty( $username ) || empty( $password ) || empty( $email ) ) {
        $reg_errors->add('field', 'Required form field is missing');
    }

    if ( strlen( $username ) < 4 ) {
        $reg_errors->add('username_length', 'Username too short. At least 4 characters is required');
    }

    if ( username_exists( $username ) )
        $reg_errors->add('user_name', 'Sorry, that username already exists!');

    if ( !validate_username( $username ) ) {
        $reg_errors->add('username_invalid', 'Sorry, the username you entered is not valid');
    }

    if ( strlen( $password ) < 5 ) {
        $reg_errors->add('password', 'Password length must be greater than 5');
    }

    if ( !is_email( $email ) ) {
        $reg_errors->add('email_invalid', 'Email is not valid');
    }

    if ( email_exists( $email ) ) {
        $reg_errors->add('email', 'Email Already in use');
    }

    if ( is_wp_error( $reg_errors ) ) {

        foreach ( $reg_errors->get_error_messages() as $error ) {
            echo '<div>';
            echo '<strong>ERROR</strong>:';
            echo $error . '<br/>';

            echo '</div>';
        }
    }
}

function complete_registration() {
    global $reg_errors, $username, $password, $email;
    if ( count($reg_errors->get_error_messages()) < 1 ) {
        $userdata = array(
            'user_login'	=> 	$username,
            'user_email' 	=> 	$email,
            'user_pass' 	=> 	$password,
        );
        $user = wp_insert_user( $userdata );
        echo 'Registration complete. Goto <a href="' . get_site_url() . '/login.php">login page</a>.';
    }
}

// Register a new shortcode: [cr_custom_registration]
add_shortcode('cr_custom_registration', 'custom_registration_shortcode');

// The callback function that will replace [book]
function custom_registration_shortcode() {
    ob_start();
    custom_registration_function();
    return ob_get_clean();
}

add_filter('login_redirect', '_myplugin_lgn_redirect');

function _myplugin_lgn_redirect() {
    return '/some-page-on-my-website';
}

add_filter('login_redirect', 'lgn_redirect');

function lgn_redirect() {
    return '/my-account';
}

add_filter('user_contactmethods', 'my_user_contactmethods');

function my_user_contactmethods($user_contactmethods){

    $user_contactmethods['twitter'] = 'Twitter Username';
    $user_contactmethods['facebook'] = 'Facebook Username';

    return $user_contactmethods;
}