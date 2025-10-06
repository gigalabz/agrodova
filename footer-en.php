<?php $year = date('Y'); ?>

<style>
  /* Footer bottom overrides */
  #footer-outer .footer-bottom{
    display:flex; align-items:center; justify-content:space-between;
    gap:16px; flex-wrap:wrap;
  }
  /* Make legal items horizontal + readable color */
  #footer-outer .footer-bottom .legal-menu{
    display:flex; align-items:center; gap:24px;
    list-style:none; margin:0; padding:0; flex-wrap:wrap;
  }
  #footer-outer .footer-bottom .legal-menu li{ display:inline-block; }
  #footer-outer .footer-bottom .legal-menu li,
  #footer-outer .footer-bottom .legal-menu a{
    color:#222 !important;   /* darker text */
    font-weight:600;
    text-decoration:none;
  }
  #footer-outer .footer-bottom .legal-menu a:hover{
    color:#000 !important; text-decoration:underline;
  }

  /* Darken the copyright text */
  #footer-outer .footer-bottom p{
    margin:0; color:#111 !important; font-weight:600;
  }

  /* Optional: ensure the whole footer uses a darker base text color */
  #footer-outer{ color:#222; }
</style>



<div class="wpb_wrapper"> </div></div></div></div></div></div></div></div>

<div id="footer-outer"
     data-midnight="light"
     data-cols="3"
     data-custom-color="true"
     data-disable-copyright="true"
     data-matching-section-color="false"
     data-copyright-line="false"
     data-using-bg-img="false"
     data-bg-img-overlay="0.8"
     data-full-width="false"
     data-using-widget-area="true"
     data-link-hover="default"
     style="background:#eeeeee;">

  <!-- Divider above the bottom bar -->
  <hr style="margin:0;border:0;border-top:1px solid #dcdcdc;">

  <!-- Bottom bar: left = legal links (desktop), right = copyright -->
  <style>
    .footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
    .footer-bottom .legal-menu{display:flex;gap:16px;list-style:none;margin:0;padding:0;flex-wrap:wrap}
    .footer-bottom .legal-menu a{text-decoration:none;color:inherit}
    .footer-bottom p{margin:0}
    @media (max-width: 767px){
      .footer-bottom{flex-direction:column;text-align:center}
    }
  </style>
  <div class="container" style="padding:15px 0;font-size:14px;">
    <div class="footer-bottom" style="margin-top:30px;">
      <!-- Left: legal links -->
      <ul class="legal-menu">
        <li><a href="legal-notice/index.html">LEGAL NOTICE</a></li>
        <li><a href="privacy-policy/index.html">PRIVACY POLICY</a></li>
        <li><a href="cookies-policy/index.html">COOKIES POLICY</a></li>
      </ul>

      <!-- Right: copyright -->
      <p>Agrodova <?= $year ?> - All Rights Reserved</p>
    </div>
  </div>
</div>

<div id="slide-out-widget-area-bg" class="slide-out-from-right-hover dark"></div>
<div id="slide-out-widget-area" class="slide-out-from-right-hover" data-dropdown-func="separate-dropdown-parent-link" data-back-txt="Back">
  <div class="inner-wrap">
    <div class="inner" data-prepend-menu-mobile="false">
      <a class="slide_out_area_close" href="#"><span class="screen-reader-text">Close Menu</span>
        <span class="close-wrap">
          <span class="close-line close-line1"></span>
          <span class="close-line close-line2"></span>
        </span>
      </a>
      <div class="off-canvas-menu-container mobile-only" role="navigation">
        <ul class="menu">
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-74"><a href="varieties/index.html">Varieties</a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-75"><a href="#">Activities</a>
            <ul class="sub-menu">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79"><a href="rd/index.html">R&amp;D</a></li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78"><a href="nursery/index.html">Nursery</a></li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77"><a href="technical-support/index.html">Technical support</a></li>
            </ul>
          </li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-73"><a href="careers/index.html">Careers</a></li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8646"><a href="#">About us</a>
            <ul class="sub-menu">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8645"><a href="about-us/index.html">About us</a></li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2546"><a href="vision-values/index.html">History &amp; vision</a></li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"><a href="esg/index.html">ESG</a></li>
            </ul>
          </li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-71"><a href="contact/index.html">Contact</a></li>
          <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-fr wpml-ls-menu-item wpml-ls-first-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-fr"><a href="fr/index.html"><img class="wpml-ls-flag" src="wp-content/uploads/flags/Grupo%201415%402x.png" alt="French"/></a></li>
          <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-de wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-de"><a href="de/index.html"><img class="wpml-ls-flag" src="wp-content/uploads/flags/Grupo%201418%402x.png" alt="German"/></a></li>
          <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-it wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-it"><a href="it/index.html"><img class="wpml-ls-flag" src="wp-content/uploads/flags/Grupo%201417%402x.png" alt="Italian"/></a></li>
          <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-es wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-es"><a href="es/index.html"><img class="wpml-ls-flag" src="wp-content/uploads/flags/Grupo%201414%403x.png" alt="Spanish"/></a></li>
          <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-mx wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-mx"><a href="mx/index.html"><img class="wpml-ls-flag" src="wp-content/uploads/flags/Grupo%201416%402x.png" alt="Mexico"/></a></li>
          <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-pe wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-pe"><a href="pe/index.html"><img class="wpml-ls-flag" src="wp-content/uploads/flags/peru-flag.png" alt="Peru"/></a></li>
          <li class="menu-item wpml-ls-slot-36 wpml-ls-item wpml-ls-item-us wpml-ls-menu-item wpml-ls-last-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-36-us"><a href="us/index.html"><img class="wpml-ls-flag" src="wp-content/plugins/sitepress-multilingual-cms/res/flags/us.svg" alt="USA"/></a></li>
          <li class="account-menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item areacliente-logout">
            <a href="my-account/index.html" class="sf-with-ul"><span class="acpl-user"></span></a>
          </li>
        </ul>
        <ul class="menu secondary-header-items"></ul>
      </div>
    </div>
    <div class="bottom-meta-wrap"></div>
  </div>
