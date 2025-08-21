import React from 'react';

const MindorTechHomepage: React.FC = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{
      background: `linear-gradient(180deg, #2E386E 0%, #2D3A87 100%), url(/assets/background.png)`,
      backgroundSize: 'cover, cover',
      backgroundPosition: 'center, center',
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundBlendMode: 'overlay'
    }}>
      
      {/* Additional overlay for background image opacity */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-32 right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-2 w-full" style={{ backgroundColor: "#232D66" }}>
        <div className="flex items-center space-x-3">
          <div className=" rounded-lg flex items-center justify-center ">
            <img src="/assets/Logo.png" alt="Mindor Tech Logo" className="w-[202px] h-[48.51px] brightness-0 invert" />
          </div>
        </div>
        
        <div className="flex items-center space-x-12">
          <a href="#" className="text-white font-medium hover:text-blue-200 transition-colors text-lg">Home</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-md">Service</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-md">About</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-md">Blog</a>
        </div>

        <button className="bg-white/20 backdrop-blur-md border border-white/30 px-12 py-1 rounded-full text-white hover:bg-white/30 transition-all text-lg font-medium shadow-lg">
          Contact Us
        </button>
      </nav>

      <div className="relative z-20 px-12 w-full mx-auto pt-20">
        <div className="grid grid-cols-1 gap-24 items-center min-h-[80vh]">

          <div className="space-y-10 pt-10">
            <div className="inline-block  backdrop-blur-md border border-white/25 px-6 py-1 rounded-full text-base font-medium shadow-lg">
              AI & Software Solution
            </div>
            
            <div className="lg:flex lg:items-start lg:justify-between mt-5">
              <h1 className="text-4xl xl:text-5xl font-semibold leading-tight tracking-tight lg:max-w-[55%]" style={{color:'ffffff'}}>
                Your on demand AI &<br />
                Software<br />
                Development Partner
              </h1>
              <div className="mt-6 lg:mt-0 lg:max-w-[40%] lg:text-right">
                <p className="text-lg text-white leading-relaxed font-medium">
                  Great apps, seamless websites, intelligent automation and digital growth. Mindor delivers scalable digital solutions that transform ideas into results. We don't just build tech, we build what your business truly needs to grow.
                </p>
                <button className="bg-white text-blue-900 px-10 py-2 rounded-full font-bold text-xl hover:bg-white/90 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 mt-6">
                  Get Free Consultation
                </button>
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