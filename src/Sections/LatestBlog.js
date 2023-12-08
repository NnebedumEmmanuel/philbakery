import React from "react";
import { Link } from "react-router-dom";

const LatestBlog = () => {
  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="false"
      class="vc_row wpb_row vc_row-fluid latest_news_area p_100"
    >
      <div class="wpb_column vc_column_container vc_col-sm-12">
        <div class="vc_column-inner">
          <div class="wpb_wrapper">
            <div class="wpb_text_column wpb_content_element  vc_custom_1530102247053 main_title">
              <div class="wpb_wrapper">
                <h2>Latest Blog</h2>
                <h5>an turn into your instructor your helper, your</h5>
              </div>
            </div>
            <div class="vc_row wpb_row vc_inner vc_row-fluid">
              <div class="wpb_column vc_column_container vc_col-sm-4">
                <div class="vc_column-inner">
                  <div class="wpb_wrapper">
                    <div class="l_news_image">
                      <div class="l_news_img">
                        <img src="images/l-news-1.jpg" alt="" />
                      </div>
                      <div class="l_news_hover">
                        <a href="#">
                          <h4>Best ways to create a extra ordinary cake.</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wpb_column vc_column_container vc_col-sm-8">
                <div class="vc_column-inner">
                  <div class="wpb_wrapper">
                    <div class="tt-post-wrapper ">
                      <div class="row">
                        <div class="col-lg-6 col-md-6">
                          <div class="l_news_item">
                            <div class="l_news_img">
                              <Link to="/">
                                <img
                                  width="370"
                                  height="200"
                                  src="images/blog-1-370x200.jpg"
                                  class="img-fluid wp-post-image"
                                  alt=""
                                  decoding="async"
                                  loading="lazy"
                                />
                              </Link>
                            </div>
                            <div class="l_news_text">
                              <Link to="/">
                                <h5>June 3, 2020</h5>
                              </Link>
                              
                                 <Link to="/">
                              
                                <h4>These cases are simple Standard</h4>
                              </Link>{" "}
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit sed. Eiusmod tempor. incididu nt
                              ut labore et dolore magna aliqua. ...
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6 col-md-6">
                          <div class="l_news_item">
                            <div class="l_news_img">
                           <Link to="/">
                                <img
                                  width="370"
                                  height="200"
                                  src="images/blog-2-370x200.jpg"
                                  class="img-fluid wp-post-image"
                                  alt=""
                                  decoding="async"
                                  loading="lazy"
                                />
                              </Link>
                            </div>
                            <div class="l_news_text">
                              <Link to="/">
                                <h5>May 14, 2020</h5>
                              </Link>
                              <Link to="/">
                                <h4>Incapable of drawing an Image</h4>
                              </Link>{" "}
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit sed. Eiusmod tempor. incididu nt
                              ut labore et dolore magna aliqua. ...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default LatestBlog;
