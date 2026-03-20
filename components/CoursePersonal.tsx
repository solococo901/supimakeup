"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const images = [
  "/p1.jpg",
  "/p2.jpg",
  "/p3.jpg",
  "/p4.jpg",
]

export default function CoursePersonal() {
  return (
    <section className="bg-white px-6 md:px-20 py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-xs tracking-[0.3em] mb-4 text-gray-500">
            PERSONAL COURSE
          </p>

          <h2 className="text-[36px] md:text-[52px] font-serif leading-tight mb-6">
            Khóa học makeup cá nhân
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Khóa học dành cho những bạn muốn tự trang điểm đẹp mỗi ngày,
            hiểu rõ gương mặt và phong cách phù hợp với bản thân.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>• Phân tích khuôn mặt & tone da</li>
            <li>• Hướng dẫn makeup tự nhiên - trong trẻo</li>
            <li>• Kỹ thuật nền mịn, che khuyết điểm</li>
            <li>• Makeup đi làm, đi tiệc</li>
            <li>• Hướng dẫn chọn mỹ phẩm phù hợp</li>
          </ul>

          <p className="text-sm text-gray-500 mb-10">
            Thời gian: 1 - 2 buổi (cá nhân 1:1)
          </p>

          {/* CTA */}
          <button className="group relative text-sm tracking-[0.3em] text-black">
            ĐĂNG KÝ KHÓA HỌC

            <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
          </button>

        </div>

        {/* RIGHT SLIDER */}
        <div className="max-w-full">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >

            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  className="w-full h-[500px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

    </section>
  )
}