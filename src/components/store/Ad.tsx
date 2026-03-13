import Image from "next/image";
import Link from "next/link";

interface AdProps {
  title: string;
  image: string;
  link?: string;
}
export default function Ad({ title, image, link }: AdProps) {
    const content = (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div className="relative w-full h-48 sm:h-64 md:h-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );

  if (link) {
    return <Link href={link}>{content}</Link>;
  }

  return content;
}