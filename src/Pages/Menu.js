import React from "react";
import Hero from "../Component/Hero";
import RecipeList from "../Sections/RecipeList";

const Menu = () => {
  return (
    <div className="page-template page-template-page-templates page-template-full_width page-template-page-templatesfull_width-php page page-id-2322 wp-custom-logo wp-embed-responsive ltr cakecious-pro-ver-1-2-0-beta2 theme-cakecious woocommerce-no-js cakecious-page-layout-full-width cakecious-ver-5-0 wpb-js-composer js-comp-ver-6.9.0 vc_responsive">
      <div id="canvas" className="cakecious-canvas">
        <div id="page" className="site">
          <Hero title="Menu" />
          <div
            id="content"
            className="cakecious-content site-content cakecious-section cakecious-section-default cakecious-content-layout-right-sidebar"
          >
            <div className="cakecious-content-inner cakecious-section-inner">
              <div className="cakecious-wrapper">
                <div className="cakecious-content-row">
                  <div id="content" className="site-content">
                    <article
                      id="post-2322"
                      className="entry post-2322 page type-page status-publish hentry"
                    >
                     
                      <RecipeList/>



                     
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
