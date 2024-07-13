import Hero from "@/components/sections/1 - Hero";
import InfoSection from "@/components/sections/2 - InfoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col flex w-screen overflow-x-hidden scroll-smooth">  
      <Hero />
      <InfoSection />
    </div>
  );
}
