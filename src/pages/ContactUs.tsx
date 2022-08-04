import React from "react";
import ContactForm from "../components/ContactUs/ContactForm";
import ScrollToTop from "../hooks/ScrollToTop";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <ContactForm />
    </React.Fragment>
  );
};

export default ContactUs;
