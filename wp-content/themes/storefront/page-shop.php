<?php
/*
Template Name: page-shop
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
            <p class="blog-tabs__title">Typology</p>
            <ul class="tabs_link tabs__caption blog-tabs__link">
       
                          <li class="tab active"><a href="#">All</a></li>
                           <?php
                            $args = array(
                                'taxonomy' => 'product_cat',
                                'orderby'    => 'count',
                                'order'      => 'DESC',
                                'hide_empty' => false
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
                            ?>
                      
                        </ul>
                    </div>
            
                  
                    
            <div class="tabs__content blog-tabs__content active">
  <?php echo do_shortcode('[products]');?>
            </div>
                    <div class="tabs__content blog-tabs__content">
           <?php echo do_shortcode('[product_category per_page="4" orderby="date" order="desc" category="insta-events"]');?> 
            </div>
                    <div class="tabs__content blog-tabs__content">
            <?php echo do_shortcode('[product_category per_page="4" orderby="date" order="desc" category="business-events"]');?>   
            </div>
                    <div class="tabs__content blog-tabs__content">
           <?php echo do_shortcode('[product_category per_page="4" orderby="date" order="desc" category="trainings"]');?>  
            </div>
           
                  </div>



                  <a class="top-bloggers__more" href="#">See more</a>










                </div>
</div>
 
 
 


 
 
  <?php get_footer(); // Подключаем футер ?>