"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center px-6 md:px-20">
      
      <div className="grid md:grid-cols-2 w-full max-w-7xl mx-auto items-center gap-10">

        {/* LEFT */}
        <div className="relative">

          <p className="text-xs tracking-[0.4em] text-neutral-400 mb-6">
            MAKEUP ARTIST
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[64px] md:text-[110px] leading-[0.9] font-extralight text-black"
          >
            Timeless
            <br />
            Beauty
          </motion.h1>

          {/* subtle line */}
          <div className="w-16 h-[1px] bg-black my-8" />

          <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
            Creating refined, modern and effortless beauty looks for every occasion.
          </p>

          <div className="flex gap-6 mt-10">
            <button className="text-xs tracking-widest border-b border-black pb-1 hover:opacity-60 transition">
              BOOK NOW
            </button>

            <button className="text-xs tracking-widest border-b border-neutral-400 pb-1 hover:opacity-60 transition">
              VIEW WORK
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[300px] md:w-[420px] h-[420px] md:h-[600px]">

            {/* image */}
            <img
              src="/hero.jpg"
              alt="makeup"
              className="w-full h-full object-cover hover:grayscale-0 transition duration-700"
            />

            {/* overlay number */}
            <div className="absolute bottom-4 left-4 text-white text-sm tracking-widest mix-blend-difference">
              01 / 05
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}