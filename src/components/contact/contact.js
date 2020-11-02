import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    let content = this.props.content;
    return (
      <div class="contact">
        <div class="three-cols">
          <h3>Contact</h3>
          <ul class="no-bullets">
            <li>Drop me an email at <br />{content.contact.email}</li>
            <br />
            <li>Find me on LinkedIn: <br /> <a href="https://www.linkedin.com">{content.contact.linkedin}</a></li>
            <br />
            <li>Find me on Github:<br /> <a href="https://www.github.com">{content.contact.github}</a></li>
          </ul>
        </div>
      </div>
    );
  }

}