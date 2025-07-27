"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Music, Mail, Phone, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Performances", href: "#performances" },
    { name: "Media", href: "#media" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-musical text-musical-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-musical-foreground/10 flex items-center justify-center">
                  <Music className="w-6 h-6 text-musical-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">
                  Dimitris Nikolopoulos
                </h3>
              </div>
              
              <p className="text-musical-foreground/80 leading-relaxed text-sm">
                Creating musical experiences that bridge the timeless beauty of classical tradition 
                with the innovative spirit of contemporary composition. Every performance is an 
                invitation to explore the profound emotional landscapes that music can reveal.
              </p>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-musical-foreground/80 hover:text-musical-foreground hover:bg-musical-foreground/10"
                  onClick={() => window.open("mailto:dimitris@nikolopoulosmusic.com")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-musical-foreground/80 hover:text-musical-foreground hover:bg-musical-foreground/10"
                  onClick={() => window.open("tel:+302101234567")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="font-playfair text-lg font-medium">Navigation</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-musical-foreground/80 hover:text-musical-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Social & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="font-playfair text-lg font-medium">Stay Connected</h4>
              
              <div className="space-y-4">
                <p className="text-musical-foreground/80 text-sm">
                  Follow my musical journey and be the first to know about new performances and recordings.
                </p>
                
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-musical-foreground/10 flex items-center justify-center text-musical-foreground/80 hover:text-musical-foreground hover:bg-musical-foreground/20 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-musical-foreground/20 mb-8" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-musical-foreground/60"
          >
            <div className="flex items-center gap-6">
              <p>&copy; 2025 Dimitris Nikolopoulos. All rights reserved.</p>
              <div className="hidden md:flex items-center gap-4">
                <button className="hover:text-musical-foreground transition-colors">
                  Privacy Policy
                </button>
                <button className="hover:text-musical-foreground transition-colors">
                  Terms of Service
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span>Website crafted with</span>
              <span className="text-accent">♪</span>
              <span>and passion</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;