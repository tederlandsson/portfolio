import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    const volvo = this.props.content.volvo;
    const acando = this.props.content.acando;
    const scancoin = this.props.content.scancoin;

    return (
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
    );
  }
}