import React from "react";
import feedbackimage from "@/assets/HomeImages/feedback.png";
import feedbackimage1 from "@/assets/HomeImages/feedback1.png";
import feedbackimage2 from "@/assets/HomeImages/feedback2.png";
import Card from "@/components/card/page";
import Image from "next/image";

const cardData = [
  {
    image: feedbackimage,
    name: "Floyd Miles",
    rating: 5,
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    image: feedbackimage1,
    name: "Ronald Richards",
    rating: 4,
    description:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    image: feedbackimage2,
    name: "Savannah Nguyen",
    rating: 5,
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
];

const Feedback = () => {
  return (
    <div className="px-6 py-10">
      <h3 className="text-4xl font-bold mb-10 border-l-4 border-gray-800 pl-4">
        Feedback
      </h3>
      <div className="flex flex-wrap justify-around p-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            rating={card.rating}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
