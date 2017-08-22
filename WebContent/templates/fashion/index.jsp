<!DOCTYPE html>
<html>
<head>
<title>Darou Salam</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Habillements, Jeans, Fashion" />
<link href="css/metamorphosis.css" rel="stylesheet" type="text/css" media="all" />
<link href="templates/fashion/css/bundle.css" rel="stylesheet" type="text/css" media="all" />
<link href="templates/fashion/css/template.css" rel="stylesheet" type="text/css" media="all" />
<link href='//fonts.googleapis.com/css?family=Exo:400,700' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
<link rel="shortcut icon" href="templates/fashion/images/banner2.jpg"  sizes="32x32"/> 
<meta property="og:type" content="website"/>
 <meta property="og:url" content="${baseUrl}"/>
<meta property="og:title" content="Boutique Darou Salam - Site Officiel"/>
<meta property="og:description" content="Bienvenue sur le site officiel de la boutique Darou Salam"/>
<meta property="og:image" content="${baseUrl}/templates/fashion/images/banner2.jpg"/>
</head>
	
<body>
<!-- header -->
	<div class="modal fade" id="myModal88" tabindex="-1" role="dialog" aria-labelledby="myModal88"
		aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
						&times;</button>
					<h4 class="modal-title" id="myModalLabel"><i class="fa fa-user" aria-hidden="true"></i>Connexion</h4>
				</div>
				<div class="modal-body modal-body-sub">
					<div class="row">
						<div class="col-md-6 modal_body_left modal_body_left1" style="border-right: 1px dotted #C2C2C2;padding-right:3em;">
							<div class="sap_tabs">	
								<div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
									<ul>
										<li class="resp-tab-item" aria-controls="tab_item-0"><span>Sign in</span></li>
										<li class="resp-tab-item" aria-controls="tab_item-1"><span>Sign up</span></li>
									</ul>		
									<div class="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
										<div class="facts">
											<div class="register">
												<form action="#" method="post">			
													<input name="Email" placeholder="Email Address" type="text" required="">						
													<input name="Password" placeholder="Password" type="password" required="">										
													<div class="sign-up">
														<input type="submit" value="Sign in"/>
													</div>
												</form>
											</div>
										</div> 
									</div>	

									<div class="tab-2 resp-tab-content" aria-labelledby="tab_item-1">
										<div class="facts">
											<div class="register">
												<form action="#" method="post">			
													<input placeholder="Name" name="Name" type="text" required="">
													<input placeholder="Email Address" name="Email" type="email" required="">	
													<input placeholder="Password" name="Password" type="password" required="">	
													<input placeholder="Confirm Password" name="Password" type="password" required="">
													<div class="sign-up">
														<input type="submit" value="Create Account"/>
													</div>
												</form>
											</div>
										</div>
									</div> 			        					            	      
								</div>	
							</div>
							<div id="OR" class="hidden-xs">
								OR</div>
						</div>
						<div class="col-md-4 modal_body_right modal_body_right1">
							<div class="row text-center sign-with">
								<div class="col-md-12">
									<h2 class="other-nw">Sign in with</h2>
								</div>
								<div class="col-md-12">
									<div id="loginDiv"></div>
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
		    <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
					<ul class="nav navbar-nav">
						<li><a>About Us</a></li>	
						<!-- Mega Menu -->
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Our Products <b class="caret"></b></a>
							<ul class="dropdown-menu multi-column columns-3">
								<div class="row">
									<div class="col-sm-3">
										<ul class="multi-column-dropdown">
											<h6>Clothing</h6>
											<li><a >Dresses<span>New</span></a></li>
											<li><a>Sweaters</a></li>
											<li><a>Shorts & Skirts</a></li>
											<li><a>Jeans</a></li>
											<li><a>Shirts & Tops<span>New</span></a></li>
										</ul>
									</div>
									<div class="col-sm-3">
										<ul class="multi-column-dropdown">
											<h6>Ethnic Wear</h6>
											<li><a>Salwars</a></li>
											<li><a>Sarees<span>New</span></a></li>
											<li><a><i>Summer Store</i></a></li>
										</ul>
									</div>
									<div class="col-sm-2">
										<ul class="multi-column-dropdown">
											<h6>Foot Wear</h6>
											<li><a>Flats</a></li>
											<li><a>Sandals</a></li>
											<li><a>Boots</a></li>
											<li><a>Heels</a></li>
										</ul>
									</div>
									<div class="col-sm-4">
										<div class="w3ls_products_pos">
											<h4>50%<i>Off/-</i></h4>
											<img data-src="templates/fashion/images/1.jpg" alt=" " class="img-responsive" />
										</div>
									</div>
									<div class="clearfix"></div>
								</div>
							</ul>
						</li>
						<li><a>Contact Us</a></li>
					</ul>
				</div>
			<div class="w3l_login">
				<a href="#" data-toggle="modal" data-target="#myModal88"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></a>
			</div>
			<div class="w3l_logo">
				<h1><a href="${path}">Darou Salam<span>For Fashion Lovers</span></a></h1>
			</div>
			<div class="search">
				<input class="search_box" type="checkbox" id="search_box">
				<label class="icon-search" for="search_box"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></label>
				<div class="search_form">
					<form action="#" method="post">
						<input type="text" name="Search" placeholder="Search...">
						<input type="submit" value="Send">
					</form>
				</div>
			</div>
			<div class="cart box_1">
				<a>
					<div class="total">
					<span class="simpleCart_total"></span> (<span id="simpleCart_quantity" class="simpleCart_quantity"></span> items)</div>
					<img data-src="templates/fashion/images/bag.png" alt="" />
				</a>
				<p><a href="javascript:;" class="simpleCart_empty">Empty Cart</a></p>
				<div class="clearfix"> </div>
			</div>	
			<div class="clearfix"> </div>
		</div>
	</div>
	<div class="navigation">
		<div class="container">
			<nav class="navbar navbar-default">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header nav_2">
					<button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div> 
			</nav>
		</div>
	</div>
