import React, { Component } from 'react';
import Overlay from '../Overlay/Overlay';
import { AboutContent, OverlayContent } from '../../config/about';
import Button from '../Button/Button';

import styled from 'styled-components';
import { FontSizes, Margins, Colors } from '../../theme/';

import { Icon } from '@iconify/react';
import pythonIcon from '@iconify-icons/logos/python';
import javascriptIcon from '@iconify-icons/logos/javascript';
import typescriptIcon from '@iconify-icons/logos/typescript-icon';
import reactIcon from '@iconify-icons/logos/react';
import wavingHand from '@iconify-icons/emojione/waving-hand';

export default class About extends Component {
  getIcons() {
    return [javascriptIcon, typescriptIcon, reactIcon, pythonIcon];
  }

  getContent() {
    return { ...AboutContent, ...OverlayContent } ;
  }

  render() {
    const buttonText: string = 'Learn more'; // Update this

    return (
      <StyledAbout>
        <div className='role'>
          <Icon icon={wavingHand} className="wave"/>
          <p>Nice to meet you, I'm </p>
          <h2>{AboutContent.name}</h2>
          <h3>{AboutContent.role}</h3>
          <div className="iconContainer">
            {this.getIcons().map((x) => (
              <Icon icon={x} />
            ))}
          </div>
          <Button buttonText={buttonText} />
        </div>
        <br />
        <Overlay data={this.getContent()}/>
      </StyledAbout>
    );
  }
}

const StyledAbout = styled.div`
    background: ${Colors.blueGradientBackGround};
    padding: 30% 0 20% 0;
    margin-bottom: ${Margins.huge};
    border-top: 1px solid rgb(99, 99, 99, 0.25);
    border-bottom: 1px solid rgb(99, 99, 99, 0.25);
    color: ${Colors.white};
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
`;