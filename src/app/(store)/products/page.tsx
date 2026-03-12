"use client";

import { useState, useMemo } from "react";
import ProductGrid from "@/src/components/store/ProductGrid";
import SidebarFilters from "@/src/components/store/Filtering";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const products = useMemo(
    () => [
      { id: "1", title: "Stainless Steel Pan", images: ["https://www.ikea.com/kw/en/images/products/ikea-365-cookware-set-of-6-stainless-steel__1006151_pe825738_s5.jpg?f=xl"], price: 49, stock: 1, category: "Cookware" },
      { id: "2", title: "RINNIG Pot holder", images: ["https://www.ikea.com/kw/en/images/products/rinnig-pot-holder-grey__0918265_pe786437_s5.jpg?f=xl"], price: 29, stock: 5, bestSeller: true, category: "Cookware" },
      { id: "3", title: "LYCKAD Oven/serving dish set of 2", images: ["https://www.ikea.com/kw/en/images/products/lyckad-oven-serving-dish-set-of-2-dark-grey__0916171_pe785011_s5.jpg?f=xl"], price: 79, stock: 0, category: "Cookware" },
      { id: "4", title: "RINNIG Tea towel, green/blue striped", images: ["https://www.ikea.com/kw/en/images/products/rinnig-tea-towel-green-blue-striped__1416274_pe975566_s5.jpg?f=xl"], price: 59, stock: 3, recommended: true, category: "Cookware" },
      { id: "5", title: "KLIPPKAKTUS Storage turntable", images: ["https://www.ikea.com/kw/en/images/products/klippkaktus-storage-turntable__1243264_pe920533_s5.jpg?f=xl"], price: 59, stock: 8, category: "Cookware" },
      { id: "6", title: "IKEA 365+ GUNSTIG Pot stand, magnetic", images: ["https://www.ikea.com/kw/en/images/products/ikea-365-gunstig-pot-stand-magnetic-red-dark-grey__0711770_pe728462_s5.jpg?f=xl"], price: 59, stock: 2, category: "Utensils" },
      { id: "7", title: "KLOCKREN Steamer insert, stainless steel", images: ["https://www.ikea.com/kw/en/images/products/klockren-steamer-insert-stainless-steel__1481200_pe1000455_s5.jpg?f=xl"], price: 59, stock: 4, category: "Utensils" },
      { id: "8", title: "HEAT Pot stand", images: ["https://www.ikea.com/kw/en/images/products/heat-pot-stand-cork__1204806_pe906845_s5.jpg?f=xl"], price: 59, stock: 6, category: "Bakeware" },
    ],
    []
  );

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category || ""))).filter(Boolean),
    [products]
  );

  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category")?.toLowerCase();
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl ? categoryFromUrl.charAt(0).toUpperCase() + categoryFromUrl.slice(1) : "all"
  );  
  const filterFromUrl =
  (searchParams.get("filter") as
    | "all"
    | "bestSeller"
    | "recommended"
    | "inStock") || "all";
  const [filter, setFilter] = useState<
    "all" | "bestSeller" | "recommended" | "inStock"
  >(filterFromUrl);
  const [sort, setSort] = useState<"none" | "priceAsc" | "priceDesc">("none");
  const [priceRange, setPriceRange] = useState<"all" | "price0_50" | "price50_100" | "price100_200" | "price200_plus">("all");

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products
    .filter((p) => {
      // handle category
      if (selectedCategory === "all") return true;
      return p.category === selectedCategory;
    })
    .filter((p) => {
      // handle product type filters
      if (filter === "bestSeller") return p.bestSeller;
      if (filter === "recommended") return p.recommended;
      if (filter === "inStock") return p.stock > 0;
      return true;
    });

    switch (priceRange) {
      case "price0_50": result = result.filter(p => p.price <= 50); break;
      case "price50_100": result = result.filter(p => p.price > 50 && p.price <= 100); break;
      case "price100_200": result = result.filter(p => p.price > 100 && p.price <= 200); break;
      case "price200_plus": result = result.filter(p => p.price > 200); break;
    }

    if (sort === "priceAsc") return [...result].sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") return [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [products, selectedCategory, filter, priceRange, sort]);

  return (
    <main className="flex flex-col md:flex-row px-4 md:px-6 py-6 gap-6">

      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4 flex justify-end">
        <button
          className="px-4 py-2 border rounded-md shadow bg-white"
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        >
          {isMobileFiltersOpen ? "Close Filters" : "Filters"}
        </button>
      </div>

      {/* Mobile Filters Panel */}
      {isMobileFiltersOpen && (
        <div className="md:hidden mb-4 p-4 rounded-md bg-gray-50">
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

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 p-4 bg-gray-50 h-[calc(100vh-2.5rem)] sticky top-[2.5rem]">
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
      </aside>

      {/* Products Grid */}
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">All Products</h1>
        <p className="text-gray-500 mb-6">Explore our collection of kitchenware and home essentials.</p>
        <ProductGrid products={filteredProducts} />
      </div>
    </main>
  );
}