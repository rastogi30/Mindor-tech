import React from 'react';

interface ChooseUsProps {
  variant?: 'web' | 'ai';
}

interface Card {
  number: number;
  color: string;
  title: string;
  description: string;
  icon?: string;
}

const ChooseUs: React.FC<ChooseUsProps> = ({ variant = 'web' }) => {
  const content: { web: { title: string; subtitle: string; cards: Card[] }; ai: { title: string; subtitle: string; cards: Card[] } } = {
    web: {
      title: "Why Our Custom Web Development Services Stand Out",
      subtitle: "Choose Mindor for unparalleled dedication and expertise.",
      cards: [
        {
          number: 1,
          color: "bg-purple-500",
          title: "Tailored to Your Business Logic",
          description: "We don't force your business into a box. Every feature we build reflects your internal processes, user preferences, and operational needs. Whether it's a niche workflow or a unique customer flow, we custom-code it for clarity and control."
        },
        {
          number: 2,
          color: "bg-purple-500",
          title: "Seamless Ecosystem Integration",
          description: "We ensure your app communicates effortlessly with CRMs, ERPs, payment gateways, inventory systems, analytics tools, or even WhatsApp, email, SMS). This reduces manual work, minimizes errors, and creates a unified tech ecosystem."
        },
        {
          number: 3,
          color: "bg-pink-500",
          title: "Scalable, Secure & Maintainable Code",
          description: "From day one, we focus on performance and scalability. Our architecture ensures your web app can handle growing traffic and new features. We follow coding best practices and implement robust security layers – protecting your data and reputation."
        },
        {
          number: 4,
          color: "bg-teal-500",
          title: "Long-Term Partnership & Support",
          description: "We don't disappear after deployment. We monitor your app's performance, fix issues before they become problems, and plan out future rollouts – becoming your trusted tech partner for the long run."
        }
      ]
    },
    ai: {
      title: "Partner with Mindor for Reliable, Scalable AI Solutions",
      subtitle: "Choose Mindor for unparalleled dedication and expertise.",
      cards: [
        {
          number: 1,
          color: "bg-purple-500",
          title: "Proven Expertise",
          description: "Our team of seasoned AI engineers, data scientists, and ML specialists brings cross-industry experience to every project, ensuring high-impact outcomes.",
          icon: "🎯"
        },
        {
          number: 2,
          color: "bg-purple-500",
          title: "Innovation Driven",
          description: "We stay ahead of the curve by applying the latest advancements in AI research and technology to deliver future-ready, cutting-edge solutions.",
          icon: "💡"
        },
        {
          number: 3,
          color: "bg-pink-500",
          title: "Custom Built Solutions",
          description: "No generic templates. We work closely with you to design AI systems tailored to your unique goals, challenges, and workflows.",
          icon: "🔧"
        },
        {
          number: 4,
          color: "bg-teal-500",
          title: "End to End Partnership",
          description: "From strategy and development to deployment and continuous improvement, we are with you at every stage of your AI journey.",
          icon: "🤝"
        }
      ]
    }
  };

  const currentContent = content[variant];
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentContent.cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition-shadow duration-300">
              <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                {variant === 'ai' && card.icon ? card.icon : card.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;