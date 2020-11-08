import styled from 'styled-components';
import { FontSizes, Margins } from '../../theme/index';

export const StyledExperience = styled.div`
    margin: 0 ${Margins.large} ${Margins.medium} ${Margins.large};
  }

  h2 {
    font-size: ${FontSizes.Large};
    margin-bottom: ${Margins.small};
  }

  ul {
    margin-bottom: ${Margins.large};
  }

  b {
    font-size: ${FontSizes.large};
    margin-bottom: ${Margins.medium};
  }

  ul > li {
  }

  .company,
  .dates {
    margin: ${Margins.small} 0 ${Margins.small} 0;
  }
`;