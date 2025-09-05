import React from 'react';
import { Smartphone, Globe, Brain, Cog, Blocks, BarChart3 } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const services: Service[] = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: <Smartphone className="w-8 h-8 text-blue-700" />,
    description: 'Launch powerful, scalable mobile apps that users love and businesses rely on. We create high-performance Android, iOS, and cross-platform apps with intuitive UX, enterprise-grade security, and seamless integration. They\'re built to drive engagement, retention, and revenue.'
  },
  {
    id: 'website',
    title: 'Website Development',
    icon: <Globe className="w-8 h-8 text-blue-700" />,
    description: 'Build responsive, modern websites that convert visitors into customers. Custom responsive designs optimized for all devices with fast loading speeds and SEO optimization.'
  },
  {
    id: 'ai',
    title: 'AI-Powered Solutions',
    icon: <Brain className="w-8 h-8 text-blue-700" />,
    description: 'Harness the power of artificial intelligence to automate and optimize your business processes with machine learning models and intelligent automation.'
  },
  {
    id: 'rpa',
    title: 'Robotic Process Automation (RPA)',
    icon: <Cog className="w-8 h-8 text-blue-700" />,
    description: 'Automate repetitive tasks to increase efficiency and reduce human error through intelligent workflow automation and system integration.'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    icon: <Blocks className="w-8 h-8 text-blue-700" />,
    description: 'Secure, transparent blockchain solutions for modern business challenges including smart contracts and decentralized applications.'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: <BarChart3 className="w-8 h-8 text-blue-700" />,
    description: 'Drive growth with data-driven marketing strategies, SEO, social media management, and performance analytics.'
  }
];

export default function ServicesAccordion() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F1F0FF' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
            What We Build. How You Grow.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={service.id} className="relative group">
              <div className="bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden group-hover:shadow-xl">
                
                <div className={`bg-gradient-to-br from-blue-100 to-blue-200 p-8 flex justify-center items-center h-32 transition-all duration-500 ${index === 0 ? 'group-hover:h-0 group-hover:p-0 group-hover:opacity-0' : 'group-hover:h-0 group-hover:p-0 group-hover:opacity-0'}`}>
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: '#2A2A2A' }}>
                    {service.title}
                  </h3>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${index === 0 ? 'max-h-96 opacity-100 group-hover:max-h-96 group-hover:opacity-100' : 'max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100'}`}>
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed text-left">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}