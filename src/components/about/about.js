import React, { Component } from 'react';
import utils from '../../../src/utils/utils.js';

export default class About extends Component {
  render() {
    const content = this.props.content;
    const programming = utils.renderArrayWithCommas(content.programming);
    const software = utils.renderArrayWithCommas(content.software);

    const volvo = content.experience.volvo;
    const acando = content.experience.acando;
    const scancoin = content.experience.scancoin;

    return (
      <div class="grid-container">
        <div class="about">
          <h2>About me</h2>
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