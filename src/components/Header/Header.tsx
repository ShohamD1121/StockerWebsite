import React from "react";
import { motion } from "framer-motion";
import headerImg from "../../images/headerImg.svg";
import GooglePlay from "../../images/GooglePlay.svg";
import AppStore from "../../images/AppStore.svg";
import { item, container } from "../../constants/animations";

const Header: React.FC = () => {
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

/*

  Old Code : This was relevant before the App was out
  
  // const [email, setEmail] = useState<string>("");
  // const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  // const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  // const inputRef: React.MutableRefObject<any> = useRef();

  // const handleClick = () => {
  //   if (email.match(mailFormat)) {
  //     database
  //       .ref("users")
  //       .push({
  //         gmail: email,
  //       })
  //       .catch((err) => console.log(err));
  //     setIsEmailValid(true);
  //     setIsEmailSent(true);
  //   } else {
  //     setIsEmailValid(false);
  //     setIsEmailSent(false);
  //   }
  //   setEmail("");
  //   inputRef.current.value = "";
  // };
  
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
                  Email is not valid
                </motion.p>
              )}
              {isEmailSent && (
                <motion.p
                  variants={item}
                  className="text-green text-sm text-center"
                >
                  Email has been sent successfully
                </motion.p>
              )} */
