import React from 'react';
import styled from 'styled-components';

import ExperienceItem from './ExperienceItem';
import { Margins } from '../../theme/index';

import experienceContent from '../../config/experience';

const Experience: React.FC = () => {
  return (
    <StyledExperience>
      <div className="experience">
        <h2 className="component-header">Experience</h2>
        {experienceContent.map((x) => (
          <ExperienceItem data={x} />
        ))}
      </div>
    </StyledExperience>
  );
}

const StyledExperience = styled.div`
    margin: 0 ${Margins.large} ${Margins.huge} ${Margins.large};
  }
`;

export default Experience;