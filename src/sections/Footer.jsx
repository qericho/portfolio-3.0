import { Github, Instagram, Facebook, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInCenter } from "../animations/variants";

// Social media links
const socialLinks = [
  { href: "https://github.com/qericho", icon: Github, label: "GitHub" },
  { href: "https://www.instagram.com/echstmr", icon: Mail, label: "Email" },
  {
    href: "https://www.instagram.com/echstmr/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/qericho/",
    icon: Facebook,
    label: "Facebook",
  },
];

// Simple footer based on your design system
const Footer = () => (
  <footer className="w-full bg-theme border-t border-theme py-8">
    <motion.div
      variants={fadeInCenter}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6"
    >
      {/* Copyright and name */}
      <div className="text-muted text-sm">
        &copy; {new Date().getFullYear()} Jericho Sta Maria. All rights
        reserved.
      </div>
      {/* Social icons */}
      <div className="flex gap-4">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 rounded-full bg-muted/40 text-muted hover:bg-primary hover:text-light transition"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </motion.div>
  </footer>
);

export default Footer;
