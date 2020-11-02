import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let content = this.props.content;
    const skills = content.programming.map((x) => `${x},`);

    return (
      <div class="about">
        <h1>{content.aboutMe.name}</h1>
        <div class="grid-container">
          <strong>About component</strong>
          <p>{content.aboutMe.role}</p>
          <h3>Skills</h3>
          <p>{skills}</p>
        </div>
      </div>
    );
  }
}


