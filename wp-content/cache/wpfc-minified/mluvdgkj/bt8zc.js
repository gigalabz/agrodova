!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
function inArray(needle, haystack){
var length=haystack.length;
for(var i=0; i < length; i++){
if(haystack[i]==needle) return true;
}
return false;
}
function zones_climates(){
return {
'default':'Default',
'mediterranean_countries':'Mediterranean Countries',
'continental_climate':'Continental Climate',
'southern_africa':'Southern Africa',
'south_africa':'South Africa',
'asia':'Asia',
'mexico':'México',
'peru':'Perú',
'estados_unidos':'Estados Unidos',
'all_climates':'All Climates',
'rest_of_the_world':'Rest of the World',
};}
function climaticZoneCountries(id){
a=[{
mediterranean_countries:[
'AL',
'SA',
'DZ',
'CY',
'HR',
'EG',
'AE',
'ES',
'GR',
'IQ',
'IR',
'IL',
'IT',
'JO',
'KW',
'LB',
'LY',
'MT',
'MA',
'ME',
'PT',
'RS',
'SY',
'TN',
'TR'
],
continental_climate:[
'AT',
'DE',
'BE',
'BY',
'BG',
'DK',
'SK',
'SI',
'ES-N',
'EE',
'FI',
'FR',
'GE',
'HU',
'IE',
'IT-N',
'LV',
'LT',
'LU',
'MD',
'NL',
'PL',
'PT-N',
'CZ',
'RO',
'SE',
'UA',
'GB',
],
southern_africa:[
'ZW',
'ZM',
'MZ',
'SZ',
'LS',
],
south_africa:['ZA', ],
asia:[
'CN',
'IN',
'TW',
'BT ',
],
mexico:['MX'],
peru:['PE'],
estados_unidos:['US'],
all_climates:[],
rest_of_the_world:[]
}];
for (const [key, value] of Object.entries(a[0])){
if(value.includes(id)){
return key;
}}
return false;
}
mediterranean_countries=[
[
[
{longitude: -9.277265155171767, latitude: 38.622698030399256},
{longitude: -7.329109875533948, latitude: 39.322931894184386},
{longitude: -7.179251777100278, latitude: 39.12610235312311},
{longitude: -4.043759256026384, latitude: 40.116703347799344},
{longitude: 0.049385779817921464, latitude: 39.86323254233754},
{longitude: -0.16426623365883208, latitude: 39.07602853817546},
{longitude: 0.2622529695754783, latitude: 38.76028278712281},
{longitude: -0.6138405289598952, latitude: 38.14614167320234},
{longitude: -0.7867537194602919, latitude: 37.54884067790523},
{longitude: -1.3054932909614825, latitude: 37.52888064034922},
{longitude: -2.0893664212299496, latitude: 36.75798438411136},
{longitude: -4.348765443768445, latitude: 36.68766866312272},
{longitude: -4.671536732702538, latitude: 36.4664237454249},
{longitude: -5.155693666103639, latitude: 36.385876208036805},
{longitude: -5.616795507438039, latitude: 35.9924855196931},
{longitude: -6.066369802739076, latitude: 36.16411045450275},
{longitude: -6.52747164407345, latitude: 36.928589142203094},
{longitude: -7.3920375965754594, latitude: 37.15904110195329},
{longitude: -7.830084345843107, latitude: 36.9586720055101},
{longitude: -8.613957476111574, latitude: 37.088948216989905},
{longitude: -8.879091034878877, latitude: 37.429032245728},
{longitude: -8.94825631107903, latitude: 38.48331696162865},
{longitude: -9.277265155171767, latitude: 38.622698030399256},
]
],
[
[
{longitude: 2.3157999915778564, latitude: 39.62900618744471},
{longitude: 2.7884293789455934, latitude: 39.88371852424898},
{longitude: 3.526192325080634, latitude: 39.70743903488371},
{longitude: 3.0650904837462596, latitude: 39.26556458024494},
{longitude: 2.3157999915778564, latitude: 39.62900618744471},
]
],
[
[
{longitude: 12.664038872068442, latitude: 41.40290240653206},
{longitude: 16.0531374058762, latitude: 41.45116372948534},
{longitude: 17.13324380282858, latitude: 41.08577639037879},
{longitude: 17.98868110755344, latitude: 40.67009475543436},
{longitude: 18.518811268228028, latitude: 40.09984009532891},
{longitude: 18.06097158400907, latitude: 39.895483380148335},
{longitude: 17.83205174189959, latitude: 40.242672775010895},
{longitude: 16.952517611689498, latitude: 40.42605155230924},
{longitude: 16.57901681666878, latitude: 39.854568345135},
{longitude: 17.16938904105637, latitude: 39.383002099943596},
{longitude: 17.22963110476937, latitude: 38.98169858821505},
{longitude: 16.60311364215399, latitude: 38.682407675145136},
{longitude: 16.57901681666878, latitude: 38.39272376408509},
{longitude: 16.060935068736793, latitude: 37.90490155194753},
{longitude: 15.687434273716075, latitude: 37.92569979936186},
{longitude: 15.952499354053371, latitude: 38.734063284723426},
{longitude: 16.169370783420216, latitude: 38.77537167040385},
{longitude: 15.663337448230864, latitude: 39.94660670760917},
{longitude: 14.916335858189429, latitude: 40.21208083924385},
{longitude: 14.74765807979298, latitude: 40.6294576038216},
{longitude: 14.072946966207123, latitude: 40.7919179529276},
{longitude: 13.71149458392901, latitude: 41.18692686763864},
{longitude: 13.072928708570998, latitude: 41.207145865709826},
{longitude: 12.664038872068442, latitude: 41.40290240653206},
]
],
[
[
{longitude: 9.294978671530462, latitude: 41.226980464826894},
{longitude: 9.686915236664683, latitude: 40.89771716588766},
{longitude: 9.83677333509838, latitude: 40.499367486403386},
{longitude: 9.58316732236444, latitude: 39.13840893691408},
{longitude: 9.06442775086325, latitude: 39.20732959185927},
{longitude: 8.87998701432949, latitude: 38.87219436473395},
{longitude: 8.384302534895026, latitude: 39.20732959185927},
{longitude: 8.41888517299509, latitude: 40.275284759253},
{longitude: 8.142224068194475, latitude: 40.66470852513093},
{longitude: 9.294978671530462, latitude: 41.226980464826894},
]
],
[
[
{longitude: 12.383662439181236, latitude: 37.830870255590106},
{longitude: 13.351976305983465, latitude: 38.218554908417275},
{longitude: 13.697802686984259, latitude: 38.03977665627131},
{longitude: 14.873612382386971, latitude: 38.20862968339183},
{longitude: 15.634430420588712, latitude: 38.23840292065351},
{longitude: 15.161801033220975, latitude: 37.451944565250024},
{longitude: 15.34624176975471, latitude: 37.001718139161035},
{longitude: 15.138745941154248, latitude: 36.65042578290902},
{longitude: 14.481675817252723, latitude: 36.77097848994916},
{longitude: 12.383662439181236, latitude: 37.830870255590106},
]
],
[
[
{longitude: 14.458620725185998, latitude: 35.98535313727747},
{longitude: 14.596951277586331, latitude: 35.84383724361745},
{longitude: 14.424038087085934, latitude: 35.79325873000098},
{longitude: 14.331817718819055, latitude: 35.87417497954927},
{longitude: 14.458620725185998, latitude: 35.98535313727747},
]
],
[
[
{longitude: 13.544881719569531, latitude: 45.45357195783376},
{longitude: 13.87443120557122, latitude: 45.400278262907534},
{longitude: 15.361484643874611, latitude: 45.43742304290585},
{longitude: 15.67272838677534, latitude: 45.808090645017764},
{longitude: 15.67272838677534, latitude: 46.18654948284583},
{longitude: 16.5142392472106, latitude: 46.453335471476},
{longitude: 17.2865848314457, latitude: 45.9651941343039},
{longitude: 17.955182501380563, latitude: 45.73407071605816},
{longitude: 18.935023914216156, latitude: 45.90977518710386},
{longitude: 20.226109069952475, latitude: 46.085158621548494},
{longitude: 20.744848641453665, latitude: 45.47455365109431},
{longitude: 21.436501403455253, latitude: 45.10261039168654},
{longitude: 21.35580858122171, latitude: 44.869428024664984},
{longitude: 22.611210218211774, latitude: 44.138772780867754},
{longitude: 22.45862239687741, latitude: 43.999958667464156},
{longitude: 22.585425403244354, latitude: 43.48055674915322},
{longitude: 23.023472152512028, latitude: 43.17714824163962},
{longitude: 22.366402028610505, latitude: 42.29034091563616},
{longitude: 21.51336362214191, latitude: 42.22329071047027},
{longitude: 21.686276812642305, latitude: 42.64404988271906},
{longitude: 21.375033069741576, latitude: 42.72990903741743},
{longitude: 21.040734234774146, latitude: 43.05363490152381},
{longitude: 20.10700300607201, latitude: 42.54856897798297},
{longitude: 20.53352220930632, latitude: 42.232871884298596},
{longitude: 20.59115993947311, latitude: 41.86818530027664},
{longitude: 20.53352220930632, latitude: 41.270525755046144},
{longitude: 20.98309650460733, latitude: 40.8735078561712},
{longitude: 21.928355279342856, latitude: 41.13511853135262},
{longitude: 22.90819669217842, latitude: 41.34782673013615},
{longitude: 24.049423749481072, latitude: 41.56012424145758},
{longitude: 26.11465624489745, latitude: 41.40891209840167},
{longitude: 26.299096981431234, latitude: 41.72702647929447},
{longitude: 26.6218682703653, latitude: 41.98661155776066},
{longitude: 27.29046594030016, latitude: 42.10178272751415},
{longitude: 28.03975643246854, latitude: 41.98661155776066},
{longitude: 29.100290667537646, latitude: 41.235005165816666},
{longitude: 28.80057447067031, latitude: 40.944550486426856},
{longitude: 27.53254440700074, latitude: 40.944550486426856},
{longitude: 27.267410848233435, latitude: 40.6436157805637},
{longitude: 26.080073606797384, latitude: 40.585276905678455},
{longitude: 25.100232193961794, latitude: 40.963937801755485},
{longitude: 24.397051885926867, latitude: 40.87666829425884},
{longitude: 23.682344031858555, latitude: 40.195579068735675},
{longitude: 23.324990104824398, latitude: 40.17605900584694},
{longitude: 22.67944752695624, latitude: 40.42955873332015},
{longitude: 22.944581085723517, latitude: 39.63795021438787},
{longitude: 23.01374636192367, latitude: 39.02834669601334},
{longitude: 23.19818709845743, latitude: 38.811274361717416},
{longitude: 23.40568292705789, latitude: 38.98890857107976},
{longitude: 24.15497341922629, latitude: 38.682817746365735},
{longitude: 23.843729676325587, latitude: 38.39576273175382},
{longitude: 24.005115320792623, latitude: 38.266860288033236},
{longitude: 23.60165120962501, latitude: 37.978813868464265},
{longitude: 23.232769736557493, latitude: 37.929081795869955},
{longitude: 23.186659552424068, latitude: 37.30073025093613},
{longitude: 22.829305625389907, latitude: 37.35071596674425},
{longitude: 23.117494276223912, latitude: 36.73952625220184},
{longitude: 22.58722715868936, latitude: 36.75961223479004},
{longitude: 21.56127556172034, latitude: 37.05050169075336},
{longitude: 21.111701266419306, latitude: 37.929081795869955},
{longitude: 21.388362371219944, latitude: 38.21724581775398},
{longitude: 21.826409120487618, latitude: 38.33628638997066},
{longitude: 22.690975072989602, latitude: 38.05834308156661},
{longitude: 22.402786422155625, latitude: 38.40567260441044},
{longitude: 21.434472555353373, latitude: 38.31645442914986},
{longitude: 21.10017372038594, latitude: 38.366028225662646},
{longitude: 20.28171795201741, latitude: 39.313879077247094},
{longitude: 19.98200175515007, latitude: 39.70657656256463},
{longitude: 19.35951426934861, latitude: 40.273625870468145},
{longitude: 19.313429445816432, latitude: 41.842495614830796},
{longitude: 17.65346281701264, latitude: 42.88549825935099},
{longitude: 18.414280855214358, latitude: 42.61854581589303},
{longitude: 18.414280855214358, latitude: 42.999699242139016},
{longitude: 18.933020426715547, latitude: 43.53098789234332},
{longitude: 19.440232452183402, latitude: 43.7200735765357},
{longitude: 19.128988709282673, latitude: 44.30402091672915},
{longitude: 19.313429445816432, latitude: 44.828561647308824},
{longitude: 18.979130610849, latitude: 44.83790338000114},
{longitude: 16.558345943843445, latitude: 45.17361842939821},
{longitude: 16.30473993110953, latitude: 44.987251236299635},
{longitude: 15.832110543741793, latitude: 45.136373249714914},
{longitude: 15.786000359608341, latitude: 44.75379607904588},
{longitude: 17.65346281701264, latitude: 43.03773856655415},
{longitude: 17.584297540812464, latitude: 42.91406017303477},
{longitude: 15.935858458042013, latitude: 43.63502811729971},
{longitude: 15.094347597606752, latitude: 44.257053042807996},
{longitude: 14.84074158487284, latitude: 45.052519924454},
{longitude: 14.402694835605168, latitude: 45.275969755685466},
{longitude: 13.964648086337494, latitude: 44.80053116401726},
{longitude: 13.595766613269973, latitude: 45.09911393583074},
{longitude: 13.544881719569531, latitude: 45.45357195783376},
]
],
[
[
{longitude: 23.848019823195003, latitude: 35.54647026674772},
{longitude: 24.719173488411847, latitude: 35.4493309685141},
{longitude: 25.49216899416764, latitude: 35.319701217681825},
{longitude: 25.798913242483447, latitude: 35.14666525630019},
{longitude: 24.75598279820974, latitude: 34.897534378634155},
{longitude: 23.50446626508133, latitude: 35.276463236366844},
{longitude: 23.848019823195003, latitude: 35.54647026674772},
]
],
[
[
{longitude: 32.26508199698025, latitude: 34.96256948224788},
{longitude: 32.927649573342414, latitude: 35.42773478830603},
{longitude: 34.498180124719234, latitude: 35.60040574461815},
{longitude: 33.97058001761609, latitude: 35.26565155098764},
{longitude: 34.068738177077115, latitude: 34.97340561970797},
{longitude: 32.927649573342414, latitude: 34.5392827296912},
{longitude: 32.40004946623922, latitude: 34.70224137859052},
{longitude: 32.26508199698025, latitude: 34.96256948224788},
]
],
[
[
{longitude: 41.42878904336895, latitude: 41.51054039208269},
{longitude: 42.46626818637133, latitude: 41.41404879666019},
{longitude: 42.789039475305394, latitude: 41.52018487703483},
{longitude: 43.52619376700989, latitude: 41.04760762453053},
{longitude: 43.74856589376644, latitude: 40.724606982826465},
{longitude: 43.81773116996656, latitude: 40.09144874844268},
{longitude: 44.324943195434386, latitude: 40.05236964858146},
{longitude: 44.8206276748689, latitude: 39.709858823453516},
{longitude: 45.50075289083708, latitude: 39.03164805610892},
{longitude: 46.48059430367264, latitude: 38.942896258280854},
{longitude: 47.76015191337565, latitude: 39.68045334606734},
{longitude: 48.03681301817621, latitude: 39.709858823453516},
{longitude: 48.267363938843424, latitude: 38.96262463322364},
{longitude: 48.10597829437645, latitude: 38.80470568445578},
{longitude: 48.88985142464488, latitude: 38.458527010992434},
{longitude: 49.10887479927873, latitude: 37.683456850988215},
{longitude: 50.15788148831443, latitude: 37.42400775059376},
{longitude: 51.14925044718341, latitude: 36.76297532230053},
{longitude: 53.97349922535652, latitude: 36.97368067412585},
{longitude: 53.88127885708966, latitude: 37.36405776499394},
{longitude: 54.72278971752492, latitude: 37.53384100993476},
{longitude: 55.068616098525716, latitude: 37.94236124409633},
{longitude: 55.56430057796023, latitude: 38.121282483038016},
{longitude: 56.44039407649553, latitude: 38.28010292169313},
{longitude: 57.21273966073071, latitude: 38.240417312163814},
{longitude: 58.44618708630017, latitude: 37.66351853792659},
{longitude: 58.826596105401045, latitude: 37.73328853018278},
{longitude: 59.28769794673548, latitude: 37.52386018487257},
{longitude: 60.094626169070644, latitude: 36.983705510444075},
{longitude: 61.15516040413969, latitude: 36.65246608209166},
{longitude: 61.293490956540005, latitude: 35.61307137902144},
{longitude: 61.109050220006296, latitude: 34.83064927072784},
{longitude: 60.52114537230493, latitude: 34.09492037586913},
{longitude: 60.56725555643838, latitude: 33.66393229718176},
{longitude: 60.95919212157263, latitude: 33.509687091917534},
{longitude: 60.62489328660519, latitude: 33.128498232665684},
{longitude: 60.87849929933908, latitude: 32.24896575956232},
{longitude: 60.91308193743918, latitude: 31.53112513870047},
{longitude: 61.70848261374103, latitude: 31.395496837739994},
{longitude: 61.83528562010797, latitude: 30.809878993996026},
{longitude: 60.92460948347254, latitude: 29.843019312705017},
{longitude: 61.362656232740235, latitude: 29.367973333971985},
{longitude: 61.91597844234146, latitude: 28.573185945249886},
{longitude: 62.400135375742614, latitude: 28.44567118716014},
{longitude: 62.780544394843446, latitude: 28.009278713987868},
{longitude: 62.803599486910166, latitude: 27.28308921628719},
{longitude: 63.20706359807779, latitude: 27.250982783121184},
{longitude: 63.19553605204437, latitude: 26.639872733624248},
{longitude: 61.89292335027474, latitude: 26.231329770929086},
{longitude: 61.61626224547412, latitude: 25.173612545915436},
{longitude: 61.40876641687364, latitude: 25.06535498586098},
{longitude: 59.47213868326918, latitude: 25.443993585455498},
{longitude: 59.045619480034844, latitude: 25.379136500496582},
{longitude: 57.28190493693084, latitude: 25.746371222768317},
{longitude: 56.94614547712898, latitude: 26.875202078223573},
{longitude: 56.35807381504996, latitude: 27.14321528649137},
{longitude: 54.893660068304065, latitude: 26.51006977518766},
{longitude: 53.68292429343546, latitude: 26.703465782698558},
{longitude: 52.65668158902304, latitude: 27.293128678683587},
{longitude: 51.2268602929877, latitude: 28.083428163298738},
{longitude: 50.6272578140051, latitude: 29.135092946183544},
{longitude: 49.970001250505014, latitude: 30.148577030946065},
{longitude: 49.55489184197865, latitude: 29.9906366421252},
{longitude: 48.04435482761875, latitude: 29.927417004171982},
{longitude: 48.94375854609253, latitude: 27.656679967103816},
{longitude: 50.02765533502261, latitude: 26.84301384228977},
{longitude: 50.25827167309274, latitude: 26.294947456090483},
{longitude: 50.09684023644366, latitude: 26.10112460688461},
{longitude: 51.90717849029481, latitude: 24.03235262460307},
{longitude: 52.645150772119514, latitude: 24.195603315889574},
{longitude: 53.913540631505654, latitude: 24.130318672193297},
{longitude: 56.08133420936564, latitude: 26.122670392991626},
{longitude: 56.35807381504996, latitude: 25.669691789573164},
{longitude: 56.438789533374475, latitude: 24.94486268845044},
{longitude: 56.06980339246218, latitude: 24.684568707948127},
{longitude: 55.839187054391985, latitude: 24.793066030983663},
{longitude: 55.793063786777914, latitude: 24.22823780348154},
{longitude: 55.23958457540938, latitude: 22.699822920960493},
{longitude: 55.70081725154982, latitude: 22.008483570141742},
{longitude: 54.99743742043567, latitude: 19.944129587102427},
{longitude: 51.976363391715864, latitude: 18.93324742399652},
{longitude: 48.19425544736436, latitude: 18.1306719587777},
{longitude: 47.456283165539716, latitude: 17.090572078926865},
{longitude: 46.96045803868872, latitude: 16.933673480758532},
{longitude: 45.392266939811286, latitude: 17.280979386282663},
{longitude: 43.90479155925841, latitude: 17.26978239015645},
{longitude: 43.23600417885476, latitude: 17.359346283531945},
{longitude: 43.201411728144265, latitude: 16.675731942914794},
{longitude: 42.77477150271438, latitude: 16.327723329880495},
{longitude: 42.34813127728444, latitude: 17.124182358537773},
{longitude: 41.19504958693342, latitude: 18.665987354690845},
{longitude: 40.73381691079298, latitude: 19.73339573786129},
{longitude: 39.56920440353839, latitude: 20.464654049567145},
{longitude: 39.04053448939553, latitude: 21.30746735332818},
{longitude: 38.946543004205104, latitude: 21.879632311370003},
{longitude: 39.06403236069312, latitude: 22.383290687501056},
{longitude: 37.501423919402946, latitude: 24.286591726968236},
{longitude: 37.14407050079993, latitude: 24.818571352730288},
{longitude: 35.16133258306205, latitude: 28.00101494180008},
{longitude: 34.58495528139404, latitude: 28.11820988054641},
{longitude: 34.930781662394836, latitude: 29.465466025478747},
{longitude: 34.75786847189444, latitude: 29.254017505962377},
{longitude: 34.30829417659341, latitude: 27.627596981967784},
{longitude: 33.21317730342423, latitude: 28.522452885363407},
{longitude: 32.75207546208983, latitude: 29.433766053087332},
{longitude: 32.682910185889675, latitude: 28.96813314622926},
{longitude: 33.58205877649175, latitude: 27.883740903850235},
{longitude: 33.93941270352591, latitude: 27.049915172393334},
{longitude: 35.657017062496514, latitude: 24.058170434821896},
{longitude: 35.749237430763365, latitude: 22.956054262654117},
{longitude: 36.26797700226458, latitude: 22.660460834183418},
{longitude: 36.91351958013274, latitude: 21.969195240723415},
{longitude: 24.90181661337182, latitude: 21.969195240723415},
{longitude: 24.90181661337182, latitude: 29.152517066804773},
{longitude: 24.67380982211419, latitude: 30.144565071537283},
{longitude: 24.938943380881472, latitude: 30.764120255808503},
{longitude: 24.823667920547862, latitude: 31.33947013568025},
{longitude: 25.157966755515318, latitude: 31.683647883634812},
{longitude: 25.88420215561697, latitude: 31.66281081699349},
{longitude: 27.290562771686872, latitude: 31.39166828318009},
{longitude: 28.535537743289737, latitude: 31.06775326149467},
{longitude: 29.088859952890992, latitude: 30.879361177597904},
{longitude: 30.40300020069404, latitude: 31.48558001398989},
{longitude: 31.209928423029204, latitude: 31.62112807517526},
{longitude: 32.132132105698005, latitude: 31.13049972464563},
{longitude: 34.218617937736106, latitude: 31.360351532351597},
{longitude: 35.04860125213803, latitude: 33.11439743254649},
{longitude: 35.94774984274007, latitude: 34.62293267563668},
{longitude: 35.72872646810625, latitude: 35.57895616727488},
{longitude: 35.77483665223968, latitude: 36.3166677425995},
{longitude: 36.143718125307196, latitude: 36.64877944873595},
{longitude: 36.02844266497362, latitude: 36.849639736405045},
{longitude: 35.544285731572494, latitude: 36.568346550538664},
{longitude: 34.599026956836994, latitude: 36.749249268430255},
{longitude: 33.71140591226828, latitude: 36.13515405522276},
{longitude: 32.77767468356614, latitude: 35.983698287950645},
{longitude: 32.328100388265106, latitude: 36.16542402442871},
{longitude: 30.67966130549465, latitude: 36.81953093595526},
{longitude: 30.51827566102762, latitude: 36.27635339356106},
{longitude: 29.676764800592338, latitude: 36.11497014972064},
{longitude: 29.10038749892436, latitude: 36.37711563376892},
{longitude: 28.109020845564622, latitude: 36.99005482967252},
{longitude: 27.31362016926279, latitude: 36.98003049793531},
{longitude: 27.036959064462128, latitude: 37.6897706427613},
{longitude: 27.163762070829097, latitude: 37.94866173796889},
{longitude: 26.633494953294544, latitude: 38.18715268621302},
{longitude: 26.72571532156145, latitude: 38.72204429858465},
{longitude: 26.967793788262, latitude: 38.909680064568036},
{longitude: 26.057117651626562, latitude: 39.460984537056056},
{longitude: 26.14933801989344, latitude: 39.99991820391746},
{longitude: 26.737242867594787, latitude: 40.419510458109976},
{longitude: 28.293461582098356, latitude: 40.419510458109976},
{longitude: 29.3194131790674, latitude: 40.82784806930563},
{longitude: 29.3194131790674, latitude: 41.24436738505998},
{longitude: 31.256040912671832, latitude: 41.157318310140354},
{longitude: 31.452009195238954, latitude: 41.34100806909179},
{longitude: 32.281992509640844, latitude: 41.765217757775005},
{longitude: 33.37710938281002, latitude: 42.06310183918574},
{longitude: 34.77194245284658, latitude: 41.98630715078057},
{longitude: 36.08608270064957, latitude: 41.717095106146196},
{longitude: 36.524129449917275, latitude: 41.28303383369258},
{longitude: 39.41754350429056, latitude: 41.13796475688222},
{longitude: 40.282109456792554, latitude: 41.01208418146241},
{longitude: 41.42878904336895, latitude: 41.51054039208269},
]
],
[
[
{longitude: -5.943079239648473, latitude: 35.82485033500742},
{longitude: -5.378229484013856, latitude: 35.95628211718118},
{longitude: -5.066985741113152, latitude: 35.480482571499856},
{longitude: -3.683680217109977, latitude: 35.29780670327333},
{longitude: -1.9084381279725562, latitude: 35.125049396418525},
{longitude: -0.9170691691036023, latitude: 35.693286589576275},
{longitude: 0.028189605631898373, latitude: 35.925963434876195},
{longitude: 0.5008189929996356, latitude: 36.28932187826488},
{longitude: 1.250109485168013, latitude: 36.541054220568476},
{longitude: 2.5873048250377866, latitude: 36.651660017054496},
{longitude: 2.956186298105307, latitude: 36.82240763899191},
{longitude: 4.800593663442855, latitude: 36.94279716865047},
{longitude: 5.238640412710529, latitude: 36.73204039906886},
{longitude: 6.495142930346733, latitude: 37.11315270830642},
{longitude: 6.9447172256477705, latitude: 36.93276908323217},
{longitude: 7.636369987649357, latitude: 37.03301409676102},
{longitude: 8.55857367031816, latitude: 36.972876647749544},
{longitude: 9.711328273654146, latitude: 37.38324290313503},
{longitude: 10.230067845155336, latitude: 37.21325411240262},
{longitude: 11.163799073857447, latitude: 36.87258386002001},
{longitude: 10.552839134089403, latitude: 36.30947860158546},
{longitude: 11.036996067490504, latitude: 35.6426500768282},
{longitude: 11.163799073857447, latitude: 35.216536945520346},
{longitude: 10.575894226156128, latitude: 34.52375617434898},
{longitude: 10.11479238482173, latitude: 34.19651941116169},
{longitude: 10.737279870623164, latitude: 33.53972462334651},
{longitude: 11.09463379765732, latitude: 33.591147476978094},
{longitude: 11.24449189609099, latitude: 33.282330507527185},
{longitude: 11.567263185025057, latitude: 33.18955476401174},
{longitude: 11.555735638991694, latitude: 32.39336243109597},
{longitude: 10.172430114988519, latitude: 31.425969461401635},
{longitude: 10.26271155001259, latitude: 30.77157263004066},
{longitude: 9.92841271504516, latitude: 30.330802865515732},
{longitude: 9.363562959410515, latitude: 30.08890849256097},
{longitude: 9.70938934041131, latitude: 29.561793166714583},
{longitude: 9.882302530911707, latitude: 28.99059493496566},
{longitude: 9.951467807111886, latitude: 27.7569931981655},
{longitude: 9.905357622978434, latitude: 26.52540294999656},
{longitude: 9.524948603877576, latitude: 26.299600773776934},
{longitude: 10.055215721412104, latitude: 25.31798122855836},
{longitude: 10.343404372246107, latitude: 24.71141725292536},
{longitude: 11.553796705748884, latitude: 24.353108090620427},
{longitude: 12.014898547083286, latitude: 23.492771742103105},
{longitude: 7.507628048039605, latitude: 20.8578988098119},
{longitude: 5.8476614192357905, latitude: 19.440409372499747},
{longitude: 3.3807665680968086, latitude: 18.92905441618005},
{longitude: 3.0695228251960787, latitude: 19.162623339767276},
{longitude: 3.184798285529685, latitude: 19.762265658271506},
{longitude: 2.3778700631944916, latitude: 20.03939989219929},
{longitude: 1.6516346630928145, latitude: 20.360489744163164},
{longitude: 1.1213675455582606, latitude: 20.824770113812495},
{longitude: 1.1098399995249235, latitude: 21.089670721650737},
{longitude: -8.739115501659578, latitude: 27.25519975658033},
{longitude: -8.727587955626216, latitude: 27.62940623993044},
{longitude: -13.234858454669896, latitude: 27.62940623993044},
{longitude: -12.946669803835919, latitude: 27.960184820458206},
{longitude: -12.00141102910039, latitude: 28.16261029722387},
{longitude: -11.09073489246498, latitude: 28.736626045388512},
{longitude: -9.707429368461804, latitude: 30.12100370249894},
{longitude: -9.903397651028929, latitude: 30.709202153063405},
{longitude: -9.83423237482875, latitude: 31.430917896848474},
{longitude: -9.25785507316077, latitude: 32.58478573605529},
{longitude: -8.623840041325971, latitude: 33.21506584114516},
{longitude: -6.91776322838873, latitude: 33.99646441683247},
{longitude: -6.39902365688754, latitude: 34.79389558715528},
{longitude: -5.943079239648473, latitude: 35.82485033500742},
]
],
[
[
{longitude: -16.935802469281363, latitude: 28.36064347813387},
{longitude: -16.26720479934648, latitude: 28.39254698139529},
{longitude: -16.6591413644807, latitude: 27.956019835412533},
{longitude: -16.935802469281363, latitude: 28.36064347813387},
]
],
]
continental_climate=[
[
[
{longitude: 0.049385779817921464, latitude: 39.86323254233754},
{longitude: -4.043759256026384, latitude: 40.116703347799344},
{longitude: -7.179251777100278, latitude: 39.12610235312311},
{longitude: -7.329109875533948, latitude: 39.322931894184386},
{longitude: -9.277265155171767, latitude: 38.622698030399256},
{longitude: -9.507816075838981, latitude: 38.72157286175161},
{longitude: -9.40406816153871, latitude: 39.352427851772845},
{longitude: -8.689360307470423, latitude: 41.03099765692608},
{longitude: -8.9544938662377, latitude: 41.755135902681644},
{longitude: -8.919911228137636, latitude: 42.11061318551174},
{longitude: -8.73547049160385, latitude: 42.273547827440076},
{longitude: -9.28879270120513, latitude: 42.98941103166439},
{longitude: -9.173517240871524, latitude: 43.217461676768444},
{longitude: -7.6749362565347425, latitude: 43.81371568632729},
{longitude: -7.432857789834192, latitude: 43.77596100089308},
{longitude: -5.830528891197169, latitude: 43.690961955426225},
{longitude: -4.50486109736081, latitude: 43.4450129633782},
{longitude: -3.58265741469201, latitude: 43.549140087682574},
{longitude: -2.8564220145903594, latitude: 43.482889544577105},
{longitude: -1.8189428715879783, latitude: 43.4450129633782},
{longitude: -1.5192266747206378, latitude: 43.58697840349997},
{longitude: -1.1157625635530277, latitude: 45.80386471265166},
{longitude: -1.1849278397531815, latitude: 46.2836277149888},
{longitude: -1.8074153255546148, latitude: 46.4950617789373},
{longitude: -2.0610213382885547, latitude: 47.007879812515476},
{longitude: -3.179193303524426, latitude: 47.66308261527625},
{longitude: -4.3434754528937765, latitude: 47.78994132314482},
{longitude: -4.666246741827844, latitude: 48.08826570079041},
{longitude: -4.78152220216145, latitude: 48.56533238587954},
{longitude: -3.226905816556504, latitude: 48.86068911799084},
{longitude: -1.5093014575858734, latitude: 48.68156031225369},
{longitude: -1.9012380227201202, latitude: 49.70658457316745},
{longitude: -1.2211128067518962, latitude: 49.70658457316745},
{longitude: -0.1836336637495155, latitude: 49.333622886056894},
{longitude: 0.17372026328464138, latitude: 49.7331631530863},
{longitude: 1.2342544983537487, latitude: 50.04263955671401},
{longitude: 1.5570257872878157, latitude: 50.74580808035637},
{longitude: 1.9259072603553358, latitude: 51.02543367541785},
{longitude: 3.3553229684919375, latitude: 51.408384013807634},
{longitude: 4.438912295627771, latitude: 52.30646051026491},
{longitude: 4.773211130595201, latitude: 52.99050376159236},
{longitude: 5.142092603662696, latitude: 52.43516849757325},
{longitude: 5.522501622763605, latitude: 52.60645627712834},
{longitude: 5.326533340196482, latitude: 53.11810394296946},
{longitude: 6.058198214479878, latitude: 53.45147588407284},
{longitude: 6.853598890781682, latitude: 53.48532212254693},
{longitude: 7.176370179715748, latitude: 53.32442070401409},
{longitude: 7.268590547982656, latitude: 53.73026469990118},
{longitude: 8.040936132217732, latitude: 53.73026469990118},
{longitude: 8.53662061165225, latitude: 53.60366740723613},
{longitude: 8.859391900586317, latitude: 53.848234315669615},
{longitude: 8.087046316351186, latitude: 55.58776392487933},
{longitude: 8.121628954451277, latitude: 56.62501372801656},
{longitude: 8.594258341819039, latitude: 57.13400295041419},
{longitude: 9.954508773755487, latitude: 57.60733762174837},
{longitude: 10.576996259556894, latitude: 57.45526015839045},
{longitude: 10.228779065508787, latitude: 55.85492393920735},
{longitude: 9.883023002538806, latitude: 55.544610367393034},
{longitude: 10.643841040740545, latitude: 55.63509625585438},
{longitude: 12.223114847310844, latitude: 56.14300842421982},
{longitude: 12.568941228311637, latitude: 56.167494371037485},
{longitude: 12.834074787078913, latitude: 56.60681367991637},
{longitude: 12.372972945744515, latitude: 56.89011283685081},
{longitude: 11.393131532908951, latitude: 58.107261245995254},
{longitude: 11.116470428108284, latitude: 59.01390568443798},
{longitude: 11.75048545994308, latitude: 59.2874119684992},
{longitude: 11.635209999609474, latitude: 59.61566200675413},
{longitude: 12.453665767978057, latitude: 60.125764739322705},
{longitude: 12.257697485410933, latitude: 61.01257750200337},
{longitude: 12.741854418812034, latitude: 61.33816440105122},
{longitude: 12.084784294910538, latitude: 61.72212449553963},
{longitude: 11.957981288543568, latitude: 63.321919025156795},
{longitude: 12.649634050545155, latitude: 63.96872706009126},
{longitude: 13.940719206281448, latitude: 64.04095301893423},
{longitude: 14.032939574548354, latitude: 64.4437455568916},
{longitude: 13.606420371314018, latitude: 64.5797631814063},
{longitude: 14.494041415882728, latitude: 66.13800194873959},
{longitude: 16.361503873287003, latitude: 67.05472179490607},
{longitude: 16.08484276848639, latitude: 67.43601445816044},
{longitude: 17.313665342587278, latitude: 68.11914046258539},
{longitude: 18.38572712368975, latitude: 68.57236497501168},
{longitude: 19.953473384226683, latitude: 68.39955106896389},
{longitude: 20.57596087002812, latitude: 69.06756253353863},
{longitude: 21.659550197163952, latitude: 69.29698055617065},
{longitude: 22.45495087346576, latitude: 68.7445885154643},
{longitude: 23.861311489535655, latitude: 68.8304792182947},
{longitude: 24.95642836270483, latitude: 68.62541966543189},
{longitude: 25.970852413640483, latitude: 69.6813114768858},
{longitude: 26.512647077208403, latitude: 69.94661855941149},
{longitude: 27.8959526012116, latitude: 70.0819469856169},
{longitude: 29.1870377569479, latitude: 69.674822462237},
{longitude: 28.70288082354677, latitude: 68.41952129725622},
{longitude: 30.028548617383155, latitude: 67.57397512958798},
{longitude: 29.163982664881164, latitude: 66.95460388304316},
{longitude: 29.959383341182996, latitude: 66.09880025208096},
{longitude: 30.109241439616667, latitude: 64.75369676934282},
{longitude: 30.54728818888434, latitude: 64.02913583110573},
{longitude: 30.14382407771676, latitude: 63.696077485838956},
{longitude: 31.250468496919318, latitude: 63.244133033396096},
{longitude: 31.630877516020174, latitude: 62.86238579382207},
{longitude: 29.705777328449084, latitude: 61.51435202574725},
{longitude: 27.80373223294472, latitude: 60.51996051429653},
{longitude: 23.722980937135326, latitude: 59.928098252784785},
{longitude: 22.766194616366487, latitude: 60.059239438394854},
{longitude: 21.394416638396674, latitude: 60.596424834221736},
{longitude: 21.20997590186289, latitude: 61.99443143302736},
{longitude: 21.083172895495945, latitude: 62.64102564288145},
{longitude: 23.16965872753407, latitude: 63.9279733490619},
{longitude: 24.54143670550391, latitude: 64.83205312782202},
{longitude: 25.30225474370562, latitude: 65.03101376136172},
{longitude: 25.279199651638898, latitude: 65.46202213323667},
{longitude: 23.123548543400645, latitude: 65.71482059003807},
{longitude: 21.60191246699714, latitude: 65.38454633981274},
{longitude: 21.486637006663553, latitude: 64.36745476417536},
{longitude: 20.776155150971096, latitude: 63.85279307377024},
{longitude: 18.48217349033248, latitude: 62.859525163917915},
{longitude: 17.444694347330103, latitude: 61.73694254667768},
{longitude: 17.306363794929773, latitude: 60.723240772503736},
{longitude: 18.00954410296472, latitude: 60.60873920704228},
{longitude: 18.597448950666067, latitude: 60.26399105402416},
{longitude: 19.01244060786701, latitude: 59.74723987618559},
{longitude: 17.479276985430165, latitude: 58.84276340647561},
{longitude: 16.68387630912836, latitude: 58.41746855383683},
{longitude: 16.568600848794755, latitude: 57.068996542789634},
{longitude: 16.038333731260202, latitude: 56.20969424740146},
{longitude: 14.274619188156144, latitude: 55.808946744923865},
{longitude: 14.366839556423024, latitude: 55.51310071821658},
{longitude: 13.317832867387281, latitude: 55.32345865251156},
{longitude: 12.603125013318968, latitude: 55.75151527932382},
{longitude: 11.66939378461683, latitude: 55.149878743018135},
{longitude: 10.793300286081482, latitude: 55.10020937176104},
{longitude: 9.98637206374629, latitude: 55.14160283261093},
{longitude: 9.778876235145827, latitude: 54.834742341434044},
{longitude: 11.42731531791628, latitude: 53.99063748793098},
{longitude: 12.568542375218904, latitude: 54.50157373870274},
{longitude: 13.098809492753432, latitude: 54.443116789064426},
{longitude: 14.159343727822538, latitude: 53.805519934249574},
{longitude: 14.205453911955992, latitude: 53.973827134404736},
{longitude: 16.522490664661305, latitude: 54.601680017790436},
{longitude: 18.343842937932152, latitude: 54.86797763671981},
{longitude: 18.701196864966334, latitude: 54.4681753268581},
{longitude: 22.724310430608888, latitude: 54.38461443962154},
{longitude: 22.805003252842404, latitude: 54.80980613661772},
{longitude: 21.191146808172043, latitude: 55.232586846185754},
{longitude: 21.01823361767162, latitude: 56.83494009388778},
{longitude: 21.72141392570657, latitude: 57.598769358497364},
{longitude: 22.574452332175216, latitude: 57.75053103392006},
{longitude: 23.65804165931105, latitude: 57.01257157745617},
{longitude: 24.384277059412703, latitude: 57.32636053020786},
{longitude: 24.28052914511246, latitude: 58.06893564079947},
{longitude: 23.738734481544544, latitude: 58.33050343567672},
{longitude: 23.46207337674393, latitude: 58.64620318836819},
{longitude: 23.45054583071054, latitude: 59.2263441318387},
{longitude: 25.51397657068196, latitude: 59.669757517438114},
{longitude: 28.07309179008785, latitude: 59.51451573694765},
{longitude: 27.473659396353117, latitude: 58.73279082748733},
{longitude: 27.807958231320573, latitude: 57.83030148044244},
{longitude: 27.45538708313564, latitude: 57.52593456105861},
{longitude: 27.835796102236525, latitude: 57.325527240923115},
{longitude: 28.204677575304046, latitude: 56.1680566335358},
{longitude: 29.403542362773432, latitude: 55.94738426416308},
{longitude: 29.507290277073675, latitude: 55.717824537593145},
{longitude: 30.245053223208714, latitude: 55.85728682078701},
{longitude: 30.936705985210306, latitude: 55.58632103038591},
{longitude: 31.432390464644794, latitude: 54.19958443083791},
{longitude: 31.82432702977899, latitude: 54.0485728664479},
{longitude: 32.73500316641442, latitude: 53.33141075524387},
{longitude: 32.14709831871311, latitude: 53.06819449937626},
{longitude: 31.455445556711492, latitude: 53.17019003558841},
{longitude: 31.778216845645588, latitude: 52.1270396750861},
{longitude: 32.50445224574724, latitude: 52.33333470888241},
{longitude: 33.760954763383474, latitude: 52.3590842474374},
{longitude: 34.41802488728497, latitude: 51.78203519707683},
{longitude: 34.32368114503874, latitude: 51.3236295467197},
{longitude: 35.326577649941065, latitude: 51.05373088488852},
{longitude: 35.453380656308, latitude: 50.55516410518542},
{longitude: 37.436118574045885, latitude: 50.441038877503665},
{longitude: 38.070133605880656, latitude: 49.956490322943736},
{longitude: 38.25457434241447, latitude: 50.07126958652667},
{longitude: 39.21136066318331, latitude: 49.885780197377976},
{longitude: 39.833848148984714, latitude: 49.584610467800516},
{longitude: 40.09898170775202, latitude: 49.202210271350374},
{longitude: 39.74162778071786, latitude: 48.97911102302526},
{longitude: 39.995233793451796, latitude: 48.225342080895786},
{longitude: 39.75315532675122, latitude: 47.81891006770853},
{longitude: 38.31221207258128, latitude: 47.546940215971475},
{longitude: 38.24304679638106, latitude: 47.07360696757265},
{longitude: 36.2603088786432, latitude: 46.625360639785924},
{longitude: 34.88853090067336, latitude: 46.17496688617724},
{longitude: 35.059536555793215, latitude: 45.71321144406302},
{longitude: 35.581150014349944, latitude: 45.34012062780213},
{longitude: 36.20708616461803, latitude: 45.47086550856589},
{longitude: 36.43891436842104, latitude: 45.04999026339683},
{longitude: 35.581150014349944, latitude: 45.08747468220565},
{longitude: 35.11749360674396, latitude: 44.75900220280279},
{longitude: 33.911986946968376, latitude: 44.35395790622187},
{longitude: 33.413621732116084, latitude: 44.55192222680273},
{longitude: 33.52889719244969, latitude: 45.084479271005186},
{longitude: 32.468362957380585, latitude: 45.4007798117856},
{longitude: 33.60959001468321, latitude: 45.937987432706066},
{longitude: 32.468362957380585, latitude: 46.0672104357196},
{longitude: 32.00726111604619, latitude: 46.25151192676905},
{longitude: 31.94962338587939, latitude: 46.68321540515599},
{longitude: 30.808396328576766, latitude: 46.51811534117954},
{longitude: 30.24354657294215, latitude: 45.827086088543034},
{longitude: 29.63258663317408, latitude: 45.65123062278811},
{longitude: 29.7363345474743, latitude: 45.2427573117372},
{longitude: 29.574948903007293, latitude: 44.813886809309984},
{longitude: 28.675800312405194, latitude: 44.28876157876793},
{longitude: 28.606635036205038, latitude: 43.71417275586112},
{longitude: 27.09652650583492, latitude: 44.128957267668895},
{longitude: 25.505725153231257, latitude: 43.62912239909719},
{longitude: 23.211743492592674, latitude: 43.846332986275016},
{longitude: 22.611210218211774, latitude: 44.138772780867754},
{longitude: 21.35580858122171, latitude: 44.869428024664984},
{longitude: 21.436501403455253, latitude: 45.10261039168654},
{longitude: 20.744848641453665, latitude: 45.47455365109431},
{longitude: 20.226109069952475, latitude: 46.085158621548494},
{longitude: 18.935023914216156, latitude: 45.90977518710386},
{longitude: 17.955182501380563, latitude: 45.73407071605816},
{longitude: 17.2865848314457, latitude: 45.9651941343039},
{longitude: 16.5142392472106, latitude: 46.453335471476},
{longitude: 15.67272838677534, latitude: 46.18654948284583},
{longitude: 15.67272838677534, latitude: 45.808090645017764},
{longitude: 15.361484643874611, latitude: 45.43742304290585},
{longitude: 13.87443120557122, latitude: 45.400278262907534},
{longitude: 13.544881719569531, latitude: 45.45357195783376},
{longitude: 13.067502983236027, latitude: 45.604399110935816},
{longitude: 12.364322675201075, latitude: 45.34453453080355},
{longitude: 12.571818503801563, latitude: 44.91610859820853},
{longitude: 12.329740037100986, latitude: 44.682485512655006},
{longitude: 12.456543043467956, latitude: 44.24178658622367},
{longitude: 13.609297646803943, latitude: 43.58184172302424},
{longitude: 14.070399488138344, latitude: 42.708005370771446},
{longitude: 15.200098999407604, latitude: 41.96142545741376},
{longitude: 16.202995504309893, latitude: 41.9326066938227},
{longitude: 16.226050596376595, latitude: 41.749909366985854},
{longitude: 16.030082313809498, latitude: 41.60545716692254},
{longitude: 16.0531374058762, latitude: 41.45116372948534},
{longitude: 12.664038872068442, latitude: 41.40290240653206},
{longitude: 11.74183518939964, latitude: 42.047835576857175},
{longitude: 11.153930341698299, latitude: 42.440603543464},
{longitude: 10.485332671763437, latitude: 42.96521700516514},
{longitude: 10.0357583764624, latitude: 43.9689000621522},
{longitude: 8.790783404859534, latitude: 44.38264582130529},
{longitude: 8.087603096824582, latitude: 43.88406164812376},
{longitude: 7.442060518956448, latitude: 43.71417275586112},
{longitude: 6.508329290254285, latitude: 43.10784012296772},
{longitude: 6.116392725120065, latitude: 43.041306895841586},
{longitude: 5.390157325018387, latitude: 43.20281397875534},
{longitude: 5.055858490050957, latitude: 43.39250156021518},
{longitude: 4.6985045630168, latitude: 43.34511220836606},
{longitude: 4.052961985148666, latitude: 43.55346287357841},
{longitude: 3.2690888548801986, latitude: 43.15533788049667},
{longitude: 3.1077032104131392, latitude: 42.91763272117673},
{longitude: 3.3382541310803524, latitude: 42.28749979789919},
{longitude: 3.280616400913536, latitude: 41.9326066938227},
{longitude: 2.1163342515442114, latitude: 41.26765781142563},
{longitude: 1.044272470441767, latitude: 41.01604869256951},
{longitude: 0.8713592799413702, latitude: 40.68615975058431},
{longitude: 0.049385779817921464, latitude: 39.86323254233754},
]
],
[
[
{longitude: 8.695802249741819, latitude: 42.568881510037315},
{longitude: 9.529360653967611, latitude: 42.82754070800646},
{longitude: 9.594482404297763, latitude: 42.10386873710121},
{longitude: 9.190727552250882, latitude: 41.342553204718655},
{longitude: 8.773948350138, latitude: 41.57150737533035},
{longitude: 8.695802249741819, latitude: 42.568881510037315},
]
],
[
[
{longitude: 43.52619376700989, latitude: 41.04760762453053},
{longitude: 42.789039475305394, latitude: 41.52018487703483},
{longitude: 42.46626818637133, latitude: 41.41404879666019},
{longitude: 41.42878904336895, latitude: 41.51054039208269},
{longitude: 41.72850524023629, latitude: 41.96291037593537},
{longitude: 41.45184413543563, latitude: 42.6331493648269},
{longitude: 39.88409787489874, latitude: 43.431861803853266},
{longitude: 40.656443459133875, latitude: 43.57384535574038},
{longitude: 41.60170223386935, latitude: 43.25173535218305},
{longitude: 42.43168554827124, latitude: 43.24224633479634},
{longitude: 44.068597085008356, latitude: 42.652237178190944},
{longitude: 44.506643834276, latitude: 42.79528587073767},
{longitude: 45.18676905024422, latitude: 42.69040246468553},
{longitude: 45.77467389794555, latitude: 42.47076390275146},
{longitude: 45.69398107571205, latitude: 42.21234700298078},
{longitude: 46.47785420598055, latitude: 41.89565555583766},
{longitude: 46.22424819324661, latitude: 41.65511833681281},
{longitude: 46.63923985044758, latitude: 41.34645414515051},
{longitude: 46.47785420598055, latitude: 41.02723420661888},
{longitude: 45.27898941851113, latitude: 41.40439496473487},
{longitude: 45.00232831371047, latitude: 41.259485647778206},
{longitude: 43.52619376700989, latitude: 41.04760762453053},
]
],
[
[
{longitude: 18.1032261640686, latitude: 57.568095272347236},
{longitude: 18.54127291333628, latitude: 57.855488055948435},
{longitude: 19.117650215004282, latitude: 57.84752114354801},
{longitude: 18.70265855780334, latitude: 57.19912265325147},
{longitude: 18.1032261640686, latitude: 57.568095272347236},
]
],
[
[
{longitude: 22.045646907477668, latitude: 58.489839161104996},
{longitude: 22.63355175517901, latitude: 58.639626519377494},
{longitude: 23.35978715528069, latitude: 58.489839161104996},
{longitude: 22.160922367811274, latitude: 58.13374619034381},
{longitude: 22.045646907477668, latitude: 58.489839161104996},
]
],
[
[
{longitude: -4.159298348262957, latitude: 53.247606815334194},
{longitude: -3.0968393265726952, latitude: 53.46760421906851},
{longitude: -3.9797278093857185, latitude: 54.742089222036526},
{longitude: -5.20679315838013, latitude: 54.86081360523646},
{longitude: -4.787795234333266, latitude: 55.430199505317326},
{longitude: -5.6557195055732, latitude: 56.058880416689554},
{longitude: -5.476148966695962, latitude: 56.4714618031813},
{longitude: -5.99989637175456, latitude: 56.608460539596756},
{longitude: -5.625791082426993, latitude: 57.21646718363961},
{longitude: -5.865218467596619, latitude: 57.43531112481751},
{longitude: -5.356435274111162, latitude: 58.272970450998535},
{longitude: -4.75786681118706, latitude: 58.549913969855886},
{longitude: -3.0070540571340496, latitude: 58.52943864401908},
{longitude: -3.904906751520216, latitude: 57.943267653986545},
{longitude: -2.01941609330929, latitude: 57.73639144202619},
{longitude: -1.7201318618472525, latitude: 57.50810597826206},
{longitude: -2.6030203446603024, latitude: 56.2919109727555},
{longitude: -3.022018268707166, latitude: 56.11190834706748},
{longitude: -2.109201362747936, latitude: 55.952707309745314},
{longitude: -1.5704897461162204, latitude: 55.569189786415656},
{longitude: -1.2113486683617696, latitude: 54.78528359331288},
{longitude: -0.6127802054376674, latitude: 54.52574253028717},
{longitude: 0.614285143556717, latitude: 52.982787434503784},
{longitude: 1.7366010115393922, latitude: 52.76141959885543},
{longitude: 1.6019231073814764, latitude: 52.0488622410417},
{longitude: 0.8088198940070719, latitude: 51.408886537308106},
{longitude: 1.4672452032235606, latitude: 51.38633978651449},
{longitude: 1.0033546444574004, latitude: 50.87740095638385},
{longitude: 0.2252156426560598, latitude: 50.70705876961319},
{longitude: -2.513235075221683, latitude: 50.58192027121039},
{longitude: -3.366195134888527, latitude: 50.593304218732975},
{longitude: -3.78519305893539, latitude: 50.17107063163431},
{longitude: -4.174262559836047, latitude: 50.35391723488818},
{longitude: -5.431256331976664, latitude: 50.21681927596683},
{longitude: -4.219155194555371, latitude: 51.21704170633779},
{longitude: -3.3213025001692036, latitude: 51.23963491137163},
{longitude: -4.398725733432609, latitude: 51.70143025490082},
{longitude: -4.922473138491181, latitude: 51.589037436931605},
{longitude: -5.1170078889415365, latitude: 52.015304970653666},
{longitude: -4.054548867251247, latitude: 52.55054369106753},
{longitude: -4.159298348262957, latitude: 53.247606815334194},
]
],
[
[
{longitude: -10.040233496492217, latitude: 54.297906284589565},
{longitude: -8.693454454912981, latitude: 54.384782228769694},
{longitude: -8.798203935924716, latitude: 54.69886985997979},
{longitude: -8.289420742439232, latitude: 55.183646599431526},
{longitude: -7.211997509175855, latitude: 55.37667137317462},
{longitude: -7.167104874456558, latitude: 55.12993875296483},
{longitude: -6.08968164119318, latitude: 55.248044448699574},
{longitude: -5.401327908830484, latitude: 54.50407350525171},
{longitude: -5.550970024561464, latitude: 54.2435580865616},
{longitude: -6.179466910631799, latitude: 54.05848235351974},
{longitude: -5.969967948608354, latitude: 52.91644245342122},
{longitude: -6.523643776813159, latitude: 52.160618883756264},
{longitude: -7.496317529064802, latitude: 52.03767803673311},
{longitude: -8.798203935924716, latitude: 51.54403690378976},
{longitude: -10.489159843685313, latitude: 51.8697287037439},
{longitude: -9.366843975702611, latitude: 53.0821998187077},
{longitude: -9.860662957614979, latitude: 53.37968005299132},
{longitude: -10.040233496492217, latitude: 54.297906284589565},
]
],
];
estados_unidos=[
[
[
{longitude: -124.70340990110422, latitude: 48.523848001787584},
{longitude: -122.51630710888735, latitude: 48.16813315391407},
{longitude: -122.82130711406805, latitude: 49.064828503134876},
{longitude: -107.76966808276703, latitude: 49.0310534620652},
{longitude: -91.44213642484742, latitude: 48.30119704408783},
{longitude: -88.40288168713023, latitude: 48.36692665592551},
{longitude: -81.69338495566714, latitude: 44.885497481655705},
{longitude: -82.83890878786816, latitude: 41.96099947260734},
{longitude: -75.10662292051133, latitude: 45.05104141788444},
{longitude: -71.42458203129378, latitude: 45.41425909394798},
{longitude: -69.21535749776325, latitude: 47.661677971342826},
{longitude: -67.70162957664049, latitude: 47.145317844323046},
{longitude: -67.57889488033324, latitude: 45.77612713144978},
{longitude: -66.84248670248972, latitude: 45.01795485380413},
{longitude: -70.76999698432178, latitude: 42.471112303565114},
{longitude: -70.23814663365701, latitude: 41.551164273397895},
{longitude: -74.94297665876833, latitude: 38.46394083915575},
{longitude: -75.72029640204758, latitude: 35.58343782410103},
{longitude: -81.32518086674538, latitude: 30.902052123178997},
{longitude: -79.97509920736563, latitude: 25.692781662307393},
{longitude: -81.4070039976169, latitude: 25.11731544382293},
{longitude: -83.04346661504691, latitude: 27.67414888848324},
{longitude: -83.73896322745468, latitude: 29.708365208998377},
{longitude: -96.95339886320207, latitude: 28.090500195789147},
{longitude: -97.03522199407358, latitude: 25.769380581620393},
{longitude: -99.24444652760411, latitude: 26.34288535866489},
{longitude: -101.49458262657038, latitude: 29.633463933432616},
{longitude: -103.2946915057434, latitude: 28.769642628230923},
{longitude: -105.91303169363144, latitude: 31.087751145026232},
{longitude: -117.20462375389856, latitude: 32.418144380303076},
{longitude: -120.76392994680884, latitude: 34.53635836851389},
{longitude: -124.56870553233364, latitude: 40.4507489028686},
{longitude: -124.69144022864089, latitude: 42.84364708237097},
{longitude: -124.1186783125404, latitude: 45.183276458587144},
{longitude: -124.7732633595124, latitude: 47.95085427612343},
{longitude: -124.70340990110422, latitude: 48.523848001787584},
]
],
[
[
{longitude: -140.85184814175545, latitude: 69.7246875715936},
{longitude: -140.80408134464048, latitude: 65.15621457241912},
{longitude: -140.72471907092674, latitude: 60.412471249217994},
{longitude: -138.18512631208677, latitude: 59.82943232066379},
{longitude: -137.1930978906649, latitude: 59.025846279052864},
{longitude: -136.39947515352742, latitude: 59.69618549238852},
{longitude: -135.4074467321055, latitude: 59.85604886950682},
{longitude: -132.66944828898122, latitude: 57.774518879750254},
{longitude: -129.81240643528616, latitude: 55.88215857896433},
{longitude: -130.12985553014119, latitude: 54.745264895701276},
{longitude: -131.79646327812992, latitude: 54.601917204929},
{longitude: -132.98689738383618, latitude: 55.031136507421294},
{longitude: -133.85988239468742, latitude: 56.723288177778485},
{longitude: -134.61382399496804, latitude: 56.58378694209709},
{longitude: -137.6692715329474, latitude: 58.53896130753917},
{longitude: -139.21683587036551, latitude: 59.32163880073244},
{longitude: -143.77656690757493, latitude: 59.972246101361236},
{longitude: -145.9617368448035, latitude: 60.44748198151624},
{longitude: -146.89597616579255, latitude: 60.96095767220167},
{longitude: -148.25774873536977, latitude: 60.82513580866565},
{longitude: -148.06773395821946, latitude: 59.972246101361236},
{longitude: -151.7888566774131, latitude: 59.08644843547685},
{longitude: -151.75718754788804, latitude: 60.04640310823082},
{longitude: -151.40882712311247, latitude: 60.81467582156684},
{longitude: -153.863184661304, latitude: 59.29028140590628},
{longitude: -153.15046761682692, latitude: 58.89300218510921},
{longitude: -152.29196988706929, latitude: 57.451073927440085},
{longitude: -154.35046330619767, latitude: 56.85412364454703},
{longitude: -155.25303349766165, latitude: 57.846206523685964},
{longitude: -158.214097108254, latitude: 56.140018327442675},
{longitude: -161.09598789503374, latitude: 55.35075638634262},
{longitude: -164.59542670755198, latitude: 54.34637733478944},
{longitude: -165.0229599561402, latitude: 54.6559793540229},
{longitude: -163.2653232674998, latitude: 55.157784298668204},
{longitude: -161.23849897789648, latitude: 56.072703365647584},
{longitude: -157.69155647109065, latitude: 57.6269682744519},
{longitude: -160.31583654157083, latitude: 58.9774098991035},
{longitude: -161.85796972017712, latitude: 58.507436429394716},
{longitude: -162.31732853933642, latitude: 60.06116854667913},
{longitude: -163.95789575061968, latitude: 59.68720614032887},
{longitude: -167.33746420586326, latitude: 59.995332190154066},
{longitude: -165.63127430612863, latitude: 60.80261644484217},
{longitude: -166.2218785021906, latitude: 61.856019992549726},
{longitude: -164.38444322555335, latitude: 63.28837368278073},
{longitude: -161.13612014721247, latitude: 63.64112639073532},
{longitude: -161.16893149143814, latitude: 64.44235670535167},
{longitude: -166.3203125348676, latitude: 64.46275442846823},
{longitude: -168.2561818441819, latitude: 65.69321292563521},
{longitude: -164.71255666781002, latitude: 66.6032299920678},
{longitude: -161.6939129990488, latitude: 66.28843699812707},
{longitude: -166.48436925599594, latitude: 68.4344988396741},
{longitude: -166.25468984641628, latitude: 68.96199128329177},
{longitude: -161.92359240862845, latitude: 70.42058840984302},
{longitude: -156.77221136519896, latitude: 71.39265786235045},
{longitude: -152.1786231736058, latitude: 70.85510198358955},
{longitude: -145.78041104960104, latitude: 70.22010257601339},
{longitude: -143.18831485577348, latitude: 70.16527872682946},
{longitude: -140.85184814175545, latitude: 69.7246875715936},
]
],
[
[
{longitude: -170.3201889275984, latitude: 63.73595586982819},
{longitude: -169.6893188408272, latitude: 63.02567162399901},
{longitude: -171.65202577744859, latitude: 63.69181514113364},
{longitude: -170.3201889275984, latitude: 63.73595586982819},
]
],
[
[
{longitude: -155.84896765598774, latitude: 20.417004149040142},
{longitude: -154.69601272815353, latitude: 19.53733387088042},
{longitude: -155.7757641685062, latitude: 18.83140786063758},
{longitude: -156.12348073404354, latitude: 19.78395257114169},
{longitude: -155.84896765598774, latitude: 20.417004149040142},
]
],
];
peru=[
[
[
{longitude: -75.34855826283122, latitude: 0.023151146487611234},
{longitude: -74.70733617001324, latitude: -0.10016076138623273},
{longitude: -73.10428093796827, latitude: -1.8016755226797077},
{longitude: -72.9316442206711, latitude: -2.245420620807908},
{longitude: -71.69852481140575, latitude: -2.072862390674012},
{longitude: -70.86000361310529, latitude: -2.072862390674012},
{longitude: -69.94749525024893, latitude: -2.7383688808836433},
{longitude: -70.49006779032568, latitude: -3.67459384669197},
{longitude: -69.8241833093224, latitude: -4.2409614057093155},
{longitude: -70.93399077766122, latitude: -4.437898403886998},
{longitude: -72.68502033881803, latitude: -5.126903628246053},
{longitude: -73.07961854978296, latitude: -6.478864714647562},
{longitude: -73.84415258352747, latitude: -7.607841064768685},
{longitude: -72.90698183248581, latitude: -8.979663203440877},
{longitude: -71.89582391688819, latitude: -9.88426368818492},
{longitude: -70.56405495488161, latitude: -9.322121784047727},
{longitude: -69.47890987472809, latitude: -10.836043844511199},
{longitude: -68.59106390005701, latitude: -12.539431788592857},
{longitude: -68.81302539372479, latitude: -14.211505929996546},
{longitude: -68.78836300553947, latitude: -16.33255605899296},
{longitude: -69.79952092113707, latitude: -18.2959936113656},
{longitude: -70.41608062576975, latitude: -18.439128280522834},
{longitude: -73.8934773598981, latitude: -16.260476008964133},
{longitude: -76.43370334298474, latitude: -14.259859533480256},
{longitude: -77.22289976491457, latitude: -12.126372570558752},
{longitude: -78.50534395055057, latitude: -9.419928082844132},
{longitude: -80.08373679441023, latitude: -6.822650172991899},
{longitude: -81.31685620367558, latitude: -5.913752871314637},
{longitude: -80.97158276908128, latitude: -5.692519699621869},
{longitude: -81.51415530915804, latitude: -4.536354398279625},
{longitude: -80.25637351170738, latitude: -3.3050975297606175},
{longitude: -79.12190365518325, latitude: -4.782456425805332},
{longitude: -78.38203200962401, latitude: -3.1572737979670613},
{longitude: -76.18707946113167, latitude: -2.0235577845049515},
{longitude: -75.52119498012839, latitude: -1.0866146311405984},
{longitude: -75.34855826283122, latitude: 0.023151146487611234},
]
],
];
mexico=[
[
[
{longitude: -117.20462375389856, latitude: 32.418144380303076},
{longitude: -105.91303169363144, latitude: 31.087751145026232},
{longitude: -103.2946915057434, latitude: 28.769642628230923},
{longitude: -101.49458262657038, latitude: 29.633463933432616},
{longitude: -99.24444652760411, latitude: 26.34288535866489},
{longitude: -97.03522199407358, latitude: 25.769380581620393},
{longitude: -97.72623883487034, latitude: 22.600346991646965},
{longitude: -96.37280261152843, latitude: 19.89424933633202},
{longitude: -95.72245035172523, latitude: 18.84409181222468},
{longitude: -94.57993962504398, latitude: 18.504432881634607},
{longitude: -93.59562269128783, latitude: 18.487438687031737},
{longitude: -91.96095349772851, latitude: 18.793170425134992},
{longitude: -91.75002844049504, latitude: 18.538418073095606},
{longitude: -91.31060123792531, latitude: 18.640348001494925},
{longitude: -91.36333250223369, latitude: 18.911971823887477},
{longitude: -90.78328859484168, latitude: 19.386641822360417},
{longitude: -90.37901556847754, latitude: 21.09146629930234},
{longitude: -88.12914829132062, latitude: 21.712993375352475},
{longitude: -86.74055833120032, latitude: 21.46122336356263},
{longitude: -86.7932895955087, latitude: 20.855863839753663},
{longitude: -87.40848767910627, latitude: 20.080116806721435},
{longitude: -87.37333350290072, latitude: 19.55595663835831},
{longitude: -87.74245235305925, latitude: 18.385451191294948},
{longitude: -89.0607339607684, latitude: 17.755692918084033},
{longitude: -90.92390529966399, latitude: 17.77273208838044},
{longitude: -90.95905947586957, latitude: 17.244044703714295},
{longitude: -90.29113012796361, latitude: 16.372192640451008},
{longitude: -90.37901556847754, latitude: 16.012467956797874},
{longitude: -91.71487426428946, latitude: 16.02960709825435},
{longitude: -92.01368476203687, latitude: 15.08559385331288},
{longitude: -92.22460981927034, latitude: 14.483459159041681},
{longitude: -94.91390429899697, latitude: 16.269456630142706},
{longitude: -96.5134193163507, latitude: 15.566525648111753},
{longitude: -98.55236153627419, latitude: 16.23520371086346},
{longitude: -101.62835195426217, latitude: 17.568194515831273},
{longitude: -105.00315286999756, latitude: 19.23416343087371},
{longitude: -105.75896765841748, latitude: 20.400833049933755},
{longitude: -105.28438627964218, latitude: 21.10828608734073},
{longitude: -105.82927601082862, latitude: 22.433191718244665},
{longitude: -107.9912578474716, latitude: 24.579502532102612},
{longitude: -109.46773324810583, latitude: 25.767661003344863},
{longitude: -110.50478144617037, latitude: 27.29142063603951},
{longitude: -112.20975899214085, latitude: 28.99628731321599},
{longitude: -113.194075925897, latitude: 30.81179434613095},
{longitude: -114.7408596789424, latitude: 31.687951082833454},
{longitude: -114.56508879791451, latitude: 30.52397278298673},
{longitude: -113.70381148087786, latitude: 29.367462736862432},
{longitude: -112.84253416384124, latitude: 28.44608222109162},
{longitude: -111.50667546802931, latitude: 26.70307438150477},
{longitude: -110.45205018186199, latitude: 24.29792042865227},
{longitude: -109.92473753877834, latitude: 24.19844490321519},
{longitude: -109.30953945518075, latitude: 23.267687314180222},
{longitude: -109.92473753877834, latitude: 22.817458460169146},
{longitude: -112.15702772783249, latitude: 24.84416018148074},
{longitude: -112.4206840493743, latitude: 26.194921910048897},
{longitude: -113.63350312846671, latitude: 26.670332558176874},
{longitude: -115.14513270530652, latitude: 27.747690638753294},
{longitude: -114.14323868344759, latitude: 28.413661558263996},
{longitude: -115.76033078890413, latitude: 29.73780385631198},
{longitude: -116.0942954628571, latitude: 30.779840268475986},
{longitude: -117.20462375389856, latitude: 32.418144380303076},
]
],
];
south_africa=[
[
[
{longitude: 19.892440496959903, latitude: -28.326596217269945},
{longitude: 19.921220846143914, latitude: -24.677920075462833},
{longitude: 20.49682782982434, latitude: -24.94862241150655},
{longitude: 20.899752718400634, latitude: -25.893136606894846},
{longitude: 20.842192020032616, latitude: -26.779388115655717},
{longitude: 22.56901297107388, latitude: -26.0007852765068},
{longitude: 22.828036113730075, latitude: -25.326981543143066},
{longitude: 23.317302049858448, latitude: -25.110865915780153},
{longitude: 24.813880207427527, latitude: -25.731548877225112},
{longitude: 25.82119242886829, latitude: -24.677920075462833},
{longitude: 28.094840014405996, latitude: -22.608812002431346},
{longitude: 29.097185268887042, latitude: -22.05543321428324},
{longitude: 31.433360519752487, latitude: -22.307666153351214},
{longitude: 32.152869249353046, latitude: -24.43397349106293},
{longitude: 32.03774785261696, latitude: -26.027687853612836},
{longitude: 31.28945877383239, latitude: -26.0007852765068},
{longitude: 30.944094583624114, latitude: -26.430763583734986},
{longitude: 31.519701567304573, latitude: -27.12734806561001},
{longitude: 32.095308550984974, latitude: -26.698995033242152},
{longitude: 33.045060074057716, latitude: -26.779388115655717},
{longitude: 32.52701378874527, latitude: -28.671507749541934},
{longitude: 31.404580170568476, latitude: -29.464769317455744},
{longitude: 30.36848759994371, latitude: -30.987522744183273},
{longitude: 28.756788045638487, latitude: -32.443723124380305},
{longitude: 27.116308142149247, latitude: -33.57789192672893},
{longitude: 25.677290682948186, latitude: -34.039280790011844},
{longitude: 24.84266055661159, latitude: -34.21829882860148},
{longitude: 22.281209479233677, latitude: -34.1160310880435},
{longitude: 21.82072389228934, latitude: -34.44812475667673},
{longitude: 19.719758401855763, latitude: -34.93204894109024},
{longitude: 18.280740942654703, latitude: -33.9880903926895},
{longitude: 17.79147500652633, latitude: -32.93457142999255},
{longitude: 18.194399895102624, latitude: -32.57305374154173},
{longitude: 18.194399895102624, latitude: -31.795369823409594},
{longitude: 16.323677198141233, latitude: -28.56545553550172},
{longitude: 17.100746626109807, latitude: -27.901136459351846},
{longitude: 17.532451863870136, latitude: -28.353152629360338},
{longitude: 18.165619545918613, latitude: -28.777493549240397},
{longitude: 19.892440496959903, latitude: -28.326596217269945},
]
],
[
[
{longitude: 27.225837276904983, latitude: -29.69480501389381},
{longitude: 27.867233892335612, latitude: -28.994442608082004},
{longitude: 28.600258595684902, latitude: -28.685346249921146},
{longitude: 29.302740603061295, latitude: -29.302968392634746},
{longitude: 27.989404676227174, latitude: -30.50346166014417},
{longitude: 27.225837276904983, latitude: -29.69480501389381},
]
],
];
southern_africa=[
[
[
{longitude: 33.045060074057716, latitude: -26.779388115655717},
{longitude: 32.095308550984974, latitude: -26.698995033242152},
{longitude: 31.519701567304573, latitude: -27.12734806561001},
{longitude: 30.944094583624114, latitude: -26.430763583734986},
{longitude: 31.28945877383239, latitude: -26.0007852765068},
{longitude: 32.03774785261696, latitude: -26.027687853612836},
{longitude: 32.152869249353046, latitude: -24.43397349106293},
{longitude: 31.433360519752487, latitude: -22.307666153351214},
{longitude: 29.097185268887042, latitude: -22.05543321428324},
{longitude: 28.98963038250928, latitude: -21.905794752260437},
{longitude: 27.980970104590305, latitude: -21.658328536715604},
{longitude: 27.5775059934227, latitude: -21.079873482547313},
{longitude: 27.260498477505312, latitude: -20.49999870061027},
{longitude: 26.10774387416935, latitude: -19.58598189566739},
{longitude: 25.18554019150055, latitude: -17.971655811568965},
{longitude: 24.926170405749954, latitude: -17.664408623032173},
{longitude: 23.36995169124638, latitude: -17.748236480298704},
{longitude: 22.04428389741, latitude: -16.65657787764756},
{longitude: 21.90018957199301, latitude: -15.926593143372042},
{longitude: 21.92900843707642, latitude: -12.933825762146276},
{longitude: 23.773415802413993, latitude: -12.905474530164831},
{longitude: 23.946328992914392, latitude: -10.77360888954847},
{longitude: 24.378611969165384, latitude: -11.058456391099668},
{longitude: 25.21435905658396, latitude: -11.172346296006495},
{longitude: 26.16538160433617, latitude: -11.798224244054117},
{longitude: 27.058766421921508, latitude: -11.54229036961706},
{longitude: 28.413253080841326, latitude: -12.451579670616022},
{longitude: 29.047268112676097, latitude: -13.27387950096022},
{longitude: 29.68128314451087, latitude: -13.160561495307755},
{longitude: 29.47955108892706, latitude: -12.536724016207083},
{longitude: 29.01844924759269, latitude: -12.451579670616022},
{longitude: 28.182702160174113, latitude: -11.656057314235882},
{longitude: 28.557347406258316, latitude: -9.88950936200403},
{longitude: 28.289576921335872, latitude: -9.174292572065621},
{longitude: 28.95241081825405, latitude: -8.373416168058535},
{longitude: 30.796818183591604, latitude: -8.087128493609947},
{longitude: 32.468312358428804, latitude: -9.117124149390266},
{longitude: 33.41933490618096, latitude: -9.888390414211997},
{longitude: 33.736342422098346, latitude: -10.572995732484289},
{longitude: 33.44815377126437, latitude: -12.50723203510019},
{longitude: 32.78531987434619, latitude: -13.61252143608327},
{longitude: 33.736342422098346, latitude: -14.460530766239234},
{longitude: 34.48563291426675, latitude: -14.319335194650778},
{longitude: 34.62972723968374, latitude: -15.362811370142847},
{longitude: 35.033191350851354, latitude: -16.571337646067796},
{longitude: 35.63838751760276, latitude: -15.95359933665672},
{longitude: 35.696025247769526, latitude: -14.714538911680409},
{longitude: 34.427995184099935, latitude: -13.414369777698624},
{longitude: 34.28390085868295, latitude: -12.138118981942071},
{longitude: 34.687364969850556, latitude: -11.37046944884937},
{longitude: 36.99287417652253, latitude: -11.42737868956287},
{longitude: 37.94389672427468, latitude: -11.228164743898057},
{longitude: 40.50877571669728, latitude: -10.373416847660812},
{longitude: 40.76814550244785, latitude: -14.375820224437922},
{longitude: 40.941058692948246, latitude: -14.770959797489645},
{longitude: 39.932398415029276, latitude: -16.51523073418629},
{longitude: 37.309881692439916, latitude: -17.77507850698496},
{longitude: 35.033191350851354, latitude: -19.889939403385704},
{longitude: 34.802640430184134, latitude: -20.415961455318552},
{longitude: 35.37901773185214, latitude: -21.65725009782383},
{longitude: 35.63838751760276, latitude: -22.973925748544723},
{longitude: 35.49429319218572, latitude: -24.22824417418946},
{longitude: 35.20610454135174, latitude: -24.608484011738252},
{longitude: 32.842957604513, latitude: -25.66389313934909},
{longitude: 32.727682144179376, latitude: -25.98747810301373},
{longitude: 33.0158707950134, latitude: -26.256709197076262},
{longitude: 33.045060074057716, latitude: -26.779388115655717},
]
],
[
[
{longitude: 27.225837276904983, latitude: -29.69480501389381},
{longitude: 27.867233892335612, latitude: -28.994442608082004},
{longitude: 28.600258595684902, latitude: -28.685346249921146},
{longitude: 29.302740603061295, latitude: -29.302968392634746},
{longitude: 27.989404676227174, latitude: -30.50346166014417},
{longitude: 27.225837276904983, latitude: -29.69480501389381},
]
],
];
africa_polygon=[
[
[
{longitude: 27.225837276904983, latitude: -29.69480501389381},
{longitude: 27.867233892335612, latitude: -28.994442608082004},
{longitude: 28.600258595684902, latitude: -28.685346249921146},
{longitude: 29.302740603061295, latitude: -29.302968392634746},
{longitude: 27.989404676227174, latitude: -30.50346166014417},
{longitude: 27.225837276904983, latitude: -29.69480501389381},
]
],
];
asia=[
[
[
{longitude: 77.34455048103622, latitude: 35.38000689173152},
{longitude: 75.84795837836477, latitude: 35.83636835731422},
{longitude: 75.78687298641901, latitude: 36.584562448327794},
{longitude: 74.32082357972043, latitude: 36.95702985464298},
{longitude: 74.6567932354222, latitude: 38.40962469894185},
{longitude: 73.64888426831692, latitude: 38.54082646385892},
{longitude: 73.4656280924796, latitude: 39.533256556961646},
{longitude: 73.9237685320729, latitude: 40.15573522812394},
{longitude: 76.82532464949716, latitude: 41.031789865938194},
{longitude: 80.09339311859607, latitude: 42.079080027948656},
{longitude: 79.97122233470454, latitude: 45.06115643183934},
{longitude: 82.26192453267105, latitude: 45.578366482771756},
{longitude: 83.08657732393897, latitude: 47.234244275015214},
{longitude: 85.49945030579701, latitude: 47.330744133133486},
{longitude: 85.59107839371568, latitude: 48.43321734530604},
{longitude: 86.72115814471248, latitude: 49.16860622588832},
{longitude: 87.91232328765507, latitude: 49.23944763698642},
{longitude: 90.47790974937757, latitude: 47.739741084997625},
{longitude: 91.21093445272683, latitude: 46.458618452677065},
{longitude: 90.8138794050793, latitude: 45.55379959040079},
{longitude: 93.80706361042222, latitude: 45.01175559654554},
{longitude: 95.45636919295814, latitude: 44.317547355327456},
{longitude: 96.5864489439549, latitude: 43.04072266566511},
{longitude: 101.80924995531853, latitude: 42.58629546496443},
{longitude: 104.5275498969054, latitude: 41.95190003931771},
{longitude: 111.67454075456092, latitude: 43.74369401229839},
{longitude: 111.2164003149676, latitude: 44.41701611522477},
{longitude: 111.88833962637113, latitude: 45.20921015983259},
{longitude: 116.56137211022282, latitude: 46.361212953699166},
{longitude: 118.3328484766502, latitude: 46.82299489125345},
{longitude: 119.73781249140306, latitude: 46.725966019753024},
{longitude: 118.48556195651466, latitude: 47.90762020741598},
{longitude: 117.35548220551787, latitude: 47.54749948101236},
{longitude: 115.27857887936158, latitude: 47.59559783012415},
{longitude: 116.68354289411435, latitude: 49.921280567533465},
{longitude: 117.9052507330298, latitude: 49.61629695383481},
{longitude: 119.98215405918612, latitude: 52.8887052247061},
{longitude: 122.33394164909842, latitude: 53.60814808269723},
{longitude: 123.70836296787829, latitude: 53.63052356172242},
{longitude: 125.78526629403459, latitude: 53.11424490391717},
{longitude: 127.70945614032647, latitude: 50.225180708392124},
{longitude: 131.03861000137115, latitude: 48.45703508392211},
{longitude: 134.6426481261718, latitude: 48.45703508392211},
{longitude: 134.91753238992771, latitude: 47.66769792645513},
{longitude: 132.962799847663, latitude: 44.88814512931023},
{longitude: 131.22186617720843, latitude: 44.83865762011793},
{longitude: 131.46620774499155, latitude: 42.83899742196499},
{longitude: 130.54992686580496, latitude: 42.383698635938885},
{longitude: 128.9922493711877, latitude: 41.95190003931771},
{longitude: 128.2286819718655, latitude: 41.262541749278554},
{longitude: 126.73208986919411, latitude: 41.364943512619284},
{longitude: 124.16650340747162, latitude: 39.689191412542144},
{longitude: 121.53983155380337, latitude: 38.750451091345745},
{longitude: 121.41766076991178, latitude: 39.689191412542144},
{longitude: 122.0285146893695, latitude: 40.439910512274565},
{longitude: 121.29548998602026, latitude: 40.72337334254151},
{longitude: 119.00478778805375, latitude: 39.11640796273042},
{longitude: 117.93579342900273, latitude: 38.959707701332235},
{longitude: 118.08850690886715, latitude: 38.278279910880734},
{longitude: 119.12695857194525, latitude: 38.12047777794988},
{longitude: 119.49347092361992, latitude: 37.301911551130225},
{longitude: 120.77626415448117, latitude: 37.96247060311184},
{longitude: 122.79208208869171, latitude: 37.40783809939467},
{longitude: 122.66991130480017, latitude: 36.85072209716516},
{longitude: 119.46292822764705, latitude: 34.97602959778121},
{longitude: 120.44029449877945, latitude: 34.40842354087413},
{longitude: 121.99797199339665, latitude: 30.926565511121844},
{longitude: 121.75363042561357, latitude: 28.325870119689615},
{longitude: 118.63827543637912, latitude: 24.48023821093416},
{longitude: 116.50028671827702, latitude: 22.86246373900366},
{longitude: 112.62136432972038, latitude: 21.699416668893427},
{longitude: 110.33066213175388, latitude: 20.969481030902244},
{longitude: 110.60554639550988, latitude: 20.501137305364587},
{longitude: 110.11686325994367, latitude: 20.14928579826919},
{longitude: 107.97887454184162, latitude: 21.436903332693685},
{longitude: 106.6655386150075, latitude: 21.874258840175152},
{longitude: 105.35220268817338, latitude: 23.094336717602303},
{longitude: 104.40537911301386, latitude: 22.514189217469127},
{longitude: 102.0535915231016, latitude: 22.252620983120615},
{longitude: 101.74816456337274, latitude: 21.057193446161705},
{longitude: 100.15994437278262, latitude: 21.378526554386525},
{longitude: 99.09095001373157, latitude: 22.10717239469789},
{longitude: 98.66335227011118, latitude: 23.99045856069852},
{longitude: 97.59435791106011, latitude: 23.817315089014325},
{longitude: 97.4721871271686, latitude: 24.652818826649206},
{longitude: 98.57172418219251, latitude: 27.364931405224763},
{longitude: 97.31947364730412, latitude: 27.761251197248168},
{longitude: 94.23466135404256, latitude: 23.788443752549156},
{longitude: 93.04349621109996, latitude: 21.874258840175152},
{longitude: 92.46318498761516, latitude: 21.903386153694342},
{longitude: 92.18830072385917, latitude: 23.4995102440514},
{longitude: 91.57744680440145, latitude: 22.86246373900366},
{longitude: 90.78333670910638, latitude: 23.4995102440514},
{longitude: 92.1577580278863, latitude: 24.882694456906446},
{longitude: 89.77542774200113, latitude: 25.169663471259152},
{longitude: 88.55371990308566, latitude: 26.256272822296065},
{longitude: 88.52317720711274, latitude: 25.570711963122438},
{longitude: 88.8286041668416, latitude: 24.278707064069316},
{longitude: 89.19511651851626, latitude: 21.495265431362387},
{longitude: 86.96549971249561, latitude: 21.203308492889548},
{longitude: 87.11821319236, latitude: 20.58902110321428},
{longitude: 86.32410309706495, latitude: 19.826315586577813},
{longitude: 84.1861143789629, latitude: 18.234931128930494},
{longitude: 82.29246722864391, latitude: 16.485641427545588},
{longitude: 81.04021669375553, latitude: 15.6817004436616},
{longitude: 80.33773468637914, latitude: 15.622067988443549},
{longitude: 80.4293627742978, latitude: 13.348240777671265},
{longitude: 79.91013694275874, latitude: 10.214945967684791},
{longitude: 79.02439875954501, latitude: 9.186014202754308},
{longitude: 78.10811788035839, latitude: 8.306878508451398},
{longitude: 77.52780665687357, latitude: 7.97307678519459},
{longitude: 76.9169527374158, latitude: 8.337215243807272},
{longitude: 76.21447073003941, latitude: 9.3677351478016},
{longitude: 75.66470220252745, latitude: 11.302089769016215},
{longitude: 73.83214044415426, latitude: 14.96539316728719},
{longitude: 73.25182922066939, latitude: 16.396417062860408},
{longitude: 72.549347213293, latitude: 19.855693727184647},
{longitude: 72.82423147704897, latitude: 20.501137305364587},
{longitude: 72.5188045173201, latitude: 21.641106224693363},
{longitude: 72.36609103745567, latitude: 22.16536317013388},
{longitude: 72.36609103745567, latitude: 21.46608621917483},
{longitude: 72.06066407772681, latitude: 21.057193446161705},
{longitude: 70.77787084686558, latitude: 20.55973003947541},
{longitude: 68.8536810005737, latitude: 22.252620983120615},
{longitude: 70.07538883948916, latitude: 22.63034236960167},
{longitude: 69.15910796030256, latitude: 22.74643396752784},
{longitude: 68.51771134487194, latitude: 23.123303267130506},
{longitude: 68.09011360125155, latitude: 23.903904966842703},
{longitude: 68.70096752070927, latitude: 24.39389231822432},
{longitude: 70.93058432673001, latitude: 24.537781579447095},
{longitude: 69.311821440167, latitude: 26.910913597573252},
{longitude: 70.44190119116382, latitude: 28.141684793624496},
{longitude: 72.27446294953701, latitude: 28.81751075664423},
{longitude: 74.44299436361199, latitude: 31.797007677510567},
{longitude: 73.9543112280458, latitude: 33.25166399337987},
{longitude: 73.83214044415426, latitude: 34.907734387186466},
{longitude: 75.81741568239187, latitude: 34.63760486053357},
{longitude: 76.88641004144294, latitude: 35.17732494081905},
{longitude: 77.34455048103622, latitude: 35.38000689173152},
]
],
[
[
{longitude: 120.99006302629138, latitude: 25.1257442349817},
{longitude: 121.6620023376949, latitude: 25.41235699946903},
{longitude: 122.0285146893695, latitude: 24.982279966169997},
{longitude: 121.41766076991178, latitude: 22.876052568447168},
{longitude: 120.50137989072519, latitude: 22.20808303444642},
{longitude: 119.98215405918612, latitude: 23.107910930400887},
{longitude: 120.10432484307765, latitude: 23.744222406977645},
{longitude: 120.99006302629138, latitude: 25.1257442349817},
]
],
[
[
{longitude: 110.575003699537, latitude: 20.104347523482694},
{longitude: 110.97205874718453, latitude: 20.045646141485737},
{longitude: 111.12477222704895, latitude: 19.54612956268665},
{longitude: 110.575003699537, latitude: 18.66226029123758},
{longitude: 109.53655203645883, latitude: 18.07138520505087},
{longitude: 108.62027115727223, latitude: 18.455599630621045},
{longitude: 108.62027115727223, latitude: 19.39902597183047},
{longitude: 109.6281801243775, latitude: 20.045646141485737},
{longitude: 110.575003699537, latitude: 20.104347523482694},
]
],
[
[
{longitude: 80.15447851054186, latitude: 28.84561184750588},
{longitude: 80.45990547027073, latitude: 29.686444762282214},
{longitude: 82.10921105280659, latitude: 30.021573210150166},
{longitude: 83.54471776353225, latitude: 29.098309884972675},
{longitude: 85.07185256217662, latitude: 28.25450808913905},
{longitude: 86.41573118498361, latitude: 27.859304558406926},
{longitude: 87.94286598362794, latitude: 27.689656786337817},
{longitude: 87.91232328765507, latitude: 26.526056074204178},
{longitude: 84.64425481855616, latitude: 27.34987077515372},
{longitude: 81.98704026891505, latitude: 28.000552039021088},
{longitude: 80.15447851054186, latitude: 28.84561184750588},
]
],
];
var climatesData=[
{
"name": "mediterranean_countries",
"zIndex": 1,
"data": [
{
"title": "Mediterranean countries",
"id": "mediterranean_countries",
"multiGeoPolygon": mediterranean_countries
}
]
},
{
"name": "continental_climate",
"zIndex": 1,
"data": [
{
"title": "Continental climate",
"id": "continental_climate",
"multiGeoPolygon": continental_climate
}
]
},
{
"name": "southern_africa",
"zIndex": 1,
"data": [
{
"title": "Southern Africa",
"id": "southern_africa",
"multiGeoPolygon": southern_africa
}
]
},
{
"name": "south_africa",
"data": [
{
"title": "Sudáfrica",
"id": "south_africa",
"multiGeoPolygon": south_africa
}
]
},
{
"name": "asia",
"zIndex": 1,
"data": [
{
"title": "Asia",
"id": "asia",
"multiGeoPolygon": asia
}
]
},
{
"name": "mexico",
"zIndex": 1,
"data": [
{
"title": "Mexico",
"id": "mexico",
"multiGeoPolygon": mexico
}
]
},
{
"name": "peru",
"zIndex": 1,
"data": [
{
"title": "Peru",
"id": "peru",
"multiGeoPolygon": peru
},
]
},
{
"name": "estados_unidos",
"zIndex": 1,
"data": [
{
"title": "Estados unidos",
"id": "estados_unidos",
"multiGeoPolygon": estados_unidos
},
]
}
];
fruit_colors={
'blueberry':'#4c61bc',
'blackberry':'#201a4b',
'raspberry':'#a61066',
'strawberry':'#b1253f',
'asparagus':'#1f301e',
'garlic':'#804734',
};
jQuery(document).ready(function($){
am4core.useTheme(am4themes_animated);
am4core.addLicense("CH317904801");
am4core.addLicense("MP317904801");
var chart=am4core.create("planasa-map", am4maps.MapChart);
chart.geodata=am4geodata_worldLow;
chart.background.fill=am4core.color("#ffffff");
chart.background.fillOpacity=1;
chart.projection=new am4maps.projections.Miller();
chart.maxZoomLevel=3;
chart.panBehavior="none";
chart.events.on("zoomlevelchanged", function(){
setTimeout(
function(){
if(chart.zoomLevel <=1){
chart.panBehavior="none";
}else if(chart.zoomLevel > 1){
chart.panBehavior="move";
}}, 0);
});
var customZoomFactor=3;
$(document).on("click", '.btn-zoom.zoom-plus', function (o){
chart.zoomToGeoPoint(chart.zoomGeoPoint,
chart.zoomLevel * customZoomFactor,
false
);
});
$(document).on("click", '.btn-zoom.zoom-minus', function (o){
chart.zoomToGeoPoint(chart.zoomGeoPoint,
chart.zoomLevel / customZoomFactor,
false
);
});
var excludedCountries=["AQ"];
var currentActive;
var currentSeries=[];
function unsetup_map_zones(){
if(currentActive){
currentActive.isActive=false;
}
currentSeries.forEach(function(serie){
chart.series.removeIndex(chart.series.indexOf(serie)
).dispose();
})
currentSeries=[];
}
function setup_map_zones(zones){
if(inArray('all_climates', zones)){
var series=chart.series.push(new am4maps.MapPolygonSeries());
currentSeries.push(series);
series.name='all_climates';
series.useGeodata=true;
series.exclude=["AQ"];
series.setStateOnChildren=true;
series.calculateVisualCenter=true;
var mapPolygonTemplate=series.mapPolygons.template;
mapPolygonTemplate.fill=am4core.color(fruit_colors[jQuery('.planasa-main input[name="product"]:checked').val()]);
mapPolygonTemplate.stroke=am4core.color("#f5f7ff");
mapPolygonTemplate.strokeOpacity=0.1;
mapPolygonTemplate.fillOpacity=1;
mapPolygonTemplate.zIndex=1;
mapPolygonTemplate.nonScalingStroke=true;
$('.planasa-main').find('.planasa-attribute').addClass("planasa-active");
$('.planasa-modales').hide();
$('.planasa-advise-2').show();
$('.planasa-main').addClass("zones-active attribute-active");
if(window.innerWidth <=1000){
$('.planasa-main').find('.planasa-products .Collapsible').hide();
$('.planasa-main').find('.planasa-products .toogleCollapsible').removeClass('active-tab');
$('.planasa-main').find('.planasa-zone .Collapsible').hide();
$('.planasa-main').find('.planasa-zone .toogleCollapsible').removeClass('active-tab');
$('.planasa-main').find('.planasa-attribute .toogleCollapsible').trigger('click');
}
jQuery('#map-country').val('all_climates');
}else{
climatesData.forEach(function(group){
if(inArray(group.name, zones)){
var series=chart.series.push(new am4maps.MapPolygonSeries());
currentSeries.push(series);
series.name=group.name;
series.useGeodata=true;
series.zIndex=group.zIndex;
var includedCountries=[];
group.data.forEach(function(country){
includedCountries.push(country.id);
excludedCountries.push(country.id);
});
series.include=includedCountries;
series.setStateOnChildren=true;
series.calculateVisualCenter=true;
var mapPolygonTemplate=series.mapPolygons.template;
mapPolygonTemplate.fill=am4core.color("#d6d6d6");
mapPolygonTemplate.stroke=am4core.color(fruit_colors[jQuery('.planasa-main input[name="product"]:checked').val()]);
mapPolygonTemplate.strokeWidth=1.5;
mapPolygonTemplate.fillOpacity=1;
mapPolygonTemplate.zIndex=1;
mapPolygonTemplate.nonScalingStroke=true;
var activeState=mapPolygonTemplate.states.create("active");
activeState.properties.fill=am4core.color(fruit_colors[jQuery('.planasa-main input[name="product"]:checked').val()]);
activeState.properties.fillOpacity=1;
mapPolygonTemplate.events.on("hit", function(ev){
selectCountry(ev.target.dataItem.dataContext.id);
});
series.data=JSON.parse(JSON.stringify(group.data));
}});
if(inArray('south_africa', zones)){
var shapeSeries=chart.series.push(new am4maps.MapPolygonSeries());
shapeSeries.data=[{
"title": "España Norte",
"zIndex": 2,
"multiGeoPolygon": africa_polygon
}];
var shapeTemplate=shapeSeries.mapPolygons.template;
shapeTemplate.stroke=am4core.color(fruit_colors[jQuery('.planasa-main input[name="product"]:checked').val()]);
shapeTemplate.fill=am4core.color("#d6d6d6");
shapeTemplate.strokeWidth=1.5;
shapeTemplate.fillOpacity=1;
shapeTemplate.nonScalingStroke=true;
shapeTemplate.events.on("hit", function(ev){
selectCountry_inactive(ev.target.dataItem.dataContext.id);
});
currentSeries.push(shapeSeries);
}
if($('#p_country_val').length > 0){
setTimeout(()=> {selectCountry($('#p_country_val').val())}, 500);
}else if($('#user-country').length > 0){
setTimeout(()=> {selectCountry($('#user-country').val())}, 500);
}}
}
var worldSeries=chart.series.push(new am4maps.MapPolygonSeries());
worldSeries.name="world";
worldSeries.useGeodata=true;
worldSeries.exclude=excludedCountries;
worldSeries.mapPolygons.template.fill=am4core.color("#d6d6d6");
worldSeries.mapPolygons.template.fillOpacity=1;
worldSeries.mapPolygons.template.stroke=am4core.color("#f5f7ff");
worldSeries.mapPolygons.template.strokeOpacity=0.5;
worldSeries.mapPolygons.template.zIndex=0;
worldSeries.hiddenInLegend=true;
worldSeries.mapPolygons.template.nonScalingStroke=true;
var worldTemplate=worldSeries.mapPolygons.template;
worldSeries.setStateOnChildren=true;
worldSeries.calculateVisualCenter=true;
var activeState2=worldTemplate.states.create("active");
activeState2.properties.fill=am4core.color("#aeaeae");
activeState2.properties.fillOpacity=1;
activeState2.properties.zIndex=Number.MAX_VALUE;
worldTemplate.events.on("hit", function(ev){
selectCountry_inactive(ev.target.dataItem.dataContext.id);
});
function selectCountry_inactive(id){
if(currentActive){
currentActive.isActive=false;
}
if(id.includes('ES')){
id="ES";
}
if(id.includes('IT')){
id="IT";
}
if(id.includes('PT')){
id="PT";
}
currentActive=currentSeries[currentSeries.length-1].getPolygonById(id);
if(currentActive==undefined){
currentActive=worldSeries.getPolygonById(id);
}
if(currentActive!=undefined){
currentActive.isActive=true;
$('.planasa-modales').hide();
$('.planasa-modal-boton').show();
if($('.planasa-main').hasClass("first-time")){
$('.planasa-main').removeClass("first-time")
}else{
jQuery('#map-country').val('');
$('.planasa-main').addClass("zones-active attribute-active");
$('.planasa-carousel').hide();
$('.planasa-sin-resultados').show();
}}
}
function selectCountry(id){
zone=(climaticZoneCountries(id)!=false)?climaticZoneCountries(id):id;
active=false;
if(currentActive){
currentActive.isActive=false;
}
currentSeries.forEach(function(serie){
if(serie.getPolygonById(zone)!=undefined){
active=true;
currentActive=serie.getPolygonById(zone);
currentActive.isActive=true;
jQuery('#map-country').val(zone);
if($('#p_country_val').length > 0){
$('#p_country_val').remove();
}else{
jQuery('.planasa-main input[name="attribute"]').prop("checked", false);
}
cp_ajax_search('zone');
}});
if(!active){
selectCountry_inactive(id);
}else{
if($('.planasa-main').hasClass("first-time")){
$('.planasa-main').removeClass("first-time")
}}
}
function mapGoHome(){
chart.goHome();
}
var ajax_url=plugin_ajax_object.ajax_url;
$('.planasa-main input[name="product"]').on('change', function(){
$('.planasa-modal-boton').hide();
if($('#p_country_val').length > 0){
$('#map-country').val($('#p_country_val').val());
}else{
$('#map-country').val('');
$('.planasa-main input[name="attribute"]').prop("checked", false);
}
cp_ajax_search('product');
});
$('.planasa-main input[name="attribute"]').on('change', function(){
if($(this).siblings(':checked').length >=2){
this.checked=false;
}else{
cp_ajax_search('attribute');
}});
$(document).on("click", 'a.planasa-zone-link', function (o){
url=$(this).attr('data-link');
zone=$('#map-country').val();
var form=$('<form action="' + url + '" method="post">' +
'<input type="hidden" name="conf_zone" value="' + zone + '" />' +
'<input type="hidden" name="conf_country" value="' + $('#map-country').val() + '" />' +
'<input type="hidden" name="conf_product" value="' + ($('.planasa-main input[name="product"]:checked').val()!=undefined?$('.planasa-main input[name="product"]:checked').val():'') + '" />' +
'<input type="hidden" name="conf_attr" value="' + $('.planasa-main input[name="attribute"]:checked').map(function(){return $(this).val();}).get() + '" />' +
'</form>');
$('body').append(form);
form.submit();
return false;
});
if($('.planasa-main input[name="product"]:checked').val()!=undefined){
$('.planasa-main .planasa-products').addClass("planasa-active");
cp_ajax_search('product');
}else{
cp_ajax_search();
}
$(document).on("click", '.planasa-active .toogleCollapsible', function (o){
if(window.innerWidth <=1000){
$(this).parent().find('.Collapsible').slideToggle('slow', function(){});
$(this).toggleClass('active-tab');
return false;
}});
$(".modal-close").click(function(){
elm=$(this).parents('.planasa-modales');
elm.hide();
if(elm.hasClass('planasa-modal-boton')){
$('.planasa-main').addClass("zones-active attribute-active");
}});
function cp_ajax_search(r="none"){
$('.planasa-sin-resultados').hide();
$('.planasa-carousel').show();
loading='';
container=$('.planasa-main');
container.removeClass("zones-active attribute-active");
if(r=='product'){
container.find('.planasa-zone').removeClass("planasa-active");
container.find('.planasa-attribute').removeClass("planasa-active");
mapGoHome();
unsetup_map_zones();
}
if(r=="none"){
$('.planasa-main input[name="product"]').prop("checked", false);
if(window.innerWidth <=1000){
setTimeout(()=> {container.find('.planasa-products .toogleCollapsible').trigger('click');}, 1000);
}
container.find('.planasa-products').addClass("planasa-active");
}
list_wrap=container.find('.configurator-carousel');
list_wrap.html('');
if(window.innerWidth <=1000){
for (var i=1; i <=3; i++){
loading+='<div class="planasa-zone-item loading l-'+i+'"></div>';
}}else if(window.innerWidth <=605){
for (var i=1; i <=2; i++){
loading+='<div class="planasa-zone-item loading l-'+i+'"></div>';
}}else{
for (var i=1; i <=6; i++){
loading+='<div class="planasa-zone-item loading l-'+i+'"></div>';
}}
list_wrap.html(loading);
setup_carousel();
product=$('.planasa-main input[name="product"]:checked').val()!=undefined?$('.planasa-main input[name="product"]:checked').val():'';
attribute=$('.planasa-main input[name="attribute"]:checked').map(function(){
return $(this).val();
}).get();
zone=$('#map-country').val();
var data={
'action': 'cp_search',
'product':  product!=undefined?product:'',
'zone': zone!==false?zone:'',
'attribute': attribute!=undefined?attribute:'',
};
if(data.product!=''||data.zone!=''||data.attribute!=''){
$.ajax({
url: ajax_url,
type: 'post',
data: data,
success: function (response){
if(response==0){
container.addClass("zones-active attribute-active");
$('.planasa-carousel').hide();
$('.planasa-sin-resultados').show();
}else{
p=JSON.parse(response);
if(r=='product'){
container.addClass("first-time");
container.find('.planasa-zone').addClass("planasa-active");
if(window.innerWidth <=1000){
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
if($('#user-country').length==0){
container.addClass("attribute-active");
}
setup_map_zones(p.zones);
}
if(r=='zone'){
container.find('.planasa-attribute').addClass("planasa-active");
$('.planasa-modales').hide();
$('.planasa-advise-2').show();
}
if(r=='product'||r=='zone'){
setup_attributes(p.attributes);
}
if(r=='zone'||r=='attribute'){
container.addClass("zones-active attribute-active");
if(window.innerWidth <=1000){
container.find('.planasa-products .Collapsible').hide();
container.find('.planasa-products .toogleCollapsible').removeClass('active-tab');
container.find('.planasa-zone .Collapsible').hide();
container.find('.planasa-zone .toogleCollapsible').removeClass('active-tab');
container.find('.planasa-attribute .toogleCollapsible').trigger('click');
}}
if(r=='none'){
setup_attributes(p.attributes);
}
if(window.innerWidth <=1000){
setTimeout(()=> {
$('html,body').animate({scrollTop: $('body').offset().top}, 'linear');
},500);
}
list_wrap.html(p.products);
setup_carousel();
}}
});
}else{
container.addClass("zones-active attribute-active");
$('.planasa-carousel').hide();
}}
function setup_attributes(attributes){
/*$('.planasa-select-attribute input').attr("disabled", true);
attributes.forEach(function(att){
$('.planasa-select-attribute input#'+att).attr("disabled", false);
});*/
}
function setup_carousel(){
pc=$(".configurator-carousel");
pc.trigger('destroy.owl.carousel').removeClass('owl-loaded');
pc.find('.owl-stage-outer .owl-stage > *').unwrap();
pc.find('.owl-stage-outer > *').unwrap();
pc.find('.owl-item > *').unwrap();
pc.find('.owl-dots').remove();
pc.find('.owl-nav').remove();
if(window.innerWidth > 1000){
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
}}
});