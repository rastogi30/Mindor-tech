import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Blog;