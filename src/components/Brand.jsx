import React from "react";
import { uni1, uni2, uni3, uni4 } from "../assets/index";

const Brand = () => {
  return (
    <div className="p-2 mx-5 mt-10">
      <div className="flex items-center">
        <div className="flex flex-col w-[15.5rem]">
          <span className="text-[3.875rem] font-semibold">400+</span>
          <span className="text-[1.25rem]">
            Universities worldwide that partner with us
          </span>
        </div>
        <div className="flex items-center justify-center flex-wrap mx-auto gap-5">
          {[uni1, uni2, uni3, uni4].map((item, idx) => (
            <img src={item} alt="brand_logo" key={idx} className="w-[10rem]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
