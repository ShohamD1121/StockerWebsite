import React from "react";
import PrivacyPolicyComponent from "../components/Legal/PrivacyPolicyComponent";
import ScrollToTop from "../hooks/ScrollToTop";

const PrivacyPolicy: React.FC = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <PrivacyPolicyComponent />
    </React.Fragment>
  );
};

export default PrivacyPolicy;
