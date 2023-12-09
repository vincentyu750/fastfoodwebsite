// pages/subway.js
import Image from 'next/image';
import React from 'react';

const Subway = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Subway</h1>

      {/* High-Protein Subway Sandwiches */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">High-Protein Subway Sandwiches</h2>
        <Image
          src="/images/Subway/High-Protein-Subway-Sandwiches-768x960.jpg.webp"
          alt="High-Protein Subway Sandwiches"
          className="w-full"
        />
      </div>

      {/* Highest-Protein Subway Footlongs */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Highest-Protein Subway Footlongs</h2>
        <Image
          src="/images/Subway/Highest-Protein-Subway-Footlongs-768x960.jpg.webp"
          alt="Highest-Protein Subway Footlongs"
          className="w-full"
        />
      </div>

      {/* Lowest-calorie subway options */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Lowest-calorie Subway Options</h2>
        <Image
          src="/images/Subway/Lowest-calorie-subway-options-768x960.jpg.webp"
          alt="Lowest-calorie Subway Options"
          className="w-full"
        />
      </div>

      {/* Subway Menu Customizations */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Subway Menu Customizations</h2>
        <Image
          src="/images/Subway/Subway-Menu-Customizations-768x960.jpg.webp"
          alt="Subway Menu Customizations"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Subway;
