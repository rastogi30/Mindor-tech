import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const CaseStudiesPage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const caseStudies = [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform Development',
      subtitle: 'Modern online marketplace with advanced features',
      category: 'E-Commerce',
      duration: '6 months',
      team: '8 developers',
      client: 'RetailCorp Inc.',
      industry: 'Retail',
      challenge: 'A leading retail chain needed a modern e-commerce platform to compete with online giants. Their existing system was outdated, slow, and couldn\'t handle the growing customer demand.',
      solution: 'We developed a custom e-commerce platform using React.js for the frontend and Node.js with Express for the backend. The solution included a microservices architecture, real-time inventory management, AI-powered product recommendations, and integrated payment gateways.',
      results: [
        'Increased online sales by 340% within 6 months',
        'Reduced page load time by 65%',
        'Improved customer satisfaction score to 4.8/5',
        'Handled 10x more concurrent users'
      ],
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'AWS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      testimonial: {
        text: 'Mindor Tech transformed our online presence completely. The new platform exceeded our expectations and has become a key driver of our business growth.',
        author: 'Sarah Johnson',
        role: 'CTO',
        company: 'RetailCorp Inc.'
      }
    },
    {
      id: 'healthcare-app',
      title: 'Healthcare Management System',
      subtitle: 'Comprehensive patient care and hospital management solution',
      category: 'Healthcare',
      duration: '8 months',
      team: '12 developers',
      client: 'Metro Health Network',
      industry: 'Healthcare',
      challenge: 'A large hospital network needed a unified system to manage patient records, appointments, billing, and staff scheduling. Their existing fragmented systems were causing inefficiencies and poor patient experience.',
      solution: 'We built a comprehensive healthcare management system using Angular for the frontend and Java Spring Boot for the backend. The solution included patient portal, doctor dashboard, appointment scheduling, and billing management.',
      results: [
        'Reduced patient wait times by 40%',
        'Improved staff productivity by 35%',
        'Eliminated 95% of data entry errors',
        'Enhanced patient satisfaction to 4.9/5'
      ],
      technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL', 'Redis', 'AWS'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      testimonial: {
        text: 'The healthcare management system has revolutionized how we operate. Patient care has improved significantly, and our staff can focus on what matters most.',
        author: 'Dr. Michael Chen',
        role: 'Chief Medical Officer',
        company: 'Metro Health Network'
      }
    },
    {
      id: 'fintech-platform',
      title: 'FinTech Payment Platform',
      subtitle: 'Secure and scalable digital payment solution',
      category: 'FinTech',
      duration: '10 months',
      team: '15 developers',
      client: 'PayFlow Technologies',
      industry: 'Financial Services',
      challenge: 'A startup wanted to disrupt the traditional payment industry with a modern, secure, and user-friendly platform. They needed to handle millions of transactions and ensure PCI DSS compliance.',
      solution: 'We developed a microservices-based payment platform using Python Django and React. The solution included user authentication, transaction processing, fraud detection using machine learning, and real-time notifications.',
      results: [
        'Processed $50M+ in transactions in first year',
        'Achieved 99.99% uptime',
        'Reduced fraud incidents by 80%',
        'Achieved PCI DSS Level 1 compliance'
      ],
      technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Redis', 'AWS'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      testimonial: {
        text: 'Mindor Tech helped us build a world-class payment platform that\'s both secure and user-friendly. Their expertise in fintech and commitment to security made all the difference.',
        author: 'Emily Rodriguez',
        role: 'CEO',
        company: 'PayFlow Technologies'
      }
    },
    {
      id: 'iot-platform',
      title: 'IoT Smart City Platform',
      subtitle: 'Connected infrastructure management system',
      category: 'IoT',
      duration: '12 months',
      team: '20 developers',
      client: 'Smart City Initiative',
      industry: 'Smart Cities',
      challenge: 'A city government wanted to implement smart city solutions to improve urban living. They needed to connect and manage thousands of IoT devices including traffic lights, street lights, and environmental sensors.',
      solution: 'We built a comprehensive IoT platform using Node.js and React. The solution included device management, real-time data processing, predictive analytics, automated alerts, and a citizen portal.',
      results: [
        'Reduced energy consumption by 25%',
        'Improved traffic flow by 30%',
        'Reduced waste collection costs by 40%',
        'Connected 10,000+ IoT devices'
      ],
      technologies: ['Node.js', 'React', 'MongoDB', 'Redis', 'AWS IoT', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      testimonial: {
        text: 'The smart city platform has transformed how we manage our infrastructure. We\'ve seen significant improvements in efficiency and citizen satisfaction.',
        author: 'David Thompson',
        role: 'City Manager',
        company: 'Smart City Initiative'
      }
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "40%", label: "Average ROI" },
    { number: "3x", label: "Faster Delivery" }
  ];

  const technologies = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "Node.js", icon: "🟢", color: "text-green-600" },
    { name: "Python", icon: "🐍", color: "text-yellow-500" },
    { name: "OpenAI", icon: "🤖", color: "text-green-500" },
    { name: "AWS", icon: "☁️", color: "text-orange-500" },
    { name: "PostgreSQL", icon: "🐘", color: "text-blue-600" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection} />

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
              <span className="text-white">Case Studies &{' '}</span>
              <span className="gradient-text-hero bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">Portfolio</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
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
                Get a Custom Solution
              </Link>
              <a
                href="mailto:info@mindor.tech?subject=Portfolio Inquiry"
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                View Full Portfolio
              </a>
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

          {/* Case Studies Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Real projects, real results, real impact
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Image Header */}
                  <div className="relative h-48">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.duration}
                    </div>
                  </div>

                  {/* Content - Minimal View */}
                  <div className="p-6">
                    {/* Title & Meta */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-3">
                        {caseStudy.subtitle}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-text-secondary">
                        <span>👥 {caseStudy.team}</span>
                        <span>🏢 {caseStudy.industry}</span>
                      </div>
                    </div>

                    {/* Brief Description */}
                    <div className="mb-4">
                      <p className="text-sm text-text-secondary line-clamp-3">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Top 2 Results */}
                    <div className="mb-4">
                      <div className="flex gap-2">
                        {caseStudy.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Preview */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="bg-background-light text-text-secondary px-2 py-1 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                        {caseStudy.technologies.length > 3 && (
                          <span className="bg-background-light text-text-secondary px-2 py-1 rounded-full text-xs">
                            +{caseStudy.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <Link
                        to={`/case-studies/${caseStudy.id}`}
                        className="flex-1 btn btn-primary rounded-lg px-4 py-2 text-sm font-semibold"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/#contact"
                        className="flex-1 btn btn-outline-primary rounded-lg px-4 py-2 text-sm font-semibold"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technologies Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Technologies We Master
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Cutting-edge tech stack for modern solutions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className={`font-semibold ${tech.color}`}>
                    {tech.name}
                  </h3>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <p className="text-lg mb-8 opacity-80">
                SaaS case studies • AI hiring tools • E-commerce CRM dashboards • Tech portfolio India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="btn btn-white rounded-full px-8 py-3 text-primary font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <a
                  href="mailto:info@mindor.tech?subject=Case Study Discussion"
                  className="btn btn-outline-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Discuss Your Needs
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudiesPage; 