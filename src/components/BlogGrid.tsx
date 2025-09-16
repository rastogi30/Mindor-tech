import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image?: string;
}

const BlogGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const postsPerPage = 6; 

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const recentPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Different Ways To Do Bulk Updates On WordPress",
      date: "April 16, 2024"
    },
    {
      id: 2,
      title: "5 Different Ways To Do Bulk Updates On WordPress", 
      date: "April 16, 2024"
    }
  ];

  const mainPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Different Ways To Do Bulk Updates On WordPress",
      date: "16 November 2023",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "5 Different Ways To Do Bulk Updates On WordPress",
      date: "16 November 2023"
    },
    {
      id: 3,
      title: "5 Different Ways To Do Bulk Updates On WordPress", 
      date: "16 November 2023"
    },
    {
      id: 4,
      title: "5 Different Ways To Do Bulk Updates On WordPress",
      date: "16 November 2023"
    },
    {
      id: 5,
      title: "How to Decisions Marketing in the AI era",
      date: "16 November 2023",
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "5 Different Ways To Do Bulk Updates On WordPress",
      date: "16 November 2023"
    },
    {
      id: 7,
      title: "5 Different Ways To Do Bulk Updates On WordPress",
      date: "16 November 2023"
    },
    {
      id: 8,
      title: "5 Different Ways To Do Bulk Updates On WordPress",
      date: "16 November 2023"
    },
    {
      id: 9,
      title: "5 Different Ways To Do Bulk Updates On WordPress",
      date: "16 November 2023",
      image: "/api/placeholder/300/200"
    },
    {
      id: 10,
      title: "5 Different Ways To Do Bulk Updates On WordPress",
      date: "16 November 2023"
    },
    {
      id: 11,
      title: "5 Different Ways To Do Bulk Updates On WordPress",
      date: "16 November 2023"
    },
    {
      id: 12,
      title: "5 Different Ways To Do Bulk Updates On WordPress",
      date: "16 November 2023"
    }
  ];

  const totalPages = Math.ceil(mainPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = mainPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const postsToShow = isMobile ? paginatedPosts : mainPosts;

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="lg:hidden mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h2>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="border pb-4 last:border-b-0">
                    <h3 className="text-sm font-medium text-gray-900 mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {postsToShow.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                  {post.image ? (
                    <div className="aspect-[4/3] bg-gray-200 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-white/40 rounded"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-gray-100"></div>
                  )}
                  
                  <div className="p-3 sm:p-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {isMobile && (
              <div className="mt-8 flex justify-center items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 text-sm rounded-md ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;