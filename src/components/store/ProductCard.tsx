"use client";

import useInView from "@/src/hooks/useInView";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart, FiRepeat } from "react-icons/fi";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

export default function ProductCard({ id, title, image, price }: ProductCardProps) {
  const handleAddToCart = () => {
    console.log("Add to cart:", id);
  };

  const handleExchange = () => {
    console.log("Exchange clicked:", id);
  };
    const { ref, isVisible } = useInView();
  

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
        <Link href={`/product/${id}`}>
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="p-4">
          <Link href={`/product/${id}`}>
            <h3 className="text-gray-800 font-medium mb-2 line-clamp-2 hover:text-black">
              {title}
            </h3>
          </Link>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">${price}</span>

            {/* Buttons as icons */}
            <div className="flex space-x-2">
              <button
                onClick={handleAddToCart}
                type="button"
                className="p-2 rounded-md text-white transition bg-gray-900 hover:bg-black"
                title="Add to Cart"
              >
                <FiShoppingCart size={18} />
              </button>

              <button
                onClick={handleExchange}
                type="button"
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition text-gray-700"
                title="Exchange"
              >
                <FiRepeat size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}