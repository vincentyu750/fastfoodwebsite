// pages/dairyqueen.js

import React from 'react';

const DairyQueen = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Dairy Queen</h1>

      {/* DQ Blizzard Large Nutrition */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">DQ Blizzard Large Nutrition</h2>
        <img
          src="/images/DairyQueen/DQ-Blizzard-Large-Nutrition-768x960.jpg.webp"
          alt="DQ Blizzard Large Nutrition"
          className="w-full"
        />
      </div>

      {/* DQ Blizzard Medium Nutrition */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">DQ Blizzard Medium Nutrition</h2>
        <img
          src="/images/DairyQueen/DQ-Blizzard-Medium-Nutrition-768x960.jpg.webp"
          alt="DQ Blizzard Medium Nutrition"
          className="w-full"
        />
      </div>

      {/* Small DQ Blizzard Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Small DQ Blizzard Menu</h2>
        <img
          src="/images/DairyQueen/Small-DQ-Blizzard-Menu-768x960.jpg.webp"
          alt="Small DQ Blizzard Menu"
          className="w-full"
        />
      </div>

      {/* DQ Blizzard Mini Nutrition */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">DQ Blizzard Mini Nutrition</h2>
        <img
          src="/images/DairyQueen/DQ-Blizzard-Mini-Nutrition-768x960.jpg.webp"
          alt="DQ Blizzard Mini Nutrition"
          className="w-full"
        />
      </div>

      {/* DQ Blizzard Limited Edition */}
      <div>
        <h2 className="text-2xl font-bold mb-2">DQ Blizzard Limited Edition</h2>
        <img
          src="/images/DairyQueen/DQ-Blizzard-Limited-Edition-768x960.jpg.webp"
          alt="DQ Blizzard Limited Edition"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default DairyQueen;
