import React from 'react'
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <div
      id="cakecious-header-main-bar"
      class="cakecious-header-main-bar cakecious-header-section cakecious-section cakecious-section-default cakecious-header-menu-highlight-none"
    >
      <div class="cakecious-header-main-bar-inner cakecious-section-inner">
        <div class="cakecious-wrapper">
          <div class="cakecious-header-main-bar-row cakecious-header-row ">
            <div class="cakecious-header-main-bar-left cakecious-header-column">
              <div class="cakecious-header-logo site-branding menu">
                <div class="site-title menu-item h1">
                  <Link to="/" rel="home" class="cakecious-menu-item-link">
                    <span class="cakecious-default-logo cakecious-logo">
                      <span class="cakecious-logo-image">Philcake</span>
                      <span class="screen-reader-text">Main demo</span>
                    </span>
                    <span class="cakecious-sticky-logo cakecious-logo">
                      <span class="screen-reader-text">Main demo</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="cakecious-header-main-bar-right cakecious-header-column">
              <nav
                class="cakecious-header-menu-1 cakecious-header-menu site-navigation"
                role="navigation"
                itemscope=""
                itemtype="https://schema.org/SiteNavigationElement"
                aria-label="Header Menu 1"
              >
                <ul id="menu-primary-menu-1" class="menu cakecious-hover-menu">
                  <li class="menu-item menu-item-type-custom menu-item-object-custom ">
                    <Link
                      to="/"
                      class="cakecious-menu-item-link "
                      onClick={function () {
                        setTimeout(() => {
                          window.location = "/";
                        }, 200);
                      }}
                    >
                      <span class="cakecious-menu-item-title">Home</span>
                    </Link>
                  </li>
                  {/* <li
													class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2882">
													<a href="https://cakeciouswp.bolvosites.com/demo1/our-cakes/"
														class="cakecious-menu-item-link "><span
															class="cakecious-menu-item-title">Our Cakes</span></a></li> */}
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2883">
                    <Link
                      to="/Menu"
                      class="cakecious-menu-item-link"
                      onClick={function () {
                        setTimeout(() => {
                          window.location = "/";
                        }, 200);
                      }}
                    >
                      <span class="cakecious-menu-item-title">Menu</span>
                    </Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3077">
                    <Link href="/About" class="cakecious-menu-item-link ">
                      <span class="cakecious-menu-item-title">About Us</span>
                    </Link>
                    {/* <ul class="sub-menu">
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2881">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/about-us/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            About Us
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2880">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/our-chefs/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Our Chefs
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2879">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/testimonials/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Testimonials
                          </span>
                        </a>
                      </li>
                    </ul> */}
                  </li>

                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2885">
                    <Link href="/Services" class="cakecious-menu-item-link ">
                      <span class="cakecious-menu-item-title">Services</span>
                    </Link>
                    {/* <ul class="sub-menu">
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2878">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/services/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Services
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2890">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/gallery-classic/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Gallery Classic
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2888">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/faq/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">FAQ</span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2875">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/what-we-make/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            What We Make
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2887">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/special-recipe/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Special Recipe
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2891">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/404notfound"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            404 Page
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2886">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/coming-soon/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Coming Soon
                          </span>
                        </a>
                      </li>
                    </ul> */}
                  </li>

                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2894">
                    <Link href="/Blog" class="cakecious-menu-item-link ">
                      <span class="cakecious-menu-item-title">Blog</span>
                    </Link>
                    {/* <ul class="sub-menu">
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2893">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/blog/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Blog with Sidebar
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2892">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/blog-2-column/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Blog 2 Column
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3250">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/2020/06/03/these-cases-are-simple-standard/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Standard Single Post
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3257">
                        <a href="#" class="cakecious-menu-item-link ">
                          <span class="cakecious-menu-item-title">
                            Post Types
                          </span>
                          <span
                            class="cakecious-icon cakecious-dropdown-sign"
                            title=""
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 64 64"
                              width="64"
                              height="64"
                            >
                              <path d="M43.71,32a3,3,0,0,1-.88,2.12L25.12,51.83a2,2,0,0,1-2.83,0l-1.41-1.42a2,2,0,0,1,0-2.82L36.47,32,20.88,16.41a2,2,0,0,1,0-2.82l1.41-1.42a2,2,0,0,1,2.83,0L42.83,29.88A3,3,0,0,1,43.71,32Z"></path>
                            </svg>
                          </span>
                        </a>
                        <ul class="sub-menu">
                          <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3256">
                            <a
                              href="https://cakeciouswp.bolvosites.com/demo1/2020/06/03/these-cases-are-simple-standard/"
                              class="cakecious-menu-item-link "
                            >
                              <span class="cakecious-menu-item-title">
                                Standard Post
                              </span>
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3251">
                            <a
                              href="https://cakeciouswp.bolvosites.com/demo1/2020/05/14/incapable-of-drawing-a-stroke-image/"
                              class="cakecious-menu-item-link "
                            >
                              <span class="cakecious-menu-item-title">
                                Image Post
                              </span>
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3252">
                            <a
                              href="https://cakeciouswp.bolvosites.com/demo1/2020/05/12/it-is-an-almost-life-gallery/"
                              class="cakecious-menu-item-link "
                            >
                              <span class="cakecious-menu-item-title">
                                Gallery Post
                              </span>
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3253">
                            <a
                              href="https://cakeciouswp.bolvosites.com/demo1/2020/05/11/many-desktop-publishing-audio/"
                              class="cakecious-menu-item-link "
                            >
                              <span class="cakecious-menu-item-title">
                                Audio Post
                              </span>
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3255">
                            <a
                              href="https://cakeciouswp.bolvosites.com/demo1/2020/05/08/a-country-where-roasted-quote/"
                              class="cakecious-menu-item-link "
                            >
                              <span class="cakecious-menu-item-title">
                                Quote Post
                              </span>
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-3254">
                            <a
                              href="https://cakeciouswp.bolvosites.com/demo1/2020/05/09/this-mistaken-idea-of-video/"
                              class="cakecious-menu-item-link "
                            >
                              <span class="cakecious-menu-item-title">
                                Video Post
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul> */}
                  </li>

                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2898">
                    <Link href="/Shop" class="cakecious-menu-item-link ">
                      <span class="cakecious-menu-item-title">Shop</span>
                    </Link>
                    {/* <ul class="sub-menu">
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2897">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/shop/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Main Shop
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-3114">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/product/custom-cake-builder/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Custom Cake Builder
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-3115">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/product/product-1/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Standard Product
                          </span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2896">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/cart/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">Cart</span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2973">
                        <a
                          href="https://cakeciouswp.bolvosites.com/demo1/checkout/"
                          class="cakecious-menu-item-link "
                        >
                          <span class="cakecious-menu-item-title">
                            Checkout
                          </span>
                        </a>
                      </li>
                    </ul> */}
                  </li>

                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2877">
                    <a href="/ContactUs" class="cakecious-menu-item-link ">
                      <span class="cakecious-menu-item-title">Contact Us</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNav
