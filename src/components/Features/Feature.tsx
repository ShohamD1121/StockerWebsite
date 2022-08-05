import React from "react";
import { motion } from "framer-motion";

type Props = {
  Icon: any;
  smallTitle: string;
  title: string;
  description: string;
  img: any;
  ltr: boolean;
};

const Feature: React.FC<Props> = ({
  Icon,
  smallTitle,
  title,
  description,
  img,
  ltr,
}: Props) => {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center py-16 px-8">
        <div
          className={`container flex md:flex-row ${
            ltr ? "flex-col-reverse" : "flex-col"
          }`}
        >
          {ltr && (
            <div className="flex md:w-6/12 w-full h-full items-center">
              <motion.img
              
                src={img}
                alt="img"
                className="w-[90%] h-[80%] sm:my-0 my-auto mx-auto"
              />
            </div>
          )}
          <div className="flex md:w-6/12 md:mb-0 mb-12 w-full h-full md:items-center flex-col self-center">
            <div
              className={`flex mb-10 py-2 px-3 gap-2 mx-auto text-center rounded-3xl ${
                ltr ? `bg-lightGreen text-green` : `bg-lightBlue text-blue`
              }`}
            >
              <Icon size={18} className="my-auto" />
              <p>{smallTitle}</p>
            </div>
            <h1
              className={`md:text-5xl text-3xl font-bold mb-6 2xl:text-6xl leading-8 ${
                ltr ? `text-blue` : `text-green`
              }`}
            >
              {title}
            </h1>
            <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl">
              {description}
            </p>
          </div>
          {!ltr && (
            <div className="flex md:w-6/12 w-full h-full items-center">
              <motion.img
                
                src={img}
                alt="img"
                className="w-[90%] h-[80%] sm:my-0 my-auto mx-auto"
              />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Feature;
