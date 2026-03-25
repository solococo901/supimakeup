"use client"

import { useEffect, useState } from "react"
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore"
import { db } from "@/lib/firebase"
import { listenVideoWorks } from "@/lib/getVideoWorks"
import ConfirmModal from "@/components/ConfirmModal"

export default function AdminVideoWorks() {
  const [videos, setVideos] = useState<any[]>([])
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const [form, setForm] = useState({
    title: "",
    category: "",
    video: "",
    createdAt: null as any
  })

  const [editingId, setEditingId] = useState<string | null>(null)

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [sortType, setSortType] = useState<"" | "az" | "za">("")

  useEffect(() => {
    const unsub = listenVideoWorks(setVideos)
    return () => unsub()
  }, [])

  // ================= CREATE / UPDATE =================
  const handleSubmit = async () => {
    if (!form.title || !form.video) {
      return alert("Nhập đủ thông tin")
    }

    const data = {
      ...form,
      createdAt: editingId ? form.createdAt : serverTimestamp()
    }

    if (editingId) {
      await updateDoc(doc(db, "videoWorks", editingId), data)
      setEditingId(null)
    } else {
      await addDoc(collection(db, "videoWorks"), data)
    }

    setForm({
      title: "",
      category: "",
      video: "",
      createdAt: null
    })
  }

  // ================= DELETE =================
  const confirmDelete = async () => {
    if (!deleteId) return
    await deleteDoc(doc(db, "videoWorks", deleteId))
    setDeleteId(null)
  }

  const handleDeleteSelected = async () => {
    await Promise.all(
      selectedIds.map((id) =>
        deleteDoc(doc(db, "videoWorks", id))
      )
    )
    setSelectedIds([])
  }

  // ================= EDIT =================
  const handleEdit = (item: any) => {
    setForm(item)
    setEditingId(item.id)
  }

  // ================= FILTER =================
  const categories = [
    "all",
    ...new Set(videos.map((v) => v.category))
  ]

  const filteredVideos = videos
    .filter((v) =>
      selectedCategory === "all"
        ? true
        : v.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortType === "az") return a.title.localeCompare(b.title)
      if (sortType === "za") return b.title.localeCompare(a.title)
      return 0
    })

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="p-10 max-w-6xl mx-auto">

      <h1 className="text-3xl font-serif mb-10">
        Video Works
      </h1>

      {/* FORM */}
      <div className="space-y-4 mb-12">

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="w-full border-b p-2 outline-none"
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="w-full border-b p-2 outline-none"
        />

        <input
          placeholder="YouTube URL"
          value={form.video}
          onChange={(e) =>
            setForm({ ...form, video: e.target.value })
          }
          className="w-full border-b p-2 outline-none"
        />

        <button
          onClick={handleSubmit}
          className="
            mt-4 px-8 py-3 text-sm tracking-[0.2em] uppercase
            border border-black bg-black text-white
            hover:bg-white hover:text-black
            active:scale-95
            transition duration-300
          "
        >
          {editingId ? "Update" : "Create"}
        </button>

      </div>

      {/* FILTER */}
      <div className="flex justify-between mb-6">

        <div className="flex gap-6 text-xs">
          {categories.map((cat) => {
            const active = selectedCategory === cat

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`transition ${
                  active
                    ? "text-black underline"
                    : "text-black/40 hover:text-black"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="flex gap-6 text-xs">
          {["az", "za"].map((type) => {
            const active = sortType === type

            return (
              <button
                key={type}
                onClick={() => setSortType(type as any)}
                className={`transition ${
                  active
                    ? "text-black underline"
                    : "text-black/40 hover:text-black"
                }`}
              >
                {type === "az" ? "A-Z" : "Z-A"}
              </button>
            )
          })}
        </div>

      </div>

      {/* TABLE */}
      <div className="border border-black/10">

        <div className="grid grid-cols-12 border-b text-xs p-3">
          <div className="col-span-1"></div>
          <div className="col-span-4">TITLE</div>
          <div className="col-span-3">CATEGORY</div>
          <div className="col-span-3">DATE</div>
          <div className="col-span-1"></div>
        </div>

        {filteredVideos.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-12 items-center border-b p-3"
          >

            <div className="col-span-1">
              <input
                type="checkbox"
                checked={selectedIds.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
              />
            </div>

            <div className="col-span-4 font-serif">
              {item.title}
            </div>

            <div className="col-span-3">
              {item.category}
            </div>

            <div className="col-span-3 text-xs opacity-50">
              {item.createdAt?.toDate().toLocaleDateString("vi-VN")}
            </div>

            <div className="col-span-1 flex gap-3 text-xs">
              <button
                onClick={() => handleEdit(item)}
                className="opacity-40 hover:opacity-100 transition"
              >
                Edit
              </button>

              <button
                onClick={() => setDeleteId(item.id)}
                className="opacity-40 hover:opacity-100 hover:text-red-500 transition"
              >
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* MULTI DELETE */}
      {selectedIds.length > 0 && (
        <button
          onClick={handleDeleteSelected}
          className="
            mt-6 px-6 py-2 text-sm border border-black/20 rounded-full
            hover:bg-black hover:text-white
            transition duration-300
          "
        >
          Delete ({selectedIds.length})
        </button>
      )}

      {/* MODAL */}
      <ConfirmModal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={confirmDelete}
        title="Delete video"
        description="Bạn có chắc muốn xóa video này không?"
      />

    </section>
  )
}