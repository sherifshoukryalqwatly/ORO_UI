"use client";

import dynamic from "next/dynamic";
import Categories from "@/src/components/store/CategoriesComponent";
import ProductGrid from "@/src/components/store/ProductGrid";
import StoreFeatures from "@/src/components/store/StoreFeatures";

const Hero = dynamic(() => import("@/src/components/store/Hero"), {
  ssr: false,
});

const products = [
  { id: "1", title: "Stainless Steel Pan", image: "https://www.ikea.com/kw/en/images/products/ikea-365-cookware-set-of-6-stainless-steel__1006151_pe825738_s5.jpg?f=xl", price: 49 },
  { id: "2", title: "RINNIG Pot holder", image: "https://www.ikea.com/kw/en/images/products/rinnig-pot-holder-grey__0918265_pe786437_s5.jpg?f=xl", price: 29 },
  { id: "3", title: "LYCKAD Oven/serving dish set of 2", image: "https://www.ikea.com/kw/en/images/products/lyckad-oven-serving-dish-set-of-2-dark-grey__0916171_pe785011_s5.jpg?f=xl", price: 79 },
  { id: "4", title: "RINNIG Tea towel, green/blue striped", image: "https://www.ikea.com/kw/en/images/products/rinnig-tea-towel-green-blue-striped__1416274_pe975566_s5.jpg?f=xl", price: 59 },
  { id: "5", title: "KLIPPKAKTUS Storage turntable", image: "https://www.ikea.com/kw/en/images/products/klippkaktus-storage-turntable__1243264_pe920533_s5.jpg?f=xl", price: 59 },
  { id: "6", title: "IKEA 365+ GUNSTIG Pot stand, magnetic", image: "https://www.ikea.com/kw/en/images/products/ikea-365-gunstig-pot-stand-magnetic-red-dark-grey__0711770_pe728462_s5.jpg?f=xl", price: 59 },
  { id: "7", title: "KLOCKREN Steamer insert, stainless steel", image: "https://www.ikea.com/kw/en/images/products/klockren-steamer-insert-stainless-steel__1481200_pe1000455_s5.jpg?f=xl", price: 59 },
  { id: "8", title: "HEAT Pot stand", image: "https://www.ikea.com/kw/en/images/products/heat-pot-stand-cork__1204806_pe906845_s5.jpg?f=xl", price: 59 },
];

const slides = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Berkeley-San_Francisco-Oakland--Sunset-Panorama.jpg",
    title: "Premium Kitchen Essentials",
    link: "/categories/cookware",
  },
  {
    id: 2,
    image: "http://dandywebsolution.com/skdslider/slides/1.jpg",
    title: "Modern Cookware Collection",
    link: "/categories/glassware",
  },
  {
    id: 3,
    image: "https://www.lambertgroupproductions.com/canyon/wordpress_full_screen_background/images/thumbsFullWidth/01_thumbs.jpg",
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
      <div className="px-7">
        <Categories />
        <ProductGrid products={products} />
        <StoreFeatures />
      </div>
    </>
  );
}