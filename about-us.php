<?php include('header-en.php'); ?>

<style>
  /* 1) Hide the stuck loader overlay in static export */
  .nectar-slider-loading { display: none !important; }

  /* 2) Make sure the slider text layer is actually visible and above the texture */
  .content, .ns-heading-el {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    position: relative;
    z-index: 3;
  }

  /* 3) Prevent the video/texture overlay from sitting above the text */
  .video-texture { position: relative; z-index: 1; pointer-events: none; }

  /* 4) Ensure the two words stack cleanly (optional) */
  .ns-heading-el span { display: block; }

  /* 5) Fallback color in case theme uses gradient/clip-text (static exports can render it transparent) */
  .ns-heading-el { color: #111 !important; mix-blend-mode: normal !important; }
</style>

<style>
  /* Make Nectar animated/lazy images visible in static export */
  .img-with-animation,
  .img-with-animation img,
  .nectar-lazy {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
  }
  .hover-wrap, .hover-wrap-inner {
    opacity: 1 !important;
    transform: none !important;
  }
</style>

<style>
  /* Left-align just this list (even inside centered containers) */
  .agro-left {
    text-align: left !important;
    margin: 0;
    padding-left: 1.25em;
  }
  .agro-left li {
    text-align: left !important;
    list-style: disc;
    list-style-position: outside;
  }
</style>

<style>
  /* === Map + Country list responsive layout (scoped) === */
  .about-map-row .row_col_wrap_12 {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .about-map-row .row_col_wrap_12 .col { float: none !important; }

  .about-map-row .col-img,
  .about-map-row .col-list {
    width: 100%;
  }

  /* Desktop/laptop: list left (order 1), image right (order 2) */
  @media (min-width: 992px) {
    .about-map-row .col-list { order: 1; width: 41.6667%; padding-left: 40px; }
    .about-map-row .col-img  { order: 2; width: 58.3333%; }
  }

  /* === Country grid inside the list column === */
  .about-map-row .country-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* Mobile: 2 per row */
    gap: 18px 24px;
    text-align: left;
  }
  @media (min-width: 992px) {
    .about-map-row .country-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr)); /* Laptop: 3 per row */
    }
  }
  .about-map-row .country-item h4 {
    margin: 0 0 6px 0;
    color: #3f9c35;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.15;
  }
  .about-map-row .country-item ul {
    margin: 0;
    padding-left: 1.1em;
    color: #3f9c35;
    font-size: 14px;
  }
  .about-map-row .country-item ul li {
    list-style: disc;
    line-height: 1.45;
  }

  /* Optional: tighten spacing on very small phones */
  @media (max-width: 480px) {
    .about-map-row .col-list { padding-left: 0; }
  }
</style>

