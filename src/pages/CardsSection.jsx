import React from "react";
import { Card } from "../components";
import { Delivery, Checkmark, Purchase, Sprout } from "../svg";

const CardsSection = () => {
  const cardsData = [
    {
      img: Delivery,
      heading: "Next day as standard",
      para: "Order before 3pm and get your order the next day as standard",
    },
    {
      img: Checkmark,
      heading: "Made by true artisans",
      para: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      img: Purchase,
      heading: "Unbeatable prices",
      para: "For our materials and quality you won't find better prices anywhere",
    },
    {
      img: Sprout,
      heading: "Recycled packaging",
      para: "We use 100% recycled to ensure our footprint is more manageable",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 gap-16">
      <p className="font-clashdisplay sm:text-2xl text-base">
        What makes our brand different
      </p>
      <div className="flex flex-row items-center justify-center gap-8 flex-wrap sm:px-24">
        {cardsData.map((item) => (
          <Card
            key={item.img}
            img={item.img}
            heading={item.heading}
            para={item.para}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
