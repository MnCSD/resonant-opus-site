"use client";

import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Performances from "@/components/sections/Performances";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen dark">
      <Navigation />
      <main>
        <Hero />
        <Performances />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
