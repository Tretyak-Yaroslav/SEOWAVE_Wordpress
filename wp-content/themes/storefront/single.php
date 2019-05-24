<?php get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<main class="main">
	<div class="blog-article">
		<div class="blog-article__bg">
			<?php echo get_the_post_thumbnail( $page->ID, 'large'); ?>
			<div></div>
		</div>
		<div class="blog-article-title">
			<p class="tabs-elem__pre"><?php $cat = get_the_category(); echo $cat[1]->cat_name; ?></p>
			<div class="tabs-elem__info">
				<p><?php echo get_the_date(); ?></p>
				<p>Share</p>
			</div>
			<p class="tabs-elem__title"><?php the_title(); ?></p>
		</div>
		<div class="blog-inside">
			<p class="blog-inside__title"><?php the_field('subtitlesingle'); ?></p>
			<?php the_content(); ?>
		</div>
	</div>
</main>
<?php endwhile; endif; ?>
<?php get_footer(); ?>

