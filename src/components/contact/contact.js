import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    let content = this.props.content;
    return (
      <div class="grid-container">
        <div class="two-cols">
          <h1>{content.name}</h1>
          <h2>Subheader</h2>
          
          <ul class="no-bullets">
            <li>Drop me an email at</li>
            <li>Find me on LinkedIn: <a href="https://www.linkedin.com">LinkedIn</a></li>
            <li>Find me on Github: <a href="https://www.github.com">Github</a></li>
          </ul>
        </div>
      </div>
    );
  }

}