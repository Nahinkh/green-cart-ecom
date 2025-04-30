import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      <img
        src={assets.bottom_banner_image}
        alt="bottom banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="bottom banner sm"
        className="w-full block md:hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-end  pt-16 md:pt-0 md:pr-24 md:justify-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
          Why We Are The Best
        </h1>
        {features.map((feature, idx) => {
          return (
            <div key={idx} className="flex items-center justify-center  gap-4 mt-2">
              <img
                src={feature.icon}
                className="md:w-11 w-9"
                alt={feature.title}
              />
             <div>
             <h3 className="text-lg md:text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-gray-500/70 text-xs md:text-sm font-semibold">
                {feature.description}
              </p>
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBanner;
