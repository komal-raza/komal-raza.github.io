import {
  mobile,
  backend,
  creator,
  web,
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
  docker,
  company1,
  LeoaTech,
  skipq,
  Precise,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "PostgreSQL",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Leoa Tech",
    icon: LeoaTech,
    iconBg: "#383E56",
    date: "December 2022 - Present",
    points: [
      "Created the Shopify Merchant app from scratch using reusable React components and advanced front-end libraries.",
      "Managed client-side data efficiently by incorporating the Redux toolkit as a State Management Library.",
      `Developed Backend server and REST API Routes with Node.js and Express.js, integrating API functionality on the client side using
      React-query.`,
      `Ensured secure API request verification from both the Shopify Store and Merchant Store by implementing an
      authentication middleware with Shopify Admin API for Oauth.`,
      "Streamlined client subscription plans and payment methods by integrating the Shopify billing API.",
      `Established a smooth connection between the backend server and PostgreSQL database for efficient data storage and
      retrieval`,
    ],
  },
  {
    title: "Mern stack Trainee",
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
    title: "Frontend Developer",
    company_name: "DocSoft.ai",
    icon: company1,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Dec 2022",
    points: [
      `Contributed to the development of AI Saas Product app and design and development website with an advanced
      modern framework for a better User Experience.`,
      "Updated Admin dashboard to improve user interface and add new functionality and routes using Next.js routing.",
      "Collaborated with backend developer to Integrate APIs and annotate data extracted from the documents.",
      "Completed 3-month project contract along with mentorship to understand workflow and industry standard",
    ],
  },
  {
    title: "React Developer",
    company_name: "Precise Tech",
    icon: Precise,
    iconBg: "#383E56",
    date: "Mar 2022 - July 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      `Contributed significantly to developing new features such as Search and filtering data, Editing user profiles and managing protect-routes with role-based authorization`,
      "Worked with a diversified team from across the globe remotely, enhancing teamwork and JavaScript proficiency",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Airbnb Clone 1.0",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
