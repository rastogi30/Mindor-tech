import React from 'react';

interface PromiseItem {
  id: number;
  title: string;
  description: string;
  bgColor: string;
}

const PromiseProgress: React.FC = () => {
  const promiseItems: PromiseItem[] = [
    {
      id: 1,
      title: "Full-Spectrum Digital Expertise",
      description: "We cover the entire digital ecosystem, from mobile app development and responsive web design to advanced AI, RPA, blockchain, and digital marketing. With one team managing everything, your digital journey stays seamless and efficient.",
      bgColor: "bg-purple-200"
    },
    {
      id: 2,
      title: "Scalable, Future-Ready Tech",
      description: "Our solutions are designed not just for today but for tomorrow. Whether you're a startup or scaling enterprise, we build digital products that grow with your business using modern, secure, and cloud-compatible technologies.",
      bgColor: "bg-red-200"
    },
    {
      id: 3,
      title: "Speed Without Compromise",
      description: "As a lean, agile team, we deliver high-quality products with shorter turnaround times. By streamlining development processes and using automation where it counts, we help you launch faster without sacrificing quality or stability.",
      bgColor: "bg-green-200"
    },
    {
      id: 4,
      title: "Tailored Solutions, Not Templates",
      description: "Every business is different, so are our solutions. We dive deep into your specific needs, challenges, and goals to build digital products that align with your long-term vision. Nothing cookie-cutter, everything custom.",
      bgColor: "bg-yellow-200"
    },
    {
      id: 5,
      title: "Radical Transparency & Communication",
      description: "We believe trust is built on clarity. From day one, you'll have full visibility into timelines, scope, progress, and performance. No hidden costs, no jargon, just clear and honest communication.",
      bgColor: "bg-blue-200"
    },
    {
      id: 6,
      title: "Purpose-Driven Innovation",
      description: "We combine the latest technologies with strategic thinking to solve real-world business problems. Whether it's reducing manual effort through automation or enhancing customer experience with AI, innovation at Mindor always serves a purpose.",
      bgColor: "bg-purple-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          <div className="lg:sticky lg:top-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our Promise. Your Progress.
            </h1>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              We cover the entire digital ecosystem, from mobile app development 
              and responsive web design to advanced AI, RPA, blockchain, and 
              digital marketing solutions.
            </p>
          </div>

          <div className="relative">
            {promiseItems.map((item, index) => (
              <div
                key={item.id}
                className={`sticky rounded-2xl p-8 mb-8 shadow-lg transition-all duration-300 hover:shadow-xl ${item.bgColor}`}
                style={{ 
                  top: `${4}rem`,
                  zIndex: index + 1
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full text-gray-900 font-bold text-lg shadow-sm">
                      {item.id}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromiseProgress;