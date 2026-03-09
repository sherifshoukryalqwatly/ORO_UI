import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

export default function ProductCard({
  id,
  title,
  image,
  price,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
      
      {/* Image */}
      <Link href={`/product/${id}`}>
        <div className="relative h-60 w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/product/${id}`}>
          <h3 className="text-gray-800 font-medium mb-2 line-clamp-2 hover:text-black">
            {title}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">
            ${price}
          </span>

          <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-black transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}