import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    let content = this.props.content;
    return (
      <div class="contact">
        <div class="grid-container">
          <div class="three-cols">
            <h2>{content.role}</h2>
            <ul class="no-bullets">
              <li>Drop me an email at {content.contact.email}</li>
              <li>Find me on LinkedIn: <a href="https://www.linkedin.com">{content.contact.linkedin}</a></li>
              <li>Find me on Github: <a href="https://www.github.com">{content.contact.github}</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}