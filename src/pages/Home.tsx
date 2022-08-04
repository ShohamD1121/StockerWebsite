import React from "react";
import Header from "../components/Header/Header";
import Testimonials from "../components/Testimonials/Testimonials";
import Features from "../components/Features/Features";
import ScrollToTop from '../hooks/ScrollToTop';

type Props = {};

const Home = (props: Props) => {
  return (
    <React.Fragment>
      <ScrollToTop/>
      <Header />
      <Testimonials />
      <Features />
    </React.Fragment>
  );
};

export default Home;
