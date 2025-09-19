import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

// Dummy blog data for demonstration
const blogPosts = [
  {
    id: 1,
    title: "5 Different Ways To Do Bulk Updates On WordPress",
    date: "16 November 2023",
    image: "/assets/Blog.png",
    content:
      "WordPress is one of the most popular content management systems (CMS) in the world, powering over 40% of all websites. With its flexibility and ease of use, WordPress has become the go-to choice for businesses, bloggers, and developers alike. However, managing a WordPress site with hundreds or thousands of posts, pages, and media files can become overwhelming without the right tools and techniques.",
  },
  {
    id: 2,
    title: "How to Make Marketing Decisions in the AI Era",
    date: "16 November 2023",
    image: "/assets/AI.png",
    content:
      "Artificial Intelligence is revolutionizing the marketing landscape, offering unprecedented opportunities for personalization, automation, and data-driven decision making.",
  },
  {
    id: 3,
    title: "The Future of Web Development: Trends to Watch",
    date: "15 November 2023",
    image: "/assets/web.png",
    content:
      "Web development is constantly evolving, with new frameworks, tools, and methodologies emerging regularly.",
  },
];

const BlogMain = () => {
  const router = useRouter();
  const { idx } = router.query;
  const blogId = typeof idx === "string" ? parseInt(idx, 10) : NaN;
  const blog = blogPosts.find((post) => post.id === blogId);

  if (!router.isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* If blog not found */}
      {!blog ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Blog Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The blog post you're looking for doesn't exist.
            </p>
            <button
              onClick={() => router.push("/blog")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </button>
          </div>
        </div>
      ) : (
        <>
  {/* Banner Section */}
      <div className="relative w-full flex flex-col justify-center items-center min-h-[20vh] md:min-h-[60vh] mt-10 md:mt-19">
        {/* Blog Image as background */}
        <img
          src={blog.image || "/assets/Blog.png"}
          alt="Blog background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Rectangle overlay */}
        <img
          src="/assets/Rectangle.png"
          alt="Overlay background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />

        {/* Black overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-85"></div>

        {/* Banner Content */}
        <div className="relative z-10 px-4 text-center py-8 md:py-12">
          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl drop-shadow-lg max-w-4xl mx-auto">
            {blog.title}
          </h1>
        </div>
      </div>


      {/* Blog Image */}
      <div className="w-full flex justify-center relative z-20 -mt-20">
        <img
          src={blog.image || "/assets/Blog.png"}
          alt="Blog main visual"
          className="w-[90%] md:w-full max-w-5xl rounded-xl shadow-lg object-cover"
        />
      </div>

          {/* Blog Content */}
          <div className="w-full flex flex-col items-center px-4">
            <div className="w-full max-w-3xl py-10 md:py-14">
              {/* Intro */}
              <section className="mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  Intro
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {blog.content}
                </p>
              </section>

              {/* Supporting Image */}
              <section className="mb-10">
                <img
                  src="/assets/Brand.png"
                  alt="Supporting visual"
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </section>

              {/* Second Paragraph */}
              <section className="mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  Second Paragraph
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Second paragraph of blog… You can continue writing here.
                </p>
              </section>

              {/* Another Supporting Image */}
              <section className="mb-10">
                <img
                  src="/assets/Brand.png"
                  alt="Supporting visual"
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogMain;
