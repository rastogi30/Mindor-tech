import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../src/components/Navbar';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../src/components/Footer'));

interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
  process: string[];
  pricing: {
    basic: { price: string; features: string[] };
    standard: { price: string; features: string[] };
    premium: { price: string; features: string[] };
  };
  duration: string;
  deliverables: string[];
}

const ServiceDetailPage: React.FC = () => {
  const router = useRouter();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
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
      fullDescription: 'We specialize in creating custom web applications that are not only visually stunning but also highly functional and scalable. Our web development services cover everything from simple landing pages to complex enterprise applications.',
      icon: '🌐',
      features: [
        'Responsive design for all devices',
        'Modern React/Next.js frontend',
        'Scalable backend architecture',
        'SEO optimization',
        'Performance optimization',
        'Security best practices',
        'Database design and optimization',
        'API development and integration'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'Git'],
      process: [
        'Requirements gathering and analysis',
        'UI/UX design and prototyping',
        'Frontend and backend development',
        'Testing and quality assurance',
        'Deployment and launch',
        'Post-launch support and maintenance'
      ],
      pricing: {
        basic: {
          price: '$5,000 - $10,000',
          features: [
            'Single-page application',
            'Basic responsive design',
            'Contact form integration',
            'SEO optimization',
            'Basic analytics',
            '1 month support'
          ]
        },
        standard: {
          price: '$10,000 - $25,000',
          features: [
            'Multi-page application',
            'Advanced responsive design',
            'User authentication',
            'Database integration',
            'API development',
            'Advanced analytics',
            '3 months support'
          ]
        },
        premium: {
          price: '$25,000+',
          features: [
            'Complex web application',
            'Custom design system',
            'Advanced user management',
            'Third-party integrations',
            'Performance optimization',
            'Security audit',
            '6 months support'
          ]
        }
      },
      duration: '4-12 weeks',
      deliverables: [
        'Fully functional web application',
        'Source code and documentation',
        'Deployment guide',
        'User manual',
        'Maintenance guide'
      ]
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Development',
      description: 'Intelligent chatbots powered by OpenAI and custom AI models.',
      fullDescription: 'Transform your customer service with intelligent AI chatbots that can handle complex queries, provide instant responses, and learn from interactions to improve over time.',
      icon: '🤖',
      features: [
        'OpenAI GPT integration',
        'Custom training data',
        'Multi-platform support',
        'Natural language processing',
        'Analytics and insights',
        '24/7 availability',
        'Multi-language support',
        'Integration with existing systems'
      ],
      technologies: ['OpenAI API', 'Python', 'LangChain', 'FastAPI', 'Redis', 'Docker', 'PostgreSQL', 'React'],
      process: [
        'Use case analysis and planning',
        'AI model selection and training',
        'Conversation flow design',
        'Integration development',
        'Testing and optimization',
        'Deployment and monitoring'
      ],
      pricing: {
        basic: {
          price: '$3,000 - $8,000',
          features: [
            'Basic chatbot with OpenAI',
            'Simple conversation flows',
            'Web integration',
            'Basic analytics',
            '1 month support'
          ]
        },
        standard: {
          price: '$8,000 - $20,000',
          features: [
            'Advanced AI capabilities',
            'Custom training data',
            'Multi-platform support',
            'Advanced analytics',
            'Integration with CRM',
            '3 months support'
          ]
        },
        premium: {
          price: '$20,000+',
          features: [
            'Custom AI model training',
            'Complex conversation flows',
            'Multi-language support',
            'Advanced integrations',
            'Custom analytics dashboard',
            '6 months support'
          ]
        }
      },
      duration: '2-8 weeks',
      deliverables: [
        'Fully functional AI chatbot',
        'Integration documentation',
        'Training data and models',
        'Analytics dashboard',
        'Maintenance guide'
      ]
    }
  ];

  useEffect(() => {
    if (router.query.id) {
      const foundService = services.find(s => s.id === router.query.id);
      setService(foundService || null);
      setLoading(false);
    }
  }, [router.query.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-text-secondary">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Service Not Found</h1>
          <Link href="/services" className="btn btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollToSection={scrollToSection} />

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
            <motion.div
              className="text-6xl mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {service.icon}
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {service.title}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {service.description}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#pricing" className="btn btn-primary-large w-full sm:w-auto">
                  View Pricing
                </a>
              </motion.div>
              
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn btn-secondary-large w-full sm:w-auto">
                  Get Started
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

      {/* About This Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About This Service</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-4xl">Our blockchain development services help businesses leverage the power of decentralized technology to create secure, transparent, and efficient systems. From smart contracts that automate business logic to tokenized asset platforms that enable new business models, we build blockchain solutions that drive innovation and create competitive advantages.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What We Offer */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <span className="text-2xl text-purple-500 mr-2">✔️</span>
                <span className="text-xl font-bold text-gray-900">What We Offer</span>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Smart contracts</li>
                <li>Tokenized asset platforms</li>
                <li>Blockchain for compliance & traceability</li>
                <li>DeFi applications</li>
              </ul>
            </div>
            {/* Key Benefits */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <span className="text-2xl text-purple-500 mr-2">⬆️</span>
                <span className="text-xl font-bold text-gray-900">Key Benefits</span>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-100 rounded-xl p-4 flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400 text-white font-bold">1</div>
                  <div>
                    <div className="font-semibold text-purple-900">Benefit 1</div>
                    <div className="text-gray-700 text-sm">Enhanced security & transparency</div>
                  </div>
                </div>
                <div className="bg-purple-100 rounded-xl p-4 flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400 text-white font-bold">2</div>
                  <div>
                    <div className="font-semibold text-purple-900">Benefit 2</div>
                    <div className="text-gray-700 text-sm">Reduced transaction costs</div>
                  </div>
                </div>
                <div className="bg-purple-100 rounded-xl p-4 flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400 text-white font-bold">3</div>
                  <div>
                    <div className="font-semibold text-purple-900">Benefit 3</div>
                    <div className="text-gray-700 text-sm">Improved traceability</div>
                  </div>
                </div>
                <div className="bg-purple-100 rounded-xl p-4 flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-400 text-white font-bold">4</div>
                  <div>
                    <div className="font-semibold text-purple-900">Benefit 4</div>
                    <div className="text-gray-700 text-sm">Faster settlements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-24 bg-gradient-to-br from-background to-background-light">
        <div className="container max-w-6xl">

          {/* Service Overview */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-6">Service Overview</h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-4xl mx-auto">
                {service.fullDescription}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Duration</h3>
                <p className="text-text-secondary">{service.duration}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Deliverables</h3>
                <ul className="space-y-2">
                  {service.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-2 text-text-secondary">
                      <span className="text-primary mt-1">✓</span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Features */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl mb-4">✨</div>
                  <p className="text-text-secondary leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technologies */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-sm font-semibold text-text-primary">{tech}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Process */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">{step}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Pricing */}
          <motion.section
            id="pricing"
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(service.pricing).map(([plan, details], index) => (
                <motion.div
                  key={plan}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    plan === 'standard' ? 'ring-2 ring-primary' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {plan === 'standard' && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-text-primary mb-2 capitalize">{plan}</h3>
                    <div className="text-3xl font-bold text-primary mb-4">{details.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/contact" 
                    className={`btn w-full ${
                      plan === 'standard' ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss your project requirements and create a custom solution that fits your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-secondary-large">
                  Schedule a Consultation
                </Link>
                <Link href="/services" className="btn btn-primary-large">
                  View All Services
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage; 