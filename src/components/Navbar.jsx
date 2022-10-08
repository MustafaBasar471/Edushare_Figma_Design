import React, { useState } from "react";

const Menu = () => {
  return (
    <div>
      <ul className="flex flex-col md:flex-row md:space-x-12">
        {["home", "profile", "courses", "contact"].map((item, idx) => (
          <li
            key={idx}
            className={`capitalize text-lg ${
              idx === 0 ? "font-semibold" : "font-thin"
            } cursor-pointer hover:underline`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className="mt-5 p-2">
      <div className="flex justify-between mx-5 items-center">
        <div className="flex items-center justify-center">
          <div className="w-[2.37rem] h-[2.37rem] flex items-center justify-center text-white font-semibold text-[1.75rem] bg-orange-500 rounded-full">
            E
          </div>
          <p className="text-2xl ml-1">Edushare</p>
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        {isMenuActive && (
          <div className="md:hidden absolute top-20 right-10 bg-[#E8F1FF] w-[10rem] rounded-xl shadow-lg">
            <div className="p-2 text-black">
              <Menu />
            </div>
          </div>
        )}
        <div className="flex items-center space-x-3">
          <button className="px-5 py-2 bg-[#E8F1FF] rounded-lg text-[#2378FF]">
            Sing In
          </button>
          <div
            className="p-2 cursor-pointer hover:bg-[#E8F1FF] duration-300 rounded-full md:hidden"
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
