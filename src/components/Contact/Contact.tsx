import React from 'react';
import StyledContact from './Contact.styled';
import { ContactInfo } from '../../config/about';

import { Icon } from '@iconify/react';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled';

const Contact: React.FC = () => {
  return (
    <StyledContact>
      <div className="contact">
        <h2>Contact</h2>
        <ul className="no-bullets">
          <p>Let's get in touch. Here's how to find me</p>
          <li>
            Drop me an email at <br />{ContactInfo.email}
          </li>
          <br />
          <li>
            Find me on LinkedIn: <br /> <a href="https://www.linkedin.com/in/tederlandsson">{ContactInfo.linkedin}</a>
            <Icon icon={linkedinFilled} />
          </li>
          
          <br />
          <li>
            Find me on Github:<br /> <a href="https://www.github.com">{ContactInfo.github}</a>
            <Icon icon={githubFilled}/>
          </li>
          
        </ul>  
      </div>
    </StyledContact>
  );
}
  
export default Contact;