// pages/starbucks.js
import Image from 'next/image';
import React from 'react';

const Starbucks = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Starbucks</h1>

      {/* Starbucks Nutrition For Add-ons */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Starbucks Nutrition For Add-ons</h2>
        <Image
          src="/images/Starbucks/Starbucks-Nutrition-For-Addons-768x960.jpg.webp"
          alt="Starbucks Nutrition For Add-ons"
          className="w-full"
        />
      </div>

      {/* Starbucks Nutrition for Cold Drinks */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Starbucks Nutrition for Cold Drinks</h2>
        <Image
          src="/images/Starbucks/Starbucks-Nutrition-for-Cold-Drinks-768x960.jpg.webp"
          alt="Starbucks Nutrition for Cold Drinks"
          className="w-full"
        />
      </div>

      {/* Starbucks Nutrition for Hot Drinks */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Starbucks Nutrition for Hot Drinks</h2>
        <Image
          src="/images/Starbucks/Starbucks-Nutrition-for-Hot-Drinks-768x960.jpg.webp"
          alt="Starbucks Nutrition for Hot Drinks"
          className="w-full"
        />
      </div>

      {/* Starbucks Nutrition Guide 1 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Starbucks Nutrition Guide 1</h2>
        <Image
          src="/images/Starbucks/Starbucks-Nutrition-Guide-1-768x960.jpg.webp"
          alt="Starbucks Nutrition Guide 1"
          className="w-full"
        />
      </div>

      {/* Starbucks Nutrition Guide 3.1 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Starbucks Nutrition Guide 3.1</h2>
        <Image
          src="/images/Starbucks/Starbucks-Nutrition-Guide-3-1-768x960.jpg.webp"
          alt="Starbucks Nutrition Guide 3.1"
          className="w-full"
        />
      </div>

      {/* Starbucks Nutrition Guide 4 */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Starbucks Nutrition Guide 4</h2>
        <Image
          src="/images/Starbucks/Starbucks-Nutrition-Guide-4-768x790.jpg.webp"
          alt="Starbucks Nutrition Guide 4"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Starbucks;
