import React from "react";
import TermsOfServiceComponent from "../components/Legal/TermsOfServiceComponent";
import ScrollToTop from '../hooks/ScrollToTop';

type Props = {};

const TermsOfService = (props: Props) => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <TermsOfServiceComponent />
    </React.Fragment>
  );
};

export default TermsOfService;
