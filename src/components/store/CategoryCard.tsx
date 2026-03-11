import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image: string;
  slug: string;
}

export default function CategoryCard({
  title,
  image,
  slug,
}: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${slug}`}
      className="group block rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
    >
      {/* Image */}
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Title */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>
      </div>
    </Link>
  );
}