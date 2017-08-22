gigya.socialize.showLoginUI({
	height : 100,
	width : 330,
	enabledProviders : 'facebook,twitter,googleplus,linkedin,yahoo,instagram',
	showTermsLink : false // remove 'Terms' link
	,
	showWhatsThis : true // Pop-up a hint describing the Login Plugin, when
							// the user rolls over the Gigya link.
	,
	containerID : 'loginDiv' // The component will embed itself inside the
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
		document.getElementById("name").innerHTML = res.user.nickname;
		if (res.user.thumbnailURL.length > 0)
			document.getElementById("photo").src = res.user.thumbnailURL;
		else
			document.getElementById("photo").src = "http://cdn.gigya.com/site/images/bsAPI/Placeholder.gif";
		$("#profile").show();
		$("#socialLogin").hide();
		user = res.user;
	} else {
		$("#profile").hide();
		$("#socialLogin").show();
	}
}

// Logout from Gigya platform. This method is activated when "Logout" button is
// clicked
function logoutFromGS() {
	gigya.socialize.logout({
		forceProvidersLogout : true
	}); // logout from Gigya platform
}

$(document).ready(function() {
	gigya.socialize.getUserInfo({
		callback : renderUI
	});
});