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

interface AboutProps {
  aboutContent: {
    name: string;
    role: string;
  },
    overlayContent: {
    header1: string;
    header2: string;
    text1: any;
    text2?: any;
  },
}
export default class About extends Component<AboutProps> {
  render() {
    const icons = [javascriptIcon, typescriptIcon, reactIcon, pythonIcon];

    return (
      <StyledAbout>
        <div className='about'>
          <Icon icon={wavingHand} className="wave"/>
          <p>Nice to meet you, I'm </p>
          <h2>{this.props.aboutContent.name}</h2>
          <h3>{this.props.aboutContent.role}</h3>
            {icons.map((x) => (
              <Icon icon={x} />
            ))}
        </div>
        <br />
        <Overlay overlayContent={this.props.overlayContent}/>
        <div className="about-bottom" />
      </StyledAbout>
    );
  }
}

const StyledAbout = styled.div`
    background: ${Colors.experienceBlue};
    padding: 15% 0 0 0;
    margin-bottom: ${Margins.large};
    color: ${Colors.white};
    z-index: 1;
  }

  h3 {
    font-size: ${FontSizes.Large};
    color: ${Colors.white};
    margin: 0 ${Margins.Large} ${Margins.large} ${Margins.Large};
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
    height: 140px;
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