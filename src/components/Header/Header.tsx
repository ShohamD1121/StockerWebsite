import React, { useState, useRef } from "react";
import headerImg from "../../images/headerImg.svg";
import database from "../../app/firebase";
import { mailFormat } from "../../constants/mailFormat";
import { motion } from "framer-motion";
import {item, container } from '../../constants/animations';

type Props = {};

const Header = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const inputRef: any = useRef();

  const handleClick = () => {
    if (email.match(mailFormat)) {
      database
        .ref("users")
        .push({
          gmail: email,
        })
        .catch((err) => console.log(err));
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    setEmail("");
    inputRef.current.value = "";
  };

  return (
    <React.Fragment>
      <div className="flex cool-gradient md:h-screen justify-center items-center flex-1 w-full flex-col py-16 px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="container md:mt-3 mt-6 flex md:flex-row flex-col md:w-10/12 w-full min-h-[80vh] bg-transparent justify-between"
        >
          <div className="md:w-6/12 w-full flex flex-col justify-around 2xl:justify-center 2xl:gap-32">
            <div className="container">
              <motion.h1
                variants={item}
                className="md:text-5xl text-3xl font-bold mb-6 2xl:text-6xl leading-8"
              >
                The Next Generation of stock picking
              </motion.h1>
              <motion.p
                variants={item}
                className="md:text-lg text-sm text-gray-500 2xl:text-2xl"
              >
                Discover and research the best stock investing opportunities for
                you.
              </motion.p>
            </div>
            <div className="container flex flex-col md:mt-0 mt-2 gap-2">
              <motion.h5
                variants={item}
                className="text-center text-gray-500 font-semibold md:mb-6 mb-2 sm:text-md text-sm 2xl:text-xl"
              >
                Join The 100+ Stockers on our Waitlist
              </motion.h5>
              <div className="container  flex justify-center mb-4">
                <motion.input
                  variants={item}
                  className="sm:text-md text-xs border rounded-l-lg w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  ref={inputRef}
                />
                <motion.button
                  variants={item}
                  onClick={handleClick}
                  className=" bg-green text-white py-2 px-4 rounded-r-lg  hover:bg-blue"
                >
                  Get Started
                </motion.button>
              </div>
              {!isEmailValid && (
                <motion.p
                  variants={item}
                  className="text-red-500 text-sm text-center"
                >
                  Email is not Valid
                </motion.p>
              )}
            </div>
          </div>
          <motion.div
            variants={container}
            className="container md:w-6/12 w-full h-full md:justify-end justify-center flex"
          >
            <motion.img
              variants={item}
              src={headerImg}
              alt="header-img"
              className="w-[90%] sm:h-[100%] h-[90%] "
            />
          </motion.div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Header;
