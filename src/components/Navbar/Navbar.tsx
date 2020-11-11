import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import StyledNavbar from './Navbar.styled';
import { Content } from '../../config/about';

export default class Navheader extends Component {
  render() {
    return (
      <header className="navbar">
        <StyledNavbar>
          <h1>
            {Content.name}
          </h1>
        <Navigation />
        </StyledNavbar>
      </header>
    );
  }
}