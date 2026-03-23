"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const reviews = [
  {
    name: "Lan Anh",
    role: "Học viên",
    text: "Học xong mình tự makeup đi làm mỗi ngày, rất tự tin ✨",
    image: "/p1.jpg",
  },
  {
    name: "Thảo My",
    role: "Học viên chuyên nghiệp",
    text: "Cô dạy rất kỹ, mình từ không biết gì giờ đã nhận khách rồi",
    image: "/p2.jpg",
  },
  {
    name: "Minh Tú",
    role: "Khách makeup",
    text: "Phong cách makeup rất xinh, đúng kiểu trong trẻo",
    image: "/p3.jpg",
  },
  {
    name: "Hải Yến",
    role: "Khách makeup",
    text: "Makeup rất tự nhiên, lên hình cực đẹp",
    image: "/p4.jpg",
  },
  {
    name: "Trúc Linh",
    role: "Học viên",
    text: "Sau khóa học mình đã nhận khách rồi ✨",
    image: "/p1.jpg",
  },
  {
    name: "Ngọc Anh",
    role: "Khách makeup",
    text: "Makeup giữ rất lâu, cả ngày vẫn xinh",
    image: "/p2.jpg",
  },
]

export default function TestimonialSlider() {
  return (
    <section className="bg-white px-6 md:px-20 py-24">

      {/* TITLE */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-[40px] md:text-[64px] font-extralight">
          Client & Student Reviews
        </h2>
      </div>

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto">

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {reviews.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-[300px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <p className="text-yellow-500 mb-2 text-sm">★★★★★</p>

                  <p className="text-lg font-serif mb-4">
                    “{item.text}”
                  </p>

                  <div className="text-sm text-gray-500">
                    <p>{item.name}</p>
                    <p className="text-xs tracking-[0.3em] mt-1">
                      {item.role}
                    </p>
                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  )
}