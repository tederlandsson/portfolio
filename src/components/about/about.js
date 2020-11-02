import React, { Component } from 'react';

export default class About extends Component {
  render() {
    const content = this.props.content;
    const programming = content.programming.map((x) => `${x}, `);
    const software = content.software.map((x) => `${x}, `);

    return (
      <div class="grid-container">
        <div class="about">
          <h1>About me</h1>
          <strong>{content.aboutMe.name}</strong>
          <p>{content.aboutMe.role} {content.aboutMe.introduction}</p>
          <p></p>
          <h2>Skills</h2>
          <h3>Coding</h3>
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


