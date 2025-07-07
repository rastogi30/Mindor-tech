import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "40%", label: "Average Cost Reduction" },
    { number: "3x", label: "Faster Time to Market" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection}/>

      {/* Hero Section with Hero background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
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
        <div className="container relative z-30">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white">Technology That{' '}</span>
              <span className="gradient-text-hero bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">Works for You</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At Mindor Tech, we don't just write code. We build intelligent, scalable, and secure tech that
              transforms how your business operates. Explore our services across AI, automation, web
              development, and digital marketing.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/#contact"
                className="bg-white text-primary rounded-full px-8 py-3 font-semibold hover:shadow-lg transition-all duration-300 hover:bg-gray-100"
              >
                Get Started
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-24 bg-gradient-to-br from-background to-background-light">
        <div className="container">

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Our Services
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Service Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Content - Minimal View */}
                  <div className="p-6">
                    {/* Brief Features Preview */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 2 && (
                          <span className="bg-gray-100 text-text-secondary px-2 py-1 rounded-full text-xs">
                            +{service.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Ideal For Preview */}
                    <div className="mb-4">
                      <p className="text-text-secondary text-sm line-clamp-2">
                        <strong>Ideal for:</strong> {service.idealFor}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                      <Link
                        to={`/services/${service.id}`}
                        className="w-full btn btn-primary rounded-lg px-4 py-2 text-sm font-semibold text-center block"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Our Process
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your requirements and business goals' },
                { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and architecture' },
                { step: '03', title: 'Development', desc: 'Building your solution with best practices' },
                { step: '04', title: 'Deployment', desc: 'Launching and maintaining your application' }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {process.title}
                  </h3>
                  <p className="text-text-secondary">
                    {process.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Let's discuss how our technology solutions can help you achieve your goals.
              </p>
              <p className="text-lg mb-8 opacity-80">
                AI development services • Web development agency • Digital marketing services • RPA services India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="btn btn-white rounded-full px-8 py-3 text-primary font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/case-studies"
                  className="btn btn-outline-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage; 