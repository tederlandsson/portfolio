interface AboutProps {
  name: string;
  role: string;
  portfolioUrl?: string,
};

export const AboutContent: AboutProps = {
  name: 'Ted',
  role: 'Quality assurance engineer, software test lead',
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


export const OverlayContent = {
  header1: 'About me',
  header2: 'Technologies I work with',
  text1: [
    "Five years experience in software testing–from manual testing to test automation to test leading on big and small projects.",
    "While I am currently working primarily with UI test automation, I am also experienced with API testing, as well as performance testing of REST APIs and web applications.",
    "I excel at working independently and love working closely with developers to refine products and solve problems.",
  ],
  text2: [
    "When I'm not working, I like to stay active as a recreational swimmer and long-distance runner.",
  ],
  portfolioUrl: `${ContactInfo.data.github}portfolio`,
}

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
    lastUpdated: 'Jan. 06',
  },
}
  