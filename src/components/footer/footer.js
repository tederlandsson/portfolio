import React, { Component } from 'react';
import StyledFooter from './Footer.styled';

export default class Footer extends Component {
  render(props) {
    return (
      <div className="footer backgroundGradient">
        <StyledFooter>
          <p>Powered by React</p>
          <p><b>Fonts used:</b> Avenir, Work Sans</p>
          <p><b>Last updated: </b>5 Nov 2020</p>
          <br/>
          &copy; Copyright 2020 {this.props.content.aboutMe.name}
        </StyledFooter> 
      </div>    
    );
  }
}