</div>

<a id="to-top" href="#"><i class="fa fa-angle-up"></i></a></div></div>

<aside id="moove_gdpr_cookie_info_bar" class="moove-gdpr-info-bar-hidden moove-gdpr-align-center moove-gdpr-light-scheme gdpr_infobar_postion_bottom" aria-label="GDPR Cookie Banner" style="display: none;">
  <div class="moove-gdpr-info-bar-container">
    <div class="moove-gdpr-info-bar-content">
      <script type="text/html" id="wpb-modifications"></script>
      <link rel="stylesheet" type="text/css" href="wp-content/cache/wpfc-minified/fsoqb4ss/bt9yw.css" media="all"/>
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
            <div class="moove-gdpr-company-logo-holder">
              <img src="wp-content/uploads/2023/01/Agrodova.png" alt="" width="180" height="56" class="img-responsive"/>
            </div>
            <ul id="moove-gdpr-menu">
              <li class="menu-item-on menu-item-privacy_overview menu-item-selected">
                <button data-href="#privacy_overview" class="moove-gdpr-tab-nav" aria-label="Privacy Overview">
                  <span class="gdpr-nav-tab-title">Privacy Overview</span>
                </button>
              </li>
              <li class="menu-item-strict-necessary-cookies menu-item-off">
                <button data-href="#strict-necessary-cookies" class="moove-gdpr-tab-nav" aria-label="Strictly Necessary Cookies">
                  <span class="gdpr-nav-tab-title">Strictly Necessary Cookies</span>
                </button>
              </li>
              <li class="menu-item-off menu-item-third_party_cookies">
                <button data-href="#third_party_cookies" class="moove-gdpr-tab-nav" aria-label="3rd Party Cookies">
                  <span class="gdpr-nav-tab-title">3rd Party Cookies</span>
                </button>
              </li>
            </ul>
            <div class="moove-gdpr-branding-cnt">
              <a href="https://wordpress.org/plugins/gdpr-cookie-compliance/" rel="noopener noreferrer" target="_blank" class='moove-gdpr-branding'>Powered by&nbsp; <span>GDPR Cookie Compliance</span></a>
            </div>
          </div>
          <div class="moove-gdpr-modal-right-content">
            <div class="moove-gdpr-modal-title"></div>
            <div class="main-modal-content">
              <div class="moove-gdpr-tab-content">
                <div id="privacy_overview" class="moove-gdpr-tab-main">
                  <span class="tab-title">Privacy Overview</span>
                  <div class="moove-gdpr-tab-main-content">
                    <p>This website uses cookies so that we can provide you with the best user experience possible. Cookie information is stored in your browser and performs functions such as recognising you when you return to our website and helping our team to understand which sections of the website you find most interesting and useful.</p>
                    <p>To see all the cookies on the web <a href="cookies-policy/index.html#cookie-we-use">click here</a></p>
                  </div>
                </div>
                <div id="strict-necessary-cookies" class="moove-gdpr-tab-main" style="display:none">
                  <span class="tab-title">Strictly Necessary Cookies</span>
                  <div class="moove-gdpr-tab-main-content">
                    <p>Strictly necessary cookies must always be enabled so that we can save your cookie setting preferences.</p>
                    <p>To see all the strictly necessary cookies on the web <a href="cookies-policy/index.html#cookie-we-use">click here</a></p>
                    <div class="moove-gdpr-status-bar gdpr-checkbox-disabled checkbox-selected">
                      <div class="gdpr-cc-form-wrap">
                        <div class="gdpr-cc-form-fieldset">
                          <label class="cookie-switch" for="moove_gdpr_strict_cookies">
                            <span class="gdpr-sr-only">Enable or Disable Cookies</span>
                            <input type="checkbox" aria-label="Strictly Necessary Cookies" disabled checked="checked" value="check" name="moove_gdpr_strict_cookies" id="moove_gdpr_strict_cookies">
                            <span class="cookie-slider cookie-round gdpr-sr" data-text-enable="Enabled" data-text-disabled="Disabled">
                              <span class="gdpr-sr-label">
                                <span class="gdpr-sr-enable">Enabled</span>
                                <span class="gdpr-sr-disable">Disabled</span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="moove-gdpr-strict-warning-message" style="margin-top: 10px;">
                      <p>If you disable this cookie, we will not be able to save your preferences. This means that every time you visit this website you will need to enable or disable cookies again.</p>
                    </div>
                  </div>
                </div>
                <div id="third_party_cookies" class="moove-gdpr-tab-main" style="display:none">
                  <span class="tab-title">3rd Party Cookies</span>
                  <div class="moove-gdpr-tab-main-content">
                    <p>This website uses Google Analytics to collect anonymous information such as the number of visitors to the site, and the most popular pages.</p>
                    <p>Keeping this cookie enabled helps us to improve our website.</p>
                    <p>To see all the 3rd party cookies on the web <a href="cookies-policy/index.html#cookie-we-use">click here</a></p>
                    <div class="moove-gdpr-status-bar">
                      <div class="gdpr-cc-form-wrap">
                        <div class="gdpr-cc-form-fieldset">
                          <label class="cookie-switch" for="moove_gdpr_performance_cookies">
                            <span class="gdpr-sr-only">Enable or Disable Cookies</span>
                            <input type="checkbox" aria-label="3rd Party Cookies" value="check" name="moove_gdpr_performance_cookies" id="moove_gdpr_performance_cookies">
                            <span class="cookie-slider cookie-round gdpr-sr" data-text-enable="Enabled" data-text-disabled="Disabled">
                              <span class="gdpr-sr-label">
                                <span class="gdpr-sr-enable">Enabled</span>
                                <span class="gdpr-sr-disable">Disabled</span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="moove-gdpr-strict-secondary-warning-message" style="margin-top: 10px; display: none;">
                      <p>Please enable Strictly Necessary Cookies first so that we can save your preferences!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="moove-gdpr-modal-footer-content">
              <div class="moove-gdpr-button-holder">
                <button class="mgbutton moove-gdpr-modal-allow-all button-visible" aria-label="Enable All">Enable All</button>
                <button class="mgbutton moove-gdpr-modal-reject-all button-visible" aria-label="Reject All">Reject All</button>
                <button class="mgbutton moove-gdpr-modal-save-settings button-visible" aria-label="Save Changes">Save Changes</button>
              </div>
            </div>
          </div>
          <div class="moove-clearfix"></div>
        </div>
      </dialog>

      <noscript id="wpfc-google-fonts"><link rel='stylesheet' id='nectar_default_font_open_sans-css' href='https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&amp;subset=latin%2Clatin-ext&amp;display=swap' type='text/css' media='all'/></noscript>

      <script id="wpml-cookie-js-extra">var wpml_cookies={"wp-wpml_current_language":{"value":"en","expires":1,"path":"\/"}};
