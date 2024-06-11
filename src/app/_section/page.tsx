"use client";

import React, { useState } from "react";
import Hero from "./Hero/page";
import NewArrival from "./NewArrival/page";
import HeroCards from "./HeroCards/page";
import BigSavingZone from "./BigSavingZone/page";
import MensCategory from "./MensCategory/page";
import WomensCategory from "./WomensCategory/page";
import TopBrands from "./Brands/page";
import Limelight from "./Limelight/page";
import Feedback from "./Feedback/page";

const Section: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const handleAddToCart = (item: any) => {
    setCartItems((prevItems) => [...prevItems, item]);
    console.log("Item added to cart:", item);
  };

  return (
    <div className="space-y-14">
      <div className="fixed top-0 right-0 m-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Cart ({cartItems.length})
        </button>
      </div>
      <Hero />
      <HeroCards />
      <NewArrival cartItems={cartItems} handleAddToCart={handleAddToCart} />
      <BigSavingZone />
      <MensCategory cartItems={cartItems} handleAddToCart={handleAddToCart} />
      <WomensCategory cartItems={cartItems} handleAddToCart={handleAddToCart} />
      <TopBrands />
      <Limelight />
      <Feedback />
    </div>
  );
};

export default Section;
