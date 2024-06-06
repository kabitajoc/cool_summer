import React from "react";
import Image from "next/image";
import leftherocard from "@/assets/HomeImages/leftherocard.jpg";
import rightherocard from "@/assets/HomeImages/rightherocard.jpg";
import Link from "next/link";

const HeroCards = () => {
  return (
    <div className="hero-cards flex flex-wrap justify-around relative text-white">
      <div className="relative w-full sm:w-1/2  p-2">
        <Image src={leftherocard} alt="left_sale-card" className="pt-3" />
        <div className="absolute top-20 left-10 p-4 rounded-md space-y-6 text-2xl">
          <p>Low Price</p>
          <h2 className="text-3xl font-extrabold">High Cozziness</h2>
          <span>Upto 50% off</span>
          <Link href="/" className="block mt-2 underline">
            Explore Items
          </Link>
        </div>
      </div>

      <div className="relative w-full sm:w-1/2  p-2">
        <Image src={rightherocard} alt="right_sale-card" />
        <div className="absolute top-20 left-10 space-y-4 text-2xl p-4 rounded-md">
          <p>Low Price</p>
          <h2 className="text-3xl font-extrabold">High Cozziness</h2>
          <span>Upto 50% off</span>
          <Link href="/" className="block mt-2 underline">
            Explore Items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
