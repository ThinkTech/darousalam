<div id="checkout-wizard" style="display:none">
		<div class="checkout-wizard-content">
			<h4 class="wizard-title">
				<i class="fa fa-shopping-cart" aria-hidden="true"></i>Confirmer l'achat
			</h4>
			<span title="fermer l'assistant" class="close">X</span>
			<div class="checkout-wizard-steps">
				<form action="commerce/saveOrder" method="post">
					<section class="step" data-step-title="Identification">
						<fieldset>
							<div id="socialLogin">
								<p>Identifier vous rapidement avec les réseaux sociaux ou
									avec votre compte client.</p>
								<div class="gigya">
								  <div id="loginDiv"></div>
								</div>
								<div id="or">OU</div>
								<div class="register">
									<a title="créér un compte"><i class="fa fa-user"
										aria-hidden="true"></i>créér un compte</a> <input name="email"
										placeholder="Email" type="text" required> <input
										name="password" placeholder="Mot de Passe" type="password"
										required>
									<div class="sign-up">
										<input type="button" value="Connexion" title="connexion">
										<a title="mot de passe oublié"><i class="fa fa-key"
											aria-hidden="true"></i>mot de passe oublié?</a>
									</div>
								</div>
							</div>
							<div id="profile">
								<p>
									Bienvenue <span id="name"></span>
								</p>
								<div>
									<img id="photo" src="" width="65px" height="65px" /> <input
										type="button" title="déconnexion" value="Déconnexion"
										onclick="logoutFromGS()" />
								</div>
								<h5>Cliquer sur le bouton déconnexion pour changer
									d'utilisateur.</h5>
							</div>
						</fieldset>

					</section>
					<section class="step" data-step-title="Paiement">
						<fieldset>
							<p>Choisisser le mode de paiement le plus adéquat pour régler
								votre commande.</p>
							<div>
								<span> <input name="payment" value="online" type="radio">
									<label>Payer en ligne</label> <select name="method">
										<option value="visa">Visa</option>
										<option value="mastercard">MasterCard</option>
										<option value="express">American Express</option>
										<option value="discover">Discover</option>
										<option value="paypal">PayPal</option>
										<option value="tigo">Tigo Cash</option>
										<option value="orange">Orange Money</option>
								</select>
								</span> <span><input name="payment" value="delivery"
									type="radio" checked><label>Payer à la
										livraison</label></span>
							</div>
						</fieldset>

					</section>
					<section class="step" data-step-title="Confirmation">
						<fieldset>
							<div class="shipping-address">
								<h4>
									<i class="fa fa-motorcycle" aria-hidden="true"></i><b>Adresse
										de livraison</b>
								</h4>
								<h5>
									<span><i class="fa fa-map-marker" aria-hidden="true"></i>Nord
										Foire, VDN</span> <span>derrière la Mosquée</span>
								</h5>
								<h5>
									<span><i class="fa fa-map-marker" aria-hidden="true"></i>Région
										: </span>Dakar
								</h5>
								<h5>
									<span><i class="fa fa-map-marker" aria-hidden="true"></i>Zone
										: </span>Fann
								</h5>
								<h5>
									<span><i class="fa fa-mobile" aria-hidden="true"></i>Téléphone
										: </span>775593264
								</h5>
								<h5>
									<span><i class="fa fa-envelope" aria-hidden="true"></i>email
										: </span>lamine.ba@thinktech.sn
								</h5>
								<h5>
									<a>[modifier]</a>
								</h5>
							</div>
							<div class="shopping-payment">
								<div class="payment visa-payment">
									<h4>
										<i class="fa fa-cc-visa" aria-hidden="true"></i><b>Paiement
											Visa</b>
									</h4>
									<ol>
										<li>Cliquer sur terminer ou sur le bouton Visa Checkout.</li>
										<li>Effectuer le paiement de votre commande.</li>
										<li>Réception SMS de la confirmation de paiement.</li>
									</ol>
									<img alt="Visa Checkout" class="v-button img-responsive" role="button"
										data-delay="true" data-src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png"/>
								</div>
								<div class="payment mastercard-payment">
									<h4>
										<i class="fa fa-cc-mastercard" aria-hidden="true"></i><b>Paiement
											MasterCard</b>
									</h4>
									<ol>
										<li>Cliquer sur le bouton Visa Checkout.</li>
										<li>Effectuer le paiement de votre commande.</li>
										<li>Réception SMS de la confirmation de paiement.</li>
									</ol>
									<img alt="Visa Checkout" class="v-button img-responsive" role="button"
										data-delay="true" data-src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" />
								</div>
								<div class="payment express-payment">
									<h4>
										<i class="fa fa-credit-card" aria-hidden="true"></i><b>Paiement
											American Express</b>
									</h4>
									<ol>
										<li>Cliquer sur le bouton Visa Checkout.</li>
										<li>Effectuer le paiement de votre commande.</li>
										<li>Réception SMS de la confirmation de paiement.</li>
									</ol>
									<img alt="Visa Checkout" class="v-button img-responsive" role="button"
										data-delay="true" data-src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" />
								</div>
								<div class="payment discover-payment">
									<h4>
										<i class="fa fa-cc-discover" aria-hidden="true"></i><b>Paiement
											Discover</b>
									</h4>
									<ol>
										<li>Cliquer sur le bouton Visa Checkout.</li>
										<li>Effectuer le paiement de votre commande.</li>
										<li>Réception SMS de la confirmation de paiement.</li>
									</ol>
									<img alt="Visa Checkout" class="v-button img-responsive" role="button"
										data-delay="true" data-src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" />
								</div>
								<div class="payment orange-payment">
									<h4>
										<i class="fa fa-mobile" aria-hidden="true"></i><b>Paiement
											Orange Money</b>
									</h4>
									<ol>
										<li>Composer le #144#391#.</li>
										<li>Choisisser l'option 1-Génération d'un code.</li>
										<li>Entrer votre code secret Orange Money.</li>
										<li>Conserver le code reçu par SMS pour régler votre
											commande.</li>
									</ol>
								</div>
								<div class="payment tigo-payment">
									<h4>
										<i class="fa fa-mobile" aria-hidden="true"></i><b>Paiement
											Tigo Cash</b>
									</h4>
									<ol>
										<li>Entrer votre numéro de téléphone Tigo.</li>
										<li>Réception SMS de la requête de paiement.</li>
										<li>Taper #150#, puis entrer le code PIN Tigo Cash.</li>
										<li>Réception SMS de la confirmation de paiement.</li>
									</ol>
								</div>
								<div class="payment paypal-payment">
									<h4>
										<i class="fa fa-paypal" aria-hidden="true"></i><b>Paiement
											PayPal</b>
									</h4>
									<ol>
										<li>Cliquer sur le bouton PayPal Express Checkout.</li>
										<li>Effectuer le paiement de votre commande.</li>
										<li>Réception SMS de la confirmation de paiement.</li>
									</ol>
									<div id="paypal-button"></div>
									
								</div>
								<div class="payment delivery-payment">
									<h4>
										<i class="fa fa-money" aria-hidden="true"></i><b>Paiement
											à la livraison</b>
									</h4>
									<h6>Payer en toute sécurité avec le paiement à la
										livraison! Ce mode de paiement vous permet de régler le
										montant de votre commande en espèces, plus les frais de
										livraison.</h6>
								</div>
							</div>
								<div class="shopping-amount">
									<span><span>Commande : </span><span><b>30 000</b></span></span> 
									<span><span>Frais de livraison : </span><span><b>1 500</b></span></span> 
									<span><span>Total : </span><span><b>31 500</b></span></span>
								</div>
						</fieldset>
					</section>
				</form>
			</div>
		</div>
</div>
<div id="order-confirmation" style="display:none">
	   <div>
	     <h1><i class="fa fa-shopping-cart" aria-hidden="true"></i>Confirmation de l'achat</h1>
	     <p><i class="fa fa-info-circle" aria-hidden="true"></i> Merci pour votre commande et celle-ci est en cours de traitement. Vous pouvez vous
	     connecter à votre compte pour suivre son évolution ou pour consulter l'historique de vos commandes. 
	     </p>
	     <div>
	        <a title="mon compte"><i class="fa fa-user" aria-hidden="true"></i>Mon Compte</a>
	        <a id="confirmation-close" title="fermer"><i class="fa fa-close" aria-hidden="true"></i>Fermer</a>
	     </div>
	   </div>
</div>