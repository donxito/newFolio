import React from "react";

import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuChefHat } from "react-icons/lu";
import { SiMaterialdesign, SiNextdotjs, SiPython, SiPostgresql } from "react-icons/si";
import imgFounderFinder from "../public/founderfinder4.png";
//import imgTravelTips from "../public/traveltips1.png";
import imgBookClub from "../public/bookclub3.png";
import imgEventSlap from "../public/eventslap1.png"; 
import imgPaperboy from "../public/paperboy2.png";
import imgNextBite from "../public/recipeapi.png"
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiPrisma } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;




export const experiencesData = [
  {
    section: "Education",
    title: "Graduated Design University",
    location: "Lisbon, Portugal",
    description: "Higher University Education, Graphic and Editorial Design.",
    icon: React.createElement(LuGraduationCap),
    date: "2008",
  },
  {
    section: "Work Experience",
    title: "Graphic Designer",
    location: "Lisbon, Portugal",
    description: `
    <br />
    - Print and editorial design. <br />
      - Corporate Identity. <br />
      - Producing and pre-press final artwork. <br />
    `,
    icon: React.createElement(SiMaterialdesign),
    date: "2008 - 2015",
  },
  {
    section: "Education",
    title: "Graduated Chef School",
    location: "Lisbon, Portugal",
    description: "Higher Education, Food Production.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    section: "Work Experience",
    title: "Chef",
    location: "Southeast Asia (India, Thailand, Laos, Cambodia, Vietnam, Indonesia)",
    description: `
      - Worked as a chef across Southeast Asia for 3 years.
      - Cultivated creativity and adaptability for innovative problem-solving.
    `,
    icon: React.createElement(LuChefHat),
    date: "2016 - 2019",
  },
  {
    section: "Work Experience",
    title: "Freelance Graphic Designer",
    location: "Lisbon, Portugal / Remote",
    description: `
    <br />
        - Designed graphics and layouts for print and digital media.<br />
      - Focused on user experience and interface design.<br />
    `,
    icon: React.createElement(SiMaterialdesign),
    date: "2009 - 2023",
  },
  {
    section: "Education",
    title: "Graduated from immersive Bootcamp",
    location: "Remote",
    description: `
    <br />
      - Completed intensive Web Development Bootcamp at Ironhack.<br />
      - Built web apps using the MERN stack connected to REST APIs.<br />
    `,
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    section: "Work Experience",
    title: "Freelance Full-Stack Developer",
    location: "Copenhagen, Denmark / Remote",
    description: `
    <br />
      - Designed and developed web applications using the MERN stack.<br />
      - Implemented REST APIs and enhanced user interfaces.<br />
      - Focused on responsive layouts and user experience.<br />
    `,
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    section: "Work Experience",
    title: "Frontend Developer",
    location: "Mesh Firm, Copenhagen, Denmark",
    description: `
    <br />
      - Developed the front-end of an AI-powered Project Management Assistant.<br />
      - Integrated AI features to improve functionality and user experience.<br />
    `,
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    section: "Work Experience",
    title: "Frontend Developer Intern",
    location: "Camp86, Copenhagen, Denmark",
    description: `
    <br />
      - Collaborated on the development of Qliks, an innovative email platform.<br />
      - Leveraged Next.js to enhance user experience and front-end performance.<br />
      - Worked closely with product and development teams to design intuitive UI.<br />
    `,
    icon: React.createElement(SiNextdotjs),
    date: "2024 - present",
  },

] as const;


