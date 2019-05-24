<?php
/*
Template Name: page-contact
*/
   ?>


  <?php get_header(); ?>


<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

  <div class="contacts">

    <div class="contacts-forma">
      <p class="contacts-forma__title">
        <?php the_title();?>
      </p>
      <div class="contacts-forma__text">
        <?php the_content(); ?>
      </div>
       <?php echo do_shortcode( '[contact-form-7 id="74" title="Contact"]' ); ?>
   
    </div>
    <div class="contacts__picture">
      <img src="<?php $thumb_id = get_post_thumbnail_id(); $thumb_url = wp_get_attachment_image_src($thumb_id,'', false); echo $thumb_url[0]; ?>">
    </div>



  </div>

<?php endwhile; ?>








  <?php get_footer(); // Подключаем футер ?>
