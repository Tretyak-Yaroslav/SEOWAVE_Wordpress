<?php
/*
Template Name: login
*/
?>
<?php get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <main class="main register-page">
        <div class="wrapper-inner">
            <div class="profile profile__details">
                <div class="review-events">
                    <p class="review-events__title"><?php the_title(); ?></p>
                    <div class="events-form">
                        <?php
                        wp_login_form( array(
                            'echo'           => true,
                            'redirect'       => site_url( $_SERVER['REQUEST_URI'] ),
                            'form_id'        => 'loginform',
                            'label_username' => __( 'Username' ),
                            'label_password' => __( 'Password' ),
                            'label_remember' => __( 'Remember Me' ),
                            'label_log_in'   => __( 'Log In' ),
                            'id_username'    => 'user_login',
                            'id_password'    => 'user_pass',
                            'id_remember'    => 'remember_me',
                            'id_submit'      => 'wp-submit',
                            'remember'       => true,
                            'value_username' => NULL,
                            'value_remember' => false
                        ) );

                        add_action( 'wp_login_failed', 'my_front_end_login_fail' );
                        function my_front_end_login_fail( $username ) {
                            $referrer = $_SERVER['HTTP_REFERER'];  // откуда пришел запрос

                            // Если есть referrer и это не страница wp-login.php
                            if( !empty($referrer) && !strstr($referrer,'wp-login') && !strstr($referrer,'wp-admin') ) {
                                wp_redirect( add_query_arg('login', 'failed', $referrer ) );  // редиркетим и добавим параметр запроса ?login=failed
                                exit;
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </main>
<?php endwhile; endif; ?>
<?php get_footer(); ?>

