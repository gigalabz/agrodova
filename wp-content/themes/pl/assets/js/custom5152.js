jQuery(document).ready(function ($) {
	if($('.counter').length >  0){
		const counterUp = window.counterUp.default

		const callback = entries => {
			entries.forEach( entry => {
				const el = entry.target
				if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
					counterUp( el, {
						duration: 2000,
						delay: 16,
					} )
					el.classList.add( 'is-visible' )
				}
			} )
		}

		const IO = new IntersectionObserver( callback, { threshold: 1 } )

		const elements = document.querySelectorAll( '.counter' );	
		elements.forEach( el => {
			IO.observe(el);
		});
	}
	function sliderCurve(){
		if ($(window).width() > 575) {
			if ($('.curve_slider .slider_curve.desktop').length == 0) {
				$('.curve_slider .slider_curve.responsive').remove();
				$('<svg version="1.1" class="slider_curve desktop" preserveAspectRatio="none" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 626.72" xml:space="preserve"><path class="st0" d="M960,531.45C429.81,531.45,0,293.51,0,0v626.72h1920V0C1920,293.51,1490.19,531.45,960,531.45z" style="fill:#FFFFFF;"/></svg>').insertAfter('.curve_slider .nectar-slider-wrap .swiper-container .swiper-wrapper');
			}
		}else{
			if ($('.curve_slider .slider_curve.responsive').length == 0) {
				$('.curve_slider .slider_curve.desktop').remove();
				$('<svg version="1.1" class="slider_curve responsive" preserveAspectRatio="none" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 282.39" xml:space="preserve"><path class="st0" d="M250.22,271.39C112.71,271.39,1.15,160.37,0.24,23.08H0v257.64h500V31.42 C494.73,164.84,384.93,271.39,250.22,271.39z" style="fill:#FFFFFF;"/></svg>').insertAfter('.curve_slider .nectar-slider-wrap .swiper-container .swiper-wrapper');
			}
		}
	}
	sliderCurve();
	$(window).on('resize', function () {
	   sliderCurve();
	});

	// Modales
	$('.custom-modal').wrap('<div class="custom-modal-wrapper"></div>');
    if ($('.custom-modal-wrapper').length > 0) {
        $('.custom-modal-wrapper').each(function() {
            $(this).detach().appendTo("body");
        });
    }
    $(document).on("click", '.custom-modal-link', function (o) {
        event.preventDefault();
        event.stopPropagation();
        action = $(this).attr('href');
        if (action == undefined) {
            action = $(this).find('a').attr('href')
        }
        $('html').addClass('custom-modal-open');
        if ($(action).find('.custom-modal-close').length == 0) {
            $(action).append('<a href="javascript:void(0);" class="custom-modal-close" title="Close"><i class="fa fa-times" aria-hidden="true"></i></a>');
        }
         $(action).parents('.custom-modal-wrapper').append('<div class="custom-backdrop"></div>');
        $(action).parents('.custom-modal-wrapper').addClass('show');
        if ($(window).width() < 1231) {
            $("body .slide_out_area_close").trigger('click');
            $("body .slide_out_area_close").click();
            $("body #ajax-content-wrap").trigger('click');
            $("body #ajax-content-wrap").click()
        }
    });
    $(document).on('click', '.custom-backdrop', function(event) {
        closeModal(event)
    });
    $(document).on('click', '.custom-modal-close', function(event) {
        closeModal(event)
    });
    function closeModal(event) {
        event.preventDefault();
        event.stopPropagation();
        $('html').removeClass('custom-modal-open');
        $('.custom-backdrop').remove();
        $('.custom-modal-wrapper').removeClass('show')
    }

	// Modales
	/*$('.custom-modal').wrap('<div class="custom-modal-wrapper"></div>')
	$('.custom-modal').append('<button class="custom-modal-close"><i class="fa fa-times" aria-hidden="true"></i></div>')
	$('.custom-modal-link').click(function(event) {
		event.preventDefault();
		event.stopPropagation();
	    action = $(this).attr('href');
	    if (action == undefined) {
	    	action = $(this).find('a').attr('href');
	    }
	    $('html').addClass('custom-modal-open');
	    $(action).parents('.custom-modal-wrapper').append('<div class="custom-backdrop"></div>');
	    $(action).parents('.custom-modal-wrapper').addClass('show');
        if ($(window).width() < 1231) {
        	$("body .slide_out_area_close").trigger('click');
        	$("body .slide_out_area_close").click();
        	$("body #ajax-content-wrap").trigger('click');
        	$("body #ajax-content-wrap").click();
        }
	});
	$(document).on('click', '.custom-backdrop', function(event) {
		closeModal(event)
	});
	$(document).on('click', '.custom-modal-close', function(event) {
		closeModal(event)
	});
	function closeModal(event){
		event.preventDefault();
		event.stopPropagation();
	    $('html').removeClass('custom-modal-open');
	    $('.custom-backdrop').remove();
	    $('.custom-modal-wrapper').removeClass('show');
	}*/

	$('.select-planasa > select').select2({
		minimumResultsForSearch: Infinity
	});

	$(".option-lg").on('click', function(event){
	    var name = $(this).attr('name');
	    var value = $(this).val();
	    var file = $('#file-license-'+name).val();
	    file=JSON.parse(file);
	    $('#url-file-license-'+name).attr('href', 'https://planasa.com/wp-content/uploads/data-sheet/'+file[value]);
	});
});

