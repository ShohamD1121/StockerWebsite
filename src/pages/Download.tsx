import React from "react";
import DownloadComponent from "../components/Download/DownloadComponent";
import ScrollToTop from '../hooks/ScrollToTop';


const Download  : React.FC = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <DownloadComponent />
    </React.Fragment>
  );
};

export default Download;
