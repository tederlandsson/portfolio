import styled from 'styled-components';
import { Margins, Colors, FontSizes } from '../../theme';

export const StyledLearnMore = styled.div`
    
  .prompt {
    font-size: ${FontSizes.Large};
    font-style: bold;
  }

  .overlay {
    position: fixed;
    color: ${Colors.white};
  }

  .overlay {
    background-color: ${Colors.blueBackground};
    border-top: 10px solid ${Colors.borderStroke};
    padding: ${Margins.medium} ${Margins.Large} ${Margins.Large} ${Margins.Large};
  }

  .overlay > h2 {
    color: ${Colors.white};
  }

  .closeButton {
    position: right;
    text-style: italic;
    font-size: ${FontSizes.large};
    margin-bottom: ${Margins.medium};
  }
`;