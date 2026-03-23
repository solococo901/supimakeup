"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const images = [
  "/p1.jpg",
  "/p2.jpg",
  "/p3.jpg",
  "/p4.jpg",
]

export default function CoursePro() {
  return (
    <section className="bg-[#fdfaf7] px-6 md:px-20 py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SLIDER */}
        <div>

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
                  className="w-full h-[520px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <p className="text-xs tracking-[0.3em] mb-4 text-gray-500">
            PROFESSIONAL COURSE
          </p>

          <h2 className="text-[36px] md:text-[52px] font-serif leading-tight mb-6">
            Khóa học makeup chuyên nghiệp
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Dành cho những bạn muốn theo đuổi nghề makeup chuyên nghiệp,
            xây dựng sự nghiệp và thu nhập ổn định trong ngành làm đẹp.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>• Kỹ thuật makeup từ cơ bản đến nâng cao</li>
            <li>• Bridal, studio, beauty, fashion makeup</li>
            <li>• Kỹ thuật tạo khối & xử lý da chuyên sâu</li>
            <li>• Làm việc với khách hàng & xây dựng thương hiệu cá nhân</li>
            <li>• Hỗ trợ định hướng nghề nghiệp sau khóa học</li>
          </ul>

          <p className="text-sm text-gray-500 mb-4">
            Thời gian: 1 - 2 tháng
          </p>

          <p className="text-lg font-medium mb-10">
            Học phí: 12.000.000 VNĐ
          </p>

          {/* CTA */}
          <button
            onClick={() =>
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative text-sm tracking-[0.3em] text-black"
          >
            ĐĂNG KÝ KHÓA HỌC

            <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
          </button>

        </div>

      </div>

    </section>
  )
}