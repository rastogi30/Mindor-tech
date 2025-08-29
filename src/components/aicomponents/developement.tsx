import React from 'react';

interface CardData {
  title: string;
  description: string;
}

interface DevelopmentProps {
  variant?: 'ai' | 'rpa';
}

const AIDevelopmentSuccess: React.FC<DevelopmentProps> = ({ variant = 'ai' }) => {
  const aiCards: CardData[] = [
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

  const rpaCards: CardData[] = [
    {
      title: "Automates Repetitive Tasks",
      description: "RPA bots handle routine, rule-based tasks like data entry, invoice processing, and report generation more efficiently than manual efforts. This allows teams to focus on strategic and creative work, improving overall efficiency.",
    },
    {
      title: "Reduces Operational Costs and Time",
      description: "By minimizing manual involvement, RPA lowers labor costs and virtually eliminates human error while speeding up processes from faster turnaround times and improved process accuracy.",
    },
    {
      title: "Enhances Compliance and Audit Readiness",
      description: "Every action performed by an RPA bot is recorded in detail, making it easier to demonstrate compliance with industry regulations. Automated processes ensure consistency and transparency for audit purposes.",
    },
    {
      title: "Enables 24/7 Task Execution",
      description: "Unlike human workers, RPA bots don't need breaks or sleep and can work around the clock, ensuring critical processes continue uninterrupted, even outside business hours.",
    },
    {
      title: "Improves Employee Productivity and Customer Experience",
      description: "With bots taking care of mundane tasks, employees can focus on higher-value activities. This leads to a more engaged workforce and better service for customers.",
    }
  ];

  const currentCards = variant === 'rpa' ? rpaCards : aiCards;
  const title = variant === 'rpa' ? 'Driving Growth with Robotic Process Automation' : 'How AI Development Accelerates Success';

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
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCards.map((card, index) => (
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