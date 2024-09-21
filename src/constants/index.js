import { color } from "framer-motion";
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  company1,
  LeoaTech,
  skipq,
  Precise,
  viralLaunch,
  spaceX,
  food,
  ThriftOps,
  hulu,
  memorie,
  postgres,
  shopify,
  react,
  gitHub,
  sass,
  styled,
  CICD,
  vscode,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: react,
    tags: [
      "React.js",
      "Next.js",
      "HTML/CSS",
      "Material-UI",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Shopify App Development",
    icon: shopify,
    tags: [
      "Custom & Public Apps",
      "Shopify Polaris",
      "React-Node App ",
      "Shopify APIs",
    ],
  },
  {
    title: "PERN Stack Developement",
    icon: postgres,
    tags: ["PostgreSQL", "Express", "React.js", "Node.js", "Prisma ORM"],
  },
  {
    title: "MERN Stack Developement",
    icon: mongodb,
    tags: ["Mongo DB", "Express", "React.js", "Node.js", "Mongoose"],
  },
  {
    title: "Web Designing",
    icon: figma,
    tags: ["Figma to Code", "Responsive Design", "User Experience"],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GitHub",
    icon: gitHub,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "SCSS",
    icon: sass,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "CI/CD",
    icon: CICD,
  },
  // {
  //   name: "Styled Component",
  //   icon: styled,
  // },
];

const experiences = [
  {
    title: "FULL STACK DEVELOPER",
    company_name: "LeoaTech",
    icon: LeoaTech,
    iconBg: "#383E56",
    date: "December 2022 - Present",
    points: [
      `Engineered custom private and public Shopify apps using Node.js, Express.js, React.js, Shopify Polaris, and
PostgreSQL`,
      `Integrated Shopify services such as GraphQL Admin API, REST Admin API, GDPR webhooks, and Shopify
Billing API`,
      `Improved app performance through code splitting and lazy loading techniques, reducing bounce rates`,
      `Translated Figma designs into responsive, interactive user interfaces using React.js and Tailwind CSS`,
    ],
  },
  {
    title: "Trainee MERN STACK DEVELOPER",
    company_name: "SkipQ",
    icon: skipq,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Mar 2023",
    points: [
      "Completed Eight Weeks Problem Solving Training using DSA techniques to optimized solution with Space & Time Complexity ",
      "Complete Frontend Developement Course Assingments and Project using React.js, Bootstrap, Scss and Other modern frontend frameworks. ",
      "Build an express Server CRUD REST API and deployed it to AWS lambda using API gateway connecting to AWS-lambda function. ",
      "Participating in code reviews and providing constructive feedback to other trainees.",
    ],
  },
  {
    title: "FRONTEND DEVELOPER - INTERN",
    company_name: "DocSoft.ai",
    icon: company1,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Dec 2022",
    points: [
      `Enhanced user experience by developing and designing the frontend interface based on Figma designs`,
      ` Upgraded the dashboard UI features and functionality using React.js and Next.js`,
      `Integrated APIs and annotated data extracted from documents in collaboration with the back-end team`,
    ],
  },
  {
    title: "REACT.JS DEVELOPER - INTERN",
    company_name: "Precise Tech",
    icon: Precise,
    iconBg: "#383E56",
    date: "Mar 2022 - July 2022",
    points: [
      `Worked on a large-scale production app, enhancing skills in React.js and adopting advanced development
      techniques`,
      `Developed new features including data search and filtering in nested components, route protection based on
      authorization, and user data updates`,
      `Conducted end-to-end testing, debugged frontend issues, and managed JIRA tickets`,
      `Collaborated with a global, diversified team, enhancing teamwork and JavaScript proficiency.`,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Viral Launch",
    description:
      "Custom Shopify Application that aimed at enhancing email list building and customer engagement during product launches",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: viralLaunch,
    // source_code_link: "https://github.com/LeoaTech/XychrosPreLauncherUpdated",
    link: "https://apps.shopify.com/viral-launch?show_store_picker=1",
  },
  {
    name: "Thrift-Ops",
    description:
      "A web-based application, by translating figma design into responsive UI using React.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: ThriftOps,
  },

  {
    name: "Memories App",
    description:
      "Memories Application, where users can post their memories,view and like other's memories. User can edit and delete their memories",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "blue-text-gradient" },
    ],
    image: memorie,
    source_code_link: "https://github.com/komal-raza/memories-app",
    link: "https://memories-app-three.vercel.app/posts",
  },
  {
    name: "Space X Clone",
    description:
      "SpaceX Clone is a Web based Project that i built to learn HTML/ CSS and Javascript and deploy web site using github actions",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      { name: "github-actions", color: "green-text-gradient" },
    ],
    image: spaceX,
    source_code_link: "https://github.com/komal-raza/Space-X-Clone/",
    link: "https://komal-raza.github.io/Space-X-Clone/index.html",
  },
  {
    name: "Hulu Clone 1.0",
    description:
      "Hulu Clone 1.0 is a next.js application that display recent trending movies list. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      { name: "api-integration", color: "blue-text-gradient" },

      { name: "vercel", color: "green-text-gradient" },
    ],
    image: hulu,
    source_code_link: "https://github.com/raza-komal/Hulu-Next.js-app",
    link: "https://hulu-clone-black-psi.vercel.app/",
  },
  {
    name: "Restaurant Landing Page",
    description:
      "Designed a Website Landing Page using HTML, CSS and jQuery. This Project was a part of Web development Course on Udemy ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      { name: "jquery", color: "green-text-gradient" },
    ],
    image: food,
    source_code_link: "https://github.com/komal-raza/Dream-Cafe-main",
    link: "https://komal-raza.github.io/Dream-Cafe-main/",
  },
];

// https://github.com/raza-komal/BY-Shoo-App
// https://by-shooo.netlify.app/
export { services, technologies, experiences, testimonials, projects };
