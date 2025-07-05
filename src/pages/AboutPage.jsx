import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Visionary leader with 10+ years in tech innovation and business strategy. Passionate about empowering startups with intelligent technology solutions."
    },
    {
      name: "Rahul Kumar",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Expert in cutting-edge AI technologies and scalable architecture solutions."
    },
    {
      name: "Anjali Patel",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Creative designer focused on user experience and modern interface design."
    },
    {
      name: "Arjun Singh",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Full-stack developer specializing in React, Node.js, and AI integration."
    }
  ];

  const techStack = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "OpenAI", icon: "🤖", color: "text-green-500" },
    { name: "Python", icon: "🐍", color: "text-yellow-500" },
    { name: "Node.js", icon: "🟢", color: "text-green-600" },
    { name: "Flutter", icon: "📱", color: "text-blue-400" },
    { name: "AWS", icon: "☁️", color: "text-orange-500" }
  ];

  const clientLogos = [
    { name: "StartupX", logo: "🚀" },
    { name: "TechCorp", logo: "💻" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "DigitalFlow", logo: "🌊" },
    { name: "SmartBiz", logo: "📈" },
    { name: "FutureTech", logo: "🔮" }
  ];

  const industryVerticals = [
    { name: "E-commerce", icon: "🛒" },
    { name: "FinTech", icon: "💰" },
    { name: "HealthTech", icon: "🏥" },
    { name: "EdTech", icon: "📚" },
    { name: "SaaS", icon: "☁️" },
    { name: "AI/ML", icon: "🧠" }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive business growth."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We build long-term relationships with our clients, treating their success as our own."
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "We maintain the highest standards of quality in every project we undertake."
    },
    {
      icon: "💡",
      title: "Creativity",
      description: "We approach challenges with creative thinking to find unique solutions."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-light">
      {/* Header */}
      <motion.header
        className="bg-white/95 backdrop-blur-md shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Back to Home */}
            <Link 
              to="/"
              className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </Link>

            {/* Brand */}
            <div className="text-2xl font-bold font-secondary text-primary">
              Mindor Tech
            </div>

            {/* Contact CTA */}
            <Link
              to="/#contact"
              className="btn btn-primary rounded-full px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="py-24">
        <div className="container">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
              We're Building the Future of Tech
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
              To empower startups and businesses with intelligent tech—fast, affordable, and scalable.
            </p>
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be India's most trusted AI + custom software partner for growth-stage companies.
              </p>
            </div>
          </motion.div>

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

          {/* Founder's Note Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Founder's Note</h3>
                  <blockquote className="text-lg leading-relaxed italic">
                    "At Mindor Tech, we believe in agile execution, deep innovation, and results that speak louder than decks. We're not just a dev shop—we're your growth tech partner."
                  </blockquote>
                  <div className="mt-6 flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                      alt="Priya Sharma - Founder"
                      className="w-16 h-16 rounded-full mr-4 border-2 border-white"
                    />
                    <div>
                      <div className="font-semibold">Priya Sharma</div>
                      <div className="text-sm opacity-90">CEO & Founder, Mindor Tech</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Our Mission
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create lasting value in an ever-evolving digital landscape.
                  </p>
                  <p>
                    We specialize in AI-powered solutions, custom software development, and digital transformation for growth-stage companies across India and beyond.
                  </p>
                  <p>
                    Based in Bangalore, the tech hub of India, we bring together cutting-edge technology, deep industry expertise, and a passion for innovation to deliver exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Story Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Founded in 2019 in Bangalore, Mindor Tech emerged from a vision to democratize access to cutting-edge technology for startups and growth-stage companies. What began as a small team of passionate technologists has evolved into a comprehensive AI and custom software development partner.
                  </p>
                  <p>
                    We recognized early on that many promising startups were struggling with technology implementation due to high costs and complex processes. Our mission became clear: to provide intelligent, scalable, and affordable tech solutions that accelerate business growth.
                  </p>
                  <p>
                    Today, we're proud to serve clients across India and beyond, helping them navigate the digital transformation landscape with confidence, innovation, and measurable results that drive real business impact.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
                  <ul className="text-lg leading-relaxed space-y-2">
                    <li>• AI-first approach to problem solving</li>
                    <li>• Agile development methodology</li>
                    <li>• Startup-friendly pricing models</li>
                    <li>• Deep expertise in growth-stage companies</li>
                    <li>• Results-driven partnership model</li>
                  </ul>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-primary">Bangalore</div>
                  <div className="text-text-secondary text-sm">Tech Hub of India</div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Our Values
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Our Tech Stack
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Cutting-edge technologies we use to build intelligent solutions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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

          {/* Industry Verticals Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Deep expertise across multiple industry verticals
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industryVerticals.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="font-semibold text-text-primary">
                    {industry.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Client Logos Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Trusted by Leading Companies
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                We've helped numerous startups and businesses achieve their digital transformation goals
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-3">{client.logo}</div>
                  <h3 className="font-semibold text-text-primary">
                    {client.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                The talented individuals behind our success
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build the Future?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Join the growing list of startups and businesses in Bangalore and across India who trust us with their digital transformation.
              </p>
              <p className="text-lg mb-8 opacity-80">
                Leading AI agency in India • Custom software development for startups • Tech company in Bangalore
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="btn btn-white rounded-full px-8 py-3 text-primary font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/faq"
                  className="btn btn-outline-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage; 