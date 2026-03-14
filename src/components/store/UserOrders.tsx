"use client";

import Link from "next/link";

interface Order {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  total: number;
}

export default function UserOrders() {

  const orders: Order[] = [
    {
      id: "ORD-1001",
      date: "2026-03-10",
      status: "Delivered",
      total: 120,
    },
    {
      id: "ORD-1002",
      date: "2026-03-08",
      status: "Processing",
      total: 75,
    },
  ];

  const statusStyle = {
    Delivered: "bg-green-100 text-green-700",
    Processing: "bg-yellow-100 text-yellow-700",
    Shipped: "bg-blue-100 text-blue-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div>

      <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

      <div className="overflow-x-auto">

        <table className="w-full border rounded-lg overflow-hidden">

          <thead className="bg-gray-100 text-left text-sm">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50 transition"
              >

                <td className="px-4 py-3 font-medium">
                  {order.id}
                </td>

                <td className="px-4 py-3 text-gray-600">
                  {order.date}
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      statusStyle[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="px-4 py-3 font-medium">
                  ${order.total}
                </td>

                <td className="px-4 py-3">
                  <Link
                    href={`/orders/${order.id}`}
                    className="text-sm text-black underline hover:text-gray-700"
                  >
                    View
                  </Link>
                </td>

              </tr>
            ))}

          </tbody>
        </table>

      </div>
    </div>
  );
}