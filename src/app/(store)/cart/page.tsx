"use client";

import Image from "next/image";
import { useState } from "react";

const initialCart = [
  {
    id: "10",
    title: "HEAT Pot Stand",
    images: [
      "https://www.ikea.com/kw/en/images/products/heat-pot-stand-cork__1204806_pe906845_s5.jpg?f=xl",
      "https://www.ikea.com/kw/en/images/products/klockren-steamer-insert-stainless-steel__1481200_pe1000455_s5.jpg?f=xl"
    ],
    price: 59,
    stock: 6,
    quantity: 1,
  },
  {
    id: "11",
    title: "HEAT Pot Stand",
    images: [
      "https://www.ikea.com/kw/en/images/products/heat-pot-stand-cork__1204806_pe906845_s5.jpg?f=xl",
      "https://www.ikea.com/kw/en/images/products/klockren-steamer-insert-stainless-steel__1481200_pe1000455_s5.jpg?f=xl"
    ],
    price: 59,
    stock: 6,
    quantity: 2,
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const increaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-semibold mb-10">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border rounded-lg p-4"
              >
                {/* Image */}
                <div className="relative w-24 h-24">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center border rounded">
                  <button
                    className="px-3 py-1"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    className="px-3 py-1"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  className="text-red-500 text-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="border rounded-lg p-6 h-fit">
            <h2 className="text-lg font-semibold mb-6">Order Summary</h2>

            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>

            <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}