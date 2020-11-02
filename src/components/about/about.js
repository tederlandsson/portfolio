import React, { Component } from 'react';

import content from '../../content.js';

export default class About extends Component {
  render() {
    let content = this.props.content;
    return (
      <p>{content.role}</p>
    );
  }
}