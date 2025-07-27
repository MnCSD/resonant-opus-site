"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
const heroImage = "/lovable-uploads/43dd5795-15d8-4fe9-9613-45e3b9890184.png";

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pianist performing in atmospheric lighting"
          className="w-full h-full object-cover object-center blur-sm"
        />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight"
          >
            <span className="block">Dimitris</span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="block text-cinematic"
            >
              Nikolopoulos
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <div className="w-12 h-px bg-accent" />
            <p className="font-inter text-lg md:text-xl tracking-widest uppercase text-muted-foreground">
              Pianist · Composer · Performer
            </p>
            <div className="w-12 h-px bg-accent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting emotional landscapes through classical and contemporary piano performances.
            Each note tells a story, each silence holds meaning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              variant="musical"
              size="lg"
              className="font-inter font-medium tracking-wide px-8 py-4 transition-cinematic hover:scale-105"
              onClick={() => document.querySelector("#performances")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="w-4 h-4 mr-2" />
              Experience My Music
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="font-inter font-medium tracking-wide px-8 py-4 transition-cinematic hover:scale-105"
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Discover My Journey
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={scrollToNext}
            className="p-2 rounded-full bg-background/20 backdrop-blur-sm border border-border/20 transition-elegant hover:bg-background/30"
          >
            <ChevronDown className="w-6 h-6 text-accent" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;