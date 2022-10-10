import React from "react";
import { Icon } from "../icons";
import { profile1, profile2 } from "../assets/index";
import { TestimonialDetails } from "./index";

const Testimonial = () => {
  return (
    <div className="mx-5 p-2 mt-10 mb-[3rem]">
      <div>
        <div className="flex justify-between">
          <p className="text-4xl sm:w-[30rem]">
            Transform your life through education
          </p>
          <div className="sm:flex gap-2 hidden">
            <div className="cursor-pointer">
              <Icon name="back" />
            </div>
            <div className="cursor-pointer">
              <Icon name="next" />
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-between items-center flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-5 lg:space-x-0">
          {/*  */}
          <TestimonialDetails
            title="“Love mathematics because of Besnik Academy”"
            desc='"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."'
            photo={profile1}
            profileName="Wilson Thai"
            location="Ontario, Canada"
            icon={<Icon name="star" />}
          />
          <TestimonialDetails
            title="“There is so much to see and do all over world”"
            desc='"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."'
            photo={profile2}
            profileName="Milena Belmar"
            location="Argentina"
            icon={<Icon name="star" />}
          />
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
