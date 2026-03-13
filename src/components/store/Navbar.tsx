"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo2.png";
import LoginModal from "./Login";
import Signup from "./Signup";
import Notification from "./Notifications";

import { MdFavoriteBorder, MdOutlineLanguage } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {

  // States
  const [lang, setLang] = useState("EN");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const [favCount] = useState(1);
  const [notificationCount] = useState(5);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const pathname = usePathname();
  // Helpers
  const linkStyle =
    "relative text-gray-700 hover:text-black font-medium transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full";
  const activeStyle = "text-black after:w-full";

  const changeLang = (value: string) => {
    setLang(value);
    setIsLangOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="px-4 md:px-7 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="ORO Logo" width={75} />
        </Link>

        {/* Desktop Middle Section */}
        <div className="hidden md:flex flex-1 flex-col px-17">
          {/* Search */}
          <div className="mb-1 relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Links */}
          <div className="flex gap-6 justify-center items-center flex-wrap">
            <Link href="/products" className={`${linkStyle} ${pathname === "/products" ? activeStyle : ""}`}>
              All Products
            </Link>
            <Link href="/#recommended" className={linkStyle}>Recommended</Link>
            <Link href="/#bestseller" className={linkStyle}>Best Seller</Link>
            <Link href="/#categories" className={linkStyle}>Categories</Link>
            <Link href="/about" className={`${linkStyle} ${pathname === "/about" ? activeStyle : ""}`}>About</Link>
            <Link href="/contact" className={`${linkStyle} ${pathname === "/contact" ? activeStyle : ""}`}>Contact</Link>
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5 items-center">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <MdOutlineLanguage className="text-xl" /> {lang}
            </button>
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border shadow-lg rounded-md overflow-hidden">
                <button onClick={() => changeLang("EN")} className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition">
                  English
                </button>
                <button onClick={() => changeLang("AR")} className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition">
                  العربية
                </button>
              </div>
            )}
          </div>

          {/* Login / Signup */}
          <button onClick={() => setIsLoginOpen(true)} className="font-semibold hover:text-black cursor-pointer">
            Login / Signup
          </button>

          {/* Notifications */}
          <Notification
            count={notificationCount}
            isOpen={isNotificationOpen}
            toggleOpen={() => setIsNotificationOpen(!isNotificationOpen)}
          />

          {/* Favorites */}
          <Link href="/favourites" className="relative">
            <MdFavoriteBorder className="text-xl hover:scale-110 transition cursor-pointer" />
            {favCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {favCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <FaOpencart className="text-xl hover:scale-110 transition cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/cart" className="relative">
            <FaOpencart className="text-xl hover:scale-110 transition cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl">☰</button>
        </div>
      </div>

      {isMobileMenuOpen && (
      <div className="md:hidden bg-white shadow-lg px-4 py-6">
        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          {/* Main Filters */}
          <Link href="/products" className={`${linkStyle} ${pathname === "/products" ? activeStyle : ""}`}>
              All Products
          </Link>
          <Link href="/#recommended" className={linkStyle}>Recommended</Link>
          <Link href="/#bestseller" className={linkStyle}>Best Seller</Link>
          <Link href="/#categories" className={linkStyle}>Categories</Link>
          <Link href="/about" className={`${linkStyle} ${pathname === "/about" ? activeStyle : ""}`}>About</Link>
          <Link href="/contact" className={`${linkStyle} ${pathname === "/contact" ? activeStyle : ""}`}>Contact</Link>
        </div>
      </div>
    )}

      {/* Modals */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} openSignup={() => setIsSignupOpen(true)} />
      <Signup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} openLogin={() => setIsLoginOpen(true)} />
    </nav>
  );
}