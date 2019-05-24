<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;


global $product;


echo wc_get_stock_html( $product ); // WPCS: XSS ok.




$short_description = apply_filters( 'woocommerce_short_description', $post->post_excerpt );

if ( ! $short_description ) {
	return;
}
/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked wc_print_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
?>


 <img class="events-tickets-bg" src="<?php echo get_template_directory_uri(); ?>/img/events-tickets-bg.png" alt="">
            <div class="wrapper-inner">
        <div class="events-tickets">
<p class="events-tickets__pre"><?php echo $product->get_categories( ', ', ' ' . _n( ' ', '  ', $cat_count, 'woocommerce' ) . ' ', ' ' ); ?></p>
 
 <p class="events-tickets__title"> <?php if ( the_title() ) : ?></p>
   <p class="events-tickets__title"><?php the_title(); ?></p>
<?php endif; ?>
<div class="events-tickets__picture">
        <?php if ( has_post_thumbnail() ) : ?>
   <img src="<?php the_post_thumbnail_url(); ?>" alt="">
<?php endif; ?>
    <img class="play-v" src="<?php echo get_template_directory_uri(); ?>/img/play.png" alt="">
</div>

<div class="events-tickets__info">
    <div class="tickets-info__text">
	<?php echo $short_description; // WPCS: XSS ok. ?>
    </div>
    <div class="tickets-info__price">
        <p class="tickets-price__bg">Cart</p>
        <div class="blog-title__info">
			<p><?php echo date("d.m.Y", strtotime(get_post_meta( $id, 'date', true))) ?></p>
            <p>Share</p>
        </div>
            <p class="tickets-price__prices"><?php echo $product->get_price_html(); ?></p>
              
              <?php if ( $product->is_in_stock() ) : ?>

	<?php do_action( 'woocommerce_before_add_to_cart_form' ); ?>

	<form class="cart" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="post" enctype='multipart/form-data'>
		<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>


		<button type="submit" name="add-to-cart" value="<?php echo esc_attr( $product->get_id() ); ?>" class="read-more"><?php echo esc_html( $product->single_add_to_cart_text() ); ?><img src="<?php echo get_template_directory_uri(); ?>/img/arrow-next.png" alt=""></button>

		<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>
	</form>

	<?php do_action( 'woocommerce_after_add_to_cart_form' ); ?>

<?php endif; ?>
    </div>
    </div>
</div>








	<?php



		do_action( 'woocommerce_after_single_product_summary' );
	?>


</div>
