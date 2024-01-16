import {
  mobile,
  backend,
  fullstack,
  web,
  javascript,
  typescript,
  reactjs,
  php,
  nodejs,
  git,
  docker,
  globalLogic,
  SASPV,
  optym,
  NCERT,
  yojana,
  autoEmail,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: fullstack,
  },
];

const technologies = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Analyst",
    company_name: "GlobalLogic Technologies",
    icon: globalLogic,
    iconBg: "#383E56",
    date: "January 2020 - September 2021",
    points: [
      "Collaborated with Google as an on-site client, contributing to the maintenance of the company's Knowledge Graph data",
      "Ensured the accuracy and quality of both internal and external databases by updating and maintaining them, providing users with up-to-date information.",
      "Maintained a high level of quality, consistently achieving a benchmark of 95% or higher.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Optym",
    icon: optym,
    iconBg: "#E6DEDD",
    date: "August 2022 - December 2022",
    points: [
      "Contributed to the development of a software solution to optimize the LTL and FTL industry as a backend engineer.",
      "Worked as a part of a team to design, build, and implement various components of the software.",
      "Successfully delivered new features within tight deadlines.",
      "Streamlined API testing processes by automating them with a script, leading to reduced manual effort and improved efficiency.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "NCERT",
    icon: NCERT,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Led the development of a tailored Management Information System using PHP, HTML, CSS, XAMPP, and Apache, focused on precise budget oversight for diverse NCERT departments.",
      "Collaborated extensively across departments to craft a seamless web application, streamlining budget tracking and enhancing financial decision-making.",
    ],
  },
];

const projects = [
  {
    name: "Secured Authentication System for Product Verification",
    description:
      "A Blockchain based three inter-related applications namely Authenti-Kator-2.0, fabric-firebase-logger, and productAuth, aimed at providing authentication and logging services for products.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "CouchDB",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: SASPV,
    source_code_link: "https://github.com/vekron1207/Major_Final",
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
    image: yojana,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: autoEmail,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
