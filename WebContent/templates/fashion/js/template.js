var user;
page.loadImages = function(div,callback) {
	$.each($("img.error",div),function(index,element){
    	if(!$(element).is(":hidden")){
    		$(element).addClass("loading");
			const src = $(element).data("src");
			if(src) {
				$(element).attr("src",src);
				$(element).on("load",function(){
					$(this).removeAttr("data-src").removeClass("error loading");
				}).on("error",function(){
					$(this).removeClass("loading");
				}).each(function() {
					  if(this.complete) $(this).trigger("load");
				});
			}
    	}
    });
	if(!div.data("loaded")) {
		div.data("loaded","true");
	    $.each($("img[data-src]",div),function(index,element){
	    	if(!$(element).is(":hidden")){
	    		$(element).addClass("loading");
				const src = $(element).data("src");
				if(src) {
					$(element).attr("src",src);
					$(element).on("load",function(){
						$(this).removeAttr("data-src").removeClass("loading");
					}).on("error",function(){
						$(this).addClass("error").removeClass("loading");
					}).each(function() {
						  if(this.complete) $(this).trigger("load");
					});
				}
	    	}
	    });
	    if(callback) callback();
	}
};

page.displayLogin = function(){
	const login = $("#login");
	$(".w3l_login a").click(function(event){
		if(!$(this).data("loaded")) {
			$(this).data("loaded","true");
			page.wait();
			head.load("//cdns.gigya.com/js/gigya.js?apiKey=3_C6n4iWMDYu9SrO2iZbTkUfUglxEXaOEb7FtwnvnkRCw1u3ZgvDbSfUFK_LvlaXfP&lang=fr-fr",
			  "templates/fashion/js/easyResponsiveTabs.js","templates/fashion/js/social.js",function(){
				$('#horizontalTab').easyResponsiveTabs({
					type: 'default',            
					width: 'auto', 
					fit: true  
				});
				login.show();
				page.release();
			});
		}else {
			login.show();
		}
	});
	
	$(".tab_item-1").click(function(){
		$(".modal_body_right",login).removeClass("social-login");
	});
	
	$(".tab_item-2").click(function(){
		$(".modal_body_right",login).addClass("social-login");
		const top = $("#login").offset().top;
		page.wait({top : top+50});
		head.load("https://www.google.com/recaptcha/api.js",function(){
			page.release();
		});
	});
	
	$(".loginForm a",login).click(function(){
		$(".loginForm",login).hide();
		$(".recoveryForm",login).show();
	});
	
	$(".recoveryForm input[type=button]",login).click(function(){
		$(".loginForm",login).show();
		$(".recoveryForm",login).hide();
	});
};


page.displayCart = function() {
	$(".cart").click(function(){
		const div = $("#cart").css("top",-50).show();
		if(div.css("min-width")=="300px"){
			$("html,body").css("overflow-y","hidden");
		}
	});
	
	$("#cart .close").click(function(){
		$("#cart").slideUp(100);
		$("html,body").css("overflow-y","auto");
		return false;
	});
	
	$(".checkout").click(function(){
		const cart = $("#cart"); 
		const count = $("ul li",cart).length;
		const message = "votre panier est vide";
		$("html,body").css("overflow-y","auto");
		if(!count) {
			cart.hide();
			alert(message);

		}else {
			cart.hide();
			head.load("modules/commerce/js/wizard.js",
			  function() {
		   	   page.wizard.show(cart,$(".cart").offset().top);
			});
		}
		return false;
	});
	
	page.cart = JSON.parse(localStorage.getItem("cart"));
	page.cart = page.cart ? page.cart : [];
	for(var i=0;i<page.cart.length;i++) page.addCartItem(page.cart[i]);
	
};

