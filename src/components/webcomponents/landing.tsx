import React, { useState } from 'react';

interface LandingProps {
    variant?: 'web' | 'ai' | 'blockchain' | 'rpa';
}

const Landing: React.FC<LandingProps> = ({ variant = 'web' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        whatsappNumber: ''
    });

    const content = {
        web: {
            badge: {
                text: "Custom Web Development Services",
                className: "backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30"
            },
            title: (
                <>
                    Transform Your Ideas with Expert{' '}
                    <span>Custom Web Development</span>{' '}
                    Services
                </>
            ),
            description: "Generic tools don't solve specific problems. We at Mindor specialize in crafting custom-built web platforms tailored precisely to your workflows, processes, and customers, empowering businesses globally.",
            background: "linear-gradient(135deg, #232D62 0%, #4A5DB8 100%), url(/assets/background.png)",
            floatingElements: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
            ),
            features: null,
            cta: {
                text: "Get Free Consultation",
                className: "bg-white text-black hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            }
        },
        ai: {
            badge: {
                text: "AI Development Services",
                className: "backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30"
            },
            title: (
                <>
                    AI Development Services That Power Digital Transformation

                </>
            ),
            description: "AI isn’t the future; it’s the engine powering smarter, faster, and more efficient businesses today. At Mindor, we offer end-to-end AI Development Services that transform your vision into real-world intelligent solutions. Tired of guesswork? Our expert AI engineers and data scientists help you harness data-driven insights to gain a lasting competitive edge across any industry.",
            background: "linear-gradient(135deg, #232D62 0%, #4A5DB8 100%), url(/assets/background.png)",
            floatingElements: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
            ),
            features: null,
            cta: {
                text: "Get AI Consultation",
                className: "bg-white text-black hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            }
        },
        blockchain: {
            badge: {
                text: "Drive Innovation with Expert",
                className: "backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30"
            },
            title: (
                <>
                    Blockchain Development Services
                </>
            ),
            description: "Ready to transform your business with cutting-edge technology? We provide expert blockchain development services that empower startups, enterprises, and visionary brands. Our secure, scalable, and custom blockchain solutions are designed to drive innovation and build unparalleled trust in your operations.",
            background: "linear-gradient(135deg, #232D62 0%, #4A5DB8 100%), url(/assets/background.png)",
            floatingElements: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
            ),
            features: null,
            cta: {
                text: "Get Blockchain Consultation",
                className: "bg-white text-black hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            }
        },
        rpa: {
            badge: {
                text: "Streamline Business Operations with Smart Automation",
                className: "backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30"
            },
            title: (
                <>
                    Robotic Process Automation Services
                </>
            ),
            description: "Tired of repetitive, manual tasks slowing down your team? Our Robotic Process Automation (RPA) services help streamline operations by automating routine processes and reducing costly errors. We use industry-leading RPA tools to free up your team for high-value work and fast-track your digital transformation — across any industry.",
            background: "linear-gradient(135deg, #232D62 0%, #4A5DB8 100%), url(/assets/background.png)",
            floatingElements: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
            ),
            features: null,
            cta: {
                text: "Get RPA Consultation",
                className: "bg-white text-black hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            }
        }
    };

    const currentContent = content[variant];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            style={{
                background: currentContent.background,
                backgroundSize: 'cover, cover',
                backgroundPosition: 'center, center',
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundBlendMode: 'overlay'
            }}>

            <div className="absolute inset-0 bg-black/20"></div>

            {currentContent.floatingElements}

            <div className=" mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <div className="text-white space-y-6">
                        <div className="inline-block">
                            <span className={currentContent.badge.className}>
                                {currentContent.badge.text}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold leading-tight">
                            {currentContent.title}
                        </h1>

                        <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl font-medium">
                            {currentContent.description}
                        </p>

                        {currentContent.features && (
                            <div className="pt-2">
                                {currentContent.features}
                            </div>
                        )}

                        <div className="pt-4">
                            <a href="https://calendar.app.google/c94YxYt7MYuphBsw6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block">
                                <button className={currentContent.cta.className}>
                                    {currentContent.cta.text}
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm mb-10 lg:mb-0">
                        <div className="text-white px-6 py-4 rounded-t-xl -mx-8 -mt-8 mb-6" style={{ backgroundColor: '#4252AD' }}>
                            <h3 className="text-xl font-semibold text-center">Get in Touch with Us</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <h1>Name</h1>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <h1>Email</h1>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                    required
                                />
                            </div>


                            <div>
                                <h1>WhatsApp</h1>
                                <input
                                    type="tel"
                                    name="whatsappNumber"
                                    placeholder="WhatsApp Number"
                                    value={formData.whatsappNumber}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full transition-colors duration-200 transform hover:scale-[1.02] shadow-lg"
                                style={{ backgroundColor: '#4252AD' }}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
