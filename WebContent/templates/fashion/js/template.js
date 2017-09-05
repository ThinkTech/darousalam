var user;
const payment = {};
page.animations = [ 'rotateIn', 'flipInX', 'lightSpeedIn', 'rotateIn',
				'rollIn', 'zoomIn', 'slideInUp', 'bounceInUp', 'pulse',
				'rubberBand', 'shake', 'headshake', 'jackInTheBox',
				'flash', 'swing', 'fadeInUpBig', 'rotateInDownLeft',
				'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
				'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
				'bounceIn', 'bounceInDown', 'bounceInLeft',
				'bounceInRight', 'bounceInUp' ];
page.loadImages = function(div,callback) {
	if(!div.data("loaded")) {
		div.attr("data-loaded","true");
	    $.each($("img",div),function(index,element){
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

const saveOrder = function() {
	const wizard = $("#checkout-wizard");
	const form = $("form",wizard);
	app.post(form.attr("action"),form.serialize(),function(response) {
		$('html,body').animate({scrollTop:0},100,function(){
			$("#cart ul li").remove();
			$(".simpleCart_quantity").html(0);
			$("#cart .total").html(0);
			$("#order-confirmation").fadeIn(100).removeAttr('class').addClass("animated zoomInDown");
		});
	}, function(error) {
		alert("error");
	});
	const top = $("> div",wizard).position().top;
	wizard.fadeOut(100,function(){
		$("form",wizard).easyWizard('goToStep', 1);
	});
	page.wait({top : top+50});
};

page.displayProducts = function() {
	app.get("commerce/products",function(products){
		$("body").css("opacity",1).click(function(){
			$(".product-view").hide();
		});
		page.wait();
		page.render($("#products"),products,function(div){
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
					$("input",details).val("1");
					$(".shop",details).data("name",item).removeAttr("disabled");
					details.addClass("in").show();
				});	
	            $(".w3_hs_bottom a",tabs).click(function(){
	            	const link = $(this);
					const src = link.closest(".hs-wrapper").find("img").attr("src");
					const item = link.closest(".agile_ecommerce_tab_left").find("h5 a").html();
					$(".modal_body_left img",details).attr("src",src);
					$(".modal_body_right h4",details).html(item);
					("input",details).val("1");
					$(".shop",details).data("name",item).removeAttr("disabled");
					details.addClass("in").show();
	            });
	            $(".nav-tabs li:first",tabs).addClass("active");
			});
			$(".tabs:first .nav-tabs li:first a",div).click();
			$('.shop',details).on('click', function() {
				const link = $(this);
				if(!link.attr("disabled")) {
					link.attr("disabled", "disabled");
					const content = link.closest(".modal-content");
					const src = $("#product-details .modal_body_left img").attr("src");
					content.find(".close").click();
					var total = 0;
					const cart = $("#cart");
					const ul = $("ul",cart);
					const li = $('<li><span><span></span> <a title="supprimer" class="trash"><i class="fa fa-trash" aria-hidden="true"></i></a></span> <strong class="price"></strong></li>');
					const number = content.find("input").val();
					const price = 13500;
					const name = link.data("name");
			        const span = li.find('span span').html(number+" "+name).attr("title","prix : "+price);
			        span.attr("data-src",src);
			        span.on("touchstart",function(){
			        	const div = $(".product-view");
			        	div.css("top",cart.position().top+50);
			        	if(div.css("position")=="fixed") {
			        		div.css("left",10);
			        	}else {
			        	    div.css("left",cart.position().left-cart.width()-50);
			        	}
			        	$("img",div).attr("src",$(this).data("src"));
			        	div.show();
			        	return false;
			        });
			        span.mouseover(function(){
			        	const div = $(".product-view");
			        	div.css("top",cart.position().top+50);
			        	if(div.css("position")=="fixed") {
			        		div.css("left",10);
			        	}else {
			        	    div.css("left",cart.position().left-cart.width()-50);
			        	}
			        	$("img",div).attr("src",$(this).data("src"));
			        	div.show();
			        });
			        span.mouseout(function(){
			        	$(".product-view").hide();
			        });
			        const amount = parseInt(number) * parseInt(price);
			        li.find('.price').attr("amount",amount).html(amount.toLocaleString("fr-FR"));
			        li.find(".trash").click(function(){
			        	const message = "voulez-vous supprimer cet article?";
			    		confirm(message, function() {
			    			li.remove();
			    			$(".simpleCart_quantity").html(ul.find("li").length);
			    			total = 0;
			    			$.each($("li .price",ul),function(index,element){
			                	total += parseInt($(element).attr("amount"));
			                });
			                $(".total",cart).html(total.toLocaleString("fr-FR"));
			    		});
			    	});
			        ul.append(li);
			        ul.animate({scrollTop: ul.prop("scrollHeight")}, 500);
			        $(".simpleCart_quantity").html(ul.find("li").length);
			        $.each($("li .price",ul),function(index,element){
			        	total += parseInt($(element).attr("amount"));
			        });
			        $(".total",cart).html(total.toLocaleString("fr-FR"));
				}
			});
			page.loadImages($("#checkout-wizard"));
			page.release();
		});
	});
};

