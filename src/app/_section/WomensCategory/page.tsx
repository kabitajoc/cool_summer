import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { MoveRight, ShoppingCart } from "lucide-react";
import { WomenCategories } from "@src/constants/Women/WomensCategoryImage";

type WomensCategory = {
  title: string;
  img: StaticImageData;
};

type ModalProps = {
  show: boolean;
  onClose: () => void;
  item: WomensCategory | null;
  addToCart: (item: WomensCategory) => void;
};

type WomensCategoryProps = {
  cartItems: WomensCategory[];
  handleAddToCart: (item: WomensCategory) => void;
};

const Modal: React.FC<ModalProps> = ({ show, onClose, item, addToCart }) => {
  if (!show || !item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/4">
        <Image
          src={item.img}
          alt={item.title}
          className="w-full mb-4"
          width={200}
          height={200}
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

const WomensCategory: React.FC<WomensCategoryProps> = ({ cartItems, handleAddToCart }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<WomensCategory | null>(null);

  const handleItemClick = (item: WomensCategory) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10">
      <h3 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-10 border-l-4 border-gray-800 pl-2 sm:pl-4">
        Womens Category
      </h3>
      <div className="flex flex-wrap justify-around items-center gap-4">
        {WomenCategories.map((category, index) => (
          <figure
            key={index}
            className="w-full sm:w-auto cursor-pointer"
            onClick={() => handleItemClick(category)}
          >
            <Image
              src={category.img}
              alt={`${category.title}`}
              className="w-full sm:w-auto h-auto"
            />
            <div className="flex justify-between items-center mt-2 sm:mt-4">
              <figcaption className="text-center">
                <p className="font-extrabold">{category.title}</p>
                <p>Explore Now !</p>
              </figcaption>
              <MoveRight className="ml-2" />
            </div>
          </figure>
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

export default WomensCategory;
