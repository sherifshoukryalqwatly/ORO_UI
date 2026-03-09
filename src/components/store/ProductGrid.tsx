import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

interface ProductGridProps {
  products?: Product[];
}

export default function ProductGrid({ products =[] }: ProductGridProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">
            Discover our best kitchen products
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>

      </div>
    </section>
  );
}