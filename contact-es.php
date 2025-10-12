<?php include 'header-es.php'; ?>

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

  #form_contact select { white-space: normal; }

  @media (max-width: 991px) {
    #form-contacto .row_col_wrap_12_inner .col,
    #form-contacto .wpb_column,
    #form_contact .frm_form_field {
      float: none !important;
      width: 100% !important;
      max-width: 100% !important;
    }
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
    #form_contact .frm_fields_container { padding: 16px !important; }
    .box-contact.column-form .vc_column-inner {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }
    .box-contact.column-form { padding-left: 0 !important; padding-right: 0 !important; }
    .divider-wrap .divider[style*="height: 140px"] { height: 60px !important; }
    .divider-wrap.height_tablet_100px.height_phone_100px .divider,
    .divider-wrap.height_phone_35px .divider,
    .divider-wrap.height_tablet_35px .divider { height: 30px !important; }
  }

  .box-contact.column-form .wpb_wrapper,
  #form_contact .frm_form_fields,
  #form_contact .frm_fields_container { overflow: visible; }
  #form_contact .frm_form_field { overflow: hidden; }

  #form_contact .vertical_radio .frm_opt_container,
  #form_contact .frm_opt_container { display: block; }
  #form_contact .frm_checkbox {
    display: block;
    margin: 10px 0;
    line-height: 1.4;
  }
  #form_contact .frm_checkbox input[type="checkbox"] {
    transform: translateY(1px);
    margin-right: 6px;
  }

  @media (max-width: 575px) {
    #form_contact .frm_submit .frm_button_submit {
      width: 100%;
      display: inline-block;
      padding: 12px 16px;
    }
  }

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

          <div class="nectar-highlighted-text" data-style="full_text" data-exp="default">
            <span class="title_blanco">| CONTÁCTENOS</span>
          </div>

          <div class="divider-wrap height_tablet_35px height_phone_35px" data-alignment="default"><div style="height: 50px;" class="divider"></div></div>

          <div id="form-contacto" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row">
            <div class="row-bg-wrap"><div class="row-bg"></div></div>

            <div class="row_col_wrap_12_inner col span_12 left">
              <div class="vc_col-sm-12 box-contact column-form wpb_column column_container vc_column_container col child_column padding-5-percent inherit_tablet inherit_phone" data-using-bg="true" data-shadow="small_depth" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#ffffff" data-bg-opacity="1">
                <div class="vc_column-inner">
                  <div class="column-bg-overlay-wrap column-bg-layer">
                    <div class="column-bg-overlay" style="opacity: 1; background-color: #ffffff;"></div>
                  </div>

                  <div class="wpb_wrapper">
                    <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                      <div class="wpb_wrapper">

                        <div class="frm_forms with_frm_style frm_style_estilos-formidable" id="frm_form_3_container">
                          <form enctype="multipart/form-data" method="post" class="frm-show-form frm_js_validate frm_pro_form" id="form_contact">
                            <div class="frm_form_fields">
                              <fieldset>
                                <legend class="frm_screen_reader">Contacto ES</legend>

                                <div class="frm_fields_container" style="padding: 30px;">
                                  <input type="hidden" name="frm_action" value="create" />

                                  <div id="frm_field_11_container" class="frm_form_field frm_required_field frm6 frm_first">
                                    <label for="field_37kpl">Nombre <span class="frm_required">*</span></label>
                                    <input type="text" id="field_37kpl" name="item_meta[11]" placeholder="Nombre*" data-reqmsg="Por favor, indique su nombre" />
                                  </div>

                                  <div id="frm_field_13_container" class="frm_form_field frm_required_field frm6">
                                    <label for="field_ccyji">Apellidos <span class="frm_required">*</span></label>
                                    <input type="text" id="field_ccyji" name="item_meta[13]" placeholder="Apellidos*" data-reqmsg="Por favor, indique sus apellidos" />
                                  </div>

                                  <div id="frm_field_12_container" class="frm_form_field frm6 frm_first">
                                    <label for="field_p4wzn">Teléfono</label>
                                    <input type="tel" id="field_p4wzn" name="item_meta[12]" placeholder="Su número de teléfono" />
                                  </div>

                                  <div id="frm_field_14_container" class="frm_form_field frm_required_field frm12 frm6">
                                    <label for="field_f1wd1">País <span class="frm_required">*</span></label>
                                    <input type="text" id="field_f1wd1" name="item_meta[14]" placeholder="Su país" data-reqmsg="Por favor, indique su país" />
                                  </div>

                                  <div id="frm_field_15_container" class="frm_form_field frm_required_field frm6 frm_first">
                                    <label for="field_qaz6m">Empresa <span class="frm_required">*</span></label>
                                    <input type="text" id="field_qaz6m" name="item_meta[15]" placeholder="Nombre de la empresa*" data-reqmsg="Por favor, indique el nombre de la empresa" />
                                  </div>

                                  <div id="frm_field_58_container" class="frm_form_field frm_required_field frm6 select-planasa">
                                    <label for="field_pkvai">Producto <span class="frm_required">*</span></label>
                                    <select name="item_meta[58]" id="field_pkvai">
                                      <option value="ARÁNDANO" selected>ARÁNDANO</option>
                                      <option value="MORA">MORA</option>
                                      <option value="FRESA">FRESA</option>
                                      <option value="FRAMBUESA">FRAMBUESA</option>
                                      <option value="ENDIBIAS">ENDIBIAS</option>
                                      <option value="ESPÁRRAGOS">ESPÁRRAGOS</option>
                                      <option value="AJO">AJO</option>
                                    </select>
                                  </div>

                                  <div id="frm_field_60_container" class="frm_form_field frm_required_field frm6 select-planasa frm_first">
                                    <label for="field_7zflg">Tipo de empresa <span class="frm_required">*</span></label>
                                    <select name="item_meta[60]" id="field_7zflg">
                                      <option value="Productores" selected>Productores</option>
                                      <option value="Comercializadores">Comercializadores</option>
                                      <option value="Minoristas">Minoristas</option>
                                      <option value="Otro">Otro</option>
                                    </select>
                                  </div>

                                  <div id="frm_field_383_container" class="frm_form_field frm6">
                                    <label for="field_c5yt7">Solicitud</label>
                                    <textarea name="item_meta[383]" id="field_c5yt7" rows="5" placeholder="Indique todos los detalles posibles…"></textarea>
                                  </div>

                                  <div id="frm_field_19_container" style="margin-top:50px;" class="frm_form_field frm_required_field frm12 frm_first">
                                    <label for="field_b39bh">Correo electrónico <span class="frm_required">*</span></label>
                                    <input type="email" id="field_b39bh" name="item_meta[19]" placeholder="Correo electrónico" data-reqmsg="Por favor, indique un correo electrónico válido" />
                                  </div>

                                  <div id="frm_field_20_container" class="frm_form_field frm_required_field frm12 frm_first vertical_radio">
                                    <div class="frm_primary_label">Verificación: <span class="frm_required">*</span></div>
                                    <div class="frm_opt_container">
                                      <div class="frm_checkbox">
                                        <label>
                                          <input type="checkbox" name="item_meta[20][]" />
                                          He leído y acepto los <a href="../privacy-policy/index.html" target="_blank">Términos de uso y la Política de privacidad</a>.
                                        </label>
                                      </div>
                                      <div class="frm_checkbox">
                                        <label>
                                          <input type="checkbox" name="item_meta[20][]" />
                                          He leído y acepto la información sobre protección de datos: Plantas de Navarra SA (Agrodova), como responsable del tratamiento, le informa de que sus datos se recogen con la finalidad de gestionar las comunicaciones internas o externas de la empresa, así como para responder a consultas o solicitudes recibidas a través de los formularios del sitio web. La base legal para el tratamiento de sus datos es el consentimiento del interesado al contactar con nuestra organización. Sus datos no se cederán a terceros salvo obligación legal. Cualquier persona tiene derecho a solicitar el acceso, rectificación, supresión, limitación del tratamiento, oposición o portabilidad de sus datos personales, escribiendo a la dirección física indicada en la web o enviando un correo electrónico a info@agrodova.com indicando el derecho que desea ejercer. Puede obtener información adicional en nuestro aviso legal.
                                        </label>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="frm_submit">
                                    <button class="frm_button_submit frm_final_submit" type="submit">Enviar</button>
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

          <div class="divider-wrap height_tablet_100px height_phone_100px"><div style="height: 100px;" class="divider"></div></div>

        </div><!-- /wpb_wrapper -->
      </div><!-- /vc_column-inner -->
    </div><!-- /vc_col-sm-12 -->
  </div><!-- /row_col_wrap_12 -->
</div><!-- /fws row -->
</div></div></div></div></div>

<?php include 'footer-es.php'; ?>
