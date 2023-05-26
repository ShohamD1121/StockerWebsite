import React from "react";
import { item, container } from "../../constants/animations";
import { motion } from "framer-motion";
import GooglePlay from "../../images/GooglePlay.svg";
import AppStore from "../../images/AppStore.svg";

const DownloadComponent: React.FC = () => {
  return (
    <React.Fragment>
      <motion.div
        variants={container}
        className="flex h-screen justify-center items-center flex-1 w-full flex-col py-16 px-8"
      >
        <motion.div className="container flex flex-col md:mt-0 mt-2 gap-2">
          <motion.h5
            variants={item}
            className="text-center text-gray-600 font-semibold mt-6 md:mt-0 md:mb-2 text-xl md:text-2xl 2xl:text-3xl"
          >
            Get the App
          </motion.h5>
          <div className="container flex flex-row items-center justify-around md:justify-center md:gap-4">
            <a href="https://apps.apple.com/app/stock-market-investing-picks/id6443543680">
              <motion.img
                variants={item}
                src={AppStore}
                alt="App Store"
                className="w-40 h-auto md:mb-0"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.app.stocker">
              <motion.img
                variants={item}
                src={GooglePlay}
                alt="Google Play"
                className="w-40 h-auto"
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
};

export default DownloadComponent;
