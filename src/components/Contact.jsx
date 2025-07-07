import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ setShowSuccessModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    bestTimeToCall: '',
    message: '',
    contactPreference: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setError('');

    // Always use standard form submission
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/official.agarwal.1008@gmail.com';
    form.style.display = 'none';

    const fields = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      serviceInterest: formData.serviceInterest || 'Not specified',
      bestTimeToCall: formData.bestTimeToCall || 'Not specified',
      message: formData.message,
      contactPreference: formData.contactPreference,
      _subject: `New Strategy Call Request from ${formData.name}`,
      _captcha: 'false',
      _next: window.location.href + '#success',
      _template: 'table'
    };

    Object.keys(fields).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-background-light">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6 gradient-text">
              Schedule Your Strategy Call
            </h2>
            <p className="text-lg text-text-secondary mb-12 leading-relaxed">
              Ready to transform your business with cutting-edge technology solutions? Schedule a strategy call with our experts and let's discuss how we can help you achieve your goals.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Phone</h3>
                  <p className="text-text-secondary">+91 8928210967</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Email</h3>
                  <p className="text-text-secondary">info@mindor.tech</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Location</h3>
                  <p className="text-text-secondary">Bangalore, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    placeholder="Service You're Interested In"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="bestTimeToCall"
                    value={formData.bestTimeToCall}
                    onChange={handleInputChange}
                    placeholder="Best Time to Call"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Preferred Contact Method:
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="email"
                      checked={formData.contactPreference === 'email'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary focus:ring-primary/20"
                    />
                    <span className="text-text-secondary">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="whatsapp"
                      checked={formData.contactPreference === 'whatsapp'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary focus:ring-primary/20"
                    />
                    <span className="text-text-secondary">WhatsApp</span>
                  </label>
                </div>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Schedule Your Call'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 