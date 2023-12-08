import React from 'react'

const Map = () => {
  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="false"
      data-vc-stretch-content="true"
      class="vc_row wpb_row vc_row-fluid map_area vc_custom_1612531776457 vc_row-no-padding"
    >
      <div class="wpb_column vc_column_container vc_col-sm-12">
        <div class="vc_column-inner">
          <div class="wpb_wrapper">
            <div class="wpb_gmaps_widget wpb_content_element vc_custom_1529164937171">
              <div class="wpb_wrapper">
                <div class="wpb_map_wraper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051"
                    width="600"
                    height="500"
                    frameborder="0"
                    style={{border:"0"}}
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map
