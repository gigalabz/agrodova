jQuery(document).ready(function($){
	if ($('#datalayerUserId').length > 0) {
		 datalayerUserPush();
	}

	if($('.return_home').length > 0){
		$(".return_home").detach().appendTo('body');
		$('#moove_gdpr_save_popup_settings_button').addClass('button-cookies-ac');
		if ($('#dashboard-check').length > 0) {
			$(".return_home").remove();
		}
	}
	if($('.return_admin').length > 0){
		$(".return_admin").detach().appendTo('body');
		if ($('.return_home').length ==0 ) {
			$(".return_admin").css({ bottom: "20px" });
		}
	}
	if ($('.custom-error-msg .woocommerce-error').length > 0) {
		if ($('.lost_password_form').length > 0) {
	    	$('.custom-error-msg .woocommerce-error li').each(function() {
	    		elm = $(this);
	    		elm = '<div class="error"><span class="acpl-warning"></span> '+elm.html()+'</div>';
	    		$(elm).insertAfter('.lost_reset_password input[name="user_login"]');
	    		$('.lost_reset_password input[name="user_login"]').parents('.form-row').addClass('error error1');
	    	});
		}else{
	    	$('.custom-error-msg .woocommerce-error li div').each(function() {
	    		elm = $(this);
	    		id = elm.attr('data-id');
	    		t = elm.attr('data-type');
	    		elm = '<div class="error"><span class="acpl-warning"></span> '+elm.html()+'</div>';
	    		//$(elm).insertAfter('.woocommerce-form input[name="'+id+'"]');
	    		$('.woocommerce-form input[name="'+id+'"]').parents('.form-row').addClass('error error'+t);
	    		$('.woocommerce-form input[name="'+id+'"]').parents('.form-row').append(elm);
	    	});
		}
	}
	if($('.change_password_planasa').length >0){
		$('body').addClass('reset-password');
	}

	$( '.dac-interesar-ver-mas-link' ).click(function() {
		$( '.dac-interesar-ver-mas' ).toggle( "slow", function() {
			// $('.dac-interesar-ver-mas').addClass('show-mas-interesar');
		});
	});

    $(document).on('click', '.custom-backdrop, .modal-recommended .custom-modal-close', function(event) {
        $('.modal-recommended .title-video-item').html('');
        $('.modal-recommended .body-modal-recommeded iframe').remove();
    });
	$(document).on('click', '.custom-modal-link.wrap-video-item', function(event) {
        action = $(this).attr('href');
		t = $(this).attr('data-title');
		v = $(this).attr('data-video');
		$(action).find('.title-video-item').html(t);
		$(action).find('.video-container').prepend('<iframe class="video" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src="https://www.youtube-nocookie.com/embed/'+v.split('.be/')[1]+'?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1" scrolling="no"></iframe>');
	});

	$(document).on('keyup', '.dac-search', function(event) {
		capl_filter($(this).val());
	});



	function capl_filter(text=''){
		if ($('.dac-interesar-carousel .dac_carousel.owl-loaded').length > 0 && $('.dac-interesar-carousel .owl-item:not(.cloned)').length == 0) {
			return false;
		}
		bc = false;
		html = '';
		b = $('#dac-interesar-back').val();
		if (b == '') {
			bc = true;
		}else{
			$('.dac-interesar-carousel .owl-carousel').trigger('replace.owl.carousel', b).trigger('refresh.owl.carousel');
		}
		$('.dac-interesar-carousel .owl-item:not(.cloned)').each(function(){
			if (bc) {
				b += $(this).html();
			}
			if (normaliza($(this)[0].innerText).search(normaliza(text))==-1) {
				$(this).hide();
			}else{
				html += $(this).html();
			}
		});
		if (bc) {
			$('#dac-interesar-back').val(b);
		}
		if ((html == '' && $('.dac-interesar-carousel .owl-item:not(.cloned)').length > 0) || $('.dac-interesar-carousel .dac_carousel:not(.owl-loaded)').length > 0 && $('.dac-interesar-carousel .dac_carousel:not(.owl-loaded) .dac-carousel-item').length == 0) {
			$('.dac-interesar-carousel .owl-carousel').hide();
			$('.dac-interesar-no-results').show();
		}else{
			$('.dac-interesar-no-results').hide();
			$('.dac-interesar-carousel .owl-carousel').show();
			$('.dac-interesar-carousel .owl-carousel').trigger('replace.owl.carousel', html).trigger('refresh.owl.carousel');
		}
	}
	capl_filter('');


	function normaliza(a) {
	    return a = replaceCadena(
	    	a = a.toLowerCase(), ["\xe1", "\xe0", "\xe4", "\xe2", "\xaa", "\xc1", "\xc0", "\xc2", "\xc4"], "a"), 
	    	a = replaceCadena(a, ["\xe9", "\xe8", "\xeb", "\xea", "\xc9", "\xc8", "\xca", "\xcb"], "e"), 
	    	a = replaceCadena(a, ["\xed", "\xec", "\xef", "\xee", "\xcd", "\xcc", "\xcf", "\xce"], "i"), 
	    	a = replaceCadena(a, ["\xf3", "\xf2", "\xf6", "\xf4", "\xd3", "\xd2", "\xd6", "\xd4"], "o"), 
	    	a = replaceCadena(a, ["\xfa", "\xf9", "\xfc", "\xfb", "\xda", "\xd9", "\xdb", "\xdc"], "u"), 
	    	a = replaceCadena(a, ["\xf1", "\xd1"], "n"), a = replaceCadena(a, ["\xe7", "\xc7"], "c"), 
	    	a
	}


	function replaceCadena(a, b, c) {
	    for (let d of b) a = a.split(d).join(c);
	    return a
	}


	$("#selectAll").click(function(){
		if (!$(this).prop('checked')) {
			$("input[type=checkbox].checkbox-notification").prop('checked', false);
		}
		else{
			$("input[type=checkbox].checkbox-notification:visible").prop('checked', true);
		}
	});


	$('input[type=checkbox].checkbox-notification').change(function(){	
		var numberOfChecked = $('.notification-message input[type=checkbox].checkbox-notification:checked').length;
		var numberOfChecked = $('.notification-message input[type=checkbox].checkbox-notification:checked').length;
		var totalCheckboxes = $('.notification-message input[type=checkbox].checkbox-notification').length;
		var numberNotChecked = totalCheckboxes - numberOfChecked;
		

		if(numberOfChecked==1){
			$('#delete-notification').show();
			$('span.label-delete-all').hide();
			$('span.label-delete').show();
		}else if(numberOfChecked>1){
			$('#delete-notification').show();
			$('span.label-delete-all').show();
			$('span.label-delete').hide();
		}else{
			$('#delete-notification').hide();
			$('span.label-delete-all').hide();
			$('span.label-delete').hide();
			$("#selectAll").prop( "checked", false );
			$('span.label-select-all').show();
			$('span.label-deselect-all').hide();
		}

		if(numberOfChecked == totalCheckboxes){
			$("#selectAll").prop( "checked", true );
			$('span.label-select-all').hide();
			$('span.label-deselect-all').show();
		}

	    if($(this).is(":checked")) {
	        $(this).parents('.notification-message').addClass("messsage-green");
	    } else {
	        $(this).parents('.notification-message').removeClass("messsage-green");
	    }
	});

	$('#selectAll').change(function(){
	    if($(this).is(":checked")) {
			$('span.label-deselect-all').show();
			$('span.label-select-all').hide();
	        $('input[type=checkbox].checkbox-notification').parents('.notification-message').addClass("messsage-green");
			$('#delete-notification').show();
			$('span.label-delete-all').show();
			$('span.label-delete').hide();
			
	    } else {
	        $('input[type=checkbox].checkbox-notification').parents('.notification-message').removeClass("messsage-green");
			$('span.label-select-all').show();
			$('span.label-deselect-all').hide();
			$('#delete-notification').hide();
			$('span.label-delete-all').hide();
			$('span.label-delete').hide();
	    }
	});


	$(".dac-toogleCollapsible-history").click(function (){
		// $(this).parent().parent().parent().parent().find('.Collapsible').slideToggle('slow', function(){});
		$(this).parent().parent().parent().parent().find('.dac-collapsible-history').toggleClass('show-row-dac');
		$(this).toggleClass('active-row');
		return false;
	});


    $.fn.pageMe = function(opts){
        var $this = this,
            defaults = {
                perPage: 7,
                showPrevNext: false,
                hidePageNumbers: false, 
                children:'tr'
            },
        settings = $.extend(defaults, opts);
        var children = $this.find(settings.children);

        var perPage = settings.perPage; 
        //var children = listElement.children();
        var pager = $('.pager');
        
        if (typeof settings.childSelector!="undefined") {
            children = listElement.find(settings.childSelector);
        }
        
        if (typeof settings.pagerSelector!="undefined") {
            pager = $(settings.pagerSelector);
        }
        
        var numItems = children.size();
        var numPages = Math.ceil(numItems/perPage);
    
        pager.data("curr",0);
        pager.data("numItems",numItems);
        
        if (settings.showPrevNext){
            $('<a href="javascript:void(0);" class="dac-pagination-link pag-left prev_link"><span class="acpl-pagination-left"></span></a>').appendTo(pager);
        }
        
        var curr = 0;
        while(numPages > curr && (settings.hidePageNumbers==false)){
            //$('<li><a href="javascript:void(0);" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);
            curr++;
        }
        
        if (settings.showPrevNext){
            $('<a href="javascript:void(0);" class="dac-pagination-link pag-right next_link"><span class="acpl-pagination-right"></span></a>').appendTo(pager);
        }
        
        pager.find('.page_link:first').addClass('active');
        pager.children().eq(1).addClass("active");
        
        goTo(0,perPage);

        pager.find('.page_link').click(function(){
            var clickedPage = $(this).html().valueOf()-1;
            goTo(clickedPage,perPage);
        });
        pager.find('.prev_link').click(function(){
            previous();
        });
        pager.find('.next_link').click(function(){
            next();
        });
        
        function previous(){
            var goToPage = parseInt(pager.data("curr")) - 1;
            if(goToPage>-1){goTo(goToPage);}
        }
         
        function next(){
            goToPage = parseInt(pager.data("curr")) + 1;
            if(goToPage<numPages){ goTo(goToPage);}
        }
        
        function goTo(page){
            var startAt = page * perPage,
                endOn = startAt + perPage;


        	pager.find('.counter-p > span:first').html(startAt+1+"-"+(endOn>numItems?numItems:endOn));
        	pager.find('.counter-p > span:last-of-type').html(numItems);

           
            children.css('display','none').slice(startAt, endOn).show();  

            if (page>=1) {
                pager.find('.prev_link').removeClass('first-last-page');
                pager.find('.prev_link').removeAttr('disabled');
            }
            else {
               	pager.find('.prev_link').attr('disabled', true);
                pager.find('.prev_link').addClass('first-last-page');
            }
            
            if (page<(numPages-1)) {
                pager.find('.next_link').removeClass('first-last-page');
                pager.find('.next_link').removeAttr('disabled');
            }
            else {
               	pager.find('.next_link').attr('disabled', true);
                pager.find('.next_link').addClass('first-last-page');

            }
            
            pager.data("curr",page);
            pager.children().removeClass("active");
            pager.children().eq(page+1).addClass("active");
        
        }
    };


    if ( $('#capl-notification-page').length>0) {


		$(document).on('click', '.page_link', function(event) {
			$("input[type=checkbox].checkbox-notification").prop('checked', false).trigger('change');			
		});
		$(document).on('click', '.prev_link', function(event) {
			$("input[type=checkbox].checkbox-notification").prop('checked', false).trigger('change');			
		});
		$(document).on('click', '.next_link', function(event) {
			$("input[type=checkbox].checkbox-notification").prop('checked', false).trigger('change');			
		});

		$(document).on('click', 'a', function(event) {
			$("input[type=checkbox].checkbox-notification").prop('checked', false).trigger('change');			
		});

		$('a.notification-group').on('click', function() {
			var noti=$(this).parent().parent();
            if (!noti.parent().hasClass("message-read") ) {
            	noti.addClass("message-read");
            	var notifications=[];
            	notifications.push($(this).find('input[name="notifications[]"]').val());
				message_read(notifications);

            }
		});


    	if ($('.checkbox-notification').length==1) {
    		$('.label-notif').hide();
    		$('#dac-notifications-left').hide();
    		$('#dac-form-notification').hide();
    		$('#dac-form-notification').addClass('not-notifications');

    	}


	    function message_read(notifications=[]){

	        if (notifications.length==0) {
		        $('div.notification-group:visible').each(function(e, data){
		        	let noti=$(this).parent().parent();
		            if (!noti.hasClass("message-read") && !noti.hasClass("message-read-temp")) {
		                
		                notifications.push($(this).find('input[name="notifications[]"]').val());
		                noti.addClass("message-read-temp");
		                //setTimeout(function(){noti.addClass("message-read")}, 2000);
		            }
		        });
		    }

	        if (notifications.length>0) {
	            $.ajax({
	                type:"POST",
	                data:{action:"message_read", notifications},  
	                success:function(datos){ 
	                    if (typeof datos.status !== 'undefined') {
	                        if (datos.value==0) {$('.notification-wrap').hide();}
	                        else{ $('.notification-wrap span').html(datos.value)}
	                    }
	                 },
	                dataType: 'json' 
	            })
	        }  
	    }
    
        var lastScrollTop = 0;
        $(window).on('scroll', function() {
            st = $(this).scrollTop();
            if(st > lastScrollTop) {
                message_read();
            }
            lastScrollTop = st;
        });    



        $('#capl-notification-page').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:5, children:'.notification-message'});            
    }

	// Animacion del circulo en order history
	if($('.circle-progress').length > 0){
		var porcentageCompleted= $('#number-circle').attr("data-progressCircle");
		var valueCircleProgress= 342 - (342 * (porcentageCompleted/100));
		console.log(porcentageCompleted);
		document.documentElement.style.setProperty('--circle-progress', valueCircleProgress);
	}

	
	if ($('.account-wrap').length > 0) {
		// Change tab class and display content
		$('.account-tabs-nav a').on('click', function(event){
		  event.preventDefault();
		  $('.account-tabs-nav > li').removeClass('tab-active');
		  $(this).parent().addClass('tab-active');
		  $('.account-content > div').hide();
		  $($(this).attr('href')).show();
		});

		if(window.location.hash!=""){
    		var hash = window.location.hash;
    		console.log(hash);
	        $(".account-tabs-nav").find('li a[href="'+hash+'"]').click();
	    }else{
			// Show the first tab by default
			$('.account-content > div').hide();
			$('.account-content > div:first').show();
			$('.account-tabs-nav > li:first').addClass('tab-active');
	    }
	    $('#password_1').on('keyup', function(e) {
	    	$('#password_2').val($(this).val());
	    	console.log($(this).val());
	    });

	}
	$('.select2').each(function () {	
		console.log($(this).attr("placeholder"));
		$(this).select2({
				language: "es",
		    placeholder: $(this).attr("placeholder"),
    		minimumResultsForSearch: -1,
			width: '100%',
  			dropdownParent: $(this).parent(),
			  createTag: function () {
			    // Disable tagging
			    return null;
			  }
		});
	});


	if ($('#table-orders-history').length > 0 && $('#myPager').length >0 ) {
        $('#table-orders-history tbody').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:10, children:'tr.tr-wrap-order-history'});  
	}
	if ($('#table-invoices-history').length > 0 && $('#myPager').length >0) {
        $('#table-invoices-history tbody').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:10, children:'tr.tr-wrap-order-history'});  
	}

	function selectContact(id){
		c = JSON.parse($('#contacts-json').val());
		if (typeof(c[id].phone) !== 'undefined') {
			$('#contacts-phone').val(c[id].phone.phoneNumber);
		}else{
			$('#contacts-phone').val('');
		}
		if (typeof(c[id].charge) !== 'undefined') {
			$('#contacts-position').val(c[id].charge);
		}else{
			$('#contacts-position').val('');
		}
		if (typeof(c[id].mail) !== 'undefined') {
			$('#contacts-email').val(c[id].mail.nameMail);
		}else{
			$('#contacts-email').val('');
		}
	}
	if ($('.account-wrap').length > 0) {
		$('#contacts-select').on('change', function(e){
			selectContact($(this).val());
		});
		selectContact(0);
	}

    $(".faq-title").click(function() {
    	if (!$(this).hasClass('active-faq')) {
	        $('.faq-content').slideUp('slow', function() {});
	        $('.active-faq').removeClass('active-faq');
    	}
        $(this).parent().find('.faq-content').slideToggle('slow', function() {});
        $(this).toggleClass('active-faq');
        return !1
    });

	if ($('.dossier-container').length > 0) {
		$('.license-group-wrap .dac-recomendaciones-link').on('click', function(e){
			url = $(this).attr('data-pdf');
			name = $(this).attr('data-name');
			variety = $(this).attr('data-variety');
			$('.license-group-wrap .dac-recomendaciones-link').removeClass('license-selected');
			$(this).addClass('license-selected');
			$('.dossier-wrap h3').html(name);
			$('.dossier-wrap h4').html(variety);
			$('.dossier-wrap .dossier-toolbar a').attr('href', url);
			$('.dossier-wrap .dossier-toolbar a').attr('download', convertToSlug(name+' '+variety)+'.pdf');
			render_dossier(url);
			$('.dossier-container').show();
			$([document.documentElement, document.body]).animate({
		        scrollTop: $(".dossier-container").offset().top
		    }, 1000);
		});

		var pdfDoc = null,
		    pageNum = 1,
		    pageRendering = false,
		    pageNumPending = null,
		    scale = 1,
		    canvas = document.getElementById('dossier-canvas'),
		    ctx = canvas.getContext('2d');
		function render_dossier(url){
			$('#dossier-canvas').css('opacity', '0');
			$('.dossier-pdf').append('<div class="dossier-loader"><div class="dossier-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>')
			  
			// Loaded via <script> tag, create shortcut to access PDF.js exports.
			var pdfjsLib = window['pdfjs-dist/build/pdf'];

			// The workerSrc property shall be specified.
			pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';


			pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
			  pdfDoc = pdfDoc_;

			  $('#dossier-canvas').css('opacity', '1');
			  $('.dossier-pdf').find('.dossier-loader').remove();
			  // Initial/first page rendering
			  renderPage_dossier(pageNum);
			});
		}

		/**
		 * Get page info from document, resize canvas accordingly, and render page.
		 * @param num Page number.
		 */
		function renderPage_dossier(num) {
		  pageRendering = true;
		  // Using promise to fetch the page
		  pdfDoc.getPage(num).then(function(page) {
		    var viewport = page.getViewport({scale: scale});
		    canvas.height = viewport.height;
		    canvas.width = viewport.width;

		    // Render PDF page into canvas context
		    var renderContext = {
		      canvasContext: ctx,
		      viewport: viewport
		    };
		    var renderTask = page.render(renderContext);

		    // Wait for rendering to finish
		    renderTask.promise.then(function() {
		      pageRendering = false;
		      if (pageNumPending !== null) {
		        // New page rendering is pending
		        renderPage_dossier(pageNumPending);
		        pageNumPending = null;
		      }
		    });
		  });

		  // Update page counters
		}

		/**
		 * If another page rendering in progress, waits until the rendering is
		 * finised. Otherwise, executes rendering immediately.
		 */
		function queueRenderPage_dossier(num) {
		  if (pageRendering) {
		    pageNumPending = num;
		  } else {
		    renderPage_dossier(num);
		  }
		}

		/**
		 * Displays previous page.
		 */
		function onPrevPage_dossier() {
		  if (pageNum <= 1) {
		    return;
		  }
		  pageNum--;
		  queueRenderPage_dossier(pageNum);
		}
		document.getElementById('prev').addEventListener('click', onPrevPage_dossier);

		/**
		 * Displays next page.
		 */
		function onNextPage_dossier() {
		  if (pageNum >= pdfDoc.numPages) {
		    return;
		  }
		  pageNum++;
		  queueRenderPage_dossier(pageNum);
		}
		document.getElementById('next').addEventListener('click', onNextPage_dossier);

		function convertToSlug(Text) {
		  return Text.toLowerCase()
		             .replace(/ /g, '-')
		             .replace(/[^\w-]+/g, '');
		}
	}
	
    if($('html').attr("lang") == "fr-FR"){
        duDatepicker('#daterange', { 
            cancelBtn: true, 
            range: true,
            format: 'dd/mm/yyyy',
            fromTarget: '#range-from', 
            toTarget: '#range-to',
            i18n: 'fr', 
            maxDate: 'today'
        });
    }
    else if($('html').attr("lang")=="es-ES"){
        duDatepicker('#daterange', { 
            cancelBtn: true, 
            range: true,
            format: 'dd/mm/yyyy',
            fromTarget: '#range-from', 
            toTarget: '#range-to',
            i18n: 'es',  
            maxDate: 'today'
        });
    }
    else{
        duDatepicker('#daterange', { 
            cancelBtn: true, 
            range: true,
            format: 'dd/mm/yyyy',
            fromTarget: '#range-from', 
            toTarget: '#range-to',
            i18n: 'en', 
            maxDate: 'today'
        });
    }
});


function datalayerUserPush(){
	if(!window.hasOwnProperty('dataLayer')){
		setTimeout(datalayerUserPush, 2000);
		return false;
	}

	dataLayer.push({ 
		'event': 'userData', 
		'userId':jQuery('#datalayerUserId').val(), 
		'userName':jQuery('#datalayerUserName').val()
	})
}

