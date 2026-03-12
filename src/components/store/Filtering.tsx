// Sidebar filtering component
export default function SidebarFilters({
  categories,
  selectedCategory,
  setSelectedCategory,
  filter,
  setFilter,
  sort,
  setSort,
  priceRange,
  setPriceRange,
}: {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  filter: "all" | "bestSeller" | "recommended" | "inStock";
  setFilter: (f: typeof filter) => void;
  sort: "none" | "priceAsc" | "priceDesc";
  setSort: (s: "none" | "priceAsc" | "priceDesc") => void;
  priceRange: "all" | "price0_50" | "price50_100" | "price100_200" | "price200_plus";
  setPriceRange: (s: "all" | "price0_50" | "price50_100" | "price100_200" | "price200_plus") => void;
}) {
  return (
    <aside className="w-full md:w-64 p-4 bg-gray-50 shadow-lg h-screen sticky top-0">
        <h2 className="font-bold mb-3 text-lg">Filters</h2>

        {/* Categories */}
        <div className="mb-6">
            <h3 className="font-medium mb-2">Categories</h3>
            <ul className="flex flex-col gap-1">
            <li
                onClick={() => setSelectedCategory("all")}
                className={`cursor-pointer px-2 py-1 rounded ${
                selectedCategory === "all" ? "bg-black text-white" : "hover:bg-gray-200"
                }`}
            >
                All
            </li>
            {categories.map((cat) => (
                <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-2 py-1 rounded ${
                    selectedCategory === cat ? "bg-black text-white" : "hover:bg-gray-200"
                }`}
                >
                {cat}
                </li>
            ))}
            </ul>
        </div>

        {/* Product type filters */}
        <div className="mb-6">
            <h3 className="font-medium mb-2">Product Type</h3>
            <ul className="flex flex-col gap-1">
            {["all", "bestSeller", "recommended", "inStock"].map((f) => (
                <li
                key={f}
                onClick={() => setFilter(f as typeof filter)}
                className={`cursor-pointer px-2 py-1 rounded ${
                    filter === f ? "bg-black text-white" : "hover:bg-gray-200"
                }`}
                >
                {f === "all"
                    ? "All"
                    : f === "bestSeller"
                    ? "Best Seller"
                    : f === "recommended"
                    ? "Recommended"
                    : "In Stock"}
                </li>
            ))}
            </ul>
        </div>

        {/* Price Range */}
        <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value as typeof priceRange)}
            className="w-full border px-3 py-2 rounded-md"
            >
            <option value="all">All Prices</option>
            <option value="price0_50">$0 - $50</option>
            <option value="price50_100">$50 - $100</option>
            <option value="price100_200">$100 - $200</option>
            <option value="price200_plus">$200+</option>
            </select>
        </div>

        {/* Sort */}
        <div className="mb-6">
            <h3 className="font-medium mb-2">Sort By</h3>
            <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="w-full border px-3 py-2 rounded-md"
            >
            <option value="none">Default</option>
            <option value="priceAsc">Price: Low → High</option>
            <option value="priceDesc">Price: High → Low</option>
            </select>
        </div>
    </aside>
  );
}