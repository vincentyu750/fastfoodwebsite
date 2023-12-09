// pages/arbys.js
import Image from 'next/image';
import React from 'react';

const Arbys = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Arby&apos;s</h1>

      {/* Arbys Beef Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Arby&apos;s Beef Menu</h2>
        <Image
          src="/images/Arbys/Arbys-Beef-Menu-768x960.png.webp"
          alt="Arby's Beef Menu"
          className="w-full"
        />
      </div>

      {/* Arbys Chicken Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Arby&apos;s Chicken Menu</h2>
        <Image
          src="/images/Arbys/Arbys-Chicken-Menu-768x960.png.webp"
          alt="Arby&apos;s Chicken Menu"
          className="w-full"
        />
      </div>

      {/* Arbys Sides Menu */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Arby&apos;s Sides Menu</h2>
        <Image
          src="/images/Arbys/Arbys-Sides-Menu-768x960.png.webp"
          alt="Arby&apos;s Sides Menu"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Arbys;
