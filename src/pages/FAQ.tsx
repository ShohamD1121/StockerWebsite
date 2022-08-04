import React from "react";
import FAQComponent from "../components/FAQ/FAQComponent";
import ScrollToTop from '../hooks/ScrollToTop';

type Props = {};

const FAQ = (props: Props) => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <FAQComponent />
    </React.Fragment>
  );
};

export default FAQ;
