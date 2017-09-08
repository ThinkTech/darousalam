<%@ taglib prefix="s" uri="/struts-tags"%>
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
									<div class="rating">
											<div class="rating-left">
												<a><i class="fa fa-star-o" aria-hidden="true"></i></a>
											</div>
											<div class="rating-left">
												<a><i class="fa fa-star-o" aria-hidden="true"></i></a>
											</div>
											<div class="rating-left">
												<a><i class="fa fa-star-o" aria-hidden="true"></i></a>
											</div>
											<div class="rating-left">
												<a><i class="fa fa-star-o" aria-hidden="true"></i></a>
											</div>
											<div class="rating-left">
												<a><i class="fa fa-star-o" aria-hidden="true"></i></a>
											</div>
											<div class="clearfix"> </div>
									</div>
									<div class="simpleCart_shelfItem">
										<p><span>${product.price} CFA</span> <i class="item_price">${product.price} CFA</i></p>
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
	