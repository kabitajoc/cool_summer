import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { settings } from "@src/constants/BrandImage";
import logo1 from "@/assets/HomeImages/logo1.png";
import logo2 from "@/assets/HomeImages/logo2.png";
import logo3 from "@/assets/HomeImages/logo3.png";
import logo4 from "@/assets/HomeImages/logo4.png";
import logo5 from "@/assets/HomeImages/logo5.png";

function TopBrands() {
  return (
    <div className="space-y-8 bg-slate-800 p-6 sm:p-12 rounded">
      <div className="text-white flex flex-col justify-center items-center text-center">
        <h2 className="text-xl sm:text-2xl">Top Brands Deal</h2>
        <p className="text-sm sm:text-base">
          Up To <span className="text-yellow-400">60%</span> off on brands
        </p>
      </div>
      <Slider {...settings}>
        <div className="flex justify-center">
          <Image src={logo1} alt="logo" className="h-16 w-16 sm:h-24 sm:w-24" />
        </div>
        <div className="flex justify-center">
          <Image
            src={logo2}
            alt="logo1"
            className="h-16 w-16 sm:h-24 sm:w-24"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={logo3}
            alt="logo2"
            className="h-16 w-16 sm:h-24 sm:w-24"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={logo4}
            alt="logo3"
            className="h-16 w-16 sm:h-24 sm:w-24 bg-white rounded"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={logo5}
            alt="logo4"
            className="h-16 w-16 sm:h-24 sm:w-24"
          />
        </div>
      </Slider>
    </div>
  );
}

export default TopBrands;