var wpml_cookies={"wp-wpml_current_language":{"value":"en","expires":1,"path":"\/"}};</script>
      <script id="wc-add-to-cart-js-extra">var wc_add_to_cart_params={"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"https:\/\/Agrodova.com\/carrito\/","is_cart":"","cart_redirect_after_add":"no"};</script>
      <script id="woocommerce-js-extra">var woocommerce_params={"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","i18n_password_show":"Show password","i18n_password_hide":"Hide password"};</script>
      <script>var root=document.getElementsByTagName("html")[0]; root.setAttribute("class", "js");</script>
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
      <script>var input=document.createElement('input');
input.setAttribute('type', 'hidden');
input.setAttribute('name', 'ct_checkjs_frm');
input.setAttribute('value', '9e6e19ddc4d270ff1b6591e96c6b8712c926cbf0eaefaa83f52155caf94b0faa');
for (i=0; i < document.forms.length; i++){
if(typeof document.forms[i].id=='string'){
if(document.forms[i].id.search('form_contact-home')!=-1){
document.forms[i].appendChild(input);
}}
}</script>
      <script>(function(){
const style=document.createElement('style');
style.appendChild(document.createTextNode('#frm_field_384_container {visibility:hidden;overflow:hidden;width:0;height:0;position:absolute;}') );
document.head.appendChild(style);
document.currentScript?.remove();
})();</script>
      <script type="speculationrules">{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"\/*"},{"not":{"href_matches":["\/wp-*.php","\/wp-admin\/*","\/wp-content\/uploads\/*","\/wp-content\/*","\/wp-content\/plugins\/*","\/wp-content\/themes\/pl\/*","\/wp-content\/themes\/salient\/*","\/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}</script>
      <script src='wp-content/cache/wpfc-minified/11pzrwj3/bt9yw.js'></script>
      <script src="../unpkg.com/counterup2%402.0.2/dist/index5152.js?ver=1.0" id="counterup2-js"></script>
      <script src='wp-content/cache/wpfc-minified/qiedwado/bt9yw.js'></script>
      <script type="text/javascript" id="moove_gdpr_frontend-js-extra">
/* <![CDATA[ */
var moove_frontend_gdpr_scripts = {"ajaxurl":"https:\/\/Agrodova.com\/wp-admin\/admin-ajax.php","post_id":"41","plugin_dir":"https:\/\/Agrodova.com\/wp-content\/plugins\/gdpr-cookie-compliance","show_icons":"all","is_page":"1","ajax_cookie_removal":"false","strict_init":"2","enabled_default":{"third_party":0,"advanced":0},"geo_location":"false","force_reload":"false","is_single":"","hide_save_btn":"false","current_user":"0","cookie_expiration":"365","script_delay":"2000","close_btn_action":"1","close_btn_rdr":"","scripts_defined":"{\"cache\":true,\"header\":\"\",\"body\":\"\",\"footer\":\"\",\"thirdparty\":{\"header\":\"\\r\\n<script data-gdpr>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\\r\\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\\r\\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\\r\\n'https:\\\/\\\/www.googletagmanager.com\\\/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\\r\\n})(window,document,'script','dataLayer','GTM-NVLLM8H');<\\\/script>\\r\\n\\r\\n\\r\\n\\r\\n\\t<script data-gdpr async src=\\\"https:\\\/\\\/www.googletagmanager.com\\\/gtag\\\/js?id=UA-97945334-1\\\"><\\\/script>\\r\\n\\t<script data-gdpr>\\r\\n\\t\\twindow.dataLayer=window.dataLayer||[];\\r\\n\\t\\tfunction gtag(){dataLayer.push(arguments);}\\r\\n\\t\\tgtag('js', new Date());\\r\\n\\t\\tgtag('config', 'UA-97945334-1');\\r\\n            \\r\\n\\t<\\\/script>\",\"body\":\"\\r\\n<noscript><iframe src=\\\"https:\\\/\\\/www.googletagmanager.com\\\/ns.html?id=GTM-NVLLM8H\\\"\\r\\nheight=\\\"0\\\" width=\\\"0\\\" style=\\\"display:none;visibility:hidden\\\"><\\\/iframe><\\\/noscript>\\r\\n\",\"footer\":\"\"},\"advanced\":{\"header\":\"\",\"body\":\"\",\"footer\":\"\"}}","gdpr_scor":"true","wp_lang":"_en","wp_consent_api":"false"};
/* ]]> */
</script>
      <script src='wp-content/cache/wpfc-minified/k2810pm1/bt8zc.js'></script>
      <script id="moove_gdpr_frontend-js-after">var gdpr_consent__strict="true"
var gdpr_consent__thirdparty="false"
var gdpr_consent__advanced="false"
var gdpr_consent__cookies="strict"</script>
      <script defer src='wp-content/cache/wpfc-minified/rqm2egv/bt9yw.js'></script>
      <script id="formidable-js-after">document.addEventListener('DOMContentLoaded',function(){
window.frm_js.repeaterRowDeleteConfirmation="Are you sure you want to delete this row?";
window.frm_js.datepickerLibrary="default";
});</script>
      <script>document.addEventListener('DOMContentLoaded',function(){
});</script>
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
    </div>
  </div>
</aside>

</body>
</html>
