<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
<base href="${path}"/>
<title>Darou Salam Fashion</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<meta name="keywords" content="Habillements, Jeans, Fashion" />
<link href="https://fonts.googleapis.com/css?family=Exo|Open+Sans" rel="stylesheet" type="text/css" media="all" />
<link href="templates/fashion/css/template.css" rel="stylesheet" type="text/css" media="all" />
<link rel="shortcut icon" href="templates/fashion/images/banner2.jpg"  sizes="32x32"/> 
<meta property="og:type" content="website"/>
 <meta property="og:url" content="${baseUrl}"/>
<meta property="og:title" content="Darou Salam Fashion"/>
<meta property="og:description" content="Cosmétiques, Habillement pour femmes, hommes et enfants | Achats en ligne"/>
<meta property="og:image" content="${baseUrl}/templates/fashion/images/banner2.jpg"/>
</head>
	
<body>
<!-- header -->
	<div class="modal" id="login">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<span class="close" title="fermer">X</span>
					<h4 class="modal-title"><i class="fa fa-user" aria-hidden="true"></i>Mon Compte</h4>
				</div>
				<div class="modal-body modal-body-sub">
					<div class="row">
						<div class="col-md-6 modal_body_left modal_body_left1">
							<div class="sap_tabs">	
								<div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
									<ul>
										<li class="resp-tab-item tab_item-1"><span>Identification</span></li>
										<li class="resp-tab-item tab_item-2"><span>Inscription</span></li>
									</ul>		
									<div class="tab-1 resp-tab-content">
										<div>
											<div class="register loginForm">
												<form>			
													<input name="Email" placeholder="email" type="email">						
													<input name="Password" placeholder="mot de passe" type="password">										
													<div class="sign-up">
														<input type="submit" value="Connexion"/>
														<a title="mot de passe oublié"><i class="fa fa-key" aria-hidden="true"></i>mot de passe oublié?</a>
													</div>
												</form>
											</div>
											<div class="register recoveryForm" style="display:none">
												<form>			
													<input name="Email" placeholder="email" type="email">						
													<div class="sign-up">
														<input type="submit" value="Envoyer"/>
														<input type="button" value="Annuler"/>
													</div>
												</form>
											</div>
										</div> 
									</div>	

									<div class="tab-2 resp-tab-content">
										<div>
											<div class="register">
												<form action="#" method="post">			
													<input placeholder="nom complet" name="nom" type="text">
													<input placeholder="email" name="email" type="email">	
													<input placeholder="mot de passe" name="password" type="password">	
													<input placeholder="confirmation" name="password" type="password">
													<div class="captcha">
		     											<div class="g-recaptcha" data-sitekey="6LfcIBwUAAAAAMpRV6hzY9LHZJWbGyO4k668VXP1"></div>
		    										</div> 
													<div class="sign-up">
														<input type="submit" value="Créér Mon Compte"/>
													</div>
												</form>
											</div>
										</div>
									</div> 			        					            	      
								</div>	
							</div>
						<div id="OR" class="hidden-xs">OU</div>
						</div>
						<div class="col-md-4 modal_body_right modal_body_right1">
							<div class="row text-center sign-with">
								<div class="col-md-12">
									<h4 class="other-nw"><i class="fa fa-sign-in" aria-hidden="true"></i>Se connecter avec</h4>
								</div>
								<div class="col-md-12">
									<div id="toploginDiv"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="header">
		<div class="container">
		    <div class="social">
				<a><i class="fa fa-facebook" aria-hidden="true"></i></a>
			</div>
		    <div id="navigation">
					<ul class="nav navbar-nav">
						<li><a href="#about" class="scroll" title="à propos">À PROPOS</a></li>
						<li><a href="#products" class="scroll" title="nos articles">Nos Articles</a></li>	
						<li><a href="#schedules" class="scroll" title="nos horaires">Nos Horaires</a></li>
						<li><a class="contact" title="contact">Contact</a></li>
					</ul>
			</div>
			<div class="w3l_login">
				<a><i class="fa fa-user" aria-hidden="true"></i></a>
			</div>
			<div class="w3l_logo">
				<h1><a href="${path}">Darou Salam Fashion<span>For Fashion Lovers</span></a></h1>
			</div>
			<div class="search">
				<input class="search_box" type="checkbox" id="search_box">
				<label class="icon-search" for="search_box"><i class="fa fa-search" aria-hidden="true"></i></label>
				<div class="search_form">
					<form action="#" method="post">
						<input type="text" name="Search" placeholder="articles...">
						<input type="submit" value="Rechercher">
					</form>
				</div>
			</div>
			<div class="cart box_1">
				<a>
					<div class="total">
					<span  class="simpleCart_quantity">0</span> articles</div>
					<i class="fa fa-shopping-cart" aria-hidden="true"></i>
				</a>
				<div class="clearfix"> </div>
				<div id="cart" class="shoppingCart">
					  <summary>
					     <h4><i class="fa fa-shopping-cart" aria-hidden="true"></i>Votre Panier</h4>
					     <span class="close" title="fermer">X</span>
					   </summary>
					   <div>
					       <ul>
					            
					       </ul>
					    </div>
					    <div>
					        <p>
					            <a title="acheter" class="checkout"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Acheter</a> <span>Total : <strong class="total">0</strong></span>
					         </p>
					    </div> 
			    </div>
			    <div class="product-view">
			         <div>
			            <img/>
			         </div>
			         <div>
			            <p><span>Bleu</span>Couleur</p>
			            <p><span>XL</span>Taille</p>
			            <p><span>13500</span>Prix</p>
			         </div>
			    </div>
			</div>	
			<div class="clearfix"> </div>
		</div>
	</div>
