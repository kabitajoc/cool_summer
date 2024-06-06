import React from "react";
import Limelight1 from "@/assets/HomeImages/Limelight1.png";
import Limelight2 from "@/assets/HomeImages/Limelight2.png";
import Limelight3 from "@/assets/HomeImages/Limelight3.png";
import Limelight4 from "@/assets/HomeImages/Limelight4.png";
import Image from "next/image";

function Limelight() {
  const LimelightImages = [
    {
      id: 18,
      image: Limelight1,
      title: "Black Sweatshirt with ....",
      brand: "Jhanvi’s  Brand",
      price: "$123.00",
    },
    {
      id: 19,
      image: Limelight2,
      title: "line Pattern Black H...",
      brand: "AS’s  Brand",
      price: "$37.00",
    },
    {
      id: 20,
      image: Limelight3,
      title: "Black Shorts",
      brand: "MM’s  Brand",
      price: "$43.00",
    },
    {
      id: 21,
      image: Limelight4,
      title: "Levender Hoodie with ....",
      brand: "Nike’s  Brand",
      price: "$113.00",
    },
  ];
  return (
    <div className="px-6 py-10">
      <h3 className="text-4xl font-bold mb-10 border-l-4 border-gray-800 pl-4">
        In The Limelight
      </h3>
      <div className=" men-category flex flex-wrap justify-around gap-y-5 ">
        {LimelightImages.map((LimelightImage) => {
          return (
            <div className="Limelight-images relative" key={LimelightImage.id}>
              <Image src={LimelightImage.image} alt="" />
              <svg
                className="limelight-svg absolute top-3 left-3"
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" />
                <path
                  fill-rule="evenodd"
                  clipRule="evenodd"
                  d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z"
                  stroke="#3C4242"
                  stroke-width="1.26066"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="Limelight-text">
                <div className="title-brand">
                  <h4>{LimelightImage.title}</h4>
                  <p>{LimelightImage.brand}</p>
                </div>
                <div className="price">
                  <span>{LimelightImage.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Limelight;
