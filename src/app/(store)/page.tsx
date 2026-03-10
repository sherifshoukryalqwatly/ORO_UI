"use client";

import dynamic from "next/dynamic";
import Categories from "@/src/components/store/CategoriesComponent";
import ProductGrid from "@/src/components/store/ProductGrid";

const Hero = dynamic(() => import("@/src/components/store/Hero"), {
  ssr: false,
});

const products = [
  { id: "1", title: "Stainless Steel Pan", image: "/Stainless Steel Pan.jpg", price: 49 },
  { id: "2", title: "Glass Bowl Set", image: "/bowl.jpg", price: 29 },
  { id: "3", title: "Knife Set", image: "/knife.jpg", price: 79 },
  { id: "4", title: "Cooking Pot", image: "/pot.jpg", price: 59 },
  { id: "5", title: "Cooking Pot", image: "/pot.jpg", price: 59 },
  { id: "6", title: "Cooking Pot", image: "/pot.jpg", price: 59 },
  { id: "7", title: "Cooking Pot", image: "/pot.jpg", price: 59 },
  { id: "8", title: "Cooking Pot", image: "/pot.jpg", price: 59 },
];

const slides = [
  {
    id: 1,
    image: "/slider1.avif",
    title: "Premium Kitchen Essentials",
    link: "/categories/cookware",
  },
  {
    id: 2,
    image: "/download.jpg",
    title: "Modern Cookware Collection",
    link: "/categories/glassware",
  },
  {
    id: 3,
    image: "/download (1).jpg",
    title: "Cook Like a Pro",
    link: "/products",
  },
];

export default function Home() {
  return (
    <>
      {/* FULL WIDTH HERO */}
      <Hero slides={slides} />

      {/* PAGE CONTENT */}
      <div className="max-w-7xl mx-auto px-6">
        <Categories />
        <ProductGrid products={products} />
      </div>
    </>
  );
}