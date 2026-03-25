import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "./firebase"

export async function uploadImage(file: File) {
  const storageRef = ref(storage, `works/${Date.now()}-${file.name}`)

  await uploadBytes(storageRef, file)

  const url = await getDownloadURL(storageRef)

  return url
}