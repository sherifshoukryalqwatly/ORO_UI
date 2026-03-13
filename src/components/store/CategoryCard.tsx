import useInView from "@/src/hooks/useInView";
import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({
  title,
  image,
}: CategoryCardProps) {
    const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
      `}
    >
      <Link
        href={`/products?category=${title.toLowerCase()}`}
        className="group block rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg 
        transform transition duration-300 hover:-translate-y-2"
      >
        {/* Image */}
        <div className="group relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition">
          <IoEyeOutline className="text-white text-3xl" />
        </div>
      </div>

        {/* Title */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>
        </div>
      </Link>
    </div>
    
  );
}