import React from "react";

const TestimonialDetails = ({
  title,
  desc,
  photo,
  icon,
  profileName,
  location,
}) => {
  return (
    <div className="sm:w-[28.25rem]">
      <p className="text-xl mt-5">{title}</p>
      <p className="text-lg">{desc}</p>
      <div className="flex items-center gap-4 mt-10">
        <img src={photo} alt="profile_photo" className="w-[3.75rem]" />
        <div className="">
          <p>{profileName}</p>
          <p className="mb-1">{location}</p>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
