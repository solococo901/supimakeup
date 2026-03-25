import {
  collection,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore"
import { db } from "./firebase"

export const listenWorks = (callback: any) => {
  const q = query(
    collection(db, "works"),
    orderBy("order", "asc"),
    orderBy("createdAt", "desc")
  )

  return onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    callback(data)
  })
}