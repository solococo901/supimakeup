"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function AdminHome() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="max-w-2xl text-center">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[40px] md:text-[64px] font-extralight font-serif leading-tight"
        >
          Supi Makeup
          <br />
          Admin Panel
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-sm tracking-[0.2em] text-black/50"
        >
          Manage your portfolio, images and content
        </motion.p>

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-20 h-[1px] bg-black mx-auto my-10 origin-left"
        />

        {/* ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >

          <Link
            href="/"
            className="group text-sm tracking-[0.3em] text-black/40 relative"
          >
            VIEW WEBSITE
            <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
          </Link>

        </motion.div>

      </div>

    </section>
  )
}