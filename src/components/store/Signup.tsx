"use client";

import Link from "next/link";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  openLogin: () => void;
}

export default function Signup({ isOpen, onClose, openLogin }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md rounded-xl shadow-lg p-6 z-10">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create Account
        </h2>

        {/* Google Signup */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition">
            {/* Google Icon */}
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.72 1.22 9.23 3.6l6.88-6.88C35.82 2.12 30.23 0 24 0 14.82 0 6.89 5.2 3.09 12.82l8.02 6.23C13.14 13.21 18.17 9.5 24 9.5z"/>
            <path fill="#34A853" d="M46.5 24.5c0-1.56-.14-3.06-.4-4.5H24v8.52h12.72c-.55 2.96-2.22 5.47-4.74 7.16l7.28 5.66C43.84 37.32 46.5 31.43 46.5 24.5z"/>
            <path fill="#FBBC05" d="M11.11 28.95A14.49 14.49 0 0 1 9.5 24c0-1.72.3-3.37.84-4.95l-8.02-6.23A23.95 23.95 0 0 0 0 24c0 3.88.93 7.55 2.58 10.78l8.53-5.83z"/>
            <path fill="#4285F4" d="M24 48c6.23 0 11.46-2.06 15.28-5.61l-7.28-5.66c-2.02 1.36-4.6 2.17-8 2.17-5.83 0-10.86-3.71-12.65-8.95l-8.53 5.83C6.89 42.8 14.82 48 24 48z"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Full Name"
            className="border px-4 py-2 rounded-md"
          />

          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 rounded-md"
          />

          <button className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
            Sign Up
          </button>

        </form>

        {/* Login Link */}
        <p className="text-sm text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => {
              onClose();
              openLogin();
            }}
            className="text-black font-medium hover:underline"
          >
            Login
          </button>
        </p>

      </div>
    </div>
  );
}