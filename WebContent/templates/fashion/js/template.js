var user;
const payment = {};
const items = [ 'rotateIn', 'flipInX', 'lightSpeedIn', 'rotateIn',
				'rollIn', 'zoomIn', 'slideInUp', 'bounceInUp', 'pulse',
				'rubberBand', 'shake', 'headshake', 'jackInTheBox',
				'flash', 'swing', 'fadeInUpBig', 'rotateInDownLeft',
				'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
				'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
				'bounceIn', 'bounceInDown', 'bounceInLeft',
				'bounceInRight', 'bounceInUp' ];


const saveOrder = function() {
	const wizard = $("#checkout-wizard").fadeOut(100,function(){
		$("form",wizard).easyWizard('goToStep', 1);
		$("#cart ul li").remove();
		$(".simpleCart_quantity").html(0);
		$("#cart .total").html(0);
        $('html,body').css("overflow-y","auto");
	});
	const form = $("form",wizard);
	$('html,body').animate({scrollTop:0},100,function(){
		$("#order-confirmation").fadeIn(100).removeAttr('class').addClass("animated zoomInDown");
	});
	/*app.post(form.attr("action"),form.serialize(),function(response) {
		$('html,body').animate({scrollTop:0},100,function(){
			$("#order-confirmation").fadeIn(100).removeAttr('class').addClass("animated zoomInDown");
		});
	}, function(error) {
		alert("error");
	});*/
};

jQuery(document).ready(function($) {
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},600);
	});
});
$(document).ready(function () {
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default',            
		width: 'auto', 
		fit: true  
	});
});

$(document).ready(function() {
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
	$('.example1').wmuSlider();	
	$("body").css("opacity","1");
});


$(document).ready(function(){

	$(".w3l_logo h1").addClass("animated "+ items[Math.floor(Math.random() * items.length)]);
	$(".banner a h4").addClass("animated zoomIn");
	$(".banner h6").addClass("animated zoomIn");
	
	/* ---- Countdown timer ---- */

	$('#counterTop').countdown({
		timestamp : (new Date()).getTime() + 11*24*60*60*1000
	});
	
	$('#counter').countdown({
		timestamp : (new Date()).getTime() + 11*24*60*60*1000
	});


	/* ---- Animations ---- */
	
	$('.item_show').click(function(){
		$(this).parent().parent().parent().find("li a").click();
	});	
	
	$(".cart a,#cart .close").click(function(){
		$("#cart").toggle();
	});
		
	$(".checkout").click(function(){
		const cart = $("#cart"); 
		const count = $("ul li",cart).length;
		const message = "votre panier est vide";
		if(!count) {
			cart.hide();
			alert(message);
		}else {
			payment.done = false;
		    const wizard = $("#checkout-wizard").css("height",$(document).height());
		    const top = cart.offset().top;
		    head.load("templates/fashion/js/visa.js","https://sandbox-assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js",
			  function() {
		    	 $('html,body').animate({scrollTop:top},100,function(){
				    	$("> div",wizard).css("top",top+20);
				    	 wizard.show();
				 });
				 $('html,body').css("overflow-y","hidden");
			  });
		}
		return false;
	});
	
	$(".wizard-close").click(function(){
		const wizard = $("#checkout-wizard").fadeOut(100);
		$('html,body').css("overflow-y","auto");
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
	
	$('.shop' ).on( 'click', function() {
		$(this).closest(".modal-content").find(".close").click();
		var total = 0;
		const cart = $("#cart");
		const ul = $("ul",cart);
		const li = $('<li><span><span></span> <a title="supprimer" class="trash"><i class="fa fa-trash" aria-hidden="true"></i></a></span> <strong class="price"></strong></li>');
		var number = 1;
		const price = 13500;
		const name = $(this).data("name");
        li.find('span span').html(number+" "+name).attr("title","prix : "+price);
        const amount = number * parseInt(price);
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
        $(".simpleCart_quantity").html(ul.find("li").length);
        $.each($("li .price",ul),function(index,element){
        	total += parseInt($(element).attr("amount"));
        });
        $(".total",cart).html(total.toLocaleString("fr-FR"));
        $("#confirmation-close").click(function(){
        	$(".w3l_logo h1").removeAttr('class').addClass("animated "+ items[Math.floor(Math.random() * items.length)]);
		    $("#order-confirmation").removeAttr('class').addClass("animated zoomOutUp").fadeOut(1000);		
		 });
	});
	
	head.load("http://cdn.gigya.com/js/gigya.js?apiKey=3_C6n4iWMDYu9SrO2iZbTkUfUglxEXaOEb7FtwnvnkRCw1u3ZgvDbSfUFK_LvlaXfP",
			"templates/fashion/js/social.js",
			"https://www.google.com/recaptcha/api.js",
			"https://platform-api.sharethis.com/js/sharethis.js#property=590f03b42c145800128d5487&product=inline-share-buttons",
	function() { 
	});
    
});