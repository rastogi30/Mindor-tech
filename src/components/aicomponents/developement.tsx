import React from 'react';

interface CardData {
  title: string;
  description: string;
}

const AIDevelopmentSuccess: React.FC = () => {
  const cards: CardData[] = [
    {
      title: "Automate Repetitive Task",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiries, and report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    },
    {
      title: "Enhance Decision-Making",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiries, and report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    },
    {
      title: "Improve Efficiency & Productivity",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiries, and report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    },
    {
      title: "Personalize Customer Experiences",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiries, and report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    },
    {
      title: "Unlock New Revenue Streams",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiries, and report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    },
    {
      title: "Mitigate Risks",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiries, and report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    }   
  ];

  return (
    <div 
      className="min-h-screen py-16 px-4"
      style={{
        background: 'linear-gradient(108.05deg, #FBFCFF 7.09%, #FFFFFF 68.38%, #C6CDF4 114.73%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            How AI Development Accelerates
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIDevelopmentSuccess;