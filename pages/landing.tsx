import React from 'react';
import Navbar from './../src/components/Navbar';

const MindorTechHomepage: React.FC = () => {
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

      <Navbar />

      <div className="relative z-20 px-12 w-full mx-auto pt-20 ml-6" >
        <div className="grid grid-cols-1 gap-24 items-center min-h-[80vh]">

          <div className="space-y-10 pt-10">
            <div className="inline-block backdrop-blur-md border border-white/25 px-6 py-1 rounded-full text-base font-medium shadow-lg">
              One Partner. Infinite Possibilities.
            </div>

            <div className="lg:flex lg:items-start lg:justify-between mt-5">
              <h1 className="text-4xl xl:text-5xl font-semibold leading-tight tracking-tight lg:max-w-[55%]" style={{ color: 'ffffff' }}>
                Web, Mobile, AI & Digital Solutions to power smarter enterprises.
              </h1>
              <div className="mt-6 lg:mt-0 lg:max-w-[40%] lg:text-left">
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
            <div className="absolute top-10 left-2 z-30">
              <div className="backdrop-blur-md border border-white/30 px-6 py-4 rounded-xl shadow-xl" style={{
                background: 'linear-gradient(90deg, rgba(65, 80, 147, 0.92) 0%, rgba(88, 101, 165, 0.92) 100%)'
              }}>
                <p className="text-white text-sm font-semibold">Website Development</p>
              </div>
              <div className="absolute top-8 left-full w-40 h-0.5 bg-white/70"></div>
              <div className="absolute top-8 left-[calc(100%+160px)] w-0.5 h-24 bg-white/70"></div>
            </div>
            <div className="absolute top-25 right-2 z-25">
              <div className="backdrop-blur-md border border-white/30 px-6 py-4 rounded-xl shadow-xl" style={{
                background: 'linear-gradient(90deg, rgba(65, 80, 147, 0.92) 0%, rgba(88, 101, 165, 0.92) 100%)'
              }}>
                <p className="text-white text-sm font-semibold">Mobile App Development</p>
              </div>
              <div className="absolute top-8 right-full w-44 h-0.5 bg-white/70"></div>
              <div className="absolute top-8 right-[calc(100%+176px)] w-0.5 h-32 bg-white/70"></div>
            </div>
              <div className="absolute bottom-15 left-4 z-25">
              <div className="backdrop-blur-md border border-white/30 px-6 py-4 rounded-xl shadow-xl" style={{
                background: 'linear-gradient(90deg, rgba(65, 80, 147, 0.92) 0%, rgba(88, 101, 165, 0.92) 100%)'
              }}>
                <p className="text-white text-sm font-semibold">AI Powered Solutions</p>
              </div>
              <div className="absolute bottom-8 left-full w-36 h-0.5 bg-white/70"></div>
              <div className="absolute bottom-8 left-[calc(100%+144px)] w-0.5 h-20 bg-white/70"></div>
            </div>
            <div className="absolute top-[72px] left-[242px] w-3 h-3 bg-white/80 rounded-full z-30 shadow-lg"></div>
            <div className="absolute top-[160px] right-[242px] w-3 h-3 bg-white/80 rounded-full z-30 shadow-lg"></div>
            <div className="absolute bottom-[112px] left-[246px] w-3 h-3 bg-white/80 rounded-full z-30 shadow-lg"></div>
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