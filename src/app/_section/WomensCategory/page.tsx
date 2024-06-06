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
    <div className="px-6 py-10">
      <h3 className="text-4xl font-bold mb-10 border-l-4 border-gray-800 pl-4">
        Womens Category
      </h3>
      <div className=" flex justify-around items-center">
        {categories.map((category, index) => (
          <figure key={index}>
            <Image src={category.img} alt={`${category.title}`} />
            <div className="flex justify-around">
              <figcaption>
                <p className=" font-extrabold">{category.title}</p>
                Explore Now !
              </figcaption>

              <MoveRight />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default WomensCategory;
