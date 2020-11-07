import styled from 'styled-components';
import fontSizes from '../../global';
import margins from '../../margins';

export const StyledAbout = styled.div`
  .grid-container > .about {
      grid-column: 2;
      grid-row: 2;
      color: #fff;
      padding: 18px 0px 18px 0px;
      margin-bottom: ${margins.medium};
  }

  .about > p {
    margin: 0 ${margins.large} 0 ${margins.large};
    text-align: justify;
  }

  h2 {
    font-size: ${fontSizes.Large};
  }

  h3 {
    font-size: ${fontSizes.medium};
    margin-bottom: ${margins.xsmall}; 
  }

`;

export default StyledAbout;