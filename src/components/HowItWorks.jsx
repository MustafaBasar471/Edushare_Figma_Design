import React from "react";
import { works } from "../assets/index";
import { HowItWorksDetails } from "./index";
import { Icon } from ".././icons";

const HowItWorks = () => {
  return (
    <div className="p-2 mx-5 mt-[5rem]">
      <div>
        <div className="flex flex-col items-center md:flex-row md:gap-[10rem]">
          <div id="Photo">
            <img src={works} alt="works_image" className="sm:w-[26.8rem]" />
          </div>
          <div id="someinfo">
            <div className="sm:w-[26.85rem]">
              <p className="text-[2.75rem]">
                How our online public school works
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid sm:grid-cols-2 gap-10">
                <HowItWorksDetails
                  title="VIRTUAL LEARNING"
                  text="The only costs are for standard school supplies and voluntary field trips."
                  icon={<Icon name="virtual" />}
                />
                <HowItWorksDetails
                  title="Meaningful Education"
                  text="Many of our Connections Academy schools have additional accreditations."
                  icon={<Icon name="meaning" />}
                />
                <HowItWorksDetails
                  title="ONLINE CURRICULUM"
                  text="Our curriculum prepares students to go further in life by giving them support."
                  icon={<Icon name="online" />}
                />
                <HowItWorksDetails
                  title="SOCIAL INTERACTION"
                  text="Students at Connections Academy collaborate on projects together."
                  icon={<Icon name="social" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
