"use client";
import { useRef, useEffect } from "react";

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
        className="relative text-gray-700 hover:text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 1-5.714 0M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"
          />
        </svg>

        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
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