/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
const Navbar = () => {
  return (
    <div className="w-full h-20 text-white">
      <div className="flex justify-between items-center h-full px-10">
        <div className="text-2xl flex gap-4 items-center justify-center">
          <Link to="/">
            <img src={logo} alt="logo" className="h-14 w-14 object-contain" />
          </Link>
          {/* <div>
            <Link to="/">Matrix VIT Mulimedia Club</Link>
          </div> */}
        </div>
        <div className="flex items-center">
          <div className="mr-5">
            <Link to="/">Home</Link>
          </div>
          <div className="mr-5">
            <Link to="/events">Events</Link>
          </div>
          <div className="mr-5">
            <Link to="/about">About Us</Link>
          </div>
          <div className="mr-5">
            <Link to="/team">Our Team</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
