import React from "react";

const PricingCart = ({ title, color, price }) => {
  return (
    <div className="w-[19rem] rounded-lg overflow-hidden">
      <div
        className={`w-full bg-[${color}] h-[6.75rem] flex justify-center items-center`}
      >
        <p className="text-[1.625rem] text-white">{title}</p>
      </div>
      <div className="flex items-center flex-col bg-[#EDF3FF]">
        <p className="my-5 text-[2.75rem] font-bold">${price}</p>
        <div className="mx-10">
          <ul className="space-y-5">
            {[
              "1 Day Event",
              "1 Speaker",
              "Interaction Sessions",
              "35 Classes",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center">
                <div
                  className={`w-[.75rem] h-[.75rem] bg-[${color}] rounded-full`}
                ></div>
                <span className="ml-3 text-[#606176]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-[4rem] mb-[2rem]">
          <button
            className={`px-[4rem] h-[4.375rem] border border-[${color}] rounded-lg text-[${color}] text-xl`}
          >
            Buy Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCart;
