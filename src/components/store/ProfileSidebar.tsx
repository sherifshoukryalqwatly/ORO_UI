"use client";

import { FaUser, FaBox, FaHeart, FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ProfileSidebar({ activeTab, setActiveTab }: Props) {

  const itemStyle =
    "flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition";

  const activeStyle = "bg-black text-white";

  return (
    <div className="border rounded-xl p-4 h-fit shadow-sm">

      <h2 className="font-semibold text-lg mb-4">My Account</h2>

      <div className="flex flex-col gap-2">

        <button
          onClick={() => setActiveTab("profile")}
          className={`${itemStyle} ${
            activeTab === "profile" ? activeStyle : "hover:bg-gray-100"
          }`}
        >
          <FaUser /> Profile
        </button>

        <button
          onClick={() => setActiveTab("orders")}
          className={`${itemStyle} ${
            activeTab === "orders" ? activeStyle : "hover:bg-gray-100"
          }`}
        >
          <FaBox /> My Orders
        </button>

        <button
          onClick={() => setActiveTab("addresses")}
          className={`${itemStyle} ${
            activeTab === "addresses" ? activeStyle : "hover:bg-gray-100"
          }`}
        >
          <FaMapMarkerAlt /> Addresses
        </button>

      </div>
    </div>
  );
}