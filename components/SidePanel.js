// components/SidePanel.js

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
        <li>McDonald's</li>
        <li>Burger King</li>
        <li>KFC</li>
        <li>Subway</li>
        <li>Starbucks</li>
        <li>Pizza Hut</li>
        <li>Domino's Pizza</li>
        <li>Taco Bell</li>
        <li>Wendy's</li>
      </ul>
    </div>
  );
};

export default SidePanel;
