import React, { useState } from "react";

// Content Components for the Right Side
import Categories from "./Categories";
import Slider from "./Slider";
import Offers from "./Offers";
import PremiumPage from "./Default";

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
        return <PremiumPage />;
    }
  };

  // Handle button clicks to toggle active category
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setIsSliderActive(category === "slider");
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          isSliderActive ? "w-1/6" : "w-1/4"
        } fixed top-0 left-0 h-full bg-gradient-to-b from-indigo-800 to-blue-700 shadow-2xl p-8 transition-all duration-300 overflow-y-auto`}
      >
        <h2 className="text-3xl font-extrabold text-white mb-10 tracking-wide">
          Premium
        </h2>
        <ul className="space-y-6">
          <li>
            <button
              onClick={() => handleCategoryClick("categories")}
              className={`w-full text-left font-semibold py-3 px-5 rounded-xl transition-colors duration-200 ${
                activeCategory === "categories"
                  ? "bg-white text-indigo-800 shadow-lg"
                  : "text-white hover:bg-indigo-600 hover:shadow-md"
              }`}
            >
              Categories
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("slider")}
              className={`w-full text-left font-semibold py-3 px-5 rounded-xl transition-colors duration-200 ${
                activeCategory === "slider"
                  ? "bg-white text-indigo-800 shadow-lg"
                  : "text-white hover:bg-indigo-600 hover:shadow-md"
              }`}
            >
              Slider
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("offers")}
              className={`w-full text-left font-semibold py-3 px-5 rounded-xl transition-colors duration-200 ${
                activeCategory === "offers"
                  ? "bg-white text-indigo-800 shadow-lg"
                  : "text-white hover:bg-indigo-600 hover:shadow-md"
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
        } flex-1 p-10 transition-all duration-300 overflow-y-auto`}
      >
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10">
          {renderRightContent()}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
