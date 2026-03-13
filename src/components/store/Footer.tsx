import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-20">
      
      <div className="px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            ORO Store
          </h2>
          <p className="text-sm leading-relaxed">
            Premium kitchenware and home essentials designed to make your
            cooking experience easier and more enjoyable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-white transition">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Customer Service
          </h3>

          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-white transition">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-white transition">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Stay Connected
          </h3>

          <p className="text-sm mb-4">
            Subscribe to get updates on new products and offers.
          </p>

          <div className="flex mb-5">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full text-sm rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 text-sm font-medium rounded-r-md hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <Link href="#" className="hover:text-white transition">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <FaTwitter />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} ORO Store. All rights reserved.
      </div>

    </footer>
  );
}