page.navigate = function(div){
	const length = $(".ecommerce_tabs .ecommerce_tab_left:visible",div).length;
	const total = $(".ecommerce_tabs .ecommerce_tab_left",div).length;
	if(total<=length){
		$(".counter,.ecommerce_tabs_nav_left,.ecommerce_tabs_nav_right,.ecommerce_tabs_nav_first,.ecommerce_tabs_nav_last",div).hide();
	}
	$.each($(".cart_item span",div),function(index,element){
		const val = parseInt($(this).html());
		$(this).html(val.toLocaleString("fr-FR"));
	});
	var index = length;
	$(".ecommerce_tabs_nav_left",div).click(function(){
		if(!$(this).hasClass("disabled")){
			const elements = $(".ecommerce_tabs .ecommerce_tab_left",div);
			elements.hide();
			index = index - length;
			const nodes = elements.slice(index-length,index).show();	
			$.each(nodes,function(index,element){
				page.loadImages($(element));
			});
			if(index<=length) {
				index = length;
				$(this).addClass("disabled");
				$(".ecommerce_tabs_nav_first",div).addClass("disabled");
			}
			$(".counter",div).html(index+"/"+total);
			$(".ecommerce_tabs_nav_right,.ecommerce_tabs_nav_last",div).removeClass("disabled");
		}
	});
	$(".ecommerce_tabs_nav_first",div).click(function(){
		if(!$(this).hasClass("disabled")){
			index = length*2;
			$(".ecommerce_tabs_nav_left",div).trigger("click");
		}
	});
	$(".ecommerce_tabs_nav_right",div).click(function(){
		if(!$(this).hasClass("disabled")){
			const elements = $(".ecommerce_tabs .ecommerce_tab_left",div);
			elements.hide();
			const nodes = elements.slice(index,index + length).show();
			$.each(nodes,function(index,element){
				page.loadImages($(element));
			});
			index = index + length;
			if(index>=elements.length) {
				$(this).addClass("disabled");
				$(".ecommerce_tabs_nav_last",div).addClass("disabled");
			}
			$(".counter",div).html(index+"/"+total);
			$(".ecommerce_tabs_nav_left,.ecommerce_tabs_nav_first",div).removeClass("disabled");
		}
	});
	$(".ecommerce_tabs_nav_last",div).click(function(){
		if(!$(this).hasClass("disabled")){
			index = total - length;
			$(".ecommerce_tabs_nav_right",div).trigger("click");
		}
	});
	$(".counter",div).html(index+"/"+total);
	$(".ecommerce_tabs_nav_first",div).html(index);
	$(".ecommerce_tabs_nav_last",div).html(total);
};

