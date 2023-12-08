import React from "react";
import Hero from "../Component/Hero";
import RecipeList from "../Sections/RecipeList";
import RecipeTitle from "../Component/RecipeTitle";
import RecipeItems from "../Component/RecipeItems";
import BakeryImages from "../Component/BakeryImages";

const Menu = () => {
  return (
    <div className="page-template page-template-page-templates page-template-full_width page-template-page-templatesfull_width-php page page-id-2322 wp-custom-logo wp-embed-responsive ltr cakecious-pro-ver-1-2-0-beta2 theme-cakecious woocommerce-no-js cakecious-page-layout-full-width cakecious-ver-5-0 wpb-js-composer js-comp-ver-6.9.0 vc_responsive">
      <div id="canvas" class="cakecious-canvas">
        <div id="page" class="site">
         
          <Hero title="Menu" />

          <div
            id="content"
            class="cakecious-content site-content cakecious-section cakecious-section-default cakecious-content-layout-right-sidebar"
          >
            <div class="cakecious-content-inner cakecious-section-inner">
              <div class="cakecious-wrapper">
                <div class="cakecious-content-row">
                  <div id="content" class="site-content">
                    <article
                      id="post-2322"
                      class="entry post-2322 page type-page status-publish hentry"
                      role="article"
                    >
                      <div
                        data-vc-full-width="true"
                        data-vc-full-width-init="false"
                        class="vc_row wpb_row vc_row-fluid price_list_area p_100 vc_custom_1612520281879"
                      >
                        <div class="price_list_inner wpb_column vc_column_container vc_col-sm-12">
                          <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                              <RecipeTitle/>

                             <RecipeItems/>
                            

                              <BakeryImages/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="vc_row-full-width vc_clearfix"></div>
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
