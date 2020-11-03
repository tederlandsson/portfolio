import React, { Component } from 'react';
// import utils from '../../../src/utils/utils.js';

export default class Contact extends Component {

  render() {
    const content = this.props.content;
    const volvo = content.experience.volvo;
    const acando = content.experience.acando;
    const scancoin = content.experience.scancoin;
  
    return (
      <div class="contact">
        <div class="experience">
          <h2>Experience</h2>
          <b>{volvo.role}</b>
          <p>{volvo.company}</p>
          <p>{volvo.started}–{volvo.ended}</p>   
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
        <div class="grid-container">
          <h2>Contact</h2>
          <ul class="no-bullets">
            <p>Let's get in touch. Here's how to find me</p>
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