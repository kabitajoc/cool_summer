"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ShoppingCart } from "lucide-react";
import { mensCategories } from "@src/constants/mensWearImage";

type MensCard = {
  id: number;
  img: StaticImageData;
  title: string;
};

type ModalProps = {
  show: boolean;
  onClose: () => void;
  item: MensCard | null;
  addToCart: (item: MensCard) => void;
};

const Modal: React.FC<ModalProps> = ({ show, onClose, item, addToCart }) => {
  if (!show || !item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/4">
        {item && (
          <>
            <Image src={item.img} alt="arrival-image" className="w-full mb-4" />
            <h4 className="text-center mb-4">{item.title}</h4>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
              onClick={() => {
                addToCart(item);
                onClose();
              }}
            >
              Add to Cart <ShoppingCart />
            </button>
          </>
        )}
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mt-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const MensCategory: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<MensCard | null>(null);

  const handleItemClick = (item: MensCard) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleAddToCart = (item: MensCard) => {
    // Implement your logic to add item to cart here
    console.log("Item added to cart:", item);
  };

  return (
    <div className="px-6 py-10">
      <h3 className="Men text-4xl font-bold mb-10 border-l-4 border-gray-800 pl-4">
        Mens Category
      </h3>
      <div className="men-category flex flex-wrap justify-around gap-y-5">
        {mensCategories.map((category) => (
          <div key={category.id} onClick={() => handleItemClick(category)}>
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
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        item={selectedItem}
        addToCart={handleAddToCart}
      />
    </div>
  );
};

export default MensCategory;
