import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { db } from "./firebase"

export const listenVideoWorks = (callback: any) => {
  const q = query(
    collection(db, "videoWorks"),
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