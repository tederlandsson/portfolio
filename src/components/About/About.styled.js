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
    font-size: ${FontSizes.huge};
  }

  h3 {
    font-size: ${FontSizes.large}
  }

  .role {
    background-color: #f3f3f3;
    padding: ${Margins.huge} 0 ${Margins.huge} 0;
    margin-bottom: ${Margins.large};
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }

  .role > h3 {
    color: rgb(99, 99, 99);
    font-size: ${FontSizes.Large};
    margin: 0 ${Margins.Large} ${Margins.large} ${Margins.Large};
  }

  .lang-container {
    display: grid;
    grid-gap: 20px;
  }

  .lang-container:hover {
    font-size: ${FontSizes.huge};
    background-color: rgb(120, 197, 19);
  }

  .languages {
    display: inline-block;
    background-color: rgb(171, 243, 78);
    padding: ${Margins.xsmall} ${Margins.small} ${Margins.xsmall} ${Margins.small};
    font-weight: 600;

  }

  .languages > p {
    text-align: center;
  }
`;

export default StyledAbout;