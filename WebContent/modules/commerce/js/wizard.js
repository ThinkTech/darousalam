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
		cid : ''
	});
	gigya.socialize.addEventHandlers({
		onLogin : onLoginHandler,
		onLogout : onLogoutHandler,
		onConnectionAdded : renderUI,
		onConnectionRemoved : renderUI
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
	function logoutFromGS() {
		gigya.socialize.logout(); // logout from Gigya platform
	}

	// onLogout Event handler
	function onLogoutHandler(eventObj) {
		user = null;
		$("#profile").hide();
		$("#socialLogin").show();
	}

	function renderUI(res) {
		if (res.user != null && res.user.isConnected) {
			$("#name").html(res.user.nickname);
			if (res.user.thumbnailURL.length > 0)
				$("#photo").attr("src",res.user.thumbnailURL);
			else
				$("#photo").attr("src","http://cdn.gigya.com/site/images/bsAPI/Placeholder.gif");
			user = res.user;
		}
	}

	// Logout from Gigya platform. This method is activated when "Logout" button is
	// clicked
	function logoutFromGS() {
		gigya.socialize.logout({
			forceProvidersLogout : true
		}); // logout from Gigya platform
	}

	gigya.socialize.getUserInfo({
		callback : renderUI
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
	const height = $(document).height() + $("#footer").height();
	wizard.css("top","0").css("height",height);
	wizard.hide().css("opacity","1");
	$("body").click(function(){
		$(".help-info").hide();
	});
	$(window).scroll(function(){
		const div = $("#checkout-wizard");
		const top = $(this).scrollTop();
		if(top > div.offset().top || div.offset().top > top) {
			if(!div.is(":hidden")) {
			  $("> div",div).css("top",top+5);
			}
		}
	});
};
page.wizard.show = function(cart,top){
	page.wait({top : top});
	head.load("http://cdn.gigya.com/js/gigya.js?apiKey=3_C6n4iWMDYu9SrO2iZbTkUfUglxEXaOEb7FtwnvnkRCw1u3ZgvDbSfUFK_LvlaXfP",
			"modules/commerce/js/social.js","modules/commerce/css/wizard.css",
	  function() {
		if(!page.wizard.loaded){
			page.wizard.init();
			page.wizard.initSocialLogin();
			page.wizard.loaded = true;
		}
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
		page.release();
		$('html,body').animate({scrollTop:top},1);
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