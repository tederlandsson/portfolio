import React from 'react';
import { ContactInfo } from '../../config/about';

// Theme
import styled from 'styled-components';
import {  Margins, Typography } from '../../theme/';

import { Icon } from '@iconify/react';
import emailIcon from '@iconify-icons/carbon/email';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled';


const Contact: React.FC = () => {
  return (
    <StyledContact>
      <div className="contact">
        <h2 className="component-header">Contact</h2>
        <ul className="no-bullets">
          <p>Let's get in touch. Here's how:</p>
          < br/>
          <li data-autoid="email">
            Drop me an <a href={ContactInfo.email}>email</a>
            <Icon icon={emailIcon} />
          </li>
          <br />
          <li data-autoid="linkedin" className="linkedin">
            Message me on <a href={ContactInfo.linkedin}>LinkedIn</a>
            <br />
            <Icon icon={linkedinFilled} />
          </li>
          
          <br />
          <li data-autoid="github">
            Find me on <a href={ContactInfo.github}>Github</a>
            <Icon icon={githubFilled}/>
          </li>
          
        </ul>  
      </div>
    </StyledContact>
  );
}
  

const StyledContact = styled.div`
    margin-bottom: ${Margins.huge};
  }

  a {
    color: rgb(89, 12, 177);
    font-weight: 500;
  }

  
  li, p {
    font-family: ${Typography.secondary};
    font-weight: 300;
  }

  svg {
    font-size: 3em;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Contact;