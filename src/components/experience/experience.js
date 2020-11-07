import React, { Component } from 'react';
import { StyledExperience } from './Experience.styled';
import content from '../../config/experience';

export default class Experience extends Component {
  render() {
    const volvo = content.volvo;
    const acando = content.acando;
    const scancoin = content.scancoin;

    console.log(content);

    return (
      <StyledExperience>
        <div className="experience">
          <h2>Experience</h2>
          <b>{volvo.role}</b>
          <p className="company">{volvo.company}</p>
          <p className="dates">{volvo.started}–{volvo.ended}</p>   
          <ul>
            {volvo.tasks.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
          <b>{acando.role}</b>
          <p>{acando.company}</p>
          <p>{acando.started}–{acando.ended}</p>   
          <ul>
            {acando.tasks.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
          <b>{scancoin.role}</b>
          <p>{scancoin.company}</p>
          <p>{scancoin.started}–{acando.ended}</p>   
          <ul>
            {scancoin.tasks.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        </div>
      </StyledExperience>
    );
  }
}