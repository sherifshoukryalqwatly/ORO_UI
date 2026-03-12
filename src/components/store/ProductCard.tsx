"use client";

import useInView from "@/src/hooks/useInView";
import Image from "next/image";
import Link from "next/link";
import { LiaCartPlusSolid } from "react-icons/lia";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  stock: number;
  recommended?: boolean;
  bestSeller?: boolean;
}


export default function ProductCard({ 
  id,
  title,
  image,
  price,
  stock,
  recommended,
  bestSeller
}: ProductCardProps) {
  const handleAddToCart = () => {
    console.log("Add to cart:", id);
  };
  const { ref, isVisible } = useInView();
  const isOutOfStock = stock === 0;
  const isLastOne = stock === 1;

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
      `}
    >
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden ">
  
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

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-300
            ${isOutOfStock ? "grayscale opacity-70" : "group-hover:scale-105"}`}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <Link href={`/product/${id}`}>
            <h3 className="text-gray-800 font-medium mb-2 line-clamp-1 leading-snug min-h-[44px] hover:text-black">
              {title}
            </h3>
          </Link>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">${price}</span>

            {/* Buttons as icons */}
            <div className="flex space-x-2">
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                type="button"
                className={`p-2 rounded-md text-white transition
                ${isOutOfStock ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900 hover:bg-black"}`}
                title="Add to Cart"
              >
                <LiaCartPlusSolid   size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}