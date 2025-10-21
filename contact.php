<?php include 'header-en.php'; ?>

<!-- ===== Page-load Legal Info Popup (lightweight, no dependencies) ===== -->
<style>
  /* Backdrop */
  .legal-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.6);
    display: none;              /* toggled via .show */
    align-items: center;
    justify-content: center;
    z-index: 999999;            /* above theme/page builder layers */
  }
  .legal-modal-backdrop.show { display: flex; }

  /* Card */
  .legal-modal {
    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 20px 60px rgba(2,8,23,.25);
    width: 94%;
    max-width: 520px;
    padding: 24px 22px 20px;
    position: relative;
    text-align: center;
  }

  .legal-modal img.legal-icon {
    display: block;
    margin: 0 auto 12px;
    width: 64px;
    height: 64px;
    object-fit: contain;
  }

  .legal-modal h3 {
    margin: 6px 0 10px;
    font-size: 22px;
    line-height: 1.25;
    font-weight: 700;
    color: #0f172a; /* slate-900 */
  }

  .legal-modal p {
    margin: 0 0 16px;
    color: #475569; /* slate-600 */
    line-height: 1.55;
  }

  /* Close (X) */
  .legal-modal .legal-close {
    position: absolute;
    top: 10px;
    right: 12px;
    width: 34px;
    height: 34px;
    border: 0;
    background: transparent;
    color: #334155;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
  }
  .legal-modal .legal-close:focus { outline: 2px solid #93c5fd; border-radius: 8px; }

  /* --- Minimal Bootstrap-like button styles (in case Bootstrap isn’t loaded here) --- */
  .btn { display:inline-block; font-weight:600; text-align:center; text-decoration:none; vertical-align:middle;
         cursor:pointer; user-select:none; border:1px solid transparent; padding:.5rem 1rem; font-size:1rem;
         line-height:1.5; border-radius:.375rem; }
  .btn-sm { padding:.375rem .75rem; font-size:.875rem; line-height:1.5; border-radius:.25rem; }
  .btn-success { color:#fff; background-color:#198754; border-color:#198754; }
  .btn-success:hover { color:#fff; background-color:#157347; border-color:#146c43; }
</style>

<div class="legal-modal-backdrop" id="legalModalBackdrop" role="dialog" aria-modal="true" aria-labelledby="legalModalTitle">
  <div class="legal-modal" role="document" tabindex="-1">
    <button type="button" class="legal-close" id="legalModalClose" aria-label="Close">×</button>
    <img class="legal-icon" src="https://www.agrodova.es/wp-content/info.png" alt="Information">
    <h3 id="legalModalTitle">Read Legal Information</h3>
    <p>Click the button below to be redirected to the Legal Information Section.</p>
    <!-- Direct anchor to section for simplest & most reliable behavior -->
    <a class="btn btn-sm btn-success" href="legal-notice-en#para2">Read Now</a>
  </div>
</div>

<script>
  // Show on page load, allow closing by X or by clicking backdrop
  document.addEventListener('DOMContentLoaded', function () {
    var backdrop = document.getElementById('legalModalBackdrop');
    var closeBtn = document.getElementById('legalModalClose');

    if (backdrop) {
      // show
      backdrop.classList.add('show');

      // close handlers
      if (closeBtn) closeBtn.addEventListener('click', function(){ backdrop.classList.remove('show'); });
      backdrop.addEventListener('click', function(e){
        if (e.target === backdrop) backdrop.classList.remove('show');
      });

      // ESC to close
      document.addEventListener('keydown', function(e){
        if (e.key === 'Escape') backdrop.classList.remove('show');
      });
    }
  });
</script>
<!-- ===== End popup block ===== -->


<!-- ===== Responsive fixes for the contact form (mobile + tablet) ===== -->
<style>
  /* Ensure the full-width row background never constrains the form */
  #ajax-content-wrap .container-wrap,
  #ajax-content-wrap .container.main-content {
    overflow: visible;
  }

  /* Keep the white form card centered and readable on large screens */
  .box-contact.column-form .vc_column-inner {
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Base inputs should naturally fill their container */
  #form_contact input[type="text"],
  #form_contact input[type="email"],
  #form_contact input[type="tel"],
  #form_contact select,
  #form_contact textarea {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  /* Long option text should wrap instead of pushing the layout */
  #form_contact select {
    white-space: normal;
  }

  /* Formidable’s grid classes often keep 50% widths.
     On small screens force single-column to avoid “pipe” narrow look. */
  @media (max-width: 991px) {
    /* Kill any leftover floats/widths from theme/page-builder grid */
    #form-contacto .row_col_wrap_12_inner .col,
    #form-contacto .wpb_column,
    #form_contact .frm_form_field {
      float: none !important;
      width: 100% !important;
      max-width: 100% !important;
    }

    /* Formidable specific half/third classes forced to full width */
    #form_contact .frm6,
    #form_contact .frm4,
    #form_contact .frm3,
    #form_contact .frm2,
    #form_contact .frm_first,
    #form_contact .frm_last {
      width: 100% !important;
      max-width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      clear: both !important;
    }

    /* Reduce inner paddings for breathing space on phones */
    #form_contact .frm_fields_container {
      padding: 16px !important;
    }

    /* Reduce the column padding from the page builder on phones */
    .box-contact.column-form .vc_column-inner {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }

    /* Make the white card edge-to-edge (with a small gap) on mobile */
    .box-contact.column-form {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    /* Shrink tall spacers above/below the form on phones */
    .divider-wrap .divider[style*="height: 140px"] {
      height: 60px !important;
    }
    .divider-wrap.height_tablet_100px.height_phone_100px .divider,
    .divider-wrap.height_phone_35px .divider,
    .divider-wrap.height_tablet_35px .divider {
      height: 30px !important;
    }
  }

  /* Avoid the selects “sticking out” of the card on iOS/Android */
  .box-contact.column-form .wpb_wrapper,
  #form_contact .frm_form_fields,
  #form_contact .frm_fields_container {
    overflow: visible;          /* allow hints/validation bubbles */
  }
  #form_contact .frm_form_field {
    overflow: hidden;           /* contain long inline elements */
  }

  /* Checkbox group vertical & tappable on mobile */
  #form_contact .vertical_radio .frm_opt_container,
  #form_contact .frm_opt_container {
    display: block;
  }
  #form_contact .frm_checkbox {
    display: block;
    margin: 10px 0;
    line-height: 1.4;
  }
  #form_contact .frm_checkbox input[type="checkbox"] {
    transform: translateY(1px);
    margin-right: 6px;
  }

  /* Submit button full-width on mobile for easier tap */
  @media (max-width: 575px) {
    #form_contact .frm_submit .frm_button_submit {
      width: 100%;
      display: inline-block;
      padding: 12px 16px;
    }
  }

  /* Make sure background image row never shrinks content area */
  .top-level.full-width-section .row-bg-wrap,
  .top-level.full-width-section .row-bg {
    overflow: visible !important;
  }
