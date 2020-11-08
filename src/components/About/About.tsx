import React, { Component } from 'react';
import { StyledAbout } from './About.styled';
import utils from '../../utils/utils.js';
import { Content } from '../../config/about';

export default class About extends Component {
  render() {
    const software = utils.renderArrayWithCommas(Content.software);
  
    return (
      <StyledAbout>
        <div className='grid-container'>
          <div className='role'>
            <h2>{Content.name}</h2>
            <h3> {'// Quality engineer // Test lead'} </h3>
            {Content.programming.map((lang) => (
              <div className='lang-container'>
                <p className='languages'> {lang} </p>
              </div>  
            ))}
          </div>
        </div>
      </StyledAbout>
    );
  }
}