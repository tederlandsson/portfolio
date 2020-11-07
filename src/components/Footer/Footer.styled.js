import styled from 'styled-components';
import fontSizes from '../../global';

const StyledFooter = styled.div`
    border-top: 1px solid;
    padding: 2.5% 2.5% 2.5% 2.5%;
    justify-content: left;
    color: #fff;
  }

  .footer > p {
    font-size: ${fontSizes.medium};
  }
`;

export default StyledFooter;