import React from "react";

const ContactForm = () => {
  return (
    <div class="wpb_column vc_column_container vc_col-sm-7">
      <div class="vc_column-inner">
        <div class="wpb_wrapper">
          <div
            class="wpcf7 no-js"
            id="wpcf7-f2577-p2340-o1"
            lang="en-US"
            dir="ltr"
          >
            <div class="screen-reader-response">
              <p role="status" aria-live="polite" aria-atomic="true"></p>{" "}
              <ul></ul>
            </div>
            <form
              action="/demo1/contact-us/#wpcf7-f2577-p2340-o1"
              method="post"
              class="wpcf7-form init demo"
              aria-label="Contact form"
              novalidate="novalidate"
              data-status="init"
            >
              <div style={{display: "none"}}>
                <input type="hidden" name="_wpcf7" value="2577" />
                <input type="hidden" name="_wpcf7_version" value="5.7.7" />
                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                <input
                  type="hidden"
                  name="_wpcf7_unit_tag"
                  value="wpcf7-f2577-p2340-o1"
                />
                <input
                  type="hidden"
                  name="_wpcf7_container_post"
                  value="2340"
                />
                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
              </div>
              <div class="row contact_us_form">
                <div class="form-group col-md-6">
                  <p>
                    <span class="wpcf7-form-control-wrap" data-name="your-name">
                      <input
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Your Name"
                        value=""
                        type="text"
                        name="your-name"
                      />
                    </span>
                  </p>
                </div>
                <div class="form-group col-md-6">
                  <p>
                    <span
                      class="wpcf7-form-control-wrap"
                      data-name="your-email"
                    >
                      <input
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Email Address"
                        value=""
                        type="email"
                        name="your-email"
                      />
                    </span>
                  </p>
                </div>
                <div class="form-group col-md-12">
                  <p>
                    <span
                      class="wpcf7-form-control-wrap"
                      data-name="your-subject"
                    >
                      <input
                        size="40"
                        class="wpcf7-form-control wpcf7-text form-control"
                        aria-invalid="false"
                        placeholder="Subject"
                        value=""
                        type="text"
                        name="your-subject"
                      />
                    </span>
                  </p>
                </div>
                <div class="form-group col-md-12">
                  <p>
                    <span
                      class="wpcf7-form-control-wrap"
                      data-name="your-message"
                    >
                      <textarea
                        cols="40"
                        rows="10"
                        class="wpcf7-form-control wpcf7-textarea form-control"
                        aria-invalid="false"
                        placeholder="Write message"
                        name="your-message"
                      ></textarea>
                    </span>
                  </p>
                </div>
                <div class="form-group col-md-12">
                  <p>
                    <input
                      class="wpcf7-form-control has-spinner wpcf7-submit btn order_s_btn form-control"
                      type="submit"
                      value="Submit now"
                    />
                  </p>
                </div>
              </div>
              <div class="wpcf7-response-output" aria-hidden="true"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
