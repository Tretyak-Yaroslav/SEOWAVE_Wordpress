<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */

?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php do_action( 'storefront_before_footer' ); ?>
   </main>
    <div class="wrapper-inner">
      <footer class="footer">

        <div class="footer-top">
          <div class="top-block">
            <p class="footer__title">get in touch</p>
          </div>
          <?php
  
  
	$args = array(
					'post_type' => 'footer'
				);
  
  if ( have_posts() ) :	query_posts($args); while (have_posts()) : the_post(); ?>
          <div class="top-block">
            <p class="top-block__title"><?php the_title();?></p>
            <p class="top-block__cont"><?php echo get_post_meta($post->ID, 'phone', true); ?></p>
            <p class="top-block__cont"><?php echo get_post_meta($post->ID, 'email', true); ?></p>
            <a class="read-more" href="<?php print get_permalink($id, false) ?>">Residential Enquiry <img src="<?php echo get_template_directory_uri(); ?>/img/line-right.png" alt=""></a>
          </div>
<?php endwhile; endif; wp_reset_query();?>
 
        </div>
        <div class="footer-top">
          <div class="top-block">
            <p class="footer__title">stay connected</p>
          </div>
          <div class="top-block">
            <p class="top-block__title">Newsletter</p>
            <?php echo do_shortcode( '[contact-form-7 id="60" title="footer form"]' ); ?>
            
          </div>



          <div class="top-block">
            <p class="top-block__title">Follow Us</p>
            <ul>
              <ul>
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              </ul>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="bottom-block">
            <a class="footer__title" href="/"><?php echo get_bloginfo( 'name' ) ; ?></a>
          </div>
          <div class="bottom-block">
           <?php wp_nav_menu( array('menu' => '21' )); ?>
          </div>
        </div>
        <div class="bottom-sitebar">
          <p>&#169; <?php echo date("Y"); ?> <a href="#">Group of companies seowave</a> </p>
        </div>
    </footer>
  </div>





</div><!-- #page -->

<?php wp_footer(); ?>
 <script src="<?php echo get_template_directory_uri(); ?>/js/lightbox/js/lightbox-2.6.min.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/slick/slick/slick.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
</body>
</html>
