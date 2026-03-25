"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function GalleryModal({ image, onClose }) {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % image.length)
  const prev = () => setIndex((prev) => (prev - 1 + image.length) % image.length)

  // 🔥 ESC + keyboard control
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  // 🔥 lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* CLICK OUTSIDE CLOSE */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/80 hover:text-white text-xl transition"
        >
          ✕
        </button>

        {/* IMAGE WITH ANIMATION */}
        <AnimatePresence mode="wait">
          <motion.img
            key={image[index]}
            src={image[index]}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-6 text-white/60 hover:text-white text-3xl transition"
        >
          ‹
        </button>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-6 text-white/60 hover:text-white text-3xl transition"
        >
          ›
        </button>

        {/* INDEX */}
        <div className="absolute bottom-6 text-white/60 text-sm tracking-widest">
          {index + 1} / {image.length}
        </div>

      </div>
    </motion.div>
  )
}