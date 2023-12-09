// pages/kfc.js
import Image from 'next/image';
import React from 'react';

const KFC = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">KFC</h1>

      {/* KFC Chicken Menu Calories and Nutrition */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">KFC Chicken Menu Calories and Nutrition</h2>
        <Image
          src="/images/KFC/KFC-Chicken-Menu-Calories-and-Nutrition-768x960.jpg.webp"
          alt="KFC Chicken Menu Calories and Nutrition"
          className="w-full"
        />
      </div>

      {/* KFC Sides and Sauces Calories */}
      <div>
        <h2 className="text-2xl font-bold mb-2">KFC Sides and Sauces Calories</h2>
        <Image
          src="/images/KFC/KFC-Sides-and-Sauces-Calories-768x960.jpg.webp"
          alt="KFC Sides and Sauces Calories"
          className="w-full"
        />
      </div>

            {/* Chicken Sandwich Calorie Comparison */}
            <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Chicken Sandwich Calorie Comparison</h2>
        <Image
          src="/images/KFC/Chicken-Sandwich-Calorie-Comparison-735x919.jpg.webp"
          alt="Chicken Sandwich Calorie Comparison"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default KFC;
