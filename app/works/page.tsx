"use client"

import { useEffect, useState } from "react"
import { listenWorks } from "@/lib/getWorks"
import ImageSlider from "@/components/ImageSlider"
import GalleryModal from "@/components/GalleryModal"

export default function WorksPage() {
  const [works, setWorks] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeImages, setActiveImages] = useState<string[] | null>(null)

  useEffect(() => {
    const unsub = listenWorks(setWorks)
    return () => unsub()
  }, [])

  const categories = [
    "all",
    ...new Set(works.map((w) => w.category))
  ]

  const filteredWorks =
    selectedCategory === "all"
      ? works
      : works.filter((w) => w.category === selectedCategory)

  return (
    <section className="px-6 md:px-20 py-24">

      {/* FILTER */}
      <div className="flex gap-6 justify-center mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {filteredWorks.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImages(item.image)}
          >
            <ImageSlider images={item.image} />
          </div>
        ))}

      </div>

      {activeImages && (
        <GalleryModal
          image={activeImages}
          onClose={() => setActiveImages(null)}
        />
      )}

    </section>
  )
}