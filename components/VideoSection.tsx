"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import Link from "next/dist/client/link"

const videos = [
    { id: 1, title: "Bridal Makeup", src: "/1.mp4" },
    { id: 2, title: "Clean Girl", src: "/2.mp4" },
    { id: 3, title: "Glam Look", src: "/3.mp4" },
    { id: 4, title: "Model Look", src: "/1.mp4" },
    { id: 5, title: "Vintage", src: "/2.mp4" },
]

export default function VideoSlider() {
    return (
        <section className="bg-white px-6 md:px-20 py-24">

            {/* TITLE */}
            <div className="max-w-7xl mx-auto mb-16">
                <h2 className="text-[40px] md:text-[64px] font-extralight">
                    Video Works
                </h2>
            </div>

            {/* CONTAINER GIỮ CHUẨN */}
            <div className="max-w-7xl mx-auto">

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1.2}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >

                    {videos.map((item) => (
                        <SwiperSlide key={item.id}>

                            <div className="relative group overflow-hidden rounded-xl">

                                {/* VIDEO */}
                                <video
                                    src={item.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />

                                {/* overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

                                {/* text */}
                                <div className="absolute bottom-6 left-6 text-white z-10 
            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">

                                    <h3 className="text-lg font-serif">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs tracking-[0.3em] mt-1 opacity-70">
                                        VIDEO LOOK
                                    </p>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* CONTAINER GIỮ CHUẨN */}
            <div className="max-w-7xl mx-auto mt-6">

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1.2}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >

                    {videos.map((item) => (
                        <SwiperSlide key={item.id}>

                            <div className="relative group overflow-hidden rounded-xl">

                                {/* VIDEO */}
                                <video
                                    src={item.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />

                                {/* overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

                                {/* text */}
                                <div className="absolute bottom-6 left-6 text-white z-10 
            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">

                                    <h3 className="text-lg font-serif">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs tracking-[0.3em] mt-1 opacity-70">
                                        VIDEO LOOK
                                    </p>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            

            {/* 🔥 BUTTON VIEW ALL */}
            <div className="flex justify-center mt-20">
                <Link
                    href="/portfolio"
                    className="group relative text-sm tracking-[0.3em] text-black"
                >
                    VIEW ALL WORKS

                    <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
                </Link>
            </div>

        </section>


    )
}