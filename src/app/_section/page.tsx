import React from "react";
import Hero from "./Hero/page";

import NewArrival from "./NewArrival/page";
import HeroCards from "./HeroCards/page";
import BigSavingZone from "./BigSavingZone/page";
import MensCategory from "./MensCategory/page";
import WomensCategory from "./WomensCategory/page";
import TopBrands from "./Brands/page";
import Limelight from "./Limelight/page";
import Feedback from "./Feedback/page";

function Section() {
  return (
    <div className=" space-y-14 ">
      <Hero />
      <HeroCards />
      <NewArrival />
      <BigSavingZone />
      <MensCategory />
      <WomensCategory />
      <TopBrands />
      <Limelight />
      <Feedback />
    </div>
  );
}

export default Section;
