import styled from 'styled-components';
import { FontSizes, Margins, Colors } from '../../theme/';

export const StyledAbout = styled.div`
    background-color: ${Colors.blueBackground};
    padding: 60% 0 30% 0;
    margin-bottom: ${Margins.large};
    border-top: 1px solid rgb(99, 99, 99, 0.25);
    border-bottom: 1px solid rgb(99, 99, 99, 0.25);
    color: ${Colors.white};
  }

  h2 {
    font-size: ${FontSizes.huge};
    font-weight: bold;
  }

  h3 {
    font-size: ${FontSizes.Large};
    color: #f3f3f3;
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
    color: black;
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
    text-decoration: underline;
  }

  .iconContainer > svg {
    font-size: 3em;
    margin: 12px 5px 24px 5px;
    display: inline-block;
    border-radius: 12.5%;
  }
`;

export default StyledAbout;