import React, { Component } from 'react';
import { StyledExperience } from './Experience.styled';
import content from '../../config/experience';
import vcc_logo from '../../assets/vcc_logo.png';
import acando_logo from '../../assets/acando_logo.png';

export default class Experience extends Component {
  render() {
    const experience = [content.volvo, content.acando, content.scancoin];
    const logos = [vcc_logo, acando_logo, acando_logo];

    return (
      <StyledExperience>
        <div className="experience">
          <h2>Experience</h2>
          
          {experience.map((x, index) => (
            <>
              <b>{x.role}</b>
              <p className="company">{x.company}</p>
              <div className="logoWrapper">
                <img src={logos[index]} alt={x.companyAltText} />
              </div>
              <p className="dates">{x.started}–{x.ended}</p>   
              <ul>
                {x.tasks.map((x) => (
                  <li>{x}</li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </StyledExperience>
    );
  }
}