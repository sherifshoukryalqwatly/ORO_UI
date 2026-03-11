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
    <div className="pt-2 ">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="hero-swiper h-[50vh] md:h-[65vh] lg:h-[70vh] rounded-xl overflow-hidden"
      >

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-[50vh] md:h-[65vh] lg:h-[70vh]"
            >

              <Image
                src={slide.image}
                alt={slide.title}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                className="object-cover"
                priority={slide.id === 1}
              />

            </a>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}