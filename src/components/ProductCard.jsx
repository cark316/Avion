import React from "react";

const ProductCard = (props) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-6 border-2 p-2 sm:p-8">
      <img src={props.img} />
      <div className="flex flex-col gap-1 sm:gap-3">
        <h1 className="font-clashdisplay text-sm sm:text-xl/5">{props.name}</h1>
        <h2 className="font-manrope text-sm sm:text-xl/5">{props.price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
