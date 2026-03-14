"use client";

import ProductCard from "@/src/components/store/ProductCard";

type FavouriteProduct = {
  id: string;
  title: string;
  images: string[];
  price: number;
  stock: number;
  recommended?: boolean;
  bestSeller?: boolean;
};

const favourites : FavouriteProduct[] = [
  { id: "1", title: "Stainless Steel Pan", images: ["https://www.ikea.com/kw/en/images/products/ikea-365-cookware-set-of-6-stainless-steel__1006151_pe825738_s5.jpg?f=xl","https://www.ikea.com/kw/en/images/products/rinnig-pot-holder-grey__0918265_pe786437_s5.jpg?f=xl"], price: 49, stock: 1},
  { id: "2", title: "RINNIG Pot holder", images: ["https://www.ikea.com/kw/en/images/products/rinnig-pot-holder-grey__0918265_pe786437_s5.jpg?f=xl","https://www.ikea.com/kw/en/images/products/ikea-365-cookware-set-of-6-stainless-steel__1006151_pe825738_s5.jpg?f=xl"], price: 29, stock: 5, bestSeller: true },
];

export default function Favourites() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold">My Favourites</h1>

        <span className="text-gray-500">
          {favourites.length} products
        </span>
      </div>

      {/* Empty State */}
      {favourites.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-gray-500 text-lg">
            Your favourites list is empty
          </p>
        </div>
      ) : (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favourites.map((product) => (
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

      )}
    </div>
  );
}