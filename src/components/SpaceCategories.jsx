import React, { useState } from 'react';

const SpaceCategory = ({ name, color, borderColor = "border-white", isActive, onClick }) => (
  <div 
    className="flex items-center cursor-pointer relative"
    onClick={onClick}
  >
    <div className="relative w-[120px] h-[120px] overflow-hidden" style={{
      clipPath: "path('M 10,55 L 110,10 L 1,195 L 310,290 Z')"
    }}>
      <div className={`w-10 h-10 rounded-full ${isActive ? color : color} absolute top-[40px] left-[35px]`}>
        <div className="absolute top-[-40px] right-[-58px] w-[88px] h-[88px] border-[3px] border-dashed border-opacity-50 rounded-full" 
          style={{ 
            borderColor: borderColor === "border-white" ? "white" : borderColor,
            transform: "rotate(-45deg)"
          }}>
        </div>
      </div>
    </div>
    <span className={`font-teshrin text-xl ${isActive ? 'text-primary-dark' : 'text-gray-400'}`}>{name}</span>
  </div>
);

const SpaceCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { id: 'literary', name: "الفضاء الادبي", color: "bg-[#250F54]" },
    { id: 'medical', name: "الفضاء الطبي", color: "bg-[#F3ECFF]", borderColor: "rgba(102,102,204,0.3)" },
    { id: 'engineering', name: "فضاء الهندسة", color: "bg-[#6666CC]", borderColor: "rgba(255,255,255,0.5)" },
    
    
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId);
  };

  return (
    <div className="flex flex-row-reverse justify-center items-center">
      {categories.map((category) => (
        <SpaceCategory 
          key={category.id}
          {...category}
          isActive={category.id === activeCategory}
          onClick={() => handleCategoryClick(category.id)}
        />
      ))}
    </div>
  );
};

export default SpaceCategories; 