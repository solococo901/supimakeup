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
import { listenWorks } from "@/lib/getWorks"
import ConfirmModal from "@/components/ConfirmModal"

export default function AdminWorks() {
  const [works, setWorks] = useState<any[]>([])
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [form, setForm] = useState({
    title: "",
    category: "",
    image: [] as string[],
    order: 0,
    createdAt: null as any
  })

  const [imageInput, setImageInput] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [sortType, setSortType] = useState<"az" | "za" | "">("")

  useEffect(() => {
    const unsub = listenWorks(setWorks)
    return () => unsub()
  }, [])

  // ================= CREATE / UPDATE =================
  const handleSubmit = async () => {
    if (!form.title) return alert("Missing title")

    const data = {
      ...form,
      createdAt: editingId ? form.createdAt : serverTimestamp()
    }

    if (editingId) {
      await updateDoc(doc(db, "works", editingId), data)
      setEditingId(null)
    } else {
      await addDoc(collection(db, "works"), data)
    }

    setForm({
      title: "",
      category: "",
      image: [],
      order: 0,
      createdAt: null
    })
  }

  // ================= DELETE =================
  // const handleDelete = async (id: string) => {
  //   await deleteDoc(doc(db, "works", id))
  // }

  const handleDelete = (id: string) => {
    setDeleteId(id)
  }
  const confirmDelete = async () => {
    if (!deleteId) return

    await deleteDoc(doc(db, "works", deleteId))

    setDeleteId(null)
  }

  const handleDeleteSelected = async () => {
    await Promise.all(
      selectedIds.map((id) =>
        deleteDoc(doc(db, "works", id))
      )
    )
    setSelectedIds([])
  }

  // ================= EDIT =================
  const handleEdit = (work: any) => {
    setForm(work)
    setEditingId(work.id)
  }

  // ================= IMAGE =================
  const addImage = () => {
    if (!imageInput) return

    setForm({
      ...form,
      image: [...form.image, imageInput]
    })

    setImageInput("")
  }

  const removeImage = (index: number) => {
    const updated = [...form.image]
    updated.splice(index, 1)
    setForm({ ...form, image: updated })
  }

  // ================= FILTER =================
  const categories = [
    "all",
    ...new Set(works.map((w) => w.category))
  ]

  const filteredWorks = works
    .filter((w) =>
      selectedCategory === "all"
        ? true
        : w.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortType === "az") {
        return a.title.localeCompare(b.title)
      }
      if (sortType === "za") {
        return b.title.localeCompare(a.title)
      }
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
        Admin Works
      </h1>

      {/* FORM */}
      <div className="space-y-4 mb-12">

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="w-full border p-3"
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="w-full border p-3"
        />

        <input
          type="number"
          placeholder="Order"
          value={form.order}
          onChange={(e) =>
            setForm({ ...form, order: Number(e.target.value) })
          }
          className="w-full border p-3"
        />

        <div className="flex gap-3">
          <input
            placeholder="Image URL"
            value={imageInput}
            onChange={(e) => setImageInput(e.target.value)}
            className="flex-1 border p-3"
          />
          <button
            onClick={addImage}
            className="px-5 py-2 text-xs tracking-widest uppercase
                      border border-black
                        hover:bg-black hover:text-white
                  active:scale-95
                    transition duration-300"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {form.image.map((img, i) => (
            <div key={i} className="relative">
              <img src={img} className="h-24 w-full object-cover" />
              <button
                onClick={() => removeImage(i)}
                className="absolute top-1 right-1 bg-black text-white text-xs px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="
                      px-8 py-3 text-sm tracking-[0.2em] uppercase
                      border border-black
                      bg-black text-white
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

        <div className="flex gap-6">
          {categories.map((cat) => {
            const active = selectedCategory === cat

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative text-xs tracking-[0.2em] transition duration-300
          ${active
                    ? "text-black"
                    : "text-black/40 hover:text-black"
                  }
        `}
              >
                {cat}

                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-2 h-[1px] bg-black transition-all duration-300
            ${active ? "w-full" : "w-0 group-hover:w-full"}
          `}
                />
              </button>
            )
          })}
        </div>

        <div className="flex gap-6 text-xs tracking-[0.2em]">

          {["az", "za"].map((type) => {
            const active = sortType === type

            return (
              <button
                key={type}
                onClick={() => setSortType(type as any)}
                className={`transition duration-300
          ${active
                    ? "text-black underline underline-offset-4"
                    : "text-black/40 hover:text-black"
                  }
        `}
              >
                {type === "az" ? "A-Z" : "Z-A"}
              </button>
            )
          })}

        </div>

      </div>

      {/* TABLE */}
      <div>

        <div className="grid grid-cols-12 border-b pb-2 text-xs">
          <div className="col-span-1"></div>
          <div className="col-span-4">TITLE</div>
          <div className="col-span-3">CATEGORY</div>
          <div className="col-span-3">DATE</div>
          <div className="col-span-1"></div>
        </div>

        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className="grid grid-cols-12 py-3 border-b"
          >

            <div className="col-span-1">
              <input
                type="checkbox"
                checked={selectedIds.includes(work.id)}
                onChange={() => toggleSelect(work.id)}
              />
            </div>

            <div className="col-span-4 font-serif">
              {work.title}
            </div>

            <div className="col-span-3">
              {work.category}
            </div>

            <div className="col-span-3 text-xs opacity-50">
              {work.createdAt?.toDate().toLocaleDateString("vi-VN")}
            </div>

            <div className="col-span-1 flex gap-2">
              <button onClick={() => handleEdit(work)}>
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(work.id)}
                className="opacity-60 hover:opacity-100 transition text-red-500"
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
          className="mt-6 bg-black text-white px-6 py-2"
        >
          Delete ({selectedIds.length})
        </button>
      )}

      <ConfirmModal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={confirmDelete}
        title="Delete work"
        description="This action cannot be undone. Are you sure you want to delete this work?"
      />

    </section>
  )
}