import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

interface JobPosition {
  title: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const CareersPage: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const jobPositions: JobPosition[] = [
    {
      title: "Senior Full-Stack Developer",
      type: "Full-time",
      location: "Bangalore, India (Hybrid)",
      experience: "3-5 years",
      description: "We're looking for a passionate Full-Stack Developer to join our team and help build cutting-edge web applications using React, Node.js, and modern cloud technologies.",
      requirements: [
        "Strong experience with React.js, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Knowledge of database design and optimization",
        "Experience with CI/CD pipelines and DevOps practices",
        "Strong problem-solving skills and attention to detail"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Flexible work hours and remote work options",
        "Health insurance and wellness programs",
        "Professional development and learning budget",
        "Modern tech stack and latest tools"
      ]
    },
    {
      title: "AI/ML Engineer",
      type: "Full-time",
      location: "Bangalore, India (Hybrid)",
      experience: "2-4 years",
      description: "Join our AI team to develop innovative machine learning solutions and integrate cutting-edge AI technologies into our products.",
      requirements: [
        "Strong background in Python and machine learning frameworks",
        "Experience with OpenAI APIs, LangChain, or similar tools",
        "Knowledge of NLP, computer vision, or recommendation systems",
        "Experience with MLOps and model deployment",
        "Strong mathematical and statistical skills"
      ],
      benefits: [
        "Work on cutting-edge AI projects",
        "Access to latest AI tools and platforms",
        "Conference and training opportunities",
        "Collaborative and innovative work environment",
        "Competitive compensation package"
      ]
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Bangalore, India (Hybrid)",
      experience: "2-4 years",
      description: "Create beautiful and intuitive user experiences for web and mobile applications that delight our clients and their users.",
      requirements: [
        "Strong portfolio showcasing web and mobile design work",
        "Proficiency in Figma, Sketch, or similar design tools",
        "Understanding of user-centered design principles",
        "Experience with design systems and component libraries",
        "Knowledge of accessibility standards and best practices"
      ],
      benefits: [
        "Creative freedom and ownership of design decisions",
        "Work with diverse clients and industries",
        "Latest design tools and resources",
        "Design community and networking opportunities",
        "Competitive salary and benefits"
      ]
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Bangalore, India (Hybrid)",
      experience: "2-4 years",
      description: "Help us build and maintain robust, scalable infrastructure and deployment pipelines for our applications.",
      requirements: [
        "Experience with AWS, Docker, and Kubernetes",
        "Knowledge of CI/CD tools (Jenkins, GitHub Actions, etc.)",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Understanding of monitoring and logging tools",
        "Strong scripting skills (Python, Bash, etc.)"
      ],
      benefits: [
        "Work with modern cloud infrastructure",
        "Opportunity to shape DevOps practices",
        "Continuous learning and skill development",
        "Competitive salary and benefits",
        "Collaborative team environment"
      ]
    }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We encourage creative thinking and experimentation with new technologies."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Work with talented individuals in a supportive and inclusive environment."
    },
    {
      icon: "📈",
      title: "Growth",
      description: "Continuous learning opportunities and career development support."
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description: "Flexible hours and policies that respect your personal time."
    }
  ];

  const perks = [
    "Competitive salary with equity options",
    "Health insurance and wellness programs",
    "Flexible work hours and remote options",
    "Professional development budget",
    "Modern office with latest equipment",
    "Team events and social activities",
    "Unlimited coffee and snacks",
    "Annual company retreats"
  ];

  return (
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection} forceVisible={true} />

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
              Join Our{' '}
              <span className="gradient-text-hero">Innovation Team</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Build the future of technology with us. We're looking for passionate individuals who want to make a real impact in the world of AI and software development.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#openings" className="btn btn-primary-large">
                View Open Positions
              </a>
              <Link href="/contact" className="btn btn-secondary-large">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-24 bg-gradient-to-br from-background to-background-light">
        <div className="container">

          {/* Values Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
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
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold text-center mb-12">Perks & Benefits</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {perks.map((perk, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">{perk}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Job Openings Section */}
          <motion.section
            id="openings"
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Open Positions</h2>
            <div className="space-y-8">
              {jobPositions.map((job, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      className="btn btn-primary mt-4 lg:mt-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-text-secondary">
                            <span className="text-primary mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-text-secondary">
                            <span className="text-primary mt-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
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
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Don't See the Right Fit?</h2>
              <p className="text-xl mb-8 text-white/90">
                We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our team.
              </p>
              <Link href="/contact" className="btn btn-secondary-large">
                Send Your Resume
              </Link>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage; 