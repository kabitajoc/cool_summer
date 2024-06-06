"use client";

import React, { useState } from "react";

export default function Checkout() {
  const [shippingAddress, setShippingAddress] = useState("same");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Shipping Address Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Shipping Address</h2>
        <div className="space-y-2">
          <div>
            <input
              type="radio"
              id="sameAsBilling"
              name="shippingAddress"
              value="same"
              checked={shippingAddress === "same"}
              onChange={() => setShippingAddress("same")}
              className="mr-2"
            />
            <label htmlFor="sameAsBilling">Same as Billing address</label>
          </div>
          <div>
            <input
              type="radio"
              id="differentAddress"
              name="shippingAddress"
              value="different"
              checked={shippingAddress === "different"}
              onChange={() => setShippingAddress("different")}
              className="mr-2"
            />
            <label htmlFor="differentAddress">
              Use a different shipping address
            </label>
          </div>
        </div>
      </div>

      {/* Shipping Method Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Shipping Method</h2>
        <p>Arrives by Monday, June 7</p>
        <p>Delivery Charges: $5.00</p>
      </div>

      {/* Payment Method Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
        <div className="space-y-2">
          <div>
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={() => setPaymentMethod("creditCard")}
              className="mr-2"
            />
            <label htmlFor="creditCard">Credit Card</label>
          </div>
          <div>
            <input
              type="radio"
              id="cashOnDelivery"
              name="paymentMethod"
              value="cashOnDelivery"
              checked={paymentMethod === "cashOnDelivery"}
              onChange={() => setPaymentMethod("cashOnDelivery")}
              className="mr-2"
            />
            <label htmlFor="cashOnDelivery">Cash on delivery</label>
          </div>
          <div>
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="mr-2"
            />
            <label htmlFor="paypal">Paypal</label>
          </div>
        </div>

        {/* Credit Card Form */}
        {paymentMethod === "creditCard" && (
          <div className="mt-4 space-y-4">
            <div className="flex flex-col">
              <label htmlFor="cardNumber" className="mb-1">
                Card number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="nameOnCard" className="mb-1">
                Name on card
              </label>
              <input
                type="text"
                id="nameOnCard"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="expirationDate" className="mb-1">
                Expiration date (MM/YY)
              </label>
              <input
                type="text"
                id="expirationDate"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="securityCode" className="mb-1">
                Security Code
              </label>
              <input
                type="text"
                id="securityCode"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        )}
      </div>

     
      <button className="w-full bg-purple-600 text-white p-2 rounded">
        Pay Now
      </button>
    </div>
  );
}
