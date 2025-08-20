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

const Business: React.FC = () => {
  const services = [
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
      icon: <img src="/assets/Education.png" alt="BookOpen"  className="w-5 h-5" />,
      title: "Education & eLearning",
      description: "Learning platforms that engage learners and make teaching easier. Interactive tools and real-time progress tracking deliver better learning outcomes at scale."
    },
    {
      icon: <img src="/assets/Finance.png" alt="BarChart3" className="w-5 h-5" />,
      title: "Finance & Fintech",
      description: "Modern fintech tools that are fast, secure, and built for trust. From payments to blockchain, solutions are made for transparency, compliance, and scale."
    }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 relative" style = {{backgroundColor: '#F9FBFF'}}>
      <div className="w-full mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 space-y-6 lg:space-y-0">
          <div className="lg:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
              Built for Every Business
            </h2>
            <p className="font-medium text-base sm:text-md leading-relaxed" style={{ color: '#484848' }}>
              Mindor creates digital solutions tailored to each industry's pace, challenges, and 
              potential. Whether launching something new or scaling what works, every product is 
              built to solve real-world problems and unlock growth.
            </p>
          </div>
          <div className="flex-shrink-0 py-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200" style={{backgroundColor: "#232D62"}}>
              Get Free Consultation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-gray-200 pb-2 pt-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
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