<!-- //header -->
<!-- banner -->
	<div class="banner" id="home1">
		<div class="container">
			
		</div>
	</div>
<!-- //banner -->

<!-- banner-bottom -->
	<div class="banner-bottom">
		<div class="container">
			<div class="col-md-5 wthree_banner_bottom_left">
				<div class="video-img">
					<a class="play-icon popup-with-zoom-anim" href="#small-dialog">
						<span class="glyphicon glyphicon-expand" aria-hidden="true"></span>
					</a>
				</div>
				<!-- pop-up-box -->    
					<!--//pop-up-box -->
					<div id="small-dialog" class="mfp-hide">
						<iframe src="https://player.vimeo.com/video/23259282?title=0&byline=0&portrait=0"></iframe>
					</div>
			</div>
			<div class="col-md-7 wthree_banner_bottom_right">
				<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
					<ul id="myTab" class="nav nav-tabs" role="tablist">
						<li role="presentation" class="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home">T-shirts</a></li>
						<li role="presentation"><a href="#skirts" role="tab" id="skirts-tab" data-toggle="tab" aria-controls="skirts">Skirts</a></li>
						<li role="presentation"><a href="#watches" role="tab" id="watches-tab" data-toggle="tab" aria-controls="watches">Watches</a></li>
						<li role="presentation"><a href="#sandals" role="tab" id="sandals-tab" data-toggle="tab" aria-controls="sandals">Sandals</a></li>
						<li role="presentation"><a href="#jewellery" role="tab" id="jewellery-tab" data-toggle="tab" aria-controls="jewellery">Jewellery</a></li>
					</ul>
					<div id="myTabContent" class="tab-content">
						<div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">
							<div class="agile_ecommerce_tabs">
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/6.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/4.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/5.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/3.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/7.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/3.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/5.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/6.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>T-Shirt</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/4.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/6.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/5.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/3.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/7.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/3.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/5.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/6.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>T-Shirt</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/5.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/6.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/4.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/3.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/7.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/3.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/5.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/6.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>T-Shirt</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="skirts" aria-labelledby="skirts-tab">
							<div class="agile_ecommerce_tabs">
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/8.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/9.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/10.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/8.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/9.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/10.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/8.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/9.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal6"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Skirt</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/9.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/8.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/10.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/8.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/9.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/10.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/8.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/9.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal6"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Skirt</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/10.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/8.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/9.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/8.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/9.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/10.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/8.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/9.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal6"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Skirt</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="watches" aria-labelledby="watches-tab">
							<div class="agile_ecommerce_tabs">
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/11.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/12.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/13.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/11.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/12.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/13.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/11.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/12.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal2"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Watch</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/12.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/11.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/13.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/11.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/12.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/13.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/11.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/12.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal2"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Watch</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/13.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/11.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/12.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/11.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/12.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/13.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/11.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/12.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal2"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Watch</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="sandals" aria-labelledby="sandals-tab">
							<div class="agile_ecommerce_tabs">
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/14.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/15.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/16.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/14.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/15.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/16.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/14.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/15.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal3"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Sandal</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/15.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/14.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/16.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/14.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/15.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/16.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/14.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/15.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal3"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Sandal</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/16.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/14.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/15.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/14.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/15.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/16.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/14.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/15.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal3"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Sandal</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="jewellery" aria-labelledby="jewellery-tab">
							<div class="agile_ecommerce_tabs">
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/17.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/18.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/19.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/17.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/18.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/19.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/17.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/18.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal4"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Jewellery</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/18.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/17.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/19.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/17.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/18.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/19.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/17.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/18.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal4"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Jewellery</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img data-src="templates/fashion/images/19.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/17.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/18.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/17.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/18.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/19.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/17.jpg" alt=" " class="img-responsive" />
										<img data-src="templates/fashion/images/18.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal4"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a>Jewellery</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$320</span> <i class="item_price">$250</i></p>
										<p><a class="item_add" href="#">Add to cart</a></p>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
					</div>
				</div>
					<!--modal-video-->
				<div class="modal video-modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModal">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
							</div>
							<section>
								<div class="modal-body">
									<div class="col-md-5 modal_body_left">
										<img data-src="templates/fashion/images/20.jpg" alt=" " class="img-responsive" />
									</div>
									<div class="col-md-7 modal_body_right">
										<h4>a good look women's shirt</h4>
										<p>Ut enim ad minim veniam, quis nostrud 
											exercitation ullamco laboris nisi ut aliquip ex ea 
											commodo consequat.Duis aute irure dolor in 
											reprehenderit in voluptate velit esse cillum dolore 
											eu fugiat nulla pariatur. Excepteur sint occaecat 
											cupidatat non proident, sunt in culpa qui officia 
											deserunt mollit anim id est laborum.</p>
										<div class="rating">
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="clearfix"> </div>
										</div>
										<div class="modal_body_right_cart simpleCart_shelfItem">
											<p><span>$320</span> <i class="item_price">$250</i></p>
											<p><a class="item_add" href="#">Add to cart</a></p>
										</div>
										<h5>Color</h5>
										<div class="color-quality">
											<ul>
												<li><a href="#"><span></span>Red</a></li>
												<li><a href="#" class="brown"><span></span>Yellow</a></li>
												<li><a href="#" class="purple"><span></span>Purple</a></li>
												<li><a href="#" class="gray"><span></span>Violet</a></li>
											</ul>
										</div>
									</div>
									<div class="clearfix"> </div>
								</div>
							</section>
						</div>
					</div>
				</div>
				<div class="modal video-modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModal1">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
							</div>
							<section>
								<div class="modal-body">
									<div class="col-md-5 modal_body_left">
										<img data-src="templates/fashion/images/63.jpg" alt=" " class="img-responsive" />
									</div>
									<div class="col-md-7 modal_body_right">
										<h4>a good look black women's jeans</h4>
										<p>Ut enim ad minim veniam, quis nostrud 
											exercitation ullamco laboris nisi ut aliquip ex ea 
											commodo consequat.Duis aute irure dolor in 
											reprehenderit in voluptate velit esse cillum dolore 
											eu fugiat nulla pariatur. Excepteur sint occaecat 
											cupidatat non proident, sunt in culpa qui officia 
											deserunt mollit anim id est laborum.</p>
										<div class="rating">
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="clearfix"> </div>
										</div>
										<div class="modal_body_right_cart simpleCart_shelfItem">
											<p><span>$320</span> <i class="item_price">$250</i></p>
											<p><a class="item_add" href="#">Add to cart</a></p>
										</div>
										<h5>Color</h5>
										<div class="color-quality">
											<ul>
												<li><a href="#"><span></span>Red</a></li>
												<li><a href="#" class="brown"><span></span>Yellow</a></li>
												<li><a href="#" class="purple"><span></span>Purple</a></li>
												<li><a href="#" class="gray"><span></span>Violet</a></li>
											</ul>
										</div>
									</div>
									<div class="clearfix"> </div>
								</div>
							</section>
						</div>
					</div>
				</div>
				<div class="modal video-modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModal2">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
							</div>
							<section>
								<div class="modal-body">
									<div class="col-md-5 modal_body_left">
										<img data-src="templates/fashion/images/23.jpg" alt=" " class="img-responsive" />
									</div>
									<div class="col-md-7 modal_body_right">
										<h4>a good look women's Watch</h4>
										<p>Ut enim ad minim veniam, quis nostrud 
											exercitation ullamco laboris nisi ut aliquip ex ea 
											commodo consequat.Duis aute irure dolor in 
											reprehenderit in voluptate velit esse cillum dolore 
											eu fugiat nulla pariatur. Excepteur sint occaecat 
											cupidatat non proident, sunt in culpa qui officia 
											deserunt mollit anim id est laborum.</p>
										<div class="rating">
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="clearfix"> </div>
										</div>
										<div class="modal_body_right_cart simpleCart_shelfItem">
											<p><span>$320</span> <i class="item_price">$250</i></p>
											<p><a class="item_add" href="#">Add to cart</a></p>
										</div>
										<h5>Color</h5>
										<div class="color-quality">
											<ul>
												<li><a href="#"><span></span>Red</a></li>
												<li><a href="#" class="brown"><span></span>Yellow</a></li>
												<li><a href="#" class="purple"><span></span>Purple</a></li>
												<li><a href="#" class="gray"><span></span>Violet</a></li>
											</ul>
										</div>
									</div>
									<div class="clearfix"> </div>
								</div>
							</section>
						</div>
					</div>
				</div>
				<div class="modal video-modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModal3">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
							</div>
							<section>
								<div class="modal-body">
									<div class="col-md-5 modal_body_left">
										<img data-src="templates/fashion/images/24.jpg" alt=" " class="img-responsive" />
									</div>
									<div class="col-md-7 modal_body_right">
										<h4>a good look women's Sandal</h4>
										<p>Ut enim ad minim veniam, quis nostrud 
											exercitation ullamco laboris nisi ut aliquip ex ea 
											commodo consequat.Duis aute irure dolor in 
											reprehenderit in voluptate velit esse cillum dolore 
											eu fugiat nulla pariatur. Excepteur sint occaecat 
											cupidatat non proident, sunt in culpa qui officia 
											deserunt mollit anim id est laborum.</p>
										<div class="rating">
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="clearfix"> </div>
										</div>
										<div class="modal_body_right_cart simpleCart_shelfItem">
											<p><span>$320</span> <i class="item_price">$250</i></p>
											<p><a class="item_add" href="#">Add to cart</a></p>
										</div>
										<h5>Color</h5>
										<div class="color-quality">
											<ul>
												<li><a href="#"><span></span>Red</a></li>
												<li><a href="#" class="brown"><span></span>Yellow</a></li>
												<li><a href="#" class="purple"><span></span>Purple</a></li>
												<li><a href="#" class="gray"><span></span>Violet</a></li>
											</ul>
										</div>
									</div>
									<div class="clearfix"> </div>
								</div>
							</section>
						</div>
					</div>
				</div>
				<div class="modal video-modal fade" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="myModal4">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
							</div>
							<section>
								<div class="modal-body">
									<div class="col-md-5 modal_body_left">
										<img data-src="templates/fashion/images/22.jpg" alt=" " class="img-responsive" />
									</div>
									<div class="col-md-7 modal_body_right">
										<h4>a good look women's Necklace</h4>
										<p>Ut enim ad minim veniam, quis nostrud 
											exercitation ullamco laboris nisi ut aliquip ex ea 
											commodo consequat.Duis aute irure dolor in 
											reprehenderit in voluptate velit esse cillum dolore 
											eu fugiat nulla pariatur. Excepteur sint occaecat 
											cupidatat non proident, sunt in culpa qui officia 
											deserunt mollit anim id est laborum.</p>
										<div class="rating">
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="clearfix"> </div>
										</div>
										<div class="modal_body_right_cart simpleCart_shelfItem">
											<p><span>$320</span> <i class="item_price">$250</i></p>
											<p><a class="item_add" href="#">Add to cart</a></p>
										</div>
										<h5>Color</h5>
										<div class="color-quality">
											<ul>
												<li><a href="#"><span></span>Red</a></li>
												<li><a href="#" class="brown"><span></span>Yellow</a></li>
												<li><a href="#" class="purple"><span></span>Purple</a></li>
												<li><a href="#" class="gray"><span></span>Violet</a></li>
											</ul>
										</div>
									</div>
									<div class="clearfix"> </div>
								</div>
							</section>
						</div>
					</div>
				</div>
				<div class="modal video-modal fade" id="myModal5" tabindex="-1" role="dialog" aria-labelledby="myModal5">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
							</div>
							<section>
								<div class="modal-body">
									<div class="col-md-5 modal_body_left">
										<img data-src="templates/fashion/images/35.jpg" alt=" " class="img-responsive" />
									</div>
									<div class="col-md-7 modal_body_right">
										<h4>a good look women's Jacket</h4>
										<p>Ut enim ad minim veniam, quis nostrud 
											exercitation ullamco laboris nisi ut aliquip ex ea 
											commodo consequat.Duis aute irure dolor in 
											reprehenderit in voluptate velit esse cillum dolore 
											eu fugiat nulla pariatur. Excepteur sint occaecat 
											cupidatat non proident, sunt in culpa qui officia 
											deserunt mollit anim id est laborum.</p>
										<div class="rating">
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="clearfix"> </div>
										</div>
										<div class="modal_body_right_cart simpleCart_shelfItem">
											<p><span>$320</span> <i class="item_price">$250</i></p>
											<p><a class="item_add" href="#">Add to cart</a></p>
										</div>
										<h5>Color</h5>
										<div class="color-quality">
											<ul>
												<li><a href="#"><span></span>Red</a></li>
												<li><a href="#" class="brown"><span></span>Yellow</a></li>
												<li><a href="#" class="purple"><span></span>Purple</a></li>
												<li><a href="#" class="gray"><span></span>Violet</a></li>
											</ul>
										</div>
									</div>
									<div class="clearfix"> </div>
								</div>
							</section>
						</div>
					</div>
				</div>
				<div class="modal video-modal fade" id="myModal6" tabindex="-1" role="dialog" aria-labelledby="myModal6">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
							</div>
							<section>
								<div class="modal-body">
									<div class="col-md-5 modal_body_left">
										<img data-src="templates/fashion/images/39.jpg" alt=" " class="img-responsive" />
									</div>
									<div class="col-md-7 modal_body_right">
										<h4>a good look women's Long Skirt</h4>
										<p>Ut enim ad minim veniam, quis nostrud 
											exercitation ullamco laboris nisi ut aliquip ex ea 
											commodo consequat.Duis aute irure dolor in 
											reprehenderit in voluptate velit esse cillum dolore 
											eu fugiat nulla pariatur. Excepteur sint occaecat 
											cupidatat non proident, sunt in culpa qui officia 
											deserunt mollit anim id est laborum.</p>
										<div class="rating">
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star-.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="rating-left">
												<img data-src="templates/fashion/images/star.png" alt=" " class="img-responsive" />
											</div>
											<div class="clearfix"> </div>
										</div>
										<div class="modal_body_right_cart simpleCart_shelfItem">
											<p><span>$320</span> <i class="item_price">$250</i></p>
											<p><a class="item_add" href="#">Add to cart</a></p>
										</div>
										<h5>Color</h5>
										<div class="color-quality">
											<ul>
												<li><a href="#"><span></span>Red</a></li>
												<li><a href="#" class="brown"><span></span>Yellow</a></li>
												<li><a href="#" class="purple"><span></span>Purple</a></li>
												<li><a href="#" class="gray"><span></span>Violet</a></li>
											</ul>
										</div>
									</div>
									<div class="clearfix"> </div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
<!-- //banner-bottom -->

<!-- banner-bottom1 -->
	<div class="banner-bottom1">
		<div class="agileinfo_banner_bottom1_grids">
			<div class="col-md-7 agileinfo_banner_bottom1_grid_left">
				<h3>Grand Opening Event With flat<span>20% <i>Discount</i></span></h3>
				<a>Shop Now</a>
			</div>
			<div class="col-md-5 agileinfo_banner_bottom1_grid_right">
				<h4>hot deal</h4>
				<div class="timer_wrap">
					<div id="counter"> </div>
				</div>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
<!-- //banner-bottom1 -->

<!-- special-deals -->
	<div class="special-deals">
		<div class="container">
			<h2>Special Deals</h2>
			<div class="w3agile_special_deals_grids">
				<div class="col-md-7 w3agile_special_deals_grid_left">
					<div class="w3agile_special_deals_grid_left_grid">
						<img data-src="templates/fashion/images/26.jpg" alt=" " class="img-responsive" />
						<div class="w3agile_special_deals_grid_left_grid_pos1">
							<h5>30%<span>Off/-</span></h5>
						</div>
						<div class="w3agile_special_deals_grid_left_grid_pos">
							<h4>We Offer <span>Best Products</span></h4>
						</div>
					</div>
					<div class="wmuSlider example1">
						<div class="wmuSliderWrapper">
							<article style="position: absolute; width: 100%; opacity: 0;"> 
								<div class="banner-wrap">
									<div class="w3agile_special_deals_grid_left_grid1">
										<img data-src="templates/fashion/images/1.png" alt=" " class="img-responsive" />
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
										<img data-src="templates/fashion/images/2.png" alt=" " class="img-responsive" />
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
										<img data-src="templates/fashion/images/3.png" alt=" " class="img-responsive" />
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
					<img data-src="templates/fashion/images/25.jpg" alt=" " class="img-responsive" />
					<div class="w3agile_special_deals_grid_right_pos">
						<h4>Women's <span>Special</span></h4>
						<h5>save up <span>to</span> 30%</h5>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
