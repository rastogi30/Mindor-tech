import React, { useState } from "react";
import Head from "next/head";
import SearchBar from "./search";
import CategoryTabs from "../../pages/blog/category-tabs";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All Blogs");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Search for:", query);
  };

  const handleCategory = (cat: string) => {
    setCategory(cat);
    console.log("Selected category:", cat);
  };

  const categories = ["All Blogs", "AI", "Web Development", "RPA", "Digital Marketing"];

  return (
    <>
      <Head>
        <title>Mindor.Tech Blog | Insights & Updates</title>
        <meta
          name="description"
          content="Read the latest articles, tutorials, and updates from Mindor.Tech on web, mobile, AI, and digital solutions."
        />
      </Head>

      <div className="w-full mx-auto py-16">
        <div
          className="w-full h-96 bg-cover bg-center gap-y-3 flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/blog/bg.png')" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg">
            Blogs
          </h1>
        <div className="mt-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <CategoryTabs categories={categories} onSelect={handleCategory} />
        </div>

        
      </div>
    </>
  );
};

export default BlogPage;
