

import React from 'react';
import logo from '/src/assets/halisi.png'; // Absolute path for testing

export function Logo() {
  return (
    <div className="absolute top-0 left-5 p-5">
      <img src={logo} alt="Halisi Logo" className="h-4 w-auto" />
    </div>
  );
}