import React from "react";
import Logo from "../../images/logoFinal.svg";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MainRoute } from "../../constants/constants";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex cool-gradient w-full py-16 px-8">
      <div className="container flex flex-col gap-10 mx-auto">
        <h1 className="text-center md:text-5xl text-3xl font-bold mb-6 2xl:text-6xl leading-8">
          Start your Next Level stock investing journey
        </h1>
        <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 text-center">
          <div>
            <h3 className="font-bold mb-4 cursor-pointer">Features</h3>
            <p className="cursor-pointer hover:text-blue">Stock Picks</p>
            <p className="cursor-pointer hover:text-blue">Financials</p>
            <p className="cursor-pointer hover:text-blue">News & Analysis</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 cursor-pointer">Support</h3>
            <p className="cursor-pointer hover:text-blue">Contact Us</p>
            <p className="cursor-pointer hover:text-blue">FAQ</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 cursor-pointer">Legal</h3>
            <p className="cursor-pointer hover:text-blue">Privacy Policy</p>
            <p className="cursor-pointer hover:text-blue">Terms of Service</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 cursor-pointer">Social Media</h3>
            <p className="cursor-pointer hover:text-blue">Facebook</p>
            <p className="cursor-pointer hover:text-blue">Instagram</p>
            <p className="cursor-pointer hover:text-blue">LinkedIn</p>
          </div>
        </div>
        <div className="flex sm:justify-between items-center sm:flex-row flex-col sm:gap-0 gap-5">
          <Link to={`${MainRoute}`}>
            <div className="flex items-center">
              <img className="" src={Logo} alt="logo-img" />
              <h2 className="text-blue font-semibold p-2 text-2xl ">
                Stocker<span className="text-green h-0 w-0">.</span>
              </h2>
            </div>
          </Link>
          <h2 className="text-gray-500">Made By @ShohamDouek</h2>
          <div className="flex items-center gap-5">
            <FaFacebookSquare size={25} className="text-green hover:text-blue" />
            <FaInstagram size={25} className="text-blue hover:text-green" />
            <FaLinkedin size={25} className="text-green hover:text-blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

