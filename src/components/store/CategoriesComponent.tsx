import CategoryCard from "./CategoryCard";

interface Category {
  title: string;
  image: string;
  slug: string;
}

export default function Categories() {

  const categories: Category[] = [
    {
      title: "Cookware",
      image: "/download (2).jpg",
      slug: "cookware",
    },
    {
      title: "Glassware",
      image: "/glassware.jpg",
      slug: "glassware",
    },
    {
      title: "Dishes",
      image: "/dishes.jpg",
      slug: "dishes",
    },
    {
      title: "utensils",
      image: "/utinslis.jpg",
      slug: "utensils",
    },
    {
      title: "Bakeware",
      image: "/bakeware.jpg",
      slug: "bakeware",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Shop by Category
          </h2>
          <p className="text-gray-500 mt-2">
            Discover our kitchen collections
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.slug}
              title={cat.title}
              image={cat.image}
              slug={cat.slug}
            />
          ))}
        </div>

      </div>
    </section>
  );
}