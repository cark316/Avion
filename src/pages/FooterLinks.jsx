import React from "react";
import { LinkedInLogo, FacebookLogo, TwitterLogo, InstagramLogo } from "../svg";

const FooterLinks = () => {
  const menuLinks = [
    { name: "New arrivals" },
    { name: "Best sellers" },
    { name: "Recently viewed" },
    { name: "Popular this week" },
    { name: "All products" },
  ];

  const categoriesLink = [
    { name: "Crockery" },
    { name: "Furniture" },
    { name: "Homeware" },
    { name: "Plant pots" },
    { name: "Chairs" },
  ];

  const companyLinks = [
    { name: "About us" },
    { name: "Vacancies" },
    { name: "Contact us" },
    { name: "Privacy" },
    { name: "Returns policy" },
  ];

  const iconLinks = [
    { icon: LinkedInLogo },
    { icon: FacebookLogo },
    { icon: InstagramLogo },
    { icon: TwitterLogo },
  ];

  return (
    <section className="flex flex-col bg-[#2A254B] text-white px-8 py-8 sm:px-32 sm:py-16 gap-16">
      <div className="flex flex-row font-clashdisplay font-light gap-16 sm:gap-32 flex-wrap items-center justify-center">
        <div className="flex flex-row gap-16 lg:gap-24 xl:gap-36 2xl:gap-64 flex-wrap items-center justify-center">
          <ul className="flex flex-col items-center sm:items-start justify-center text-2xl gap-4">
            Menu
            {menuLinks.map((item) => (
              <li className="font-manrope font-thin text-base" key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center sm:items-start justify-center text-xl gap-4">
            Categories
            {categoriesLink.map((item) => (
              <li className="font-manrope font-thin text-base" key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center sm:items-start justify-center text-xl gap-4">
            Our Company
            {companyLinks.map((item) => (
              <li className="font-manrope font-thin text-base" key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center sm:items-start font-clashdisplay text-xl font-light gap-4 flex-1">
          Join our mailing list
          <div className="flex flex-row items-center justify-center w-full">
            <input
              className="flex flex-grow text-sm sm:text-base items-center justify-center bg-[#4E4D93] px-4 py-2 sm:px-6 sm:py-4 font-manrope"
              type="text"
              placeholder="your@email.com"
            />
            <button className="font-manrope text-sm sm:text-base font-thin bg-white text-[#2A254B] px-4 py-2 sm:px-6 sm:py-4 text-nowrap">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between border-t-2 border-[#4E4D93] py-8">
        <h2 className="font-manrope text-sm sm:text-lg font-light">
          © 2022 Avion LTD
        </h2>
        <ul className="flex flex-row gap-2 sm:gap-8">
          {iconLinks.map((item) => (
            <li key={item.icon}>
              <img src={item.icon} height={24} width={24} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FooterLinks;