<!-- //header -->
<!-- banner -->
	<div class="banner" id="home1">
		<div class="container">
		  <br><br>
		  <div class="banner-deal">
				<a href="#deal" class="scroll"><h4><i class="fa fa-shopping-cart" aria-hidden="true"></i>hot deal</h4></a>
				<h6>Remise de 10%</h6>
				<div class="timer_wrap">
					<div id="counterTop"> </div>
				</div>
			</div>
		    <div class="bannerSlider">
		   	 <div class="wmuSlider">
						<div class="wmuSliderWrapper">
							<article style="position: absolute; width: 100%; opacity: 0;"> 
								<div class="banner-wrap">
									<div class="w3agile_special_deals_grid_left_grid1">
									    <h4>Prix Abordable</h4>
										<p>Procurez-vous notre gamme de robes, hauts, jeans, chemises, vestes, pulls, manteaux, combinaisons, chaussures, accessoires et plus encore, à un prix défiant toute compétition</p>
									</div>
								</div>
							</article>
							<article style="position: absolute; width: 100%; opacity: 0;"> 
								<div class="banner-wrap">
									<div class="w3agile_special_deals_grid_left_grid1">
									    <h4>Style Unique</h4>
										<p>Chaque mois, nous lançons prés de 10 nouveaux styles donc peu importe ce que vous cherchez, nous avons tout ce qu'il vous faut dans nos rayons</p>
									</div>
								</div>
							</article>
							<article style="position: absolute; width: 100%; opacity: 0;"> 
								<div class="banner-wrap">
									<div class="w3agile_special_deals_grid_left_grid1">
									    <h4>Livraison Gratuite</h4>
										<p>Nos frais de livraison varient en fonction de votre domiciliation. Pour toute commande dont le montant est supérieur à <b>50 000</b>, la livraison est gratuite</p>
									</div>
								</div>
							</article>
						</div>
				</div>
			 </div>
		</div>
		 <div class="shopping">
		    <a href="#products" title="commander" class="scroll"><i class="fa fa-shopping-cart" aria-hidden="true"></i><span>Commander</span></a>
		   </div>
	</div>
<!-- //banner -->

