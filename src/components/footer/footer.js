import React, { Component } from 'react';
import content from '../../content';

export default class Footer extends Component {
  render() {
    // let content = this.props.content;
    return (
      <div class="footer">
        <p>Built with React</p>
        <p>Fonts used: { content.fontsUsed.map((x) => `${x}, `)}</p>
      </div>
    );
  }
}