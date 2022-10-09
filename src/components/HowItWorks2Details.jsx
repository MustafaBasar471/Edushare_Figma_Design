import React from "react";
import { Icon } from "../icons";

const HowItWorks2Details = ({ image, title }) => {
  return (
    <div className="w-[16.87rem] shadow flex items-center justify-center flex-col p-2 rounded-xl">
      <div className="w-60">
        <img src={image} alt="howworks_image" className="w-60" />
        <p className="font-semibold text-xl mt-2 w-[14rem]">{title}</p>
        <div className="mt-1 space-x-10 flex">
          <div className="flex items-center">
            <Icon name="people" />
            <span className="ml-1">145,690</span>
          </div>
          <div className="flex items-center">
            <Icon name="clock" />
            <span className="ml-1">4 monts</span>
          </div>
        </div>
        <div className="w-60 mt-2">
          <button className="w-full py-[.5rem] bg-[#2076FF] flex items-center justify-center rounded-md hover:shadow-lg">
            <Icon name="addCart" />
            <span className="ml-1 text-white">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks2Details;
