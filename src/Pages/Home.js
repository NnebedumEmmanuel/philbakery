import React from 'react'
import Carousal from '../Component/Carousal';

const Home = () => {
  return (
    <div
      id="content"
      className="cakecious-content site-content cakecious-section cakecious-section-default cakecious-content-layout-right-sidebar"
    >
      <div className="cakecious-content-inner cakecious-section-inner">
        <div className="cakecious-wrapper">
          <div className="cakecious-content-row">
            <div id="content" className="site-content">
								<article id="post-2687" className="entry post-2687 page type-page status-publish hentry"
									role="article">

                  <Carousal/>

                  </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
