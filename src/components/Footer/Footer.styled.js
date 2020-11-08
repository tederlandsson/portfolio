import styled from 'styled-components';
import { FontSizes, Colors } from '../../theme';

const StyledFooter = styled.div`
    border-top: 1px solid;
    padding: 2.5% 2.5% 2.5% 2.5%;
    justify-content: left;
    color: ${Colors.white};
    background: ${Colors.darkContainerGradient};
    
  }

  .footer > p {
    font-size: ${FontSizes.medium};
  }
`;

export default StyledFooter;