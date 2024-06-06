import React from "react";
import Image from "next/image";
import leftherocard from "@/assets/HomeImages/leftherocard.jpg";
import rightherocard from "@/assets/HomeImages/rightherocard.jpg";
import Link from "next/link";

const HeroCards = () => {
  return (
    <div className="hero-cards flex flex-wrap justify-around relative text-white">
      <div className="relative w-full sm:w-1/2 p-2">
        <Image src={leftherocard} alt="left_sale-card" className="pt-3" />
        <div className="absolute top-20 left-10 p-4 rounded-md space-y-2 sm:space-y-6 text-xl sm:text-2xl">
          <p className="hidden lg:block">Low Price</p>
          <h2 className="hidden xs:block lg:text-3xl font-extrabold">
            High Cozziness
          </h2>
          <span className="hidden lg:block">Upto 50% off</span>
          <Link
            href="/"
            className="block mt-2 text-sm xs:text-base sm:text-lg underline"
          >
            Explore Items
          </Link>
        </div>
      </div>

      <div className="relative w-full sm:w-1/2 p-2">
        <Image src={rightherocard} alt="right_sale-card" />
        <div className="absolute top-20 left-10 space-y-2 sm:space-y-4 text-xl sm:text-2xl p-4 rounded-md">
          <p className="hidden lg:block">Low Price</p>
          <h2 className="hidden xs:block lg:text-3xl font-extrabold">
            High Cozziness
          </h2>
          <span className="hidden lg:block">Upto 50% off</span>
          <Link
            href="/"
            className="block mt-2 text-sm xs:text-base sm:text-lg underline"
          >
            Explore Items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
