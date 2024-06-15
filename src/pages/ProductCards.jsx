import React from "react";
import { Product1, Product2, Product3, Product4 } from "../assets";
import { ProductCard } from "../components";

const ProductCards = () => {
  const cardsList = [
    { img: Product1, name: "The Dandy Chair", price: "$250" },
    { img: Product2, name: "Rustic Vase Set", price: "$155" },
    { img: Product3, name: "The Lucy Lamp ", price: "$399" },
    { img: Product4, name: "The Silky Vase", price: "$125" },
  ];

  return (
    <section className="flex flex-col px-8 lg:px-24 sm:px-36 pt-16 pb-16 w-full gap-16">
      <div className="flex flex-row items-center justify-center gap-6 flex-wrap">
        {cardsList.map((item) => (
          <ProductCard
            key={item.img}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      <div className="flex items-center justify-center sm:px-12 ">
        <button className="flex-1 font-light font-manrope text-lg py-4 px-6 bg-gray-200 backdrop-blur-lg border-gray-400">
          View Collection
        </button>
      </div>
    </section>
  );
};

export default ProductCards;