</style>

</div><div id="ajax-content-wrap">
<div class="container-wrap">
<div class="container main-content">
<div class="row">
<div id="fws_68d155de2d3ca" data-column-margin="default" data-midnight="dark" class="wpb_row vc_row-fluid vc_row top-level full-width-section top_margin_300px" style="padding-top: 0px; padding-bottom: 0px;">
  <div class="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false">
    <div class="inner-wrap using-image">
      <div class="row-bg viewport-desktop using-image" style="background-position: center center; background-repeat: no-repeat;" data-nectar-img-src="https://agrodova.es/wp-content/uploads/2022/02/bg-contact.jpg"></div>
    </div>
  </div>

  <div class="row_col_wrap_12 col span_12 dark left">
    <div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
      <div class="vc_column-inner">
        <div class="wpb_wrapper">

          <div class="divider-wrap" data-alignment="default"><div style="height: 140px;" class="divider"></div></div>

          <div class="nectar-highlighted-text" data-style="full_text" data-exp="default" data-using-custom-color="false" data-animation-delay="false" data-color="" data-color-gradient="">
            <span class="title_blanco">| CONTACT US</span>
          </div>

          <div class="divider-wrap height_tablet_35px height_phone_35px" data-alignment="default"><div style="height: 50px;" class="divider"></div></div>

          <div id="form-contacto" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row">
            <div class="row-bg-wrap"><div class="row-bg"></div></div>

            <div class="row_col_wrap_12_inner col span_12 left">
              <div class="vc_col-sm-12 box-contact column-form wpb_column column_container vc_column_container col child_column padding-5-percent inherit_tablet inherit_phone" data-using-bg="true" data-shadow="small_depth" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#ffffff" data-bg-opacity="1" data-animation="" data-delay="0">
                <div class="vc_column-inner">
                  <div class="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none">
                    <div class="column-bg-overlay" style="opacity: 1; background-color: #ffffff;"></div>
                  </div>

                  <div class="wpb_wrapper">
                    <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                      <div class="wpb_wrapper">

                        <div class="frm_forms with_frm_style frm_style_estilos-formidable" id="frm_form_3_container" data-token="a9d8f072565d43d3649d4af2c4182821">
                          <form enctype="multipart/form-data" method="post" class="frm-show-form frm_js_validate frm_pro_form" id="form_contact" data-token="a9d8f072565d43d3649d4af2c4182821">
                            <div class="frm_form_fields">
                              <fieldset>
                                <legend class="frm_screen_reader">Contact EN</legend>

                                <!-- Reduced default padding; overridden responsively above -->
                                <div class="frm_fields_container" style="padding: 30px;">
                                  <input type="hidden" name="frm_action" value="create" />
                                  <input type="hidden" name="form_id" value="3" />
                                  <input type="hidden" name="frm_hide_fields_3" id="frm_hide_fields_3" value="" />
                                  <input type="hidden" name="form_key" value="contact" />
                                  <input type="hidden" name="item_meta[0]" value="" />
                                  <input type="hidden" id="frm_submit_entry_3" name="frm_submit_entry_3" value="64c562c416" />
                                  <input type="hidden" name="_wp_http_referer" value="/contact/" />

                                  <div id="frm_field_11_container" class="frm_form_field form-field frm_required_field frm_top_container frm6 frm_first">
                                    <label for="field_37kpl" id="field_37kpl_label" class="frm_primary_label">Name <span class="frm_required">*</span></label>
                                    <input type="text" id="field_37kpl" name="item_meta[11]" value="" maxlength="90" placeholder="Name*" data-reqmsg="Please provide a name" aria-required="true" data-invmsg="Text is invalid" aria-invalid="false" />
                                  </div>

                                  <div id="frm_field_13_container" class="frm_form_field form-field frm_required_field frm_top_container frm6">
                                    <label for="field_ccyji" id="field_ccyji_label" class="frm_primary_label">Surname <span class="frm_required">*</span></label>
                                    <input type="text" id="field_ccyji" name="item_meta[13]" value="" maxlength="90" placeholder="Surname*" data-reqmsg="Please provide a surname" aria-required="true" data-invmsg="Text is invalid" aria-invalid="false" />
                                  </div>

                                  <div id="frm_field_12_container" class="frm_form_field form-field frm_top_container frm6 frm_first">
                                    <label for="field_p4wzn" id="field_p4wzn_label" class="frm_primary_label">Phone Number</label>
                                    <input type="tel" id="field_p4wzn" name="item_meta[12]" value="" maxlength="90" placeholder="Your phone number" data-invmsg="Phone is invalid" aria-invalid="false" pattern="((\+\d{1,3}(-|.| )?\(?\d\)?(-| |.)?\d{1,5})|(\(?\d{2,6}\)?))(-|.| )?(\d{3,4})(-|.| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" />
                                  </div>

                                  <div id="frm_field_14_container" class="frm_form_field form-field frm_required_field frm_top_container frm12 frm6">
                                    <label for="field_f1wd1" id="field_f1wd1_label" class="frm_primary_label">Country <span class="frm_required">*</span></label>
                                    <input type="text" id="field_f1wd1" name="item_meta[14]" value="" maxlength="90" placeholder="Your Country" data-reqmsg="Please provide a country" aria-required="true" data-invmsg="Text is invalid" aria-invalid="false" />
                                  </div>

                                  <div id="frm_field_15_container" class="frm_form_field form-field frm_required_field frm_top_container frm6 frm_first">
                                    <label for="field_qaz6m" id="field_qaz6m_label" class="frm_primary_label">Company <span class="frm_required">*</span></label>
                                    <input type="text" id="field_qaz6m" name="item_meta[15]" value="" maxlength="90" placeholder="Company Name*" data-reqmsg="Please provide a company name" aria-required="true" data-invmsg="Text is invalid" aria-invalid="false" />
                                  </div>

                                  <div id="frm_field_58_container" class="frm_form_field form-field frm_required_field frm_top_container frm6 select-planasa">
                                    <label for="field_pkvai" id="field_pkvai_label" class="frm_primary_label">Product <span class="frm_required" aria-hidden="true">*</span></label>
                                    <select name="item_meta[58]" id="field_pkvai" data-frmval="BLUEBERRY" data-reqmsg="Please select a product" aria-required="true" data-invmsg="Product is invalid" aria-invalid="false">
                                      <option value="BLUEBERRY" selected='selected'>BLUEBERRY</option>
                                      <option value="BLACKBERRY">BLACKBERRY</option>
                                      <option value="STRAWBERRY">STRAWBERRY</option>
                                      <option value="RASPBERRY">RASPBERRY</option>
                                      <option value="ENDIVES">ENDIVES</option>
                                      <option value="ASPARAGUS">ASPARAGUS</option>
                                      <option value="GARLIC">GARLIC</option>
                                    </select>
                                  </div>

                                  <div id="frm_field_60_container" class="frm_form_field form-field frm_required_field frm_top_container frm6 select-planasa frm_first">
                                    <label for="field_7zflg" id="field_7zflg_label" class="frm_primary_label">Type of Company <span class="frm_required" aria-hidden="true">*</span></label>
                                    <select name="item_meta[60]" id="field_7zflg" data-frmval="Growers" data-reqmsg="Please fill out this field" aria-required="true" data-invmsg="Type of Company is invalid" aria-invalid="false">
                                      <option value="Growers" selected='selected'>Growers</option>
                                      <option value="Marketers/traders">Marketers/traders</option>
                                      <option value="Retailers">Retailers</option>
                                      <option value="Other">Other</option>
                                    </select>
                                  </div>

                                  <div id="frm_field_383_container" class="frm_form_field form-field frm_top_container frm6 frm6">
                                    <label for="field_c5yt7" id="field_c5yt7_label" class="frm_primary_label">Request</label>
                                    <textarea name="item_meta[383]" id="field_c5yt7" rows="5" placeholder="Give as many details as possible…" data-invmsg="Request no es válido" aria-invalid="false"></textarea>
                                  </div>

                                  <div id="frm_field_19_container" style="margin-top:50px;" class="frm_form_field form-field frm_required_field frm_top_container frm12 frm12 frm_first">
                                    <label for="field_b39bh" id="field_b39bh_label" class="frm_primary_label">Email <span class="frm_required">*</span></label>
                                    <input type="email" id="field_b39bh" name="item_meta[19]" value="" maxlength="90" placeholder="Email" data-reqmsg="Please provide an email address" aria-required="true" data-invmsg="Please provide a properly formatted email address" aria-invalid="false" />
                                  </div>

                                  <div id="frm_field_20_container" class="frm_form_field form-field frm_required_field frm_top_container frm12 frm_first vertical_radio">
                                    <div id="field_ht96f_label" class="frm_primary_label">Verification checks: <span class="frm_required">*</span></div>
                                    <div class="frm_opt_container" aria-labelledby="field_ht96f_label" role="group">
                                      <div class="frm_checkbox" id="frm_checkbox_20-0">
                                        <label for="field_ht96f-0">
                                          <input type="checkbox" name="item_meta[20][]" id="field_ht96f-0" value="I have read and agree to the &lt;a href=_/privacy-policy/index.html target=&quot;_blank&quot; &gt;Terms of Use and Privacy Policy&lt;/a&gt;." data-reqmsg="Verification checks: is mandatory" data-invmsg="Verification checks: is invalid" aria-invalid="false" aria-required="true" />
                                          I have read and agree to the <a href="../privacy-policy/index.html" target="_blank">Terms of Use and Privacy Policy</a>.
                                        </label>
                                      </div>
                                      <div class="frm_checkbox" id="frm_checkbox_20-1">
                                        <label for="field_ht96f-1">
                                          <input type="checkbox" name="item_meta[20][]" id="field_ht96f-1" value="I have read and accept the following information on data protection: Plantas de Navarra SA (Agrodova), as data controller, informs you that your data is collected for the purpose of managing the company's internal or external communications, as well as for respond to queries or requests obtained through the forms on the website. The legal basis for the treatment of your data is the consent of the interested party when contacting our organization. Your data will not be transferred to third parties except legal obligation. Any person has the right to request access, rectification, deletion, treatment limitation, opposition or the right to portability of their personal data, by writing to our physical address indicated on the web, or by sending an email to info@agrodova.com, indicating the right you wish to exercise. You can obtain additional information in our legal notice." data-reqmsg="Verification checks: is mandatory" data-invmsg="Verification checks: is invalid" aria-invalid="false" />
                                          I have read and accept the following information on data protection: Plantas de Navarra SA (Agrodova), as data controller, informs you that your data is collected for the purpose of managing the company's internal or external communications, as well as for respond to queries or requests obtained through the forms on the website. The legal basis for the treatment of your data is the consent of the interested party when contacting our organization. Your data will not be transferred to third parties except legal obligation. Any person has the right to request access, rectification, deletion, treatment limitation, opposition or the right to portability of their personal data, by writing to our physical address indicated on the web, or by sending an email to info@agrodova.com, indicating the right you wish to exercise. You can obtain additional information in our legal notice.
                                        </label>
                                      </div>
                                    </div>
                                  </div>

                                  <input type="hidden" name="item_meta[21]" id="field_w9l4v" value="CONTACT" data-frmval="CONTACT" />
                                  <input type="hidden" name="item_key" value="" />

                                  <div id="frm_field_384_container">
                                    <label for="field_iqzbi"> If you are human, leave this field blank. </label>
                                    <input id="field_iqzbi" type="text" class="frm_form_field form-field frm_verify" name="item_meta[384]" value="" />
                                  </div>

                                  <input name="frm_state" type="hidden" value="dQWw6f3rmiszXAgKyUWpYi/lX1eePYJRkBEdD8QqC+40ctn9uMy0NXjTq/LfPzU0" />

                                  <div class="frm_submit">
                                    <button class="frm_button_submit frm_final_submit" type="submit" formnovalidate="formnovalidate">Send</button>
                                  </div>
                                </div>
                              </fieldset>
                            </div>
                          </form>
                        </div><!-- /frm_forms -->

                      </div>
                    </div>
                  </div><!-- /wpb_wrapper -->
                </div><!-- /vc_column-inner -->
              </div><!-- /box-contact -->
            </div><!-- /row_col_wrap_12_inner -->
          </div><!-- /form-contacto -->

          <div class="divider-wrap height_tablet_100px height_phone_100px" data-alignment="default"><div style="height: 100px;" class="divider"></div></div>

        </div><!-- /wpb_wrapper -->
      </div><!-- /vc_column-inner -->
    </div><!-- /vc_col-sm-12 -->
  </div><!-- /row_col_wrap_12 -->
</div><!-- /fws row -->
</div></div></div></div></div>

<?php include 'footer-en.php'; ?>
