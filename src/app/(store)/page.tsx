import Categories from "@/src/components/store/CategoriesComponent";
import Hero from "@/src/components/store/Hero";
import ProductGrid from "@/src/components/store/ProductGrid";

const products = [
  {
    id: "1",
    title: "Stainless Steel Pan",
    image: "/Stainless Steel Pan.jpg",
    price: 49,
  },
  {
    id: "2",
    title: "Glass Bowl Set",
    image: "/bowl.jpg",
    price: 29,
  },
  {
    id: "3",
    title: "Knife Set",
    image: "/knife.jpg",
    price: 79,
  },
  {
    id: "4",
    title: "Cooking Pot",
    image: "/pot.jpg",
    price: 59,
  },
  {
    id: "5",
    title: "Cooking Pot",
    image: "/pot.jpg",
    price: 59,
  },
  {
    id: "6",
    title: "Cooking Pot",
    image: "/pot.jpg",
    price: 59,
  },
  {
    id: "7",
    title: "Cooking Pot",
    image: "/pot.jpg",
    price: 59,
  },
  {
    id: "8",
    title: "Cooking Pot",
    image: "/pot.jpg",
    price: 59,
  },
];

 const slides = [
    { id: 1, image: "/hongkong1081704.jpg", title: "Premium Kitchen Essentials", subtitle: "Upgrade your cooking experience with ORO" },
    { id: 2, image: "/download.jpg", title: "Modern Cookware Collection", subtitle: "Quality tools for every kitchen" },
    { id: 3, image: "/download (1).jpg", title: "Cook Like a Pro", subtitle: "Discover our best kitchen products" },
  ];

export default function Home() {
  return (
    <>
      <section className="w-full">
        <Hero slides={slides} />
      </section>

      <Categories />

      <ProductGrid products={products} />
    </>
  );
}