import {
  linux,
  hacktober,
  frontend,
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
  Musitech,
  carrent,
  jobit,
  tripguide,
  threejs,
  backend,
  fullstack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Works",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "BackEnd Development",
    icon: backend,
  },
  {
    title: "Full Stack Development",
    icon: fullstack,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
    speed: 2.0,
  },
  {
    name: "CSS3",
    icon: css,
    speed: 2.5,
  },
  {
    name: "JavaScript",
    icon: javascript,
    speed: 2.2,
  },
  {
    name: "TypeScript",
    icon: typescript,
    speed: 2.0,
  },
  {
    name: "ReactJS",
    icon: reactjs,
    speed: 1.8,
  },
  {
    name: "Redux-Toolkit",
    icon: redux,
    speed: 2.3,
  },
  {
    name: "Tailwind-CSS",
    icon: tailwind,
    speed: 3.0,
  },
  {
    name: "NodeJs",
    icon: nodejs,
    speed: 1.5,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    speed: 1.2,
  },
  {
    name: "ThreeJS",
    icon: threejs,
    speed: 2.8,
  },
  {
    name: "Git",
    icon: git,
    speed: 2.4,
  },
  {
    name: "Figma",
    icon: figma,
    speed: 1.9,
  },
  {
    name: "Docker",
    icon: docker,
    speed: 1.7,
  },
];

const experiences = [
  {
    title: "Full Stack Web Intern",
    company_name: "Musitech",
    icon: Musitech,
    iconBg: "#4A90E2",
    date: "June 2024 - Present",
    points: [
      "Developed a scalable academic website, improving overall performance and user experience.",
      "Revamped the existing legacy website by introducing modern UI/UX practices and responsive design.",
      "Collaborated with stakeholders to align development with institutional goals.",
      "Worked on the Aspire Sports Club website using React.js, enhancing UI components and interactivity.",
    ],
  },
  {
    title: "Core Member",
    company_name: "Linux Club Community",
    icon: linux,
    iconBg: "#000000",
    date: "July 2023 - Present",
    points: [
      "Contributed actively to the Linux Club Community by conducting hands-on sessions and technical workshops.",
      "Led initiatives to promote Linux, DevOps, and open-source technologies among students and tech enthusiasts.",
      "Guided newcomers in understanding Linux fundamentals, system administration, and troubleshooting.",
      "Played a key role in organizing meetups, discussions, and hackathons to foster open-source involvement.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Hacktoberfest",
    icon: hacktober,
    iconBg: "#FF5722",
    date: "October 2024",
    points: [
      "Contributed to multiple open-source repositories as part of Hacktoberfest.",
      "Resolved issues, enhanced documentation, and added new features to community-driven projects.",
      "Engaged with maintainers and contributors to understand project workflows and best practices.",
      "Gained valuable experience in collaborative software development and version control using Git and GitHub.",
    ],
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
