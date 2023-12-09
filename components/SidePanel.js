// components/SidePanel.js
import Link from 'next/link';
import React from 'react';

const SidePanel = ({ isOpen, closeMenu }) => {
  return (
    <div className={`side-panel ${isOpen ? 'show' : ''}`}>
      {/* Close button */}
      <button className="close-button" onClick={closeMenu}>
        Close Menu
      </button>

      

     {/* List of fast-food chains */}
    <ul className="fast-food-list">
      <Link href="/arbys">
        <li className="fast-food-item" onClick={closeMenu}>
          Arby&apos;s
        </li>
      </Link>
      <Link href="/burgerking">
        <li className="fast-food-item" onClick={closeMenu}>
          Burger King
        </li>
      </Link>
      <Link href="/chipotle">
        <li className="fast-food-item" onClick={closeMenu}>
          Chipotle
        </li>
      </Link>
      <Link href="/dairyqueen">
        <li className="fast-food-item" onClick={closeMenu}>
          Dairy Queen
        </li>
      </Link>
      <Link href="/kfc">
        <li className="fast-food-item" onClick={closeMenu}>
          KFC
        </li>
      </Link>
      <Link href="/mcdonalds">
        <li className="fast-food-item" onClick={closeMenu}>
          McDonalds
        </li>
      </Link>
      <Link href="/starbucks">
        <li className="fast-food-item" onClick={closeMenu}>
          Starbucks
        </li>
      </Link>
      <Link href="/subway">
        <li className="fast-food-item" onClick={closeMenu}>
          Subway
        </li>
      </Link>
      <Link href="/tacobell">
        <li className="fast-food-item" onClick={closeMenu}>
          Taco Bell
        </li>
      </Link>
      <Link href="/wendys">
        <li className="fast-food-item" onClick={closeMenu}>
          Wendys
        </li>
    </Link>
    </ul>


      <style jsx>{`
        .side-panel {
          width: 25%; 
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          background-color: black;
          color: white;
          padding: 20px;
          transition: transform 0.3s ease-in-out;
          transform: translateX(${isOpen ? '0' : '-100%'});
        }

        .fast-food-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .fast-food-item {
          margin-bottom: 10px;
          cursor: pointer;
        }

        .close-button {
          background-color: transparent;
          margin-bottom: 20px;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default SidePanel;