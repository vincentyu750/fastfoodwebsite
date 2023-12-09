// pages/mcdonalds.js
import Image from 'next/image';
import React from 'react';

const McDonalds = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">McDonald's</h1>

      {/* McDonald's Breakfast Menu Nutrition */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">McDonald's Breakfast Menu Nutrition</h2>
        <Image
          src="/images/McDonalds/Mcdonalds-Breakfast-Menu-Nutrition-735x919.jpg.webp"
          alt="McDonald's Breakfast Menu Nutrition"
          className="w-full"
        />
      </div>

      {/* McDonald's McCafé Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">McDonald's McCafé Menu</h2>
        <Image
          src="/images/McDonalds/McDonalds-Mccaffe-Menu-721x1024.jpg.webp"
          alt="McDonald's McCafé Menu"
          className="w-full"
        />
      </div>

      {/* McDonald's Sandwich Menu Nutrition */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">McDonald's Sandwich Menu Nutrition</h2>
        <Image
          src="/images/McDonalds/Mcdonalds-Sandwich-Menu-Nutrition-735x919.jpg.webp"
          alt="McDonald's Sandwich Menu Nutrition"
          className="w-full"
        />
      </div>

      {/* McDonald's Sides Menu Nutrition */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">McDonald's Sides Menu Nutrition</h2>
        <Image
          src="/images/McDonalds/Mcdonalds-Sides-Menu-Nutrition-735x919.jpg.webp"
          alt="McDonald's Sides Menu Nutrition"
          className="w-full"
        />
      </div>

      {/* McDonald's Sweets Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">McDonald's Sweets Menu</h2>
        <Image
          src="/images/McDonalds/Mcdonalds-Sweets-Menu-768x960.jpg.webp"
          alt="McDonald's Sweets Menu"
          className="w-full"
        />
      </div>

      {/* McDonald's Shamrock Shake Calories */}
      <div>
        <h2 className="text-2xl font-bold mb-2">McDonald's Shamrock Shake Calories</h2>
        <Image
          src="/images/McDonalds/Mcdonalds-Shamrock-Shake-Calories-768x746.jpg.webp"
          alt="McDonald's Shamrock Shake Calories"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default McDonalds;