export const projectsData = [
  {
    id: 1,
    title: "NextBite",
    description:
      "Discover recipes with the ingredients you have. This full-stack project showcases advanced TypeScript integration with a sleek, user-centric UI built using Next.js and Tailwind CSS.",
    summary:
      "NextBite is a modern web application designed to help users discover delicious recipes based on the ingredients they have at home. This project showcases full-stack development skills, combining a robust backend with a sleek, responsive frontend.",
    skills: [
      "React",
      "Next.js",
      "Supabase",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion ",
    ],
    image:
      "https://res.cloudinary.com/dq08sfqpa/image/upload/v1726838976/event-slap/a0robqbdg4vjyjlq2z5b.png",
    demo: "https://next-bite.vercel.app",
    repo: "https://github.com/donxito/recipe-generator",
    imgUrl: imgNextBite,
  },
  {
    id: 2,
    title: "FounderFinder",
    description:
      "Founder Finder is a Fullstack web application where users can search for potential co-founders based on various criteria.",
    summary:
      "Finding a co-founder is hard, we provide you with the platform to make that easier. Building a start-up is hard work. It is a journey to create something new and it takes believing in a dream each and every day, often against all odds.",
    skills: [
      "React",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "NodeJS",
      "Tailwind",
      "REST API",
      "TypeScript",
    ],
    image:
      "https://res.cloudinary.com/dq08sfqpa/image/upload/v1717886816/event-slap/gab3asumgl9kvdz1xk7k.png",
    demo: "https://founder-finder.vercel.app",
    repo: "https://github.com/donxito/founder-finder-client",
    imgUrl: imgFounderFinder,
  },

  {
    id: 3,
    title: "Mini Book Club",
    description:
      "A gift for my wife and her book reading club. Mini Book Club is a place where you can share notes of your favourite books and also ratings.",
    summary:
      "Mini Book Club is a Full-stack application using the MERN stack (MongoDB, Express, React, and Node.JS) This repository contains the backend code for the server of this application. It is a RESTful API built with ExpressJS, MongoDB, and Mongoose. ",
    skills: [
      "React",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "NodeJS",
      "Tailwind",
      "REST API",
    ],
    image:
      "https://res.cloudinary.com/dq08sfqpa/image/upload/v1713993138/event-slap/clud2onbzf4gdvsikeei.png",
    demo: "https://minibookclub.netlify.app",
    repo: "https://github.com/donxito/frontend-booknotes",
    imgUrl: imgBookClub,
  },

  {
    id: 4,
    title: "EventSlap",
    description:
      "Full-stack application implementing all CRUD actions, using the MERN stack. Backend REST API built with Express, MongoDB, and Mongoose.",
    summary:
      "It allows logged-in users to manage all the events and venues that they own in the database doing full CRUD. Anonymous users can see venues, events and free events, and also doing search by name or date. Logged-in users can create new venues and events, and view all existing ones.",
    skills: [
      "React",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "NodeJS",
      "Tailwind",
      "REST API",
    ],
    image:
      "https://res.cloudinary.com/dq08sfqpa/image/upload/v1712179049/event-slap/fxgzmyxmv44pjefvmjjx.png",
    demo: "https://eventslap.netlify.app",
    repo: "https://github.com/mig-max/eventManager-frontend",
    imgUrl: imgEventSlap,
  },

  // {
  //   id: 5,
  //   title: "TravelTips",
  //   description:
  //     "This project has been created as a Single Page Application (SPA) using React. Integrated with an external API, the React application allows users to perform CRUD operations.",
  //   summary:
  //     "This project has been created as a Single Page Application (SPA) using React. The application consists of multiple views, providing a user-friendly interface for exploring and sharing travel advice. Integrated with an external API, the React application allows users to perform CRUD operations (Create, Read, Update, Delete) on travel-related content.",
  //   skills: ["React", "React-Router", "Axios", "Tailwind"],
  //   image:
  //     "https://res.cloudinary.com/dq08sfqpa/image/upload/v1712179182/event-slap/qjsh8yzo6mvoxyc78a3j.png",
  //   demo: "https://toptraveltips.netlify.app",
  //   repo: "https://github.com/mig-max/travel-tips",
  //   imgUrl: imgTravelTips,
  // },

  {
    id: 5,
    title: "Paperboy",
    description: "Small remake of the 80's legendary paperboy arcade game.",
    summary:
      "This project consists in the creation of a browser-based game using HTML, CSS, JavaScript, DOM manipulation, and Object-Oriented Programming (OOP). This is a remake of the first game I ever played, back in the 80’s. Paperboy.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Object-Oriented Programming (OOP)",
      "DOM Manipulation",
    ],
    image:
      "https://res.cloudinary.com/dq08sfqpa/image/upload/v1712179253/event-slap/y92vc5af7e4wkk5v3qxz.png",
    demo: "https://donxito.github.io/game_paperboy",
    repo: "https://github.com/donxito/game_paperboy",
    imgUrl: imgPaperboy,
  },
] as const;




export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Sass",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Postman",
] as const;


export const skillsIcon = [
  React.createElement(FaReact),
  React.createElement(SiNextdotjs),
  React.createElement(AiOutlineHtml5),
  React.createElement(FaCss3Alt),
  React.createElement(IoLogoJavascript),
  React.createElement(SiTypescript),
  React.createElement(FaNodeJs),
  React.createElement(SiExpress),
  React.createElement(BiLogoMongodb),
  React.createElement(SiPostman),
  React.createElement(FaSass),
  React.createElement(SiTailwindcss),
  React.createElement(SiPrisma),
  React.createElement(SiPostgresql),
  React.createElement(FaGitAlt),
  React.createElement(SiPython),
  React.createElement(SiAdobephotoshop),
  React.createElement(SiAdobeillustrator),
  React.createElement(SiAdobeindesign),

] as const