import React from 'react'

const NewsLetter = () => {
  return (
    <section class="newsletter_area">
      <div class="container">
        <div class="newsletter_inner">
          <div class="row">
            <div class="col-lg-6">
              <div class="news_left_text">
                <h4>
                  Join our Newsletter list to get all the latest offers,
                  discounts and other benefits.
                </h4>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="newsletter_form">
                <div class="input-group">
                  {/* <!-- Begin MailChimp Signup Form --> */}
                  <div id="mc_embed_signup">
                    <form
                      action="https://templatation.us11.list-manage.com/subscribe/post?u=4068f63e96051cde12a31ae2a&amp;id=be080264ac"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      class="validate"
                      target="_blank"
                      novalidate=""
                    >
                      <div id="mc_embed_signup_scroll">
                        <h2>Subscribe to our mailing list</h2>
                        <div class="indicates-required">
                          <span class="asterisk">*</span>
                          indicates required
                        </div>
                        <div class="mc-field-group">
                          <label for="mce-EMAIL">
                            Email Address <span class="asterisk">*</span>
                          </label>
                          <input
                            type="email"
                            value=""
                            name="EMAIL"
                            placeholder="Email Address"
                            class="required email"
                            id="mce-EMAIL"
                          />
                        </div>
                        <div id="mce-responses" class="clear">
                          <div
                            class="response"
                            id="mce-error-response"
                            style={{ display: "none" }}
                          ></div>
                          <div
                            class="response"
                            id="mce-success-response"
                            style={{ display: "none" }}
                          ></div>
                        </div>
                        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                        <div
                          style={{ position: "absolute", left: "-5000px" }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_4068f63e96051cde12a31ae2a_be080264ac"
                            tabindex="-1"
                            value=""
                          />
                        </div>
                        <div class="clear">
                          <input
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            class="button"
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* <!--End mc_embed_signup--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter
