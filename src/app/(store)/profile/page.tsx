"use client";

import Breadcrumb from "@/src/components/store/Breadcrumb";
import ProfileSidebar from "@/src/components/store/ProfileSidebar";
import UserAddress from "@/src/components/store/UserAddress";
import UserOrders from "@/src/components/store/UserOrders";
import { useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
}

export default function Profile() {

  const user = {
    firstName: "Sherif",
    lastName: "Shoukry",
    email: "sherif@email.com",
    phone: "+965 90000000"
    };

  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "My Account" },
        ]}
      />

      <div className="grid md:grid-cols-4 gap-8">

        {/* Sidebar */}
        <ProfileSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Content */}
        <div className="md:col-span-3 border rounded-xl p-6 shadow-sm">

        {activeTab === "profile" && (
            <div>
            <h1 className="text-2xl font-semibold mb-6">Profile Info</h1>

            <div className="grid md:grid-cols-2 gap-6">

                <div>
                <label className="text-sm text-gray-500">First Name</label>
                <input
                    value={user.firstName}
                    readOnly
                    className="w-full border rounded-md px-3 py-2 mt-1"
                />
                </div>

                <div>
                <label className="text-sm text-gray-500">Last Name</label>
                <input
                    value={user.lastName}
                    readOnly
                    className="w-full border rounded-md px-3 py-2 mt-1"
                />
                </div>

                <div>
                <label className="text-sm text-gray-500">Email</label>
                <input
                    value={user.email}
                    readOnly
                    className="w-full border rounded-md px-3 py-2 mt-1"
                />
                </div>

                <div>
                <label className="text-sm text-gray-500">Phone</label>
                <input
                    value={user.phone}
                    readOnly
                    className="w-full border rounded-md px-3 py-2 mt-1"
                />
                </div>

            </div>
            </div>
        )}

        {activeTab === "orders" && (
            <UserOrders />
        )}

        {activeTab === "addresses" && (
            <UserAddress />
        )}

        </div>
      </div>
    </div>
  );
}