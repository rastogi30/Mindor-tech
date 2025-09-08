import React from 'react';
import { Smartphone, Globe, Brain, Cog, Blocks, BarChart3 } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  bgColor: string;
}

const services: Service[] = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: <img src='/assets/mob.png' className="w-6 h-6 text-white" />,
    description: 'Launch powerful, scalable mobile apps that users love and businesses rely on. We create high-performance Android, iOS, and cross-platform apps with intuitive UX, enterprise-grade security, and seamless integration.',
    bgColor: 'bg-blue-600'
  },
  {
    id: 'website',
    title: 'Website Development',
    icon: <img src='/assets/website.png' className="w-6 h-6 text-white" />,
    description: 'Build responsive, modern websites that convert visitors into customers. Custom responsive designs optimized for all devices with fast loading speeds and SEO optimization.',
    bgColor: 'bg-purple-600'
  },
  {
    id: 'ai',
    title: 'AI-Powered Solutions',
    icon: <img src='/assets/AI.png'className="w-6 h-6 text-white" />,
    description: 'Harness the power of artificial intelligence to automate and optimize your business processes with machine learning models and intelligent automation.',
    bgColor: 'bg-green-600'
  },
  {
    id: 'rpa',
    title: 'Robotic Process Automation (RPA)',
    icon: <img src='/assets/rpa.png' className="w-6 h-6 text-white" />,
    description: 'Automate repetitive tasks to increase efficiency and reduce human error through intelligent workflow automation and system integration.',
    bgColor: 'bg-orange-600'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    icon: <img src='/assets/chain.png' className="w-6 h-6 text-white" />,
    description: 'Secure, transparent blockchain solutions for modern business challenges including smart contracts and decentralized applications.',
    bgColor: 'bg-indigo-600'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: <img src='/assets/Mark.png' className="w-6 h-6 text-white" />,
    description: 'Drive growth with data-driven marketing strategies, SEO, social media management, and performance analytics.',
    bgColor: 'bg-pink-600'
  }
];

export default function ServicesAccordion() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What We Build. How You Grow.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="group cursor-pointer">

              <div className={`${index === 0 ? 'hidden' : 'block'} group-hover:hidden`}>
                <div className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 border border-gray-100 relative overflow-hidden h-64">

                  <div className="relative h-32 rounded-xl mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #E6EDF9 0%, #F0F6FF 100%)' }}>

                    
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg" style={{ background: '#DEE7F7' }}>
                      {React.cloneElement(service.icon as React.ReactElement, { 
                        className: "w-6 h-6 text-gray-700" 
                      })}
                    </div>
                    
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-8 left-8 w-8 h-0.5 bg-gray-300 rotate-45"></div>
                      <div className="absolute bottom-8 right-8 w-6 h-0.5 bg-gray-300 -rotate-45"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className={`${index === 0 ? 'block' : 'hidden'} group-hover:block`}>
                <div className="bg-white rounded-2xl shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden h-64">
                  <div className="flex h-full">
                    <div className="w-32 h-full flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #E6EDF9 0%, #F0F6FF 100%)' }}>
                      <div className="text-gray-700">
                        {React.cloneElement(service.icon as React.ReactElement, { 
                          className: "w-12 h-12 text-gray-700" 
                        })}
                      </div>
                    </div>
                    
                    <div className="flex-1 p-4 flex flex-col justify-center">
                      <h3 className="text-base font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
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