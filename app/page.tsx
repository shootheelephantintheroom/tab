import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProductDetails from "@/components/ProductDetails";
import BuySection from "@/components/BuySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProductDetails />
      <BuySection />
      <Footer />
    </main>
  );
}
