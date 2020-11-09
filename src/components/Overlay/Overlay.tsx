import React, { useState } from 'react';
import { StyledLearnMore } from './Overlay.styled';
import { isDesktop } from '../../utils';

function LearnMore(content: any) {
  const [showAboutMe, setShowAboutMe] = useState(false)
  
  let overlay
  if (showAboutMe) {
    overlay = 
    <div className="fixed bg-white top-0 left-0 w-full h-full shadow overlay">
      <button className="closeButton border-b-2">{isDesktop ? 'Click' : 'Press'} anywhere to close</button>
      {content.data.header1 && (
        <>
          <h2>{content.data.header1} I'm {content.data.name}</h2>
          <br />
        </>
      )}
      {content.data.text.map((x: string[]) => (
        <p>{x}<br /></p>
      ))}
      {content.data.header2 && (
        <>
          <h2>{content.data.header2}</h2>
          <br />
        </>
      )}
      {content.data.text2 && content.data.text2.map((x: string[]) => (
        <p>{x}<br /></p>
      ))}
    </div>
  } else {
    overlay = 
    <p className="prompt">{isDesktop ? 'Click' : 'Press'} here to learn more <br /><i>about me</i></p>
  }

  return (
    <StyledLearnMore>
      <p className="learnMoreLink"
        onClick={() => setShowAboutMe(!showAboutMe)}
      >{overlay}</p>
    </StyledLearnMore>
  )
}

export default LearnMore;