<!-- about -->
	<div id="about" class="container-bg">
		<div class="container">
			<h3>À PROPOS</h3>
			<p>
			Bienvenue chez <strong>Darou Salam Fashion</strong>, une boutique de prêt à porter offrant les meilleures tendances vêtements pour femmes, hommes et enfants. Procurez-vous notre gamme de robes, hauts, jeans, chemises, vestes, pulls, manteaux, combinaisons, chaussures, accessoires et plus encore, 
			à un prix défiant toute compétition. Chaque mois, nous lançons prés de 10 nouveaux styles donc peu importe ce que vous cherchez, nous avons tout ce qu'il vous faut dans nos rayons.
			Identifier vous rapidement avec les réseaux sociaux ou avec votre compte client pour commander en ligne ou pour suivre l'historique de vos commandes.
			Nous acceptons les paiements par espèces, par carte de crédit <b>Visa</b>, <b>MasterCard</b>, <b>American Express</b> et <b>Discover</b>, tout comme aussi, vous pouvez utiliser <b>PayPal</b>, <b>Tigo Cash</b> ou <b>Orange Money</b> pour faire vos achats.
			Notre service de livraison reste entièrement à votre disposition et nos frais de livraison varient en fonction de votre domiciliation ou vous pouvez venir retirer vos articles au magasin. 
			</p>
		</div>
   </div>
   <!-- banner-bottom -->
	<div id="products" class="container-bg banner-bottom">	
	   <div class="container">
	       <div class="genders">
	          <s:iterator value="genders">
	          <a  data-href="${type}"><i class="fa fa-${type}" aria-hidden="true"></i></a>
	          </s:iterator>
	       </div>
		    <h3>Nos Articles</h3>
		    <s:iterator value="genders" var="gender">
		    <h4 id="${gender.type}" class="gender"><i class="fa fa-${gender.type}" aria-hidden="true"></i>Pour ${gender.label}</h4>
			<div  class="col-md-12 wthree_banner_bottom_right">
				<div class="tabs">
					<ul  class="nav nav-tabs">
					    <s:iterator value="#gender.categories" var="category">
						  <li><a><i class="fa fa-star-o" aria-hidden="true"></i>${category.name}</a></li>
						</s:iterator>
					</ul>
					<div class="tab-content">
					    <s:iterator value="#gender.categories" var="category">
						<div class="tab-pane">
							<div class="agile_ecommerce_tabs">
						<s:iterator value="#category.products" var="product">
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-delay="true" data-src="templates/fashion/images/${product.image}" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>${product.name}</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>${product.price}</span> <i class="item_price">${product.price}</i></p>
										<p><a class="item_add item_show"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Commander</a></p>
									</div>
								</div>
							</s:iterator>
							</div>
						</div>
						</s:iterator>
					</div>
				</div>
			</div>
			<div class="clearfix"> </div>
			</s:iterator>
			</div>
			<div class="clearfix"> </div>
</div>
<!--modal-video-->
				<div class="modal video-modal fade" id="product-details" tabindex="-1" role="dialog" aria-labelledby="product-details">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<span class="close" title="fermer">X</span>						
							</div>
							<section>
								<div class="modal-body">
									<div class="col-md-5 modal_body_left">
										<img alt=" " class="img-responsive" />
										<div class="zoom">
										  <a title="zoom"><i class="fa fa-search-plus" aria-hidden="true"></i></a>
										</div>
									</div>
									<div class="col-md-7 modal_body_right">
										<h4></h4>
										<p>Ut enim ad minim veniam, quis nostrud 
											exercitation ullamco laboris nisi ut aliquip ex ea 
											commodo consequat.Duis aute irure dolor in 
											reprehenderit in voluptate velit esse cillum dolore 
											eu fugiat nulla pariatur. Excepteur sint occaecat 
											cupidatat non proident, sunt in culpa qui officia 
											deserunt mollit anim id est laborum.</p>
										<div class="rating">
											<div class="rating-left">
												<a><i class="fa fa-star" aria-hidden="true"></i></a>
											</div>
											<div class="rating-left">
												<a><i class="fa fa-star" aria-hidden="true"></i></a>
											</div>
											<div class="rating-left">
												<a><i class="fa fa-star" aria-hidden="true"></i></a>
											</div>
											<div class="rating-left">
												<a><i class="fa fa-star-o" aria-hidden="true"></i></a>
											</div>
											<div class="rating-left">
												<a><i class="fa fa-star-o" aria-hidden="true"></i></a>
											</div>
											<div class="clearfix"> </div>
										</div>
										<div class="options">
										     <div>
												<h5>Couleur</h5>
												<div class="color-quality">
													<ul>
														<li><a><span></span>Rouge</a></li>
														<li><a class="brown"><span></span>Bleu</a></li>
														<li><a class="gray"><span></span>Violet</a></li>
													</ul>
												</div>
											  </div>
											   <div>
												<h5>Taille</h5>
												<div class="sizes">
													<ul>
														<li>XS</li>
														<li>S</li>
														<li>M</li>
														<li>L</li>
														<li>XL</li>
														<li>XXL</li>
														<li>XXXL</li>
													</ul>
												</div>
											  </div>
										</div>
										<div class="modal_body_right_cart simpleCart_shelfItem">
											<p><span>15000</span> <i class="item_price">13 500</i></p>
											<p><input  type="number" value="1" min="1"/>&nbsp;<a title="commander" class="item_add shop" data-name="shirt"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Commander</a></p>
										</div>
									</div>
									<div class="clearfix"> </div>
								</div>
							</section>
						</div>
					</div>
 </div>		  
	<tiles:insertAttribute name="content"/>	
