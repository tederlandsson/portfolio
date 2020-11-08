import styled from 'styled-components';
import { FontSizes, Margins, Colors } from '../../theme/';

export const StyledAbout = styled.div`
    background-color: ${Colors.darkContainerBackGround};
    padding: ${Margins.huge} 0 ${Margins.Large} 0;
    margin-bottom: ${Margins.large};
    border-top: 1px solid rgb(99, 99, 99, 0.25);
    border-bottom: 1px solid rgb(99, 99, 99, 0.25);
    background-color: #f3f3f3;
  }

  h2 {
    color: black;
    font-size: ${FontSizes.huge};
  }

  h3 {
    font-size: ${FontSizes.Large};
    color: rgb(99, 99, 99);
    margin: 0 ${Margins.Large} ${Margins.large} ${Margins.Large};
  }

  .lang-container {
    position: center;
    display: inline-block;
    width: 30%;
    margin: 0 ${Margins.medium} 10px ${Margins.medium};
  }

  .lang {
    display: grid;
    grid-template-columns: 4;
    background-color: rgba(233, 229, 3);
    padding: ${Margins.smalll} ${Margins.small} ${Margins.small} ${Margins.small};
    font-weight: 600;
    border: 1px solid rgb(99, 99, 99, 0.25);
  }

  .lang:hover {
    font-size: ${FontSizes.Large};
    box-shadow: 10px 10px 0px 0px rgba(105, 103, 7, 0.8);
    margin: 0 0 ${Margins.large} 0;
  }

  .learnMoreLink {
    margin-top: ${Margins.large};
  }

  .learnMoreLink > i {
    font-weight: bold;
  }
`;

export default StyledAbout;