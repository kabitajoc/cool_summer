import React from "react";
import Image from "next/image";
import Menswear from "../../../../public/HomeImages/mensCategory.png";
import Menswear1 from "../../../../public/HomeImages/mensCategory1.png";
import Menswear2 from "../../../../public/HomeImages/mensCategory2.png";
import Menswear3 from "../../../../public/HomeImages/mensCategory3.png";
import Menswear4 from "../../../../public/HomeImages/mensCategory4.png";
import Menswear5 from "../../../../public/HomeImages/mensCategory5.png";
import Menswear6 from "../../../../public/HomeImages/mensCategory6.png";
import Menswear7 from "../../../../public/HomeImages/mensCategory7.png";

function MensCategory() {
  const categories = [
    {
      id: 2,
      img: Menswear1,
      title: " Printed T-Shirts",
    },
    {
      id: 1,
      img: Menswear,
      title: "Shirts",
    },
    {
      id: 3,
      img: Menswear2,
      title: " Plain T-Shirt",
    },
    {
      id: 4,
      img: Menswear3,
      title: "Polo T-Shirt",
    },
    {
      id: 5,
      img: Menswear4,
      title: " Hoodies & Sweetshirt",
    },
    {
      id: 6,
      img: Menswear5,
      title: "Jeans",
      link: "Explore Now",
    },
    {
      id: 7,
      img: Menswear6,
      title: " Activewear",
    },
    {
      id: 8,
      img: Menswear7,
      title: "Boxers",
    },
  ];
  return (
    <div className="px-6 py-10">
      <h3 className="Men text-4xl font-bold mb-10 border-l-4 border-gray-800 pl-4">
        Mens Category
      </h3>
      <div className="men-category flex flex-wrap justify-around gap-y-5">
        {categories.map((category) => (
          <div key={category.id}>
            <Image src={category.img} alt="men's wear" />
            <div className="explore-flex flex justify-between">
              <div className="category-text">
                <h4 className=" font-extrabold">{category.title}</h4>
                <p>Explore Now</p>
              </div>
              <div className="svg pt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M18.9571 7.71798C19.2843 7.39075 19.2843 6.86022 18.9571 6.533L13.6247 1.20059C13.2975 0.873368 12.7669 0.873368 12.4397 1.20059C12.1125 1.52781 12.1125 2.05835 12.4397 2.38557L17.1796 7.12549L12.4397 11.8654C12.1125 12.1926 12.1125 12.7232 12.4397 13.0504C12.7669 13.3776 13.2975 13.3776 13.6247 13.0504L18.9571 7.71798ZM0.489258 7.9634L18.3646 7.9634V6.28758L0.489258 6.28758L0.489258 7.9634Z"
                    fill="#797979"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MensCategory;
