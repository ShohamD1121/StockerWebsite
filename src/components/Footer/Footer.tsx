import React from "react";
import Logo from "../../images/logoFinal.svg";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  MainRoute,
  FaqRoute,
  ContactUsRoute,
  TermsOfServiceRoute,
  PrivacyPolicyRoute,
} from "../../routes/routes";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex cool-gradient w-full pb-8  px-8">
        <div className="container flex flex-col gap-10 mx-auto">
          <h1 className="text-center md:text-5xl text-3xl font-bold mb-6 2xl:text-6xl leading-8">
            Start your Next Level stock investing journey
          </h1>
          <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 text-center">
            <div className="flex flex-col">
              <h3 className="font-bold mb-4 cursor-pointer">Features</h3>

              <HashLink
                smooth
                to={`${MainRoute}#stock-picking`}
                className="cursor-pointer hover:text-blue"
              >
                Stock Picks
              </HashLink>

              <HashLink
                smooth
                to={`${MainRoute}#financials`}
                className="cursor-pointer hover:text-blue"
              >
                Financials
              </HashLink>
              <HashLink
                smooth
                to={`${MainRoute}#news-and-analysis`}
                className="cursor-pointer hover:text-blue"
              >
                News & Analysis
              </HashLink>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold mb-4 cursor-pointer">Support</h3>
              <Link to={FaqRoute} className="cursor-pointer hover:text-blue">
                FAQ
              </Link>
              <Link
                to={ContactUsRoute}
                className="cursor-pointer hover:text-blue"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold mb-4 cursor-pointer">Legal</h3>
              <Link
                to={PrivacyPolicyRoute}
                className="cursor-pointer hover:text-blue"
              >
                Privacy Policy
              </Link>
              <Link
                to={TermsOfServiceRoute}
                className="cursor-pointer hover:text-blue"
              >
                Terms of Service
              </Link>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold mb-4 cursor-pointer">Social Media</h3>
              <a
                href="https://www.facebook.com/yoav.tzori"
                className="cursor-pointer hover:text-blue"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/yoav_tzori"
                className="cursor-pointer hover:text-blue"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/stocker-app"
                className="cursor-pointer hover:text-blue"
              >
                LinkedIn
              </a>
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
              <a href="https://www.facebook.com/yoav.tzori">
                {" "}
                <FaFacebookSquare
                  size={25}
                  className="text-green hover:text-blue"
                />
              </a>
              <a href="https://www.instagram.com/yoav_tzori">
                {" "}
                <FaInstagram size={25} className="text-blue hover:text-green" />
              </a>
              <a href="https://www.linkedin.com/company/stocker-app">
                <FaLinkedin size={25} className="text-green hover:text-blue" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
