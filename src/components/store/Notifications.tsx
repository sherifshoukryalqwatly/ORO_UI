"use client";
import { useRef, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

interface Props {
  count: number;
  isOpen: boolean;
  toggleOpen: () => void;
}

export default function Notification({ count, isOpen, toggleOpen }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (isOpen) toggleOpen();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, toggleOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={toggleOpen}
        className="relative text-gray-700 hover:text-black cursor-pointer"
      >
        <IoIosNotificationsOutline className="text-xl" />

        {count > 0 && (
          <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {count}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md z-50 p-4">
          <p className="font-semibold mb-2">Notifications</p>
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {[...Array(count)].map((_, i) => (
              <li key={i} className="text-gray-700 text-sm border-b pb-1">
                Notification {i + 1}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}