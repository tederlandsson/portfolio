import styled from 'styled-components';
import { FontSizes, Margins, Colors } from '../../theme/index';

export const StyledExperience = styled.div`
    margin: 0 ${Margins.large} ${Margins.medium} ${Margins.Large};
  }

  h2 {
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

  ul > li {
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