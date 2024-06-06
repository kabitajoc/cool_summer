import { ShoppingCart, Star, Heart, Tag } from "lucide-react";
import Image from "next/image";
import productImage from "@/assets/HomeImages/Limelight1.png";

function ProductDetails() {
  return (
    <div className="flex">
      <div className="p-6 max-w-xl mx-auto ">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">
            Raven Hoodie With Black colored Design
          </h1>
          <div className="flex items-center">
            <Star className="text-yellow-500" />
            <span className="ml-1">4.5</span>
            <span className="text-gray-500 ml-2">(120 comments)</span>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <span className="font-bold text-xl">$35.00</span>
          <Tag className="text-green-500 ml-2" />
        </div>
        <div className="mb-4">
          <span className="font-bold">Colors Available:</span>
          <div className="flex space-x-2 mt-2">
            <div className="w-6 h-6 bg-black rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded flex items-center">
          <ShoppingCart className="mr-2" /> Add to Cart
        </button>
        <div className="mt-4 flex space-x-4">
          <button className="flex items-center">
            <Heart className="mr-2" /> Save
          </button>
          <button className="flex items-center">
            <ShoppingCart className="mr-2" /> Buy Now
          </button>
        </div>
      </div>
      <Image src={productImage} alt="descriptive-image" />
    </div>
  );
}
export default ProductDetails;
