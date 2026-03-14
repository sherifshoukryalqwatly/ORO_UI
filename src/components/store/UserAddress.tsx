"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaPlus, FaTrash, FaEdit } from "react-icons/fa";

interface Address {
  id: number;
  name: string;
  city: string;
  street: string;
  phone: string;
  isDefault?: boolean;
}

export default function UserAddress() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: "Home",
      city: "Kuwait City",
      street: "Salmiya Block 10",
      phone: "+965 90000000",
      isDefault: true,
    },
    {
      id: 2,
      name: "Work",
      city: "Farwaniya",
      street: "Street 12",
      phone: "+965 91111111",
    },
  ]);

  const removeAddress = (id: number) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">My Addresses</h1>

        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          <FaPlus /> Add Address
        </button>
      </div>

      {/* Address List */}
      <div className="grid md:grid-cols-2 gap-6">

        {addresses.map((address) => (
          <div
            key={address.id}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            {/* Address Header */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 font-semibold">
                <FaMapMarkerAlt />
                {address.name}
              </div>

              {address.isDefault && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  Default
                </span>
              )}
            </div>

            {/* Address Info */}
            <div className="text-gray-600 text-sm space-y-1">
              <p>{address.street}</p>
              <p>{address.city}</p>
              <p>{address.phone}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-4 text-sm">

              <button className="flex items-center gap-1 text-blue-600 hover:underline">
                <FaEdit /> Edit
              </button>

              <button
                onClick={() => removeAddress(address.id)}
                className="flex items-center gap-1 text-red-600 hover:underline"
              >
                <FaTrash /> Delete
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}