import React from 'react';
import { Briefcase, Zap, Heart, BookOpen, BarChart3 } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col space-y-2 p-6 rounded-lg">
      <div className="">
        <div className="w-10 h-10 rounded ">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold" style={{ color: '#232D62' }}>{title}</h3>
      <p className="text-sm leading-relaxed font-medium" style={{ color: '#484848' }}>{description}</p>
    </div>
  );
};

interface BusinessProps {
  variant?: 'business' | 'services';
}

const Business: React.FC<BusinessProps> = ({ variant = 'business' }) => {
  const businessData = [
    {
      icon: <img src="/assets/Brief.png" alt="Briefcase" className="w-5 h-5" />,
      title: "Startups & Scaleups",
      description: "Bold ideas turn into powerful digital products built fast, lean, and ready to scale. From concept to launch, every phase is guided with clarity, speed, and precision."
    },
    {
      icon: <img src="/assets/Shopping.png" alt="Zap" className="w-5 h-5" />,
      title: "E-Commerce & Retail",
      description: "Mobile-first shopping experiences designed to convert, retain, and impress customers. Smart UX, AI-powered recommendations, and smooth checkouts help drive real revenue."
    },
    {
      icon: <img src="/assets/Health.png" alt="Heart" className="w-5 h-5" />,
      title: "Healthcare & Wellness",
      description: "Platforms that simplify care, automate operations, and protect patient data. From telehealth to wellness apps, everything is built with empathy, security, and impact in mind."
    },
    {
      icon: <img src="/assets/Education.png" alt="BookOpen" className="w-5 h-5" />,
      title: "Education & eLearning",
      description: "Learning platforms that engage learners and make teaching easier. Interactive tools and real-time progress tracking deliver better learning outcomes at scale."
    },
    {
      icon: <img src="/assets/Finance.png" alt="BarChart3" className="w-5 h-5" />,
      title: "Finance & Fintech",
      description: "Modern fintech tools that are fast, secure, and built for trust. From payments to blockchain, solutions are made for transparency, compliance, and scale."
    }
  ];

  const servicesData = [
    {
      icon: <img src="/assets/Brief.png" alt="Web Development" className="w-5 h-5" />,
      title: "Small & Medium Businesses (SMBs)",
      description: "We help SMBs establish a professional online presence and streamline operations. Our custom websites and web apps improve customer engagement, simplify sales or booking processes, and support digital marketing efforts — all with scalability and cost-efficiency in mind."
    },
    {
      icon: <img src="/assets/fare.png" alt="Mobile Development" className="w-5 h-5" />,
      title: "Enterprises & Corporates",
      description: "For larger organizations, we develop secure, scalable web solutions tailored to complex workflows. This includes enterprise-level portals, internal tools, ERP/CRM integrations, automation systems, and custom dashboards that improve operational control and data-driven decision-making."
    },
    {
      icon: <img src="/assets/Education.png" alt="UI/UX Design" className="w-5 h-5" />,
      title: "Educational Institutions",
      description: "We build digital solutions for schools, colleges, and training centers – such as student portals, LMS platforms, online admission systems, and content delivery modules. These solutions help institutions enhance learning, enable remote education, and manage administrative tasks efficiently."
    },
    {
      icon: <img src="/assets/Event.png" alt="Cloud Services" className="w-5 h-5" />,
      title: "Event, Sports & Service Providers",
      description: "We create mobile-optimized, user-friendly websites and booking systems for gyms, turfs, studios, beauty salons, and event organizers. Our solutions help manage appointments, handle payments, promote services, and provide real-time customer updates or notifications."
    },
    {
      icon: <img src="/assets/Professional.png" alt="Data Analytics" className="w-5 h-5" />,
      title: "Creatives & Independent Professionals",
      description: "We design powerful digital portfolios and personal branding websites for photographers, designers, writers, coaches, and consultants. These platforms highlight their expertise, enable content monetization (blogs, courses, e-books), and offer lead capture or inquiry forms to grow their clientele."
    }
  ];

  const currentData = variant === 'services' ? servicesData : businessData;
  
  const headingData = {
    business: {
      title: "Built for Every Business",
      description: "Mindor creates digital solutions tailored to each industry's pace, challenges, and potential. Whether launching something new or scaling what works, every product is built to solve real-world problems and unlock growth."
    },
    services: {
      title: "Custom Web Solutions for Every Industry",
      description: "We at Mindor tailor digital solutions to meet the unique demands of various sectors."
    }
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: '#F9FBFF' }}>
      <div className="w-full mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 space-y-6 lg:space-y-0">
          <div className="lg:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
              {headingData[variant].title}
            </h2>
            <p className="font-medium text-base sm:text-md leading-relaxed" style={{ color: '#484848' }}>
              {headingData[variant].description}
            </p>
          </div>
          <div className="flex-shrink-0 py-10">
            <a href="https://calendar.app.google/c94YxYt7MYuphBsw6" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200" style={{ backgroundColor: "#232D62" }}>
                Get Free Consultation
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-gray-200 pb-2 pt-4">
          {currentData.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none">
        <img
          src="/assets/Ellipse.png"
          alt="Ellipse decoration"
          className="w-80 h-80"
        />
      </div>
    </section>
  );
};

export default Business;