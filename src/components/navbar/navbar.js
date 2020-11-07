import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import StyledNavbar from './Navbar.styled';

export default class Navheader extends Component {
  render(props) {
    return (
      <StyledNavbar>
        <header className="navbar">
          <h1>
            {this.props.content.aboutMe.name}
          </h1>
          <Navigation />
        </header>
      </StyledNavbar>
    );
  }
}