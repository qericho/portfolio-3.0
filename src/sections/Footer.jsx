import { Github, Instagram, Facebook, Mail } from "lucide-react";

// Social media links
const socialLinks = [
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Mail, label: "Email" },
  {
    href: "#",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "#",
    icon: Facebook,
    label: "Facebook",
  },
];

// Simple footer based on your design system
const Footer = () => (
  <footer className="w-full bg-theme border-t border-theme py-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
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
    </div>
  </footer>
);

export default Footer;
