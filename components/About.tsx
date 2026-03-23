"use client"

export default function About() {
  return (
    <section className="bg-[#fdfaf7] px-6 md:px-20 py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative">
          <img
            src="/p1.jpg"
            className="w-full h-[500px] object-cover rounded-xl"
          />

          {/* overlay nhẹ */}
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* CONTENT */}
        <div>

          <p className="text-xs tracking-[0.3em] mb-4 text-gray-500">
            ABOUT ME
          </p>

          <h2 className="text-[36px] md:text-[52px] font-serif leading-tight mb-6">
            Tôn vinh vẻ đẹp tự nhiên
            <br /> qua từng lớp makeup
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Tôi là makeup artist chuyên về phong cách tự nhiên, trong trẻo và tinh tế.
            Mỗi layout makeup không chỉ là làm đẹp, mà còn là cách thể hiện cá tính
            và cảm xúc riêng của từng khách hàng.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            Bên cạnh dịch vụ makeup, tôi còn đào tạo các khóa học cá nhân và chuyên nghiệp,
            giúp bạn tự tin làm đẹp hoặc phát triển sự nghiệp trong ngành makeup.
          </p>

          {/* BUTTON */}
          <button className="group relative text-sm tracking-[0.3em] text-black">
            BOOK MAKEUP

            <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
          </button>

        </div>

      </div>

    </section>
  )
}