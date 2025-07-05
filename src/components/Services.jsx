import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [activeTab, setActiveTab] = useState('mobile');

  const services = [
    {
      id: 'mobile',
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Create powerful mobile applications that engage users and drive business growth. Our expert team delivers native and cross-platform solutions.',
      features: [
        'Native iOS & Android Development',
        'Cross-platform Solutions (React Native, Flutter)',
        'UI/UX Design & Prototyping',
        'App Store Optimization'
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80',
      imageAlt: 'Mobile app development showing smartphone with app interface'
    },
    {
      id: 'web',
      icon: '🌐',
      title: 'Web Development',
      description: 'Build responsive, high-performance websites that convert visitors into customers and establish your digital presence.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Progressive Web Apps (PWAs)',
        'Performance Optimization'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80',
      imageAlt: 'Web development showing code on monitor'
    },
    {
      id: 'marketing',
      icon: '📊',
      title: 'Digital Marketing',
      description: 'Amplify your brand reach and drive qualified leads through strategic digital marketing campaigns and optimization.',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Social Media Marketing',
        'Content Marketing Strategy'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
      imageAlt: 'Digital marketing analytics dashboard on laptop'
    },
    {
      id: 'ai',
      icon: '🤖',
      title: 'AI-Powered Solutions',
      description: 'Leverage artificial intelligence to automate processes, gain insights, and create competitive advantages for your business.',
      features: [
        'Machine Learning Integration',
        'Natural Language Processing',
        'Predictive Analytics',
        'AI Chatbots & Virtual Assistants'
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
      imageAlt: 'AI and technology represented by circuit board'
    },
    {
      id: 'rpa',
      icon: '⚙️',
      title: 'Robotic Process Automation',
      description: 'Streamline operations and reduce costs through intelligent automation of repetitive business processes.',
      features: [
        'Process Analysis & Optimization',
        'Bot Development & Deployment',
        'Workflow Automation',
        'Integration with Existing Systems'
      ],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80',
      imageAlt: 'Robotic process automation concept with robotic hand and technology'
    },
    {
      id: 'blockchain',
      icon: '🔗',
      title: 'Blockchain Development',
      description: 'Build secure, transparent, and decentralized solutions that revolutionize how your business operates and interacts.',
      features: [
        'Smart Contract Development',
        'DApp Development',
        'Cryptocurrency Integration',
        'Blockchain Consulting'
      ],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&q=80',
      imageAlt: 'Blockchain technology concept with digital network'
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-background-light relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header-enhanced"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">Our Services</div>
          <h2 className="section-title-enhanced">Comprehensive Technology Solutions</h2>
          <p className="section-subtitle-enhanced">
            We offer end-to-end technology solutions designed to transform your business, 
            drive growth, and maintain your competitive edge in today's digital landscape.
          </p>
        </motion.div>

        <div className="services-tabs">
          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.button
                key={service.id}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg scale-105'
                    : 'bg-white text-text-secondary hover:text-primary hover:shadow-md'
                }`}
                onClick={() => setActiveTab(service.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{service.icon}</span>
                <span className="hidden sm:inline">{service.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {services.map((service) => (
              activeTab === service.id && (
                <motion.div
                  key={service.id}
                  className="tab-content"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Service Info */}
                    <motion.div
                      className="service-info"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold text-text-primary mb-6 gradient-text">
                        {service.title}
                      </h3>
                      <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-4">
                        {service.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-3 text-text-secondary"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-primary to-primary-light rounded-full mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Service Visual */}
                    <motion.div
                      className="service-visual"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="relative group">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="btn btn-primary-large"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <span className="btn-arrow">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 