$(document).ready(function(){
	
	$('.wmuSlider').each(function(index,element){
		if($(element).is(":visible")){
			$(element).wmuSlider();
		}
	});
	
	page.displayProducts();
	
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
			  "templates/fashion/js/social.js",
			  "https://www.google.com/recaptcha/api.js",function(){
				$("#login").show();
				page.release();
			});
		}else {
			$("#login").show();
		}
	});
	
	$(".tab_item-1").click(function(){
		$("#login .modal_body_right").removeClass("social-login");
	});
	
	$(".tab_item-2").click(function(){
		$("#login .modal_body_right").addClass("social-login");
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
			payment.done = false;
			const height = $(document).height() + $("#footer").height();
		    const wizard = $("#checkout-wizard").css("height",height);
		    const top = $(".cart").offset().top;
		    page.wait({top : top});
		    head.load("http://cdn.gigya.com/js/gigya.js?apiKey=3_C6n4iWMDYu9SrO2iZbTkUfUglxEXaOEb7FtwnvnkRCw1u3ZgvDbSfUFK_LvlaXfP",
					"templates/fashion/js/social.js",
					"https://www.google.com/recaptcha/api.js","templates/fashion/js/visa.js","https://sandbox-assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js",
			  function() {
		    	$("> div",wizard).css("top",top);
		    	page.release();
		    	wizard.show();
		    	$('html,body').animate({scrollTop:top},1);
		    });
		}
		return false;
	});
	$.each($("#product-details,#login"),function(index,element){
		$(".close",element).click(function(){
			$(element).removeClass("in").hide();
		});
	});
	const form = $(".checkout-wizard-steps > form");
	form.easyWizard({
	    prevButton: "Pr\u0117c\u0117dent",
	    nextButton: "Suivant",
	    submitButtonText: "Terminer",
	    before: function(wizardObj,currentStep,nextStep) {
	    	//if(!user) {
	    		//alert("vous devez vous connecter");
	    		//return false;
	    	//}
	    },
	    after: function(wizardObj,prevStep,currentStep) {
	    	const div = $(".shopping-payment",currentStep);
	    	if(div.length) {
	    		$(".payment",currentStep).hide();
	    		var input = prevStep.find("input[name='payment']:checked");
	    		var val = input.val();
	    		if(val=="online") {
	    			input = prevStep.find("select[name='method']");
	    			val = input.val();
	    			payment.done = false;
	    		}else {
	    			payment.done = true;
	    		}
	    		$("."+val+"-payment",currentStep).show();
	    	}
	    },
	    beforeSubmit: function() {
	    	if(payment.done) {
		    	saveOrder();
	    	}else {
	    		const radio = form.find("input[name='payment'][value='online']");
	    		const checked = radio.is(":checked");
	    		if(checked) {
	    		  const select = form.find("select[name='method']")
	    		  const val = select.val();
	    		  if(val == "visa" || val == "mastercard" || val == "express" || val == "discover") {
	    			  $("."+val+"-payment .v-button").click(); 
	    		  }else {
	    			  saveOrder();
	    		  }    		  
	    		}else {
	    			saveOrder();
	    		}
	    	}
	    	return false;
	    }
	});
    form.find("select[name='method']").click(function(){
		form.find("input[name='payment'][value='online']").prop("checked",true);
	});
    form.find("section:nth-child(2) label").click(function(){
		$(this).prev().prop("checked",true);
	});
	$("#checkout-wizard").hide();	
	$(".wizard-close").click(function(){
		  const wizard = $("#checkout-wizard").fadeOut(100);
	});	
	$("#confirmation-close").click(function(){
    	$(".w3l_logo h1").removeAttr('class').addClass("animated "+ page.animations[Math.floor(Math.random() * page.animations.length)]);
	    $("#order-confirmation").removeAttr('class').addClass("animated zoomOutUp").fadeOut(1000);		
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
	contactForm.submit(function(event){
		event.preventDefault();
		var valid = true;
        $('input,textarea',contactForm).each(function(index,element) {
        	const val = $(element).val();
			if(val.trim() == '') {
				const message = $(this).next().attr("data-info");
				alert(message,function(){
					$(element).focus();
				});
			    return valid = false;
			}
        });
        if(!valid) return valid;
		$.ajax({
			url: contactForm.attr('action'),
			type : 'POST',
			data : contactForm.serialize()
		}).done(function(data){
			$("input[type=text],input[type=email],textarea",contactForm).val("");
		});
	});
	$("#contact-form img").click(function(){
		$(this).parent().fadeOut();
	});
	$(window).scroll(function(){
		  const top = $(this).scrollTop();
		  $.each($(".tabs"),function(index,element){
			const tabs = $(element);
			if(top >= tabs.position().top-400) {
				const div = $('.tab-content .tab-pane:eq(0)',tabs);
				page.loadImages(div,function(){
					div.addClass("active in");
				});
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
		  if(top > div.offset().top || div.offset().top > $(this).scrollTop()) {
				if(!div.is(":hidden")) {
				  const top = $(this).scrollTop();
				  div.css("top",top+5);
				}
		  }
		  div = $("#checkout-wizard");
		  if(top > div.offset().top || div.offset().top > $(this).scrollTop()) {
				if(!div.is(":hidden")) {
				  const top = $(this).scrollTop();
				  $("> div",div).css("top",top+5);
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
});