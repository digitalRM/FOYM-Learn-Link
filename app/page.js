import Hero from "@/components/sections/1 - Hero";
import StudnetSection from "@/components/sections/2 - StudentSection";
import OurVolunteers from "@/components/sections/3 - OurVolunteers";
import FAQ from "@/components/sections/4 - FAQ";
import Footer from "@/components/sections/5 - Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col flex w-screen overflow-x-hidden scroll-smooth">  
      <Hero />
      <StudnetSection />
      <OurVolunteers />
      <FAQ />
      <Footer />
      
    </div>
  );
}
