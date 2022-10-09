import React from "react";
import { features } from "../assets";

const Features = () => {
  return (
    <div className="mx-5 p-2 mt-10">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between">
        <div className="sm:w-[29.75rem]">
          <p className="text-[2.75rem]">
            Transform your life through education
          </p>
          <p className="text-lg mt-5">
            Ariel Hocsman launched a new career in software development by
            taking courses on Besnik. What will you be able to do?
          </p>
          <button className="w-[12.75rem] h-[3rem] bg-[#F77E53] rounded-lg mt-5 text-white">
            Get Started
          </button>
        </div>
        <div className="sm:w-[36.813rem]">
          <img src={features} alt="features_image" />
        </div>
      </div>
    </div>
  );
};

export default Features;
