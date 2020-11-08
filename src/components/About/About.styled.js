import styled from 'styled-components';
import { FontSizes, Margins } from '../../theme/';

export const StyledAbout = styled.div`
  .grid-container > .about {
      grid-column: 2;
      grid-row: 2;
      color: #fff;
      padding: 18px 0px 18px 0px;
      margin-bottom: ${Margins.medium};
  }

  .about > p {
    margin: 0 ${Margins.large} 0 ${Margins.large};
    text-align: justify;
  }

  h2 {
    font-size: ${FontSizes.Large};
  }

  h3 {
    font-size: ${FontSizes.large}
  }

`;

export default StyledAbout;