// components/Layout.js

import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 px-4 sm:px-8 lg:px-16 xl:px-32">{children}</div>
    </div>
  );
};

export default Layout;
