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
    <div className="px-2 py-8 sm:px-6 sm:py-10">
      <h3 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-10 border-l-4 border-gray-800 pl-2 sm:pl-4">
        New Arrivals
      </h3>
      <div className="arrivalCards flex flex-wrap justify-around gap-4  font-extrabold">
        {ArrivalCards.map((arrivalCard, index) => {
          return (
            <div
              className="space-y-4 sm:space-y-6 w-full sm:w-auto"
              key={index}
            >
              <Image
                src={arrivalCard.image}
                alt="arrival-image"
                className="w-full "
              />
              <h4 className="px-2 sm:px-4 text-center">{arrivalCard.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewArrival;
