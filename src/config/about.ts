interface AboutProps {
  name: string;
  role: string;
};

export const AboutContent: AboutProps = {
  name: 'Ted',
  role: 'Quality assurance engineer, software test lead',
}


export const OverlayContent = {
  header1: 'About me',
  header2: 'Technologies I work with',
  text1: [
    "Five years experience in software testing–from manual testing to test automation to test leading on big and small projects.",
    "I excel at working independently and love working closely with developers to refine products and solve problems.",
  ],
  text2: [
    "When I'm not working, I like to stay active as a recreational swimmer and long-distance runner.",
  ],
}

interface ContactInfoProps {
  data: {
    email: string;
    linkedin: string;
    github: string;
  },
};

export const ContactInfo: ContactInfoProps = {
  data: {
    email: 'mailto:tederlandsson@gmail.com',
    linkedin: 'https://www.linkedin.com/in/tederlandsson',
    github: 'https://github.com/tederlandsson/',
  },
};

interface FooterProps {
  data: {
    name: string;
    poweredBy: string;
    fontsUsed: string;
    tests: string;
    lastUpdated: string;
  },
};

export const FooterContent: FooterProps = {
  data: {
    name: 'Ted Erlandsson',
    poweredBy: 'Powered by Github pages & React',
    fontsUsed: 'Avenir, Work Sans',
    tests: 'cypress.io',
    lastUpdated: 'Jan. 03',
  },
}
  