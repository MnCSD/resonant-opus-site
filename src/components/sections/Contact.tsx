"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Music, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "dimitris@nikolopoulosmusic.com",
      href: "mailto:dimitris@nikolopoulosmusic.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+30 210 123 4567",
      href: "tel:+302101234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Athens, Greece",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-40 h-40 border border-accent/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-accent/20 rounded-full"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light mb-8"
            >
              Let's Create <span className="text-cinematic">Together</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-px bg-accent mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-inter text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Whether you're interested in booking a performance, commissioning a composition, 
              or exploring collaborative opportunities, I'd love to hear from you.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 elegant-shadow border-border/50">
                <h3 className="font-playfair text-2xl font-medium mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="transition-elegant focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-elegant focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="transition-elegant focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, event, or collaboration idea..."
                      rows={6}
                      required
                      className="transition-elegant focus:border-accent resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="musical" 
                    size="lg" 
                    className="w-full transition-cinematic hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Booking */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <Card className="p-6 elegant-shadow border-border/50">
                <h3 className="font-playfair text-xl font-medium mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-elegant ${
                        info.href ? 'hover:bg-accent/10 cursor-pointer' : ''
                      }`}
                      onClick={() => info.href && window.open(info.href)}
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent-foreground">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Quick Booking */}
              <Card className="p-6 elegant-shadow border-border/50">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-musical/10 flex items-center justify-center">
                    <Music className="w-6 h-6 text-musical" />
                  </div>
                  <h3 className="font-playfair text-xl font-medium mb-3">Performance Booking</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Interested in booking a performance? I offer solo recitals, chamber collaborations, 
                    and educational presentations.
                  </p>
                  <Button variant="outline" className="w-full transition-elegant hover:bg-accent hover:text-accent-foreground">
                    View Booking Information
                  </Button>
                </div>
              </Card>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20"
              >
                <p className="text-sm text-muted-foreground">
                  I typically respond to inquiries within 24-48 hours. 
                  For urgent booking requests, please call directly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;