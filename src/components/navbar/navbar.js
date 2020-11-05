import React, { Component } from 'react';

export default class Navheader extends Component {
  render(props) {
    return (
        <div className="border-b font-bold p-3"> 
          <h1>{this.props.content.aboutMe.name}</h1>
      </div>
    );
  }
}