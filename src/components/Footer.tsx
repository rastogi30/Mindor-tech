'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MessageCircle } from 'lucide-react';
import Logo from "../../public/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 rounded-2xl" style={{ backgroundColor: '#D9DDEA' }}>
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 lg:ml-3">
              <img src="/assets/Logo.png" alt="Mindor Tech Logo" className="w-[202px] h-[48.51px]" />
            </div>
            <p className="text-gray-600 text-sm mb-4 lg:ml-3">
              Innovative technology solutions for modern businesses. We create digital experiences that matter.
            </p>
            
            <div className="flex space-x-4 lg:ml-3">
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
               <MessageCircle size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                <Linkedin size={20} />
              </Link>

            </div>
          </div>

          <div className="col-span-1 lg:ml-9">
            <h3 className="text-lg font-semibold mb-4" style={{color:'#2F2F2F'}}>Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4" style={{color:'#2F2F2F'}}>More Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Terms and Condition
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4" style={{color:'#2F2F2F'}}>Stay Connected</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-[200px] h-8 rounded-[16px] items-center jsutify-center text-center"
              />
              <button
                className="flex flex-col justify-center items-center px-2 py-1.5 text-center outline-none no-underline text-white w-[200px] h-8 rounded-[16px] bg-[#0A66C2] font-sans"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 Mindor Tech. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;