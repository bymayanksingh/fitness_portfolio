import React from 'react';
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

export default function SocialLinks() {
  const socials = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "Youtube" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" }
  ];

  return (
    <div className="flex space-x-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-gray-400 hover:text-gray-500 transition"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}