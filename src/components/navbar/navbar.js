import React, { Component } from 'react';
import logo from '../../logo.svg';

export default class Navheader extends Component {
  render() {
    
    return (
      <div>
        <div className="navbar">
        <img src={logo} className="logo" alt="Logo" />
        <br />
        <ul class="no-bullets">          
          <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
        </div>
      </div>
    );
  }
}