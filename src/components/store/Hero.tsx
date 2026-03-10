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
  link?: string;
}

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  if (!slides) return null;

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
          
          {/* Entire slide clickable */}
          <a
            href={slide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full h-[70vh]"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={slide.id === 1}
            />
          </a>

        </SwiperSlide>
      ))}
    </Swiper>
  );
}