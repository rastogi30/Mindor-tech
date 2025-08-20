import React from 'react';

const Mindor: React.FC = () => {
    return (
        <div className=" md:p-6 flex items-center justify-center" style={{ backgroundColor: '#F1F0FF' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 w-full  items-center">
                <div className="order-2 lg:order-1  lg:w-[750px]">
                    <div className="bg-gradient-to-b from-[#E1DFFF] to-[#EAE9FF] backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-2xl shadow-2xl border border-white/20">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 md:mb-6 leading-tight" style={{ color: '#2A2A2A' }}>
                            Driven by Digital. Defined by Impact
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium" style={{ color: '#2A2A2A' }}>
                            Mindor is where innovation meets execution. We blend creativity, code, and
                            strategy to build next-gen digital solutions from mobile apps and web platforms
                            to AI systems, automation, and blockchain technology. With a sharp focus on
                            scalability and impact, we help businesses stay ahead in an ever-evolving digital
                            world.
                        </p>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center items-center">
                    <div className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <img
                            src="/assets/Mindor.png"
                            alt="Mindor Tech Logo"
                            className="w-full h-auto drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mindor;