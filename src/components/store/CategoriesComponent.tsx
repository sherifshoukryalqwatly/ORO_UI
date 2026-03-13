import CategoryCard from "./CategoryCard";

interface Category {
  title: string;
  image: string;
  slug: string;
}

export default function Categories() {

  const categories: Category[] = [
    { title: "Cookware", image: "https://www.ikea.com/kw/en/images/products/annons-5-piece-cookware-set-glass-stainless-steel__43510_pe139263_s5.jpg?f=xl", slug: "cookware" },
    { title: "Glassware", image: "https://www.ikea.com/kw/en/images/products/svalka-glass-clear-glass__0913974_pe783804_s5.jpg?f=xl", slug: "glassware" },
    { title: "Dishes", image: "https://www.ikea.com/kw/en/images/products/havsgaedda-side-plate-stripe-pattern-grey__1429653_pe981949_s5.jpg?f=xl", slug: "dishes" },
    { title: "Coffee & Tea", image: "https://www.ikea.com/kw/en/images/products/tobisfisk-mug-blue-lilac__1397584_pe967648_s5.jpg?f=xl", slug: "coffee & tea" },
    { title: "Knives", image: "https://www.ikea.com/kw/en/images/products/ikea-365-5-piece-knife-set-stainless-steel__1173121_pe893807_s5.jpg?f=xl", slug: "knives" },
    { title: "Place mats & Costers", image: "https://www.ikea.com/kw/en/images/products/soare-place-mat-water-hyacinth__0711868_pe728538_s5.jpg?f=xl", slug: "place mats & costers" },
  ];

  return (
    <section className="py-16 bg-gray-50" id="categories">
      <div className="px-4 md:px-6">

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
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            xl:grid-cols-6
            gap-6
          "
        >
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