import { Metadata } from "next";
import Hero from "@/components/Hero";

import About from "@/components/About";





export const metadata: Metadata = {
  title: "Atoms 2.0",
  description: "This is Home page",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      

      <About />
 
    </main>
  );
}
