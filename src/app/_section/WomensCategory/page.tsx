import React from "react";
import Image from "next/image";
import womenwear from "../../../../public/HomeImages/women.png";
import womenwear1 from "../../../../public/HomeImages/women1.png";
import womenwear2 from "../../../../public/HomeImages/women2.png";
import womenwear3 from "../../../../public/HomeImages/women3.png";
import { MoveRight } from "lucide-react";

function WomensCategory() {
  const categories = [
    {
      img: womenwear,
      title: "Hoodies & Sweatshirt",
    },
    {
      img: womenwear1,
      title: "Coats & Parkas",
    },
    {
      img: womenwear2,
      title: "Tees & T-Shirt",
    },
    {
      img: womenwear3,
      title: "Boxers",
    },
  ];
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10">
      <h3 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-10 border-l-4 border-gray-800 pl-2 sm:pl-4">
        Womens Category
      </h3>
      <div className="flex flex-wrap justify-around items-center gap-4">
        {categories.map((category, index) => (
          <figure key={index} className="w-full sm:w-auto">
            <Image
              src={category.img}
              alt={`${category.title}`}
              className="w-full sm:w-auto h-auto"
            />
            <div className="flex justify-between items-center mt-2 sm:mt-4">
              <figcaption className="text-center">
                <p className="font-extrabold">{category.title}</p>
                <p>Explore Now !</p>
              </figcaption>
              <MoveRight className="ml-2" />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default WomensCategory;
