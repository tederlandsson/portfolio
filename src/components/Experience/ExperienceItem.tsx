import React, { Component } from 'react';

// Theme
import { Margins, Colors, FontSizes, Typography } from '../../theme';
import styled from 'styled-components';
import isMobile from '../../../src/utils';
import { Icon } from '@iconify/react';

interface ExperienceItemProps {
  data: {
    header1: string;
    subHeader?: string;
    company?: string;
    description: string;
    bottomHeader?: string;
    image?: string;
    imageAltText?: string;
    ignoreRadius?: boolean,
    technologies: string[];
    icons?: Array<any>;
  }
}

class ExperienceItem extends Component<ExperienceItemProps> {
  render() {
    const content = this.props.data;

    return(
      <section className="section-contained">
        <ExperienceItemStyling>
          <div className="experience-item">
            <div className="top-container">
              <h3 className="header">{content.header1}</h3>
              <div className="grid-container">
              {content?.company && 
                 <>
                  <p className="company">{content.company}</p>
                </>
              }
              <p className="sub-header">{content.subHeader? content.subHeader : ''}</p>
              {content?.image &&
                <img src={content.image} alt={content.imageAltText} className="image"/>
              }
              <p className="description">{content.description}</p>
              </div>
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
      </section>
    );
  }
}

const ExperienceItemStyling = styled.div`
  .experience-item {
    margin: ${Margins.xsmall} auto auto auto;
    color: ${Colors.white};
    text-align: left;
  }

  .top-container {
    background-color: ${Colors.experienceBlue};
    padding: ${Margins.small} ${Margins.small} ${Margins.small} ${Margins.small};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 2;
  }

  .top-container h3 {
    font-size: 20px;
    font-family: ${Typography.secondary};
    margin-bottom: ${Margins.xsmall};
  }

  .description {
    padding: ${Margins.small} ${Margins.small} ${Margins.small} 0;
    margin-top: ${isMobile ? '-20px' : '-60px'};
  }

  .company {
    font-style: bold;
  }

  .sub-header {
    text-align: left;
    font-style: italic;
    color: ${Colors.experienceGray};
    font-size: ${FontSizes.medium};
    padding: ${Margins.xsmall} ${Margins.xsmall} ${Margins.medium} 0;
    grid-column: 1;
  }

  img {
    grid-column: 2;
    margin: auto auto auto auto;
    max-width: ${isMobile ? '60px' : '80px'};
  }

  .experience-item .image {
    border-radius: 50%;
  }

  .bottom-container {
    margin: 0 0 ${Margins.large} 0;
    padding: 0 ${Margins.small} ${Margins.small} ${Margins.small};
    border: 1px ${Colors.experienceBlue} solid;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .bottom-header {
    margin: ${Margins.small} 0 ${Margins.small} 0;
    color: #000;
    font-family: ${Typography.secondary};
    font-size: 18px;
    font-weight: 600;
  }

  .icons svg {
    margin: ${Margins.xsmall} ${Margins.xsmall} ${Margins.xsmall} ${Margins.xsmall};
    display: inline-block;
    border-radius: 12.5%;
    color: #000;
  }
`;

export default ExperienceItem;