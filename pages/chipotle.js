// pages/chipotle.js

import React from 'react';

const Chipotle = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Chipotle</h1>

      {/* Chipotle Lifestyle Bowls */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Chipotle Lifestyle Bowls</h2>
        <img
          src="/images/Chipotle/Chipotle-Lifestyle-Bowls-768x819.png.webp"
          alt="Chipotle Lifestyle Bowls"
          className="w-full"
        />
      </div>

      {/* Chipotle Menu Nutrition */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Chipotle Menu Nutrition</h2>
        <img
          src="/images/Chipotle/Chipotle-Menu-Nutrition-768x960.png.webp"
          alt="Chipotle Menu Nutrition"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Chipotle;
