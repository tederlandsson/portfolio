import React, { Component } from 'react';
import { StyledAbout } from './About.styled';
import Overlay from '../Overlay/Overlay';
import { AboutContent, OverlayContent } from '../../config/about';

import { Icon } from '@iconify/react';
import pythonIcon from '@iconify-icons/logos/python';

import javascriptIcon from '@iconify-icons/logos/javascript';
import typescriptIcon from '@iconify-icons/logos/typescript-icon';
import reactIcon from '@iconify-icons/logos/react';


export default class About extends Component {
  getIcons() {
    return [javascriptIcon, typescriptIcon, reactIcon, pythonIcon];
  }

  getContent() {
    return { ...AboutContent, ...OverlayContent } ;
  }

  render() {  
    return (
      <StyledAbout>
        <div className='role'>
          <p>Nice to meet you, I'm </p>
          <h2>{AboutContent.name}</h2>
          <h3> {'Quality engineer, Test lead'} </h3>
          <div className="iconContainer">
            {this.getIcons().map((x) => (
              <Icon icon={x} />
            ))}
          </div>
        </div>
        <br />
        <Overlay data={this.getContent()}/>
      </StyledAbout>
    );
  }
}