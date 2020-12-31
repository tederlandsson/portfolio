
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
export const icons = 'svg';


export const experienceElements = {
  component: experience,
  header: '.experience h2',
  experienceItem: '.experience-item',
  // experienceItemHeader: '.experience-item .top-container h2',
  // experienceItemText: '.experience-item .top-container p',
  // experienceItemHeader2: '.experience-item .bottom-container h3',
  // image: '.experience-item .top-container img',
};

export const contactElements = {
  component: '.contact',
  header: '.contact h2',
  text: '.contact p',
  email: '[data-autoid="email"]',
  linkedin: '[data-autoid="linkedin"]',
  github: '[data-autoid="github"]',
}

export const aboutElements = {
  component: '.about',
  wave: '.wave',
  header: '.about h2',
  smallHeader: '.about h3',
  button: '.overlay-button',
  // text: '.about > p',
  // icons: '.about svg',
};

// Overlay
export const overlayElements = {
  component: '.overlay',
  overlayCloseButton: '.overlay .close-button',
  overlayHeader: '.overlay h2',
  overlaySubHeader: '.overlay h3',
  // overlayText: '.overlay p',
};


export const elements = {
  ...aboutElements,
  // ...experienceElements,
  ...contactElements,
};