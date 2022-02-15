import { DiJava,DiDotnet, DiTerminal, DiReact,DiHtml5 ,DiAws} from "react-icons/di";
import {  SiGit } from "react-icons/si";

export const Skills = [
  {
    slug: "React.js",
    Component: DiReact,
    title: "React.js",
    Description: () => <>I work mainly with react.js, it is my favorite technology.</>,
  },
  {
    slug: "HTML/JS/CSS",
    Component: DiHtml5,
    title: "HTML/JS/CSS",
    Description: () => <>I can create sites using these technologies and boostrap. </>,
  },
  {
    slug: "AWS",
    Component: DiAws,
    title: "AWS",
    Description: () => <>Strong knowledge in AWS lambda, AWS api gateway, and deploy websites using AWS amplify</>,
  },
  {
    slug: "Java/Python",
    Component: DiJava,
    title: "Python/Java/C",
    Description: () => <>My favorite Programming languages</>,
    
  },
  {
    slug: "Dynamodb",
    Component: DiJava,
    title: "Databases",
    Description: () => <>I have used Firebase for auth & database  in my apps. and Dynamodb, mysql to store data</>,
    
  },

  {
    slug: "CCNA",
    Component: DiDotnet,
    title: "Cisco CCNA",
    Description: () => <>Good knowledge of Cisco CCNA</>,
    
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
