const wizard = $("#checkout-wizard").css("opacity","0").show();
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
                      page.wait({top : currentStep.offset().top-50});
                      head.load("templates/fashion/js/visa.js","https://sandbox-assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js",function(){
                    	  page.release(); 
                      });
      	    		}else if(val == "paypal") {
                      page.wait({top : currentStep.offset().top-50});
                      head.load("https://www.paypalobjects.com/api/checkout.js","templates/fashion/js/paypal.js",function(){
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
$(".wizard-close",wizard).click(function(){
	wizard.fadeOut(100);
});
wizard.hide().css("opacity","1");