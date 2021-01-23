import React from 'react';
import styled from 'styled-components';
import { Margins, Colors } from '../../theme/';

import { Icon } from '@iconify/react';
import githubFilled from '@iconify-icons/ant-design/github-filled';


const SmallFrame: React.FC = () => {
  return (
    <SmallFrameStyling>
      <div className="smallFrame">
          <Icon icon={githubFilled} />
          <p>github.com/tederlandsson</p>
      </div>
    </SmallFrameStyling>
);
}


const SmallFrameStyling = styled.div`
  background-color: ${Colors.blueBackground};
  margin-top: ${Margins.Large};
  color: ${Colors.white};

  .frame {
    margin: auto 50% auto 50%;
    width: 15em;
    background-color: ${Colors.white};
    border-radius: 6px;
  }

  svg {
    padding-top: ${Margins.large};
    font-size: 8em;
    position: center;
  }

  p {
    font-weight: bold;
  }
`;

export default SmallFrame;