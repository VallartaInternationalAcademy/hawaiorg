import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/NavBar";
import {HeroSection} from "@/components/HeroSection/HeroSection";
import ShowCase from "@/components/CallToActions/ShowCase";
import ReadMore from "@/components/CallToActions/ReadMore";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HeroSection />
      <div className="flex flex-col items-center justify-center bg-white py-10">
        <h2 className="text-black text-4xl">LOREM IPSUM DOLOR LOREM</h2>
        <div className="flex flex-wrap mt-16 justify-around items-center">
          {
            [
                {title:'', content:'', imageSource:''},
                {title:'', content:'', imageSource:''},
                {title:'', content:'', imageSource:''},
            ].map((item) => <ShowCase key={item.title} title={item.title}/>)
          }
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white py-10 px-10">
        <ReadMore />
      </div>
      <Footer />
    </main>
  );
}
