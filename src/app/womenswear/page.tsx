"useclient";
import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";

import Sidebar from "../_section/Sidebar/Sidebar";

import WomenPrice from "../_section/WomensCategory/WomenPrice";
import AboutWomen from "../_section/WomensCategory/AboutWomen";
import { WomenClothing } from "@src/constants/Women/womensWearImage";


const Womenswear = () => {
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
