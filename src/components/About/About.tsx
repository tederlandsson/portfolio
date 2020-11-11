import React, { Component } from 'react';
import { StyledAbout } from './About.styled';
import Overlay from '../Overlay/Overlay';
import { Content, OverlayContent } from '../../config/about';

export default class About extends Component {

  getContent() {
    return { ...Content, ...OverlayContent } ;
  }

  render() {  
    return (
      <StyledAbout>
        <div className='role'>
          <h2>{Content.name}</h2>
          <h3> {'// Quality engineer // Test lead'} </h3>
          {Content.programming.map((lang) => (
            <ul className='lang-container'>
              <li className='lang'> {lang} </li>
            </ul>  
          ))}
        </div>
        <br />
        <Overlay data={this.getContent()}/>
      </StyledAbout>
    );
  }
}