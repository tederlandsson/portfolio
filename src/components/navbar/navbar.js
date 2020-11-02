import React, { Component } from 'react';
import logo from '../../logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      // let portfolioData = this.props.portfolioData;
      <div>
        <link rel="stylesheet" type="text/css" href="public/css/main.css" />
        <div className="navheader">
        <ul class="no-bullets">
          <img src={logo} className="logo" alt="Logo" />
          <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
        </div>
      </div>
    );
  }
}