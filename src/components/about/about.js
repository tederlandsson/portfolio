import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let content = this.props.content;
    const programming = content.programming.map((x) => `${x}, `);
    const software = content.software.map((x) => `${x}, `);

    return (
      <div class="about">
        <h1>{content.aboutMe.name}</h1>
        <div class="grid-container">
          <strong>About component</strong>
          <p>{content.aboutMe.role}</p>
          <h2>Skills</h2>
          <h3>Programming</h3>
          <ul class="no-bullets">
            <li>{programming}</li>            
          </ul>
          <h3>Software</h3>
          <ul class="no-bullets">
            <li>{software}</li>            
          </ul>
        </div>
      </div>
    );
  }
}


