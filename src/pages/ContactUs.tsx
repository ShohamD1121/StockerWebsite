import React from "react";
import ContactForm from "../components/ContactUs/ContactForm";
import ScrollToTop from "../hooks/ScrollToTop";

const ContactUs : React.FC = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <ContactForm />
    </React.Fragment>
  );
};

export default ContactUs;
