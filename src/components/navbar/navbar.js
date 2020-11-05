import React, { Component } from 'react';
import Navigation from '../navigation/navigation';

export default class Navheader extends Component {
  render(props) {
    return (
        <header className="border-b font-bold p-3 flex justify-between items-center">
          <h1>
            {this.props.content.aboutMe.name}
          </h1>
          <Navigation />
      </header>
    );
  }
}