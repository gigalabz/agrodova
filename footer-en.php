<?php $year = date('Y'); ?>
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
  <div id="footer-widgets" data-has-widgets="true" data-cols="3">
    <div class="container" style="padding:15px 0;">
      <!-- (Keep your footer widgets/content here if any. Left empty intentionally.) -->
    </div><!--/.container-->
  </div><!--/#footer-widgets-->

  <!-- Thin divider above the copyright row -->
  <hr style="border:0; border-top:1px solid #e5e5e5; margin:0;">

  <div class="row" id="copyright" data-layout="default" style="background:#ffffff; padding:12px 0;">
    <div class="container copyright-flex">
      <div class="col-md-6 span_5 col-left">
        <p style="margin:0; font-size:14px; color:#333;">
          © <?php echo $year; ?> Agrodova. All rights reserved.
        </p>
      </div>
      <div class="col-md-6 span_7 col_last col-right">
        <ul id="menu-footer-menu" class="menu" style="display:flex; gap:14px; flex-wrap:wrap; justify-content:flex-end; padding:0; margin:0; list-style:none;">
          <li class="menu-item" style="display:inline;"><a href="/en/privacy-policy" style="color:#333; text-decoration:none;">Privacy Policy</a></li>
          <li class="menu-item" style="display:inline;"><a href="/en/cookies-policy" style="color:#333; text-decoration:none;">Cookies Policy</a></li>
          <li class="menu-item" style="display:inline;"><a href="/en/legal-notice" style="color:#333; text-decoration:none;">Legal Notice</a></li>
        </ul>
      </div>
    </div>
  </div>

</div><!--/#footer-outer-->

<!-- Inline responsive tweaks for alignment/color -->
<style>
  /* Desktop: left text, right menu; Mobile: center both */
  .copyright-flex{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
    flex-wrap:wrap;
  }
  @media (max-width: 767.98px){
    .copyright-flex{ justify-content:center; text-align:center; }
    .copyright-flex .col-left,
    .copyright-flex .col-right{ width:100%; display:flex; justify-content:center; }
    /* Center the menu on mobile */
    #menu-footer-menu{ justify-content:center !important; }
  }
  /* Optional hover for better contrast on white */
  #menu-footer-menu a:hover{ color:#000 !important; }
</style>

<!-- (The GDPR banner <aside> and <dialog> were intentionally removed.) -->

<!-- Moved from GDPR aside: essential CSS/JS -->
<link rel="stylesheet" type="text/css" href="wp-content/cache/wpfc-minified/fsoqb4ss/bt9yw.css" media="all"/>
<link rel='stylesheet' id='nectar_default_font_open_sans-css' href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&amp;display=swap' type='text/css' media='all'/>
<script type="text/html" id="wpb-modifications"></script>
<script src='wp-content/cache/wpfc-minified/jq0kqx4c/bt8zc.js'></script>
<script src='wp-content/cache/wpfc-minified/11pzrwj3/bt9yw.js'></script>
<script src="../unpkg.com/counterup2%402.0.2/dist/index5152.js?ver=1.0" id="counterup2-js"></script>
<script src='wp-content/cache/wpfc-minified/qiedwado/bt9yw.js'></script>
<script src='wp-content/cache/wpfc-minified/k2810pm1/bt8zc.js'></script>
<script defer src='wp-content/cache/wpfc-minified/rqm2egv/bt9yw.js'></script>
<script>document.addEventListener('DOMContentLoaded',function(){ /* other inline DOMContentLoaded logic (kept) */ });</script>
<script>document.addEventListener('DOMContentLoaded',function(){ /* other inline DOMContentLoaded logic (kept) */ });</script>
<script>
  document.addEventListener('DOMContentLoaded', function (){
    setTimeout(function(){
      if(document.querySelectorAll('[name^=ct_checkjs]').length > 0){
        if(typeof apbct_public_sendAJAX==='function' && typeof apbct_js_keys__set_input_value==='function'){
          apbct_public_sendAJAX({ action: 'apbct_js_keys__get' }, { callback: apbct_js_keys__set_input_value })
        }
      }
    },0)
  })
</script>

</body>
</html>
