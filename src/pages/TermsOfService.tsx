import React from "react";
import TermsOfServiceComponent from "../components/Legal/TermsOfServiceComponent";
import ScrollToTop from '../hooks/ScrollToTop';

const TermsOfService : React.FC = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <TermsOfServiceComponent />
    </React.Fragment>
  );
};

export default TermsOfService;
