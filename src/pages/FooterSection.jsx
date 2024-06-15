import React from "react";
import { FooterImage } from "../assets";
import { CheckmarkFilled } from "../svg";

const FooterSection = () => {
  const footerImgBg = {
    backgroundImage: `url(${FooterImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  };

  const footerItems = [
    { name: "Exclusive Offers" },
    { name: "Free Events" },
    { name: "Large Discounts" },
  ];

  return (
    <section className="flex items-center justify-items-center">
      <div
        className="flex flex-col items-start justify-center sm:items-center px-8 py-8 xl:px-96 xl:py-32 text-white gap-6 sm:gap-8"
        style={footerImgBg}
      >
        <h1 className="font-clashdisplay text-2xl sm:text-4xl">
          Join the club to get the benefits
        </h1>
        <p className="font-manrope font-thin text-sm sm:text-base sm:px-16">
          Sign up for our newsletter and recieve exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <ul className="font-manrope font-thin flex flex-col sm:flex-row gap-4 sm:gap-8">
          {footerItems.map((item) => (
            <li className="flex flex-row gap-2" key={item.name}>
              <img src={CheckmarkFilled} />
              {item.name}
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center justify-center w-full md:px-32 sm:px-48">
          <input className="flex flex-grow text-sm sm:text-base items-center justify-center text-black px-4 py-2 sm:px-6 sm:py-4 font-manrope" type="text" placeholder="your@email.com"/>
          <button className="font-manrope text-sm sm:text-base font-thin bg-[#2A254B] px-4 py-2 sm:px-6 sm:py-4 text-nowrap">Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
