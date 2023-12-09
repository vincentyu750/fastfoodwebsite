// pages/arbys.js

import React from 'react';

const Arbys = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Arby's</h1>

      {/* Arbys Beef Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Arby's Beef Menu</h2>
        <img
          src="/images/Arbys/Arbys-Beef-Menu-768x960.png.webp"
          alt="Arby's Beef Menu"
          className="w-full"
        />
      </div>

      {/* Arbys Chicken Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Arby's Chicken Menu</h2>
        <img
          src="/images/Arbys/Arbys-Chicken-Menu-768x960.png.webp"
          alt="Arby's Chicken Menu"
          className="w-full"
        />
      </div>

      {/* Arbys Sides Menu */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Arby's Sides Menu</h2>
        <img
          src="/images/Arbys/Arbys-Sides-Menu-768x960.png.webp"
          alt="Arby's Sides Menu"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Arbys;
