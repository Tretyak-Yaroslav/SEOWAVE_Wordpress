<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
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

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>

<div class="tabs-elem">
    <div class="tabs-elem__picture">
      <?php if ( has_post_thumbnail() ) : ?>
   <img src="<?php the_post_thumbnail_url(); ?>" alt="">
<?php endif; ?>
  <a href="<?php echo get_permalink($product->post->id); ?>">    <div class="ticket-hover"> <img src="<?php echo get_template_directory_uri(); ?>/img/ticket-c.png" alt=""> </div></a></div>
    <div class="tabs-elem__text-block">
        <?php echo wc_get_product_category_list( $product->get_id(), ', ', '<p class="tabs-elem__pre">' . _n( '', '', count( $product->get_category_ids() ), 'woocommerce' ) . ' ', '</p>' ); ?>
            <div class="tabs-elem__info">
              <p><?php the_field('date'); ?></p>
              <p>Share</p>
            </div>
           
       <p class="tabs-elem__title">    <?php if ( the_title() ) : ?></p>
   <p class="tabs-elem__title"><?php the_title(); ?></p>
<?php endif; ?>
        
           	<div class="prices">
                  
                      	<?php if ( $stock = $product->get_stock_quantity() ) : ?>
	<p>Left <?php echo $stock; ?> tickets</p>
<?php endif; ?>
                    	<?php if ( $price_html = $product->get_price_html() ) : ?>
	<p><?php echo $price_html; ?></p>
<?php endif; ?>
                    </div>
	
    </div>
       </div>