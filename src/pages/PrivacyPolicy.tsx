import React from "react";
import PrivacyPolicyComponent from "../components/Legal/PrivacyPolicyComponent";
import ScrollToTop from "../hooks/ScrollToTop";

type Props = {};

const PrivacyPolicy = (props: Props) => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <PrivacyPolicyComponent />
    </React.Fragment>
  );
};

export default PrivacyPolicy;
