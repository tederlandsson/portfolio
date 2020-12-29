import React, { Component } from 'react';

// Theme
import { Margins, Colors, FontSizes } from '../../theme';
import styled from 'styled-components';

import { Icon } from '@iconify/react';

interface ExperienceItemProps {
  data: {
    header1: string;
    subHeader?: string;
    description: string;
    bottomHeader?: string;
    image?: unknown;
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
            <h2 className="header">{content.header1}</h2>
            <p className="subHeader">{content.subHeader? content.subHeader : ''}</p>
            <p className="description">{content.description}</p>
            {/* <img className="image"></img> */}

          </div>
          <div className="bottom-container">
            <h3 className="bottom-header">{content.bottomHeader ? content.bottomHeader : '' }</h3>
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
    margin-bottom: ${Margins.xsmall} ${Margins.xsmall} ${Margins.xsmall} ${Margins.xsmall};
    color: ${Colors.white};
    text-align: left;
  }

  .top-container {
    background-color: ${Colors.experienceBlue};
    padding: ${Margins.small} ${Margins.small} ${Margins.small} ${Margins.small};
  }

  .description > p {
    padding: ${Margins.small} ${Margins.small} ${Margins.small} ${Margins.small};
  }

  .bottom-container {
    margin: 0 ${Margins.small} ${Margins.small} ${Margins.small};
    padding: 0 ${Margins.small} ${Margins.small} ${Margins.small};
    border: 2px ${Colors.experienceBlue} solid;
  }

  .header > h2 {
    font-size: 12px;
    font-weight: bold;
  }

  .subHeader {
    text-align: left;
    font-style: italic;
    color: #D6D6D6;
    font-size: 11px;
  }
  
  .bottom-header {
    color: #000;
    font-weight: bold;
  }

  .icons {
    font-size: 3em;
    margin: 12px 5px 24px 5px;
    display: inline-block;
    border-radius: 12.5%;
  }

  .image > img {
    border-radius: 50%;
  }

  .bottom-header > h3 {
    margin-top: ${Margins.large};
  }

`;


export default ExperienceItem;