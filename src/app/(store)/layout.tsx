import Navbar from "../../components/store/Navbar";
import Footer from "../../components/store/Footer";
import StoreFeatures from "@/src/components/store/StoreFeatures";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen container mx-auto px-4 py-6">
        {children}
      </main>
      <StoreFeatures/>
      <Footer />
    </>
  );
}