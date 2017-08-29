var user;
const payment = {};
const animations = [ 'rotateIn', 'flipInX', 'lightSpeedIn', 'rotateIn',
				'rollIn', 'zoomIn', 'slideInUp', 'bounceInUp', 'pulse',
				'rubberBand', 'shake', 'headshake', 'jackInTheBox',
				'flash', 'swing', 'fadeInUpBig', 'rotateInDownLeft',
				'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
				'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
				'bounceIn', 'bounceInDown', 'bounceInLeft',
				'bounceInRight', 'bounceInUp' ];

const loadImages = function(div,callback) {
	if(!div.data("loaded")) {
		div.attr("data-loaded","true");
	    $.each($("img",div),function(index,element){
	        $(element).addClass("loading");
			const src = $(element).data("src");
			if(src) {
				$(element).attr("src",src);
				$(element).removeAttr("data-src");
				$(element).load(function(){
					$(element).removeClass("loading");
				}).each(function() {
					  if(this.complete) $(this).load();
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
			$("#order-confirmation").fadeIn(100).removeAttr('class').addClass("animated zoomInDown");
		});
	}, function(error) {
		alert("error");
	});
	wizard.fadeOut(100,function(){
		$("form",wizard).easyWizard('goToStep', 1);
		$("#cart ul li").remove();
		$(".simpleCart_quantity").html(0);
		$("#cart .total").html(0);
        $('html,body').css("overflow-y","auto");
	});
	const top = $("#cart").position().top;
	page.wait({top : top});
};

$(document).ready(function(){

	$("body").css("opacity",1);
	
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
				page.release();
			});
		}
	});
	
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},600);
	});
	
	$(".w3l_logo h1").addClass("animated "+ animations[Math.floor(Math.random() * animations.length)]);
	$(".banner a h4").addClass("animated zoomIn");
	$(".banner h6").addClass("animated zoomIn");
	
	$('#counterTop').countdown({
		timestamp : (new Date()).getTime() + 11*24*60*60*1000
	});

	
	$(".cart a").click(function(){
		$("#cart").toggle();
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
		    const wizard = $("#checkout-wizard").css("height",$(document).height());
		    const top = cart.offset().top;
		    page.wait({top : top +50});
		    head.load("http://cdn.gigya.com/js/gigya.js?apiKey=3_C6n4iWMDYu9SrO2iZbTkUfUglxEXaOEb7FtwnvnkRCw1u3ZgvDbSfUFK_LvlaXfP",
					"templates/fashion/js/social.js",
					"https://www.google.com/recaptcha/api.js","templates/fashion/js/visa.js","https://sandbox-assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js",
			  function() {
		    	 $('html,body').animate({scrollTop:top},100,function(){
				    	$("> div",wizard).css("top",top+20);
				    	page.release();
				    	wizard.show();
				 });
				 $('html,body').css("overflow-y","hidden");
		    });
		}
		return false;
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
	    beforeSubmit: function(wizardObj) {
	    	if(payment.done) {
		    	saveOrder();
	    	}else {
	    		const radio = form.find("input[name='payment'][value='online']");
	    		const checked = radio.is(":checked");
	    		if(checked) {
	    		  const select = form.find("select[name='method']")
	    		  const val = select.val();
	    		  if(val == "visa" || val == "mastercard" || val == "express" || val == "discover") {
	    			  alert("vous devez effectuer le paiement de votre commande",function(){
			    			$(".v-button").click();
			    	  });  
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
	$("#checkout-wizard").hide();	
	$(".wizard-close").click(function(){
		  const wizard = $("#checkout-wizard").fadeOut(100);
			$('html,body').css("overflow-y","auto");
	});	
	$("#confirmation-close").click(function(){
    	$(".w3l_logo h1").removeAttr('class').addClass("animated "+ animations[Math.floor(Math.random() * animations.length)]);
	    $("#order-confirmation").removeAttr('class').addClass("animated zoomOutUp").fadeOut(1000);		
	});
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
	$(window).scroll(function(){
		  div = $("#home-tab-women");
		  if($(this).scrollTop() >= div.position().top-400) {
			loadImages(div,function(){
				$(".nav-tabs li a").click(function(){
					const link = $(this);
					const id = link.attr("href");
					loadImages($(id));
				});	
				$('.item_show').click(function(){
					const link = $(this).parent().parent().parent().find("li a");
					const target = link.data("target");
					const src = link.closest(".hs-wrapper").find("img").attr("src");
					const item = link.closest(".agile_ecommerce_tab_left").find("h5 a").html();
					$(".modal_body_left img",$(target)).attr("src",src);
					$(".modal_body_right h4",$(target)).html(item);
					$("input",$(target)).val("1");
					link.click();
				});	
	            $(".w3_hs_bottom a").click(function(){
	            	const link = $(this);
	            	const target = link.data("target");
					const src = link.closest(".hs-wrapper").find("img").attr("src");
					const item = link.closest(".agile_ecommerce_tab_left").find("h5 a").html();
					$(".modal_body_left img",$(target)).attr("src",src);
					$(".modal_body_right h4",$(target)).html(item);
					$("input",$(target)).val("1");
					$(".shop").data("name",item);
	            });
				$('.shop' ).on( 'click', function() {
					const content = $(this).closest(".modal-content"); 
					content.find(".close").click();
					var total = 0;
					const cart = $("#cart");
					const ul = $("ul",cart);
					const li = $('<li><span><span></span> <a title="supprimer" class="trash"><i class="fa fa-trash" aria-hidden="true"></i></a></span> <strong class="price"></strong></li>');
					const number = content.find("input").val();
					const price = 13500;
					const name = $(this).data("name");
			        li.find('span span').html(number+" "+name).attr("title","prix : "+price);
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
			        ul.scrollTop(li.position().top);
			        $(".simpleCart_quantity").html(ul.find("li").length);
			        $.each($("li .price",ul),function(index,element){
			        	total += parseInt($(element).attr("amount"));
			        });
			        $(".total",cart).html(total.toLocaleString("fr-FR"));
				});
			});  
		  }
		  
		  div = $("#home-tab-men");
		  if($(this).scrollTop() >= div.position().top-400) {
			loadImages(div);
		  }
		  
		  div = $("#deal");
		  if($(this).scrollTop() >= div.position().top-400) {
			loadImages(div,function(){
				$('.wmuSlider').wmuSlider();
				$('#counter').countdown({
					timestamp : (new Date()).getTime() + 11*24*60*60*1000
				});
			});  
		  }
		  div = $("#new-products");
		  if($(this).scrollTop() >= div.position().top-400) {
			loadImages(div);  
		  }
		  div = $("#top-brands");
		  if($(this).scrollTop() >= div.position().top-400) {
			loadImages(div,function(){
				head.load("https://platform-api.sharethis.com/js/sharethis.js#property=590f03b42c145800128d5487&product=inline-share-buttons");
			});  
		  }
	});
});