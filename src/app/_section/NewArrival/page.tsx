import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrivalCards } from "@src/constants/ArrivalImages";
import { ShoppingCart } from "lucide-react";

type ArrivalCard = {
  id: number;
  image: StaticImageData;
  title: string;
};

type ModalProps = {
  show: boolean;
  onClose: () => void;
  item: ArrivalCard | null;
  addToCart: (item: ArrivalCard) => void;
};

type NewArrivalProps = {
  cartItems: ArrivalCard[];
  handleAddToCart: (item: ArrivalCard) => void;
};

// Modal component
const Modal: React.FC<ModalProps> = ({ show, onClose, item, addToCart }) => {
  if (!show || !item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/4">
        {item && (
          <>
            <Image
              src={item.image}
              alt="arrival-image"
              className="w-full mb-4"
            />
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

const NewArrival: React.FC<NewArrivalProps> = ({ cartItems, handleAddToCart }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ArrivalCard | null>(null);

  const handleImageClick = (item: ArrivalCard) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div className="px-2 py-8 sm:px-6 sm:py-10">
      <h3 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-10 border-l-4 border-gray-800 pl-2 sm:pl-4">
        New Arrivals
      </h3>
      <div className="arrivalCards flex flex-wrap justify-around gap-4 font-extrabold">
        {ArrivalCards.map((arrivalCard, index) => (
          <div
            className="space-y-4 sm:space-y-6 w-full sm:w-auto cursor-pointer"
            key={index}
            onClick={() => handleImageClick(arrivalCard)}
          >
            <Image
              src={arrivalCard.image}
              alt="arrival-image"
              className="w-full"
            />
            <h4 className="px-2 sm:px-4 text-center">{arrivalCard.title}</h4>
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

export default NewArrival;
