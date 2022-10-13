import React from "react";
import { Icon } from "../icons";

const Footer = () => {
  return (
    <div className="mx-5 p-2 mt-10 pb-10">
      <div className="flex justify-center gap-10 flex-wrap">
        <div className="w-full sm:w-[18rem]">
          <div className="flex items-center justify-start mb-5">
            <div className="w-[2.37rem] h-[2.37rem] flex items-center justify-center text-white font-semibold text-[1.75rem] bg-orange-500 rounded-full">
              E
            </div>
            <p className="text-2xl ml-1">Edushare</p>
          </div>
          <p className="text-[#606176]">
            Our motto to fulfill customer demand by making them satisfied with
            growing their business.
          </p>
        </div>

        <div>
          <p className="font-bold text-xl mb-5">About</p>
          <ul className="space-y-2 text-sm text-[#606176]">
            {["About Us", "Features", "News", "Careers", "FAQ"].map(
              (item, idx) => (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl mb-5">Support</p>
          <ul className="space-y-2 text-sm text-[#606176]">
            {[
              "Account",
              "Support Center",
              "Feedback",
              "Contact Us",
              "Accesbility",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-xl mb-7">Get our app</p>
          <div className="space-y-3">
            <Icon name="google" />
            <Icon name="appStore" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
