<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<?php wp_head(); ?>
</head>

<body <?php body_class( 'text-gray-900 antialiased' ); ?> >
<?php get_template_part( 'template-parts/cursor_shapes', 'part' ); ?>
<div data-simplebar id="smooth-scroll" class="smooth-scroll" data-scroll-container>
    <div id="smooth-scroll-content" class="smooth-scroll-content">
    <?php do_action( 'tailpress_site_before' ); ?>
    <div id="page" class="flex flex-col">

        <?php do_action( 'tailpress_header' ); ?>

        <header class="text-white">

            <div class="w-full px-16 py-10">
                <div class="lg:flex lg:justify-between lg:items-center">
                    <div class="flex justify-between items-center">
                        <div>
                            <img src="<?php echo site_url();?>/wp-content/themes/tailpress-master/resources/images/flow-logo-dk-bg.svg" style="height: 48px;">
                        </div>

                        <div class="lg:hidden">
                            <a href="#" aria-label="Toggle navigation" id="primary-menu-toggle">
                                <svg viewBox="0 0 20 20" class="inline-block w-6 h-6" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
                                        <g id="icon-shape">
                                            <path d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z"
                                                  id="Combined-Shape"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <nav class="flex justify-center">
                        <?php
                        wp_nav_menu(
                            array(
                                'container_id'    => 'primary-menu',
                                'container_class' => 'hidden mt-4 p-4 lg:mt-0 lg:p-0 lg:bg-transparent lg:block',
                                'menu_class'      => 'lg:flex lg:-mx-4',
                                'theme_location'  => 'primary',
                                'li_class'        => 'lg:mx-8',
                                'fallback_cb'     => false,
                            )
                        );
                        ?>
                    </nav>
                    <div class="flex justify-end">
                        <a href="#" class="nav-cta button button-outlined" data-button-svg>
                            <span class="button-inner">
                                <span class="button-inner-static">Request Demo</span>
                                <span class="button-inner-hover">Request Demo</span>
                            </span>
                            <span>
                                <svg class="button-outlined-bg" enable-background="new 0 0 155 56" viewBox="0 0 155 56" xmlns="http://www.w3.org/2000/svg">
                                  <clipPath id="buttonSvg_TUNNATLSL">

                                  <path class="button-stroke" d="m127 1c14.9 0 27 12.1 27 27s-12.1 27-27 27h-99c-14.9 0-27-12.1-27-27s12.1-27 27-27zm0-1h-99c-15.5 0-28 12.5-28 28 0 15.5 12.5 28 28 28h99c15.5 0 28-12.5 28-28 0-15.5-12.5-28-28-28z"></path>

                                  </clipPath>
                                    <g clip-path="url(#buttonSvg_TUNNATLSL)">
                                      <g class="button-circles">
                                        <g class="button-circles-o">
                                          <circle pathLength="1" class="button-circle -layer-1" stroke-width="155" cx="77.5" cy="28" r="77.5"></circle>
                                          <circle pathLength="1" class="button-circle -layer-2" stroke-width="155" cx="77.5" cy="28" r="77.5"></circle>
                                          <circle pathLength="1" class="button-circle -layer-3" stroke-width="155" cx="77.5" cy="28" r="77.5"></circle>
                                          <circle pathLength="1" class="button-circle -layer-4" stroke-width="155" cx="77.5" cy="28" r="77.5"></circle>
                                        </g>
                                        <circle pathLength="1" class="button-circle -hover" stroke-width="155" cx="77.5" cy="28" r="77.5"></circle>
                                      </g>
                                    </g>
                                </svg>
                            </span>
                        </a>
                    </div>

                    <?php
    //				wp_nav_menu(
    //					array(
    //						'container_id'    => 'call-to-action',
    //						'container_class' => 'hidden mt-4 p-4 lg:mt-0 lg:p-0 lg:bg-transparent lg:block',
    //						'menu_class'      => 'lg:flex lg:-mx-4',
    //						'theme_location'  => 'call-to-action',
    //						'li_class'        => 'bg-indigo-700 px-8 py-2 rounded-full hover:bg-indigo-500',
    //						'fallback_cb'     => false,
    //					)
    //				);
                    ?>
                </div>
            </div>
        </header>

        <div id="content" class="site-content flex-grow">
            <?php if ( is_front_page() ) { ?>
                <!-- Start introduction -->
                <!--<div class="container mx-auto my-12 border-b pb-12">
                    <h1 class="font-bold text-lg text-secondary uppercase">TailPress</h1>
                    <h2 class="text-3xl lg:text-7xl tracking-tight font-extrabold my-4">Rapidly build your WordPress theme
                        with <a href="https://tailwindcss.com" class="text-primary">Tailwind CSS</a>.</h2>
                    <p class="max-w-screen-lg text-gray-700 text-lg font-medium mb-10">TailPress is your go-to starting
                        point for developing WordPress themes with TailwindCSS and comes with basic block-editor support out
                        of the box.</p>
                    <a href="https://github.com/jeffreyvr/tailpress"
                        class="w-full sm:w-auto flex-none bg-gray-900 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">View
                        on Github</a>
                </div>-->
                <!-- End introduction -->
            <?php } ?>

            <?php do_action( 'tailpress_content_start' ); ?>

            <main>