<!-- //special-deals -->
<!-- new-products -->
	<div class="new-products">
		<div class="container">
			<h3>New Products</h3>
			<div class="agileinfo_new_products_grids">
				<div class="col-md-3 agileinfo_new_products_grid">
					<div class="agile_ecommerce_tab_left agileinfo_new_products_grid1">
						<div class="hs-wrapper hs-wrapper1">
							<img data-src="templates/fashion/images/27.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/28.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/29.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/30.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/27.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/28.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/29.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/30.jpg" alt=" " class="img-responsive" />
							<div class="w3_hs_bottom w3_hs_bottom_sub">
								<ul>
									<li>
										<a href="#" data-toggle="modal" data-target="#myModal6"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
									</li>
								</ul>
							</div>
						</div>
						<h5><a>Skirts</a></h5>
						<div class="simpleCart_shelfItem">
							<p><span>$320</span> <i class="item_price">$250</i></p>
							<p><a class="item_add" href="#">Add to cart</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-3 agileinfo_new_products_grid">
					<div class="agile_ecommerce_tab_left agileinfo_new_products_grid1">
						<div class="hs-wrapper hs-wrapper1">
							<img data-src="templates/fashion/images/31.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/32.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/33.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/34.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/31.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/32.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/33.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/34.jpg" alt=" " class="img-responsive" />
							<div class="w3_hs_bottom w3_hs_bottom_sub">
								<ul>
									<li>
										<a href="#" data-toggle="modal" data-target="#myModal5"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
									</li>
								</ul>
							</div>
						</div>
						<h5><a>Jackets</a></h5>
						<div class="simpleCart_shelfItem">
							<p><span>$320</span> <i class="item_price">$250</i></p>
							<p><a class="item_add" href="#">Add to cart</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-3 agileinfo_new_products_grid">
					<div class="agile_ecommerce_tab_left agileinfo_new_products_grid1">
						<div class="hs-wrapper hs-wrapper1">
							<img data-src="templates/fashion/images/37.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/30.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/36.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/38.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/37.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/30.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/36.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/38.jpg" alt=" " class="img-responsive" />
							<div class="w3_hs_bottom w3_hs_bottom_sub">
								<ul>
									<li>
										<a href="#" data-toggle="modal" data-target="#myModal6"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
									</li>
								</ul>
							</div>
						</div>
						<h5><a>Dresses</a></h5>
						<div class="simpleCart_shelfItem">
							<p><span>$320</span> <i class="item_price">$250</i></p>
							<p><a class="item_add" href="#">Add to cart</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-3 agileinfo_new_products_grid">
					<div class="agile_ecommerce_tab_left agileinfo_new_products_grid1">
						<div class="hs-wrapper hs-wrapper1">
							<img data-src="templates/fashion/images/40.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/41.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/42.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/43.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/40.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/41.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/42.jpg" alt=" " class="img-responsive" />
							<img data-src="templates/fashion/images/43.jpg" alt=" " class="img-responsive" />
							<div class="w3_hs_bottom w3_hs_bottom_sub">
								<ul>
									<li>
										<a href="#" data-toggle="modal" data-target="#myModal1"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
									</li>
								</ul>
							</div>
						</div>
						<h5><a>Jeans</a></h5>
						<div class="simpleCart_shelfItem">
							<p><span>$320</span> <i class="item_price">$250</i></p>
							<p><a class="item_add" href="#">Add to cart</a></p>
						</div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
