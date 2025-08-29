import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [mobileServiceDropdownOpen, setMobileServiceDropdownOpen] = useState(false);

  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-6 md:px-12 py-3 sm:py-2 w-full" style={{ backgroundColor: "#232D66" }}>
      <Link href="/" passHref>
        <div className="flex items-center">
          <div className="rounded-lg flex items-center justify-center">
            <img
              src="/assets/Logo.png"
              alt="Mindor Tech Logo"
              className="w-[100px] h-[24px] sm:w-[140px] sm:h-[34px] md:w-[180px] md:h-[44px] lg:w-[202px] lg:h-[48.51px] brightness-0 invert cursor-pointer"
            />
          </div>
        </div>
      </Link>

      <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
        <Link href="/" passHref>
          <span className="text-white font-medium hover:text-blue-200 transition-colors text-lg cursor-pointer">
            Home
          </span>
        </Link>

        <div
          className="relative group"
          onMouseEnter={() => setServiceDropdownOpen(true)}
          onMouseLeave={() => setServiceDropdownOpen(false)}
        >
          <div className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors text-md cursor-pointer">
            <span>Service</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${serviceDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 ${serviceDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'}`}>
            <div className="py-2">
              <Link href="/services/mobile-app-development">
                <span className={`block px-4 py-3 transition-colors cursor-pointer border-b border-gray-50 last:border-b-0 ${isActive('/services/mobile-app-development') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                  Mobile App Development
                </span>
              </Link>
              <Link href="/services/web-development">
                <span className={`block px-4 py-3 transition-colors cursor-pointer border-b border-gray-50 last:border-b-0 ${isActive('/services/web-development') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                  Web Development
                </span>
              </Link>
              <Link href="/services/blockchain-development">
                <span className={`block px-4 py-3 transition-colors cursor-pointer border-b border-gray-50 last:border-b-0 ${isActive('/services/blockchain-development') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                  Blockchain Development
                </span>
              </Link>
              <Link href="/services/digital-marketing">
                <span className={`block px-4 py-3 transition-colors cursor-pointer border-b border-gray-50 last:border-b-0 ${isActive('/services/digital-marketing') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                  Digital Marketing
                </span>
              </Link>
              <Link href="/services/ai-powered-solutions">
                <span className={`block px-4 py-3 transition-colors cursor-pointer ${isActive('/services/ai-powered-solutions') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                  AI Powered Solutions
                </span>
              </Link>
              <Link href="/services/rpa">
                <span className={`block px-4 py-3 transition-colors cursor-pointer ${isActive('/services/rpa') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                  Robotic Process Automation
                </span>
              </Link>
            </div>
          </div>
        </div>

        <Link href="/about" passHref>
          <span className="text-white/80 hover:text-white transition-colors text-md cursor-pointer">
            About
          </span>
        </Link>

        <Link href="/blog" passHref>
          <span className="text-white/80 hover:text-white transition-colors text-md cursor-pointer">
            Blog
          </span>
        </Link>
      </div>

      <a
        href="https://wa.me/918928210967?text=Hi%20Mindor%20Team,%20I%20need%20assistance%20with%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block"
      >
        <button className="bg-white/20 backdrop-blur-md border border-white/30 px-8 xl:px-12 py-1 rounded-full text-white hover:bg-white/30 transition-all text-lg font-medium shadow-lg flex items-center">
          <span className="inline-flex items-center justify-center bg-white rounded-full mr-2" style={{ width: 28, height: 28 }}>
            <img src="/assets/whatsapp.png" alt="WhatsApp Icon" className="w-5 h-5" />
          </span>
          Contact Us
        </button>
      </a>

      <button
        className="lg:hidden flex items-center justify-center p-2 rounded focus:outline-none"
        aria-label="Open navigation menu"
        onClick={() => setNavOpen(!navOpen)}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {navOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#232D66] z-[100] flex flex-col">
          <Link href="/" passHref>
            <div className="flex items-center justify-between px-3 py-3 border-b border-white/10">
              <img
                src="/assets/Logo.png"
                alt="Mindor Tech Logo"
                className="w-[100px] h-[24px] brightness-0 invert"
              />
              <button
                className="p-2 text-white"
                aria-label="Close navigation menu"
                onClick={() => setNavOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </Link>

          <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <Link href="/" passHref>
              <div className="text-white font-medium text-lg py-3 px-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setNavOpen(false)}>
                Home
              </div>
            </Link>

            <div className="py-1">
              <div
                className="flex items-center justify-between text-white font-medium text-lg py-3 px-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => setMobileServiceDropdownOpen(!mobileServiceDropdownOpen)}
              >
                <span>Services</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${mobileServiceDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${mobileServiceDropdownOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 space-y-1">
                  <Link href="/services/mobile-app-development">
                    <div className={`text-base py-2 px-2 rounded transition-colors cursor-pointer ${isActive('/services/mobile-app-development') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`} onClick={() => setNavOpen(false)}>
                      Mobile App Development
                    </div>
                  </Link>
                  <Link href="/services/web-development">
                    <div className={`text-base py-2 px-2 rounded transition-colors cursor-pointer ${isActive('/services/web-development') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`} onClick={() => setNavOpen(false)}>
                      Web Development
                    </div>
                  </Link>
                  <Link href="/services/blockchain-development">
                    <div className={`text-base py-2 px-2 rounded transition-colors cursor-pointer ${isActive('/services/blockchain-development') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`} onClick={() => setNavOpen(false)}>
                      Blockchain Development
                    </div>
                  </Link>
                  <Link href="/services/digital-marketing">
                    <div className={`text-base py-2 px-2 rounded transition-colors cursor-pointer ${isActive('/services/digital-marketing') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`} onClick={() => setNavOpen(false)}>
                      Digital Marketing
                    </div>
                  </Link>
                  <Link href="/services/ai-powered-solutions">
                    <div className={`text-base py-2 px-2 rounded transition-colors cursor-pointer ${isActive('/services/ai-powered-solutions') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`} onClick={() => setNavOpen(false)}>
                      AI Powered Solutions
                    </div>
                  </Link>
                  <Link href="/services/rpa">
                    <span className={`block px-4 py-3 transition-colors cursor-pointer ${isActive('/services/rpa') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                      Robotic Process Automation
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" passHref>
              <div className="text-white font-medium text-lg py-3 px-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setNavOpen(false)}>
                About
              </div>
            </Link>

            <Link href="/blog" passHref>
              <div className="text-white font-medium text-lg py-3 px-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setNavOpen(false)}>
                Blog
              </div>
            </Link>
          </div>

          <div className="p-4 border-t border-white/10">
            <a
              href="https://wa.me/918928210967?text=Hi%20Mindor%20Team,%20I%20need%20assistance%20with%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-white hover:bg-white/30 transition-all text-base font-medium shadow-lg flex items-center justify-center w-full">
                <span className="inline-flex items-center justify-center bg-white rounded-full mr-3" style={{ width: 24, height: 24 }}>
                  <img src="/assets/whatsapp.png" alt="WhatsApp Icon" className="w-4 h-4" />
                </span>
                Contact Us
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;