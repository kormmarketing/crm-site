import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { WhatIDo } from "@/components/WhatIDo";
import { SectionDivider } from "@/components/SectionDivider";
import { Services } from "@/components/Services";
import { WorkFormats } from "@/components/WorkFormats";
import { Process } from "@/components/Process";
import { Cases } from "@/components/Cases";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <PainPoints />
        <WhatIDo />
        <SectionDivider />
        <Services />
        <WorkFormats />
        <Process />
        <Cases />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
