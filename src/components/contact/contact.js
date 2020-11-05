import React, { Component } from 'react';
// import utils from '../../../src/utils/utils.js';

export default class Contact extends Component {

  render() {
    const content = this.props.content;
  
    return (
      <div class="contact">
        <h2>Contact</h2>
        <ul class="no-bullets">
          <p>Let's get in touch. Here's how to find me</p>
          <li>Drop me an email at <br />{content.contact.email}</li>
          <br />
          <li>Find me on LinkedIn: <br /> <a href="https://www.linkedin.com">{content.contact.linkedin}</a></li>
          <br />
          <li>Find me on Github:<br /> <a href="https://www.github.com">{content.contact.github}</a></li>
        </ul>
      </div>
    );
  }

}