import Image from "next/image";
import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/FloatingNav";
import{ FaHome } from "react-icons/fa"
import Grid from "@/components/Grid";
import RecentProject from "@/components/RecentProject";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/approach";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip
    mx-auto sm:px-10 px-5">
    <div className=" max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
     <Hero />
     <Grid />
     <RecentProject />
     <Clients />
     <Experience />
     <Approach />
     <Footer />
    </div>
   </main>
  );
}

