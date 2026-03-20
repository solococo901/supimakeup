"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function ImageSlider({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000, // 🔥 2 GIÂY
        disableOnInteraction: false, // không bị dừng khi user chạm
      }}
      speed={800} // chuyển mượt hơn (rất nên có)
      className="w-full h-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}