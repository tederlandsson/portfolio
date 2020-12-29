import React from 'react';
import styled from 'styled-components';

import ExperienceItem from './ExperienceItem';
import { FontSizes, Margins } from '../../theme/index';

import experienceContent from '../../config/experience';

const Experience: React.FC = () => {
  return (
    <StyledExperience>
      <div className="experience">
        <h2>Experience</h2>
        {experienceContent.map((x) => (
          <ExperienceItem data={x} />
        ))}
      </div>
    </StyledExperience>
  );
}

const StyledExperience = styled.div`
    margin: 0 ${Margins.large} ${Margins.medium} ${Margins.Large};
  }

  .experience > h2 {
    font-size: ${FontSizes.huge};
    margin-bottom: ${Margins.small};
  }

  ul {
    margin-bottom: ${Margins.large};
  }

  b {
    font-size: ${FontSizes.large};
    margin-bottom: ${Margins.medium};
  }

  .company {
    font-weight: bold;
  }

  .company,
  .dates {
    margin: ${Margins.medium} 0 ${Margins.small} 0;
    font-size: ${FontSizes.medium}
  }

  .logoWrapper {
    width: 10%;
    height: auto;
    position: center;
    margin: 24px auto 24px auto;
  }

  .logoWrapper > img {
    border-radius: 50%
  } 
`;

export default Experience;