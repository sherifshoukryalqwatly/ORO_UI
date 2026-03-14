"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { FaUser, FaBox, FaHeart, FaSignOutAlt } from "react-icons/fa";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface LoggedinPopupProps {
  user: User | null;
  isOpen: boolean;
  toggleOpen: () => void;
  onLogout: () => void;
}

export default function LoggedinPopup({
  user,
  isOpen,
  toggleOpen,
  onLogout,
}: LoggedinPopupProps) {

  const ref = useRef<HTMLDivElement>(null);

  /* Close when clicking outside */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (isOpen) toggleOpen();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, toggleOpen]);

  if (!user) return null;

  return (
    <div ref={ref} className="relative">

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 shadow-lg rounded-xl z-50 overflow-hidden">

          {/* User Info */}
          <div className="p-4 border-b bg-gray-50">
            <p className="font-semibold text-gray-900">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {user.email}
            </p>
          </div>

          {/* Menu */}
          <div className="py-2 text-sm">

            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
            >
              <FaUser className="text-gray-500" />
              My Profile
            </Link>

            <Link
              href="/profile?tab=orders"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
            >
              <FaBox className="text-gray-500" />
              My Orders
            </Link>

            <Link
              href="/profile?tab=wishlist"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
            >
              <FaHeart className="text-gray-500" />
              Wishlist
            </Link>

          </div>

          {/* Logout */}
          <div className="border-t">
            <button
              onClick={onLogout}
              className="flex items-center gap-3 w-full px-4 py-2 text-red-600 hover:bg-red-50 transition"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}