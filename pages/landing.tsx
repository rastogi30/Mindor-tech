import React from 'react';
import Link from 'next/link';

const MindorTechHomepage: React.FC = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{
      background: `linear-gradient(180deg, #2E386E 0%, #2D3A87 100%), url(/assets/background.png)`,
      backgroundSize: 'cover, cover',
      backgroundPosition: 'center, center',
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundBlendMode: 'overlay'
    }}>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-32 right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 py-2 w-full" style={{ backgroundColor: "#232D66" }}>
        <div className="flex items-center space-x-3">
          <div className="rounded-lg flex items-center justify-center">
            <img src="/assets/Logo.png" alt="Mindor Tech Logo" className="w-[140px] h-[34px] sm:w-[180px] sm:h-[44px] md:w-[202px] md:h-[48.51px] brightness-0 invert" />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          <Link href="/" passHref>
            <span className="text-white font-medium hover:text-blue-200 transition-colors text-lg cursor-pointer">Home</span>
          </Link>
          <Link href="/services">
            <span className="text-white/80 hover:text-white transition-colors text-md cursor-pointer">Service</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-white/80 hover:text-white transition-colors text-md cursor-pointer">About</span>
          </Link>
          <Link href="/blog" passHref>
            <span className="text-white/80 hover:text-white transition-colors text-md cursor-pointer">Blog</span>
          </Link>
        </div>
        <a
          href="https://wa.me/918928210967?text=Hi%20Mindor%20Team,%20I%20need%20assistance%20with%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <button className="bg-white/20 backdrop-blur-md border border-white/30 px-12 py-1 rounded-full text-white hover:bg-white/30 transition-all text-lg font-medium shadow-lg flex items-center">
            <span className="inline-flex items-center justify-center bg-white rounded-full mr-2" style={{ width: 28, height: 28 }}>
              <img src="/assets/whatsapp.png" alt="WhatsApp Icon" className="w-5 h-5" />
            </span>
            Contact Us
          </button>
        </a>
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          aria-label="Open navigation menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {navOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#232D66] bg-opacity-95 z-[100] flex flex-col items-center justify-center transition-all">
            <button
              className="absolute top-6 right-6 p-2 text-white"
              aria-label="Close navigation menu"
              onClick={() => setNavOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link href="/" passHref>
              <span className="text-white font-medium hover:text-blue-200 transition-colors text-2xl mb-8 cursor-pointer" onClick={() => setNavOpen(false)}>Home</span>
            </Link>
            <Link href="/service" passHref>
              <span className="text-white/80 hover:text-white transition-colors text-xl mb-8 cursor-pointer" onClick={() => setNavOpen(false)}>Service</span>
            </Link>
            <Link href="/about" passHref>
              <span className="text-white/80 hover:text-white transition-colors text-xl mb-8 cursor-pointer" onClick={() => setNavOpen(false)}>About</span>
            </Link>
            <Link href="/blog" passHref>
              <span className="text-white/80 hover:text-white transition-colors text-xl mb-8 cursor-pointer" onClick={() => setNavOpen(false)}>Blog</span>
            </Link>
            <a
              href="https://wa.me/918928210967?text=Hi%20Mindor%20Team,%20I%20need%20assistance%20with%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8"
            >
              <button className="bg-white/20 backdrop-blur-md border border-white/30 px-10 py-2 rounded-full text-white hover:bg-white/30 transition-all text-xl font-medium shadow-lg flex items-center">
                <span className="inline-flex items-center justify-center bg-white rounded-full mr-2" style={{ width: 28, height: 28 }}>
                  <img src="/assets/whatsapp.png" alt="WhatsApp Icon" className="w-5 h-5" />
                </span>
                Contact Us
              </button>
            </a>
          </div>
        )}
      </nav>

      <div className="relative z-20 px-12 w-full mx-auto pt-20">
        <div className="grid grid-cols-1 gap-24 items-center min-h-[80vh]">

          <div className="space-y-10 pt-10">
            <div className="inline-block  backdrop-blur-md border border-white/25 px-6 py-1 rounded-full text-base font-medium shadow-lg">
              AI & Software Solution
            </div>

            <div className="lg:flex lg:items-start lg:justify-between mt-5">
              <h1 className="text-4xl xl:text-5xl font-semibold leading-tight tracking-tight lg:max-w-[55%]" style={{ color: 'ffffff' }}>
                Your on demand AI &<br />
                Software<br />
                Development Partner
              </h1>
              <div className="mt-6 lg:mt-0 lg:max-w-[40%] lg:text-right">
                <p className="text-lg text-white leading-relaxed font-medium">
                  Great apps, seamless websites, intelligent automation and digital growth. Mindor delivers scalable digital solutions that transform ideas into results. We don't just build tech, we build what your business truly needs to grow.
                </p>
                 <a href="https://calendar.app.google/c94YxYt7MYuphBsw6" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-blue-900 px-10 py-2 rounded-full font-bold text-xl hover:bg-white/90 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 mt-6">
                  Get Free Consultation
                </button>
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">

            <div className="absolute top-10 left-10 z-30">
              <div className="bg-white/15 backdrop-blur-md border border-white/30 px-6 py-4 rounded-xl shadow-xl">
                <p className="text-white text-sm font-semibold">Website Development</p>
              </div>
              <div className="absolute top-8 left-full w-32 h-0.5 bg-white/70"></div>
            </div>

            <div className="absolute top-32 right-16 z-30">
              <div className="bg-white/15 backdrop-blur-md border border-white/30 px-6 py-4 rounded-xl shadow-xl">
                <p className="text-white text-sm font-semibold">Mobile App Development</p>
              </div>
              <div className="absolute top-8 right-full w-36 h-0.5 bg-white/70"></div>
            </div>

            <div className="absolute bottom-20 left-20 z-30">
              <div className="bg-white/15 backdrop-blur-md border border-white/30 px-6 py-4 rounded-xl shadow-xl">
                <p className="text-white text-sm font-semibold">AI Powered Solutions</p>
              </div>
              <div className="absolute bottom-8 left-full w-28 h-0.5 bg-white/70"></div>
            </div>

            <div className="absolute top-24 left-44 w-3 h-3 bg-white/80 rounded-full z-30 shadow-lg"></div>
            <div className="absolute top-48 right-56 w-3 h-3 bg-white/80 rounded-full z-30 shadow-lg"></div>
            <div className="absolute bottom-36 left-52 w-3 h-3 bg-white/80 rounded-full z-30 shadow-lg"></div>
            <div className="absolute bottom-48 right-44 w-3 h-3 bg-white/80 rounded-full z-30 shadow-lg"></div>

            <img
              src="/assets/hero.png"
              alt="Dashboard preview"
              className="relative z-20 w-full max-w-[900px] h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindorTechHomepage;