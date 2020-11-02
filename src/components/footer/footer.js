import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <div class="footer">
        <small>Built with React</small>
        <p>{portfolioData}</p>
      </div>
    );
  }
}