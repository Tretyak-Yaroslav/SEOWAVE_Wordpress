<?php
/*
Template Name: Template for home page
*/
 $px = new WP_Query('cat=24&orderby=date&posts_per_page=1');


 $posts = get_posts("category=24&orderby=date&numberposts=1"); 

  $pc = new WP_Query('cat=24&orderby=date&posts_per_page=1');  $pc->the_post();

get_header();
?>
		<main class="main">
			<div class="container-slider">
				<div class="slider-main-for">
					<?php
						$args = array(
						 'post_type' => 'product',
						 'product_tag' => 'main-slider'
						);

						 if ( have_posts() ) :	query_posts($args); while (have_posts()) : the_post();?>

					<div> <?php echo get_the_post_thumbnail($id); ?>
						<div class="wrapper-text-slider">
							<div class="slider-main__by">
								<p>By <span><?php echo get_post_meta( $post->ID, 'slider_name', true ); ?></span></p>
								<p><?php echo get_post_meta( $post->ID, 'slider_location', true ); ?></p>
							</div>
							<div class="slider-main__about">
								<p class="about__title">About</p>
								<p class="about__text"><?php echo apply_filters( 'woocommerce_short_description', $post->post_excerpt ) ?></p>
								<a class="read-more" href="<?php print get_permalink($id, false) ?>">Read More <img src="<?php echo get_template_directory_uri(); ?>/img/line-right.png" alt=""></a>
							</div>
						</div>
					</div>
					<?php endwhile; endif; wp_reset_query();?>
				</div>
				<div class="slider-main-nav">
					
					<?php
						$args = array(
						 'post_type' => 'product',
						 'product_tag' => 'main-slider'
						);

						 if ( have_posts() ) :	query_posts($args); while (have_posts()) : the_post();?>
					<div> <?php echo get_the_post_thumbnail($id); ?> </div>
					
					<?php endwhile; endif; wp_reset_query();?>
				</div>
			</div>
			<div class="main-first-container">
				<img class="main-first__bg" src="<?php echo get_template_directory_uri(); ?>/img/m-first-bg.png" alt="">
				<div class="wrapper-inner">
						
					<?php
						$args = array(
						 'posts_per_page' => 1, 
						 'post_type' => 'product',
						 'product_cat' => 'trainings'
						);

						 if ( have_posts() ) :	query_posts($args); while (have_posts()) : the_post();?>
					
					<div class="main-first">
						
						<div class="main-first__picture"><?php echo get_the_post_thumbnail($id); ?></div>
						<div class="main-first__text-block">
							<p class="main-first__pre"><?php echo $product->get_categories( ', ', ' ' . _n( ' ', '  ', $cat_count, 'woocommerce' ) . ' ', ' ' ); ?></p>
							<div class="main-first__info">
								<p><?php echo date("d.m.Y", strtotime(get_post_meta( $id, 'date', true))) ?></p>
								<p class="share-link" data-id="<?php echo get_the_ID($id)?>">Share</p>
							</div>
							<p class="main-first__title"><?php the_title(); ?></p>
							<p class="main-first__text"><?php the_excerpt(); ?></p>
							<a class="read-more" href="<?php print get_permalink($id, false) ?>">Read More <img src="<?php echo get_template_directory_uri(); ?>/img/line-right.png" alt=""></a>
						</div>


					</div>
					
							<div class="share-popup_<?php echo get_the_ID($id) ?>">
								<span class="close-popup"></span>
								<div id="share">
								  <div class="social" data-url="<?php the_permalink($id, false);?>" data-title="<?php the_title($id);?>">
									<a class="push facebook" data-id="fb"><i class="fa fa-facebook"></i></a>
									<a class="push twitter" data-id="tw"><i class="fa fa-twitter"></i></a>
								  </div>
								</div>
							</div>
					<?php endwhile; endif; wp_reset_query();?>
						
					<?php
						$args = array(
						 'posts_per_page' => 1, 
						 'post_type' => 'product',
						 'product_cat' => 'insta-events'
						);

						 if ( have_posts() ) :	query_posts($args); while (have_posts()) : the_post();?>
					
					<div class="main-first">
						
						<div class="main-first__picture"><?php echo get_the_post_thumbnail($id); ?></div>
						<div class="main-first__text-block">
							<p class="main-first__pre"><?php echo $product->get_categories( ', ', ' ' . _n( ' ', '  ', $cat_count, 'woocommerce' ) . ' ', ' ' ); ?></p>
							<div class="main-first__info">
								<p><?php echo date("d.m.Y", strtotime(get_post_meta( $id, 'date', true))) ?></p>
								<p class="share-link" data-id="<?php echo get_the_ID($id)?>">Share</p>
							</div>
							<p class="main-first__title"><?php the_title(); ?></p>
							<p class="main-first__text"><?php the_excerpt(); ?></p>
							<a class="read-more" href="<?php print get_permalink($id, false) ?>">Read More <img src="<?php echo get_template_directory_uri(); ?>/img/line-right.png" alt=""></a>
						</div>


					</div>
					
							<div class="share-popup_<?php echo get_the_ID($id) ?>">
								<span class="close-popup"></span>
								<div id="share">
								  <div class="social" data-url="<?php the_permalink($id, false);?>" data-title="<?php the_title($id);?>">
									<a class="push facebook" data-id="fb"><i class="fa fa-facebook"></i></a>
									<a class="push twitter" data-id="tw"><i class="fa fa-twitter"></i></a>
								  </div>
								</div>
							</div>
					<?php endwhile; endif; wp_reset_query();?>
				</div>
			</div>
			<div class="recommended">
				<div class="recommended__title">
					<p> we recommended<br>visit this<br>events</p>
				</div>
				<div class="recommended__container">
											<?php
						$args = array(
						 'posts_per_page' => 3, 
						 'post_type' => 'product',
						 'product_tag' => 'recomended'
						);
						 if ( have_posts() ) :	query_posts($args); while (have_posts()) : the_post();?>
					<img class="recommended__picture" id="item-<?php echo get_the_ID($id)?>" src="<?php echo get_the_post_thumbnail_url() ?>">
					
					<div class="share-popup_<?php echo get_the_ID($id) ?>">
						<span class="close-popup"></span>
						<div id="share">
						  <div class="social" data-url="<?php the_permalink($id, false);?>" data-title="<?php the_title($id);?>">
							<a class="push facebook" data-id="fb"><i class="fa fa-facebook"></i></a>
							<a class="push twitter" data-id="tw"><i class="fa fa-twitter"></i></a>
						  </div>
						</div>
					</div>
					
						<?php endwhile; endif; wp_reset_query();?>
					<div class="recommended__slider">
						<span class="recommended__paging2"></span>
						<div class="recom-slider">
						<?php
						$args = array(
						 'posts_per_page' => 3, 
						 'post_type' => 'product',
						 'product_tag' => 'recomended'
						);

						 if ( have_posts() ) :	query_posts($args); while (have_posts()) : the_post();?>
							<div class="recom-elem" data-id="<?php echo get_the_ID($id) ?>">
								<p class="recom-elem__pre"><?php echo $product->get_categories( ', ', ' ' . _n( ' ', '  ', $cat_count, 'woocommerce' ) . ' ', ' ' ); ?></p>
								<div class="recom-elem__info">
									<p><?php echo date("d.m.Y", strtotime(get_post_meta( $id, 'date', true))) ?></p>
									<p class="share-link" data-id="<?php echo get_the_ID($id)?>">Share</p>
								</div>
								<p class="recom-elem__title"><?php echo get_the_title($id); ?></p>
								<p class="recom-elem__text"><?php echo get_the_excerpt($id); ?></p>
								<a class="recom-elem__read-more" href="<?php print get_permalink($id, false) ?>">Read More </a>

							</div>
						<?php endwhile; endif; wp_reset_query();?>
							
						</div>
						<span class="recommended__paging"></span>
					</div>
				</div>
			</div>
			<div class="wrapper-inner">
				<div class="our-values">
					<p class="our-values__title">our values</p>
					<div class="our-values__elems">
						<div class="our-values__elem">
							<p>60</p>
							<span>events</span>
						</div>
						<div class="our-values__elem">
							<p>5</p>
							<span>cities</span>
						</div>
						<div class="our-values__elem">
							<p>10M</p>
							<span>peoples</span>
						</div>
					</div>
				</div>
			</div>
			<div class="top-bloggers">
				<?php 
					$blog_description = get_post( 227 );
					$blog_title = $blog_description->post_title;
					$blog_content = $blog_description->post_content
				?>
				<div class="top-bloggers__title"><?php echo $blog_title ?></div>
				<div class="top-bloggers__sybc">
					<p><?php echo $blog_content ?></p>
				</div>
				<img class="top-bloggers__bg" src="<?php echo get_template_directory_uri(); ?>/img/top-blog-bg.png" alt="">
				<div class="top-blogger">
					
					<?php
						$args = array(
						 'post_type' => 'blog' ,
						 'exclude' => 227
						);
						 if ( have_posts() ) :	query_posts($args); while (have_posts()) : the_post();?>
                        <div class="tabs-elem">
                            <div class="tabs-elem__picture"><?php the_post_thumbnail() ?>
                                <div class="like-hover">
                                    <div class="ticket-hover"> <a href=""></a> </div>
                                    <div class="ticket-hover"> <a href=""></a> </div>
                                </div></div>
                            <div class="tabs-elem__text-block">
                                <div class="tabs-elem__like">
                                    <p>1120</p>
                                    <p>3</p>
                                </div>
                                <p class="tabs-elem__title"><?php the_title() ?></p>
                                <div class="tabs-elem__social">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>

                                </div>
                                <p class="tabs-elem__text"><?php echo mb_substr( strip_tags( get_the_content() ), 0, 100 ); ?></p>

                                <a class="read-more" href="<?php print get_permalink($id, false) ?>">Read More <img src="<?php echo get_template_directory_uri(); ?>/line-right.png" alt=""></a>

                            </div>
                        </div>

					<?php endwhile; endif; wp_reset_query();?>
				</div>
				<a class="top-bloggers__more" href="<?php echo get_post_type_archive_link('blog') ?>">see all raitings</a>
			</div>
			<div class="photo-reports">
				<img class="photo-reports__bg" src="<?php echo get_template_directory_uri(); ?>/img/photo-reports__bg.png" alt="">
				<div class="wrapper-inner">
					<?php global $post;
					$gallery_description = get_post( 257 );
					$gallery_name = $gallery_description->post_title;
					list($word1, $word2, $word3) = split('[ ]', $gallery_name);
					$gallery_content = $gallery_description->post_content;
					$gallery_link = $gallery_description->post_link
					?>
					
					
					<div class="reports-info">
						<p class="reports-info__title">
						<?php echo "$word1 <span>$word2 $word3</span>" ?>
						</p>
						<p class="reports-info__text"><?php echo get_post_meta( 257, 'short_description', true ); ?></p>
						<a class="read-more" href="<?php $gallery_link ?>">View All Photos <img src="<?php echo get_template_directory_uri(); ?>/img/arrow-next.png" alt=""></a>
					</div>
					<div class="reports__picture">
						<img src="<?php echo get_template_directory_uri(); ?>/img/Pic/andrew-gaines-287085-unsplash.jpg" alt="">
						<img src="<?php echo get_template_directory_uri(); ?>/img/Pic/boxhead-683623-unsplash.jpg" alt="">
						<img src="<?php echo get_template_directory_uri(); ?>/img/Pic/ethan-hu-593110-unsplash.jpg" alt="">
					</div>
				</div>
			</div>
		</main>
<div class="overflow"></div>
<?php get_footer();?>