"use client"

import { collection, addDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"

export default function Test() {

  const handleAdd = async () => {
    try {
      await addDoc(collection(db, "test"), {
        name: "Hello Firebase",
        createdAt: new Date(),
      })
      alert("Thành công ✅")
    } catch (err) {
      console.error(err)
      alert("Lỗi ❌")
    }
  }

  return (
    <div className="p-10">
      <button
        onClick={handleAdd}
        className="px-6 py-3 bg-black text-white"
      >
        Test Firebase
      </button>
    </div>
  )
}