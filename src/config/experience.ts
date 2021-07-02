// Icons
import pythonIcon from '@iconify-icons/logos/python';
import javascriptIcon from '@iconify-icons/logos/javascript';
import typescriptIcon from '@iconify-icons/logos/typescript-icon';
import reactIcon from '@iconify-icons/logos/react';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import fileTypeAzurepipelines from '@iconify-icons/vscode-icons/file-type-azurepipelines';
import nodeIcon from '@iconify-icons/fa-brands/node';
import fileTypeYarn from '@iconify-icons/vscode-icons/file-type-yarn';
import browserstackIcon from '@iconify-icons/logos/browserstack';
import postmanIcon from '@iconify-icons/logos/postman';
import jiraIcon from '@iconify-icons/logos/jira';
import confluenceIcon from '@iconify-icons/logos/confluence';
import bitbucketIcon from '@iconify-icons/logos/bitbucket';
import bambooIcon from '@iconify-icons/logos/bamboo';


// images
import vcc_logo from '../assets/vcc_logo.png';
import acando_logo from '../assets/acando_logo.jpg';
import sc_logo from '../assets/scan_coin_logo.jpg';

const experienceContent = [
  {
    header1: 'Quality assurance engineer',
    subHeader: '2019–present',
    company: 'Volvo Car Corporation',
    description: [
      'Front end test automation for React components and web pages using JavaScript.',
      'Implemented test utilites into the official Volvo Cars test framework.'
    ],
    bottomHeader: 'Technologies used',
    image: vcc_logo,
    ignoreRadius: true,
    imageAltText: 'Volvo Car Corporation company logo',
    technologies: ['JavaScript', 'TypeScript', 'WebdriverIO', 'Azure DevOps'],
    icons: [javascriptIcon, typescriptIcon, reactIcon, fileTypeYarn, nodeIcon, browserstackIcon, githubFilled, fileTypeAzurepipelines],
  },
  {
    header1: 'Software test lead',
    subHeader: '2017–2019',
    company: 'Acando Consulting',
    description: [
      'Consultant at Volvo Car Corporation.',
      'End-to-end test leading for an e-commerce platform that sells car and car accessories.'
    ],
    bottomHeader: 'Technologies used',
    image: acando_logo,
    ignoreRadius: false,
    imageAltText: 'Acando consulting company logo',
    technologies: ['JavaScript', 'TypeScript', 'WebdriverIO', 'Azure DevOps'],
    icons: [postmanIcon, jiraIcon, confluenceIcon, pythonIcon],
  },
  {
    header1: 'Quality assurance manager',
    subHeader: '2016–2017',
    company: 'SCAN COIN AB',
    description: ['Developed and maintained test strategies for new and existing ongoing projects.'],
    bottomHeader: 'Technologies used',
    image: sc_logo,
    ignoreRadius: false,
    imageAltText: 'SCAN COIN company logo',
    technologies: ['JavaScript', 'TypeScript', 'WebdriverIO', 'Azure DevOps'],
    icons: [postmanIcon, jiraIcon, confluenceIcon, bitbucketIcon, bambooIcon],
  }
];

export default experienceContent;