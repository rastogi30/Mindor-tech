import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import BlogCard from '@/components/BlogCard';
import BlogGrid from '@/components/BlogGrid';

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Push content below the fixed navbar */}
      <main className="flex-1 pt-20">
        <BlogCard />
        <BlogGrid />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
