"use client";

import Aside from './aside'
import React, { useState } from 'react';

export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
    
    return (
      
        /* <button onClick={toggleDarkMode}>Toggle Dark Mode</button> */

        <Aside isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
        {children}
        </Aside>
        /* <nav>This is nav</nav> */
   
    )
  }