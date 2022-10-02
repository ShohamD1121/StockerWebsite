import React from "react";
import { FaEye, FaDatabase, FaCode, FaUserFriends } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  return (
    <React.Fragment>
      <div id="why-stocker" className="flex flex-col justify-center items-center md:pt-0 pt-10 px-8">
        <div className="container md:h-screen flex flex-col justify-evenly">
          <motion.div
            className="container flex flex-col "
          >
            <div className="flex mb-10 mx-auto py-2 px-3 gap-2 text-center rounded-3xl bg-lightGreen text-green">
              <FaEye size={20} className="my-auto" />
              <p>Why Stocker</p>
            </div>
            <h1 className="text-center font-bold mb-5 md:text-5xl text-3xl 2xl:text-6xl leading-8">
              The world's first personal AI stock screener
            </h1>
            <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl leading-normal">
              The key to successful investing is knowing which stocks to buy.
              Stocker is an AI powered stock picking mobile app. It uses a
              powerful algorithm to pick the best stocks for the user based on
              his investing style and provides realtime financials, news,
              analysis.
            </p>
          </motion.div>
          <div className="container flex gap-5 sm:flex-row flex-col sm:mt-0 mt-10">
            <motion.div
              className="container flex flex-col"
            >
              <div className="flex mx-auto text-center py-2 px-3 mb-5 rounded-3xl bg-lightGreen text-green">
                <FaDatabase className="mx-auto" />
              </div>
              <h3 className="text-center font-bold mb-3 md:text-2xl text-md 2xl:text-3xl leading-8">
                Real-Time stocks data
              </h3>
              <p className="md:text-md text-sm text-gray-500 2xl:text-lg leading-normal">
                Collect realtime financial stock data on over 10,000 tickers
                across the US stock market.
              </p>
            </motion.div>
            <motion.div
              className="container flex flex-col"
            >
              <div className="flex mx-auto text-center py-2 px-3 mb-5 rounded-3xl bg-lightRed text-red-500">
                <FaCode />
              </div>
              <h3 className="text-center font-bold mb-3 md:text-2xl text-md 2xl:text-3xl leading-8">
                Powerful AI Algorithm
              </h3>
              <p className="md:text-md text-sm text-gray-500 2xl:text-lg leading-normal">
                Our advanced powerful AI algorithm will learn your investing
                style based on the stocks you like in order to pick the best
                stocks for you.
              </p>
            </motion.div>
            <motion.div
              className="container flex flex-col"
            >
              <div className="flex mx-auto text-center py-2 px-3 mb-5 rounded-3xl bg-lightBlue text-blue">
                <FaUserFriends />
              </div>
              <h3 className="text-center font-bold mb-3 md:text-2xl text-md 2xl:text-3xl leading-8">
                User friendly experience
              </h3>
              <p className="md:text-md text-sm text-gray-500 2xl:text-lg leading-normal">
                User experience upon the top of our values. Our goal is to make
                stock investing in the most friendly and comfortable way.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
