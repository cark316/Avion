import React from "react";
import { HeroImage } from "../assets";

const LandingPage = () => {
  const heroImgBg = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top left",
    height: "100%",
    width: "100%",
  };

  return (
    <section className="flex flex-col lg:h-[84.3vh]">
      {/* Desktop View */}
      <div
        className="lg:flex justify-end items-end px-16 py-32 hidden"
        style={heroImgBg}
      >
        <article className="flex flex-col items-start justify-center p-8 gap-36 xl:p-16 xl:gap-48 bg-white/30 backdrop-blur-md ">
          <div className="flex flex-col gap-6 w-[400px] xl:w-[600px]">
            <p className="font-clashdisplay text-2xl xl:text-4xl">
              Luxury homeware for people who love timeless design quality.
            </p>
            <p className="font-manrope text-gray-600 xl:text-lg">
              Shop the new Spring 2022 collection today
            </p>
          </div>
          <button className="font-manrope font-light text-lg py-4 px-6 bg-gray-200/30 backdrop-blur-lg border-gray-400">
            View Collection
          </button>
        </article>
      </div>
      
      {/* Mobile View */}
      <article className="lg:hidden flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 px-4 pt-16 pb-8 sm:p-16">
          <div className="flex flex-col gap-4">
            <p className="font-clashdisplay text-xl">
              Luxury homeware for people who love timeless design quality.
            </p>
            <p className="font-manrope text-gray-700 xl:text-lg">
              With our new collection, view over 400 bespoke pieces from
              homeware through to furniture today
            </p>
          </div>
          <button className="font-manrope font-light text-lg py-4 px-6 bg-gray-200 border-gray-400 w-full">
            View Collection
          </button>
        </div>
        <img src={HeroImage} /> 
      </article>
    </section>
  );
};

export default LandingPage;
