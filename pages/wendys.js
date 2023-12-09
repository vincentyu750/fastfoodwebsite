// pages/wendys.js
import Image from 'next/image';
import React from 'react';

const Wendys = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Wendy's</h1>

      {/* Wendy's Breakfast Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Wendy's Breakfast Menu</h2>
        <Image
          src="/images/Wendys/Wendys-Breakfast-Menu-753x1080.jpg.webp"
          alt="Wendy's Breakfast Menu"
          className="w-full"
        />
      </div>

      {/* Wendy's Burger Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Wendy's Burger Menu</h2>
        <Image
          src="/images/Wendys/Wendys-Burger-Menu-753x1080.jpg.webp"
          alt="Wendy's Burger Menu"
          className="w-full"
        />
      </div>

      {/* Wendy's Chicken Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Wendy's Chicken Menu</h2>
        <Image
          src="/images/Wendys/Wendys-Chicken-Menu-753x1080.jpg.webp"
          alt="Wendy's Chicken Menu"
          className="w-full"
        />
      </div>

      {/* Wendy's Dessert Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Wendy's Dessert Menu</h2>
        <Image
          src="/images/Wendys/Wendys-Dessert-Menu-768x804.jpg.webp"
          alt="Wendy's Dessert Menu"
          className="w-full"
        />
      </div>

      {/* Wendy's Menu Sides */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Wendy's Menu Sides</h2>
        <Image
          src="/images/Wendys/Wendys-Menu-Sides-753x1080.jpg.webp"
          alt="Wendy's Menu Sides"
          className="w-full"
        />
      </div>

      {/* Wendy's Salad Menu */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Wendy's Salad Menu</h2>
        <Image
          src="/images/Wendys/Wendys-Salad-Menu-768x692.jpg.webp"
          alt="Wendy's Salad Menu"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Wendys;
