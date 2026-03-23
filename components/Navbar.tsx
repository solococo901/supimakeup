"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="text-lg md:text-xl font-serif tracking-wide">
          AN MAKEUP
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-sm tracking-wide">
          <a href="#" className="hover:opacity-60 transition">Home</a>
          <a href="#" className="hover:opacity-60 transition">Portfolio</a>
          <a href="#" className="hover:opacity-60 transition">Booking</a>
        </div>

        {/* MOBILE BUTTON */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-[2px] bg-black mb-1"></div>
          <div className="w-6 h-[2px] bg-black mb-1"></div>
          <div className="w-6 h-[2px] bg-black"></div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-sm tracking-[0.3em]">

          <a href="#" onClick={() => setOpen(false)}>HOME</a>
          <a href="#" onClick={() => setOpen(false)}>PORTFOLIO</a>
          <a href="#" onClick={() => setOpen(false)}>BOOKING</a>

        </div>
      </div>
    </nav>
  )
}