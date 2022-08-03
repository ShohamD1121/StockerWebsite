import React from "react";

type Props = {};

const NavbarItems = (props: Props) => {
  return (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="my-auto">
        <a
          className="px-3 py-2 flex items-center text-md leading-snug font-semibold  text-black hover:underline underline-offset-4 decoration-blue"
          href="/"
        >
          <span className="ml-2">Home</span>
        </a>
      </li>
      <li className="my-auto">
        <a
          className="px-3 py-2 flex items-center text-md leading-snug  text-black hover:underline underline-offset-4 decoration-blue"
          href="/faq"
        >
          <span className="ml-2">FAQ</span>
        </a>
      </li>
      <li className="my-auto">
        <a
          className="px-3 py-2 flex items-center text-md leading-snug  text-black hover:underline underline-offset-4 decoration-blue"
          href="/contact-us"
        >
          <span className="ml-2">Contact Us</span>
        </a>
      </li>
      <li className="my-auto">
        <a
          className="px-3 py-2 flex items-center text-md leading-snug  text-black"
          href="/download"
        >
          <button className="ml-2 bg-green text-white py-2 px-4 rounded-3xl border-transparent border-2 hover:bg-white hover:text-green hover:border-green">
            Download Now
          </button>
        </a>
      </li>
    </ul>
  );
};

export default NavbarItems;