page.displayProducts = function() {
	const div = $("#products");
	const details = $("#product-details");
	$.each($(".tabs",div),function(index,element){
		const tabs = $(element);
		const nav = $(".nav-tabs",tabs);
		$("a",nav).click(function(){
			$("li",nav).removeClass("active");
			const parent = $(this).parent();
			parent.addClass("active");
			$(".tab-content > div",tabs).removeClass("active in");
			const div = $(".tab-content .tab-pane:eq("+parent.index()+")",tabs).addClass("active in");
			page.loadImages(div,function(){
				page.navigate(div);
			});
			
		});
		$('.item_show',tabs).click(function(event){
			page.showItem(details,$(this).parent().parent().parent().find("li a"));
		});	
        $(".w3_hs_bottom a:nth-child(1)",tabs).click(function(event){
        	page.showItem(details,$(this));
        });
        $(".w3_hs_bottom a:nth-child(2)",tabs).click(function(event){
        	const link = $(this);
        	const item = {};
			item.name = link.closest(".ecommerce_tab_left").find("h5 a").html();
			item.image = link.closest(".hs-wrapper").find("img").attr("src");
			page.shareItem(item,{left:event.pageX,top:event.pageY});
			return false;
        });
        $(".genders a",div).click(function(){
			const target = "#"+$(this).data("href");
			$('html,body').animate({scrollTop:$(target).offset().top},600);
		});
	});
	$('.shop',details).on('click', function() {
		const link = $(this);
		if(!link.attr("disabled")){
			link.attr("disabled", "disabled");
			const content = link.closest(".modal-content");
			content.find(".close").click();
			const item = details.data("item");
			item.quantity = content.find("input").val();
			page.addCartItem(item);
	        page.cart.push(item);
	        localStorage.setItem("cart", JSON.stringify(page.cart));
		}
	});
	$("input",details).change(function(){
		const total = $(this).val() * details.data("item").price;
		$(".item_price",details).html(total.toLocaleString("fr-FR"));
	});
	$("input",details).click(function(){
		const total = $(this).val() * details.data("item").price;
		$(".item_price",details).html(total.toLocaleString("fr-FR"));
	});
	$(".sizes li",details).click(function(){
		$(".sizes li",details).removeClass("active");
		$(this).addClass("active");
	});
	
	$(".actions a:nth-child(1)",details).click(function(){
		details.find(".info").hide();
		details.find(".modal_body_left").addClass("small").show();
		return false;
	});
	
	$(".actions a:nth-child(2)",details).click(function(){
		details.find(".description").addClass("info").show();
		return false;
	});
	
	$(".actions a:nth-child(3)",details).click(function(event){
		page.shareItem(details.data("item"),{left:event.pageX-50,top:event.pageY});
		return false;
	});
	
	$(".thumbnails img",details).click(function(){
		return false;
	});
	
	details.click(function(){
		details.find(".info,.small").hide();
	});
	
	$("body").click(function(){
		$("#shareDiv").css("visibility","hidden");
	});
	
	$(".nav-tabs li.active:first a",div).trigger("click");
	
	var x1,x2,y = 0;
	
	$("img,.w3_hs_bottom",div).on('touchstart', function(event) {
		x1 = x2 = event.touches[0].pageX;
		y = event.touches[0].pageY;
	});
	
	$("img,.w3_hs_bottom",div).on('touchend', function(event) {
		const tab = $(this).closest(".tab-pane");
	    const touch = event.changedTouches[event.changedTouches.length-1];
	    x2 = touch.pageX;
	    if(y>touch.pageY-30 || y<touch.pageY-30) {
	      if(x2>x1+10){
	    	$(".ecommerce_tabs_nav_right",tab).click();
	      }else if(x2<x1-10){
	    	$(".ecommerce_tabs_nav_left",tab).click();
	      }
	    }
	});
};

page.showItem = function(details,link){
	$("input",details).val(1);
	const item = {};
	item.name = link.closest(".ecommerce_tab_left").find("h5 a").html();
	item.price = link.closest(".ecommerce_tab_left").find(".item_price").text();
	item.price = parseInt(item.price.replace(/\s/g,''));
	item.image = link.closest(".hs-wrapper").find("img").attr("src");
	$(".modal_body_left img",details).attr("src",item.image);
	$(".modal_body_right h4",details).html(item.name);
	$(".item_price",details).html(item.price);
	$(".shop",details).removeAttr("disabled");
	details.data("item",item).addClass("in").show();
};

page.shareItem = function(item,position){
	const div = $("#shareDiv");
	div.css("top",position.top);
	div.css("left",position.left-160);
	div.css("visibility","visible");
	page.wait({top:position.top-95});
	head.load("//cdns.gigya.com/js/gigya.js?apiKey=3_C6n4iWMDYu9SrO2iZbTkUfUglxEXaOEb7FtwnvnkRCw1u3ZgvDbSfUFK_LvlaXfP&lang=fr-fr"
			  ,function(){
				  item.description = "article en solde. Achetez vite";
				  const act = new gigya.socialize.UserAction();
				  act.setTitle(item.name);
				  const href = encodeURI(location.href+"/"+"?name="+item.name+"&image="+item.image+"&description="+item.description);
				  act.setLinkBack(href);
				  act.addMediaItem({ type: 'image', src: location.href+"/"+item.image, href: href });
				  const params = { 
				  	containerID: 'shareDiv',
				  	shareButtons: [
				    { 
						provider: 'Share',
						iconImgUp: 'https://cdns.gigya.com/gs/i/sharebar/icons/share3.png'
					}],
				  	userAction: act,
				  	iconsOnly : true,
				  	noButtonBorders : true,
				  	onLoad : function(){
				  		$("#shareDiv .gig-button").click();
				  		 page.release();
				  	}
				  }
				  gigya.socialize.showShareBarUI(params); 
			});
};

