import React from 'react'
import NewsLetter from '../Component/NewsLetter';

const Footer = () => {
  return (
    <div
      id="colophon"
      class="site-footer cakecious-footer"
      role="contentinfo"
      itemscope=""
      itemtype="https://schema.org/WPFooter"
    >
      <NewsLetter />

      <div
        id="cakecious-footer-widgets-bar"
        class="cakecious-footer-widgets-bar cakecious-footer-section cakecious-section cakecious-section-default cakecious-widget-title-alignment-left cakecious-widget-title-decoration-none"
      >
        <div class="cakecious-footer-widgets-bar-inner cakecious-section-inner">
          <div class="cakecious-wrapper">
            <div class="cakecious-footer-widgets-bar-row cakecious-footer-widgets-bar-columns-4">
              <div class="cakecious-footer-widgets-bar-column-1 cakecious-footer-widgets-bar-column">
                <div id="media_image-1" class="widget widget_media_image">
                  <h1 className=''> Philcake</h1>
                </div>
                <div id="text-2" class="widget widget_text">
                  <div class="textwidget">
                    <p>
                      Cakecious is a WordPress theme for Bakery and related
                      businesses.
                    </p>
                  </div>
                </div>
                <div
                  id="custom_html-2"
                  class="widget_text widget widget_custom_html"
                >
                  <div class="textwidget custom-html-widget">
                    <aside class="f_widget f_about_widget">
                      <ul class="nav">
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </aside>
                  </div>
                </div>
              </div>
              <div class="cakecious-footer-widgets-bar-column-2 cakecious-footer-widgets-bar-column">
                <div
                  id="custom_html-6"
                  class="widget_text widget widget_custom_html"
                >
                  <h2 class="widget-title">Quick links</h2>
                  <div class="textwidget custom-html-widget">
                    <ul class="list_style">
                      <li>
                        <a href="#">Your Account</a>
                      </li>
                      <li>
                        <a href="#">View Order</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditionis</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cakecious-footer-widgets-bar-column-3 cakecious-footer-widgets-bar-column">
                <div
                  id="custom_html-7"
                  class="widget_text widget widget_custom_html"
                >
                  <h2 class="widget-title">Work Times</h2>
                  <div class="textwidget custom-html-widget">
                    <ul class="list_style">
                      <li>Mon. : Thu.: 8 am - 8 pm</li>
                      <li>Fri. : 8 am - 8 pm</li>
                      <li>Sat. : 9am - 4pm</li>
                      <li>Sun. : Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cakecious-footer-widgets-bar-column-4 cakecious-footer-widgets-bar-column">
                <div
                  id="custom_html-8"
                  class="widget_text widget widget_custom_html"
                >
                  <h2 class="widget-title">Contact Info</h2>
                  <div class="textwidget custom-html-widget">
                    <h4>(1800) 574 9687</h4>
                    <p>
                      Cakecious Store <br />
                      256, baker Street, New York, 5245
                    </p>
                    <h5>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        class="__cf_email__"
                        data-cfemail="9af9fbf1fff9f3f5efe9fefff7f5dafff7fbf3f6b4f9f5f7"
                      >
                        [email�&nbsp;protected]
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="cakecious-footer-bottom-bar"
        class="cakecious-footer-bottom-bar site-info cakecious-footer-section cakecious-section cakecious-section-default"
      >
        <div class="cakecious-footer-bottom-bar-inner cakecious-section-inner">
          <div class="cakecious-wrapper">
            <div class="cakecious-footer-bottom-bar-row cakecious-footer-row ">
              <div class="cakecious-footer-bottom-bar-left cakecious-footer-bottom-bar-column">
                <div class="cakecious-footer-copyright">
                  <div class="cakecious-footer-copyright-content">
                    Cakecious{" "}
                    <a href="https://cakeciouswp.bolvosites.com/demo1">
                      Main demo
                    </a>{" "}
                    © 2023 All Rights Reserved.
                  </div>
                </div>
              </div>
              <div class="cakecious-footer-bottom-bar-right cakecious-footer-bottom-bar-column">
                <div class="cakecious-footer-html-1">
                  <div>
                    Developed by <a href="https://bolvo.com">Bolvo.com</a>.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
