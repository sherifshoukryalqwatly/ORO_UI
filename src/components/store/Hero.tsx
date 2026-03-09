"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  if (!slides) return null; // ✨ حماية إضافية

  return (
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
              priority={slide.id === 1}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
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
  );
}