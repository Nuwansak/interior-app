import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold">Panto</div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8">
          <li className="cursor-pointer hover:text-yellow-400">Furniture</li>
          <li className="cursor-pointer hover:text-yellow-400">Shop</li>
          <li className="cursor-pointer hover:text-yellow-400">About Us</li>
          <li className="cursor-pointer hover:text-yellow-400">Contact</li>
        </ul>

        {/* Cart */}
        <div className="hidden md:block cursor-pointer hover:scale-110 transition">
          🛒
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/90 p-4">
          <ul className="space-y-4 text-center">
            <li>Furniture</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}