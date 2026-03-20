"use client"

import ImageSlider from "./ImageSlider"
import Link from "next/link"

const works = [
    {
        id: 1,
        title: "Soft Bridal",
        images: ["/p1.jpg", "/p2.jpg", "/p3.jpg"],
    },
    {
        id: 2,
        title: "Clean Girl",
        images: ["/p2.jpg", "/p1.jpg", "/p4.jpg"],
    },
    {
        id: 3,
        title: "Glam Look",
        images: ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"],
    },
    {
        id: 4,
        title: "Glam Look",
        images: ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"],
    },
    {
        id: 5,
        title: "Glam Look",
        images: ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"],
    }
]

export default function Portfolio() {
    return (
        <section className="bg-white px-6 md:px-20 py-24">

            {/* TITLE */}
            <div className="max-w-7xl mx-auto mb-16">
                <h2 className="text-[40px] md:text-[64px] font-extralight">
                    Selected Works
                </h2>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">

                {/* BIG */}
                <div className="col-span-2 row-span-2 relative overflow-hidden group">

                    <ImageSlider images={works[0].images} />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute bottom-8 left-8 text-white z-10">
                        <h3 className="text-2xl md:text-3xl font-serif leading-tight">
                            {works[0].title}
                        </h3>
                        <p className="text-xs tracking-[0.3em] mt-2 opacity-70">
                            MAKEUP LOOK
                        </p>
                    </div>

                </div>

                {/* SMALL */}
                {works.slice(1).map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden group"
                    >

                        <ImageSlider images={item.images} />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        <div className="absolute bottom-4 left-4 z-10 text-white">
                            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-md">
                                <h3 className="text-sm font-serif">
                                    {item.title}
                                </h3>
                                <p className="text-xs tracking-[0.3em] mt-1 opacity-70">
                                    MAKEUP LOOK
                                </p>
                            </div>
                        </div>

                    </div>
                ))}

                {works.slice(1).map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden group"
                    >

                        <ImageSlider images={item.images} />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        <div className="absolute bottom-4 left-4 z-10 text-white">
                            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-md">
                                <h3 className="text-sm font-serif">
                                    {item.title}
                                </h3>
                                <p className="text-xs tracking-[0.3em] mt-1 opacity-70">
                                    MAKEUP LOOK
                                </p>
                            </div>
                        </div>

                    </div>
                ))}

                {/* BIG */}
                <div className="col-span-2 row-span-2 relative overflow-hidden group">

                    <ImageSlider images={works[0].images} />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute bottom-8 left-8 text-white z-10">
                        <h3 className="text-2xl md:text-3xl font-serif leading-tight">
                            {works[0].title}
                        </h3>
                        <p className="text-xs tracking-[0.3em] mt-2 opacity-70">
                            MAKEUP LOOK
                        </p>
                    </div>

                </div>

                {works.slice(1).map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden group"
                    >

                        <ImageSlider images={item.images} />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        <div className="absolute bottom-4 left-4 z-10 text-white">
                            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-md">
                                <h3 className="text-sm font-serif">
                                    {item.title}
                                </h3>
                                <p className="text-xs tracking-[0.3em] mt-1 opacity-70">
                                    MAKEUP LOOK
                                </p>
                            </div>
                        </div>

                    </div>
                ))}

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