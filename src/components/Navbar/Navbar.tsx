import React, { useState } from "react";
import Logo from "../../images/logoFinal.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import NavbarItems from "./NavbarItems";
import { Link } from "react-router-dom";
import { MainRoute } from "../../routes/routes";

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <React.Fragment>
      <nav className="fixed w-full top-0 flex flex-wrap items-center justify-between px-2 py-1 bg-white mb-3 z-10">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="flex sm:text-3xl text-2xl font-bold leading-relaxed mr-4 py-2 whitespace-nowrap text-blue"
              to={`${MainRoute}`}
            >
              <img className="w-[25%] sm:[50%]" src={Logo} alt="logo-img" />
              Stocker<span className="text-green h-0 w-0">.</span>
            </Link>
            <button
              className=" text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
          {navbarOpen ? (
            <motion.div
              animate={{ x: [500, 0], opacity: [0, 1] }}
              transition={{
                duration: 1,
              }}
              className={
                "lg:flex flex-grow items-center " +
                (navbarOpen ? "flex" : "hidden")
              }
            >
              <NavbarItems setNavbarOpen={setNavbarOpen} />
            </motion.div>
          ) : (
            <div
              className={
                "lg:flex flex-grow items-center " +
                (navbarOpen ? "flex" : "hidden")
              }
            >
              <NavbarItems setNavbarOpen={setNavbarOpen} />
            </div>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
