import React, { Component } from 'react';
import Overlay from '../Overlay/Overlay';

// Theme
import styled from 'styled-components';
import { FontSizes, Margins, Colors } from '../../theme/';
import pattern from '../../assets/pattern.svg';

// Icons
import { Icon } from '@iconify/react';
import pythonIcon from '@iconify-icons/logos/python';
import javascriptIcon from '@iconify-icons/logos/javascript';
import typescriptIcon from '@iconify-icons/logos/typescript-icon';
import reactIcon from '@iconify-icons/logos/react';
import wavingHand from '@iconify-icons/emojione/waving-hand';

// Content
import { AboutContent, OverlayContent } from '../../config/about';

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
        <div className='about'>
          <Icon icon={wavingHand} className="wave"/>
          <p>Nice to meet you, I'm </p>
          <h2>{AboutContent.name}</h2>
          <h3>{AboutContent.role}</h3>
          <div className="iconContainer">
            {this.getIcons().map((x) => (
              <Icon icon={x} />
            ))}
          </div>
        </div>
        <br />
        <Overlay data={this.getContent()}/>
        <div className="about-bottom"></div>
      </StyledAbout>
    );
  }
}

const StyledAbout = styled.div`
    background: ${Colors.experienceBlue};
    padding: 20% 0 0 0;
    margin-bottom: ${Margins.huge};
    border-top: 1px solid rgb(99, 99, 99, 0.25);
    border-bottom: 1px solid rgb(99, 99, 99, 0.25);
    color: ${Colors.white};
    z-index: 1;
  }

  h2 {
    font-size: ${FontSizes.huge};
    font-weight: bold;
  }

  h3 {
    font-size: ${FontSizes.Large};
    color: #f3f3f3;
    margin: 0 ${Margins.Large} ${Margins.large} ${Margins.Large};
  }

  .learnMoreLink {
    margin-top: ${Margins.large};
  }

  .learnMoreLink > i {
    font-weight: bold;
    text-decoration: underline;
  }

  svg {
    font-size: 3em;
    margin: 12px 5px 24px 5px;
    display: inline-block;
    border-radius: 12.5%;
  }

  .wave {
    font-size: 5em;
  }
  
  .about-bottom {
    position: relative;
    margin: ${Margins.large} 0 0;
    background-image: url(${pattern});
    height: 175px;
  }

  .about-bottom::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    display: block;
    background: linear-gradient(to bottom, ${Colors.experienceBlue}, rgba(0, 0, 255, 0));
    width: 100%;
    height: 100%;
  }
`;