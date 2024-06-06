import React from "react";
import Image from "next/image";
import logo1 from "@/assets/HomeImages/logo1.png";
import logo2 from "@/assets/HomeImages/logo2.png";
import logo3 from "@/assets/HomeImages/logo3.png";
import logo4 from "@/assets/HomeImages/logo4.png";
import logo5 from "@/assets/HomeImages/logo5.png";
function TopBrands() {
  return (
    <div className=" space-y-8 bg-slate-800 p-12 rounded ">
      <div className=" text-white flex justify-center items-center">
        <h2 className="text-2xl">Top Brands Deal</h2>
        <p>
          Up To <span className=" text-yellow-400 ">60%</span> off on brands
        </p>
      </div>
      <div
        className="flex gap-28
      "
      >
        <Image src={logo1} alt="logo" />

        <Image className="bg-white rounded" src={logo2} alt="logo1"/>

        <Image className="bg-white rounded" src={logo3} alt="logo2" />

        <Image className="bg-white rounded" src={logo4} alt="logo3"/>

        <Image src={logo5} alt="logo4" />
      </div>
    </div>
  );
}

export default TopBrands;
