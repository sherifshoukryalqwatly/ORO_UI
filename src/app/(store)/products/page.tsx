"use client";

import { useState, useMemo } from "react";
import ProductGrid from "@/src/components/store/ProductGrid";
import SidebarFilters from "@/src/components/store/Filtering";

export default function ProductsPage() {
  // Memoize products array
  const products = useMemo(
    () => [
      { id: "1", title: "Stainless Steel Pan", images: ["https://www.ikea.com/kw/en/images/products/ikea-365-cookware-set-of-6-stainless-steel__1006151_pe825738_s5.jpg?f=xl","https://www.ikea.com/kw/en/images/products/rinnig-pot-holder-grey__0918265_pe786437_s5.jpg?f=xl"], price: 49, stock: 1 , category: "Cookware",},
      { id: "2", title: "RINNIG Pot holder", images: ["https://www.ikea.com/kw/en/images/products/rinnig-pot-holder-grey__0918265_pe786437_s5.jpg?f=xl","https://www.ikea.com/kw/en/images/products/ikea-365-cookware-set-of-6-stainless-steel__1006151_pe825738_s5.jpg?f=xl"], price: 29, stock: 5, bestSeller: true , category: "Cookware", },
      { id: "3", title: "LYCKAD Oven/serving dish set of 2", images: ["https://www.ikea.com/kw/en/images/products/lyckad-oven-serving-dish-set-of-2-dark-grey__0916171_pe785011_s5.jpg?f=xl","https://www.ikea.com/kw/en/images/products/rinnig-tea-towel-green-blue-striped__1416274_pe975566_s5.jpg?f=xl"], price: 79, stock: 0 , category: "Cookware", },
      { id: "4", title: "RINNIG Tea towel, green/blue striped", images: ["https://www.ikea.com/kw/en/images/products/rinnig-tea-towel-green-blue-striped__1416274_pe975566_s5.jpg?f=xl","https://www.ikea.com/kw/en/images/products/lyckad-oven-serving-dish-set-of-2-dark-grey__0916171_pe785011_s5.jpg?f=xl"], price: 59, stock: 3 , recommended: true , category: "Cookware",  },
      { id: "5", title: "KLIPPKAKTUS Storage turntable", images: ["https://www.ikea.com/kw/en/images/products/klippkaktus-storage-turntable__1243264_pe920533_s5.jpg?f=xl","https://www.ikea.com/kw/en/images/products/ikea-365-gunstig-pot-stand-magnetic-red-dark-grey__0711770_pe728462_s5.jpg?f=xl"], price: 59, stock: 8 , category: "Cookware", },
      { id: "6", title: "IKEA 365+ GUNSTIG Pot stand, magnetic", images: ["https://www.ikea.com/kw/en/images/products/ikea-365-gunstig-pot-stand-magnetic-red-dark-grey__0711770_pe728462_s5.jpg?f=xl","https://www.ikea.com/kw/en/images/products/klippkaktus-storage-turntable__1243264_pe920533_s5.jpg?f=xl"], price: 59, stock: 2 , category: "Utensils", },
      { id: "7", title: "KLOCKREN Steamer insert, stainless steel", images: ["https://www.ikea.com/kw/en/images/products/klockren-steamer-insert-stainless-steel__1481200_pe1000455_s5.jpg?f=xl","https://www.ikea.com/kw/en/images/products/heat-pot-stand-cork__1204806_pe906845_s5.jpg?f=xl"], price: 59, stock: 4 , category: "Utensils", },
      { id: "8", title: "HEAT Pot stand",  images: ["https://www.ikea.com/kw/en/images/products/heat-pot-stand-cork__1204806_pe906845_s5.jpg?f=xl","https://www.ikea.com/kw/en/images/products/klockren-steamer-insert-stainless-steel__1481200_pe1000455_s5.jpg?f=xl"], price: 59, stock: 6 , category: "Bakeware", },
    ],
    []
  );

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category || ""))).filter(Boolean),
    [products]
  );

  // States
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filter, setFilter] = useState<"all" | "bestSeller" | "recommended" | "inStock">("all");
  const [sort, setSort] = useState<"none" | "priceAsc" | "priceDesc">("none");
  const [priceRange, setPriceRange] = useState<
    "all" | "price0_50" | "price50_100" | "price100_200" | "price200_plus"
  >("all");
  const [showFilters, setShowFilters] = useState(false); // mobile toggle

  // Filtered products
  const filteredProducts = useMemo(() => {
    let result = products
      .filter((p) => selectedCategory === "all" || p.category === selectedCategory)
      .filter((p) => {
        if (filter === "bestSeller") return p.bestSeller;
        if (filter === "recommended") return p.recommended;
        if (filter === "inStock") return p.stock > 0;
        return true;
      });

    // Apply price range
    switch (priceRange) {
      case "price0_50":
        result = result.filter((p) => p.price >= 0 && p.price <= 50);
        break;
      case "price50_100":
        result = result.filter((p) => p.price > 50 && p.price <= 100);
        break;
      case "price100_200":
        result = result.filter((p) => p.price > 100 && p.price <= 200);
        break;
      case "price200_plus":
        result = result.filter((p) => p.price > 200);
        break;
      default:
        break;
    }

    // Apply sorting
    if (sort === "priceAsc") return result.sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") return result.sort((a, b) => b.price - a.price);
    return result;
  }, [products, selectedCategory, filter, priceRange, sort]);

  return (
    <main className="flex flex-col md:flex-row px-4 md:px-6 py-10 gap-6">
      {/* Mobile toggle button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 bg-gray-900 text-white rounded-md"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Sidebar */}
      {(showFilters || true) && ( // always show on md+
        <div className={`w-full md:w-64 md:flex-shrink-0 ${showFilters ? "block" : "hidden"} md:block`}>
          <SidebarFilters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            filter={filter}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>
      )}

      {/* Products Grid */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">All Products</h1>
        <p className="text-gray-500 mb-6">
          Explore our collection of kitchenware and home essentials.
        </p>
        <ProductGrid products={filteredProducts} />
      </div>
    </main>
  );
}