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

      <main>{children}</main>

      <StoreFeatures />
      <Footer />
    </>
  );
}