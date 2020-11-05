import React, { Component } from 'react';
import utils from '../../utils/utils.js';

export default class About extends Component {
  render(props) {
    const content = this.props.content;
    const programming = utils.renderArrayWithCommas(content.programming);
    const software = utils.renderArrayWithCommas(content.software);

    return (
      <div className="grid-container">
        <div className="about">
          <h2>About me</h2>
          <strong>{content.aboutMe.name}</strong>
          <p>{content.aboutMe.role} {content.aboutMe.introduction}</p>
          <br />
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