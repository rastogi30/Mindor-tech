import React, { useState } from "react";

interface CategoryTabsProps {
  categories?: string[];   
  onSelect: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories = [], onSelect }) => {
  const [active, setActive] = useState(categories[0] || "");

  const handleClick = (category: string) => {
    setActive(category);
    onSelect(category);
  };

  if (categories.length === 0) {
    return <p className="text-center text-gray-500">No categories available</p>;
  }

  return (
    <div className="flex justify-center mt-6 flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded ${
            active === cat
              ? "bg-white text-blue-700 font-semibold shadow"
              : "bg-blue-900 text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
