import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-24 pt-16 pb-8 px-6">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Panto</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-black cursor-pointer">Email Marketing</li>
            <li className="hover:text-black cursor-pointer">Campaigns</li>
            <li className="hover:text-black cursor-pointer">Branding</li>
          </ul>
        </div>

        {/* Furniture */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-4">Furniture</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-black cursor-pointer">Beds</li>
            <li className="hover:text-black cursor-pointer">Chair</li>
            <li className="hover:text-black cursor-pointer">All</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-center gap-2 hover:text-black cursor-pointer">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center gap-2 hover:text-black cursor-pointer">
              <FaTwitter /> Twitter
            </li>
            <li className="flex items-center gap-2 hover:text-black cursor-pointer">
              <FaInstagram /> Instagram
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>Copyright © 2021</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <p className="hover:text-black cursor-pointer">Terms & Conditions</p>
          <p className="hover:text-black cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}