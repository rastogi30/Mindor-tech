import React from 'react';
import { FiFileText, FiXCircle, FiSettings, FiCheckCircle } from 'react-icons/fi';

const timelineData = [
  {
    id: 1,
    title: 'Requirement Gathering & Planning',
    description: 'We begin with deep-dive discussions to understand your business model, user personas, and workflow expectations. This phase includes competitor research, feature mapping, and building a strategic roadmap that aligns with your operational goals.',
    icon: <FiFileText className="w-6 h-6 text-white" />,
    iconBg: 'bg-indigo-500',
    cardBg: 'bg-indigo-900',
    textColor: 'text-gray-200',
    titleColor: 'text-white',
    stepBg: 'bg-indigo-900',
    stepText: 'text-white',
  },
  {
    id: 2,
    title: 'UI/UX Design & Wireframing',
    description: 'Our design team crafts intuitive wireframes and modern interfaces focused on clarity, usability, and responsiveness. We ensure the experience is accessible, conversion-friendly, and seamless across devices and platforms.',
    icon: <FiXCircle className="w-6 h-6 text-pink-500" />,
    iconBg: 'bg-pink-100',
    cardBg: 'bg-white',
    textColor: 'text-gray-600',
    titleColor: 'text-gray-900',
    stepBg: 'bg-gray-200',
    stepText: 'text-gray-500',
  },
  {
    id: 3,
    title: 'Application Development & Integration',
    description: 'Using modern front-end and back-end frameworks, we develop scalable, secure, and modular applications. This includes API integrations, automation workflows, and custom features like CRM, ERP, payment gateways, and messaging tools such as WhatsApp and email.',
    icon: <FiSettings className="w-6 h-6 text-red-500" />,
    iconBg: 'bg-red-100',
    cardBg: 'bg-white',
    textColor: 'text-gray-600',
    titleColor: 'text-gray-900',
    stepBg: 'bg-gray-200',
    stepText: 'text-gray-500',
  },
  {
    id: 4,
    title: 'Testing, Deployment & Ongoing Support',
    description: 'Every component undergoes end-to-end testing—performance, functionality, and security. Post-deployment, we handle server setup, monitoring, and ongoing optimization to keep your app reliable and aligned with your evolving business needs.',
    icon: <FiCheckCircle className="w-6 h-6 text-green-500" />,
    iconBg: 'bg-green-100',
    cardBg: 'bg-white',
    textColor: 'text-gray-600',
    titleColor: 'text-gray-900',
    stepBg: 'bg-gray-200',
    stepText: 'text-gray-500',
  },
];

const Timeline = () => {
  return (
    <div style={{ background: 'linear-gradient(107.02deg, #EAEDFB 7.12%, #FFFFFF 59.63%, #CDD4F6 99.34%)' }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Web Development Process
          </h2>
          <p className="mt-3 text-xl md:text-2xl text-gray-600">
            From Concept to Launch
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300" />
          <div className="relative flex justify-between items-center">
            {timelineData.map((item) => (
              <div key={item.id} className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-lg z-10 ${item.stepBg} ${item.stepText}`}>
                {item.id}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {timelineData.map((item) => (
            <div key={item.id} className={`${item.cardBg} p-6 rounded-lg shadow-lg`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg} mb-5`}>
                {item.icon}
              </div>
              <h3 className={`text-lg font-bold mb-2 ${item.titleColor}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${item.textColor}`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;