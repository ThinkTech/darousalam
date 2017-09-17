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
	containerID : 'toploginDiv' // The component will embed itself inside the
								// loginDiv Div
	,
	cid : '',
	onLogin : function(event){
		app.post("users/login",null,function(response){
			$("#login .close").click();
			location.href = response.url;
        });
	}
});
