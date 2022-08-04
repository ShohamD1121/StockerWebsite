import React from "react";
import DownloadComponent from "../components/Download/DownloadComponent";
import ScrollToTop from '../hooks/ScrollToTop';

type Props = {};

const Download = (props: Props) => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <DownloadComponent />
    </React.Fragment>
  );
};

export default Download;
