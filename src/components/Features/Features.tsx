import React from "react";
import Feature from "./Feature";
import { FaSearch, FaDollarSign, FaNewspaper } from "react-icons/fa";
import Slides from "../../images/Slides.svg";
import Financials from "../../images/Financials.svg";
import NewsAndAnalysis from "../../images/NewsAndAnalysis.svg";

type Props = {};

const Features = (props: Props) => {
  return (
    <div className="flex justify-center items-center flex-col py-16 px-8">
      <Feature
        Icon={FaSearch}
        smallTitle="Stock Picking"
        title="Discover the best stocks for you"
        description="Swipe right for your favorite stocks in order to help our AI algorithm learn your stock investing strategy and pick the best stocks for your investing portfolio."
        img={Slides}
        ltr={true}
      />
      {/* <Feature
        Icon={FaDollarSign}
        smallTitle="Financials"
        title="Explore the Financials of every company"
        description="Stay close to the most updated financials data of over 10,000 stocks at the US stock market using financials trends and statistics in order to choose your next investment."
        img={Financials}
        ltr={false}
      />
      <Feature
        Icon={FaNewspaper}
        smallTitle="Stock Picking"
        title="Discover the best stocks for you"
        description="Swipe right for your favorite stocks in order to help our AI algorithm learn your stock investing strategy and pick the best stocks for your investing portfolio."
        img={NewsAndAnalysis}
        ltr={true}
      /> */}
    </div>
  );
};

export default Features;
