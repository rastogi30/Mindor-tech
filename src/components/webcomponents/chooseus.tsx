import React from 'react';

const ChooseUs: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Our Custom Web Development
            <br />
            Services Stand Out
          </h2>
          <p className="text-gray-600 text-lg">
            Choose Mindor for unparalleled dedication and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 text-center shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Tailored to Your Business Logic
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We don't force your business into a box. Every feature we build reflects your internal processes, user preferences, and operational needs. Whether it's a niche workflow or a unique customer flow, we custom-code it for clarity and control.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Seamless Ecosystem Integration
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We ensure your app communicates effortlessly with CRMs, ERPs, payment gateways, inventory systems, analytics tools, or even WhatsApp, email, SMS). This reduces manual work, minimizes errors, and creates a unified tech ecosystem.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition-shadow duration-300">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Scalable, Secure & Maintainable Code
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From day one, we focus on performance and scalability. Our architecture ensures your web app can handle growing traffic and new features. We follow coding best practices and implement robust security layers – protecting your data and reputation.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Long-Term Partnership & Support
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We don't disappear after deployment. We monitor your app's performance, fix issues before they become problems, and plan out future rollouts – becoming your trusted tech partner for the long run.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;