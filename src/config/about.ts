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
    text: string;
    email: string;
    linkedin: string;
    github: string;
  },
};

export const ContactInfo: ContactInfoProps = {
  data: {
    text: "Interested in working together? Let's get in touch. Here's how:",
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
    "I am experienced in both UI and API testing, as well as performance testing of REST APIs and web applications.",
    "I excel at working independently and love working closely with developers to refine products and solve problems.",
  ],
  text2: [
    "When I'm not working, I like to stay active as a recreational swimmer and long-distance runner.",
  ],
}

type FooterProps = {
  data: {
    name: string;
    poweredBy: string;
    fontsUsed: string;
    tests: string;
    lastUpdated?: string;
  },
};

export const FooterContent: FooterProps = {
  data: {
    name: 'Ted Erlandsson',
    poweredBy: 'Powered by Github pages & React',
    fontsUsed: 'Avenir, Work Sans',
    tests: 'cypress.io',
  },
};

interface BannerContentProps {
  text: string;
  url?: string;
  linkText?: string;
}

export const BannerContent: BannerContentProps = {
  text: 'Find page source on ',
  url: `${ContactInfo.data.github}portfolio`,
  linkText: 'Github',
};