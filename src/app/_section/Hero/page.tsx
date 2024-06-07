import React from "react";
import Image from "next/image";
import hero from "../../../../public/HomeImages/hero.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-section relative text-white">
      <Image
        src={hero}
        className="hero-image"
        alt="hero-image"
        layout="responsive"
      />
      <div className="hero-text flex flex-col gap-6 md:gap-14 absolute top-20 left-10">
        <p className="hidden md:hidden lg:block md:text-2xl lg:text-4xl">
          T-shirt/Tops
        </p>
        <h1 className="hidden sm:block font-extrabold text-xl sm:text-3xl md:text-4xl lg:text-6xl">
          Summer <br /> value pack
        </h1>
        <p className="hidden md:hidden lg:block text-lg md:text-2xl">
          cool/colorful/comfy
        </p>
        <Button className="bg-white text-black font-extrabold text-xs sm:text-sm md:text-base lg:text-lg hover:bg-black hover:text-white">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
