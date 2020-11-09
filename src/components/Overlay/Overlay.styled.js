import styled from 'styled-components';
import { Margins, Colors, FontSizes } from '../../theme';

export const StyledLearnMore = styled.div`
    
  .prompt {
    font-size: ${FontSizes.Large};
    font-style: bold;
    margin: 0 ${Margins.large} -3% ${Margins.large};
  }

  .prompt > i {
    font-weight: bold;
    overflow: hidden;
  }

  .overlay {
    color: ${Colors.white};
    background-color: ${Colors.blueBackground};
    border-top: 10px solid ${Colors.borderStroke};
    padding: ${Margins.medium} ${Margins.Large} ${Margins.Large} ${Margins.Large};
  }

  .overlay > h2 {
    color: ${Colors.white};
    font-weight: bold;
    text-align: left;
    margin-top: ${Margins.medium};
  }

  .overlay > p {
    text-align: justify;
  }

  .closeButton {
    position: right;
    text-style: italic;
    font-size: ${FontSizes.large};
    margin-bottom: ${Margins.medium};
  }
`;