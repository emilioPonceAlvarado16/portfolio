import { DiJava, DiTerminal, DiReact, DiHtml5, DiAws, DiNodejs, DiDatabase } from "react-icons/di";
import { SiGit, SiNextdotjs } from "react-icons/si";

export const Skills = [
  {
    slug: "React.js",
    Component: DiReact,
    title: "React.js",
    Description: () => <>I work mainly with React.js, it is my favorite technology.</>,
  },
  {
    slug: "Next.js",
    Component: SiNextdotjs,
    title: "Next.js",
    Description: () => <>Building full-stack React applications with server-side rendering and static site generation.</>,
  },
  {
    slug: "HTML/JS/CSS",
    Component: DiHtml5,
    title: "HTML/JS/CSS",
    Description: () => <>I can create sites using these technologies and Bootstrap.</>,
  },
  {
    slug: "AWS",
    Component: DiAws,
    title: "AWS",
    Description: () => <>Lambda, API Gateway, Cognito, EC2, ELB, ECR, ECS, S3, Amplify, and CI/CD pipelines.</>,
  },
  {
    slug: "Languages",
    Component: DiNodejs,
    title: "Python/Java/Node.js",
    Description: () => <>My favorite programming languages.</>,
  },
  {
    slug: "Databases",
    Component: DiDatabase,
    title: "Databases",
    Description: () => <>PostgreSQL, MariaDB, DynamoDB, and MySQL for data storage and management.</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>I have written some Shell scripts for personal purposes.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