<script>
/* Hydrate Salient's lazy images for static pages (no JS loader) */
(function() {
  function hydrateNectarLazy() {
    document.querySelectorAll('img[data-nectar-img-src]').forEach(function(img){
      var src = img.getAttribute('data-nectar-img-src');
      if (src) img.setAttribute('src', src);
      var srcset = img.getAttribute('data-nectar-img-srcset');
      if (srcset) img.setAttribute('srcset', srcset);
      img.removeAttribute('data-nectar-img-src');
      img.removeAttribute('data-nectar-img-srcset');
      img.classList.remove('nectar-lazy','skip-lazy');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hydrateNectarLazy);
  } else {
    hydrateNectarLazy();
  }
})();
</script>

</div><div id="ajax-content-wrap">
<div class="container-wrap">
<div class="container main-content">
<div class="row">

<!-- ======= HERO SLIDER (kept) ======= -->
<div id="fws_68d15c3d96557" data-column-margin="none" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top-level full-width-ns full-width-section top_margin_-50px" style="padding-top: 0px; padding-bottom: 0px;">
  <div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div>
  <div class="row_col_wrap_12 col span_12 dark left">
    <div class="vc_col-sm-12 vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
      <div class="vc_column-inner">
        <div class="wpb_wrapper">
          <style>
            @media only screen and (min-width: 1300px) { #nectar-slider-instance-1, #nectar-slider-instance-1 .swiper-container{height:700px;} }
            @media only screen and (max-width: 1299px) { #nectar-slider-instance-1, #nectar-slider-instance-1 .swiper-container{height:583.33333333333px;} }
            @media only screen and (max-width: 1000px) { #nectar-slider-instance-1, #nectar-slider-instance-1 .swiper-container{height:500px;} }
            @media only screen and (max-width: 690px)  { #nectar-slider-instance-1, #nectar-slider-instance-1 .swiper-container{height:259.25925925926px;} }
          </style>
          <div data-midnight="nectar-slider" class="parallax_slider_outer">
            <div data-transition="slide" data-overall_style="classic" data-flexible-height="" data-animate-in-effect="none" data-fullscreen="false" data-button-sizing="regular" data-button-styling="btn_with_count" data-autorotate="" data-parallax="true" data-parallax-disable-mobile="" data-caption-trans="fade_in_from_bottom" data-parallax-style="bg_only" data-bg-animation="none" data-full-width="true" class="nectar-slider-wrap" id="nectar-slider-instance-1">
              <div class="swiper-container" data-tho="auto" data-tco="auto" data-pho="auto" data-pco="auto" data-loop="false" data-height="700" data-min-height="" data-arrows="false" data-bullets="false" data-bullet_style="see_through" data-bullet_position="bottom" data-desktop-swipe="false" data-settings="">
                <div class="swiper-wrapper">
                  <div class="swiper-slide white-text-slide" data-desktop-content-width="auto" data-tablet-content-width="auto" data-bg-alignment="top" data-color-scheme="light" data-x-pos="left" data-y-pos="middle">
                    <div class="slide-bg-wrap">
                      <div class="image-bg" style="background-image: url(https://agrodova.es/wp-content/uploads/2022/02/CABECERA_ABOUTUS_DESKTOP-1.jpg);">&nbsp;</div>
                    </div>
                    <div class="container">
                      <div class="content">
                        <h2 class="ns-heading-el"><span>INNOVATION IN</span><span>PLANT VARIETIES</span></h2>
                      </div>
                    </div>
                    <div class="video-texture"><span class="ie-fix"></span></div>
                  </div>
                </div>
                <div class="nectar-slider-loading"><span class="loading-icon none"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile slider -->
    <div class="vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
      <div class="vc_column-inner">
        <div class="wpb_wrapper">
          <style>
            #nectar-slider-instance-2, #nectar-slider-instance-2 .swiper-container{min-height:550px;}
            #nectar-slider-instance-2, #nectar-slider-instance-2 .swiper-container{height:calc( 550 * 100vw / 1600 );}
          </style>
          <div data-midnight="nectar-slider" class="parallax_slider_outer">
            <div data-transition="slide" data-overall_style="classic" data-flexible-height="true" data-animate-in-effect="none" data-fullscreen="false" class="nectar-slider-wrap" id="nectar-slider-instance-2">
              <div class="swiper-container" data-loop="false" data-height="550" data-min-height="550" data-arrows="false" data-bullets="false">
                <div class="swiper-wrapper">
                  <div class="swiper-slide white-text-slide" data-bg-alignment="center" data-color-scheme="light" data-x-pos="left" data-y-pos="middle">
                    <div class="slide-bg-wrap">
                      <div class="image-bg" style="background-image: url(https://agrodova.es/wp-content/uploads/2022/02/CABECERA_ABOUTUS_MOBILE-1.jpg);">&nbsp;</div>
                    </div>
                    <div class="container">
                      <div class="content">
                        <h2 class="ns-heading-el"><span>INNOVATION IN</span><span>PLANT VARIETIES</span></h2>
                      </div>
                    </div>
                    <div class="video-texture"><span class="ie-fix"></span></div>
                  </div>
                </div>
                <div class="nectar-slider-loading"><span class="loading-icon none"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ======= INTRO TEXT (kept) ======= -->
<div id="fws_68d15c3da5eb5" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_65px right_padding_8pct left_padding_8pct right_padding_phone_0px left_padding_phone_0px" style="padding-top:0; padding-bottom:0;">
  <div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div>
  <div class="row_col_wrap_12 col span_12 dark left">
    <div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone">
      <div class="vc_column-inner">
        <div class="wpb_wrapper">
          <div class="wpb_text_column wpb_content_element">
            <div class="wpb_wrapper" style="margin-top:30px;">
              <p class="color-green subtitle-big">Agrodova is a global leader in the agri-food sector, specializing in breeding the next generations of berry varieties: blueberries, raspberries, strawberries and blackberries.</p>
              <p>Apart from berries, Agrodova has also substantial experience and a long-standing tradition in other products such as garlic, asparagus or avocado.</p>
              <p>Our mission is to develop unique and superior varieties through a mix of traditional breeding methods and modern technology, and to make these new genetics available to our clients through our efficient and top-quality nursery operations. Exciting end consumers all over the world through a fantastic taste and the healthy properties of our products is what drives our daily activities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ======= KPIs STRIP (kept) ======= -->
<div id="fws_68d15c3da6c3d" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_65px" style="padding-top:0; padding-bottom:0;">
  <div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div>
  <div class="row_col_wrap_12 col span_12 dark left">
    <div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone">
      <div class="vc_column-inner">
        <div class="wpb_wrapper">
          <div id="fws_68d15c3da90d5" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row">
            <div class="row-bg-wrap"><div class="row-bg"></div></div>
            <div class="row_col_wrap_12_inner col span_12 center">

              <!-- Employees -->
              <div class="vc_col-sm-1/5 vc_col-xs-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone">
                <div class="vc_column-inner"><div class="wpb_wrapper">
                  <div class="img-with-aniamtion-wrap center" data-max-width="100%" data-shadow="none" data-animation="fade-in">
                    <div class="inner"><div class="hover-wrap"><div class="hover-wrap-inner">
                      <img decoding="async" class="img-with-animation skip-lazy about-img nectar-lazy" data-delay="0" height="184" width="155" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/employees.png" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 155 184'/%3E" alt="Employees"/>
                    </div></div></div>
                  </div>
                  <div class="wpb_raw_code wpb_content_element wpb_raw_html"><div class="wpb_wrapper">
                    <div class="counter-space"><div class="counter-about"><b>+<span class="counter">7,000</span></b><br> employees</div></div>
                  </div></div>
                </div></div>
              </div>

              <!-- Present in 25 countries -->
              <div class="vc_col-sm-1/5 vc_col-xs-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone">
                <div class="vc_column-inner"><div class="wpb_wrapper">
                  <div class="img-with-aniamtion-wrap center" data-max-width="100%" data-shadow="none" data-animation="fade-in">
                    <div class="inner"><div class="hover-wrap"><div class="hover-wrap-inner">
                      <img decoding="async" class="img-with-animation skip-lazy about-img nectar-lazy" data-delay="0" height="184" width="155" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/present_in.png" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 155 184'/%3E" alt="Countries"/>
                    </div></div></div>
                  </div>
                  <div class="wpb_raw_code wpb_content_element wpb_raw_html"><div class="wpb_wrapper">
                    <div class="counter-space"><div class="counter-about">Present in <br><b>+<span class="counter">25</span></b><br> COUNTRIES</div></div>
                  </div></div>
                </div></div>
              </div>

              <!-- Registered varieties -->
              <div class="vc_col-sm-1/5 vc_col-xs-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone">
                <div class="vc_column-inner"><div class="wpb_wrapper">
                  <div class="img-with-aniamtion-wrap center" data-max-width="100%" data-shadow="none" data-animation="fade-in">
                    <div class="inner"><div class="hover-wrap"><div class="hover-wrap-inner">
                      <img decoding="async" class="img-with-animation skip-lazy about-img nectar-lazy" data-delay="0" height="184" width="155" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/varieties1.png" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 155 184'/%3E" alt="Varieties"/>
                    </div></div></div>
                  </div>
                  <div class="wpb_raw_code wpb_content_element wpb_raw_html"><div class="wpb_wrapper">
                    <div class="counter-space"><div class="counter-about"><b>+<span class="counter">225</span></b><br> registered varieties</div></div>
                  </div></div>
                </div></div>
              </div>

              <!-- R&D centres -->
              <div class="vc_col-sm-1/5 vc_col-xs-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone">
                <div class="vc_column-inner"><div class="wpb_wrapper">
                  <div class="img-with-aniamtion-wrap center" data-max-width="100%" data-shadow="none" data-animation="fade-in">
                    <div class="inner"><div class="hover-wrap"><div class="hover-wrap-inner">
                      <img loading="lazy" decoding="async" class="img-with-animation skip-lazy about-img nectar-lazy" data-delay="0" height="184" width="155" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/RD1.png" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 155 184'/%3E" alt="R&D"/>
                    </div></div></div>
                  </div>
                  <div class="wpb_raw_code wpb_content_element wpb_raw_html"><div class="wpb_wrapper">
                    <div class="counter-space"><div class="counter-about"><b><span class="counter">6</span></b><br> R&amp;D centres</div></div>
                  </div></div>
                </div></div>
              </div>

              <!-- Plants per year -->
              <div class="vc_col-sm-1/5 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone">
                <div class="vc_column-inner"><div class="wpb_wrapper">
                  <div class="img-with-aniamtion-wrap center" data-max-width="100%" data-shadow="none" data-animation="fade-in">
                    <div class="inner"><div class="hover-wrap"><div class="hover-wrap-inner">
                      <img loading="lazy" decoding="async" class="img-with-animation skip-lazy about-img nectar-lazy" data-delay="0" height="184" width="155" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/MILLIONS1.png" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 155 184'/%3E" alt="Plants per year"/>
                    </div></div></div>
                  </div>
                  <div class="wpb_raw_code wpb_content_element wpb_raw_html"><div class="wpb_wrapper">
                    <div class="counter-space"><div class="counter-about"><b>+<span class="counter">1,000</span></b> MILLIONS <br> of plants produced each year</div></div>
                  </div></div>
                </div></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ======= SECTION TITLE + BULLETS (kept) ======= -->
<div id="fws_68d15c3db022c" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_65px top_margin_phone_0px" style="padding-top:0; padding-bottom:0;">
  <div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div>
  <div class="row_col_wrap_12 col span_12 dark left">
    <div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone">
      <div class="vc_column-inner">
        <div class="wpb_wrapper">
          <div class="wpb_text_column wpb_content_element"><div class="wpb_wrapper" style="margin-top:30px !important;">
            <h1 class="title-green"><span class="title-span">IMPROVE TODAY,</span><span class="title-span">TOMORROW’S FOOD</span></h1>
          </div></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="row_responsive_container3" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_50px" style="padding-top:0; padding-bottom:0;">
  <div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div>
  <div class="row_col_wrap_12 col span_12 dark left">
    <div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone">
      <div class="vc_column-inner">
        <div class="wpb_wrapper">
          <div class="wpb_row vc_row-fluid vc_row inner_row"><div class="row-bg-wrap"><div class="row-bg"></div></div>
            <div class="row_col_wrap_12_inner col span_12 left">
              <div class="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone">
                <div class="vc_column-inner"><div class="wpb_wrapper">
                  <div class="wpb_text_column wpb_content_element"><div class="wpb_wrapper">
                    <p>Developing new varieties means shaping the fresh produce sector of decades to come. Agrodova commitment to innovation and know-how is based on four pillars:</p>
                  </div></div>
                </div></div>
              </div>
            </div>
          </div>

          <div id="fws_68d15c3db9c5a" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row vc_row-o-equal-height vc_row-flex vc_row-o-content-top" style="padding-top:20px;">
            <div class="row-bg-wrap"><div class="row-bg"></div></div>
            <div class="row_col_wrap_12_inner col span_12 right">
              <div class="vc_col-sm-8 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone">
                <div class="vc_column-inner"><div class="wpb_wrapper">
                  <div class="wpb_text_column wpb_content_element"><div class="wpb_wrapper">
                    <ul class="agro-left">
                      <li><span style="color:#000000;">Crops adapted to different weather conditions and climates (fight climate change).</span></li>
                      <li><span style="color:#000000;">Tasty berries, garlic and asparagus that meet consumers’ preferences (fight food waste).</span></li>
                      <li><span style="color:#000000;">Resistant varieties that need fewer fertilisation inputs (fight climate change and gain competitiveness).</span></li>
                      <li><span style="color:#000000;">Support farmers with new technologies for crop cultivation (knowledge transfer).</span></li>
                    </ul>
                    <p style="text-align:left; margin-top:30px;">We are innovation, we are quality, we are technical support, we are the vision of a competitive and sustainable global agriculture.</p>
                  </div></div>
                </div></div>
              </div>

              <div class="vc_col-sm-4 wpb_column column_container vc_column_container col child_column centered-text no-extra-padding inherit_tablet inherit_phone">
                <div class="vc_column-inner"><div class="wpb_wrapper">
                  <a class="nectar-button small regular extra-color-1 regular-button pl-yellow-button" style="margin-top:20px; color:#3f9c35;" href="varieties" data-color-override="false" data-hover-color-override="false" data-hover-text-color-override="#fff"><span>Check our varieties</span></a>
                </div></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

<!-- ======= WORLDWIDE TITLE + SHORT TEXT (kept) ======= -->
<div id="fws_68d15c3dbb102" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_65px top_margin_phone_50px" style="padding-top:0; padding-bottom:0;">
  <div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div>
  <div class="row_col_wrap_12 col span_12 dark left">
    <div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone">
      <div class="vc_column-inner">
        <div class="wpb_wrapper">
          <div class="wpb_text_column wpb_content_element"><div class="wpb_wrapper">
            <h1 class="title-green"><span class="title-span">Agrodova</span><span class="title-span">WORLDWIDE</span></h1>
          </div></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="fws_68d15c3dbba73" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_65px bottom_margin_0px top_margin_phone_30px bottom_margin_phone_30px" style="padding-top:0; padding-bottom:0;">
  <div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div>
  <div class="row_col_wrap_12 col span_12 dark right">
    <div class="vc_col-sm-7 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone"><div class="vc_column-inner"><div class="wpb_wrapper"></div></div></div>
    <div class="vc_col-sm-5 wpb_column column_container vc_column_container col force-phone-text-align-left no-extra-padding inherit_tablet inherit_phone">
      <div class="vc_column-inner"><div class="wpb_wrapper">
        <div class="wpb_text_column wpb_content_element"><div class="wpb_wrapper">
          <p>Thanks to our global salesforce and a large network of partners, Agrodova has a global presence.</p>
        </div></div>
      </div></div>
    </div>
  </div>
</div>

<!-- ======= IMAGE RIGHT (desktop) / ABOVE (mobile) + COUNTRY GRID ======= -->
<div id="fws_about_map" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row about-map-row" style="padding-top:0; padding-bottom:0;">
  <div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div>

  <div class="row_col_wrap_12 col span_12 dark left">
    <!-- Image column FIRST in markup so it stacks on top for mobile -->
    <div class="vc_col-sm-7 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone col-img">
      <div class="vc_column-inner"><div class="wpb_wrapper">
        <div class="img-with-aniamtion-wrap" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in">
          <div class="inner"><div class="hover-wrap"><div class="hover-wrap-inner">
            <img loading="lazy" decoding="async" class="img-with-animation skip-lazy" data-delay="0" height="973" width="1987" data-animation="fade-in"
                 src="https://agrodova.es/wp-content/uploads/2022/02/about-map.png"
                 alt="Agrodova worldwide locations map"/>
          </div></div></div>
        </div>
      </div></div>
    </div>

    <!-- Country list column (now a responsive grid) -->
    <div class="vc_col-sm-5 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone col-list">
      <div class="vc_column-inner"><div class="wpb_wrapper">

        <div class="country-grid">
          <div class="country-item">
            <h4>SPAIN</h4>
            <ul>
              <li>Valtierra</li>
              <li>Cartaya</li>
              <li>Fuente el Olmo</li>
              <li>Sariñena</li>
              <li>Toro</li>
            </ul>
          </div>

          <div class="country-item">
            <h4>POLAND</h4>
            <ul>
              <li>Gniezno</li>
              <li>Ostrowo</li>
              <li>Przysieka</li>
            </ul>
          </div>

          <div class="country-item">
            <h4>MEXICO</h4>
            <ul>
              <li>Guadalajara</li>
              <li>Michoacan</li>
              <li>Guanajuato</li>
            </ul>
          </div>

          <div class="country-item">
            <h4>USA</h4>
            <ul>
              <li>Anderson</li>
              <li>Rio Vista</li>
              <li>Red Bluff</li>
              <li>Macdoel</li>
            </ul>
          </div>

          <div class="country-item">
            <h4>FRANCE</h4>
            <ul>
              <li>LeBarp</li>
            </ul>
          </div>

          <div class="country-item">
            <h4>ITALY</h4>
            <ul>
              <li>Policoro</li>
            </ul>
          </div>

          <div class="country-item">
            <h4>ROMANIA</h4>
            <ul>
              <li>Caracal</li>
            </ul>
          </div>

          <div class="country-item">
            <h4>CHINA</h4>
            <ul>
              <li>Meiming</li>
            </ul>
          </div>

          <div class="country-item">
            <h4>NETHERLANDS</h4>
            <ul>
              <li>Roermond</li>
            </ul>
          </div>

          <div class="country-item">
            <h4>PERU</h4>
            <ul>
              <li>Trujillo</li>
            </ul>
          </div>

          <div class="country-item">
            <h4>MOROCCO</h4>
            <ul>
              <li>Kénitra</li>
            </ul>
          </div>
        </div>

      </div></div>
    </div>
  </div>
</div>

<!-- ======= UNITED NATIONS LOGO STRIP (kept) ======= -->
<div id="fws_68d15c3dc0826" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row" style="padding-top:0; padding-bottom:0;">
  <div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div>
  <div class="row_col_wrap_12 col span_12 dark left">
    <div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone">
      <div class="vc_column-inner">
        <div class="wpb_wrapper">
          <div id="fws_68d15c3dc0ecc" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row">
            <div class="row-bg-wrap"><div class="row-bg"></div></div>
            <div class="row_col_wrap_12_inner col span_12 left">
              <div class="vc_col-sm-3 img-united-nation wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone">
                <div class="vc_column-inner"><div class="wpb_wrapper">
                  <div class="img-with-aniamtion-wrap custom-size" data-max-width="100%" data-shadow="none" data-animation="fade-in">
                    <div class="inner">
                        <div class="hover-wrap">
                        <div class="hover-wrap-inner" style="margin-top:-70px;margin-bottom:70px;">
                      <img loading="lazy" decoding="async" class="img-with-animation skip-lazy nectar-lazy" data-delay="0" height="60" width="200" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/Diseno-sin-titulo-18-1.png" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'/%3E" alt="UN SDGs"/>
                    </div>
                </div></div>
                  </div>
                </div></div>
              </div>
              <div class="vc_col-sm-9 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone">
                <div class="vc_column-inner"><div class="wpb_wrapper"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div></div></div></div>

<?php include 'footer-en.php'; ?>
