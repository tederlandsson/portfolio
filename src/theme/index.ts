import { createGlobalStyle } from 'styled-components';
import { isDesktop } from '../utils/index';

interface ThemeBreakpointsProps {
  onlyMobile: string;
  aboveMobile: string;
  untilDesktop: string;
  fromDesktop: string;
}

export const ThemeBreakpoints: ThemeBreakpointsProps = {
  onlyMobile: '@media (max-width: 479px)',
  aboveMobile: '@media (max-width: 479px)',
  untilDesktop: '@media (max-width: 1023px)',
  fromDesktop: '@media (max-width: 1024px)',
};

export const FontSizes = {
  xsmall: '0.75em',
  small: '0.9em',
  medium: '1.0em',
  large: '1.25em',
  Large: '1.5em',
  huge: '2em',
};

export const Margins = {
  xsmall: '6px',
  small: '12px',
  medium: '18px',
  large: '24px',
  Large: '36px',
  huge: '64px',
  Huge: '128px',
};

export const Typography = {
  main: "'Avenir', Helvetica, Arial, sans-serif",
  secondary: "'Work Sans', sans-serif",
};

// Use this tool for color: 
// https://www.color-blindness.com/color-name-hue/
export const Colors = {
  white: '#fff',
  black: '#000',
  blueGradientBackGround: 'rgb(15,15,89)',
  blueGradient: 'linear-gradient(0deg, rgba(15,15,89,1) 0%, rgba(36,22,114,1) 100%)',
  borderStroke: 'rgb(99, 99, 99, 0.25)',
  blueBackground: 'rgb(36, 22, 114)',  
  experienceBlue: '#241672',
  experienceGray: '#d6d6d6',
  linkColor: 'rgb(89, 12, 177)',
  buttonHover: '#e0e000',
  aqua: '#00F7F3',
};


export const GlobalStyles = createGlobalStyle`
  html {
    overflow-x: hidden;
    font-family: ${Typography.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    display: grid;
  }
  body::before {
    pointer-events: none;
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.18;
    background-size: 50px 50px;
    background-image: linear-gradient(
        transparent 0%,
        transparent 98%,
      ),
      linear-gradient(
        90deg,
        transparent 0%,
        transparent 98%,
      );
  }

  .main {
    height: 100%;
    width: 100%;
    text-align: center;
  }

  .grid-container {
    display: grid;
  }
  
  .no-bullets {
    list-style-type: none;
    padding: 0 5% 0 5%;
    font-family: ${Typography.secondary};
  }

  h1 {
    font-size: ${FontSizes.huge};
    font-family: 'Avenir', 'sans-serif';
    font-weight: 600;
    margin-bottom: ${Margins.medium};
  }

  h2 {
    font-family: ${Typography.secondary};
    font-size: ${FontSizes.huge};
    font-weight: 600;
    margin-bottom: ${Margins.medium};
  }

  h3 {
    font-size: ${FontSizes.medium};
    margin-bottom: -2px
  }

  li, p {
    font-size: ${FontSizes.medium}};
    font-family: ${Typography.secondary};
    font-weight: 300;
  }

  a {
    color: ${Colors.linkColor};
    font-weight: 500;
  }

  svg {
    font-size: 3em;
    margin-left: auto;
    margin-right: auto;
  }

  .section-contained {
    width: ${isDesktop ? '50%' : '100%'};
    margin: auto;
    margin-bottom: ${Margins.medium};
    max-width: 1400px;
    position: center;
  }
`;