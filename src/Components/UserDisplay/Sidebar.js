import React, { useState } from "react";

// Content Components for the Right Side
import Categories from "./Categories";
import Slider from "./Slider";
import Offers from "./Offers";

function Sidebar() {
  const [activeCategory, setActiveCategory] = useState(""); // Manage active category
  const [isSliderActive, setIsSliderActive] = useState(false); // Manage if slider is active

  // Render the corresponding content based on the selected category
  const renderRightContent = () => {
    switch (activeCategory) {
      case "categories":
        return <Categories />;
      case "slider":
        return <Slider />;
      case "offers":
        return <Offers />;
      default:
        return <div className="text-center text-gray-600">Select a category to view content</div>
        
        ;
    }
  };

  // Handle button clicks to toggle active category
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setIsSliderActive(category === "slider");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          isSliderActive ? "w-1/6" : "w-1/4"
        } fixed top-15 left-0 h-full bg-gray-100 shadow-md p-4 transition-all duration-300 overflow-y-auto`}
      >
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => handleCategoryClick("categories")}
              className={`block py-2 px-4 rounded-md text-gray-700 ${
                activeCategory === "categories" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              Categories
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("slider")}
              className={`block py-2 px-4 rounded-md text-gray-700 ${
                activeCategory === "slider" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              Slider
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("offers")}
              className={`block py-2 px-4 rounded-md text-gray-700 ${
                activeCategory === "offers" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              Offers
            </button>
          </li>
        </ul>
      </div>

      {/* Right Side Content */}
      <div
        className={`${
          isSliderActive ? "ml-[16.66%]" : "ml-[25%]"
        } flex-1 p-4 overflow-y-auto`}
      >
        {renderRightContent()} {/* Dynamically render the content */}
      </div>
    </div>
  );
}

export default Sidebar;
