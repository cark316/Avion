import React, { useState } from "react";
import { Menu, Search, ShoppingCart, UserAvatar } from "../svg";

const Navbar = () => {
  const desktopLinks = [
    { name: "Plant pots" },
    { name: "Ceramics" },
    { name: "Tables" },
    { name: "Chairs" },
    { name: "Crockey" },
    { name: "Tableware" },
    { name: "Cutlery" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="font-clashdisplay text-2xl p-4 sm:p-6">
      {/* Mobile View */}
      <div className="sm:hidden text-xl flex items-center justify-between">
        <div>Avion</div>
        <div className="flex items-center gap-4">
          <img src={Search} alt="Search" height={16} width={16} />
          <button onClick={toggleMenu}>
            <img src={Menu} alt="Menu" height={16} width={16} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen === true ? (
        <div className="sm:hidden w-full absolute right-0 bg-[#2A254B]/80 backdrop-blur-sm z-10 py-12 text-lg text-white font-light">
          <ul className="flex flex-col items-start justify-center px-16 gap-6">
            <li className="flex flex-row gap-4 w-full pb-2 border-b-2">
              <img
                src={ShoppingCart}
                alt="Shopping Cart"
                height={24}
                width={24}
              />
              Cart
            </li>
            <li className="flex flex-row gap-4 w-full pb-2 border-b-2">
              <img src={UserAvatar} alt="User Avatar" height={24} width={24} />
              Login
            </li>
            {desktopLinks.map((item) => (
              <li className="w-full pb-2 border-b-2" key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Desktop View */}
      <div className="hidden sm:flex items-center justify-between pb-6 border-b-2 relative">
        <div className="flex items-center gap-6">
          <img src={Search} alt="Search" height={24} width={24} />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          Avion
        </div>
        <div className="flex items-center gap-6">
          <img src={ShoppingCart} alt="Shopping Cart" height={24} width={24} />
          <img src={UserAvatar} alt="User Avatar" height={24} width={24} />
        </div>
      </div>
      <ul className="hidden sm:flex flex-row items-center justify-center font-manrope lg:text-xl text-sm lg:gap-16 gap-8 text-gray-500 pt-6">
        {desktopLinks.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

{
  /* <div className="sm:hidden flex items-center justify-between font-clashdisplay text-2xl p-4">
        <div>Avion</div>
        <ul className="flex flex-row gap-4">
          <li>
            <img src={Search} height={16} width={16} />
          </li>
          <li>
            <img src={Menu} height={16} width={16} />
          </li>
        </ul>
      </div>
      <div className="hidden sm:flex items-center justify-between font-clashdisplay text-2xl p-6">
        <div>
          <img src={Search} height={24} width={24} />
        </div>
        <div>Avion</div>
        <ul className="flex flex-row gap-6">
          <li>
            <img src={ShoppingCart} height={24} width={24} />
          </li>
          <li>
            <img src={UserAvatar} height={24} width={24} />
          </li>
        </ul>
      </div> */
}
