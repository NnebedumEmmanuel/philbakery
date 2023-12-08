import React, { useEffect } from 'react'
import Carousal from '../Component/Carousal';
import Welcome from '../Sections/Welcome';
import Featured from '../Sections/Featured';
import Special from '../Sections/Special';
import Services from '../Sections/Services';
import Menu from '../Sections/Menu';
import CustomerReview from '../Sections/CustomerReview';
import Chefs from '../Sections/Chefs';
import LatestBlog from '../Sections/LatestBlog';
import { useLocation } from 'react-router-dom';



const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.reload) {
      window.location.reload();
    }
  }, [location]);
      
 

  return (
    
    
    <div
      id="content"
      className="cakecious-content site-content cakecious-section cakecious-section-default cakecious-content-layout-right-sidebar"
    >
      <div className="cakecious-content-inner cakecious-section-inner">
        <div className="cakecious-wrapper">
          <div className="cakecious-content-row">
            <div id="content" className="site-content">
              <article
                id="post-2687"
                className="entry post-2687 page type-page status-publish hentry"
                role="article"
              >
                <Carousal />
                <Welcome />
                {/* <Featured/> */}
                <div class="vc_row-full-width vc_clearfix"></div>
                <Special />
                <div class="vc_row-full-width vc_clearfix"></div>
                <Services />
                <div class="vc_row-full-width vc_clearfix"></div>
                <Menu />
                <div class="vc_row-full-width vc_clearfix"></div>
                <CustomerReview />
                <div class="vc_row-full-width vc_clearfix"></div>
                <Chefs />
                <div class="vc_row-full-width vc_clearfix"></div>
                <LatestBlog />
                <div class="vc_row-full-width vc_clearfix"></div>


              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
