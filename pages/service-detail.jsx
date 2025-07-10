import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../src/components/Navbar.jsx';
import Footer from '../src/components/Footer.jsx';

const ServiceDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Services data
  const services = [
    {
      id: 'ai',
      icon: '💡',
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions that automate processes, enhance decision-making, and drive innovation.',
      features: [
        'Custom AI tools',
        'RAG-powered chatbots',
        'AI document analysis',
        'Predictive analytics'
      ],
      idealFor: 'Enterprises, HR tech, fintech, legal firms, and SaaS',
      keywords: 'AI development services, RAG chatbot, GPT integration, AI tools for business',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      benefits: [
        'Automate repetitive tasks',
        'Improve decision making',
        'Enhance customer experience',
        'Reduce operational costs'
      ],
      detailedDescription: 'Our AI-powered solutions leverage the latest advancements in machine learning and natural language processing to create intelligent systems that can understand, learn, and adapt to your business needs. From custom AI tools that streamline your workflows to sophisticated chatbots that provide 24/7 customer support, we build solutions that drive real business value.',
      useCases: [
        'Customer service automation with intelligent chatbots',
        'Document processing and data extraction',
        'Predictive analytics for business forecasting',
        'Personalized recommendation systems'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenAI GPT', 'LangChain', 'RAG', 'Machine Learning']
    },
    {
      id: 'web',
      icon: '🌐',
      title: 'Web & Mobile Development',
      description: 'Build scalable, modern web and mobile applications that deliver exceptional user experiences and drive business growth.',
      features: [
        'Frontend (React, Next.js, Flutter)',
        'Backend (Node.js, Django, Express)',
        'Scalable, clean, mobile-first UI/UX',
        'E-commerce and CMS builds'
      ],
      idealFor: 'Startups, enterprises, e-commerce businesses',
      keywords: 'Web development agency, mobile app development India, scalable React apps',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      benefits: [
        'Cross-platform compatibility',
        'High performance & scalability',
        'Modern user experience',
        'SEO optimized solutions'
      ],
      detailedDescription: 'We specialize in building modern, scalable web and mobile applications that not only look great but also perform exceptionally well. Our development approach focuses on creating user-centric experiences that drive engagement and conversion. From responsive web applications to native mobile apps, we ensure your digital presence is optimized for all platforms and devices.',
      useCases: [
        'E-commerce platforms and marketplaces',
        'Progressive web applications (PWAs)',
        'Mobile apps for iOS and Android',
        'Enterprise web applications'
      ],
      technologies: ['React', 'Next.js', 'Flutter', 'Node.js', 'Django', 'PostgreSQL']
    },
    {
      id: 'marketing',
      icon: '📣',
      title: 'Digital Marketing',
      description: 'Drive growth and increase brand visibility with comprehensive digital marketing strategies that convert visitors into customers.',
      features: [
        'SEO + content strategy',
        'Paid campaigns (Google, Meta)',
        'Social media management',
        'Analytics and optimization'
      ],
      idealFor: 'All businesses looking to increase online presence',
      keywords: 'Digital marketing services, SEO agency, paid advertising',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      benefits: [
        'Increase brand visibility',
        'Generate qualified leads',
        'Improve conversion rates',
        'Data-driven optimization'
      ],
      detailedDescription: 'Our digital marketing services are designed to create a comprehensive online presence that drives real business results. We combine data-driven strategies with creative content to ensure your brand stands out in the digital landscape. From search engine optimization to social media campaigns, we help you reach your target audience and convert them into loyal customers.',
      useCases: [
        'Search engine optimization (SEO) campaigns',
        'Pay-per-click (PPC) advertising',
        'Social media marketing and management',
        'Content marketing and strategy'
      ],
      technologies: ['Google Ads', 'Meta Ads', 'Google Analytics', 'SEO Tools', 'Social Media Platforms']
    },
    {
      id: 'rpa',
      icon: '🤖',
      title: 'RPA (Robotic Process Automation)',
      description: 'Streamline operations and reduce costs through intelligent automation of repetitive business processes.',
      features: [
        'Task automation bots',
        'Workflow orchestration',
        'Integration with tools like Excel, CRMs, ERPs',
        'Process optimization'
      ],
      idealFor: 'Enterprises, manufacturing, finance, healthcare',
      keywords: 'RPA services India, process automation software',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      benefits: [
        'Reduce manual errors',
        'Increase productivity',
        'Lower operational costs',
        '24/7 process execution'
      ],
      detailedDescription: 'Our RPA solutions help businesses automate repetitive tasks and workflows, allowing your team to focus on high-value activities. We design and implement intelligent automation systems that integrate seamlessly with your existing tools and processes. From data entry automation to complex workflow orchestration, we help you achieve operational excellence.',
      useCases: [
        'Data entry and processing automation',
        'Invoice processing and accounts payable',
        'Customer service ticket routing',
        'Report generation and distribution'
      ],
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'APIs']
    },
    {
      id: 'blockchain',
      icon: '🔗',
      title: 'Blockchain Development',
      description: 'Build secure, transparent, and decentralized solutions that revolutionize how your business operates and interacts.',
      features: [
        'Smart contracts',
        'Tokenized asset platforms',
        'Blockchain for compliance & traceability',
        'DeFi applications'
      ],
      idealFor: 'Fintech, supply chain, real estate, gaming',
      keywords: 'Tokenization platform, blockchain development company, smart contract services',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      benefits: [
        'Enhanced security & transparency',
        'Reduced transaction costs',
        'Improved traceability',
        'Decentralized operations'
      ],
      detailedDescription: 'Our blockchain development services help businesses leverage the power of decentralized technology to create secure, transparent, and efficient systems. From smart contracts that automate business logic to tokenized asset platforms that enable new business models, we build blockchain solutions that drive innovation and create competitive advantages.',
      useCases: [
        'Smart contract development for DeFi',
        'Supply chain traceability solutions',
        'Tokenized asset platforms',
        'Decentralized applications (DApps)'
      ],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'Polygon', 'Smart Contracts']
    }
  ];

  useEffect(() => {
    const foundService = services.find(s => s.id === id);
    setService(foundService);
    setLoading(false);
  }, [id]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar scrollToSection={scrollToSection} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar scrollToSection={scrollToSection} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-text-primary mb-4">Service Not Found</h1>
            <p className="text-text-secondary mb-6">The service you're looking for doesn't exist.</p>
            <Link href="/services" className="btn btn-primary">
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar scrollToSection={scrollToSection} />
      
      {/* Hero Section with Hero background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background - same as Hero.jsx */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light z-0">
          <div className="absolute inset-0 bg-gradient-hero opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 z-20"
            style={{
              background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)'
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="container relative z-30 px-4">
          <div className="w-full pt-20">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span>{service.icon}</span>
                <span>{service.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>

            {/* Service Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="w-full">
            {/* Detailed Description */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-6">About This Service</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {service.detailedDescription}
              </p>
            </div>

            {/* Features & Benefits */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">✓</span>
                  </span>
                  What We Offer
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">↑</span>
                  </span>
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-primary/10 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">{idx + 1}</span>
                        </div>
                        <h4 className="font-semibold text-text-primary">Benefit {idx + 1}</h4>
                      </div>
                      <p className="text-text-secondary">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.useCases.map((useCase, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-bold">{idx + 1}</span>
                      </div>
                      <h3 className="font-semibold text-text-primary">Use Case {idx + 1}</h3>
                    </div>
                    <p className="text-text-secondary">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Technologies We Use</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Ideal For & Keywords */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-text-primary mb-4">Ideal for</h3>
                <p className="text-text-secondary text-lg">{service.idealFor}</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-text-primary mb-4">Keywords</h3>
                <p className="text-text-secondary">{service.keywords}</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Let's discuss how {service.title} can help transform your business
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#contact"
                    className="btn btn-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Start Your Project
                  </Link>
                  <Link
                    href="/case-studies"
                    className="btn btn-outline-white border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage; 