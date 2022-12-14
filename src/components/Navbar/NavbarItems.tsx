import {
  MainRoute,
  FaqRoute,
  ContactUsRoute,
  DownloadRoute,
} from "../../routes/routes";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React from "react";

interface Props {
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarItems: React.FC<Props> = ({ setNavbarOpen }) => {
  const navbarCloser = () => {
    setNavbarOpen(false);
  };

  return (
    <React.Fragment>
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li className="my-auto">
          <Link
            className="px-3 py-2 flex items-center text-md leading-snug font-semibold  text-black hover:underline underline-offset-4 decoration-blue"
            to={MainRoute}
            onClick={navbarCloser}
          >
            <span className="ml-2">Home</span>
          </Link>
        </li>
        <li className="my-auto">
          <HashLink
            smooth
            className="px-3 py-2 flex items-center text-md leading-snug  text-black hover:underline underline-offset-4 decoration-blue"
            to={`${MainRoute}#why-stocker`}
            onClick={navbarCloser}
          >
            <span className="ml-2">Why Stocker</span>
          </HashLink>
        </li>
        <li className="my-auto">
          <HashLink
            smooth
            className="px-3 py-2 flex items-center text-md leading-snug  text-black hover:underline underline-offset-4 decoration-blue"
            to={`${MainRoute}#features`}
            onClick={navbarCloser}
          >
            <span className="ml-2">Features</span>
          </HashLink>
        </li>
        <li className="my-auto">
          <Link
            className="px-3 py-2 flex items-center text-md leading-snug  text-black hover:underline underline-offset-4 decoration-blue"
            to={FaqRoute}
            onClick={navbarCloser}
          >
            <span className="ml-2">FAQ</span>
          </Link>
        </li>
        <li className="my-auto">
          <Link
            className="px-3 py-2 flex items-center text-md leading-snug  text-black hover:underline underline-offset-4 decoration-blue"
            to={ContactUsRoute}
            onClick={navbarCloser}
          >
            <span className="ml-2">Contact Us</span>
          </Link>
        </li>
        <li className="my-auto">
          <Link
            className="px-3 py-2 flex items-center text-md leading-snug  text-black"
            to={DownloadRoute}
            onClick={navbarCloser}
          >
            <button className="ml-2 bg-green text-white py-2 px-4 rounded-3xl border-transparent border-2 hover:bg-white hover:text-green hover:border-green">
              Download Now
            </button>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavbarItems;
