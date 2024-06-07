import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Saving1 from "@/assets/HomeImages/Bigsavingzone1.png";
import Saving2 from "@/assets/HomeImages/Bigsavingzone2.png";
import Saving3 from "@/assets/HomeImages/Bigsavingzone3.png";
import Saving4 from "@/assets/HomeImages/BigSavingZone4.png";
import Saving5 from "@/assets/HomeImages/BigSavingZone5.png";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";



import React from "react";

const BigSavingZone = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Big Saving Zone</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <Image src={Saving1} alt="Hawaiian Shirts" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Hawaiian Shirts</h3>
          <p>Dress up in summer vibes</p>
          <p className="font-bold">UPTO 50% OFF</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg text-center">
          <Image src={Saving2} alt="Printed T-Shirt" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Printed T-Shirt</h3>
          <p>New Designs Every Week</p>
          <p className="font-bold">UPTO 40% OFF</p>
          <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Image src={Saving3} alt="Cargo Joggers" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Cargo Joggers</h3>
          <p>Move with style & comfort</p>
          <p className="font-bold">UPTO 50% OFF</p>
          <button className="mt-4 bg-gray-500 text-white py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Image src={Saving4} alt="Urban Shirts" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Urban Shirts</h3>
          <p>Live in Comfort</p>
          <p className="font-bold">FLAT 50% OFF</p>
          <button className="mt-4 bg-gray-500 text-white py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <Image
            src={Saving5}
            alt="Oversized T-Shirts"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Oversized T-Shirts</h3>
          <p>Street Style Icon</p>
          <p className="font-bold">FLAT 50% OFF</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigSavingZone;
