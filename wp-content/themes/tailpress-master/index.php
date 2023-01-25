<?php get_header(); ?>

<main class="w-full px-16 main-body" role="main"><!-- Start Main Body-->
    <div class="grid grid-flow-col main-banner">

        <div class="col-left flex items-center">
            <div id="js-mouse-1" class="col-inner">
                <div class="flex items-center mb-3">
                    <a href="#" class="btn-arrow">
                    <span class="arrow-icon">
                        <i class="gg-arrow-right"></i>
                    </span>
                        <span class="arrow-icon">
                        <i class="gg-arrow-right"></i>
                    </span>
                    </a>
                    <span class="text-white ml-3.5 block">Comes with a 30 day free trial</span>
                </div>
                <h1 class="text-white font-bold text-xl">AI<span>-</span>Powered</h1>
                <h3 class="text-white font-medium text-large mb-3">Sales Broker Platform</h3>
                <p class="text-gray-500 sub-sub-title">Automate your profits. Reduce inefficiencies.</p>
                <div class="flex mt-8 items-center">
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
                    <a href="#" class="btn-arrow ml-16">
                    <span class="arrow-icon">
                        <i class="gg-arrow-right"></i>
                    </span>
                        <span class="arrow-icon">
                        <i class="gg-arrow-right"></i>
                    </span>
                    </a>
                </div>
            </div>
        </div><!-- ./end left area -->

        <div class="col-right flex items-center">
            <div class="image-interaction">
                <img class="w-full h-auto" src="<?=IMAGES.'auto-pdf@2x.png'?>" alt="Auto Pdf">
            </div>
        </div><!-- ./end right area -->

    </div><!-- ./end main banner -->

    <div class="banner-bottom-area w-full mb-16">
        <div class="banner-bottom-holder">
            <div class="banner-bottom-inner flex">
                <div class="icon-interactions-area col-1">
                    <div class="icon-interactions">
                        <div class="relative h-full w-full">
                            <div class="js-icon">
                                <img src="<?=IMAGES.'pdf-icon.png'?>" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="flex items-center h-full w-full">
                        <div class="inner-content">
                            <strong class="mb-5 block">Never miss a commission again. Flow's AI rules engine uncovers insights, automates data entry, and identifies areas of opportunity.</strong>
                            <p>
                                Automate Data entry from PDFs, Emails, and more.<br>
                                Identify missing commissions and lost opportunities.<br>
                                Get alerts and insights on data outliers that are important to your business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- ./end banner bottom area -->

    <section class="container mx-auto py-20">
        <div class="grid grid-cols-3 gap-2">
            <div class="col-span-1 pr-4">
                <span class="uppercase text-white alignright">Selected work</span>
            </div>
            <div class="col-span-2">
                <p class="text-white text-5xl">
                    Enjoy some of our best work in immersive
                    <span class="colored-text text-purple-dark">web</span>
                    ,
                    <span class="colored-text text-turquoise-light">augmented reality</span>
                    and
                    <span class="colored-text text-yellow-light">virtual reality</span>
                    experiences
                </p>
            </div>
        </div>
    </section><!-- ./end section -->
</main><!-- End Main Body-->

<?php get_template_part( 'template-parts/home_carousel-part', 'part' ); ?>
<div id="scroll-trigger-footer">
    <section class="container mx-auto section-block">
        <h3 class="section-title uppercase text-center">Featured insights</h3>
        <div class="grid grid-cols-5 gap-4">
            <div class="grid-col col-span-2">
                <div class="box-img w-full h-full"></div>
                <a class="section-box" data-bg="https://placeimg.com/640/480/arch" href="">
                    <span class="label uppercase">Virtual reality</span>
                    <h4>Digital discoveries: how VR is reshaping the travel industry</h4>
                    <span class="link-btn">Continue reading</span>
                </a>
            </div>
            <div></div>
            <div class="grid-col col-span-2">
                <div class="box-img w-full h-full"></div>
                <a class="section-box" data-bg="https://placeimg.com/640/480/any" href="">
                    <span class="label uppercase">Virtual reality</span>
                    <h4>Business headset heads-up: Pico finishes the Quest</h4>
                    <span class="link-btn">Continue reading</span>
                </a>
            </div>
        </div>
    </section>
    <section class="container mx-auto section-block-title">
        <div class="cta-text">
            <h2 class="title-lg">
                <span>let's make</span>
                <span>great work</span>
                <span>together</span>
            </h2>
        </div>
    </section>
</div>
<?php
get_footer();
