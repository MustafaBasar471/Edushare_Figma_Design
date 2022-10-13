import React from "react";
import { PricingCart } from "./index";
const Pricing = () => {
  return (
    <div className="mx-5 p-2">
      <div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between sm:items-end">
          <p className="text-[2rem] sm:text-[2.75rem] sm:w-[36.875rem]">
            Transform your life through education
          </p>
          <button className="sm:w-[10rem] h-[3.75rem] border border-[#2076FF] rounded-xl text-[#2076FF] mt-5 sm:mt-0">
            Upgrade now
          </button>
        </div>
        <div className="mt-10 justify-center md:justify-between gap-10 mb-[30rem] flex items-center flex-wrap">
          {/*  */}
          <PricingCart title="Regular" color="#2076FF" price="65" />
          <PricingCart title="Medium" color="#F6C07A" price="95" />
          <PricingCart title="Premium" color="#F77E53" price="445" />
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
