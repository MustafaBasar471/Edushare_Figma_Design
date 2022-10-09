import React from "react";
import { howorks, howorks2, howorks3 } from "../assets/index";
import { HowItWorks2Details } from "./index";
const HowItWorks2 = () => {
  return (
    <div className="mx-5 p-2 mt-10 mb-[12rem]">
      <div>
        <div className="flex flex-col sm:flex-row justify-between sm:items-end">
          <p className="sm:w-[35rem] text-[1.5rem] sm:text-[2.75rem]">
            HOW OUR ONLINE PUBLIC SCHOOL WORKS
          </p>
          <button className="mt-5 sm:w-[11.25rem] sm:h-[3.75rem] h-[3rem] text-[#2076FF] border border-[#2076FF] rounded-lg hover:text-white hover:bg-[#2076FF] duration-300">
            View all courses
          </button>
        </div>
        <div className="mt-10 flex flex-col space-y-10 sm:space-y-0 sm:flex-row items-center justify-center sm:justify-around">
          {/*  */}
          <HowItWorks2Details
            image={howorks}
            title="Hands-On Python & R In Data Science"
          />
          <HowItWorks2Details
            image={howorks2}
            title="Science and Machine Learning Bootcamp"
          />
          <HowItWorks2Details
            image={howorks3}
            title="Hands-On Python & R In Data Science"
          />
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks2;
