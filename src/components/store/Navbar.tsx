"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo2.png";
import LoginModal from "./Login";
import Signup from "./Signup";
import Notification from "./Notifications";

import { IoIosArrowDown } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineLanguage } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";

export default function Navbar() {

  const categories = ["Cookware", "Glassware", "Dishes", "Utensils", "Bakeware"];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [cartCount] = useState(3);
  const [favCount] = useState(1);
  const [notificationCount] = useState(5);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const changeLang = (value: string) => {
    setLang(value);
    setIsLangOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="px-4 md:px-7 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="ORO Logo" width={75} />
        </Link>


        {/* Desktop Middle Section */}
        <div className="hidden md:flex flex-1 flex-col px-10">

          {/* Search */}
          <div className="mb-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Links */}
          <div className="flex gap-6 justify-center items-center">

            {/* Categories */}
            <div ref={dropdownRef} className="relative">

              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-black font-medium"
              >
                Categories
                <IoIosArrowDown />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border shadow-lg rounded-md">

                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/categories/${cat.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {cat}
                    </Link>
                  ))}

                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-black">
              About
            </Link>

            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>

          </div>
        </div>


        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5 items-center">

          {/* Language */}
          <div className="relative">

            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 px-3 py-2 hover:bg-gray-100 rounded-md"
            >
              <MdOutlineLanguage className="text-xl" />
              {lang}
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border shadow-md rounded-md">

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


          {/* Login */}
          <button
            onClick={() => setIsLoginOpen(true)}
            className="font-semibold hover:text-black"
          >
            Login / Signup
          </button>


          {/* Notifications */}
          <Notification
            count={notificationCount}
            isOpen={isNotificationOpen}
            toggleOpen={() => setIsNotificationOpen(!isNotificationOpen)}
          />


          {/* Favourites */}
          <Link href="/favourites" className="relative">

            <MdFavoriteBorder className="text-xl" />

            {favCount > 0 && (
              <span className="absolute -top-5 -right-5 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {favCount}
              </span>
            )}

          </Link>


          {/* Cart */}
          <Link href="/cart" className="relative">

            <FaOpencart className="text-xl" />

            {cartCount > 0 && (
              <span className="absolute -top-5 -right-5 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}

          </Link>

        </div>


        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-4">

          <Link href="/cart" className="relative">
            <FaOpencart className="text-xl" />

            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl"
          >
            ☰
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {isMobileMenuOpen && (

        <div className="md:hidden bg-white border-t px-4 pb-4">

          {/* Search */}
          <div className="mt-3 mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>


          {/* Categories */}
          <p className="font-semibold mb-2">Categories</p>

          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/categories/${cat.toLowerCase()}`}
              className="block py-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {cat}
            </Link>
          ))}


          <Link
            href="/about"
            className="block py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>


          <Link
            href="/contact"
            className="block py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

        </div>
      )}


      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        openSignup={() => setIsSignupOpen(true)}
      />


      {/* Signup Modal */}
      <Signup
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        openLogin={() => setIsLoginOpen(true)}
      />

    </nav>
  );
}