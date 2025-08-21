import React, { useState } from 'react';
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
  const [activeService, setActiveService] = useState<string>('mobile');

  const handleServiceClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? '' : serviceId);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F1F0FF' }}>
      <div className="w-full mx-auto px-6 py-16">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
            What We Build. How You Grow.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="relative">
              <div
                className={`
                  bg-white rounded-2xl shadow-md cursor-pointer transition-all duration-300 overflow-hidden
                  ${activeService === service.id 
                    ? 'shadow-xl md:col-span-2 lg:col-span-3' 
                    : 'hover:shadow-lg'
                  }
                `}
                onClick={() => handleServiceClick(service.id)}
              >
                <div className={`
                  ${activeService === service.id 
                    ? 'flex flex-col md:flex-row' 
                    : 'flex flex-col'
                  }
                `}>

                  <div className={`
                    bg-gradient-to-br from-blue-100 to-blue-200 p-8 flex justify-center items-center
                    ${activeService === service.id 
                      ? 'md:w-1/3 h-32 md:h-auto' 
                      : 'h-32'
                    }
                  `}>
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className={`
                    p-6
                    ${activeService === service.id 
                      ? 'md:w-2/3 md:flex md:flex-col md:justify-center' 
                      : ''
                    }
                  `}>
                    <h3 className={`
                      text-lg font-semibold mb-3
                      ${activeService === service.id 
                        ? 'md:text-left md:text-xl' 
                        : 'text-center'
                      }
                    `} style={{ color: '#2A2A2A' }}>
                      {service.title}
                    </h3>
                    
                    <div className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${activeService === service.id 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                      }
                    `}>
                      <div className={`
                        ${activeService === service.id 
                          ? 'md:pt-0 md:border-t-0' 
                          : 'pt-3 border-t border-gray-100'
                        }
                      `}>
                        <p className="text-gray-600 text-sm leading-relaxed text-left">
                          {service.description}
                        </p>
                      </div>
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