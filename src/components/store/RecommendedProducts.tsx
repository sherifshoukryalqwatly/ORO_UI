"use client";

import ProductCard from "./ProductCard";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  images: string[];
  price: number;
  stock: number;
  recommended?: boolean;
  bestSeller?: boolean;
}

interface ProductGridProps {
  products?: Product[];
}

export default function RecommendedProducts({ products = [] }: ProductGridProps) {

  const recommendedProducts = products.filter(product => product.recommended);

  const displayedProducts = recommendedProducts.slice(0, 10);

  return (
    <section className="py-10">
      <div className="px-4 md:px-6">

        {/* Grid */}
        <div
          className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-6"
        >
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              images={product.images}
              price={product.price}
              stock={product.stock}
              recommended={product.recommended}
              bestSeller={product.bestSeller}
            />
          ))}
        </div>

        {/* View More */}
        {recommendedProducts.length > 10 && (
          <div className="flex justify-end mt-10">
            <Link
              href="/products?filter=recommended"
              className="px-6 py-3 text-gray-700 rounded-lg hover:text-red-900 transition"
            >
              View More...
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}