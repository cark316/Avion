import React from "react";
import { ProductImage } from "../../assets";

const Product = () => {
  return (
    <section className="flex flex-row px-32">
      <img src={ProductImage} alt="The Dandy Chair" />
      <div className="flex flex-col gap-8 px-48 py-24">
        <ProductHeader title="The Dandy Chair" price="$250" />
        <ProductDescription />
        <ProductFeatures />
        <ProductDimensions />
        <ProductAction />
      </div>
    </section>
  );
};

const ProductHeader = ({ title, price }) => (
  <header className="flex flex-col gap-2 font-clashdisplay text-4xl">
    {title}
    <p className="text-2xl">{price}</p>
  </header>
);

const ProductDescription = () => (
  <p className="font-manrope text-lg font-thin">
    A timeless design, with premium materials features as one of our most
    popular and iconic pieces. The Dandy Chair is perfect for any stylish living
    space with beech legs and lambskin leather upholstery.
  </p>
);

const ProductFeatures = () => (
  <ul className="font-manrope text-lg font-thin list-disc px-6">
    <li>Premium Material</li>
    <li>Handmade Upholstery</li>
    <li>Quality Timeless Classic</li>
  </ul>
);

const ProductDimensions = () => (
  <div className="flex flex-col gap-4">
    <h2 className="font-clashdisplay text-2xl">Dimensions</h2>
    <div className="flex flex-row gap-16 font-clashdisplay text-lg">
      <Dimension label="Height" value="110cm" />
      <Dimension label="Width" value="75cm" />
      <Dimension label="Depth" value="80cm" />
    </div>
  </div>
);

const Dimension = ({ label, value }) => (
  <div>
    <h3>
      {label}
      <p>{value}</p>
    </h3>
  </div>
);

const ProductAction = () => (
  <div className="flex flex-row items-center justify-between">
    <h1 className="font-clashdisplay text-2xl">Amount</h1>
    <button className="font-manrope text-white text-sm sm:text-base font-thin bg-[#2A254B] px-4 py-2 sm:px-6 sm:py-4 text-nowrap">
      Add to cart
    </button>
  </div>
);

export default Product;

// const Product = () => {
//   return (
//     <section className="flex flex-row px-32">
//       <img src={ProductImage} />
//       <div className="flex flex-col gap-8 px-48 py-24">
//         <h1 className="flex flex-col gap-2 font-clashdisplay text-4xl">
//           The Dandy Chair
//           <p className="text-2xl">$250</p>
//         </h1>
//         <p className="font-manrope text-lg font-thin">
//           A timeless design, with premium materials features as one of our most
//           popular and iconic pieces. The dandy chair is perfect for any stylish
//           living space with beech legs and lambskin leather upholstery
//         </p>
//         <ol className="text-manrope text-lg font-thin list-disc px-6">
//           <li>Premium Material</li>
//           <li>Handmade Upholstery</li>
//           <li>Quality Timeless Classic</li>
//         </ol>
//         <div className="flex flex-col gap-4">
//           <h2 className="font-clashdisplay text-2xl">Dimensions</h2>
//           <div className="flex flex-row gap-16 font-clashdisplay text-lg">
//             <h3>
//               Height<p>110cm</p>
//             </h3>
//             <h3>
//               Width<p>75cm</p>
//             </h3>
//             <h3>
//               Depth<p>80cm</p>
//             </h3>
//           </div>
//         </div>
//         <div className="flex flex-row items-center justify-between">
//           <h1 className="font-clashdisplay text-2xl">Amount</h1>
//           <button className="font-manrope text-white text-sm sm:text-base font-thin bg-[#2A254B] px-4 py-2 sm:px-6 sm:py-4 text-nowrap">
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Product;
