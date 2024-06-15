import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col gap-4 p-12 border-2 w-[256px] sm:w-[368px] h-[284px]">
      <img src={props.img} alt="icon" height={24} width={24} />
      <h1 className="font-clashdisplay texl-lg sm:text-xl">{props.heading}</h1>
      <p className="font-manrope text-sm sm:text-base">{props.para}</p>
    </div>
  );
};

export default Card;
