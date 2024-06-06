import React from "react";
import Image from "next/image";
import { Trash } from "lucide-react";
import wear8 from "@/assets/HomeImages/Rectangle 25 (7).png";
import wear9 from "@/assets/HomeImages/Rectangle 25 (8).png";
import wear10 from "@/assets/HomeImages/Rectangle 25 (9).png";
import Link from "next/link";

const Cart = () => {
  const items = [
    {
      image: wear8,
      name: "Blue Flower Print Crop Top",
      color: "Yellow",
      size: "M",
      price: "$29.00",
      quantity: 1,
      shipping: "FREE",
      subtotal: "$29.00",
    },
    {
      image: wear9,
      name: "Lavender Hoodie",
      color: "Lavender",
      size: "L",
      price: "$119.00",
      quantity: 1,
      shipping: "FREE",
      subtotal: "$119.00",
    },
    {
      image: wear10,
      name: "Black Sweatshirt",
      color: "Black",
      size: "S",
      price: "$123.00",
      quantity: 2,
      shipping: "$5.00",
      subtotal: "$246.00",
    },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 font-poppins">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-left">
                Product Details
              </th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-right">Price</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-right">Quantity</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-right">Shipping</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-right">Subtotal</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 sm:py-4 px-2 sm:px-4">
                  <div className="flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="mr-2 sm:mr-4"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Color: {item.color}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Size: {item.size}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-4 text-right">
                  {item.price}
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-4 text-right">
                  <div className="flex items-center justify-end">
                    <button className="bg-gray-200 px-2 py-1 text-xs sm:text-sm">
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="bg-gray-200 px-2 py-1 text-xs sm:text-sm">
                      +
                    </button>
                  </div>
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-4 text-right">
                  {item.shipping}
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-4 text-right">
                  {item.subtotal}
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-4 text-center">
                  <button>
                    <Trash className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row mt-6">
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-lg font-bold mb-2">Discount Codes</h2>
          <p className="text-sm text-gray-600 mb-4">
            Enter your coupon code if you have one
          </p>
          <div className="flex">
            <input
              type="text"
              className="border rounded-l-lg p-2 w-full"
              placeholder="Coupon Code"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg">
              Apply Coupon
            </button>
          </div>
          <button className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
            Continue Shopping
          </button>
        </div>
        <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Summary</h2>
            <div className="flex justify-between py-2">
              <span>Sub Total</span>
              <span>$513.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between py-2 font-bold">
              <span>Grand Total</span>
              <span>$518.00</span>
            </div>
            <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg">
              <Link href="/checkout">Proceed To Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
