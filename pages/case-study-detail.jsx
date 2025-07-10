import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../src/components/Navbar.jsx';
import Footer from '../src/components/Footer.jsx';

const CaseStudyDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  // Case studies data
  const caseStudies = [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform Development',
      subtitle: 'Modern online marketplace with advanced features',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      category: 'E-Commerce',
      duration: '6 months',
      team: '8 developers',
      industry: 'Retail',
      challenge: 'A leading retail chain needed a modern e-commerce platform to compete with online giants. Their existing system was outdated, slow, and couldn\'t handle the growing customer demand. They required a scalable solution with advanced features like real-time inventory, personalized recommendations, and seamless payment integration.',
      solution: 'We developed a custom e-commerce platform using React.js for the frontend and Node.js with Express for the backend. The solution included a microservices architecture, real-time inventory management, AI-powered product recommendations, and integrated payment gateways. We also implemented a mobile-responsive design and comprehensive admin dashboard.',
      results: [
        'Increased online sales by 340% within 6 months',
        'Reduced page load time by 65%',
        'Improved customer satisfaction score to 4.8/5',
        'Handled 10x more concurrent users',
        'Reduced cart abandonment by 45%',
        'Achieved 99.9% uptime'
      ],
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'AWS', 'Stripe', 'Socket.io', 'Docker', 'Kubernetes'],
      testimonial: {
        text: 'Mindor Tech transformed our online presence completely. The new platform exceeded our expectations and has become a key driver of our business growth. Their team\'s expertise and dedication are unmatched.',
        author: 'Sarah Johnson',
        role: 'CTO',
        company: 'RetailCorp Inc.'
      }
    },
    {
      id: 'healthcare-app',
      title: 'Healthcare Management System',
      subtitle: 'Comprehensive patient care and hospital management solution',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      category: 'Healthcare',
      duration: '8 months',
      team: '12 developers',
      industry: 'Healthcare',
      challenge: 'A large hospital network needed a unified system to manage patient records, appointments, billing, and staff scheduling. Their existing fragmented systems were causing inefficiencies, data inconsistencies, and poor patient experience. They required a HIPAA-compliant solution that could integrate with existing medical devices.',
      solution: 'We built a comprehensive healthcare management system using Angular for the frontend and Java Spring Boot for the backend. The solution included patient portal, doctor dashboard, appointment scheduling, billing management, and analytics. We ensured HIPAA compliance and implemented robust security measures.',
      results: [
        'Reduced patient wait times by 40%',
        'Improved staff productivity by 35%',
        'Eliminated 95% of data entry errors',
        'Reduced administrative costs by 25%',
        'Enhanced patient satisfaction to 4.9/5',
        'Achieved 100% HIPAA compliance'
      ],
      technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'HL7 FHIR', 'OAuth 2.0', 'JWT', 'WebRTC'],
      testimonial: {
        text: 'The healthcare management system has revolutionized how we operate. Patient care has improved significantly, and our staff can focus on what matters most. Mindor Tech\'s understanding of healthcare requirements is exceptional.',
        author: 'Dr. Michael Chen',
        role: 'Chief Medical Officer',
        company: 'Metro Health Network'
      }
    },
    {
      id: 'fintech-platform',
      title: 'FinTech Payment Platform',
      subtitle: 'Secure and scalable digital payment solution',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      category: 'FinTech',
      duration: '10 months',
      team: '15 developers',
      industry: 'Financial Services',
      challenge: 'A startup wanted to disrupt the traditional payment industry with a modern, secure, and user-friendly platform. They needed to handle millions of transactions, ensure PCI DSS compliance, and provide real-time fraud detection. The platform had to integrate with multiple banks and payment processors.',
      solution: 'We developed a microservices-based payment platform using Python Django and React. The solution included user authentication, transaction processing, fraud detection using machine learning, real-time notifications, and comprehensive reporting. We implemented blockchain technology for enhanced security.',
      results: [
        'Processed $50M+ in transactions in first year',
        'Achieved 99.99% uptime',
        'Reduced fraud incidents by 80%',
        'Onboarded 100,000+ users',
        'Reduced transaction fees by 30%',
        'Achieved PCI DSS Level 1 compliance'
      ],
      technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow', 'Blockchain', 'WebSocket', 'OAuth 2.0'],
      testimonial: {
        text: 'Mindor Tech helped us build a world-class payment platform that\'s both secure and user-friendly. Their expertise in fintech and commitment to security made all the difference in our success.',
        author: 'Emily Rodriguez',
        role: 'CEO',
        company: 'PayFlow Technologies'
      }
    },
    {
      id: 'iot-platform',
      title: 'IoT Smart City Platform',
      subtitle: 'Connected infrastructure management system',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      category: 'IoT',
      duration: '12 months',
      team: '20 developers',
      industry: 'Smart Cities',
      challenge: 'A city government wanted to implement smart city solutions to improve urban living. They needed to connect and manage thousands of IoT devices including traffic lights, street lights, waste management systems, and environmental sensors. The platform had to handle real-time data processing and provide actionable insights.',
      solution: 'We built a comprehensive IoT platform using Node.js and React. The solution included device management, real-time data processing, predictive analytics, automated alerts, and a citizen portal. We implemented edge computing for low-latency processing and used machine learning for predictive maintenance.',
      results: [
        'Reduced energy consumption by 25%',
        'Improved traffic flow by 30%',
        'Reduced waste collection costs by 40%',
        'Enhanced public safety response times',
        'Connected 10,000+ IoT devices',
        'Achieved 99.95% system reliability'
      ],
      technologies: ['Node.js', 'React', 'MongoDB', 'Redis', 'MQTT', 'AWS IoT', 'TensorFlow', 'Docker', 'Kubernetes', 'WebSocket', 'GraphQL', 'InfluxDB'],
      testimonial: {
        text: 'The smart city platform has transformed how we manage our infrastructure. We\'ve seen significant improvements in efficiency and citizen satisfaction. Mindor Tech\'s IoT expertise is world-class.',
        author: 'David Thompson',
        role: 'City Manager',
        company: 'Smart City Initiative'
      }
    },
    {
      id: 'ai-analytics',
      title: 'AI-Powered Analytics Platform',
      subtitle: 'Intelligent business intelligence and reporting system',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      category: 'AI/ML',
      duration: '9 months',
      team: '18 developers',
      industry: 'Technology',
      challenge: 'A data analytics company needed to build an AI-powered platform that could process massive datasets and provide actionable business insights. The system had to handle real-time data streams, implement machine learning models, and provide interactive visualizations. Users needed to create custom dashboards and reports.',
      solution: 'We developed an AI-powered analytics platform using Python Flask and Vue.js. The solution included data ingestion, real-time processing, machine learning pipeline, interactive dashboards, and automated reporting. We implemented natural language processing for query understanding and predictive analytics.',
      results: [
        'Processed 1TB+ of data daily',
        'Reduced report generation time by 90%',
        'Improved prediction accuracy by 85%',
        'Onboarded 500+ enterprise clients',
        'Generated $2M+ in revenue',
        'Achieved 99.9% data accuracy'
      ],
      technologies: ['Python', 'Flask', 'Vue.js', 'PostgreSQL', 'Redis', 'Apache Kafka', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes', 'AWS', 'Tableau API'],
      testimonial: {
        text: 'The AI analytics platform has given our clients unprecedented insights into their data. Mindor Tech\'s expertise in machine learning and data engineering is exceptional. They delivered beyond our expectations.',
        author: 'Lisa Wang',
        role: 'VP of Product',
        company: 'DataInsight Corp'
      }
    },
    {
      id: 'edtech-platform',
      title: 'EdTech Learning Platform',
      subtitle: 'Interactive online education and skill development system',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      category: 'EdTech',
      duration: '7 months',
      team: '14 developers',
      industry: 'Education',
      challenge: 'An educational institution wanted to create an online learning platform that could deliver personalized education experiences. They needed features like video streaming, interactive assessments, progress tracking, and collaborative learning tools. The platform had to support multiple learning styles and provide analytics for educators.',
      solution: 'We built a comprehensive EdTech platform using React and Node.js. The solution included video streaming, interactive quizzes, progress tracking, discussion forums, and analytics dashboard. We implemented adaptive learning algorithms and real-time collaboration features.',
      results: [
        'Increased student engagement by 60%',
        'Improved learning outcomes by 45%',
        'Reduced dropout rates by 30%',
        'Onboarded 50,000+ students',
        'Supported 100+ courses',
        'Achieved 95% student satisfaction'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'WebRTC', 'AWS', 'Docker', 'Socket.io', 'JWT', 'FFmpeg', 'TensorFlow', 'Chart.js'],
      testimonial: {
        text: 'The learning platform has revolutionized how we deliver education. Students are more engaged and learning outcomes have improved significantly. Mindor Tech\'s understanding of educational technology is outstanding.',
        author: 'Prof. Robert Davis',
        role: 'Dean of Technology',
        company: 'Digital University'
      }
    }
  ];

  useEffect(() => {
    const foundCaseStudy = caseStudies.find(cs => cs.id === id);
    setCaseStudy(foundCaseStudy);
    setLoading(false);
  }, [id]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar scrollToSection={scrollToSection} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar scrollToSection={scrollToSection} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-text-primary mb-4">Case Study Not Found</h1>
            <p className="text-text-secondary mb-6">The case study you're looking for doesn't exist.</p>
            <Link href="/case-studies" className="btn btn-primary">
              Back to Case Studies
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
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
        <div className="container relative z-30 px-4">
          <div className="w-full pt-20">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span>{caseStudy.category}</span>
                <span>•</span>
                <span>{caseStudy.duration}</span>
                <span>•</span>
                <span>{caseStudy.team}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {caseStudy.subtitle}
              </p>
            </div>

            {/* Project Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="w-full">
            {/* Challenge & Solution */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">⚠️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary">The Challenge</h2>
                </div>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {caseStudy.challenge}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl">💡</span>
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary">Our Solution</h2>
                </div>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Key Results & Impact</h2>
                <p className="text-text-secondary text-lg">Transforming challenges into measurable success</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudy.results.map((result, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-bold text-lg">{idx + 1}</span>
                      </div>
                      <h3 className="font-semibold text-text-primary">Result {idx + 1}</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Technology Stack</h2>
                <p className="text-text-secondary text-lg">Cutting-edge technologies powering the solution</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex flex-wrap gap-3">
                  {caseStudy.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Client Testimonial</h2>
                <p className="text-text-secondary text-lg">What our client says about the project</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 mb-6">
                  <p className="text-text-secondary italic text-lg leading-relaxed">
                    "{caseStudy.testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-text-primary text-lg">{caseStudy.testimonial.author}</div>
                    <div className="text-text-secondary">{caseStudy.testimonial.role}</div>
                    <div className="text-primary font-medium">{caseStudy.testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Let's discuss how we can help bring your vision to life
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#contact"
                    className="btn btn-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/case-studies"
                    className="btn btn-outline-white border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors"
                  >
                    View More Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage; 