page.addCartItem = function(item){ 
	var total = 0;
	item.amount = parseInt(item.quantity) * item.price;
	const cart = $("#cart");
	const ul = $("ul",cart);
	const li = $('<li><span><span></span> <a title="voir" class="eye"><i class="icon-eye" aria-hidden="true"></i></a> <a title="supprimer" class="trash"><i class="icon-trash" aria-hidden="true"></i></a></span> <strong class="price"></strong></li>');
	li.data("item",item);
	const span = li.find('span span').html(item.quantity+" "+item.name).attr("title","prix : "+item.price);
    span.on("touchstart",function(){
    	page.showCartItem(li);
    	return false;
    });
    span.mouseover(function(){
    	page.showCartItem(li);
    });
    span.mouseout(function(){
    	$(".product-view").hide();
    });
    li.find(".eye").click(function(){
    	page.showCartItem(li);
    	return false;
	});
    li.find('.price').html(item.amount.toLocaleString("fr-FR"));
    li.find(".trash").click(function(){
    	const message = "voulez-vous supprimer cet article?";
		confirm(message, function() {
			const index = li.index();
			li.remove();
			$(".cart_items").html(ul.find("li").length);
			total = 0;
			$.each($("li",ul),function(index,element){
            	total += parseInt($(element).data("item").amount);
            });
            $(".total",cart).html(total.toLocaleString("fr-FR"));
            page.cart.splice(index,1);
	        localStorage.setItem("cart", JSON.stringify(page.cart));
		});
	});
    ul.append(li);
    ul.animate({scrollTop: ul.prop("scrollHeight")}, 500);
    $(".cart_items").html(ul.find("li").length);
    $.each($("li",ul),function(index,element){
    	total += parseInt($(element).data("item").amount);
    });
    $(".total",cart).html(total.toLocaleString("fr-FR"));
};

page.showCartItem = function(li){
	const cart = $("#cart");
	const div = $(".product-view");
	div.css("top",cart.position().top+50);
	if(div.css("position")=="fixed") {
		div.css("left",10);
	}else {
	    div.css("left",cart.position().left-cart.width()-50);
	}
	const item = li.data("item");
	$("p:nth-child(3) span",div).html(item.price.toLocaleString("fr-FR"));
	$("p:nth-child(4) span",div).html(item.quantity);
	$("p:nth-child(5) span",div).html(item.amount.toLocaleString("fr-FR"));
	const img = $("img",div).attr("src",item.image).addClass("loading");
	img.on("load",function(){
		img.removeClass("loading");
	}).each(function() {
		  if(this.complete) $(this).trigger("load");
	});
	div.show();
};

page.validateForm = function(form){
	var valid = true;
	$('input[type=text],input[type=email],input[type=password],textarea',form).each(function(index,element) {
    	const val = $(element).val();
		if(val.trim() == '') {
			const message = "entrer votre " + $(this).attr("placeholder");
			alert(message,function(){
				$(element).focus();
			});
		    return valid = false;
		}
    });
    return valid;
};

page.registerServiceWorker = function(){
	navigator.serviceWorker.register('sw.js');
};

