import React from "react";
import Feature from "./Feature";
import { FaSearch, FaDollarSign, FaNewspaper } from "react-icons/fa";
import Slides from "../../images/Slides.svg";
import Financials from "../../images/Financials.svg";
import NewsAndAnalysis from "../../images/NewsAndAnalysis.svg";

const Features: React.FC = () => {
  return (
    <React.Fragment>
      <div
        id="features"
        className="flex justify-center items-center flex-col pt-10 pb-16 px-8"
      >
        <div id="stock-picking">
          <Feature
            Icon={FaSearch}
            smallTitle="Stock Picking"
            title="Discover the best stocks for you"
            description="Swipe right for your favorite stocks in order to help our AI algorithm learn your stock investing strategy and pick the best stocks for your investing portfolio."
            img={Slides}
            ltr={true}
          />
        </div>
        <div id="financials">
          <Feature
            Icon={FaDollarSign}
            smallTitle="Financials"
            title="Explore the Financials of every company"
            description="Stay close to the most updated financials data of over 10,000 stocks at the US stock market using financials trends and statistics in order to choose your next investment."
            img={Financials}
            ltr={false}
          />
        </div>
        <div id="news-and-analysis">
          <Feature
            Icon={FaNewspaper}
            smallTitle="News and Analysis"
            title="Keep updated with InDepth News & Analysis"
            description="Receive the hottest news of your favorite stocks from America's leading financials news providers and watch In-Depth stock analysis from the hottest stock investing YouTube channels."
            img={NewsAndAnalysis}
            ltr={true}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
