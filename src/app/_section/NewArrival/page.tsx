import React from "react";
import Image from "next/image";
import newArrival1 from "../../../../public/HomeImages/newArrival1.png";
import newArrival2 from "../../../../public/HomeImages/newArrival2.png";
import newArrival3 from "../../../../public/HomeImages/newArrival3.png";
import newArrival4 from "../../../../public/HomeImages/newArrival4.png";

function NewArrival() {
  const ArrivalCards = [
    {
      id: 1,
      image: newArrival1,
      title: "Knitted Joggers",
    },
    {
      id: 2,
      image: newArrival2,
      title: "Full Sleeve",
    },
    {
      id: 3,
      image: newArrival3,
      title: "Active T-Shirts",
    },
    {
      id: 4,
      image: newArrival4,
      title: "Urban Shirts",
    },
  ];
  return (
    <div className="px-6 py-10">
      <h3 className="text-4xl font-bold mb-10 border-l-4 border-gray-800 pl-4 ">
        New Arrivals
      </h3>
      <div className="arrivalCards flex px-6 gap-20 font-extrabold">
        {ArrivalCards.map((arrivalCard, index) => {
          return (
            <div className=" space-y-6" key={index}>
              <Image src={arrivalCard.image} alt="arrival-image" />
              <h4 className="px-4">{arrivalCard.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewArrival;
