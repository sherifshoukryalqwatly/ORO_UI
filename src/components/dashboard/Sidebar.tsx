import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard/products">Products</Link>
        <Link href="/dashboard/categories">Categories</Link>
        <Link href="/dashboard/orders">Orders</Link>
        <Link href="/dashboard/users">Users</Link>
      </nav>
    </aside>
  );
}