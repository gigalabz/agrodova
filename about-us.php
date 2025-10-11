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

<script>
/* Hydrate Salient's lazy images for static pages (no JS loader) */
(function() {
  function hydrateNectarLazy() {
    // <img ... data-nectar-img-src="..."> -> set real src/srcset
    document.querySelectorAll('img[data-nectar-img-src]').forEach(function(img){
      var src = img.getAttribute('data-nectar-img-src');
      if (src) img.setAttribute('src', src);
      var srcset = img.getAttribute('data-nectar-img-srcset');
      if (srcset) img.setAttribute('srcset', srcset);
      // cleanup & remove lazy classes
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
<div id="fws_68d15c3d96557" data-column-margin="none" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top-level full-width-ns full-width-section top_margin_-50px" style="padding-top: 0px; padding-bottom: 0px;"><div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div><div class="row_col_wrap_12 col span_12 dark left">
<div class="vc_col-sm-12 vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<style>@media only screen and (min-width: 1300px) { #nectar-slider-instance-1, #nectar-slider-instance-1 .swiper-container{height:700px;}
} @media only screen and (max-width: 1299px) { #nectar-slider-instance-1, #nectar-slider-instance-1 .swiper-container{height:583.33333333333px;}
} @media only screen and (max-width: 1000px) { #nectar-slider-instance-1, #nectar-slider-instance-1 .swiper-container{height:500px;}
} @media only screen and (max-width: 690px) { #nectar-slider-instance-1, #nectar-slider-instance-1 .swiper-container{height:259.25925925926px;}
}</style><div data-midnight="nectar-slider" class="parallax_slider_outer"><div data-transition="slide" data-overall_style="classic" data-flexible-height="" data-animate-in-effect="none" data-fullscreen="false" data-button-sizing="regular" data-button-styling="btn_with_count" data-autorotate="" data-parallax="true" data-parallax-disable-mobile="" data-caption-trans="fade_in_from_bottom" data-parallax-style="bg_only" data-bg-animation="none" data-full-width="true" class="nectar-slider-wrap" id="nectar-slider-instance-1"><div class="swiper-container" data-tho="auto" data-tco="auto" data-pho="auto" data-pco="auto" data-loop="false" data-height="700" data-min-height="" data-arrows="false" data-bullets="false" data-bullet_style="see_through" data-bullet_position="bottom" data-desktop-swipe="false" data-settings=""> <div class="swiper-wrapper"><div class="swiper-slide white-text-slide" data-desktop-content-width="auto" data-tablet-content-width="auto" data-bg-alignment="top" data-color-scheme="light" data-x-pos="left" data-y-pos="middle"><div class="slide-bg-wrap"><div class="image-bg" style="background-image: url(https://agrodova.es/wp-content/uploads/2022/02/CABECERA_ABOUTUS_DESKTOP-1.jpg);"> &nbsp;</div></div><div class="container">
<div class="content"><h2 class="ns-heading-el"><span>INNOVATION IN</span><span>PLANT VARIETIES</span></h2></div></div><div class="video-texture"> <span class="ie-fix"></span></div></div></div><div class="nectar-slider-loading"> <span class="loading-icon none"> </span></div></div></div></div></div></div></div><div class="vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<style>#nectar-slider-instance-2, #nectar-slider-instance-2 .swiper-container{min-height:550px;}
#nectar-slider-instance-2, #nectar-slider-instance-2 .swiper-container{height:calc( 550 * 100vw / 1600 );}</style><div data-midnight="nectar-slider" class="parallax_slider_outer"><div data-transition="slide" data-overall_style="classic" data-flexible-height="true" data-animate-in-effect="none" data-fullscreen="false" data-button-sizing="regular" data-button-styling="btn_with_count" data-autorotate="" data-parallax="true" data-parallax-disable-mobile="" data-caption-trans="fade_in_from_bottom" data-parallax-style="bg_only" data-bg-animation="none" data-full-width="true" class="nectar-slider-wrap" id="nectar-slider-instance-2"><div class="swiper-container" data-tho="auto" data-tco="auto" data-pho="auto" data-pco="auto" data-loop="false" data-height="550" data-min-height="550" data-arrows="false" data-bullets="false" data-bullet_style="see_through" data-bullet_position="bottom" data-desktop-swipe="false" data-settings=""> <div class="swiper-wrapper"><div class="swiper-slide white-text-slide" data-desktop-content-width="auto" data-tablet-content-width="auto" data-bg-alignment="center" data-color-scheme="light" data-x-pos="left" data-y-pos="middle"><div class="slide-bg-wrap"><div class="image-bg" style="background-image: url(https://agrodova.es/wp-content/uploads/2022/02/CABECERA_ABOUTUS_MOBILE-1.jpg);"> &nbsp;</div></div><div class="container">
<div class="content"><h2 class="ns-heading-el"><span>INNOVATION IN</span><span>PLANT VARIETIES</span></h2></div></div><div class="video-texture"> <span class="ie-fix"></span></div></div></div><div class="nectar-slider-loading"> <span class="loading-icon none"> </span></div></div></div></div></div></div></div></div></div><div id="fws_68d15c3da5eb5" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_65px right_padding_8pct left_padding_8pct right_padding_phone_0px left_padding_phone_0px" style="padding-top: 0px; padding-bottom: 0px;"><div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div><div class="row_col_wrap_12 col span_12 dark left">
<div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="wpb_text_column wpb_content_element">
<div class="wpb_wrapper" style="margin-top:30px;"> <p class="color-green subtitle-big">Agrodova is a global leader in the agri-food sector, specializing in breeding the next generations of berry varieties: blueberries, raspberries, strawberries and blackberries.</p> <p>Apart from berries, Agrodovahas also substantial experience and a long-standing tradition in other products such as garlic, asparagus or avocado.</p> <p>Our mission is to develop unique and superior varieties through a mix of traditional breeding methods and modern technology, and to make these new genetics available to our clients through our efficient and top-quality nursery operations. Exciting end consumers all over the world through a fantastic taste and the healthy properties of our products is what drives our daily activities.</p></div></div></div></div></div></div></div><div id="fws_68d15c3da6c3d" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_65px" style="padding-top: 0px; padding-bottom: 0px;"><div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div><div class="row_col_wrap_12 col span_12 dark left">
<div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div id="fws_68d15c3da90d5" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row"><div class="row-bg-wrap"> <div class="row-bg"></div></div><div class="row_col_wrap_12_inner col span_12 center">
<div class="vc_col-sm-1/5 vc_col-xs-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in">
<div class="inner">
<div class="hover-wrap"> 
<div class="hover-wrap-inner"> <img decoding="async" class="img-with-animation skip-lazy about-img nectar-lazy" data-delay="0" height="184" width="155" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/employees.png" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20155%20184'%2F%3E" alt=""/></div></div></div></div><div class="wpb_raw_code wpb_content_element wpb_raw_html">
<div class="wpb_wrapper">
<div class="counter-space"><div class="counter-about"><b>+<span class="counter">7,000</span></b><br> employees</div></div></div></div></div></div></div><div class="vc_col-sm-1/5 vc_col-xs-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in">
<div class="inner">
<div class="hover-wrap"> 
<div class="hover-wrap-inner"> <img decoding="async" class="img-with-animation skip-lazy about-img nectar-lazy" data-delay="0" height="184" width="155" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/present_in.png" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20155%20184'%2F%3E" alt=""/></div></div></div></div><div class="wpb_raw_code wpb_content_element wpb_raw_html">
<div class="wpb_wrapper">
<div class="counter-space"><div class="counter-about">Present in <br><b>+<span class="counter">25</span></b><br> COUNTRIES</div></div></div></div></div></div></div><div class="vc_col-sm-1/5 vc_col-xs-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in">
<div class="inner">
<div class="hover-wrap"> 
<div class="hover-wrap-inner"> <img decoding="async" class="img-with-animation skip-lazy about-img nectar-lazy" data-delay="0" height="184" width="155" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/varieties1.png" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20155%20184'%2F%3E" alt=""/></div></div></div></div><div class="wpb_raw_code wpb_content_element wpb_raw_html">
<div class="wpb_wrapper">
<div class="counter-space"><div class="counter-about"><b>+<span class="counter">225</span></b><br> registered varieties</div></div></div></div></div></div></div><div class="vc_col-sm-1/5 vc_col-xs-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in">
<div class="inner">
<div class="hover-wrap"> 
<div class="hover-wrap-inner"> <img loading="lazy" decoding="async" class="img-with-animation skip-lazy about-img nectar-lazy" data-delay="0" height="184" width="155" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/RD1.png" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20155%20184'%2F%3E" alt=""/></div></div></div></div><div class="wpb_raw_code wpb_content_element wpb_raw_html">
<div class="wpb_wrapper">
<div class="counter-space"><div class="counter-about"><b><span class="counter">6</span></b><br> R&D centres</div></div></div></div></div></div></div><div class="vc_col-sm-1/5 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in">
<div class="inner">
<div class="hover-wrap"> 
<div class="hover-wrap-inner"> <img loading="lazy" decoding="async" class="img-with-animation skip-lazy about-img nectar-lazy" data-delay="0" height="184" width="155" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/MILLIONS1.png" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20155%20184'%2F%3E" alt=""/></div></div></div></div><div class="wpb_raw_code wpb_content_element wpb_raw_html">
<div class="wpb_wrapper">
<div class="counter-space"><div class="counter-about"><b>+<span class="counter">1,000</span></b> MILLIONS <br> of plants produced each year</div></div></div></div></div></div></div></div></div></div></div></div></div></div><div id="fws_68d15c3db022c" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_65px top_margin_phone_0px" style="padding-top: 0px; padding-bottom: 0px;"><div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div><div class="row_col_wrap_12 col span_12 dark left">
<div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="wpb_text_column wpb_content_element">
<div class="wpb_wrapper" style="margin-top:30px !important;"> <h1 class="title-green"><span class="title-span">IMPROVE TODAY,</span><span class="title-span">TOMORROW’S FOOD</span></h1></div></div></div></div></div></div></div><div id="row_responsive_container3" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_50px" style="padding-top: 0px; padding-bottom: 0px;"><div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div><div class="row_col_wrap_12 col span_12 dark left">
<div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div id="hide_Container_mobile" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row"><div class="row-bg-wrap"> <div class="row-bg"></div></div>






<div class="wpb_wrapper"> <p>Developing new varieties means shaping the fresh produce sector of decades to come. Planasa’s commitment to innovation and know-how is based on four pillars:</p></div></div></div></div></div></div></div><div id="fws_68d15c3db9c5a" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row vc_row-o-equal-height vc_row-flex vc_row-o-content-top" style="padding-top: 20px;"><div class="row-bg-wrap"> <div class="row-bg"></div></div><div class="row_col_wrap_12_inner col span_12 right">
<div class="vc_col-sm-8 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="wpb_text_column wpb_content_element">
<div class="wpb_wrapper"> 
    



<ul> <li style="list-style-type: none;"> <ul> <li><span style="color: #000000;">Crops adapted to different weather conditions and climates (fight climate change).</span></li> <li><span style="color: #000000;">Tasty berries, garlic and asparagus that meet consumers preferences (fight food waste).</span></li> <li><span style="color: #000000;">Resistant varieties that need less fertilisation inputs (fight climate change ang gain competitiveness).</span></li> <li><span style="color: #000000;">Support farmers with the new technologies available for crop cultivation (knowledge transfer).</span></li> </ul>


</li> </ul> 



<p style="text-align: left;">We are innovation, we are quality, we are technical support, we are the vision of a competitive and sustainable global agriculture.</p></div></div></div></div></div><div class="vc_col-sm-4 wpb_column column_container vc_column_container col child_column centered-text no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper"> <a class="nectar-button small regular extra-color-1 regular-button pl-yellow-button" style="margin-top: 20px; color: #3f9c35;" href="/varieties/index.html" data-color-override="false" data-hover-color-override="false" data-hover-text-color-override="#fff"><span>Check our varieties</span></a></div></div></div></div></div></div></div></div></div></div><div id="fws_68d15c3dbb102" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_65px top_margin_phone_50px" style="padding-top: 0px; padding-bottom: 0px;"><div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div><div class="row_col_wrap_12 col span_12 dark left">
<div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="wpb_text_column wpb_content_element">
<div class="wpb_wrapper"> <h1 class="title-green"><span class="title-span">Agrodova</span><span class="title-span">WORLDWIDE</span></h1></div></div></div></div></div></div></div><div id="fws_68d15c3dbba73" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top_margin_65px bottom_margin_0px top_margin_phone_30px bottom_margin_phone_30px" style="padding-top: 0px; padding-bottom: 0px;"><div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div><div class="row_col_wrap_12 col span_12 dark right">
<div class="vc_col-sm-7 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper"></div></div></div><div class="vc_col-sm-5 wpb_column column_container vc_column_container col force-phone-text-align-left no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="wpb_text_column wpb_content_element">
<div class="wpb_wrapper"> <p>Thanks to our global salesforce and a large network of partners, Agrodova has a global presence.</p></div></div></div></div></div></div></div><div id="fws_68d15c3dbc4bf" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row" style="padding-top: 0px; padding-bottom: 0px;"><div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div><div class="row_col_wrap_12 col span_12 dark left">
<div class="vc_col-sm-7 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="img-with-aniamtion-wrap" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in">
<div class="inner">
<div class="hover-wrap"> 
<div class="hover-wrap-inner"> <img loading="lazy" decoding="async" class="img-with-animation skip-lazy nectar-lazy" data-delay="0" height="973" width="1987" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/about-map.png" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201987%20973'%2F%3E" alt="" data-nectar-img-srcset="https://agrodova.es/wp-content/uploads/2022/02/about-map.png 1987w, https://agrodova.es/wp-content/uploads/2022/02/.png 300w, https://agrodova.es/wp-content/uploads/2022/02/about-map.png 1024w, https://agrodova.es/wp-content/uploads/2022/02/about-map.png 768w, https://agrodova.es/wp-content/uploads/2022/02/about-map-1536x752.png 1536w, https://agrodova.es/wp-content/uploads/2022/02/about-map.png 600w" sizes="auto, (max-width: 1987px) 100vw, 1987px"/></div></div></div></div></div></div></div><div class="vc_col-sm-5 vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div id="fws_68d15c3dbe237" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row left_padding_120px" style="padding-top: 70px;"><div class="row-bg-wrap"> <div class="row-bg"></div></div><div class="row_col_wrap_12_inner col span_12 left">
<div class="vc_col-sm-4 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="wpb_text_column wpb_content_element country_list">
<div class="wpb_wrapper"> <p><span style="color: #3f9c35;"><strong>SPAIN</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Valtierra</span><br /> <span style="color: #3f9c35; font-size: 14px;">Cartaya</span><br /> <span style="color: #3f9c35; font-size: 14px;">Fuente el Olmo</span><br /> <span style="color: #3f9c35; font-size: 14px;">Sariñena</span><br /> <span style="color: #3f9c35; font-size: 14px;">Toro</span></p> <p><strong><span style="color: #3f9c35;">POLAND</span></strong><br /> <span style="color: #3f9c35; font-size: 14px;">Gniezno</span><br /> <span style="color: #3f9c35; font-size: 14px;">Ostrowo</span><br /> <span style="color: #3f9c35; font-size: 14px;">Przysieka</span></p> <p><strong><span style="color: #3f9c35;">MEXICO</span></strong><br /> <span style="color: #3f9c35; font-size: 14px;">Guadalajara</span><br /> <span style="color: #3f9c35; font-size: 14px;">Michoacan</span><br /> <span style="color: #3f9c35; font-size: 14px;">Guanajuato</span></p></div></div></div></div></div><div class="vc_col-sm-4 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="wpb_text_column wpb_content_element country_list">
<div class="wpb_wrapper"> <p><span style="color: #3f9c35;"><strong>USA</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Anderson</span><br /> <span style="color: #3f9c35; font-size: 14px;">Rio Vista</span><br /> <span style="color: #3f9c35; font-size: 14px;">Red Bluff</span><br /> <span style="color: #3f9c35; font-size: 14px;">Macdoel</span></p> <p><span style="color: #3f9c35;"><strong>FRANCE</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">LeBarp</span></p> <p><span style="color: #3f9c35;"><strong>ITALY</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Policoro</span></p> <p><span style="color: #3f9c35;"><strong>ROMANIA</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Caracal</span></p> <p><span style="color: #3f9c35;"><strong>CHINA</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Meiming</span></p></div></div></div></div></div><div class="vc_col-sm-4 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="wpb_text_column wpb_content_element country_list">
<div class="wpb_wrapper"> <p><span style="color: #3f9c35;"><strong>NETHERLANDS</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Roermond</span></p> <p><span style="color: #3f9c35;"><strong>PERU</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Trujillo</span></p> <p><span style="color: #3f9c35;"><strong>MOROCCO</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Kénitra</span></p></div></div></div></div></div></div></div></div></div></div><div class="vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div id="fws_68d15c3dbf8a7" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row" style="padding-top: 20px;"><div class="row-bg-wrap"> <div class="row-bg"></div></div><div class="row_col_wrap_12_inner col span_12 left">
<div class="vc_col-sm-6 vc_col-xs-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="wpb_text_column wpb_content_element country_list">
<div class="wpb_wrapper"> <p style="text-align: center;"><span style="color: #3f9c35;"><strong>SPAIN</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Valtierra</span><br /> <span style="color: #3f9c35; font-size: 14px;">Cartaya</span><br /> <span style="color: #3f9c35; font-size: 14px;">Fuente el Olmo</span><br /> <span style="color: #3f9c35; font-size: 14px;">Sariñena</span><br /> <span style="color: #3f9c35; font-size: 14px;">Toro</span></p> <p style="text-align: center;"><strong><span style="color: #3f9c35;">POLAND</span></strong><br /> <span style="color: #3f9c35; font-size: 14px;">Gniezno</span><br /> <span style="color: #3f9c35; font-size: 14px;">Ostrowo</span><br /> <span style="color: #3f9c35; font-size: 14px;">Przysieka</span></p> <p style="text-align: center;"><strong><span style="color: #3f9c35;">MEXICO</span></strong><br /> <span style="color: #3f9c35; font-size: 14px;">Guadalajara</span><br /> <span style="color: #3f9c35; font-size: 14px;">Michoacan</span><br /> <span style="color: #3f9c35; font-size: 14px;">Guanajuato</span></p> <p style="text-align: center;"><span style="color: #3f9c35;"><strong>USA</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Anderson</span><br /> <span style="color: #3f9c35; font-size: 14px;">Rio Vista</span><br /> <span style="color: #3f9c35; font-size: 14px;">Red Bluff</span><br /> <span style="color: #3f9c35; font-size: 14px;">Macdoel</span></p></div></div></div></div></div><div class="vc_col-sm-6 vc_col-xs-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="wpb_text_column wpb_content_element country_list">
<div class="wpb_wrapper"> <p style="text-align: center;"><span style="color: #3f9c35;"><strong>FRANCE</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">LeBarp</span></p> <p style="text-align: center;"><span style="color: #3f9c35;"><strong>ITALY</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Policoro</span></p> <p style="text-align: center;"><span style="color: #3f9c35;"><strong>ROMANIA</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Caracal</span></p> <p style="text-align: center;"><span style="color: #3f9c35;"><strong>CHINA</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Meiming</span></p> <p style="text-align: center;"><span style="color: #3f9c35;"><strong>NETHERLANDS</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Roermond</span></p> <p style="text-align: center;"><span style="color: #3f9c35;"><strong>PERU</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Trujillo</span></p> <p style="text-align: center;"><span style="color: #3f9c35;"><strong>MOROCCO</strong></span><br /> <span style="color: #3f9c35; font-size: 14px;">Kénitra</span></p></div></div></div></div></div></div></div></div></div></div></div></div><div id="fws_68d15c3dc0826" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row" style="padding-top: 0px; padding-bottom: 0px;"><div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div class="inner-wrap"><div class="row-bg viewport-desktop"></div></div></div><div class="row_col_wrap_12 col span_12 dark left">
<div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div id="fws_68d15c3dc0ecc" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row"><div class="row-bg-wrap"> <div class="row-bg"></div></div><div class="row_col_wrap_12_inner col span_12 left">
<div class="vc_col-sm-3 img-united-nation wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper">
<div class="img-with-aniamtion-wrap custom-size" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in">
<div class="inner">
<div class="hover-wrap"> 
<div class="hover-wrap-inner"> <img loading="lazy" decoding="async" class="img-with-animation skip-lazy nectar-lazy" data-delay="0" height="60" width="200" data-animation="fade-in" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/Diseno-sin-titulo-18-1.png" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20200%2060'%2F%3E" alt=""/></div></div></div></div></div></div></div><div class="vc_col-sm-9 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
<div class="vc_column-inner">
<div class="wpb_wrapper"></div></div></div></div></div></div></div></div></div></div></div></div></div><div id="footer-outer" data-midnight="light" data-cols="3" data-custom-color="true" data-disable-copyright="true" data-matching-section-color="false" data-copyright-line="false" data-using-bg-img="false" data-bg-img-overlay="0.8" data-full-width="false" data-using-widget-area="true" data-link-hover="default">
<div id="footer-widgets" data-has-widgets="true" data-cols="3">
<div class="container">
<div class="row">
<div class="col span_4">
<div id="nav_menu-2" class="widget widget_nav_menu"><div class="menu-legal-en-container"><ul id="menu-legal-en" class="menu"><li id="menu-item-82" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82"><a href="/legal-notice/index.html">LEGAL NOTICE</a></li> <li id="menu-item-80" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-80"><a href="/privacy-policy/index.html">PRIVACY POLICY</a></li> <li id="menu-item-81" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-81"><a href="/cookies-policy/index.html">COOKIES POLICY</a></li> </ul></div></div></div><div class="col span_4">
<div class="widget"></div></div><div class="col span_4">
<div id="custom_html-3" class="widget_text widget widget_custom_html"><div class="textwidget custom-html-widget"><section id="follow_us"> <p>Follow us:</p> <p><a href="https://www.linkedin.com/company/planasa"><img loading="lazy" class="alignleft wp-image-1766 size-medium" title="Linkedin Planasa" src="/images/ICON_FOOTER_LINKEDIN.svg" alt="Linkedin Planasa" width="34" height="34"></a><a href="https://www.facebook.com/planasa.group/" target="_blank" rel="noopener"><img loading="lazy" class="alignleft wp-image-1756 size-medium" title="Facebook Planasa" src="/images/ICON_FOOTER_FACEBOOK.svg" alt="Facebook Planasa" width="36" height="36"></a> <a href="https://www.instagram.com/planasa.group/" target="_blank" rel="noopener"><img loading="lazy" class="alignleft wp-image-1761 size-medium" title="Instagram Planasa" src="/images/ICON_FOOTER_INSTAGRAM.svg" alt="Instagram Planasa" width="36" height="36"></a></p> </section></div></div></div></div></div></div></div><div id="slide-out-widget-area-bg" class="slide-out-from-right-hover dark"></div><div id="slide-out-widget-area" class="slide-out-from-right-hover" data-dropdown-func="separate-dropdown-parent-link" data-back-txt="Back">
<div class="inner-wrap">
<div class="inner" data-prepend-menu-mobile="false">
<a class="slide_out_area_close" href="#"><span class="screen-reader-text">Close Menu</span>
<span class="close-wrap"> <span class="close-line close-line1"></span> <span class="close-line close-line2"></span> </span>				</a>
<div class="off-canvas-menu-container mobile-only" role="navigation"> <ul class="menu"> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-74"><a href="/varieties/index.html">Varieties</a></li> <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-75"><a href="#">Activities</a> <ul class="sub-menu"> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79"><a href="/rd/index.html">R&#038;D</a></li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78"><a href="/nursery/index.html">Nursery</a></li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77"><a href="/technical-support/index.html">Technical support</a></li> </ul> </li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-73"><a href="/careers/index.html">Careers</a></li> <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-8646"><a href="#">About us</a> <ul class="sub-menu"> <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-55 current_page_item menu-item-8645"><a href="index.html" aria-current="page">About us</a></li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2546"><a href="/vision-values/index.html">History &#038; vision</a></li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"><a href="/esg/index.html">ESG</a></li> </ul> </li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-71"><a href="/contact/index.html">Contact</a></li> <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-fr wpml-ls-menu-item wpml-ls-first-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-fr"><a href="/fr/a-propos-de-nous/index.html"><img class="wpml-ls-flag" src="/wp-content/uploads/flags/Grupo%201415%402x.png" alt="French"/></a></li> <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-de wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-de"><a href="/de/uber-uns/index.html"><img class="wpml-ls-flag" src="/wp-content/uploads/flags/Grupo%201418%402x.png" alt="German"/></a></li> <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-it wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-it"><a href="/it/su-di-noi/index.html"><img class="wpml-ls-flag" src="/wp-content/uploads/flags/Grupo%201417%402x.png" alt="Italian"/></a></li> <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-es wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-es"><a href="/es/sobre-nosotros/index.html"><img class="wpml-ls-flag" src="/wp-content/uploads/flags/Grupo%201414%403x.png" alt="Spanish"/></a></li> <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-mx wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-mx"><a href="/mx/sobre-nosotros/index.html"><img class="wpml-ls-flag" src="/wp-content/uploads/flags/Grupo%201416%402x.png" alt="Mexico"/></a></li> <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-pe wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-pe"><a href="/pe/sobre-nosotros/index.html"><img class="wpml-ls-flag" src="/wp-content/uploads/flags/peru-flag.png" alt="Peru"/></a></li> <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-us wpml-ls-menu-item wpml-ls-last-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-us"><a href="/us/about_us/index.html"><img class="wpml-ls-flag" src="/wp-content/plugins/sitepress-multilingual-cms/res/flags/us.svg" alt="USA"/></a></li> <li class="account-menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item areacliente-logout"> <a href="/my-account/index.html" class="sf-with-ul"><span class="acpl-user"></span></a></li> </ul> <ul class="menu secondary-header-items"> </ul></div></div><div class="bottom-meta-wrap"></div></div></div></div><a id="to-top" href="#"><i class="fa fa-angle-up"></i></a></div></div><aside id="moove_gdpr_cookie_info_bar" class="moove-gdpr-info-bar-hidden moove-gdpr-align-center moove-gdpr-light-scheme gdpr_infobar_postion_bottom" aria-label="GDPR Cookie Banner" style="display: none;">
<div class="moove-gdpr-info-bar-container">
<div class="moove-gdpr-info-bar-content">
<div class="moove-gdpr-cookie-notice"> <p>We use cookies to offer you the best experience on our website. You can learn more about what cookies we use or disable them in the <span style="font-size: 11pt"><button aria-haspopup="true" data-href="#moove_gdpr_cookie_modal" class="change-settings-button">settings</button>.</span></p></div><div class="moove-gdpr-button-holder"> <button class="mgbutton moove-gdpr-infobar-allow-all gdpr-fbo-0" aria-label="Accept" >Accept</button> <button class="mgbutton moove-gdpr-infobar-reject-btn gdpr-fbo-1 " aria-label="Reject">Reject</button></div></div></div></aside>
<script type="text/html" id="wpb-modifications"></script>	
<link rel="stylesheet" type="text/css" href="/wp-content/cache/wpfc-minified/8a9ygc2s/bt9cu.css" media="all"/>
<button data-href="#moove_gdpr_cookie_modal" aria-haspopup="true"  id="moove_gdpr_save_popup_settings_button" style='display: none;' class="" aria-label="Change cookie settings">
<span class="moove_gdpr_icon">
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style="max-width: 30px; max-height: 30px;">
<g data-name="1">
<path d="M293.9,450H233.53a15,15,0,0,1-14.92-13.42l-4.47-42.09a152.77,152.77,0,0,1-18.25-7.56L163,413.53a15,15,0,0,1-20-1.06l-42.69-42.69a15,15,0,0,1-1.06-20l26.61-32.93a152.15,152.15,0,0,1-7.57-18.25L76.13,294.1a15,15,0,0,1-13.42-14.91V218.81A15,15,0,0,1,76.13,203.9l42.09-4.47a152.15,152.15,0,0,1,7.57-18.25L99.18,148.25a15,15,0,0,1,1.06-20l42.69-42.69a15,15,0,0,1,20-1.06l32.93,26.6a152.77,152.77,0,0,1,18.25-7.56l4.47-42.09A15,15,0,0,1,233.53,48H293.9a15,15,0,0,1,14.92,13.42l4.46,42.09a152.91,152.91,0,0,1,18.26,7.56l32.92-26.6a15,15,0,0,1,20,1.06l42.69,42.69a15,15,0,0,1,1.06,20l-26.61,32.93a153.8,153.8,0,0,1,7.57,18.25l42.09,4.47a15,15,0,0,1,13.41,14.91v60.38A15,15,0,0,1,451.3,294.1l-42.09,4.47a153.8,153.8,0,0,1-7.57,18.25l26.61,32.93a15,15,0,0,1-1.06,20L384.5,412.47a15,15,0,0,1-20,1.06l-32.92-26.6a152.91,152.91,0,0,1-18.26,7.56l-4.46,42.09A15,15,0,0,1,293.9,450ZM247,420h33.39l4.09-38.56a15,15,0,0,1,11.06-12.91A123,123,0,0,0,325.7,356a15,15,0,0,1,17,1.31l30.16,24.37,23.61-23.61L372.06,328a15,15,0,0,1-1.31-17,122.63,122.63,0,0,0,12.49-30.14,15,15,0,0,1,12.92-11.06l38.55-4.1V232.31l-38.55-4.1a15,15,0,0,1-12.92-11.06A122.63,122.63,0,0,0,370.75,187a15,15,0,0,1,1.31-17l24.37-30.16-23.61-23.61-30.16,24.37a15,15,0,0,1-17,1.31,123,123,0,0,0-30.14-12.49,15,15,0,0,1-11.06-12.91L280.41,78H247l-4.09,38.56a15,15,0,0,1-11.07,12.91A122.79,122.79,0,0,0,201.73,142a15,15,0,0,1-17-1.31L154.6,116.28,131,139.89l24.38,30.16a15,15,0,0,1,1.3,17,123.41,123.41,0,0,0-12.49,30.14,15,15,0,0,1-12.91,11.06l-38.56,4.1v33.38l38.56,4.1a15,15,0,0,1,12.91,11.06A123.41,123.41,0,0,0,156.67,311a15,15,0,0,1-1.3,17L131,358.11l23.61,23.61,30.17-24.37a15,15,0,0,1,17-1.31,122.79,122.79,0,0,0,30.13,12.49,15,15,0,0,1,11.07,12.91ZM449.71,279.19h0Z" fill="currentColor"/>
<path d="M263.71,340.36A91.36,91.36,0,1,1,355.08,249,91.46,91.46,0,0,1,263.71,340.36Zm0-152.72A61.36,61.36,0,1,0,325.08,249,61.43,61.43,0,0,0,263.71,187.64Z" fill="currentColor"/>
</g>
</svg>
</span>
<span class="moove_gdpr_text">Change cookie settings</span>
</button>
<dialog id="moove_gdpr_cookie_modal" class="gdpr_lightbox-hide" aria-modal="true" aria-label="GDPR Settings Screen">
<div class="moove-gdpr-modal-content moove-clearfix logo-position-left moove_gdpr_modal_theme_v1">
<button class="moove-gdpr-modal-close" autofocus aria-label="Close GDPR Cookie Settings">
<span class="gdpr-sr-only">Close GDPR Cookie Settings</span>
<span class="gdpr-icon moovegdpr-arrow-close"></span>
</button>
<div class="moove-gdpr-modal-left-content">
<div class="moove-gdpr-company-logo-holder"> <img src="/wp-content/uploads/2023/01/planasa.png" alt="" width="180" height="56" class="img-responsive"/></div><ul id="moove-gdpr-menu">
<li class="menu-item-on menu-item-privacy_overview menu-item-selected"> <button data-href="#privacy_overview" class="moove-gdpr-tab-nav" aria-label="Privacy Overview"> <span class="gdpr-nav-tab-title">Privacy Overview</span> </button> </li>
<li class="menu-item-strict-necessary-cookies menu-item-off"> <button data-href="#strict-necessary-cookies" class="moove-gdpr-tab-nav" aria-label="Strictly Necessary Cookies"> <span class="gdpr-nav-tab-title">Strictly Necessary Cookies</span> </button> </li>
<li class="menu-item-off menu-item-third_party_cookies"> <button data-href="#third_party_cookies" class="moove-gdpr-tab-nav" aria-label="3rd Party Cookies"> <span class="gdpr-nav-tab-title">3rd Party Cookies</span> </button> </li>
</ul>
<div class="moove-gdpr-branding-cnt"> <a href="https://wordpress.org/plugins/gdpr-cookie-compliance/" rel="noopener noreferrer" target="_blank" class='moove-gdpr-branding'>Powered by&nbsp; <span>GDPR Cookie Compliance</span></a></div></div><div class="moove-gdpr-modal-right-content">
<div class="moove-gdpr-modal-title"></div><div class="main-modal-content">
<div class="moove-gdpr-tab-content">
<div id="privacy_overview" class="moove-gdpr-tab-main">
<span class="tab-title">Privacy Overview</span>
<div class="moove-gdpr-tab-main-content"> <p>This website uses cookies so that we can provide you with the best user experience possible. Cookie information is stored in your browser and performs functions such as recognising you when you return to our website and helping our team to understand which sections of the website you find most interesting and useful.</p> <p>To see all the cookies on the web <a href="/cookies-policy/index.html#cookie-we-use">click here</a></p></div></div><div id="strict-necessary-cookies" class="moove-gdpr-tab-main" style="display:none">
<span class="tab-title">Strictly Necessary Cookies</span>
<div class="moove-gdpr-tab-main-content">
<p>Strictly necessary cookies must always be enabled so that we can save your cookie setting preferences.</p>
<p>To see all the strictly necessary cookies on the web <a href="/cookies-policy/index.html#cookie-we-use">click here</a></p>
<div class="moove-gdpr-status-bar gdpr-checkbox-disabled checkbox-selected">
<div class="gdpr-cc-form-wrap">
<div class="gdpr-cc-form-fieldset"> <label class="cookie-switch" for="moove_gdpr_strict_cookies"> <span class="gdpr-sr-only">Enable or Disable Cookies</span> <input type="checkbox" aria-label="Strictly Necessary Cookies" disabled checked="checked" value="check" name="moove_gdpr_strict_cookies" id="moove_gdpr_strict_cookies"> <span class="cookie-slider cookie-round gdpr-sr" data-text-enable="Enabled" data-text-disabled="Disabled"> <span class="gdpr-sr-label"> <span class="gdpr-sr-enable">Enabled</span> <span class="gdpr-sr-disable">Disabled</span> </span> </span> </label></div></div></div><div class="moove-gdpr-strict-warning-message" style="margin-top: 10px;"> <p>If you disable this cookie, we will not be able to save your preferences. This means that every time you visit this website you will need to enable or disable cookies again.</p></div></div></div><div id="third_party_cookies" class="moove-gdpr-tab-main" style="display:none">
<span class="tab-title">3rd Party Cookies</span>
<div class="moove-gdpr-tab-main-content">
<p>This website uses Google Analytics to collect anonymous information such as the number of visitors to the site, and the most popular pages.</p>
<p>Keeping this cookie enabled helps us to improve our website.</p>
<p>To see all the 3rd party cookies on the web <a href="/cookies-policy/index.html#cookie-we-use">click here</a></p>
<div class="moove-gdpr-status-bar">
<div class="gdpr-cc-form-wrap">
<div class="gdpr-cc-form-fieldset"> <label class="cookie-switch" for="moove_gdpr_performance_cookies"> <span class="gdpr-sr-only">Enable or Disable Cookies</span> <input type="checkbox" aria-label="3rd Party Cookies" value="check" name="moove_gdpr_performance_cookies" id="moove_gdpr_performance_cookies" > <span class="cookie-slider cookie-round gdpr-sr" data-text-enable="Enabled" data-text-disabled="Disabled"> <span class="gdpr-sr-label"> <span class="gdpr-sr-enable">Enabled</span> <span class="gdpr-sr-disable">Disabled</span> </span> </span> </label></div></div></div><div class="moove-gdpr-strict-secondary-warning-message" style="margin-top: 10px; display: none;"> <p>Please enable Strictly Necessary Cookies first so that we can save your preferences!</p></div></div></div></div></div><div class="moove-gdpr-modal-footer-content">
<div class="moove-gdpr-button-holder"> <button class="mgbutton moove-gdpr-modal-allow-all button-visible" aria-label="Enable All">Enable All</button> <button class="mgbutton moove-gdpr-modal-reject-all button-visible" aria-label="Reject All">Reject All</button> <button class="mgbutton moove-gdpr-modal-save-settings button-visible" aria-label="Save Changes">Save Changes</button></div></div></div><div class="moove-clearfix"></div></div></dialog>
<noscript id="wpfc-google-fonts"><link rel='stylesheet' id='nectar_default_font_open_sans-css' href='https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&amp;subset=latin%2Clatin-ext&amp;display=swap' type='text/css' media='all'/>
</noscript>
<script id="wpml-cookie-js-extra">var wpml_cookies={"wp-wpml_current_language":{"value":"en","expires":1,"path":"\/"}};
var wpml_cookies={"wp-wpml_current_language":{"value":"en","expires":1,"path":"\/"}};</script>
<script id="wc-add-to-cart-js-extra">var wc_add_to_cart_params={"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"https:\/\/agrodova.es\/carrito\/","is_cart":"","cart_redirect_after_add":"no"};</script>
<script id="woocommerce-js-extra">var woocommerce_params={"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","i18n_password_show":"Show password","i18n_password_hide":"Hide password"};</script>
<script>var root=document.getElementsByTagName("html")[0]; root.setAttribute("class", "js");</script>
<script>(function (){
var c=document.body.className;
c=c.replace(/woocommerce-no-js/, 'woocommerce-js');
document.body.className=c;
})();</script>
<script id="nectar-slider-js-extra">var nectar_theme_info={"using_salient":"true"};</script>
<script id="nectar-frontend-js-extra">var nectarLove={"ajaxurl":"https:\/\/agrodova.es\/wp-admin\/admin-ajax.php","postID":"55","rooturl":"https:\/\/agrodova.es","disqusComments":"false","loveNonce":"96dae84d95","mapApiKey":""};
var nectarOptions={"quick_search":"false","header_entrance":"false","mobile_header_format":"default","ocm_btn_position":"default","left_header_dropdown_func":"default","ajax_add_to_cart":"0","ocm_remove_ext_menu_items":"remove_images","woo_product_filter_toggle":"0","woo_sidebar_toggles":"true","woo_sticky_sidebar":"0","woo_minimal_product_hover":"default","woo_minimal_product_effect":"default","woo_related_upsell_carousel":"false","woo_product_variable_select":"default"};
var nectar_front_i18n={"next":"Next","previous":"Previous"};</script>
<script id="cart-widget-js-extra">var actions={"is_lang_switched":"0","force_reset":"0"};</script>
<script id="wc-order-attribution-js-extra">var wc_order_attribution={"params":{"lifetime":1.0e-5,"session":30,"base64":false,"ajaxurl":"https:\/\/agrodova.es\/wp-admin\/admin-ajax.php","prefix":"wc_order_attribution_","allowTracking":true},"fields":{"source_type":"current.typ","referrer":"current_add.rf","utm_campaign":"current.cmp","utm_source":"current.src","utm_medium":"current.mdm","utm_content":"current.cnt","utm_id":"current.id","utm_term":"current.trm","utm_source_platform":"current.plt","utm_creative_format":"current.fmt","utm_marketing_tactic":"current.tct","session_entry":"current_add.ep","session_start_time":"current_add.fd","session_pages":"session.pgs","session_count":"udata.vst","user_agent":"udata.uag"}};</script>
<script src='/wp-content/cache/wpfc-minified/jq0kqx4c/bt8zc.js'></script>
<script>document.documentElement.className +=" js";</script>
<script>(function(window, document){
if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)){
document.body.className +=" using-mobile-browser mobile ";
}
if(!("ontouchstart" in window)){
var body=document.querySelector("body");
var winW=window.innerWidth;
var bodyW=body.clientWidth;
if(winW > bodyW + 4){
body.setAttribute("style", "--scroll-bar-w: " + (winW - bodyW - 4) + "px");
}else{
body.setAttribute("style", "--scroll-bar-w: 0px");
}}
})(window, document);</script>
<script type="speculationrules">{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"\/*"},{"not":{"href_matches":["\/wp-*.php","\/wp-admin\/*","\/wp-content\/uploads\/*","\/wp-content\/*","\/wp-content\/plugins\/*","\/wp-content\/themes\/pl\/*","\/wp-content\/themes\/salient\/*","\/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}</script>
<script src='/wp-content/cache/wpfc-minified/11pzrwj3/bt9yw.js'></script>
<script src="//unpkg.com/counterup2%402.0.2/dist/index5152.js?ver=1.0" id="counterup2-js"></script>
<script src='/wp-content/cache/wpfc-minified/qiedwado/bt9yw.js'></script>
<script type="text/javascript" id="moove_gdpr_frontend-js-extra">
/* <![CDATA[ */
var moove_frontend_gdpr_scripts = {"ajaxurl":"https:\/\/agrodova.es\/wp-admin\/admin-ajax.php","post_id":"55","plugin_dir":"https:\/\/agrodova.es\/wp-content\/plugins\/gdpr-cookie-compliance","show_icons":"all","is_page":"1","ajax_cookie_removal":"false","strict_init":"2","enabled_default":{"third_party":0,"advanced":0},"geo_location":"false","force_reload":"false","is_single":"","hide_save_btn":"false","current_user":"0","cookie_expiration":"365","script_delay":"2000","close_btn_action":"1","close_btn_rdr":"","scripts_defined":"{\"cache\":true,\"header\":\"\",\"body\":\"\",\"footer\":\"\",\"thirdparty\":{\"header\":\"\\r\\n<script data-gdpr>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\\r\\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\\r\\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\\r\\n'https:\\\/\\\/www.googletagmanager.com\\\/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\\r\\n})(window,document,'script','dataLayer','GTM-NVLLM8H');<\\\/script>\\r\\n\\r\\n\\r\\n\\r\\n\\t<script data-gdpr async src=\\\"https:\\\/\\\/www.googletagmanager.com\\\/gtag\\\/js?id=UA-97945334-1\\\"><\\\/script>\\r\\n\\t<script data-gdpr>\\r\\n\\t\\twindow.dataLayer=window.dataLayer||[];\\r\\n\\t\\tfunction gtag(){dataLayer.push(arguments);}\\r\\n\\t\\tgtag('js', new Date());\\r\\n\\t\\tgtag('config', 'UA-97945334-1');\\r\\n            \\r\\n\\t<\\\/script>\",\"body\":\"\\r\\n<noscript><iframe src=\\\"https:\\\/\\\/www.googletagmanager.com\\\/ns.html?id=GTM-NVLLM8H\\\"\\r\\nheight=\\\"0\\\" width=\\\"0\\\" style=\\\"display:none;visibility:hidden\\\"><\\\/iframe><\\\/noscript>\\r\\n\",\"footer\":\"\"},\"advanced\":{\"header\":\"\",\"body\":\"\",\"footer\":\"\"}}","gdpr_scor":"true","wp_lang":"_en","wp_consent_api":"false"};</script>
<script src='/wp-content/cache/wpfc-minified/k2810pm1/bt8zc.js'></script>
<script id="moove_gdpr_frontend-js-after">var gdpr_consent__strict="true"
var gdpr_consent__thirdparty="true"
var gdpr_consent__advanced="true"
var gdpr_consent__cookies="strict|thirdparty|advanced"</script>
<script defer src='/wp-content/cache/wpfc-minified/oyzlq9i/btbhi.js'></script>
<script>document.addEventListener('DOMContentLoaded',function(){function wpfcgl(){var wgh=document.querySelector('noscript#wpfc-google-fonts').innerText, wgha=wgh.match(/<link[^\>]+>/gi);for(i=0;i<wgha.length;i++){var wrpr=document.createElement('div');wrpr.innerHTML=wgha[i];document.body.appendChild(wrpr.firstChild);}}wpfcgl();});</script>
<script>document.addEventListener('DOMContentLoaded', function (){
setTimeout(function(){
if(document.querySelectorAll('[name^=ct_checkjs]').length > 0){
if(typeof apbct_public_sendAJAX==='function'&&typeof apbct_js_keys__set_input_value==='function'){
apbct_public_sendAJAX(
{ action: 'apbct_js_keys__get' },
{ callback: apbct_js_keys__set_input_value })
}}
},0)
})</script>
</body>

<!-- Mirrored from agrodova.es/about-us/ by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 05 Oct 2025 18:52:26 GMT -->
</html><!-- WP Fastest Cache file was created in 1.761 seconds, on 22 de September de 2025 @ 14:25 -->