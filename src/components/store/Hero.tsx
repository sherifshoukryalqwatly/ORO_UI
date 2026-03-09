"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    {
      id: 1,
      image: "/hongkong1081704.jpg",
      title: "Premium Kitchen Essentials",
      subtitle: "Upgrade your cooking experience with ORO",
    },
    {
      id: 2,
      image: "/download.jpg",
      title: "Modern Cookware Collection",
      subtitle: "Quality tools for every kitchen",
    },
    {
      id: 3,
      image: "/download (1).jpg",
      title: "Cook Like a Pro",
      subtitle: "Discover our best kitchen products",
    },
  ];

  if (!mounted) return null;

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[70vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[70vh]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>

                  <p className="text-lg mb-6">{slide.subtitle}</p>

                  <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}