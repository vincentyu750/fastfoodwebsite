// pages/tacobell.js

import React from 'react';

const TacoBell = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Taco Bell</h1>

      {/* Taco Bell Breakfast Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Taco Bell Breakfast Menu</h2>
        <img
          src="/images/TacoBell/Taco-Bell-Breakfast-Menu-768x960.jpg.webp"
          alt="Taco Bell Breakfast Menu"
          className="w-full"
        />
      </div>

      {/* Taco Bell Burrito Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Taco Bell Burrito Menu</h2>
        <img
          src="/images/TacoBell/Taco-Bell-Burrito-Menu-768x960.jpg.webp"
          alt="Taco Bell Burrito Menu"
          className="w-full"
        />
      </div>

      {/* Taco Bell Sides and Specialities Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Taco Bell Sides and Specialities Menu</h2>
        <img
          src="/images/TacoBell/Taco-Bell-Sides-and-Specialities-Menu-768x960.jpg.webp"
          alt="Taco Bell Sides and Specialities Menu"
          className="w-full"
        />
      </div>

      {/* Taco Bell Taco Menu */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Taco Bell Taco Menu</h2>
        <img
          src="/images/TacoBell/Taco-Bell-Taco-Menu-768x960.jpg.webp"
          alt="Taco Bell Taco Menu"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default TacoBell;
