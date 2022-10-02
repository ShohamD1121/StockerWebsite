import React from "react";
import FAQComponent from "../components/FAQ/FAQComponent";
import ScrollToTop from "../hooks/ScrollToTop";

const FAQ: React.FC = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <FAQComponent />
    </React.Fragment>
  );
};

export default FAQ;
