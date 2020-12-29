import React, { Component } from 'react';

// Theme
import { Margins, Colors, FontSizes, Typography } from '../../theme';
import styled from 'styled-components';

import { Icon } from '@iconify/react';

interface ExperienceItemProps {
  data: {
    header1: string;
    subHeader?: string;
    description: string;
    bottomHeader?: string;
    image?: string;
    imageAltText?: string,
    technologies: string[];
    icons?: Array<any>;
  }
}

class ExperienceItem extends Component<ExperienceItemProps> {
  render() {
    const content = this.props.data;

    return(
      <ExperienceItemStyling>
        <div className="experience-item">
          <div className="top-container">
            <h3 className="header">{content.header1}</h3>
            <p className="subHeader">{content.subHeader? content.subHeader : ''}</p>
            <p className="description">{content.description}</p>
            <img src={content.image} alt={content.imageAltText} className="image"/>
          </div>
          <div className="bottom-container">
            <h4 className="bottom-header">{content.bottomHeader ? content.bottomHeader : '' }</h4>
            <div className="icons">
              {content.icons?.map((x) => (
                <Icon icon={x} />
              ))}
            </div>
          </div>
        </div>
      </ExperienceItemStyling>
    );
  }
}

const ExperienceItemStyling = styled.div`
  .experience-item {
    margin: ${Margins.xsmall} 0 ${Margins.medium} 0;
    color: ${Colors.white};
    text-align: left;
  }

  .top-container {
    background-color: ${Colors.experienceBlue};
    padding: ${Margins.small} ${Margins.small} ${Margins.small} ${Margins.small};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .top-container > h3 {
    font-size: 20px;
    font-family: ${Typography.secondary};
  }

  .top-container > p {
    font-family: ${Typography.secondary};
    font-weight: 300%;
  }

  .description: {
    text-align: justify;
    text-justify: inter-word;
  }

  .description {
    padding: ${Margins.small} ${Margins.small} ${Margins.small} 0;
  }

  .bottom-container {
    margin: 0 0 ${Margins.large} 0;
    padding: 0 ${Margins.small} ${Margins.small} ${Margins.small};
    border: 2px ${Colors.experienceBlue} solid;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .subHeader {
    text-align: left;
    font-style: italic;
    color: ${Colors.experienceGray};
    font-size: ${FontSizes.medium};
    padding: ${Margins.xsmall} ${Margins.xsmall} ${Margins.xsmall} 0;
  }
  
  .bottom-header {
    margin-top: ${Margins.small};
    color: #000;
    font-family: ${Typography.secondary};
    font-size: 18px;
    font-weight: 600;
  }

  .icons > svg {
    font-size: 3em;
    margin: ${Margins.xsmall} ${Margins.xsmall} ${Margins.xsmall} ${Margins.xsmall};
    display: inline-block;
    border-radius: 12.5%;
    color: #000;
  }

  img {
    border-radius: 50%;
    max-width: 90px;
  }

`;


export default ExperienceItem;