import React from 'react';
import { Link } from 'react-router-dom';

type LinkSection = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

const sections: LinkSection[] = [
  {
    title: "Programs",
    links: [
      { label: "Personal Training", href: "/programs" },
      { label: "Group Classes", href: "/programs" },
      { label: "Online Coaching", href: "/programs" },
      { label: "Nutrition Plans", href: "/programs" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" }
    ]
  }
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-material-500 dark:text-material-400 tracking-wider uppercase mb-4">
            {section.title}
          </h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link 
                  to={link.href} 
                  className="text-base text-material-600 dark:text-material-300 hover:text-material-900 dark:hover:text-material-50 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}