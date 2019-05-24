<?php
/*
Template Name: page-about
*/
   ?>


  <?php get_header(); ?>
  
 





        <div class="about_us">
<div class="wrapper-inner">

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

    <div class="about-us">
          <img src="<?php $thumb_id = get_post_thumbnail_id(); $thumb_url = wp_get_attachment_image_src($thumb_id,'', false); echo $thumb_url[0]; ?>">
        <div class="about-us__green"></div>
        <div class="about-us__info">
            <p class="about-us__title"> <?php the_title();?></p>
            <div class="about-us__text"><?php the_content(); ?></div>
        </div>
        <div class="about-us__figure">
            <div class="white"></div>
            <div class="orange"></div>
        </div>
    </div>

<?php endwhile; ?>

         <?php
  
  
	$args = array(
					'post_type' => 'abouts-us',
    'p' => '81'
				);
  
  if ( have_posts() ) :	query_posts($args); while (have_posts()) : the_post(); ?>
<div class="what-we-do">
    <div class="what-we-do__picture">
        <img src="<?php $thumb_id = get_post_thumbnail_id(); $thumb_url = wp_get_attachment_image_src($thumb_id,'', false); echo $thumb_url[0]; ?>">
    </div>
    <div class="what-we-do__info">
        <p class="what-we-do__title"><?php the_title();?></p>
        <div class="what-we-do__text"><?php the_content(); ?></div>
    </div>
</div>
<?php endwhile; endif; wp_reset_query();?>
</div>

         <?php
  
  
	$args = array(
					'post_type' => 'abouts-us',
    'p' => '83'
				);
  
  if ( have_posts() ) :	query_posts($args); while (have_posts()) : the_post(); ?>

<div class="partito">
    <img class="partito__bg" src="<?php echo get_template_directory_uri(); ?>/img/partito__bg.png" alt="">
        <div class="wrapper-inner">

<div class="partito__info">
    <p class="partito__title"><?php the_title();?></p>
    <div class="partito__text"><?php the_content(); ?></div>
</div>

<div class="partito__video">
    <img class="partito__video-pic" src="<?php $thumb_id = get_post_thumbnail_id(); $thumb_url = wp_get_attachment_image_src($thumb_id,'', false); echo $thumb_url[0]; ?>">
    <iframe  src="https://www.youtube.com/embed/<?php echo get_post_meta($post->ID, 'video', true); ?>" frameborder="0" autoplay="1" allowfullscreen></iframe>
    <div class="partito__video-hover">
        <img src="<?php echo get_template_directory_uri(); ?>/img/play.png" alt="">
        <p>watch showreal</p>
    </div>
</div>



</div>
</div>
<?php endwhile; endif; wp_reset_query();?>

</div>







  <?php get_footer(); // Подключаем футер ?>