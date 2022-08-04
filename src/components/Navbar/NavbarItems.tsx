import React from "react";
import {MainRoute} from '../../constants/constants';
import {Link} from 'react-router-dom';

type Props = {};

const NavbarItems = (props: Props) => {
  return (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="my-auto">
        <Link
          className="px-3 py-2 flex items-center text-md leading-snug font-semibold  text-black hover:underline underline-offset-4 decoration-blue"
          to={`${MainRoute}`}
        >
          <span className="ml-2">Home</span>
        </Link>
      </li>
      <li className="my-auto">
        <Link
          className="px-3 py-2 flex items-center text-md leading-snug  text-black hover:underline underline-offset-4 decoration-blue"
          to={`${MainRoute}/FAQ`}
        >
          <span className="ml-2">FAQ</span>
        </Link>
      </li>
      <li className="my-auto">
        <Link
          className="px-3 py-2 flex items-center text-md leading-snug  text-black hover:underline underline-offset-4 decoration-blue"
          to={`${MainRoute}/Contact-Us`}
        >
          <span className="ml-2">Contact Us</span>
        </Link>
      </li>
      <li className="my-auto">
        <Link
          className="px-3 py-2 flex items-center text-md leading-snug  text-black"
          to={`${MainRoute}/Download`}
        >
          <button className="ml-2 bg-green text-white py-2 px-4 rounded-3xl border-transparent border-2 hover:bg-white hover:text-green hover:border-green">
            Download Now
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarItems;
