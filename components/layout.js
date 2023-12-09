// components/Layout.js

import React from 'react';
import Navbar from './Navbar';
import SidePanel from './SidePanel';

const Layout = ({ children }) => {
  // State to track whether the side panel is open or not
  const [isSidePanelOpen, setIsSidePanelOpen] = React.useState(false);

  // Function to toggle the side panel
  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="flex">
      {/* Navbar with hamburger button */}
      <Navbar toggleSidePanel={toggleSidePanel} />

      {/* Side panel component */}
      <SidePanel isOpen={isSidePanelOpen} closeMenu={toggleSidePanel} />

      {/* Main content */}
      <div
        className={`flex-1 transition-transform duration-300 ease-in-out ml-16 ${
          isSidePanelOpen ? 'transform translate-x-1/4' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
