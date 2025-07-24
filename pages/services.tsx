import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../src/components/Navbar';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../src/components/Footer'));

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
  heroImage?: string; // Added heroImage property
}

const ServicesPage: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80';
  }, []);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-white/20 rounded-full';

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;

      // Random animation
      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 2;

      particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;

      particlesRef.current.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 300);

    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => clearInterval(interval);
  }, []);
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
      heroImage: '/images/web-development-hero.png',
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
      heroImage: '/images/ai-chatbot-hero.png',
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
      heroImage: '/images/mobile-app-hero.png',
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
      heroImage: '/images/ecommerce-hero.png',
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
      heroImage: '/images/api-development-hero.png',
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
      heroImage: '/images/cloud-migration-hero.png',
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
        {/* Hero Section - New Design (Similar to Hero.tsx) */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            {/* Background Image */}
            {imageLoaded ? (
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            ) : (
              /* Fallback gradient background */
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent" />
            )}
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary-dark/95 to-black/90"></div>
            
            {/* Tech pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            {/* Particles */}
            <div
              ref={particlesRef}
              className="absolute inset-0"
            ></div>
          </div>

          {/* Content */}
          <div className="container relative z-20">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Technology That{' '}
                <span className="text-primary-light">Works for You</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                At Mindor Tech, we don't just write code. We build intelligent, scalable, and secure tech that transforms how your business operates. Explore our services across AI, automation, web development, and digital marketing.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  className="w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#services" className="btn btn-primary-large w-full sm:w-auto">
                    Explore Services
                  </a>
                </motion.div>

                <motion.div
                  className="w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="btn btn-secondary-large w-full sm:w-auto">
                    Get Free Consultation
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl z-10"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl z-10"
            animate={{
              y: [0, 30, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <style>{`
            @keyframes float {
              0%, 100% {
                transform: translateY(0px) translateX(0px);
                opacity: 0;
              }
              50% {
                transform: translateY(-20px) translateX(10px);
                opacity: 1;
              }
            }
          `}</style>
        </section>

        {/* Main Content */}
        <div className="py-12 bg-gradient-to-br from-background to-background-light">
          <div className="container">

            {/* Services Grid */}
            <motion.section
              id="services"
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-text-primary text-center mb-12">Our Services</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {services.map((service, index) => {
                  const limitedFeatures = service.features.slice(0, 3);
                  const limitedTechnologies = service.technologies.slice(0, 2);
                  const techMore = service.technologies.length - 2;
                  return (
                    <motion.div
                      key={service.id}
                      className={`relative bg-white rounded-2xl p-4 border border-border/60 shadow-xl hover:shadow-2xl hover:border-primary/60 hover:scale-[1.04] transition-all duration-300 text-sm flex flex-col items-center space-y-2 ${service.popular ? 'ring-2 ring-primary' : ''
                        }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-primary text-white px-3 py-0.5 rounded-full text-xs font-semibold shadow-md">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-4xl mb-1 drop-shadow-sm">{service.icon}</div>
                      <h3 className="text-base font-bold text-text-primary mb-0.5 text-center">{service.title}</h3>
                      <p className="text-text-secondary mb-2 leading-snug text-center line-clamp-2">{service.description}</p>
                      <div className="mb-1 w-full">
                        <h4 className="font-semibold text-text-primary mb-0.5 text-xs uppercase tracking-wide">Key Features</h4>
                        <ul className="space-y-0.5">
                          {limitedFeatures.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-1 text-xs text-text-secondary">
                              <span className="text-primary mt-0.5">✓</span>
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-xs text-text-secondary">+{service.features.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between w-full mt-auto pt-2 border-t border-border">
                        {/* <div className="flex flex-col">
                          <span className="text-primary font-bold text-xs">{service.price}</span>
                          <span className="text-xs text-text-secondary">{service.duration}</span>
                        </div> */}

                        <Link
                          href={`/service-detail?id=${service.id}`}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white rounded-full px-6 py-1 text-base font-semibold shadow-lg transition-all duration-200 hover:from-primary-light hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary ml-2 whitespace-nowrap min-w-fit hover:scale-105 hover:shadow-xl"
                        >
                          Learn
                        </Link>

                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Process Section */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-text-primary text-center mt-12 mb-8">Our Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center px-4"
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
                <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-white py-12 mt-12">
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