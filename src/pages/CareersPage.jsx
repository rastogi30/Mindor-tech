import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const CareersPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openRoles = [
    {
      id: 1,
      title: "Frontend Developer (React/Next.js)",
      type: "Full-time",
      location: "Remote",
      experience: "2-4 years",
      description: "Build beautiful, responsive user interfaces and create seamless user experiences using React and Next.js. Work on cutting-edge projects that impact real users.",
      requirements: [
        "Strong proficiency in React, Next.js, and TypeScript",
        "Experience with modern CSS frameworks (Tailwind CSS)",
        "Understanding of responsive design principles",
        "Knowledge of state management (Redux, Zustand)",
        "Experience with testing frameworks (Jest, React Testing Library)"
      ],
      responsibilities: [
        "Develop and maintain high-quality frontend applications",
        "Collaborate with design and backend teams",
        "Optimize applications for maximum performance",
        "Write clean, maintainable, and well-documented code"
      ]
    },
    {
      id: 2,
      title: "Business & Delivery Associate",
      type: "Full-time",
      location: "Remote",
      experience: "1-3 years",
      description: "Bridge the gap between technical teams and clients. Ensure smooth project delivery and maintain strong client relationships.",
      requirements: [
        "Excellent communication and project management skills",
        "Understanding of software development lifecycle",
        "Experience with client relationship management",
        "Strong analytical and problem-solving abilities",
        "Knowledge of agile methodologies"
      ],
      responsibilities: [
        "Manage client communications and expectations",
        "Coordinate between development teams and stakeholders",
        "Track project progress and ensure timely delivery",
        "Identify and resolve project roadblocks"
      ]
    },
    {
      id: 3,
      title: "AI Prompt Engineer (Internship)",
      type: "Internship",
      location: "Remote",
      experience: "Student/Fresh Graduate",
      description: "Learn and work with cutting-edge AI technologies. Help us build intelligent solutions that solve real-world problems.",
      requirements: [
        "Strong interest in AI and machine learning",
        "Basic programming knowledge (Python preferred)",
        "Excellent analytical and creative thinking",
        "Good communication skills",
        "Willingness to learn and adapt quickly"
      ],
      responsibilities: [
        "Design and optimize AI prompts for various use cases",
        "Test and iterate on AI model outputs",
        "Document best practices and learnings",
        "Collaborate with the development team on AI integrations"
      ]
    },
    {
      id: 4,
      title: "Digital Marketing Associate",
      type: "Full-time",
      location: "Remote",
      experience: "1-2 years",
      description: "Drive our digital presence and help us reach more startups and businesses who need our technology solutions.",
      requirements: [
        "Experience with social media marketing and content creation",
        "Knowledge of SEO and digital marketing tools",
        "Strong writing and communication skills",
        "Understanding of B2B marketing principles",
        "Experience with analytics tools (Google Analytics, etc.)"
      ],
      responsibilities: [
        "Create engaging content for social media and blog",
        "Manage SEO campaigns and improve search rankings",
        "Analyze marketing performance and optimize campaigns",
        "Build relationships with potential clients and partners"
      ]
    }
  ];

  const perks = [
    {
      icon: "🏠",
      title: "100% Remote & Async-friendly",
      description: "Work from anywhere in India with flexible hours that suit your lifestyle."
    },
    {
      icon: "🚀",
      title: "Mentorship & Fast Growth",
      description: "Learn from experienced professionals and accelerate your career growth."
    },
    {
      icon: "💡",
      title: "Direct Impact on Live Projects",
      description: "Your work directly impacts real businesses and their success."
    },
    {
      icon: "👑",
      title: "Startup-level Ownership",
      description: "Take ownership of projects and make decisions that matter."
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Access to latest tools, technologies, and learning resources."
    },
    {
      icon: "🎯",
      title: "Performance-based Rewards",
      description: "Competitive compensation with performance-based bonuses."
    }
  ];

  const cultureValues = [
    {
      icon: "⚡",
      title: "Ship Fast",
      description: "We believe in rapid iteration and getting solutions to users quickly."
    },
    {
      icon: "🔧",
      title: "Builder Mindset",
      description: "We focus on creating solutions that solve real problems."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Work with talented individuals who share your passion for technology."
    },
    {
      icon: "🌱",
      title: "Continuous Learning",
      description: "Stay updated with the latest technologies and industry trends."
    }
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col">
                <span className="text-white whitespace-nowrap">Join Us. Let's Build</span>
                <span className="gradient-text-hero bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent whitespace-nowrap">What Matters.</span>
              </div>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At Mindor Tech, you won't just punch code, you'll create solutions that matter. We're a lean, remote-first team with a builder mindset. If you're hungry to learn, ship fast, and solve real problems, we'd love to work with you.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="mailto:info@mindor.tech?subject=Job Application"
                className="btn btn-primary-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.a>
              <motion.a
                href="mailto:info@mindor.tech?subject=Resume Submission"
                className="btn btn-secondary-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
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
          className="absolute bottom-20 right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl"
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

        <style jsx>{`
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
      <main className="bg-gradient-to-br from-background to-background-light">
        <div className="container py-24">

          {/* Culture Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Our Culture
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                We're building more than just software - we're building a team that thrives on innovation and impact.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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

          {/* Perks Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Why Work With Us
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                We believe in taking care of our team so they can focus on building amazing things.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{perk.icon}</div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {perk.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {perk.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Open Roles Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Open Roles
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Ready to join our mission? Check out our current openings.
              </p>
            </div>
            <div className="space-y-6">
              {openRoles.map((role, index) => (
                <motion.div
                  key={role.id}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {role.type}
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                          {role.location}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                          {role.experience}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedRole(selectedRole === role.id ? null : role.id)}
                      className="btn btn-primary rounded-full px-6 py-2 mt-4 lg:mt-0 font-semibold"
                    >
                      {selectedRole === role.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>
                  
                  <p className="text-text-secondary mb-4">
                    {role.description}
                  </p>

                  {selectedRole === role.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t pt-6"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-text-primary mb-3">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {role.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-text-secondary">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-text-primary mb-3">
                            Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {role.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-text-secondary">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t">
                        <a
                          href={`mailto:info@mindor.tech?subject=Application for ${role.title}`}
                          className="btn btn-primary rounded-full px-8 py-3 font-semibold"
                        >
                          Apply for this role
                        </a>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don't See Your Role?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                We're always looking for talented individuals who are passionate about technology and innovation.
              </p>
              <p className="text-lg mb-8 opacity-80">
                Remote tech jobs India • AI internships • Startup careers Bangalore
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@mindor.tech?subject=General Application"
                  className="btn btn-white rounded-full px-8 py-3 text-primary font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Send Your Resume
                </a>
                <Link
                  to="/about"
                  className="btn btn-outline-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CareersPage; 