import React from "react";
import headerImg from "../../images/headerImg.svg";
// import {motion} from 'framer-motion'
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex cool-gradient h-screen justify-center items-center flex-1 w-full flex-col py-16 px-8">
      <div className="container md:mt-0 mt-5 flex md:flex-row flex-col md:w-10/12 w-full min-h-[80vh] bg-transparent justify-between">
        <div className="md:w-6/12 w-full flex flex-col justify-around 2xl:justify-center 2xl:gap-32">
          <div className="container">
            <h1 className="md:text-5xl text-3xl font-bold mb-6 2xl:text-6xl leading-8">
              The Next Generation of stock picking
            </h1>
            <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl">
              Discover and research the best stock investing opportunities for
              you.
            </p>
          </div>
          <div className="container flex flex-col md:mt-0 mt-2 gap-2">
            <h5 className="text-center text-gray-500 font-semibold md:mb-6 mb-2 sm:text-md text-sm 2xl:text-xl">
              Join The 100+ Stockers on our Waitlist
            </h5>
            <div className="container  flex justify-center mb-4">
              <input
                className="sm:text-md text-xs border rounded-l-lg w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Your Email"
              />
              <button className=" bg-green text-white py-2 px-4 rounded-r-lg  hover:bg-blue">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div  className="container md:w-6/12 w-full h-full md:items-center flex">
          <img src={headerImg} alt="header-img" className="w-[90%] h-[80%] sm:my-0 my-auto mx-auto " />
        </div>
      </div>
    </div>
  );
};

export default Header;
