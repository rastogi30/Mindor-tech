import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface TechStack {
  name: string;
  icon: string;
  color: string;
}

interface ClientLogo {
  name: string;
  logo: string;
}

interface IndustryVertical {
  name: string;
  icon: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

const AboutPage: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers: TeamMember[] = [
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

  const techStack: TechStack[] = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "OpenAI", icon: "🤖", color: "text-green-500" },
    { name: "Python", icon: "🐍", color: "text-yellow-500" },
    { name: "Node.js", icon: "🟢", color: "text-green-600" },
    { name: "Flutter", icon: "📱", color: "text-blue-400" },
    { name: "AWS", icon: "☁️", color: "text-orange-500" }
  ];

  const clientLogos: ClientLogo[] = [
    { name: "StartupX", logo: "🚀" },
    { name: "TechCorp", logo: "💻" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "DigitalFlow", logo: "🌊" },
    { name: "SmartBiz", logo: "📈" },
    { name: "FutureTech", logo: "🔮" }
  ];

  const industryVerticals: IndustryVertical[] = [
    { name: "E-commerce", icon: "🛒" },
    { name: "FinTech", icon: "💰" },
    { name: "HealthTech", icon: "🏥" },
    { name: "EdTech", icon: "📚" },
    { name: "SaaS", icon: "☁️" },
    { name: "AI/ML", icon: "🧠" }
  ];

  const values: Value[] = [
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

  const stats: Stat[] = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
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
              <span className="text-white">We're Building the{' '}</span>
              <span className="gradient-text-hero bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">Future of Tech.</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              To empower startups and businesses with intelligent tech—fast, affordable, and scalable. We're not just a dev shop—we're your growth tech partner.
            </motion.p>
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-lg leading-relaxed text-white/90">
                To be India's most trusted AI + custom software partner for growth-stage companies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
                  <div className="mt-6">
                    <div className="font-semibold">Priya Sharma</div>
                    <div className="text-white/80">CEO & Founder, Mindor Tech</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-text-primary text-center mb-6">Our Story</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Founded in 2020, Mindor Tech emerged from a simple belief: that every business deserves access to world-class technology solutions without the enterprise price tag.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  We started as a small team of passionate developers and designers, united by the vision of democratizing technology for startups and growing businesses.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Today, we're proud to have helped over 30 companies transform their digital presence and scale their operations through intelligent technology solutions.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            className="mb-20 mt-20" // Added mt-20 for top margin
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-text-primary text-center mb-12 ">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16"> 
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-text-primary text-center mt-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mt-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center cursor-pointer hover:-translate-y-2 transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-semibold text-text-primary mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-text-secondary text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Our Tech Stack</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className={`font-semibold ${tech.color}`}>{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Industry Verticals */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industryVerticals.map((industry, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl mb-2">{industry.icon}</div>
                  <div className="font-medium text-text-primary">{industry.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss how we can help transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="btn btn-secondary-large">
                  Explore Our Services
                </Link>
                <Link href="/contact" className="btn btn-primary-large">
                  Get Started Today
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

export default AboutPage; 