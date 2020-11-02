import React, { Component } from 'react';
import content from '../../content';

export default class Footer extends Component {
  render() {
    let content = this.props.content;
    const fonts = content.fontsUsed.map((x) => `${x} `);

    return (
      <div class="footer">
        <p>Powered by React</p>
        <p><b>Fonts used:</b> {fonts} </p>
        <p><b>Last updated: </b>2 Nov 2020</p>
      </div>
    );
  }
}