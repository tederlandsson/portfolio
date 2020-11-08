import { createGlobalStyle } from 'styled-components';
import { readBuilderProgram } from 'typescript';

export const FontSizes = {
  xsmall: '0.75em',
  small: '0.9em',
  medium: '1.0em',
  large: '1.25em',
  Large: '1.5em',
  huge: '2em',
};

export const Margins = {
  xsmall: '1%',
  small: '2%',
  medium: '3%',
  large: '5%',
  Large: '10%',
  huge: '15%',
};

export const Typography = {
  // Not implemented yet
  main: "'Avenir', Helvetica, Arial, sans-serif",
  secondary: "'Work Sans', sans-serif",
};

export const Colors = {
  white: '#fff',
  primary: '',
  secondary: '',
  dark: 'rgb(43,48,54)',
  darkContainerBackGround: 'rgb(35,108,74)',
  darkContainerGradient: 'linear-gradient(0deg, rgba(35,108,74,1) 0%, rgba(36,115,78,0.9962359943977591) 31%, rgba(37,155,100,1) 100%)',
  borderStroke: 'rgb(99, 99, 99, 0.25)',
  blueBackground: 'rgb(36, 22, 114)',
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
    font-weight: 400;
  }

  h2 {
    font-style: bold;
    font-size: ${FontSizes.large};
    font-weight: 500;
  }

  h3 {
    font-size: ${FontSizes.medium};
    margin-bottom: -2px
  }

  p {
    font-size: ${FontSizes.medium}};
    font-family: 'Work Sans', sans-serif;
  }

  .backgroundGradient {
    background: ${Colors.darkContainerBackGround};
    background: ${Colors.darkContainerGradient};
  }
`;