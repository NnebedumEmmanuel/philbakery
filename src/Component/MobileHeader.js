import React from 'react'

const MobileHeader = () => {
  return (
    <div id="mobile-header" class="cakecious-header-mobile cakecious-header">
					<div id="cakecious-header-mobile-main-bar"
						class="cakecious-header-mobile-main-bar cakecious-header-section cakecious-section cakecious-section-default">
						<div class="cakecious-header-mobile-main-bar-inner cakecious-section-inner">
							<div class="cakecious-wrapper">
								<div class="cakecious-header-mobile-main-bar-row cakecious-header-row ">
									<div class="cakecious-header-mobile-main-bar-left cakecious-header-column">
										<div class="cakecious-header-mobile-logo site-branding menu">
											<div class="site-title menu-item h1">
												<a href="https://cakeciouswp.bolvosites.com/demo1/" rel="home"
													class="cakecious-menu-item-link">
													<span class="cakecious-default-logo cakecious-logo"><span
															class="cakecious-logo-image">
															PhilBakery
														
														</span><span
															class="screen-reader-text">Main demo</span></span>
													<span class="cakecious-sticky-logo cakecious-logo"><span
															class="cakecious-logo-image"><img width="183" height="32"
																src="images/logo-2.png"
																class="attachment-full size-full" alt=""
																decoding="async" loading="lazy" /></span><span
															class="screen-reader-text">Main demo</span></span>
												</a>
											</div>
										</div>
									</div>
									<div class="cakecious-header-mobile-main-bar-right cakecious-header-column">
										<div
											class="cakecious-header-shopping-cart-link cakecious-header-shopping-cart menu">
											<div class="menu-item">
												<a href="https://cakeciouswp.bolvosites.com/demo1/cart/"
													class="shopping-cart-link cakecious-menu-item-link">
													<span class="screen-reader-text">Shopping Cart</span>


													<span class="shopping-cart-icon">
														<span class="cakecious-icon cakecious-menu-icon" title=""
															aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 64 64" width="64" height="64">
																<circle cx="20" cy="58" r="6"></circle>
																<circle cx="46" cy="58" r="6"></circle>
																<path
																	d="M63.41,11.2A3,3,0,0,0,61,10H14.84L14,2.6A3,3,0,0,0,11,0H2A2,2,0,0,0,0,2V4A2,2,0,0,0,2,6H8.3L13,47.4A3,3,0,0,0,16,50H53a2,2,0,0,0,2-2V46a2,2,0,0,0-2-2H18.7l-.79-7h37.3A2.8,2.8,0,0,0,58,34.8l5.9-21A3.05,3.05,0,0,0,63.41,11.2Z">
																</path>
															</svg></span> </span>

													<span class="shopping-cart-count" data-count="0">0</span>

												</a>
											</div>
										</div>
										<div class="cakecious-header-mobile-vertical-toggle">
											<button class="cakecious-popup-toggle cakecious-toggle"
												data-target="mobile-vertical-header" aria-expanded="false">
												<span class="cakecious-icon cakecious-menu-icon" title=""
													aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 64 64" width="64" height="64">
														<path
															d="M60,35H4a2,2,0,0,1-2-2V31a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,35Zm0-22H4a2,2,0,0,1-2-2V9A2,2,0,0,1,4,7H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,13Zm0,44H4a2,2,0,0,1-2-2V53a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,57Z">
														</path>
													</svg></span> <span class="screen-reader-text">Mobile Menu</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
  )
}

export default MobileHeader
