import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import VideoSection from "@/components/VideoSection"
import About from "@/components/About"
import Booking from "@/components/Booking"
import CoursePersonal from "@/components/CoursePersonal"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <VideoSection />
      <About />
      <Booking />
      <CoursePersonal />
    </main>
  )
}