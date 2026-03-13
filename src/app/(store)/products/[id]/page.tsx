"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { PiRepeatFill } from "react-icons/pi";

const products = [
  { id: "1", title: "Stainless Steel Pan",
     images: [
      "https://www.ikea.com/kw/en/images/products/ikea-365-cookware-set-of-6-stainless-steel__1006151_pe825738_s5.jpg?f=xl",
      "https://www.ikea.com/kw/en/images/products/rinnig-pot-holder-grey__0918265_pe786437_s5.jpg?f=xl",
      "https://www.ikea.com/kw/en/images/products/lyckad-oven-serving-dish-set-of-2-dark-grey__0916171_pe785011_s5.jpg?f=xl",
      "https://www.ikea.com/kw/en/images/products/rinnig-tea-towel-green-blue-striped__1416274_pe975566_s5.jpg?f=xl",
      "https://www.ikea.com/kw/en/images/products/klippkaktus-storage-turntable__1243264_pe920533_s5.jpg?f=xl"
    ],
     price: 49,
     stock: 1,
     category: "Cookware" ,
     description: "High-quality pan"
  },
  { id: "2", title: "RINNIG Pot holder", images: ["https://www.ikea.com/kw/en/images/products/rinnig-pot-holder-grey__0918265_pe786437_s5.jpg?f=xl"], price: 29, stock: 5, bestSeller: true, category: "Cookware" ,description: "High-quality pan" },
  { id: "3", title: "LYCKAD Oven/serving dish set of 2", images: ["https://www.ikea.com/kw/en/images/products/lyckad-oven-serving-dish-set-of-2-dark-grey__0916171_pe785011_s5.jpg?f=xl"], price: 79, stock: 0, category: "Cookware" ,description: "High-quality pan" },
  { id: "4", title: "RINNIG Tea towel, green/blue striped", images: ["https://www.ikea.com/kw/en/images/products/rinnig-tea-towel-green-blue-striped__1416274_pe975566_s5.jpg?f=xl"], price: 59, stock: 3, recommended: true, category: "Cookware" ,description: "High-quality pan" },
  { id: "5", title: "KLIPPKAKTUS Storage turntable", images: ["https://www.ikea.com/kw/en/images/products/klippkaktus-storage-turntable__1243264_pe920533_s5.jpg?f=xl"], price: 59, stock: 8, category: "Cookware" , description: "High-quality pan" },
  { id: "6", title: "IKEA 365+ GUNSTIG Pot stand, magnetic", images: ["https://www.ikea.com/kw/en/images/products/ikea-365-gunstig-pot-stand-magnetic-red-dark-grey__0711770_pe728462_s5.jpg?f=xl"], price: 59, stock: 2, category: "Utensils" ,description: "High-quality pan" },
  { id: "7", title: "KLOCKREN Steamer insert, stainless steel", images: ["https://www.ikea.com/kw/en/images/products/klockren-steamer-insert-stainless-steel__1481200_pe1000455_s5.jpg?f=xl"], price: 59, stock: 4, category: "Utensils" ,description: "High-quality pan" },
  { id: "8", title: "HEAT Pot stand", images: ["https://www.ikea.com/kw/en/images/products/heat-pot-stand-cork__1204806_pe906845_s5.jpg?f=xl"], price: 59, stock: 6, category: "Bakeware" ,description: "High-quality pan" },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [mainImage, setMainImage] = useState(product?.images[0] || "");

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Product not found</div>;
  }

  const isOutOfStock = product.stock === 0;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-8">
      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={mainImage}
              alt={product.title}
              fill
              className="object-cover transform transition-transform duration-300 ease-in-out hover:scale-130"
            />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-4">
            {product.images.slice(0, 5).map((img, idx) => (
              <div
                key={idx}
                className={`relative w-full h-20 md:h-24 rounded-lg overflow-hidden cursor-pointer border ${
                  mainImage === img ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(img)}
              >
                <Image src={img} alt={`${product.title} ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-2xl font-semibold text-gray-900">${product.price}</p>
            {isOutOfStock ? (
              <p className="text-red-600 font-medium">Out of Stock</p>
            ) : (
              <p className="text-green-600 font-medium">{product.stock} in stock</p>
            )}
            {product.description && <p className="text-gray-700">{product.description}</p>}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button disabled={isOutOfStock} className={`flex-1 px-6 py-3 rounded-md text-white font-semibold cursor-pointer transition ${isOutOfStock ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-900"}`}>
              <LiaCartPlusSolid className="inline mr-2" size={22} />
              Add to Cart
            </button>
            <button className="flex-1 px-6 py-3 rounded-md text-gray-700 bg-white border border-gray-300 hover:text-red-600  cursor-pointer transition flex items-center justify-center gap-2">
              <FaRegHeart size={20} /> Add to Favorites
            </button>
            <button className="flex-1 px-6 py-3 rounded-md text-gray-700 bg-white border border-gray-300 hover:text-green-600  cursor-pointer transition flex items-center justify-center gap-2">
              <PiRepeatFill size={20} /> Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}