<!-- //banner-bottom -->
<!-- special-deals -->
	<div id="deal" class="special-deals">
		<div class="container">
			<h2>Hot Deal</h2>
			<div class="w3agile_special_deals_grids">
				<div class="col-md-7 w3agile_special_deals_grid_left">
					<div class="w3agile_special_deals_grid_left_grid">
						<img data-delay="true" data-src="templates/fashion/images/26.jpg" alt=" " class="img-responsive" />
						<div class="w3agile_special_deals_grid_left_grid_pos">
							<h4>Acheter nos <span>meilleures articles</span></h4>
						</div>
					</div>
					<div class="wmuSlider">
						<div class="wmuSliderWrapper">
							<article style="position: absolute; width: 100%; opacity: 0;"> 
								<div class="banner-wrap">
									<div class="w3agile_special_deals_grid_left_grid1">
										<img data-delay="true" data-src="templates/fashion/images/1.png" alt=" " class="img-responsive" />
										<p>Quis autem vel eum iure reprehenderit qui in ea voluptate 
											velit esse quam nihil molestiae consequatur, vel illum qui dolorem 
											eum fugiat quo voluptas nulla pariatur</p>
										<h4>Laura</h4>
									</div>
								</div>
							</article>
							<article style="position: absolute; width: 100%; opacity: 0;"> 
								<div class="banner-wrap">
									<div class="w3agile_special_deals_grid_left_grid1">
										<img data-delay="true" data-src="templates/fashion/images/2.png" alt=" " class="img-responsive" />
										<p>Quis autem vel eum iure reprehenderit qui in ea voluptate 
											velit esse quam nihil molestiae consequatur, vel illum qui dolorem 
											eum fugiat quo voluptas nulla pariatur</p>
										<h4>Michael</h4>
									</div>
								</div>
							</article>
							<article style="position: absolute; width: 100%; opacity: 0;"> 
								<div class="banner-wrap">
									<div class="w3agile_special_deals_grid_left_grid1">
										<img data-delay="true" data-src="templates/fashion/images/3.png" alt=" " class="img-responsive" />
										<p>Quis autem vel eum iure reprehenderit qui in ea voluptate 
											velit esse quam nihil molestiae consequatur, vel illum qui dolorem 
											eum fugiat quo voluptas nulla pariatur</p>
										<h4>Rosy</h4>
									</div>
								</div>
							</article>
						</div>
					</div> 
				</div>
				<div class="col-md-5 w3agile_special_deals_grid_right">
					<img data-delay="true" data-src="templates/fashion/images/25.jpg" alt=" " class="img-responsive" />
					<div class="w3agile_special_deals_grid_right_pos">
					    <h4>Notre Offre</h4>
						<h5>10% <span></span>Off</h5>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
<!-- //special-deals -->
<!-- banner-bottom1 -->
	<div class="banner-bottom1">
		<div class="agileinfo_banner_bottom1_grids">
			<div class="col-md-7 agileinfo_banner_bottom1_grid_left">
				<h3>ne ratez surtout pas cette offre alléchante <span>une remise de 10% <i></i></span></h3>
				<a href="#products" class="scroll"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Commander Maintenant</a>
			</div>
			<div class="col-md-5 agileinfo_banner_bottom1_grid_right">
				<h4>Offre Valable jusqu'au 03 Septembre</h4>
				<div class="timer_wrap">
					<div id="counter"> </div>
				</div>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
<!-- //banner-bottom1 -->
<!-- top-brands -->
	<div id="top-brands" class="top-brands">
		<div class="container">
			<h3>Top Marques</h3>
			<div class="sliderfig">
				<ul id="flexiselDemo1">			
					<li>
						<img data-delay="true" data-src="templates/fashion/images/4.png" alt=" " class="img-responsive" />
					</li>
					<li>
						<img data-delay="true" data-src="templates/fashion/images/5.png" alt=" " class="img-responsive" />
					</li>
					<li>
						<img data-delay="true" data-src="templates/fashion/images/6.png" alt=" " class="img-responsive" />
					</li>
					<li>
						<img data-delay="true" data-src="templates/fashion/images/7.png" alt=" " class="img-responsive" />
					</li>
					<li>
						<img data-delay="true" data-src="templates/fashion/images/46.jpg" alt=" " class="img-responsive" />
					</li>
				</ul>
			</div>	
		</div>
	</div>
