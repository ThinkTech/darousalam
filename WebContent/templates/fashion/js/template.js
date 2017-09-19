var user;
page.animations = [ 'rotateIn', 'flipInX', 'lightSpeedIn', 'rotateIn',
				'rollIn', 'zoomIn', 'slideInUp', 'pulse',
				'rubberBand', 'shake', 'headshake', 'jackInTheBox',
				'flash', 'swing', 'rotateInDownLeft',
				'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
				'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
				'bounceIn', 'bounceInDown', 'bounceInLeft',
				'bounceInRight'];
page.loadImages = function(div,callback) {
	if(!div.data("loaded")) {
		div.attr("data-loaded","true");
	    $.each($("img[data-src]",div),function(index,element){
	        $(element).addClass("loading");
			const src = $(element).data("src");
			if(src) {
				$(element).attr("src",src);
				$(element).removeAttr("data-src");
				$(element).on("load",function(){
					$(element).removeClass("loading");
				}).each(function() {
					  if(this.complete) $(this).trigger("load");
				});
			}
	    });
	    if(callback) callback();
	  }
};

page.displayLogin = function(){
	const login = $("#login");
	$(".w3l_login a").click(function(event){
		if(!$(this).data("loaded")) {
			$(this).attr("data-loaded","true");
			page.wait();
			$('#horizontalTab').easyResponsiveTabs({
				type: 'default',            
				width: 'auto', 
				fit: true  
			});
			head.load("http://cdn.gigya.com/js/gigya.js?apiKey=3_C6n4iWMDYu9SrO2iZbTkUfUglxEXaOEb7FtwnvnkRCw1u3ZgvDbSfUFK_LvlaXfP",
			  "templates/fashion/js/social.js",function(){
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
		page.wait();
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
	$(".cart a").click(function(){
		const cart = $("#cart");
		cart.css("top",-50);
		cart.toggle();
	});
	
	$("#cart .close").click(function(){
		$("#cart").slideUp(100);
	});
	
	$(".checkout").click(function(){
		const cart = $("#cart"); 
		const count = $("ul li",cart).length;
		const message = "votre panier est vide";
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
			const index = parent.index();
			$(".tab-content > div",tabs).removeClass("active in");
			const div = $(".tab-content .tab-pane:eq("+index+")",tabs).addClass("fade active in");
			page.loadImages(div);
		});
		$('.item_show',tabs).click(function(){
			const link = $(this).parent().parent().parent().find("li a");
			const src = link.closest(".hs-wrapper").find("img").attr("src");
			const item = link.closest(".agile_ecommerce_tab_left").find("h5 a").html();
			$(".modal_body_left img",details).attr("src",src);
			$(".modal_body_right h4",details).html(item);
			$("input",details).val(1);
			$(".shop",details).data("name",item).removeAttr("disabled");
			details.addClass("in").show();
		});	
        $(".w3_hs_bottom a",tabs).click(function(){
        	const link = $(this);
			const src = link.closest(".hs-wrapper").find("img").attr("src");
			const item = link.closest(".agile_ecommerce_tab_left").find("h5 a").html();
			$(".modal_body_left img",details).attr("src",src);
			$(".modal_body_right h4",details).html(item);
			$("input",details).val(1);
			$(".shop",details).data("name",item).removeAttr("disabled");
			details.addClass("in").show();
        });
        $(".nav-tabs li:first",tabs).addClass("active");
        
        $(".genders a",div).click(function(){
			const target = "#"+$(this).data("href");
			$('html,body').animate({scrollTop:$(target).offset().top},600);
		});
		$('.shop',details).on('click', function() {
			const link = $(this);
			if(!link.attr("disabled")){
				link.attr("disabled", "disabled");
				const content = link.closest(".modal-content");
				const src = $("#product-details .modal_body_left img").attr("src");
				content.find(".close").click();
				const item = {};
				item.quantity = content.find("input").val();
				item.price = 13500;
				item.name = link.data("name");
		        item.image = src;
		        page.addCartItem(item);
		        page.cart.push(item);
		        localStorage.setItem("cart", JSON.stringify(page.cart));
			}
		});
	});
};

page.addCartItem = function(item){ 
	const cart = $("#cart");
	const ul = $("ul",cart);
	const li = $('<li><span><span></span> <a title="voir" class="eye"><i class="fa fa-eye" aria-hidden="true"></i></a> <a title="supprimer" class="trash"><i class="fa fa-trash" aria-hidden="true"></i></a></span> <strong class="price"></strong></li>');
	li.attr("data-src",item.image);
	const span = li.find('span span').html(item.quantity+" "+item.name).attr("title","prix : "+item.price);
    span.on("touchstart",function(){
    	page.showProduct(li.data("src"));
    	return false;
    });
    span.mouseover(function(){
    	page.showProduct(li.data("src"));
    });
    span.mouseout(function(){
    	$(".product-view").hide();
    });
    li.find(".eye").click(function(){
    	page.showProduct(li.data("src"));
    	return false;
	});
    var total = 0;
    const amount = parseInt(item.quantity) * parseInt(item.price);
    li.data("amount",amount)
    li.find('.price').html(amount.toLocaleString("fr-FR"));
    li.find(".trash").click(function(){
    	const message = "voulez-vous supprimer cet article?";
		confirm(message, function() {
			const index = li.index();
			li.remove();
			$(".simpleCart_quantity").html(ul.find("li").length);
			total = 0;
			$.each($("li",ul),function(index,element){
            	total += parseInt($(element).data("amount"));
            });
            $(".total",cart).html(total.toLocaleString("fr-FR"));
            page.cart.splice(index,1);
	        localStorage.setItem("cart", JSON.stringify(page.cart));
		});
	});
    ul.append(li);
    ul.animate({scrollTop: ul.prop("scrollHeight")}, 500);
    $(".simpleCart_quantity").html(ul.find("li").length);
    $.each($("li",ul),function(index,element){
    	total += parseInt($(element).data("amount"));
    });
    $(".total",cart).html(total.toLocaleString("fr-FR"));
};

page.showProduct = function(src){
	const cart = $("#cart");
	const div = $(".product-view");
	div.css("top",cart.position().top+50);
	if(div.css("position")=="fixed") {
		div.css("left",10);
	}else {
	    div.css("left",cart.position().left-cart.width()-50);
	}
	const img = $("img",div).attr("src",src).addClass("loading");
	img.on("load",function(){
		img.removeClass("loading");
	}).each(function() {
		  if(this.complete) $(this).trigger("load");
	});
	div.show();
};

page.display = function(){
	$('.wmuSlider').each(function(index,element){
		if($(element).is(":visible")){
			$(element).wmuSlider();
		}
	});
	$("body").click(function(){
		$(".product-view").hide();
	});	
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},600);
	});
	$(".w3l_logo h1").addClass("animated "+ page.animations[Math.floor(Math.random() * page.animations.length)]);
	$(".banner a h4").addClass("animated zoomIn");
	$(".banner h6").addClass("animated zoomIn");
    const counterTop = $('#counterTop');
	if(counterTop.is(":visible")){
		counterTop.countdown({
			timestamp : (new Date()).getTime() + 11*24*60*60*1000
		});	
	}
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
			app.post(form.attr("action"),form.serialize(),function(response) {
				if(response.status==0){
					alert("aucun article trouv\u0117",function(){ 
						input.focus(); 
					});
				}else{
					$("#search_box").click();
					// show articles
				}
			}, function(error) {
				alert("error");
			});	
		}
		return false;
	});
	$(".contact").click(function(event){
		const div = $("#contact-form");
		if(div.is(":hidden")) {
		  var top = $(this).offset().top+60;
		  top = top < window.innerHeight ? top : top-300;
		  div.css("top",top);
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
		event.preventDefault();
		var valid = true;
		const form = $(this);
        $('input,textarea',form).each(function(index,element) {
        	const val = $(element).val();
			if(val.trim() == '') {
				const message = "entrer votre " + $(this).attr("placeholder");
				alert(message,function(){
					$(element).focus();
				});
			    return valid = false;
			}
        });
        if(!valid) return valid;
        app.post(form.attr('action'),form.serialize(),function(response){
			if(form.attr('action')=="users/login"){
				location.href = response.url;
			}
			$("input[type=text],input[type=email],textarea",form).val("");
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
					div.addClass("active in");
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
		  if(top >= div.position().top-400) {
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
				if(!div.is(":hidden")) {
				  div.css("top",top+5);
				}
		  }
	});
	var div = $("#top-brands");
	if(div.is(":visible")){
		$("#flexiselDemo1").flexisel({
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
	}
	page.displayLogin();
	page.displayProducts();
	page.displayCart();	
};

$(document).ready(function(){
     page.display();
});