import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../src/components/Navbar';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../src/components/Footer'));

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  image: string;
  technologies: string[];
  results: string[];
  duration: string;
  budget: string;
}

const CaseStudiesPage: React.FC = () => {
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

  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-chatbot-ecommerce',
      title: 'AI-Powered Customer Support Chatbot',
      client: 'TechRetail Pro',
      industry: 'E-commerce',
      description: 'Developed an intelligent chatbot that handles customer inquiries, order tracking, and product recommendations, reducing support tickets by 70%.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      technologies: ['OpenAI GPT-4', 'Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis'],
      results: [
        '70% reduction in support tickets',
        '24/7 customer support availability',
        '95% customer satisfaction rate',
        '50% faster response times'
      ],
      duration: '6 weeks',
      budget: '$15,000'
    },
    {
      id: 'mobile-app-startup',
      title: 'Cross-Platform Mobile App',
      client: 'HealthTrack',
      industry: 'HealthTech',
      description: 'Built a comprehensive health tracking mobile application with real-time data synchronization and AI-powered insights.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'TensorFlow', 'Google Cloud', 'Dart'],
      results: [
        '50,000+ downloads in first month',
        '4.8/5 app store rating',
        '90% user retention rate',
        'Real-time health insights'
      ],
      duration: '12 weeks',
      budget: '$25,000'
    },
    {
      id: 'web-platform-saas',
      title: 'SaaS Management Platform',
      client: 'CloudFlow Solutions',
      industry: 'SaaS',
      description: 'Created a comprehensive SaaS management platform with subscription billing, analytics, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL', 'AWS', 'TypeScript'],
      results: [
        '200+ active users in first quarter',
        '99.9% uptime achieved',
        'Automated billing system',
        'Advanced analytics dashboard'
      ],
      duration: '10 weeks',
      budget: '$30,000'
    },
    {
      id: 'ecommerce-platform',
      title: 'Multi-Vendor E-commerce Platform',
      client: 'MarketPlace Hub',
      industry: 'E-commerce',
      description: 'Developed a full-featured e-commerce platform supporting multiple vendors, advanced search, and AI-powered recommendations.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Elasticsearch', 'AWS'],
      results: [
        '500+ vendors onboarded',
        '$2M+ in transactions processed',
        'Advanced search functionality',
        'AI-powered recommendations'
      ],
      duration: '16 weeks',
      budget: '$45,000'
    },
    {
      id: 'fintech-dashboard',
      title: 'Financial Analytics Dashboard',
      client: 'WealthTech Inc',
      industry: 'FinTech',
      description: 'Built a real-time financial analytics dashboard with data visualization, reporting, and automated insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      results: [
        'Real-time data processing',
        'Interactive visualizations',
        'Automated reporting system',
        'Enhanced decision making'
      ],
      duration: '8 weeks',
      budget: '$20,000'
    },
    {
      id: 'ai-automation-platform',
      title: 'AI Workflow Automation',
      client: 'AutoFlow Systems',
      industry: 'Enterprise',
      description: 'Developed an AI-powered workflow automation platform that streamlines business processes and reduces manual work.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'React', 'PostgreSQL', 'Celery'],
      results: [
        '80% reduction in manual tasks',
        'Automated 50+ workflows',
        'Improved efficiency by 60%',
        'Cost savings of $100K annually'
      ],
      duration: '14 weeks',
      budget: '$35,000'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section - New Design (Similar to Hero.tsx) */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              Real <span className="text-primary-light">Results</span>, Real <span className="text-primary-light">Impact</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore how Mindor Tech has delivered rapid, scalable, and AI-first solutions across industries.
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
                <Link href="/services" className="btn btn-primary-large w-full sm:w-auto">
                  View Our Services
                </Link>
              </motion.div>

              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/careers" className="btn btn-secondary-large w-full sm:w-auto">
                  Explore Careers
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

      {/* Original Hero Section - Commented Out */}
      {/* 
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
              Real <span className="gradient-text-hero">Results</span>, Real <span className="gradient-text-hero">Impact</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore how Mindor Tech has delivered rapid, scalable, and AI-first solutions across industries.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/services" className="btn btn-primary-large">
                View Our Services
              </Link>
              <Link href="/careers" className="btn btn-secondary-large">
                Explore Careers
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      */}

      {/* Main Content */}
      <main className="py-24 bg-gradient-to-br from-background to-background-light">
        <div className="container">

          {/* Stats Section */}
          <motion.div
            className="flex flex-wrap justify-between items-center w-full gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center flex-1 min-w-[140px] max-w-xs px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-text-primary text-center mt-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {caseStudies.map((caseStudy, index) => {
                const limitedTechnologies = caseStudy.technologies.slice(0, 2);
                const techMore = caseStudy.technologies.length - 2;
                const limitedResults = caseStudy.results.slice(0, 2);
                const resultsMore = caseStudy.results.length - 2;
                return (
                  <motion.div
                    key={caseStudy.id}
                    className="relative bg-white rounded-2xl p-4 border border-border/60 shadow-xl hover:shadow-2xl hover:border-primary/60 hover:scale-[1.04] transition-all duration-300 text-sm flex flex-col h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >

                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-white px-3 py-0.5 rounded-full text-xs font-semibold shadow-md">
                        {caseStudy.industry}
                      </span>
                    </div>

                    <div className="relative w-full h-32 rounded-xl overflow-hidden mb-2">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    <h3 className="text-base font-bold text-text-primary mb-0.5">{caseStudy.title}</h3>
                    <p className="text-primary font-bold mb-1">{caseStudy.client}</p>
                    <p className="text-text-secondary mb-2 leading-snug line-clamp-2">{caseStudy.description}</p>

                    <div className="flex items-center justify-between w-full pt-2 border-t border-border mt-auto mb-0 pb-0">
                      <div className="flex flex-col">
                        <span className="text-primary font-bold text-xs">{caseStudy.budget}</span>
                        <span className="text-xs text-text-secondary">{caseStudy.duration}</span>
                      </div>
                      <Link
                        href={`/case-study-detail?id=${caseStudy.id}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white rounded-full px-6 py-1 text-base font-semibold shadow-lg transition-all duration-200 hover:from-primary-light hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary ml-2 whitespace-nowrap min-w-fit hover:scale-105 hover:shadow-xl"
                      >
                        View
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
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
                  <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                  <p className="text-xl mb-8 text-white/90">
                    Let's discuss how we can help you achieve similar results for your business.
                  </p>
                  <Link href="/contact" className="btn btn-secondary-large">
                  Get Started Today
                  </Link>
                </div>
              </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage; 