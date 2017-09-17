const payment = {};
page.wizard = {};
page.wizard.init = function(){
	const wizard = $("#checkout-wizard").css("opacity","0").show();
	page.loadImages(wizard);	
	const height = $(document).height() + $("#footer").height();
	wizard.css("top","0").css("height",height);
	const form = $(".checkout-wizard-steps > form",wizard);
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
	                    if(val == "visa" || val == "mastercard" || val == "express" || val == "discover") {
	                      page.wait({top : currentStep.offset().top});
	                      head.load("modules/commerce/js/visa.js","https://sandbox-assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js",function(){
	                    	  page.release(); 
	                      });
	      	    		}else if(val == "paypal") {
	                      page.wait({top : currentStep.offset().top});
	                      head.load("https://www.paypalobjects.com/api/checkout.js","modules/commerce/js/paypal.js",function(){
	                      	  page.release(); 
	                      });
	        	    	} 	
		    		}else {
		    			payment.done = true;
		    		}
		    		$("."+val+"-payment",div).show();
		    	}
		    },
		    beforeSubmit: function() {
		    	if(payment.done) {
		    		confirm("\u00E9tes-vous sur de vouloir faire cet achat?",function(){
		    			app.saveOrder();
		    		})
		    	}else {
		    		const radio = form.find("input[name='payment'][value='online']");
		    		const checked = radio.is(":checked");
		    		if(checked) {
		    		  const select = form.find("select[name='method']")
		    		  const val = select.val();
		    		  if(val == "visa" || val == "mastercard" || val == "express" || val == "discover") {
		    			  alert("vous devez effectuer le paiement",function(){
		    				  $("."+val+"-payment .v-button",form).trigger("click");  
		    			  });
		    		  }else{
		    			  alert("vous devez effectuer le paiement");
		    		  }    		  
		    		}else {
		    			app.saveOrder();
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
	$(".close",wizard).click(function(){
		wizard.fadeOut(100);
	});
	$(".loginForm a:nth-child(1)",wizard).click(function(){
		$(".wizardForm",wizard).hide();
		$(".registerForm",wizard).show();
	});
	$(".loginForm a:nth-child(2)",wizard).click(function(){
		$(".wizardForm",wizard).hide();
		$(".recoveryForm",wizard).show();
	});

	$(".shipping-address a",wizard).click(function(){
		$(".shipping-address .details",wizard).hide();
		$(".shipping-address .register",wizard).show();
		$(".shopping-payment").addClass("payment-hide");
	});

	$(".shipping-address input[type=button]:nth-child(2)",wizard).click(function(){
		$(".shipping-address .details",wizard).show();
		$(".shipping-address .register",wizard).hide();
		$(".shopping-payment").removeClass("payment-hide");
	});

	$(".shopping-payment .help",wizard).click(function(){
		const div = $(this).parent().parent();
		div.find("ol").addClass("help-info").show();
		div.find("h6").addClass("help-info").show();
		return false;
	});

	$(".recoveryForm input[type=button]:nth-child(2),.registerForm input[type=button]:nth-child(2)",wizard).click(function(){
		$(".wizardForm",wizard).hide();
		$(".loginForm",wizard).show();
	});
	$("#confirmation-close").click(function(){
		$(".w3l_logo h1").removeAttr('class').addClass("animated "+ page.animations[Math.floor(Math.random() * page.animations.length)]);
	    $("#order-confirmation").removeAttr('class').addClass("animated zoomOutUp").fadeOut(1000);		
	});
	wizard.hide().css("opacity","1");
	$("body").click(function(){
		$(".help-info").hide();
	});	
	$(window).scroll(function(){
		const div = $("#checkout-wizard");
		if(top > div.offset().top || div.offset().top > $(this).scrollTop()) {
			if(!div.is(":hidden")) {
			  const top = $(this).scrollTop();
			  $("> div",div).css("top",top+5);
			}
		}
	});
};
page.wizard.show = function(cart,top){
	payment.done = false;
	const wizard = $("#checkout-wizard");
	$("> div",wizard).css("top",top);
	const order = $(".total",cart).text().replace(/\s/g,'');
	$("#order-amount",wizard).html( $(".total",cart).html());
	const delivery = 2000;
	$("#delivery-amount",wizard).html(delivery.toLocaleString("fr-FR"));
	const total = parseInt(order) + delivery;
	$("#shopping-amount",wizard).html(total.toLocaleString("fr-FR"));
	wizard.show();
	$('html,body').animate({scrollTop:top},1);
};
page.wizard.submit = function(){
	const wizard = $("#checkout-wizard");
	const form = $("form",wizard);
	app.post(form.attr("action"),form.serialize(),function(response) {
		$('html,body').animate({scrollTop:0},100,function(){
			page.cart = [];
			localStorage.setItem("cart", JSON.stringify(page.cart));
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
app.saveOrder = function() {
	page.wizard.submit();
};
page.wizard.init();