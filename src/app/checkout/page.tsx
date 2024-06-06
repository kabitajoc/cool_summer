"use client";
import React from "react";
import wear8 from "@/assets/HomeImages/Rectangle 25 (7).png";
import wear9 from "@/assets/HomeImages/Rectangle 25 (8).png";
import wear10 from "@/assets/HomeImages/Rectangle 25 (9).png";
import Image from "next/image";
import { CheckoutForm } from "@src/components/BillingForm/checkoutForm";
import Checkout from "../_section/CheckOut/Checkout";

export default function CheckoutPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Check Out</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Billing Details</h2>
          <div className="w-full">
            <CheckoutForm />
          </div>
          <Checkout />
        
        </div>
       
     


        <div className="w-full lg:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="bg-white p-4 border border-gray-300 rounded">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={wear8}
                  alt="Blue Flower Print Crop Top"
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <p>Blue Flower Print Crop Top x 1</p>
                  <p>Color: Yellow</p>
                </div>
              </div>
              <p>$29.00</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={wear9}
                  alt="Lavender Hoodie"
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <p>Lavender Hoodie x 2</p>
                  <p>Color: Lavender</p>
                </div>
              </div>
              <p>$119.00</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={wear10}
                  alt="Black Sweatshirt"
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <p>Black Sweatshirt x 2</p>
                  <p>Color: Black</p>
                </div>
              </div>
              <p>$123.00</p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between items-center mb-2">
              <p>Subtotal (3 items)</p>
              <p>$513.00</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Savings</p>
              <p>-$30.00</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Shipping</p>
              <p>-$5.00</p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between items-center font-bold">
              <p>Total</p>
              <p>$478.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
