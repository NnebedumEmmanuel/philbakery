import React from "react";
import ContactForm from "../Component/ContactForm";
import ContactDetail from "../Component/ContactDetail";

const ContactSection = () => {
  return (
    <div class="vc_row wpb_row vc_inner vc_row-fluid contact_form_area p_100 vc_custom_1612531742005">
      <ContactForm />
      <div class="contact_details wpb_column vc_column_container vc_col-sm-5"></div>
      <ContactDetail />
    </div>
  );
};

export default ContactSection;
