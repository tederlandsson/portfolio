import React, { Component } from 'react';
import { StyledAbout } from './About.styled';
import LearnMore from '../LearnMore/LearnMore';
import utils from '../../utils/index';
import { Content } from '../../config/about';

export default class About extends Component {
  render() {
    const software = utils.renderArrayWithCommas(Content.software);
  
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
        <LearnMore />
      </StyledAbout>
    );
  }
}