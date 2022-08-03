import React from "react";
import Header from "../components/Header/Header";
import Testimonials from "../components/Testimonials/Testimonials";
import Features from "../components/Features/Features";

type Props = {};

const Home = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Testimonials />
      <Features />
    </React.Fragment>
  );
};

export default Home;
