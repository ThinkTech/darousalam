var user;

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
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
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

	/* ---- Countdown timer ---- */

	$('#counterTop').countdown({
		timestamp : (new Date()).getTime() + 11*24*60*60*1000
	});
	
	$('#counter').countdown({
		timestamp : (new Date()).getTime() + 11*24*60*60*1000
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);
	
	$('.item_show').click(function(){
		$(this).parent().parent().parent().find("li a").click();
	});	
	
	$(".cart a").click(function(){
		$("#cart").toggle();
	});	
	
	$(".checkout").click(function(){
		const count = $("#cart ul li").length;
		const message = "votre panier est vide";
		if(!count) {
			$("#cart").hide();
			alert(message);
		}else {
			/*payment.done = false;
		    const wizard = $("#checkout-wizard").css("height",$(document).height());
		    const top = $("#shopping").offset().top;
		    $('html,body').animate({scrollTop:top},100,function(){
		    	$("> div",wizard).css("top",top+20);
		    	 wizard.show();
		    });
		    $('body').css("overflow-y","hidden");*/
		}
		return false;
	  });
	
	head.load("http://cdn.gigya.com/js/gigya.js?apiKey=3_C6n4iWMDYu9SrO2iZbTkUfUglxEXaOEb7FtwnvnkRCw1u3ZgvDbSfUFK_LvlaXfP",
			"templates/fashion/js/social.js",
			"https://platform-api.sharethis.com/js/sharethis.js#property=590f03b42c145800128d5487&product=inline-share-buttons",
	function() { 
	});
    
});