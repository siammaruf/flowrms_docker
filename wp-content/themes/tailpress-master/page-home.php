<?php get_header(); ?>

    <div class="container my-8 mx-auto">

        <?php if ( have_posts() ) : ?>

            <?php
            while ( have_posts() ) :
                the_post();
                ?>

                <?php the_content(); ?>
            
            <?php endwhile; ?>

        <?php endif; ?>

    </div>

<?php
get_footer();