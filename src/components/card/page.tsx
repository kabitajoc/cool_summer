import React from "react";
import Image, { StaticImageData } from "next/image";

// Define the interface for Cardprops
interface CardProps {
  image: StaticImageData;
  name: string;
  rating: number;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, name, rating, description }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        >
          {i < rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Image src={image} alt={`${name}'s avatar`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="flex items-center mb-2">{renderStars(rating)}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
