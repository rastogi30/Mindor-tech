import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

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
              <span className="gradient-text-hero">Case Studies</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover how we've helped businesses transform their digital presence and achieve remarkable results through innovative technology solutions.
            </motion.p>
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

          {/* Case Studies Grid */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {caseStudy.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2">{caseStudy.title}</h3>
                    <p className="text-primary font-medium mb-3">{caseStudy.client}</p>
                    <p className="text-text-secondary mb-4 leading-relaxed">{caseStudy.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-background-light px-2 py-1 rounded text-xs text-text-secondary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2 text-sm text-text-secondary">
                            <span className="text-primary mt-1">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4 text-sm text-text-secondary">
                      <span>Duration: {caseStudy.duration}</span>
                      <span>Budget: {caseStudy.budget}</span>
                    </div>
                    
                    <Link 
                      href={`/case-study-detail?id=${caseStudy.id}`}
                      className="btn btn-primary w-full"
                    >
                      View Full Case Study
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-white">
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