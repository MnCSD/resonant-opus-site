"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Music, Globe, GraduationCap } from "lucide-react";
import musicalBackground from "@/assets/musical-background.jpg";

const About = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Royal Conservatory Graduate",
      description: "Master's in Piano Performance with highest honors"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "International Competitions",
      description: "Winner of prestigious European piano competitions"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Contemporary Collaborations",
      description: "Bridging classical traditions with modern compositions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "World Performances",
      description: "Concerts across Europe, Asia, and the Americas"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-light mb-6">
              The Journey of a <span className="text-cinematic">Musician</span>
            </h2>
            <div className="w-24 h-px bg-accent mx-auto mb-8" />
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From the intimate chambers of classical conservatories to the grand stages of international concert halls,
              music has been the constant thread weaving through my artistic evolution.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-playfair text-2xl md:text-3xl font-medium mb-6">
                A Life Dedicated to Musical Expression
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Born into a family where music was both heritage and passion, I discovered the piano at age five. 
                  What began as childhood curiosity evolved into a profound artistic calling that would shape every 
                  aspect of my creative journey.
                </p>
                
                <p>
                  My formal training at the Royal Conservatory opened doors to the rich traditions of classical 
                  performance while encouraging exploration of contemporary musical landscapes. This foundation 
                  allows me to honor the masters while forging new pathways of expression.
                </p>
                
                <p>
                  Today, I find equal fulfillment in performing Chopin's ethereal nocturnes and commissioning 
                  works from living composers. Each performance is an opportunity to bridge centuries of musical 
                  evolution, creating moments where time stands still and emotions speak louder than words.
                </p>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden elegant-shadow">
                <img
                  src={musicalBackground}
                  alt="Musical composition background"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-musical/60 to-musical/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 border-2 border-musical-foreground rounded-full flex items-center justify-center"
                  >
                    <Music className="w-8 h-8 text-musical-foreground" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h3 className="font-playfair text-2xl md:text-3xl font-medium text-center mb-12">
              Milestones & Recognition
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="transition-cinematic"
                >
                  <Card className="p-6 text-center elegant-shadow border-border/50 hover:border-accent/30 transition-elegant">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-accent-foreground">
                      {achievement.icon}
                    </div>
                    <h4 className="font-inter font-semibold mb-2 text-sm">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;