// pages/burgerking.js
import Image from 'next/image';
import React from 'react';

const BurgerKing = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Burger King</h1>

      {/* Burger King Nutrition Breakfast Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Burger King Nutrition Breakfast Menu</h2>
        <Image
          src="/images/BurgerKing/Burger-King-Nutrition-Breakfast-Menu-768x1707.jpg.webp"
          alt="Burger King Nutrition Breakfast Menu"
          className="w-full"
        />
      </div>

      {/* Burger King Nutrition Burgers */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Burger King Nutrition Burgers</h2>
        <Image
          src="/images/BurgerKing/Burger-King-Nutrition-Burgers-768x960.jpg.webp"
          alt="Burger King Nutrition Burgers"
          className="w-full"
        />
      </div>

      {/* Burger King Nutrition Chicken */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Burger King Nutrition Chicken</h2>
        <Image
          src="/images/BurgerKing/Burger-King-Nutrition-Chicken-768x960.jpg.webp"
          alt="Burger King Nutrition Chicken"
          className="w-full"
        />
      </div>

      {/* Burger King Nutrition Sides */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Burger King Nutrition Sides</h2>
        <Image
          src="/images/BurgerKing/Burger-King-Nutrition-Sides-768x960.jpg.webp"
          alt="Burger King Nutrition Sides"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BurgerKing;
