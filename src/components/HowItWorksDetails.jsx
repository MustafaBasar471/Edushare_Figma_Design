import React from "react";

const HowItWorksDetails = ({ title, text, icon }) => {
  return (
    <div className="mt-10 w-[16rem]">
      <div className="w-[4.37rem] h-[4.37rem] rounded-2xl bg-[#D2F1E1] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xl font-semibold mt-1">{title}</p>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export default HowItWorksDetails;
