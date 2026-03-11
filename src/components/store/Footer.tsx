import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">

        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            ORO Store
          </h2>
          <p>
            Premium kitchenware and home essentials designed to make your
            cooking experience easier and more enjoyable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/shipping">Shipping Policy</Link></li>
            <li><Link href="/returns">Returns & Refunds</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Twitter</Link>
          </div>
        </div>

      </div>

      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ORO Store. All rights reserved.
      </div>
    </footer>
  );
}