<!-- //top-brands -->
<!-- newsletter -->
	<div class="newsletter">
		<div class="container">
			<div class="col-md-6 w3agile_newsletter_left">
				<h3>Abonnez-vous aux nouvelles</h3>
			</div>
			<div class="col-md-6 w3agile_newsletter_right">
				<form action="#" method="post">
					<input type="email" name="email" placeholder="email">
					<input type="submit" value="Abonner" />
				</form>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
<!-- //newsletter -->
<!-- about -->
	<div id="schedules" class="container-bg">
		<div class="container">
			<h3>Nos Horaires</h3>
			<p>
			Nous sommes ouverts du lundi au samedi et nos horaires d'ouverture sont les suivantes.
			</p>
			<ol>
			  <li>Lundi : 10H - 19H 30</li>
			  <li>Mardi : 10H - 19H 30</li>
			  <li>Mercredi : 10H - 19H 30</li>
			  <li>Jeudi : 10H - 19H 30</li>
			  <li>Vendredi : 10H - 19H 30</li>
			  <li>Samedi : 10H - 19H 30</li>
			</ol>
		</div>
   </div>
   <div id="contact-form">
     <span class="close">X</span>
     <h1><i class="fa fa-envelope"></i>Contact</h1>
     <form  action="contact" method="post">
		  <input id="name" name="mail.author"  type="text" placeholder="nom complet"> 
		  <input id="email" name="mail.address" type="email" placeholder="email">
	   	  <input id="subject" name="mail.subject" type="text" placeholder="sujet">
		  <textarea id="message" name="mail.content"  placeholder="message"></textarea>
		  <input id="submit" type="submit" value="Envoyer">
	</form>
   </div> 
   <div class="clearfix"> </div>
<!-- footer -->
	<div id="footer" class="footer">
	   <a class="scrollToTop"><i class="fa fa-angle-up"></i></a>
		<div class="container">
			<div class="w3_footer_grids">
				<div class="col-md-3 w3_footer_grid">
					<h3>Contact</h3>
					<ul class="address">
						<li><i class="fa fa-map-marker" aria-hidden="true"></i>Nord Foire, VDN</li>
						<li><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:info@darousalamfashion.com">info@darousalamfashion.com</a></li>
						<li><i class="fa fa-mobile" aria-hidden="true"></i>+221 33 855 10 91</li>
					</ul>
				</div>
				<div class="col-md-3 w3_footer_grid">
					<h3>Information</h3>
					<ul class="info"> 
						<li><a href="#about" class="scroll">À Propos</a></li>
						<li><a href="#schedules" class="scroll">Nos Horaires</a></li>
						<li><a class="contact">Contact</a></li>
						
					</ul>
				</div>
				<div class="col-md-3 w3_footer_grid">
					<h3>Nos Articles</h3>
					<ul class="info"> 
						<li><a href="#female" class="scroll"><i class="fa fa-female" aria-hidden="true"></i>Pour Femme</a></li>
						<li><a href="#male" class="scroll"><i class="fa fa-male" aria-hidden="true"></i>Pour Homme</a></li>
						<li><a href="#child" class="scroll"><i class="fa fa-child" aria-hidden="true"></i>Pour Enfant</a></li>
					</ul>
				</div>
				<div class="col-md-3 w3_footer_grid">
					<h3>Social</h3>
					<h4>Suivez-nous</h4>
					<div class="social agileits_social_button">
						<ul>
							<li><a><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
						</ul>
					</div>
					<h4>Partagez</h4>
					<div class="agileits_social_button">
						<div class="share-this sharethis-inline-share-buttons"></div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
		<div class="footer-copy">
			<div class="payment-methods">
			 <img data-delay="true" data-src="templates/fashion/images/payment-methods.png"/>
			</div>
			<div>
				<p>&copy;2017 Conçu par <a href="http://w3layouts.com" target="_blank">W3layouts</a> et <a href="https://www.thinktech.sn" target="_blank">ThinkTech</a></p>
			</div>
			<div>
			 <p><a target="_blank">Termes d'utilisation</a> | <a target="_blank">Confidentialité</a></p>
			</div>
		</div>
	</div>
	 <div class="clearfix"> </div>
<!-- //footer -->
<i id="offline-message" data-info="pas de connexion internet"></i>
<script src="templates/fashion/js/bundle.js"></script> 
<script type="text/javascript" src="templates/fashion/js/template.js" async defer></script>
</body>
</html>