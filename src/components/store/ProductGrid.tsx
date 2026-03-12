"use client";

import ProductCard from "./ProductCard";

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

export default function ProductGrid({ products = [] }: ProductGridProps) {
  return (
    <section className="pb-16">
      <div className="px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">
            Discover our best kitchen products
          </p>
        </div>

        {/* Grid */}
        <div className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-6"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              images={product.images}       // pass the array of images
              price={product.price}
              stock={product.stock}
              recommended={product.recommended}
              bestSeller={product.bestSeller}
            />
          ))}
        </div>

      </div>
    </section>
  );
}