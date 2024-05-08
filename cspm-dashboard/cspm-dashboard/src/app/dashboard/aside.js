"use client";

import React, { useState } from 'react';
import '@/app/ui/global.css'

export default function Aside({
    children, // will be a page or nested layout
    isDarkMode,
    toggleDarkMode
  }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className={`flex ${isOpen ? 'sidebar-open' : ''}`}>
      <div className={`w-64 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} p-4`}>
        {/* <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 ${isDarkMode ? 'dark-mode-btn' : ''}`} onClick={toggleSidebar}>
          {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button> */}
        <ul>
          <li className="py-2">Item 1</li>
          <li className="py-2">Item 2</li>
          <li className="py-2">Item 3</li>
          <li className="py-2">Item 4</li>
          <li className="py-2">Item 5</li>
        </ul>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
    )
  }