import React from 'react';

interface MindorProps {
    variant?: 'default' | 'service' | 'blockchain' | 'rpa' | 'app';
}

const Mindor: React.FC<MindorProps> = ({ variant = 'default' }) => {
    const content = {
        default: {
            title: "Driven by Digital. Defined by Impact",
            description: "Mindor is where innovation meets execution. We blend creativity, code, and strategy to build next-gen digital solutions from mobile apps and web platforms to AI systems, automation, and blockchain technology. With a sharp focus on scalability and impact, we help businesses stay ahead in an ever-evolving digital world.",
            image: "/assets/Mindor.png",
            alt: "Mindor Tech Logo"
        },
        service: {
            title: "Tailored Web Applications Designed for Your Business Needs Perfectly",
            description: "Most off-the-shelf solutions force companies to compromise, leading to workarounds, limitations, and inefficiencies that become part of the daily workflow. At Mindor, we build bespoke web platforms that align perfectly with your unique business, not someone else’s template. We empower businesses with solutions that drive growth.",
            image: "/assets/web.png",
            alt: "Mindor Services"
        },
        blockchain: {
            title: "Unlock the Potential of Decentralized Applications with Blockchain Development",
            description: "In the era of digital transformation, blockchain stands out as a revolutionary technology. At Mindor, we offer comprehensive blockchain development services that empower businesses to leverage the benefits of decentralization, transparency, and security.",
            image: "/assets/block.png",
            alt: "Mindor Blockchain"
        },
        rpa: {
            title: "Streamline Business Operations with Smart Automation",
            description: "Tired of repetitive, manual tasks slowing down your team? Our Robotic Process Automation (RPA) services help streamline operations by automating routine processes and reducing costly errors. We use industry-leading RPA tools to free up your team for high-value work and fast-track your digital transformation — across any industry.",
            image: "/assets/block.png",
            alt: "Mindor RPA"
        },
        app: {
            title: "End to End Mobile App Development Services",
            description: `Bringing a mobile app idea to life takes more than just writing code. It requires smart strategy, thoughtful design, and strong technical execution. Every stage, from the first sketch to the final launch, is handled by our in-house team.
This includes product planning, UI/UX design, development, testing, deployment, and long-term support. Whether you’re building a new product or upgrading an existing one, we create solutions tailored to your goals and your users.
Each app is built to be scalable, secure, and high-performing. It works seamlessly across both iOS and Android platforms. We use modern technologies like Flutter and React Native to ensure your app is future-ready.
With agile sprints and real-time updates, you’ll always know what’s happening. Our process is transparent, collaborative, and designed to keep you involved every step of the way.`,
            image: "/assets/App.png",
            alt: "Mobile App Development"
        },
    };

    const currentContent = content[variant];

    return (
        <div className=" md:p-6 flex items-center justify-center" style={{ backgroundColor: '#F1F0FF' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 w-full  items-center">
                <div className="order-2 lg:order-1  lg:w-[750px]">
                    <div className="bg-gradient-to-b from-[#E1DFFF] to-[#EAE9FF] backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-2xl shadow-2xl border border-white/20">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 md:mb-6 leading-tight" style={{ color: '#2A2A2A' }}>
                            {currentContent.title}
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium" style={{ color: '#2A2A2A' }}>
                            {currentContent.description}
                        </p>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center items-center">
                    <div className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <img
                            src={currentContent.image}
                            alt={currentContent.alt}
                            className="w-full h-auto drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mindor;