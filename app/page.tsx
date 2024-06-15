import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/NavBar";
import {HeroSection} from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HeroSection />

      <Footer />
    </main>
  );
}
