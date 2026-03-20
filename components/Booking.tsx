"use client"

import { useState } from "react"

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()

    // 👉 tạm thời log (sau sẽ nối backend)
    console.log(form)

    alert("Đã gửi thông tin ✨")
  }

  return (
    <section className="bg-[#fdfaf7] px-6 md:px-20 py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <p className="text-xs tracking-[0.3em] mb-4 text-gray-500">
            BOOKING
          </p>

          <h2 className="text-[36px] md:text-[52px] font-serif leading-tight mb-6">
            Đặt lịch makeup
            <br /> cùng tôi
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Hãy để tôi giúp bạn trở nên tự tin và tỏa sáng trong những dịp quan trọng.
            Điền thông tin bên cạnh hoặc liên hệ trực tiếp để được tư vấn nhanh nhất.
          </p>

          {/* QUICK CONTACT */}
          <div className="space-y-3 text-sm">
            <p>📞 Zalo: 0909 790 010</p>
            <p>💬 WeChat: wxid_rdtljtdwzrtn12</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-sm space-y-6"
        >

          <input
            placeholder="Tên của bạn"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Số điện thoại"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <select
            className="w-full border-b border-gray-300 py-2 bg-transparent"
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option>Dịch vụ</option>
            <option>Makeup cá nhân</option>
            <option>Makeup cô dâu</option>
            <option>Khóa học cá nhân</option>
            <option>Khóa học chuyên nghiệp</option>
          </select>

          <input
            type="date"
            className="w-full border-b border-gray-300 py-2"
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <textarea
            placeholder="Yêu cầu thêm..."
            className="w-full border-b border-gray-300 py-2"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            className="group relative text-sm tracking-[0.3em] text-black mt-6"
          >
            SEND REQUEST

            <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
          </button>

        </form>

      </div>

    </section>
  )
}