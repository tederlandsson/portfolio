import React, { useState } from 'react';
import Burger from '../../shared/Burger';
import About from '../About/About';

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

  let menu
  let menuMask

  if (showMenu) {
    menu = 
    <div
      className="fixed bg-white top-0 left-0 w-2/5 h-full shadow"
    >
      The menu
    </div>

    menuMask = 
    <div
      className="bg-black fixed top-0 left-0 w-2/5 h-full z-50"
    >
      <About />
    </div>
  }

  return (
    <nav>
      <div className="menu">
        <h3 onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? 'Close menu' : 'Open Menu'}</h3>
      </div>
            { menuMask }

      { menu }
    </nav>
  )
}

export default Navigation;