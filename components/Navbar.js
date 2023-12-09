// components/Navbar.js

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SidePanel from './SidePanel'; // Import the SidePanel component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger button with image */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          <Image
            src="/images/button.PNG" // Update the path based on your directory structure
            alt="Hamburger Button"
            width={30} // Adjust the width as needed
            height={30} // Adjust the height as needed
          />
        </div>

        {/* Navigation links */}
        <ul className="flex text-white">
          <li className="mr-6">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* Add other navigation links as needed */}
        </ul>
      </div>

      {/* Render the SidePanel */}
      <SidePanel isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
