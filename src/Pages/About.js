import React, { useEffect } from 'react'
import Hero from '../Component/Hero';
import AboutTitle from '../Component/AboutTitle';
import BakeryImages from '../Component/BakeryImages';
import OurMission from '../Component/OurMission';
import CustomerReview from '../Sections/CustomerReview';
import Chefs from '../Sections/Chefs';
import { useLocation } from 'react-router-dom';

const About = () => {
   const location = useLocation();

   useEffect(() => {
     // This effect will trigger when the component is rendered
     if (location.state && location.state.fromDifferentPage) {
       window.location.reload(); // Reload the entire page
     }
   }, [location]);
   
  return (
    <div class="page-template page-template-page-templates page-template-full_width page-template-page-templatesfull_width-php page page-id-2332 wp-custom-logo wp-embed-responsive ltr cakecious-pro-ver-1-2-0-beta2 theme-cakecious woocommerce-no-js cakecious-page-layout-full-width cakecious-ver-5-0 wpb-js-composer js-comp-ver-6.9.0 vc_responsive">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-dark-grayscale">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0 0.49803921568627"></feFuncR>
              <feFuncG type="table" tableValues="0 0.49803921568627"></feFuncG>
              <feFuncB type="table" tableValues="0 0.49803921568627"></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-grayscale">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0 1"></feFuncR>
              <feFuncG type="table" tableValues="0 1"></feFuncG>
              <feFuncB type="table" tableValues="0 1"></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-purple-yellow">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR
                type="table"
                tableValues="0.54901960784314 0.98823529411765"
              ></feFuncR>
              <feFuncG type="table" tableValues="0 1"></feFuncG>
              <feFuncB
                type="table"
                tableValues="0.71764705882353 0.25490196078431"
              ></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-blue-red">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0 1"></feFuncR>
              <feFuncG type="table" tableValues="0 0.27843137254902"></feFuncG>
              <feFuncB
                type="table"
                tableValues="0.5921568627451 0.27843137254902"
              ></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-midnight">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0 0"></feFuncR>
              <feFuncG type="table" tableValues="0 0.64705882352941"></feFuncG>
              <feFuncB type="table" tableValues="0 1"></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-magenta-yellow">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0.78039215686275 1"></feFuncR>
              <feFuncG type="table" tableValues="0 0.94901960784314"></feFuncG>
              <feFuncB
                type="table"
                tableValues="0.35294117647059 0.47058823529412"
              ></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-purple-green">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR
                type="table"
                tableValues="0.65098039215686 0.40392156862745"
              ></feFuncR>
              <feFuncG type="table" tableValues="0 1"></feFuncG>
              <feFuncB
                type="table"
                tableValues="0.44705882352941 0.4"
              ></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-blue-orange">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0.098039215686275 1"></feFuncR>
              <feFuncG type="table" tableValues="0 0.66274509803922"></feFuncG>
              <feFuncB
                type="table"
                tableValues="0.84705882352941 0.41960784313725"
              ></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>{" "}
      <a class="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>
      
      <div id="canvas" class="cakecious-canvas">
        <div id="page" class="site">
         
         <Hero title="About-us"/>
          <div
            id="content"
            class="cakecious-content site-content cakecious-section cakecious-section-default cakecious-content-layout-right-sidebar"
          >
            <div class="cakecious-content-inner cakecious-section-inner">
              <div class="cakecious-wrapper">
                <div class="cakecious-content-row">
                  <div id="content" class="site-content">
                    <article
                      id="post-2332"
                      class="entry post-2332 page type-page status-publish hentry"
                      role="article"
                    >
                      <div
                        data-vc-full-width="true"
                        data-vc-full-width-init="false"
                        class="vc_row wpb_row vc_row-fluid our_bakery_area p_100 vc_custom_1612520303691"
                      >
                        <div class="wpb_column vc_column_container vc_col-sm-12">
                          <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                              <AboutTitle/>
                              <BakeryImages/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="vc_row-full-width vc_clearfix"></div>
                      <div
                        data-vc-full-width="true"
                        data-vc-full-width-init="false"
                        class="vc_row wpb_row vc_row-fluid bakery_video_area"
                      >
                        <div class="video_inner wpb_column vc_column_container vc_col-sm-12">
                          <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                              <div class="wpb_text_column wpb_content_element ">
                                <div class="wpb_wrapper">
                                  <h3>Real Taste</h3>
                                  <p>
                                    A light, sour wheat dough with roasted
                                    walnuts and freshly picked rosemary, thyme,
                                    poppy seeds, parsley and sage
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="vc_row-full-width vc_clearfix"></div>
                      {/* MIssion */}
                     <OurMission/>
                      <div class="vc_row-full-width vc_clearfix"></div>
                     <CustomerReview/>
                      <div class="vc_row-full-width vc_clearfix"></div>
                     <Chefs/>
                      <div class="vc_row-full-width vc_clearfix"></div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
         
        </div>
      </div>
      <div
        id="products-off-canvas-filters"
        class="cakecious-products-off-canvas-filters cakecious-products-off-canvas-filters-position-left cakecious-popup"
      >
        <div class="cakecious-popup-background cakecious-popup-close"></div>

        <div class="cakecious-products-off-canvas-filters-bar cakecious-widget-title-alignment-left cakecious-widget-title-decoration-border-bottom cakecious-popup-content woocommerce">
          <div
            id="woocommerce_product_search-2"
            class="widget woocommerce widget_product_search"
          >
            <form
              role="search"
              method="get"
              class="woocommerce-product-search"
              action="https://4oRRofu9YLaZ.com/demo1/"
            >
              <label
                class="screen-reader-text"
                for="woocommerce-product-search-field-0"
              >
                Search for:
              </label>
              <input
                type="search"
                id="woocommerce-product-search-field-0"
                class="search-field"
                placeholder="Search products…"
                value=""
                name="s"
              />
              <button type="submit" value="Search" class="">
                Search
              </button>
              <input type="hidden" name="post_type" value="product" />
              <span
                class="cakecious-icon cakecious-search-icon"
                title=""
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="64"
                  height="64"
                >
                  <path d="M26,46.1a20,20,0,1,1,20-20A20,20,0,0,1,26,46.1ZM63.4,58.5,48.2,43.3a3.67,3.67,0,0,0-2-.8A26.7,26.7,0,0,0,52,26a26,26,0,1,0-9.6,20.2,4.64,4.64,0,0,0,.8,2L58.4,63.4a1.93,1.93,0,0,0,2.8,0l2.1-2.1A1.86,1.86,0,0,0,63.4,58.5Z"></path>
                </svg>
              </span>
            </form>
          </div>
          <div
            id="woocommerce_top_rated_products-2"
            class="widget woocommerce widget_top_rated_products"
          >
            <h2 class="widget-title">Top rated products</h2>
            <ul class="product_list_widget">
              <li>
                <a href="https://4oRRofu9YLaZ.com/demo1/product/product-5/">
                  <img
                    width="300"
                    height="300"
                    src="../wp-content/uploads/sites/14/2020/08/bart-vermeiren-MvprUM2iB3s-unsplash-300x300.jpg"
                    class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                    alt=""
                    decoding="async"
                    loading="lazy"
                    srcset="../wp-content/uploads/sites/14/2020/08/bart-vermeiren-MvprUM2iB3s-unsplash-300x300.jpg 300w, ../wp-content/uploads/sites/14/2020/08/bart-vermeiren-MvprUM2iB3s-unsplash-150x150.jpg 150w, ../wp-content/uploads/sites/14/2020/08/bart-vermeiren-MvprUM2iB3s-unsplash-100x100.jpg 100w"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />{" "}
                  <span class="product-title">Product 5</span>
                </a>
                <del aria-hidden="true">
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      <span class="woocommerce-Price-currencySymbol">$</span>
                      18.00
                    </bdi>
                  </span>
                </del>{" "}
                <ins>
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      <span class="woocommerce-Price-currencySymbol">$</span>
                      16.00
                    </bdi>
                  </span>
                </ins>
              </li>
              <li>
                <a href="https://4oRRofu9YLaZ.com/demo1/product/product-6/">
                  <img
                    width="300"
                    height="300"
                    src="../wp-content/uploads/sites/14/2020/08/simon-birt-ywI8xVS3Qvc-unsplash-300x300.jpg"
                    class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                    alt=""
                    decoding="async"
                    loading="lazy"
                    srcset="../wp-content/uploads/sites/14/2020/08/simon-birt-ywI8xVS3Qvc-unsplash-300x300.jpg 300w, ../wp-content/uploads/sites/14/2020/08/simon-birt-ywI8xVS3Qvc-unsplash-150x150.jpg 150w, ../wp-content/uploads/sites/14/2020/08/simon-birt-ywI8xVS3Qvc-unsplash-100x100.jpg 100w"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />{" "}
                  <span class="product-title">Product 6</span>
                </a>
                <del aria-hidden="true">
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      <span class="woocommerce-Price-currencySymbol">$</span>
                      65.00
                    </bdi>
                  </span>
                </del>{" "}
                <ins>
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      <span class="woocommerce-Price-currencySymbol">$</span>
                      55.00
                    </bdi>
                  </span>
                </ins>
              </li>
              <li>
                <a href="https://4oRRofu9YLaZ.com/demo1/product/product-7/">
                  <img
                    width="300"
                    height="300"
                    src="../wp-content/uploads/sites/14/2020/08/ella-olsson-uG1jwfpCRhg-unsplash-300x300.jpg"
                    class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                    alt=""
                    decoding="async"
                    loading="lazy"
                    srcset="../wp-content/uploads/sites/14/2020/08/ella-olsson-uG1jwfpCRhg-unsplash-300x300.jpg 300w, ../wp-content/uploads/sites/14/2020/08/ella-olsson-uG1jwfpCRhg-unsplash-150x150.jpg 150w, ../wp-content/uploads/sites/14/2020/08/ella-olsson-uG1jwfpCRhg-unsplash-100x100.jpg 100w"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />{" "}
                  <span class="product-title">Product 7</span>
                </a>

                <span class="woocommerce-Price-amount amount">
                  <bdi>
                    <span class="woocommerce-Price-currencySymbol">$</span>45.00
                  </bdi>
                </span>
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>
      <a
        href="#page"
        class="cakecious-scroll-to-top cakecious-scroll-to-top-position-right cakecious-scroll-to-top-display-sticky"
      >
        <span class="cakecious-icon " title="" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="64"
            height="64"
          >
            <path d="M32,20.3a3,3,0,0,0-2.12.88L12.17,38.89a2,2,0,0,0,0,2.83h0l1.42,1.41a2,2,0,0,0,2.82,0L32,27.54,47.59,43.13a2,2,0,0,0,2.82,0l1.42-1.41a2,2,0,0,0,0-2.83h0L34.12,21.18A3,3,0,0,0,32,20.3Z"></path>
          </svg>
        </span>{" "}
        <span class="screen-reader-text">Back to Top</span>
      </a>
    </div>
  );
}

export default About
