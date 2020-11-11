import React, { Component } from 'react';
import StyledContact from './Contact.styled';
import { ContactInfo } from '../../config/about';

export default class Contact extends Component {

  render() {
  
    return (
      <StyledContact>
        <div className="contact">
          <h2>Contact</h2>
          <ul className="no-bullets">
            <p>Let's get in touch. Here's how to find me</p>
            <li>Drop me an email at <br />{ContactInfo.email}</li>
            <br />
            <li>Find me on LinkedIn: <br /> <a href="https://www.linkedin.com">{ContactInfo.linkedin}</a></li>
            <br />
            <li>Find me on Github:<br /> <a href="https://www.github.com">{ContactInfo.github}</a></li>
          </ul>  
        </div>
      </StyledContact>
    );
  }

}