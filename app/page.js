import Hero from "@/components/sections/1 - Hero";
import StudnetSection from "@/components/sections/2 - StudentSection";
import OurVolunteers from "@/components/sections/3 - OurVolunteers";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col flex w-screen overflow-x-hidden scroll-smooth">  
      <Hero />
      <StudnetSection />
      <OurVolunteers />
    </div>
  );
}
