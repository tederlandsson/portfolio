
// Components
export const wave = '.wave';
export const footer = '.footer';
export const about = '.about';
export const experience = '.experience';
export const contact = '.contact';


export const components = [
  wave,
  footer,
  about,
  experience,
  contact
];


// Elements
export const icons = 'div > .iconContainer > svg';

export const aboutElements = {
  component: '.about',
  wave: '.wave',
  header: '.about > h2',
  smallHeader: '.about > h3',
  text: '.about > p',
  // icons: '.about  > .iconContainer > svg',
};

// Overlay
export const overlayElements = {
  component: 'fixed bg-white top-0 left-0 w-full h-full shadow overlay',
  button: '.prompt > i',
  overlayCloseButton: '.closeButton',
  overlayHeaders: '.overlay > h2',
  overlayText: '.overlay > p',
};


export const elements = {
  ...aboutElements,
};