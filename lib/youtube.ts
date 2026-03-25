export const getYoutubeId = (url: string) => {
  if (!url) return null

  if (url.includes("/shorts/")) {
    return url.split("/shorts/")[1]?.split("?")[0]
  }

  if (url.includes("watch?v=")) {
    return url.split("watch?v=")[1]?.split("&")[0]
  }

  if (url.includes("youtu.be/")) {
    return url.split("youtu.be/")[1]?.split("?")[0]
  }

  return null
}

export const getYoutubeEmbed = (url: string) => {
  const id = getYoutubeId(url)
  if (!id) return null

  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${id}`
}