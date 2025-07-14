import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  price: string;
  duration: string;
  popular?: boolean;
}

const ServicesPage: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services: Service[] = [
    {
      id: 'web-development',
      title: 'Custom Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: '🌐',
      features: [
        'Responsive design for all devices',
        'Modern React/Next.js frontend',
        'Scalable backend architecture',
        'SEO optimization',
        'Performance optimization',
        'Security best practices'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      price: 'Starting from $5,000',
      duration: '4-8 weeks'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Development',
      description: 'Intelligent chatbots powered by OpenAI and custom AI models.',
      icon: '🤖',
      features: [
        'OpenAI GPT integration',
        'Custom training data',
        'Multi-platform support',
        'Natural language processing',
        'Analytics and insights',
        '24/7 availability'
      ],
      technologies: ['OpenAI API', 'Python', 'LangChain', 'FastAPI', 'Redis', 'Docker'],
      price: 'Starting from $3,000',
      duration: '2-4 weeks',
      popular: true
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      features: [
        'Cross-platform development',
        'Native performance',
        'Offline functionality',
        'Push notifications',
        'App store optimization',
        'Analytics integration'
      ],
      technologies: ['Flutter', 'React Native', 'Firebase', 'Dart', 'JavaScript', 'Google Cloud'],
      price: 'Starting from $8,000',
      duration: '6-12 weeks'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with payment integration.',
      icon: '🛒',
      features: [
        'Product catalog management',
        'Payment gateway integration',
        'Inventory management',
        'Order processing',
        'Customer analytics',
        'Multi-vendor support'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'MySQL', 'AWS'],
      price: 'Starting from $6,000',
      duration: '4-10 weeks'
    },
    {
      id: 'api-development',
      title: 'API Development',
      description: 'Robust RESTful and GraphQL APIs for your applications.',
      icon: '🔌',
      features: [
        'RESTful API design',
        'GraphQL implementation',
        'Authentication & authorization',
        'Rate limiting',
        'API documentation',
        'Testing & monitoring'
      ],
      technologies: ['Node.js', 'Express', 'GraphQL', 'JWT', 'Swagger', 'PostgreSQL'],
      price: 'Starting from $4,000',
      duration: '3-6 weeks'
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with optimization.',
      icon: '☁️',
      features: [
        'AWS/Azure/GCP migration',
        'Infrastructure as Code',
        'Performance optimization',
        'Cost optimization',
        'Security implementation',
        'Monitoring setup'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes'],
      price: 'Starting from $10,000',
      duration: '8-16 weeks'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'We create wireframes and prototypes to visualize the solution.',
      icon: '✏️'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds your solution using modern technologies.',
      icon: '💻'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment to production.',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollToSection={scrollToSection} />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
            <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
          </div>
          <div className="container relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our{' '}
                <span className="gradient-text-hero">Services</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                From custom web applications to AI-powered solutions, we deliver cutting-edge technology that drives business growth.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="#services" className="btn btn-primary-large">
                  Explore Services
                </a>
                <Link href="/contact" className="btn btn-secondary-large">
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="py-24 bg-gradient-to-br from-background to-background-light">
          <div className="container">

            {/* Services Grid */}
            <motion.section
              id="services"
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Our Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      service.popular ? 'ring-2 ring-primary' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">{service.title}</h3>
                    <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-text-primary mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-text-secondary">
                            <span className="text-primary mt-1">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-text-primary mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-background-light px-3 py-1 rounded-full text-xs text-text-secondary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-primary">{service.price}</span>
                        <span className="text-sm text-text-secondary">{service.duration}</span>
                      </div>
                      <Link 
                        href={`/service-detail?id=${service.id}`}
                        className="btn btn-primary w-full"
                      >
                        Learn More
                      </Link>
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
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Our Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-white text-2xl mx-auto">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-xl mb-8 text-white/90">
                  Let's discuss your project requirements and create a custom solution that fits your needs.
                </p>
                <Link href="/contact" className="btn btn-secondary-large">
                  Schedule a Consultation
                </Link>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage; 