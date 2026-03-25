"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Grid } from "swiper/modules"

import { listenVideoWorks } from "@/lib/getVideoWorks"
import { getYoutubeEmbed, getYoutubeId } from "@/lib/youtube"

import "swiper/css"
import "swiper/css/grid"

import Link from "next/link"

export default function VideoSlider() {
  const [videos, setVideos] = useState<any[]>([])
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // FIX SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const unsub = listenVideoWorks(setVideos)
    return () => unsub()
  }, [])

  if (!mounted) return null

  return (
    <section className="bg-white px-6 md:px-20 py-24">

      {/* TITLE */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-[40px] md:text-[64px] font-extralight">
          Video Works
        </h2>
      </div>

      {/* GRID SLIDER */}
      <div className="max-w-7xl mx-auto">

        <Swiper
          modules={[Autoplay, Grid]}
          spaceBetween={24}
          slidesPerView={3}
          grid={{
            rows: 2,
            fill: "row",
          }}
          loop={false} // ⚠️ tránh bug grid
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid: { rows: 1 },
            },
            768: {
              slidesPerView: 2,
              grid: { rows: 2 },
            },
            1024: {
              slidesPerView: 3,
              grid: { rows: 2 },
            },
          }}
        >

          {videos.map((item) => {
            const embedUrl = getYoutubeEmbed(item.video)
            const videoId = getYoutubeId(item.video)

            return (
              <SwiperSlide key={item.id}>
                <div
                  className="relative overflow-hidden rounded-xl cursor-pointer group"
                  onMouseEnter={() => setActiveVideo(item.id)}
                  onMouseLeave={() => setActiveVideo(null)}
                >

                  {/* VIDEO */}
                  <div className="relative w-full aspect-[9/16] bg-black overflow-hidden">

                    {activeVideo === item.id && embedUrl ? (
                      <iframe
                        src={embedUrl}
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen; encrypted-media"
                        allowFullScreen
                      />
                    ) : videoId ? (
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-xs text-white">
                        Invalid video
                      </div>
                    )}

                  </div>

                  {/* TEXT */}
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <h3 className="text-sm font-serif">
                      {item.title}
                    </h3>

                    <p className="text-[10px] tracking-[0.3em] opacity-70">
                      VIDEO LOOK
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            )
          })}

        </Swiper>

      </div>

      {/* BUTTON */}
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