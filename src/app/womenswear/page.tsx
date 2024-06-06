"useclient";
import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";
import wear1 from "@/assets/HomeImages/Rectangle 25.png";
import wear2 from "@/assets/HomeImages/Rectangle 25 (1).png";
import wear3 from "@/assets/HomeImages/Rectangle 25 (2).png";
import wear4 from "@/assets/HomeImages/Rectangle 25 (3).png";
import wear5 from "@/assets/HomeImages/Rectangle 25 (4).png";
import wear6 from "@/assets/HomeImages/Rectangle 25 (5).png";
import wear7 from "@/assets/HomeImages/Rectangle 25 (6).png";
import wear8 from "@/assets/HomeImages/Rectangle 25 (7).png";
import wear9 from "@/assets/HomeImages/Rectangle 25 (8).png";
import wear10 from "@/assets/HomeImages/Rectangle 25 (9).png";
import wear11 from "@/assets/HomeImages/Rectangle 25 (10).png";
import wear12 from "@/assets/HomeImages/Rectangle 25 (11).png";
import Sidebar from "../_section/Sidebar/Sidebar";

import WomenPrice from "../_section/WomensCategory/WomenPrice";
import AboutWomen from "../_section/WomensCategory/AboutWomen";

const Womenswear = () => {
  const WomenClothing = [
    {
      image: wear1,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
    {
      image: wear2,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
    {
      image: wear3,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
    {
      image: wear4,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
    {
      image: wear5,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
    {
      image: wear6,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
    {
      image: wear7,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
    {
      image: wear8,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
    {
      image: wear9,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
    {
      image: wear12,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
    {
      image: wear10,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
    {
      image: wear11,
      title: "Black Sweatshirt with...",
      brand: "Jhanvi's brand",
      price: "$123.00",
    },
  ];
  return (
    <>
      <div className="flex gap-10 mb-6">
        <Sidebar />

        <div className="grid grid-cols-3 gap-6">
          {WomenClothing.map((cloth, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center "
            >
              <Image src={cloth.image} alt="womens clothes" />
              <div className="absolute top-5 right-5 bg-white p-2 rounded-full">
                <Heart className="w-6 h-6  " />
              </div>
              <div className="flex  mt-2 justify-between items-center">
                <h3 className="text-lg font-semibold">
                  {cloth.title}
                  <span className="block text-sm text-gray-500">
                    {cloth.brand}
                  </span>
                </h3>
                <p className="text-xl items-center border text-center font-bold ">
                  {cloth.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AboutWomen />

      <WomenPrice />
    </>
  );
};

export default Womenswear;
