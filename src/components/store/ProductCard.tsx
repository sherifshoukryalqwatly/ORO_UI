"use client";

import useInView from "@/src/hooks/useInView";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { LiaCartPlusSolid } from "react-icons/lia";
import { PiRepeatFill } from "react-icons/pi";

interface ProductCardProps {
  id: string;
  title: string;
  images: string[];
  price: number;
  stock: number;
  recommended?: boolean;
  bestSeller?: boolean;
}

export default function ProductCard({
  id,
  title,
  images,
  price,
  stock,
  recommended,
  bestSeller,
}: ProductCardProps) {
  const { ref, isVisible } = useInView();

  const isOutOfStock = stock === 0;
  const isLastOne = stock === 1;

  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavourite((prev) => !prev);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Add to cart:", id);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Quick view:", id);
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Compare product:", id);
  };

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
      `}
    >
      <Link href={`/products/${id}`}>
        <div
          className="
          group bg-white rounded-xl shadow-sm hover:shadow-xl
          transition-all duration-300 hover:-translate-y-2
          overflow-hidden cursor-pointer
        "
        >
          {/* Image Section */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            
            {/* Badges */}
            <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
              {isOutOfStock && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                  Out of Stock
                </span>
              )}

              {bestSeller && !isOutOfStock && (
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                  Best Seller
                </span>
              )}

              {isLastOne && !isOutOfStock && (
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  Last One
                </span>
              )}
            </div>

            {recommended && !isOutOfStock && (
              <span className="absolute top-2 right-2 z-20 bg-green-600 text-white text-xs px-2 py-1 rounded">
                Recommended
              </span>
            )}

            {/* Images */}
            {images.map((img, index) => (
              <Image
                key={img}
                src={img}
                alt={`${title} ${index + 1}`}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className={`
                  object-cover transition-all duration-500
                  ${
                    isOutOfStock
                      ? "grayscale opacity-70"
                      : index === 0
                      ? "opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-105"
                      : "opacity-0 group-hover:opacity-100 scale-105"
                  }
                `}
              />
            ))}

            {/* Action Icons */}
            {!isOutOfStock && (
              <div
                className="
                absolute right-4 top-1/2 -translate-y-1/2
                flex flex-col gap-2
                opacity-0 translate-x-6
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300 z-20
              "
              >
                {/* Quick View */}
                <button
                  onClick={handleQuickView}
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  <IoEyeOutline className="text-gray-700 text-lg hover:text-black transition" />
                </button>

                {/* Wishlist */}
                <button
                  onClick={handleFavourite}
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  {isFavourite ? (
                    <FaHeart className="text-red-500 text-lg" />
                  ) : (
                    <FaRegHeart className="text-gray-700 text-lg hover:text-red-500 transition" />
                  )}
                </button>

                {/* Compare */}
                <button
                  onClick={handleCompare}
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  <PiRepeatFill className="text-gray-700 text-lg hover:text-green-500 transition" />
                </button>
              </div>
            )}
          </div>

          {/* Product Content */}
          <div className="p-4">
            <h3 className="text-gray-800 font-medium mb-2 line-clamp-2 leading-snug min-h-[44px] hover:text-black">
              {title}
            </h3>

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">
                ${price}
              </span>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`
                  p-2 rounded-md text-white transition
                  ${
                    isOutOfStock
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gray-900 hover:bg-black"
                  }
                `}
                title="Add to Cart"
              >
                <LiaCartPlusSolid size={22} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}