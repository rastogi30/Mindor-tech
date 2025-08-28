import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const BlockchainProcess: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business objectives, identifying blockchain use cases, and selecting the right platform. This phase includes requirement analysis, competitor research, and technical feasibility checks to align blockchain with your business goals."
    },
    {
      number: "02", 
      title: "Design and Development",
      description: "Our team creates comprehensive technical design, UI/UX wireframes, and core development. This includes building smart contracts, decentralized apps (dApps), tokens, wallets, and APIs — all tailored to your use case."
    },
    {
      number: "03",
      title: "Testing and Audit", 
      description: "Security and performance are top priorities. We perform comprehensive testing to identify bugs, check smart contract logic, ensure platform stability, and run audits to eliminate vulnerabilities before launch."
    },
    {
      number: "04",
      title: "Deployment and Support",
      description: "After testing, we deploy your solution to the chosen network (mainnet or private). We also provide post-launch support, performance monitoring, version upgrades, and long-term maintenance to keep your blockchain system optimized."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Blockchain Development Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <div key={index} className=" rounded-lg p-6 shadow-sm " style={{backgroundColor:'#E8EAED'}}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 text-white text-sm font-semibold rounded-full" style={{ backgroundColor: '#D1D5DB' }}>
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockchainProcess;