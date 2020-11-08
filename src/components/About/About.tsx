import React, { Component } from 'react';
import { StyledAbout } from './About.styled';
import utils from '../../utils/utils.js';
import { Content } from '../../config/about';

export default class About extends Component {
  render() {
    const programming = utils.renderArrayWithCommas(Content.programming);
    const software = utils.renderArrayWithCommas(Content.software);

    return (
      <StyledAbout>
        <div className="grid-container">
          <div className="about backgroundGradient">
            <h2>About me</h2>
            <strong>{Content.name}</strong>
            <p>{Content.role} {Content.introduction}</p>
            <br />
            <h2>Skills</h2>
            <h3>Programming</h3>
            <ul className="no-bullets">
              <li>{programming}</li>            
            </ul>
            <br />
            <h3>Software</h3>
            <ul className="no-bullets">
              <li>{software}</li>            
            </ul>
          </div>
        </div>
      </StyledAbout>
    );
  }
}