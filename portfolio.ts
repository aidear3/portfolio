import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'aidear',
  title: "Hi all, I'm Javorko Cvokic",
  description:
    "I'm an experienced full stack developer with a passion for creating robust and scalable web and mobile applications. With a strong background in both front-end and back-end development, I specialize in building user-friendly interfaces and implementing complex functionalities. I have a proven track record of delivering high-quality projects on time and within budget. Let's collaborate and bring your ideas to life!",
  resumeLink:
    'https://docs.google.com/document/d/1ckoCwuWDHehRqO7qUo6c2i9aCmTiYoz6YTyBoqpiIVk/edit',
};

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://aidear.network',
  linkedin: 'https://www.linkedin.com/in/javorko-cvokic-6b8b49272/',
  github: 'https://github.com/aidear323',
  instagram: 'https://www.instagram.com/__hanzla100',
  facebook: 'https://www.facebook.com/1hanzla100',
  skype: 'https://join.skype.com/invite/uCd7VUTAmsto',
  telegram: 'https://t.me/aidear323',
  gmail: 'javsfdev323@gmail.com',
  whatsapp: 'https://wa.me/19496078876',
  twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Front-end Development: JavaScript, React, Angular, Vue.js'
        ),
        emoji('⚡ Back-end Development: Node.js, Express.js, Laravel, Python'),
        emoji('⚡ Database Management: MySQL, MongoDB, PostgreSQL'),
        emoji('⚡ Mobile App Development: React Native, Flutter'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Project Manager',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Version Control: Git, GitHub, Bitbucket'),
        emoji(
          '⚡ Deployment: AWS, Heroku, Firebase'
        ),
        emoji(
          '⚡ Testing and Debugging: Jest, Mocha, Chai, Selenium'
        ),
        emoji(
          '⚡ Project Management: Agile, Scrum'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          iconifyTag: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University of Novi Sad',
    subHeader: "Bachelor's in Software Engineering and Information Technologies",
    duration: 'September 2012 - April 2016',
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Grade A',
    descBullets: [
      'Software Engineering',
      'Information Technologies',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Smart Contract & Front End Developer',
    company: 'Ragratz ',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9ykm3TAv8pRzCoujlq9m1tePwDRpykf1bxzBc2HbChK2QG8VxRfYG7aPCPdCEduxQG0&usqp=CAU',
    date: 'Nov 2022 – Mar 2023',
    desc: 'Developed Onchain-Offchain Combination Project on Terra platform. Supporting users with simple actions to get incentive earnings with high APY, and transfer fund from bank account to Blockchain with One - Click. Developed Defi Project on BSC platform.Wrote contracts for Dex, Staking, Lottery and Bridge, and worked with Audit company for releasing project to world. Developed Launchpad contract and UI and worked with Token Sellers and Marketing Managers.',
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Pawoo',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNl9iNqtnRvuWQfHx4liFs-Is0Xdac9Jkj7zsvvYVT&s',
    date: 'Mar 2022 – Aug 2022',
    desc: "As a project manager, developed a dashboard that makes project management easier and accurately evaluates the results of each developer. Built many websites using React, Redux, Node.js, MongoDB. Improved SQL Server performance with stored procedure refactors and new constraints and indexes. Development of Electron App and Used Next.js and Nuxt.js - Web Hosting to AWS / Azure. Design and Create RESTful Web APIs and Integrate with Front-end.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'FastSwap',
    companyLogo: 'https://s2.coinmarketcap.com/static/img/coins/200x200/8087.png',
    date: 'Feb 2021 - May 2021',
    desc: 'Investigate and implement new design patterns, professional front-end architecture, high-quality performance and security using SPA JavaScript Frameworks - React/Next.js, Vue/Nuxt.js and Angular. Combine SSR (Server Side Rendering) and SSG (Static Site Generating) and improved performance using Next.js. Adapting designing pattern to business needs.',
  },
  {
    role: 'Front-end Developer',
    company: 'Privi',
    companyLogo: 'data:image/png;base64,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',
    date: 'Feb 2017 - Jan 2019',
    desc: 'Implemented Single Page Application (SPA) architecture and client side MVC using ReactJS. Used Bootstrap features such as model objects, Tabs, Tooltips, Carousals throughout the application. Implemented components and wire-frames using cross-browser compatible CSS, TypeScript, jQuery and AJAX, React JS. Developed many mobile apps using React Native, Flutter and Firebase.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Multi-chain NFT Network',
    desc: 'Next.js, Solidity, Git, PostgreSQL',
    link: 'https://ternoa.com',
  },
  {
    name: 'Artist Landing Page',
    desc: 'Vue.js, Node.js, MySQL , Sequelize ORM, Stripe 3',
    link: 'https://www.musicisvivid.com',
  },
  {
    name: 'Shmacked',
    desc: 'Next.js, Payment Integration, Bootstrap, AWS',
    link: 'https://shmacked.com',
  },
  {
    name: 'Plasma Finance',
    desc: 'Vue.js, Tailwind CSS, Git, Trello, Web3',
    link: 'https://plasma.finance',
  },
  {
    name: 'Unifified communications',
    desc: 'Node.js, Vue.js, Socket.io, jQuery3.5.1, Bootstraps, Ngnix',
    link: 'https://clientain.com',
  },
  {
    name: 'Ask Me Anything',
    desc: 'React Native, ChatGPT, OpenAI, Figma',
    link: 'https://apps.apple.com/us/app/ask-me-anything-ai-writer/id1667766826?platform=ipad',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Lauren R.',
    feedback:
      "Javorko Cvokic's work on my website's quote form was simply outstanding. He displayed impressive knowledge and skills, delivering the project with incredible speed and staying well within my budget. I couldn't have asked for a better experience.",
  },
  {
    name: 'Hamed E.',
    feedback:
      'Javorko Cvokic has been a pleasure to work with. He was very timely and communicative and is very efficient with his work flow. Would definitely recommend for straight forward projects, and we will personally be working with Javorko Cvokic again in the future.',
  },
  {
    name: 'Ali Houssein R.',
    feedback:
      "Collaborating with them has been instrumental in turning my dream startup into reality. Throughout the project, they provided unwavering support, being present at every crucial stage.",
  },
  {
    name: 'Stefan L.',
    feedback:
      "Javorko Cvokic did a very good job. He completed the Project on time and in budget. He understood the requirements very well and helped us in developing a smart WordPress plug-in. I highly recommend his work.",
  },
  {
    name: 'Dana E.',
    feedback:
      "He completed a job that others turned down as being to difficult. He did it quickly and with skill.",
  },
  {
    name: 'Sherwin G.',
    feedback:
      "Excellent work ethic. We are building a unique solution from scratch and they have been marvelous.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'aidear',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'aidear',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Hanzla',
    'Hanzla Tauqeer',
    '@1hanzla100',
    '1hanzla100',
    'Portfolio',
    'Hanzla Portfolio ',
    'Hanzla Tauqeer Portfolio',
  ],
};
