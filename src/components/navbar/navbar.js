import React, { Component } from 'react';
import Navigation from '../navigation/navigation';
import StyledNavbar from './Navbar.styled';

export default class Navheader extends Component {
  render(props) {
    return (
      <header className="navbar">
        <StyledNavbar>
        <h1>
          {this.props.content.aboutMe.name}
        </h1>
        <Navigation />
        </StyledNavbar>
      </header>
    );
  }
}