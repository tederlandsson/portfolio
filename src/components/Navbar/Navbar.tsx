import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Margins } from '../../theme';

type NavbarProps = {
  content: {
    name: string;
  };
};

const Navbar: React.FC<NavbarProps> = ({content})  => {
  return (
    <header className="navbar" style={navbarWrapperCSS}>
        <h1>
          {content.name}
        </h1>
      <Navigation />
    </header>
  );
}

export const navbarWrapperCSS = {
  width: '100%',
  display: 'inline-block',
  padding: `${Margins.small} 0 ${Margins.small} 0`,
  marginBottom: Margins.large,
};

export default Navbar;