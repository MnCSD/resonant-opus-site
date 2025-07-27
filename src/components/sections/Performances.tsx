"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Calendar, MapPin, ExternalLink } from "lucide-react";

const Performances = () => {
  const performances = [
    {
      title: "Chopin: Complete Nocturnes",
      venue: "Carnegie Hall, New York",
      date: "March 15, 2025",
      description: "An intimate evening exploring the emotional depths of Chopin's most beloved nocturnes, performed in their complete cycle for the first time in this venue.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "Solo Recital"
    },
    {
      title: "Contemporary Voices",
      venue: "Royal Opera House, London",
      date: "February 8, 2025",
      description: "World premieres of three commissioned works by leading contemporary composers, bridging the gap between classical tradition and modern expression.",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "Contemporary"
    },
    {
      title: "Beethoven Symphony No. 5",
      venue: "Vienna Musikverein",
      date: "January 12, 2025",
      description: "Solo piano transcription of Beethoven's iconic fifth symphony, showcasing the full orchestral power through the intimate medium of solo piano.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop",
      status: "recent",
      type: "Classical"
    },
    {
      title: "Collaborative Evening",
      venue: "Berlin Philharmonie",
      date: "December 3, 2024",
      description: "Chamber music collaborations with string quartet, featuring works by Brahms, Schumann, and a new commission for piano quintet.",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=800&h=600&fit=crop",
      status: "recent",
      type: "Chamber Music"
    }
  ];

  const recordings = [
    {
      title: "Reflections in Moonlight",
      composer: "Original Compositions",
      year: "2024",
      description: "A collection of original piano compositions inspired by nocturnal landscapes and introspective moments.",
      duration: "52:30"
    },
    {
      title: "Bach: The Well-Tempered Clavier Book I",
      composer: "J.S. Bach",
      year: "2023",
      description: "A fresh interpretation of Bach's monumental work, emphasizing the mathematical beauty and emotional depth of each prelude and fugue.",
      duration: "76:45"
    }
  ];

  return (
    <section id="performances" className="py-20 lg:py-32">
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
              <span className="text-cinematic">Performances</span> & Recordings
            </h2>
            <div className="w-24 h-px bg-accent mx-auto mb-8" />
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From intimate recital halls to grand concert venues, each performance is a unique conversation between 
              artist, instrument, and audience.
            </p>
          </motion.div>

          {/* Upcoming & Recent Performances */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-2xl md:text-3xl font-medium mb-8"
            >
              Concert Calendar
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              {performances.map((performance, index) => (
                <motion.div
                  key={performance.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="transition-cinematic"
                >
                  <Card className="overflow-hidden elegant-shadow border-border/50 hover:border-accent/30 transition-elegant">
                    <div className="relative">
                      <img
                        src={performance.image}
                        alt={performance.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          performance.status === 'upcoming' 
                            ? 'bg-accent text-accent-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {performance.status === 'upcoming' ? 'Upcoming' : 'Recent'}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/80 text-foreground">
                          {performance.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-playfair text-xl font-medium mb-2">
                        {performance.title}
                      </h4>
                      
                      <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {performance.venue}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {performance.date}
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {performance.description}
                      </p>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                        {performance.status === 'recent' && (
                          <Button variant="ghost" size="sm">
                            <Play className="w-4 h-4 mr-2" />
                            Listen
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recordings */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-2xl md:text-3xl font-medium mb-8"
            >
              Featured Recordings
            </motion.h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {recordings.map((recording, index) => (
                <motion.div
                  key={recording.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="transition-cinematic"
                >
                  <Card className="p-6 elegant-shadow border-border/50 hover:border-accent/30 transition-elegant">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-playfair text-lg font-medium mb-1">
                          {recording.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {recording.composer} • {recording.year}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-accent-foreground bg-accent px-2 py-1 rounded">
                        {recording.duration}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {recording.description}
                    </p>
                    
                    <div className="flex gap-2">
                      <Button variant="musical" size="sm" className="flex-1">
                        <Play className="w-4 h-4 mr-2" />
                        Listen Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Purchase
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performances;