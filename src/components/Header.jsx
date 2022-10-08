import React from "react";
import { Header_img } from "../assets/index";

const Header = () => {
  return (
    <div className="p-2 mx-5 mt-[6rem] flex items-center flex-col-reverse lg:flex-row">
      <div className="lg:w-1/2 mt-5 md:mt-0">
        <div className="lg:w-3/4 space-y-12">
          <p className="text-6xl">
            Discover best classes for the best learning
          </p>
          <p>
            We designed Connections Academy to give students all across the
            nation a tuition-free online public school that lets them learn.
          </p>
          <button className="w-[12.5rem] h-[3.875rem] bg-[#F77E53] text-white rounded-2xl">
            Get Started
          </button>
          <p className="text-lg">
            Not sure when to start? {"  "}
            <span className="text-blue-500 underline">
              <a href="!#">Learn more</a>
            </span>
          </p>
        </div>
      </div>
      <div className="w-[30rem] lg:w-[37.125rem]">
        <img src={Header_img} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
