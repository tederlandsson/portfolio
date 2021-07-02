import React from 'react';

// Theme
import styled from 'styled-components';
import {  Margins } from '../../theme/';

import { Icon } from '@iconify/react';
import emailIcon from '@iconify-icons/carbon/email';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled';


type ContactProps = Readonly<{
  data: {
    text: string,
    email: string;
    linkedin: string;
    github: string;
  };
}>;

const Contact: React.FC<ContactProps> = (
  content
) => {
  const {
    data: {
      text,
      email,
      linkedin,
      github,
    }
  } = content;
    
  return (
    <section className="section-contained">
      <StyledContact>
        <div className="contact">
          <h2 className="component-header">Contact</h2>
          <ul className="no-bullets">
            <p>{text}</p>
            < br/>
            <li data-autoid="email">
              <Icon icon={emailIcon} />
              <a href={email}>Email</a>
            </li>
            <br />
            <li data-autoid="linkedin">
              <Icon icon={linkedinFilled} />
              <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            
            <br />
            <li data-autoid="github">
              <Icon icon={githubFilled}/>
              <a href={github} target="_blank" rel="noopener noreferrer">Github</a>
              <br />
            </li>
            
          </ul>  
        </div>
      </StyledContact>
    </section>
  );
};


const StyledContact = styled.div`
    margin-bottom: ${Margins.huge};
  }

  li, p {
    font-weight: 300;
  }

  svg {
    font-size: 5em;
  }
`;

export default Contact;