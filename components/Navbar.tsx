export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between px-8 py-4">
      <div>AN MAKEUP</div>
      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">Booking</a>
      </div>
    </nav>
  )
}