
const payment = {};
page.wizard = {};
page.wizard.initSocialLogin = function(){
	gigya.socialize.showLoginUI({
		version : 2,
		width : "100%",
		height : "70px",
		enabledProviders : 'facebook,twitter,googleplus,linkedin,yahoo,instagram',
		showTermsLink : false // remove 'Terms' link
		,
		showWhatsThis : true // Pop-up a hint describing the Login Plugin, when
								// the user rolls over the Gigya link.
		,
		containerID : 'wizardLogin' // The component will embed itself inside the
									// loginDiv Div
		,
		cid : '',
		onLogin : onLoginHandler
	});
	// onLogin Event handler
	function onLoginHandler(eventObj) {
		// alert(eventObj.context.str + ' ' + eventObj.eventName + ' to ' +
		// eventObj.provider
		// + '!\n' + eventObj.provider + ' user ID: ' +
		// eventObj.user.identities[eventObj.provider].providerUID);
		// verify the signature ...
		verifyTheSignature(eventObj.UID, eventObj.timestamp, eventObj.signature);
		// Check whether the user is new by searching if eventObj.UID exists in your
		// database
		var newUser = true; // lets assume the user is new

		if (newUser) {
			// 1. Register user
			// 2. Store new user in DB
			// 3. link site account to social network identity
			// 3.1 first construct the linkAccounts parameters
			var dateStr = Math.round(new Date().getTime() / 1000.0); // Current
																		// time in
																		// Unix
																		// format
			// (i.e. the number of seconds since Jan. 1st 1970)

			var siteUID = 'uTtCGqDTEtcZMGL08w'; // siteUID should be taken from the
												// new user record
			// you have stored in your DB in the previous step
			var yourSig = createSignature(siteUID, dateStr);
			var params = {
				siteUID : siteUID,
				timestamp : dateStr,
				cid : '',
				signature : yourSig
			};

			// 3.1 call linkAccounts method:
			gigya.socialize.notifyRegistration(params);
		}

		gigya.socialize.getUserInfo({
			callback : renderUI
		});
	}
	// Note: the actual signature calculation implementation should be on server
	// side
	function createSignature(UID, timestamp) {
		encodedUID = encodeURIComponent(UID); // encode the UID parameter before
												// sending it to the server.
		// On server side use decodeURIComponent() function to decode an encoded UID
		return '';
	}

	// Note: the actual signature calculation implementation should be on server
	// side
	function verifyTheSignature(UID, timestamp, signature) {
		encodedUID = encodeURIComponent(UID); // encode the UID parameter before
												// sending it to the server.
		// On server side use decodeURIComponent() function to decode an encoded UID
	}

	// Logout from Gigya platform. This method is activated when "Logout" button is
	// clicked


	function renderUI(res) {
		const wizard = $("#checkout-wizard");
		if (res.user != null && res.user.isConnected) {
			$("#profile #name",wizard).html(res.user.nickname);
			if (res.user.thumbnailURL.length > 0)
				$("#profile #photo",wizard).attr("src",res.user.thumbnailURL);
			else
				$("#profile #photo",wizard).attr("src","http://cdn.gigya.com/site/images/bsAPI/Placeholder.gif");
			user = res.user;
			$("#profile",wizard).show();
			$("#socialLogin",wizard).hide();
			user = res.user;
		}else {
			$("#profile",wizard).hide();
			$("#socialLogin",wizard).show();
		}
	}
};
page.wizard.logout = function(){
	user = null;
	const wizard = $("#checkout-wizard");
	$("#profile",wizard).hide();
	$("#socialLogin",wizard).show();
	gigya.socialize.logout({
		forceProvidersLogout : true
	}); 
};
page.wizard.init = function(){
	const wizard = $("#checkout-wizard").css("opacity","0").show();
	page.loadImages(wizard);	
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
		    			$(".shipping-address input[value='shop']",currentStep).removeAttr("disabled");
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
		    			$(".shipping-address input[value='home']",currentStep).click();
		    			$(".shipping-address input[value='shop']",currentStep).attr("disabled","disabled");
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
	form.find("section label").click(function(){
		const radio = $(this).prev();
		if(!radio.is(":disabled")) radio.click();
	});	
	$(".loginForm input[type=button]").click(function(event){
		if(page.wizard.validateForm($(".loginForm",wizard))){
		}
	});
	$(".loginForm a:nth-child(1)",wizard).click(function(){
		$(".wizardForm",wizard).hide();
		$(".registerForm",wizard).show();
	});
	$(".loginForm a:nth-child(2)",wizard).click(function(){
		$(".wizardForm",wizard).hide();
		$(".recoveryForm",wizard).show();
	});
	
	$(".recoveryForm input[type=button]:nth-child(2),.registerForm input[type=button]:nth-child(2)",wizard).click(function(){
		$(".wizardForm",wizard).hide();
		$(".loginForm",wizard).show();
	});
	
	$(".registerForm input[type=button]:nth-child(1)").click(function(event){
		if(page.wizard.validateForm($(".registerForm",wizard))){
		}
	});
	
	$(".recoveryForm input[type=button]:nth-child(1)",wizard).click(function(){
		if(page.wizard.validateForm($(".recoveryForm",wizard))){
		}
	});

	$(".shipping-address a",wizard).click(function(){
		$(".shipping-address .details",wizard).hide();
		$(".shipping-address .register",wizard).show();
		$(".shopping-payment").addClass("payment-hide");
	});
	
	$(".shipping-address input[type=radio]",wizard).click(function(){
		$(".shipping-address .details > div",wizard).hide();
		$(".shipping-address .details ."+$(this).val()+"-address",wizard).show();
	});

	$(".shipping-address input[type=button]:nth-child(1)",wizard).click(function(){
		if(page.wizard.validateForm($(".shipping-address",wizard))){
			$(".shipping-address input[type=button]:nth-child(2)",wizard).click();	
        }
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

	$("#confirmation-close").click(function(){
		$("#order-confirmation").removeAttr('class').addClass("animated zoomOutUp").fadeOut(1000);		
	});
	$(".close",wizard).click(function(){
		wizard.fadeOut(100);
	});
	const height = $(document).height();
	wizard.css("height",height);
	wizard.hide().css("opacity","1");
	$("body").click(function(){
		$(".help-info").hide();
	});
};
page.wizard.validateForm = function(form){
	var valid = true;
	$('input[type=text],input[type=email],input[type=password]',form).each(function(index,element) {
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
page.wizard.show = function(cart,top){
	page.wizard.top = top;
	page.wait({top : top});
	head.load("//cdns.gigya.com/js/gigya.js?apiKey=3_C6n4iWMDYu9SrO2iZbTkUfUglxEXaOEb7FtwnvnkRCw1u3ZgvDbSfUFK_LvlaXfP&lang=fr-fr",
			"modules/commerce/js/jquery.easyWizard.js","modules/commerce/css/wizard.css",
	  function() {
		if(!page.wizard.loaded){
			page.wizard.init();
			page.wizard.initSocialLogin();
			page.wizard.loaded = true;
		}
		payment.done = false;
		const wizard = $("#checkout-wizard");
		const order = $(".total",cart).text().replace(/\s/g,'');
		$("#order-amount",wizard).html( $(".total",cart).html());
		const delivery = 2000;
		$("#delivery-amount",wizard).html(delivery.toLocaleString("fr-FR"));
		const total = parseInt(order) + delivery;
		$("#shopping-amount",wizard).html(total.toLocaleString("fr-FR"));
		wizard.show();
		page.release();
    });
};
page.wizard.submit = function(){
	const wizard = $("#checkout-wizard");
	const form = $("form",wizard);
	app.post(form.attr("action"),form.serialize(),function(response) {
		$('html,body').animate({scrollTop:0},100,function(){
			page.cart = [];
			localStorage.setItem("cart", JSON.stringify(page.cart));
			$("#cart ul li").remove();
			$(".cart_items").html(0);
			$("#cart .total").html(0);
			$("#order-confirmation").fadeIn(100).removeAttr('class').addClass("animated zoomInDown");
			$("html,body").css("overflow-y","auto");
		});
	}, function(error) {
		alert("error");
	});
	page.wait({top : page.wizard.top});
	wizard.fadeOut(100,function(){
		$("form",wizard).easyWizard('goToStep', 1);
	});
};
app.saveOrder = function() {
	page.wizard.submit();
};