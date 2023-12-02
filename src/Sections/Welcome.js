import React from "react";

const Welcome = () => {
  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="false"
      class="vc_row wpb_row vc_row-fluid welcome_bakery_area"
    >
      <div class="wpb_column vc_column_container vc_col-sm-12">
        <div class="vc_column-inner">
          <div class="wpb_wrapper">
            <div class="vc_row wpb_row vc_inner vc_row-fluid welcome_bakery_inner p_100_50 vc_custom_1530526247698">
              <div class="main_title wpb_column vc_column_container vc_col-sm-6">
                <div class="vc_column-inner">
                  <div class="wpb_wrapper">
                    <div class="wpb_text_column wpb_content_element  main_title">
                      <div class="wpb_wrapper">
                        <h2>Welcome to our Bakery</h2>
                        <p>
                          Baked goods have been around for thousands of years.
                          The art of baking was developed early during the Roman
                          Empire.
                        </p>
                      </div>
                    </div>

                    <div class="wpb_text_column wpb_content_element  vc_custom_1530955768122 welcome_left_text">
                      <div class="wpb_wrapper">
                        <p>
                          {" "}
                          It was a highly famous art as Roman citizens loved
                          baked goods and demanded for them frequently for
                          important occasions such as feasts and weddings etc.
                          Due to the fame and desire that the art of baking
                          received, around 300 BC, baking was introduced as an
                          occupation and respectable profession for Romans.
                        </p>
                        <p>
                          <a class="pink_btn" href="#">
                            Know more about us
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="welcome_img wpb_column vc_column_container vc_col-sm-6">
                <div class="vc_column-inner">
                  <div class="wpb_wrapper">
                    <div class="wpb_single_image wpb_content_element vc_align_center  vc_custom_1529151875982">
                      <figure class="wpb_wrapper vc_figure">
                        <div class="vc_single_image-wrapper   vc_box_border_grey">
                          <img
                            width="510"
                            height="363"
                            src="images/welcome-right.jpg"
                            class="vc_single_image-img attachment-full"
                            alt=""
                            decoding="async"
                            loading="lazy"
                            title="welcome-right"
                            srcset="images/welcome-right.jpg 510w, images/welcome-right-300x214.jpg 300w"
                            sizes="(max-width: 510px) 100vw, 510px"
                          />
                        </div>
                      </figure>
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

export default Welcome;
