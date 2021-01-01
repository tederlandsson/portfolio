import React, { Component } from 'react';

// Theme
import styled from 'styled-components';
import {  Margins } from '../../theme/';
import utils from '../../utils/index';

import { Icon } from '@iconify/react';
import emailIcon from '@iconify-icons/carbon/email';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled';


interface ContactProps {
  content: {
    email: string;
    linkedin: string;
    github: string;
  };
}
export default class Contact extends Component<ContactProps> {
  render() {
    return (
      <section className="section-contained">
        <StyledContact>
          <div className="contact">
            <h2 className="component-header">Contact</h2>
            <ul className="no-bullets">
              <p>Let's get in touch. Here's how:</p>
              < br/>
              <li data-autoid="email">
                <Icon icon={emailIcon} />
                <a href={this.props.content.email}>Email</a>
              </li>
              <br />
              <li data-autoid="linkedin" className="linkedin">
                <Icon icon={linkedinFilled} />
                <a href={this.props.content.linkedin}>LinkedIn</a>
              </li>
              
              <br />
              <li data-autoid="github">
                <Icon icon={githubFilled}/>
                <a href={this.props.content.github}>Github</a>
                <br />
              </li>
              
            </ul>  
          </div>
        </StyledContact>
      </section>
    );
  }
}
  

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
