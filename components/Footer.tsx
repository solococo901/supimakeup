"use client"

import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#fdfaf7] px-6 md:px-20 pt-20 pb-10">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-serif mb-4">
              Makeup by Ann
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              Mang đến vẻ đẹp tự nhiên, trong trẻo và tinh tế cho từng khách hàng.
              Đồng hành cùng bạn trên hành trình trở thành makeup artist chuyên nghiệp.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-sm tracking-[0.3em] mb-4">
              MENU
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-black cursor-pointer">Portfolio</li>
              <li className="hover:text-black cursor-pointer">Booking</li>
              <li className="hover:text-black cursor-pointer">Courses</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm tracking-[0.3em] mb-4">
              CONTACT
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Zalo: 0909 790 010</li>
              <li>Email: your@email.com</li>
              <li>Location: Ho Chi Minh City</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm tracking-[0.3em] mb-4">
              FOLLOW
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-10 h-10 border border-black flex items-center justify-center rounded-full hover:bg-black hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 border border-black flex items-center justify-center rounded-full hover:bg-black hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 border border-black flex items-center justify-center rounded-full hover:bg-black hover:text-white transition"
              >
                <FaTiktok />
              </a>

            </div>
          </div>

        </div>

        {/* LINE */}
        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} Makeup by Ann. All rights reserved.

        </div>

      </div>

    </footer>
  )
}