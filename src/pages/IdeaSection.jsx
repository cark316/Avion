import React from "react";
import { IdeaImage } from "../assets";

const IdeaSection = () => {
  return (
    <section className="flex items-center justify-center pb-8 px-8 sm:px-36 text-white">
      <div className="flex flex-row gap-8 flex-wrap lg:flex-nowrap">
        <div className="bg-[#2A254B] p-6 sm:p-16 flex flex-col gap-16 sm:gap-32">
          <div className="flex flex-col gap-2 sm:gap-6">
            <h1 className="font-clashdisplay text-regular sm:text-4xl">
              It started with a small idea
            </h1>
            <p className="font-manrope font-thin text-sm sm:text-xl">
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
          </div>
          <button className="font-manrope font-light text-sm sm:text-lg py-2 px-4 sm:py-4 sm:px-6 bg-gray-200/30 backdrop-blur-lg border-gray-400">
            View Collection
          </button>
        </div>
        <div className="flex w-full lg:w-auto">
          <img className="w-full object-cover" src={IdeaImage} />
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;