page.displayElements = function(){
	const slider = $('.wmuSlider');
	if(slider.is(":visible")){
		head.load("templates/fashion/js/bundle.js",function(){
			slider.wmuSlider();
			$('#counterTop').countdown({timestamp : (new Date()).getTime() + 11*24*60*60*1000});
			$("#flexisel").flexisel({
				visibleItems: 4,
				animationSpeed: 1000,
				autoPlay: true,
				autoPlaySpeed: 3000,    		
				pauseOnHover: true,
				enableResponsiveBreakpoints: true,
				responsiveBreakpoints: { 
					portrait: { 
						changePoint:480,
						visibleItems: 1
					}, 
					landscape: { 
						changePoint:640,
						visibleItems:2
					},
					tablet: { 
						changePoint:768,
						visibleItems: 3
					}
				}
		   });	
	   });
	}
	$("body").click(function(){$(".product-view").hide();});	
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},600);
	});
	$.each($("#product-details,#login"),function(index,element){
		$(".close",element).click(function(){
			$(element).removeClass("in").hide();
		});
	});
	$(".search form").submit(function(){
		const form = $(this);
		const input = $("input[type=text]",form);
		const val = input.val();
		if(val.trim()==''){
			alert("entrer votre recherche",function(){
				input.focus();
			});
		}else{
			$.ajax({
				  type: "POST",
				  url: form.attr("action"),
				  data: form.serialize(),
				  success:function(response) {
					if(response.status==0){
						alert("aucun article trouv\u0117",function(){ 
							input.focus(); 
						});
					}else{
				    	$("#search_box").click();
						// show articles
					}
				  },
				  dataType: "json"
			});
		}
		return false;
	});
	$(".contact").click(function(event){
		const div = $("#contact-form");
		if(div.is(":hidden")) {
		  var top = $(this).offset().top+60;
		  top = top < window.innerHeight ? top : top-300;
		  if(div.css("position")!="fixed")div.css("top",top);
		  div.show();
		  $("html, body").animate({ scrollTop: div.position().top }, 500);
		  $("input:first",div).focus();
		}else {
			div.hide();
		}
	});
    const contactForm = $("#contact-form > form");
	$("#contact-form .close").click(function(){
		$(this).parent().fadeOut();
	});
	$("#contact-form > form, #login form, .newsletter form").submit(function(event){
		const form = $(this);
		if(page.validateForm(form)) {
			$.ajax({
				  type: "POST",
				  url: form.attr("action"),
				  data: form.serialize(),
				  success: function(response) {
					if(form.attr('action')=="users/login"){
						location.href = response.url;
					}
					$("input[type=text],input[type=email],textarea",form).val("");
				  },
				  dataType: "json"
			});
		}
		return false;
	});
	$(".header .social a:nth-child(1)").click(function(){
		$("#about").addClass("toggle").toggle(1,function(){
			const div = $(this);
			if(div.is(":hidden")){
				$("html,body").css("overflow-y","auto");
			}else {
				$("html,body").css("overflow-y","hidden");
			}
		});
	});
	$(window).scroll(function(){
		  const top = $(this).scrollTop();
		  $.each($(".tabs"),function(index,element){
			const tabs = $(element);
			if(tabs.length){
			 if(top >= tabs.position().top-400) {
				const div = $('.tab-content .tab-pane:eq(0)',tabs);
				page.loadImages(div,function(){
					page.navigate(div);
				});
			 }
			}
		  });
		  var div = $("#deal");
		  if(top >= div.position().top-400) {
			if(div.is(":visible")) {
			  page.loadImages(div,function(){
				$('#counter').countdown({
					timestamp : (new Date()).getTime() + 11*24*60*60*1000
				});
			  });  
		    }
		  }
		  div = $("#top-brands");
		  if(top >= div.position().top-800) {
			if(div.is(":visible")) {
				page.loadImages(div); 
			}
		  }
		  div = $("#footer");
		  if(top >= div.position().top-400) {
			if(div.is(":visible")) {
				page.loadImages(div,function(){
					head.load("https://platform-api.sharethis.com/js/sharethis.js#property=590f03b42c145800128d5487&product=inline-share-buttons");
				}); 
			}
		  }
		  div = $("#contact-form");
		  if(top > div.offset().top || div.offset().top > top) {
			   if(!div.is(":hidden") && div.css("position")!="fixed") {
				  div.css("top",top+5);
			   }
		  }
	});
};

page.display = function(){
	page.displayElements();
	page.displayLogin();
	page.displayProducts();
	page.displayCart();
	if('serviceWorker' in navigator) page.registerServiceWorker();	
	const elements = "#cart a.checkout,.w3l_login,.search,.w3_hs_bottom li a:last-of-type,.actions a:last-of-type,.newsletter";
	window.addEventListener("offline",function(){
		$(elements).hide();
		$('#contact-form input[type=submit]').attr("disabled","disabled");
		$('.offline').show();
	});
	window.addEventListener("online",function(){
		$(elements).show();
		$('#contact-form input[type=submit]').removeAttr("disabled");
		$('.offline').hide();
	});
	if(!navigator.onLine) {
		$(elements).hide();
		$('#contact-form input[type=submit]').attr("disabled","disabled");
		$('.offline').show();
	}
};

app.ready(function(){
	page.display();	
});