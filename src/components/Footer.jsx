import React from 'react';
import { Link } from 'react-router-dom';

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/mindor-tech/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
    )
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mindor_tech',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/mindor_tech',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
    )
  }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white shadow-2xl rounded-t-3xl mt-16 overflow-hidden">
      <div className="w-full px-6 py-12 flex flex-col md:flex-row md:justify-between md:items-center gap-10">
        {/* Brand/Logo */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-bold font-secondary tracking-tight gradient-text-hero">Mindor Tech</span>
          <span className="text-sm text-white/70">Digital Innovation Partner</span>
        </div>
        {/* Quick Links */}
        <nav className="flex flex-wrap gap-6 justify-center md:justify-center text-base font-medium">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/careers" className="hover:text-accent transition-colors">Careers</Link>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        {/* Socials */}
        <div className="flex gap-5 justify-center md:justify-end">
          {socials.map(social => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="group rounded-full bg-white/10 hover:bg-accent/90 transition-colors p-3 shadow-md hover:scale-110 duration-200"
            >
              <span className="text-white group-hover:text-white flex items-center justify-center">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/20 mx-6"></div>
      <div className="container px-6 py-6 text-center text-sm text-white/70">
        &copy; 2025 Mindor Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 