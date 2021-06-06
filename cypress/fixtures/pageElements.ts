
// Components
export const footer = '.footer';
export const about = '.about';
export const overlay = '.overlay';
export const experience = '.experience';
export const contact = '.contact';
export const banner = '.banner';
export const smallFrame = '.smallFrame';

export const components = [
  banner,
  footer,
  about,
  experience,
  contact,
  footer,
];

// Elements
export const icons = 'svg';

export const experienceElements = {
  component: experience,
  header: `${experience} h2`,
  experienceItem: '.experience-item',
  experienceItemHeader: '.experience-item .top-container h3',
  experienceItemText: '.experience-item .top-container p',
  experienceItemHeader2: '.experience-item .bottom-container h4',
  image: '.experience-item .top-container img',
};

export const bannerElements = {
  component: banner,
  text: `${banner} p`,
  link: `${banner} a`,
};

export const smallFrameElements = {
  component: smallFrame,
  icon: `${smallFrame} svg`,
  text: `${smallFrame} p`,
};

export const contactElements = {
  component: contact,
  header: `${contact} h2`,
  text: `${contact} p`,
  email: '[data-autoid="email"]',
  linkedin: '[data-autoid="linkedin"]',
  github: '[data-autoid="github"]',
}

export const aboutElements = {
  component: about,
  wave: '.wave',
  header: '.about h2',
  smallHeader: '.about h3',
  button: '.overlay-button',
  text: '.about > p',
  icons: '.about svg',
};

// Overlay
export const overlayElements = {
  component: overlay,
  overlayCloseButton: `${overlay} .close-button`,
  overlayHeader: `${overlay} h2`,
  overlaySubHeader: `${overlay} h3`,
  overlayText: `${overlay} p`,
};

// Footer
export const footerElements = {
  component: footer,
  text: `${footer} p`,
};

// page elements
export const elements = {
  aboutComponent: aboutElements.component,
  aboutWave: aboutElements.wave,
  aboutHeader: aboutElements.header,
  aboutSmallHeader: aboutElements.smallHeader,
  aboutButton: aboutElements.button,
  experienceComponent: experienceElements.component,
  experienceHeader: experienceElements.header,
  experienceItem: experienceElements.experienceItem,
  experienceItemheader: experienceElements.experienceItemHeader,
  experienceItemHeader2: experienceElements.experienceItemHeader2,
  experienceItemText: experienceElements.experienceItemText,
  contactComponent: contactElements.component,
  contactHeader: contactElements.header,
  contactText: contactElements.text,
  contactEmail: contactElements.email,
  contactLinkedIn: contactElements.linkedin,
  contactGithub: contactElements.github,
  bannerComponnet: banner,
  bannerText: bannerElements.text,
  bannerLink: bannerElements.link,
  footerComponent: footerElements.component,
  footerText: footerElements.text,
};