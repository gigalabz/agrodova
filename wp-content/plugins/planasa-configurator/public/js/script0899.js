jQuery(document).ready(function($){
    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.addLicense("CH317904801");
    am4core.addLicense("MP317904801");
    // Themes end

    // Create map instance
    var chart = am4core.create("planasa-map", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

	 chart.background.fill = am4core.color("#ffffff");
	 chart.background.fillOpacity = 1;
    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Zoom control
    chart.maxZoomLevel = 3;
    chart.panBehavior = "none";
  	chart.events.on("zoomlevelchanged", function(){
  	  // queue event loop so a final zoomlevelchanged can be "cauight"
  	  setTimeout(
  	    function() {
  	      if (chart.zoomLevel <= 1) {
  	        chart.panBehavior = "none";
  	      } else if (chart.zoomLevel > 1) {
  	        chart.panBehavior = "move";
  	      }
  	    }, 0);
  	});
    var customZoomFactor = 3; // default: 2
    $(document).on("click", '.btn-zoom.zoom-plus', function (o) {
      chart.zoomToGeoPoint(
        chart.zoomGeoPoint,
        chart.zoomLevel * customZoomFactor,
        false
      );
    });
    $(document).on("click", '.btn-zoom.zoom-minus', function (o) {
      chart.zoomToGeoPoint(
        chart.zoomGeoPoint,
        chart.zoomLevel / customZoomFactor,
        false
      );
    });
    // This array will be populated with country IDs to exclude from the world series
    var excludedCountries = ["AQ"];

    var currentActive;
    var currentSeries =[];
    function unsetup_map_zones(){
      if (currentActive) {
        currentActive.isActive = false;
      }
      currentSeries.forEach(function(serie) {
        chart.series.removeIndex(
          chart.series.indexOf(serie)
        ).dispose();
      })
      currentSeries = [];
    }
    function setup_map_zones(zones){
      // Create a series for each group, and populate the above array
      if (inArray('all_climates', zones)) {
	      var series = chart.series.push(new am4maps.MapPolygonSeries());
	      currentSeries.push(series);
	      series.name = 'all_climates';
	      series.useGeodata = true;
    	  series.exclude = ["AQ"];
	      series.setStateOnChildren = true;
	      series.calculateVisualCenter = true;

	      // Country shape properties & behaviors
	      var mapPolygonTemplate = series.mapPolygons.template;
	      // Instead of our custom title, we could also use {name} which comes from geodata  
	      mapPolygonTemplate.fill = am4core.color(fruit_colors[jQuery('.planasa-main input[name="product"]:checked').val()]);
    	  mapPolygonTemplate.stroke = am4core.color("#f5f7ff");
    	  mapPolygonTemplate.strokeOpacity = 0.1;
	      mapPolygonTemplate.fillOpacity = 1;
	      mapPolygonTemplate.zIndex = 1;
	      mapPolygonTemplate.nonScalingStroke = true;
		  $('.planasa-main').find('.planasa-attribute').addClass("planasa-active");
          $('.planasa-modales').hide();
          $('.planasa-advise-2').show();
	      $('.planasa-main').addClass("zones-active attribute-active");
    	  if (window.innerWidth <= 1000) {
			$('.planasa-main').find('.planasa-products .Collapsible').hide();
			$('.planasa-main').find('.planasa-products .toogleCollapsible').removeClass('active-tab');
			$('.planasa-main').find('.planasa-zone .Collapsible').hide();
			$('.planasa-main').find('.planasa-zone .toogleCollapsible').removeClass('active-tab');
			$('.planasa-main').find('.planasa-attribute .toogleCollapsible').trigger('click');
          }
	      jQuery('#map-country').val('all_climates');
      }else{
	    climatesData.forEach(function(group) {
	        if (inArray(group.name, zones)) {
	          var series = chart.series.push(new am4maps.MapPolygonSeries());
	          currentSeries.push(series);
	          series.name = group.name;
	          series.useGeodata = true;
	          series.zIndex = group.zIndex;
	          var includedCountries = [];
	          group.data.forEach(function(country) {
	            includedCountries.push(country.id);
	            excludedCountries.push(country.id);
	          });
	          series.include = includedCountries;

	          series.setStateOnChildren = true;
	          series.calculateVisualCenter = true;

	          // Country shape properties & behaviors
	          var mapPolygonTemplate = series.mapPolygons.template;
	          // Instead of our custom title, we could also use {name} which comes from geodata  
	          mapPolygonTemplate.fill = am4core.color("#d6d6d6");
	          mapPolygonTemplate.stroke = am4core.color(fruit_colors[jQuery('.planasa-main input[name="product"]:checked').val()]);
	          mapPolygonTemplate.strokeWidth = 1.5;
	          mapPolygonTemplate.fillOpacity = 1;
	          mapPolygonTemplate.zIndex = 1;
	          mapPolygonTemplate.nonScalingStroke = true;

	          // Create active state
	          var activeState = mapPolygonTemplate.states.create("active");
	          activeState.properties.fill = am4core.color(fruit_colors[jQuery('.planasa-main input[name="product"]:checked').val()]);
	          activeState.properties.fillOpacity = 1;

	          
	          mapPolygonTemplate.events.on("hit", function(ev) {
	            selectCountry(ev.target.dataItem.dataContext.id);
	          });
	          series.data = JSON.parse(JSON.stringify(group.data));
	        }
	    });
	      if (inArray('south_africa', zones)) {
	        var shapeSeries = chart.series.push(new am4maps.MapPolygonSeries());

	          shapeSeries.data = [{
	            "title": "España Norte",
	            "zIndex": 2,
	            "multiGeoPolygon": africa_polygon
	          }];



	          var shapeTemplate = shapeSeries.mapPolygons.template;
	          shapeTemplate.stroke = am4core.color(fruit_colors[jQuery('.planasa-main input[name="product"]:checked').val()]);
	          shapeTemplate.fill = am4core.color("#d6d6d6");

	          shapeTemplate.strokeWidth = 1.5;
	          shapeTemplate.fillOpacity = 1;
	          shapeTemplate.nonScalingStroke = true;

	          shapeTemplate.events.on("hit", function(ev) {
	              selectCountry_inactive(ev.target.dataItem.dataContext.id);
	          });

	          currentSeries.push(shapeSeries);
	      }
        if ($('#p_country_val').length > 0) {
          setTimeout(() => {selectCountry($('#p_country_val').val())}, 500);
        }else if ($('#user-country').length > 0) {
	        setTimeout(() => {selectCountry($('#user-country').val())}, 500);
	      }
      }
    }


    // The rest of the world.
    var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.name = "world";
    worldSeries.useGeodata = true;
    worldSeries.exclude = excludedCountries;
    worldSeries.mapPolygons.template.fill = am4core.color("#d6d6d6");
    worldSeries.mapPolygons.template.fillOpacity = 1;
    worldSeries.mapPolygons.template.stroke = am4core.color("#f5f7ff");
    worldSeries.mapPolygons.template.strokeOpacity = 0.5;
    worldSeries.mapPolygons.template.zIndex = 0;
    worldSeries.hiddenInLegend = true;
    worldSeries.mapPolygons.template.nonScalingStroke = true;

    var worldTemplate = worldSeries.mapPolygons.template;
    worldSeries.setStateOnChildren = true;
    worldSeries.calculateVisualCenter = true;

    // Create active state
    var activeState2 = worldTemplate.states.create("active");
    activeState2.properties.fill = am4core.color("#aeaeae");
    activeState2.properties.fillOpacity = 1;
    activeState2.properties.zIndex = Number.MAX_VALUE;

    worldTemplate.events.on("hit", function(ev) {
      selectCountry_inactive(ev.target.dataItem.dataContext.id);
    });



    /**/
    

    function selectCountry_inactive(id){
      if (currentActive) {
        currentActive.isActive = false;
      }
      if (id.includes('ES')) {
        id="ES";
      }
      if (id.includes('IT')) {
        id="IT";
      }
      if (id.includes('PT')) {
        id="PT";
      }
      currentActive = currentSeries[currentSeries.length-1].getPolygonById(id);
      if (currentActive == undefined) {
        currentActive = worldSeries.getPolygonById(id);
      }
      if (currentActive != undefined) {
          currentActive.isActive = true;
          $('.planasa-modales').hide();
          $('.planasa-modal-boton').show();
          //$('.planasa-main').removeClass("zones-active attribute-active");
          if ($('.planasa-main').hasClass("first-time")) {
          	$('.planasa-main').removeClass("first-time")
          }else{
        	jQuery('#map-country').val('');
	        $('.planasa-main').addClass("zones-active attribute-active");
	        $('.planasa-carousel').hide();
	        $('.planasa-sin-resultados').show();
          }
      }
    }
    function selectCountry(id) {
      zone = (climaticZoneCountries(id) != false)?climaticZoneCountries(id):id;
        active = false;
      if (currentActive) {
        currentActive.isActive = false;
      }
      currentSeries.forEach(function(serie) {
        if (serie.getPolygonById(zone) != undefined) {
          active = true;
          currentActive = serie.getPolygonById(zone);
          currentActive.isActive = true;
          jQuery('#map-country').val(zone);
          if ($('#p_country_val').length > 0) {
            $('#p_country_val').remove();
          }else{
            jQuery('.planasa-main input[name="attribute"]').prop( "checked", false );
          }
          cp_ajax_search('zone');
        }
      });
      if(!active){
        selectCountry_inactive(id);
      }else{
        if ($('.planasa-main').hasClass("first-time")) {
          $('.planasa-main').removeClass("first-time")
        }
      }
    }
    function mapGoHome() {
	    chart.goHome();
	}

    var ajax_url = plugin_ajax_object.ajax_url;
    $('.planasa-main input[name="product"]').on('change', function(){
        $('.planasa-modal-boton').hide();
        if ($('#p_country_val').length > 0) {
          $('#map-country').val($('#p_country_val').val());
        }else{
          $('#map-country').val('');
          $('.planasa-main input[name="attribute"]').prop( "checked", false );
        }
        cp_ajax_search('product');
    });

    $('.planasa-main input[name="attribute"]').on('change', function(){
        if($(this).siblings(':checked').length >= 2) {
         this.checked = false;
        }else{
          cp_ajax_search('attribute');
        }
    });
    $(document).on("click", 'a.planasa-zone-link', function (o) {
    	url = $(this).attr('data-link');
    	//zone = (climaticZoneCountries($('#map-country').val()) != false)?climaticZoneCountries($('#map-country').val()):'default';
      zone=$('#map-country').val();
        var form = $('<form action="' + url + '" method="post">' +
          '<input type="hidden" name="conf_zone" value="' + zone + '" />' +
          '<input type="hidden" name="conf_country" value="' + $('#map-country').val() + '" />' +
          '<input type="hidden" name="conf_product" value="' + ($('.planasa-main input[name="product"]:checked').val()!= undefined?$('.planasa-main input[name="product"]:checked').val():'') + '" />' +
          '<input type="hidden" name="conf_attr" value="' + $('.planasa-main input[name="attribute"]:checked').map(function(){return $(this).val();}).get() + '" />' +
          '</form>');
        $('body').append(form);
        form.submit();
        return false;
    });
    if ($('.planasa-main input[name="product"]:checked').val()!= undefined) {
      $('.planasa-main .planasa-products').addClass("planasa-active");
      cp_ajax_search('product');
    }else{
      cp_ajax_search();
    }
    $(document).on("click", '.planasa-active .toogleCollapsible', function (o) {
        if (window.innerWidth <= 1000) {
            $(this).parent().find('.Collapsible').slideToggle('slow', function(){});
            $(this).toggleClass('active-tab');
            return false;
        }
    });
    
    $( ".modal-close" ).click(function() {
        elm =  $(this).parents('.planasa-modales');
        elm.hide();
        if (elm.hasClass('planasa-modal-boton')) {
            $('.planasa-main').addClass("zones-active attribute-active");
        }
    });
    
    function cp_ajax_search(r = "none"){
      $('.planasa-sin-resultados').hide();
      $('.planasa-carousel').show();
    	loading = '';
        container = $('.planasa-main');
        container.removeClass("zones-active attribute-active");
        if (r == 'product') {
        	container.find('.planasa-zone').removeClass("planasa-active");
        	container.find('.planasa-attribute').removeClass("planasa-active");
        	mapGoHome();
            unsetup_map_zones();
        }
        if (r == "none") {
        	$('.planasa-main input[name="product"]').prop( "checked", false );
        	if (window.innerWidth <= 1000) {
	        	setTimeout(() => {container.find('.planasa-products .toogleCollapsible').trigger('click');}, 1000);	
	        }
        	container.find('.planasa-products').addClass("planasa-active");
        }
        list_wrap = container.find('.configurator-carousel');
        list_wrap.html('');
        if (window.innerWidth <= 1000) {
	        for (var i = 1; i <= 3; i++) {
	        	loading+='<div class="planasa-zone-item loading l-'+i+'"></div>';
	        }
        }else if(window.innerWidth <= 605){
	        for (var i = 1; i <= 2; i++) {
	        	loading+='<div class="planasa-zone-item loading l-'+i+'"></div>';
	        }
        }else{
	        for (var i = 1; i <= 6; i++) {
	        	loading+='<div class="planasa-zone-item loading l-'+i+'"></div>';
	        }
        }
        list_wrap.html(loading);
        setup_carousel();
        product = $('.planasa-main input[name="product"]:checked').val()!= undefined?$('.planasa-main input[name="product"]:checked').val():'';
        attribute = $('.planasa-main input[name="attribute"]:checked').map(function(){
          return $(this).val();
        }).get();
        zone = $('#map-country').val();
        var data = {
            'action': 'cp_search',
            'product':  product != undefined?product:'',
            'zone': zone !== false?zone:'',
            'attribute': attribute != undefined?attribute:'',
        };
        if(data.product!='' || data.zone !='' || data.attribute !=''){
        $.ajax({
            url: ajax_url,
            type: 'post',
            data: data,
            success: function (response) {
                if (response == 0) {
                  container.addClass("zones-active attribute-active");
                  $('.planasa-carousel').hide();
                  $('.planasa-sin-resultados').show();
                } else {
                    p = JSON.parse(response);
                    if (r == 'product') {
                    	container.addClass("first-time");
        				container.find('.planasa-zone').addClass("planasa-active");
        				if (window.innerWidth <= 1000) {
	        				container.find('.planasa-products .Collapsible').hide();
	            			container.find('.planasa-products .toogleCollapsible').removeClass('active-tab');
	        				container.find('.planasa-zone .toogleCollapsible').trigger('click');
			        	}
        				container.find('.planasa-carousel').attr("class", "planasa-carousel");
        				container.find('.planasa-carousel').addClass("color-"+product);
        				container.find('.planasa-attribute').attr("class", "planasa-attribute");
        				container.find('.planasa-attribute').addClass("color-"+product);
        				container.find('.planasa-advise-2').attr("class", "planasa-modales planasa-advise-2");
        				container.find('.planasa-advise-2').addClass("color-"+product);
                container.find('.planasa-advise').attr("class", "planasa-modales planasa-advise");
        				container.find('.planasa-advise').addClass("color-"+product);
                container.find('.planasa-modal-boton').attr("class", "planasa-modales planasa-modal-boton");
        				container.find('.planasa-modal-boton').addClass("color-"+product);
                        container.addClass("zones-active");
                        if ($('#user-country').length == 0) {
	                        container.addClass("attribute-active");
	                    }
                        setup_map_zones(p.zones);
                    }
                    if (r == 'zone') {
        				container.find('.planasa-attribute').addClass("planasa-active");
				        $('.planasa-modales').hide();
				        $('.planasa-advise-2').show();
                    }
                    if (r == 'product' || r == 'zone') {
                        setup_attributes(p.attributes);
                    }
                    if (r == 'zone' || r == 'attribute') {
                        container.addClass("zones-active attribute-active");
                    	if (window.innerWidth <= 1000) {
	        				container.find('.planasa-products .Collapsible').hide();
	            			container.find('.planasa-products .toogleCollapsible').removeClass('active-tab');
	        				container.find('.planasa-zone .Collapsible').hide();
	            			container.find('.planasa-zone .toogleCollapsible').removeClass('active-tab');
	        				container.find('.planasa-attribute .toogleCollapsible').trigger('click');
				        }
                    }
                    if (r == 'none') {
                        setup_attributes(p.attributes);
                    }
					if (window.innerWidth <= 1000) {
			        	setTimeout(() => { 
				            $('html,body').animate({scrollTop: $('body').offset().top}, 'linear');
				        },500);
			        }
                    list_wrap.html(p.products);
                    setup_carousel();
                }
            }
        });
      }else{
        container.addClass("zones-active attribute-active");
			  $('.planasa-carousel').hide();
      }
    }
    function setup_attributes(attributes){
        /*$('.planasa-select-attribute input').attr("disabled", true);
        attributes.forEach(function(att) {
            $('.planasa-select-attribute input#'+att).attr("disabled", false);
        });*/
    }
    function setup_carousel(){
        pc = $(".configurator-carousel");
        pc.trigger('destroy.owl.carousel').removeClass('owl-loaded');
        pc.find('.owl-stage-outer .owl-stage > *').unwrap();
        pc.find('.owl-stage-outer > *').unwrap();
        pc.find('.owl-item > *').unwrap();
        pc.find('.owl-dots').remove();
        pc.find('.owl-nav').remove();
        if (window.innerWidth > 1000) {
          $(".configurator-carousel").owlCarousel({
            items:6,
            responsive:false,
            margin:2,
            dots:false,
            mouseDrag:false,
            nav:true,
            loop:false
          }
          );
        }
    }

});