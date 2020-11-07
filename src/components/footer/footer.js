import React, { Component } from 'react';
import StyledFooter from './Footer.styled';
import content from '../../config/about';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer backgroundGradient">
        <StyledFooter>
          <p>Powered by React</p>
          <p><b>Fonts used:</b> Avenir, Work Sans</p>
          <p><b>Last updated: </b>6 Nov 2020</p>
          <br/>
          &copy; Copyright 2020 {content.name}
        </StyledFooter> 
      </div>    
    );
  }
}