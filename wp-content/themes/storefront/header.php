<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package storefront
 */

?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/share.js"></script>
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/js/slick/slick/slick.css" />
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/js/slick/slick/slick-theme.css" />
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/fonts/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/js/lightbox/css/lightbox.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
 <div class="wrapper">
<?php do_action( 'storefront_before_site' ); ?>

<div id="page" class="hfeed site">
	<?php do_action( 'storefront_before_header' ); ?>

 <div class="wrapper-inner">
      <header class="header">
        <div class="burger-logo">
          <div class="burger">
            <div></div>
            <div></div>
          </div>
          <div class="logo">
            <a href="/"><?php echo get_bloginfo( 'name' ) ; ?></a>
          </div>
        </div>
      
        <div class="users">
          <div class="basket">
            	<a  href="<?php echo esc_url( wc_get_cart_url() ); ?>" title="<?php esc_attr_e( 'View your shopping cart', 'storefront' ); ?>">
            	  <img class="basket__picture" src="<?php echo get_template_directory_uri(); ?>/img/ticket.png" alt="">
				<span class="basket__quantity"><?php echo wp_kses_data( WC()->cart->get_cart_contents_count() ); ?></span>
			</a>
          </div>
          <div class="logaut">
            <img class="logaut__avatar" src="<?php echo get_template_directory_uri(); ?>/img/avatar.png" alt="">
            <p class="logaut__text">login</p>
          </div>
        </div>

        <div class="burger-menu">
          <div class="burger-menu__container">
            <div class="header">
              <div class="burger-logo">
                <img class="burger_close" src="<?php echo get_template_directory_uri(); ?>/img/close.png" alt="">

                <div class="logo">
                <a href="/"><?php echo get_bloginfo( 'name' ) ; ?></a>
                </div>
              </div>
              <div class="users">
                 <div class="basket">
            	<a  href="<?php echo esc_url( wc_get_cart_url() ); ?>" title="<?php esc_attr_e( 'View your shopping cart', 'storefront' ); ?>">
            	  <img class="basket__picture" src="<?php echo get_template_directory_uri(); ?>/img/ticket.png" alt="">
				<span class="basket__quantity"><?php echo wp_kses_data( WC()->cart->get_cart_contents_count() ); ?></span>
			</a>
          </div>
                <div class="logaut">
                  <img class="logaut__avatar" src="<?php echo get_template_directory_uri(); ?>/img/avatar.png" alt="">
                  <p class="logaut__text">login</p>
                </div>
              </div>
            </div>
            <nav class="main-menu">
             <?php wp_nav_menu( array('menu' => '19' )); ?>
         
            </nav>
            <div class="social">
              <ul>
                <li class="social__link"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li class="social__link"><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              </ul>
            </div>
            <p class="burger-menu__title">menu</p>
          </div>
        </div>
      </header>
    </div>

 <div class="wrapper-inner breadcrumb">
	<?php
	/**
	 * Functions hooked in to storefront_before_content
	 *
	 * @hooked storefront_header_widget_region - 10
	 * @hooked woocommerce_breadcrumb - 10
	 */
	do_action( 'storefront_before_content' );
	?>
  </div>
 <main class="main">
	<div id="content" class="site-content" tabindex="-1">


		<?php
		do_action( 'storefront_content_top' );
