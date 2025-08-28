'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

type FAQVariant = 'web' | 'ai' | 'blockchain';

interface FAQProps {
    variant?: FAQVariant;
}

const FAQ: React.FC<FAQProps> = ({ variant = 'web' }) => {
    const [openItems, setOpenItems] = useState<string[]>([variant === 'web' ? 'custom-web-dev' : 'what-is-ai']);

    const webFaqData: FAQItem[] = [
        {
            id: 'custom-web-dev',
            question: 'What is custom web development?',
            answer: 'Custom web development refers to the process of building websites or web applications from scratch, tailored precisely to your business needs, user flow, and branding. It goes beyond basic templates to deliver scalable, secure, and feature-rich solutions.'
        },
        {
            id: 'development-time',
            question: 'How long does it take to develop a custom website?',
            answer: 'Development time varies based on project complexity, features required, and design specifications. Typically, a basic custom website takes 4-6 weeks, while complex web applications can take 3-6 months or more.'
        },
        {
            id: 'cost-factors',
            question: 'What factors affect the cost of web development?',
            answer: 'Cost depends on several factors including project complexity, number of features, design requirements, third-party integrations, ongoing maintenance needs, and the technology stack used.'
        },
        {
            id: 'maintenance',
            question: 'Do you provide ongoing maintenance and support?',
            answer: 'Yes, we offer comprehensive maintenance packages including security updates, bug fixes, performance optimization, content updates, and technical support to keep your website running smoothly.'
        },
        {
            id: 'technologies',
            question: 'What technologies do you use for development?',
            answer: 'We use modern technologies including React, Next.js, Node.js, Python, PHP, MongoDB, PostgreSQL, AWS, and many others. We choose the best tech stack based on your specific project requirements.'
        },
        {
            id: 'responsive',
            question: 'Will my website be mobile-responsive?',
            answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly across all devices including smartphones, tablets, and desktops.'
        }
    ];

    const aiFaqData: FAQItem[] = [
        {
            id: 'what-is-ai',
            question: 'What is AI solution development?',
            answer: 'AI solution development involves creating custom artificial intelligence applications tailored to your business needs. This includes machine learning models, natural language processing, computer vision, predictive analytics, and automation systems designed to solve specific business challenges.'
        },
        {
            id: 'ai-implementation-time',
            question: 'How long does it take to implement an AI solution?',
            answer: 'AI implementation timelines vary based on complexity and data availability. Simple AI integrations may take 2-4 weeks, while complex custom models can take 3-6 months including data preparation, model training, testing, and deployment phases.'
        },
        {
            id: 'data-requirements',
            question: 'What data do I need for AI development?',
            answer: 'Data requirements depend on your specific AI application. Generally, you need clean, relevant, and sufficient data for training. We help assess your data quality, identify gaps, and implement data collection strategies if needed.'
        },
        {
            id: 'ai-cost-factors',
            question: 'What factors influence AI development costs?',
            answer: 'AI development costs depend on project complexity, data volume and quality, required accuracy levels, infrastructure needs, ongoing training requirements, and the specific AI technologies used.'
        },
        {
            id: 'ai-maintenance',
            question: 'Do AI models require ongoing maintenance?',
            answer: 'Yes, AI models need continuous monitoring and maintenance. This includes performance tracking, model retraining with new data, accuracy optimization, and updates to handle changing business requirements or data patterns.'
        },
        {
            id: 'ai-integration',
            question: 'Can AI solutions integrate with existing systems?',
            answer: 'Absolutely! We design AI solutions to seamlessly integrate with your existing software, databases, and workflows. Our team ensures minimal disruption during implementation and provides comprehensive integration support.'
        }
    ];

    const blockchain: FAQItem[] = [
        {
            id: 'what-is-blockchain',
            question: 'What is blockchain development?',
            answer: 'Blockchain development involves creating decentralized applications (dApps) and smart contracts on blockchain platforms. It enables secure, transparent, and tamper-proof transactions without the need for intermediaries.'
        },
        {
            id: 'blockchain-use-cases',
            question: 'What are the use cases for blockchain technology?',
            answer: 'Blockchain technology can be used in various industries including finance (cryptocurrencies), supply chain (tracking goods), healthcare (secure patient data), and more. Its key benefits are transparency, security, and decentralization.'
        },
        {
            id: 'blockchain-implementation-time',
            question: 'How long does it take to develop a blockchain solution?',
            answer: 'The timeline for developing a blockchain solution depends on the project complexity. Simple applications may take a few weeks, while more complex solutions can take several months to design, develop, and deploy.'
        },
        {
            id: 'blockchain-security',
            question: 'How secure are blockchain applications?',
            answer: 'Blockchain applications are highly secure due to their decentralized nature and cryptographic techniques. However, security also depends on proper implementation and ongoing maintenance to address potential vulnerabilities.'
        }
    ]

    const faqData = variant === 'web' ? webFaqData : variant === 'ai' ? aiFaqData : blockchain;


    const toggleItem = (itemId: string) => {
        setOpenItems(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    return (
        <div className="py-10 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#102D47' }}>
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4" style={{ backgroundColor: "#F9FBFF" }}>
                    {faqData.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-lg overflow-hidden" style={{ backgroundColor: "#F9FBFF" }}
                        >
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span
                                    className="font-semibold text-lg pr-4"
                                    style={{ color: '#232D62' }}
                                >
                                    {item.question}
                                </span>
                                <div className="flex-shrink-0">
                                    {openItems.includes(item.id) ? (
                                        <ChevronUp className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.includes(item.id)
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6">
                                    <div className="border-t border-gray-100 pt-4">
                                        <p className="text-regular leading-relaxed" style={{ color: '#535869' }}>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;