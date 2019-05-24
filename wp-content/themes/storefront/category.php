<?php get_header();?>
<main class="main">
	<div class="blog">
		<img class="blog_bg" src="<?php echo get_template_directory_uri(); ?>/img/blog__bg.png" alt="">
		<div class="wrapper-inner">
			<?php $category = get_queried_object(); ?>
			<?php $query = new WP_Query('posts_per_page=1&category__in=' . $category->term_id ); ?>
			<?php if ( $query->have_posts() ) : ?>
				<?php while ( $query->have_posts() ) : $query->the_post(); ?>
					<div class="blog-title-bloc" >
						<p class="blog__title">our blog</p>
						<div class="blog-title">
							<?php $image_url = wp_get_attachment_image_src( get_post_thumbnail_id(), 'large'); ?>
							<img class="blog-title__picture" src="<?php echo $image_url[0]; ?>" alt="<?php the_title(); ?>">
							<div class="blog-title__text-block">
								<p class="blog-title__pre"><?php $cat = get_the_category(); echo $cat[1]->cat_name; ?></p>
								<div class="blog-title__info">
									<p><?php echo get_the_date(); ?> <?php the_time(); ?></p>
									<p>Share</p>
								</div>
								<p class="blog-title__title"><?php the_title(); ?></p>
								<p class="blog-title__text"><?php the_excerpt()?></p>
								<a class="read-more" href="<?php the_permalink(); ?>">Read More <img src="<?php echo get_template_directory_uri(); ?>/img/arrow-next.png" alt=""></a>
							</div>
						</div>
					</div>
				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>
			<?php endif; ?>
			<div id="tabs" class="tabs blog-tabs">
				<div class="box">
					<p class="blog-tabs__title">articles</p>
					<?php $category = get_queried_object(); ?>
					<ul data-thiscat="<?php echo $category->term_id; ?>" class="tabs_link tabs__caption blog-tabs__link">
						<?php
						$args=array(
							'orderby' => 'name',
							'order' => 'ASC',
						);
						$categories=get_categories($args);
						foreach($categories as $category) {
							echo '<li class="tab" data-cat="' . $category->term_id . '"><a href="' . get_category_link( $category->term_id ) . '" ' . '>' . $category->name.'</a></li>';
						}
						?>
					</ul>
				</div>
				<?php $category = get_queried_object(); ?>
				<div class="tabs__content blog-tabs__content active">
					<?php $query = new WP_Query('&posts_per_page=-1&category__in=' . $category->term_id ); ?>
					<?php if ( $query->have_posts() ) : ?>
						<?php while ( $query->have_posts() ) : $query->the_post(); ?>
							<div class="tabs-elem">
								<div class="tabs-elem__picture">
									<a href="<?php the_permalink(); ?>">
										<?php echo get_the_post_thumbnail( $page->ID, 'thumbnail'); ?>
									</a>
								</div>
								<div class="tabs-elem__text-block">
									<p class="tabs-elem__pre"><?php $cat = get_the_category(); echo $cat[1]->cat_name; ?></p>
									<div class="tabs-elem__info">
										<p><?php echo get_the_date(); ?> <?php the_time(); ?></p>
										<p>Share</p>
									</div>
									<p class="tabs-elem__title"><?php the_title(); ?></p>
									<a class="read-more" href="<?php the_permalink(); ?>">Read More
										<img src="<?php echo get_template_directory_uri(); ?>/img/line-right.png" alt="">
									</a>
								</div>
							</div>
						<?php endwhile; ?>
						<?php wp_reset_postdata(); ?>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</main>
<?php get_footer();?>
