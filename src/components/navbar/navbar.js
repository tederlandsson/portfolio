import React, { Component } from 'react';

export default class Navheader extends Component {
  render() {
    const content = this.props.content;
    return (
      <div>
        <div className="navbar">
          <h1>{content.aboutMe.name}</h1>
          <div class="icons">
              {/* <a href="https://www.github.com">
                <img src="./images/github_mark_64.png" alt="Go to my Github profile"/>
              </a>
              <a href="https://www.linkedin.com">
                <img src="./images/linkedin_logo.png" alt="Go to my LinkedIn profile"/>
              </a> */}
            </div>
          </div>
      </div>
    );
  }
}