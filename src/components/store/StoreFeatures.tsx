import { Truck, Headphones, CreditCard, RefreshCw } from "lucide-react";

export default function StoreFeatures() {
  const features = [
    {
      icon: <Truck size={32} />,
      title: "Fast Delivery",
      desc: "Quick delivery to your doorstep",
    },
    {
      icon: <Headphones size={32} />,
      title: "Support 24/7",
      desc: "Our team is here to help anytime",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Secure Payment",
      desc: "100% secure payment methods",
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Easy Returns",
      desc: "Simple and easy return policy",
    },
  ];

  return (
    <section className="bg-gray-50 py-2">
      <div className="px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              <div className="text-gray-800">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}