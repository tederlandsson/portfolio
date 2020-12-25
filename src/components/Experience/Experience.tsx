import React, { Component } from 'react';
import styled from 'styled-components';
import { FontSizes, Margins } from '../../theme/index';
import content from '../../config/experience';
import vcc_logo from '../../assets/vcc_logo.png';
import acando_logo from '../../assets/acando_logo.png';

export default class Experience extends Component {
  render() {
    const experience = [content.volvo, content.acando, content.scancoin];
    const logos = [vcc_logo, acando_logo, acando_logo];

    return (
      <StyledExperience>
        <div className="experience">
          <h2>Experience</h2>
          
          {experience.map((x, index) => (
            <>
              <b>{x.role}</b>
              <p className="company">{x.company}</p>
              <div className="logoWrapper">
                <img src={logos[index]} alt={x.companyAltText} />
              </div>
              <p className="dates">{x.started}–{x.ended}</p>   
              <ul>
                {x.tasks.map((x) => (
                  <li>{x}</li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </StyledExperience>
    );
  }
}

const StyledExperience = styled.div`
    margin: 0 ${Margins.large} ${Margins.medium} ${Margins.Large};
  }

  h2 {
    font-size: ${FontSizes.huge};
    margin-bottom: ${Margins.small};
  }

  ul {
    margin-bottom: ${Margins.large};
  }

  b {
    font-size: ${FontSizes.large};
    margin-bottom: ${Margins.medium};
  }

  .company {
    font-weight: bold;
  }

  .company,
  .dates {
    margin: ${Margins.medium} 0 ${Margins.small} 0;
    font-size: ${FontSizes.medium}
  }

  .logoWrapper {
    width: 10%;
    height: auto;
    position: center;
    margin: 24px auto 24px auto;
  }

  .logoWrapper > img {
    border-radius: 50%
  } 
`;