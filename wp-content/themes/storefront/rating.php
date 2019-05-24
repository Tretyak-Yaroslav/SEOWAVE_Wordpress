<?php
/*
Template Name: rating
*/
   ?>


  <?php get_header(); ?>
  
 
 <div class="events">
      <img class="events__bg" src="<?php echo get_template_directory_uri(); ?>/img/events-bg.png" alt="">
<div class="events-search">
    <p class="events-search__title"><?php the_title(); ?></p>
    <div class="events-search__block">
        <input type="text" placeholder="Search ...">
        <button><img src="<?php echo get_template_directory_uri(); ?>/img/search.png" alt=""></button>
    </div>
</div>


<div class="wrapper-inner">

<div class="events-filter">Filter</div>
<div class="events-filter-close">Close <img src="<?php echo get_template_directory_uri(); ?>/img/close-events.png" alt=""></div>
<div id="tabs" class="tabs blog-tabs">
        <div class="box">
            <ul class="tabs_link tabs__caption blog-tabs__link">
       
                          <li class="tab active"><a href="#">All</a></li>
                          <li class="tab "><a href="#">Winner</a></li>
                          <li class="tab "><a href="#">Losers</a></li>
                           <!-- <?php
                            $args = array(
                                'taxonomy' => 'product_cat',
                            );
                            $product_categories = get_terms( $args );
                            $count = count($product_categories);
                            if ( $count > 0 ){
                                foreach ( $product_categories as $product_category ) {
                                    $thumbnail_id = get_woocommerce_term_meta( $product_category->term_id, 'thumbnail_id', true );
                                    $item = '<li class="tab"><a href="#">'. $product_category->name . '</a></li>';
                                    echo $item;
                                }
                            }
                            ?> -->
                        </ul>
                    </div>
            
                  
                    
            <div class="tabs__content blog-tabs__content active">
									<?php
						$args = array(
						 'posts_per_page' => 3, 
						 'post_type' => 'blog' ,
						 'exclude' => 227
						);
						 if ( have_posts() ) :	query_posts($args); while (have_posts()) : the_post();?>

					<div class="top-blogger__elem">
						<div class="top-blogger__picture">
							<?php the_post_thumbnail() ?>
							<a class="top-blogger__picture-link" href="<?php echo get_post_meta($id, 'bloggers', true); ?>"> <img src="<?php echo get_template_directory_uri(); ?>/img/inst.png" alt=""> </a>
						</div>
						<div class="top-blogger__info">
							<p class="top-blogger__title"><?php the_title() ?></p>
							<p class="top-blogger__text"><?php echo mb_substr( strip_tags( get_the_content() ), 0, 100 ); ?></p>
							<a class="read-more" href="<?php print get_permalink($id, false) ?>">Read More <img src="<?php echo get_template_directory_uri(); ?>/img/line-right.png" alt=""></a>
						</div>
					</div>

					<?php endwhile; endif; wp_reset_query();?>
            </div>
                    
           
</div>
</div>
</div>
 
 
 


 
 
  <?php get_footer(); // Подключаем футер ?>