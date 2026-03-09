"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png"; // PNG logo path

export default function Navbar() {
  const categories = ["Cookware", "Glassware", "Dishes", "Utensils", "Bakeware"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLang = (value: string) => {
    setLang(value);
    setIsLangOpen(false);
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="ORO Logo" className="h-16 w-auto" priority />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 ml-8 items-center">
          {/* Categories Dropdown */}
          <div
            className="relative"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <button className="flex text-gray-700 font-medium hover:text-black transition-colors">
              Categories
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 pt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/categories/${cat.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link href="/about" className="hover:text-black transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </div>

        {/* Search Box */}
        <div className="hidden md:flex flex-1 justify-center px-4 items-center gap-3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              🌐 {lang}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                <button
                  onClick={() => changeLang("EN")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  English
                </button>

                <button
                  onClick={() => changeLang("AR")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Profile & Cart */}
        <div className="flex gap-4 items-center">
          {/* Profile */}
          <Link href="/profile" className="text-gray-700 hover:text-black transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </Link>

          {/* Cart */}
          <Link href="/cart" className="text-gray-700 hover:text-black transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </div>
      <nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
            
            {/* Categories */}
            <div className="py-2">
              <p className="font-semibold text-gray-700 mb-2">Categories</p>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/categories/${cat.toLowerCase()}`}
                  className="block py-2 text-gray-600 hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Other Links */}
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Search */}
            <div className="mt-3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

          </div>
        )}
      </nav>
    </nav>
  );
}