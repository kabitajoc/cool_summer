import React from "react";
import Image from "next/image";
import hero from "../../../../public/HomeImages/hero.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-section relative text-white text-4xl font-extrabold">
      <Image src={hero} className="hero-image" alt="hero-image" layout="responsive" />
      <div className="hero-text flex flex-col gap-6 md:gap-14 absolute top-20 left-10 md:top-36 md:left-40 z-10">
        <p className="text-2xl md:text-4xl">T-shirt/Tops</p>
        <h1 className="font-extrabold text-4xl md:text-6xl">
          Summer <br /> value pack
        </h1>
        <p className="text-xl md:text-2xl">cool/colorful/comfy</p>
        <Button className="bg-white text-black font-extrabold text-base md:text-lg">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
