<?php
/*
Template Name: register
*/
?>
<?php get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <main class="main register-page">
        <div class="wrapper-inner">
            <div class="profile profile__details">
                <div class="review-events">
                    <p class="review-events__title"><?php the_title(); ?></p>
                    <div class="events-form">
                        <?php the_content(); ?>
                    </div>
                </div>
            </div>
        </div>
    </main>
<?php endwhile; endif; ?>
<?php get_footer(); ?>