<!-- //new-products -->
<!-- top-brands -->
	<div class="top-brands">
		<div class="container">
			<h3>Top Brands</h3>
			<div class="sliderfig">
				<ul id="flexiselDemo1">			
					<li>
						<img data-src="templates/fashion/images/4.png" alt=" " class="img-responsive" />
					</li>
					<li>
						<img data-src="templates/fashion/images/5.png" alt=" " class="img-responsive" />
					</li>
					<li>
						<img data-src="templates/fashion/images/6.png" alt=" " class="img-responsive" />
					</li>
					<li>
						<img data-src="templates/fashion/images/7.png" alt=" " class="img-responsive" />
					</li>
					<li>
						<img data-src="templates/fashion/images/46.jpg" alt=" " class="img-responsive" />
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
				<h3>Newsletter</h3>
				<p>Excepteur sint occaecat cupidatat non proident, sunt.</p>
			</div>
			<div class="col-md-6 w3agile_newsletter_right">
				<form action="#" method="post">
					<input type="email" name="Email" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required="">
					<input type="submit" value="" />
				</form>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
<!-- //newsletter -->
<!-- footer -->
	<div class="footer">
		<div class="container">
			<div class="w3_footer_grids">
				<div class="col-md-3 w3_footer_grid">
					<h3>Contact</h3>
					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
					<ul class="address">
						<li><i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>New York City.</span></li>
						<li><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
						<li><i class="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 567</li>
					</ul>
				</div>
				<div class="col-md-3 w3_footer_grid">
					<h3>Information</h3>
					<ul class="info"> 
						<li><a>About Us</a></li>
						<li><a>Contact Us</a></li>
						<li><a>Short Codes</a></li>
						<li><a>FAQ's</a></li>
						<li><a>Special Products</a></li>
					</ul>
				</div>
				<div class="col-md-3 w3_footer_grid">
					<h3>Category</h3>
					<ul class="info"> 
						<li><a>Dresses</a></li>
						<li><a>Sweaters</a></li>
						<li><a>Shirts</a></li>
						<li><a>Sarees</a></li>
						<li><a>Shorts & Skirts</a></li>
					</ul>
				</div>
				<div class="col-md-3 w3_footer_grid">
					<h3>Profile</h3>
					<ul class="info"> 
						<li><a>Summer Store</a></li>
						<li><a>My Cart</a></li>
					</ul>
					<h4>Follow Us</h4>
					<div class="agileits_social_button">
						<ul>
							<li><a href="#" class="facebook"> </a></li>
							<li><a href="#" class="twitter"> </a></li>
							<li><a href="#" class="google"> </a></li>
							<li><a href="#" class="pinterest"> </a></li>
						</ul>
					</div>
					<h4>Share This</h4>
					<div class="agileits_social_button">
						<div class="share-this sharethis-inline-share-buttons"></div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
		<div class="footer-copy">
			<a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>
			<div class="container">
				<p>&copy;2017 Con�u par <a href="http://w3layouts.com" target="_blank">W3layouts</a> et <a href="https://www.thinktech.sn" target="_blank">ThinkTech</a></p>
			</div>
		</div>
	</div>
<!-- //footer -->
<script src="templates/fashion/js/bundle.js"></script> 
<script type="text/javascript" src="js/metamorphosis.js"></script>
<script type="text/javascript" src="templates/fashion/js/template.js" async defer></script>
</body>
</html>