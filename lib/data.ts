import React from "react";

import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuChefHat } from "react-icons/lu";
import { SiMaterialdesign, SiNextdotjs, SiPython, SiPostgresql } from "react-icons/si";
import imgFounderFinder from "../public/founderfinder4.png";
import imgTravelTips from "../public/traveltips1.png";
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
    title: "Graduated Design University",
    location: "Lisbon, Portugal",
    description: "Higher University Education, Graphic and Editorial Design.",
    icon: React.createElement(LuGraduationCap),
    // icon: <LuGraduationCap />,
    date: "2008",
  },
  {
    title: "Graphic Designer",
    location: "Lisbon, Portugal",
    description:
      "Print and editorial design. Corporate Identity. Producing and pre-press final artwork.",
    icon: React.createElement(SiMaterialdesign),
    // icon: <SiMaterialdesign />,
    date: "2008 - 2015",
  },

  {
    title: "Graduated Chef School",
    location: "Lisbon, Portugal",
    description: "Higher Education, Food Production.",
    icon: React.createElement(LuGraduationCap),
    // icon: <LuGraduationCap />,
    date: "2016",
  },

  {
    title: "Chef",
    location:
      "Southeast Asia (India, Thailand, Laos, Cambodia, Vietnam, Indonesia)",
    description:
      "Adventure of 3 years working as a Chef around Southeast Asia. Cultivated a strong sense of creativity and adaptability, essential for innovative problem-solving in technology’s",
    icon: React.createElement(LuChefHat),
    // icon: <LuChefHat />,
    date: "2016 - 2019",
  },
  {
    title: "Freelance Graphic Designer",
    location: "Lisbon, Portugal/ Remote",
    description:
      "Designed visually appealing graphics and layouts for various print and digital media. Focused on user experience and interface design, enhancing client satisfaction and engagement.",
    icon: React.createElement(SiMaterialdesign),
    // icon: <SiMaterialdesign />,
    date: "2009 - 2023",
  },
  {
    title: "Graduated from immersive Bootcamp",
    location: "Remote",
    description:
      "Recent graduate of Ironhack’s intensive Web Development Bootcamp. Built and deployed web apps based on MERN stack connected to REST API",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Copenhagen, Denmark/ Remote",
    description:
      "Designed and developed web applications using the MERN stack. Implemented REST APIs and enhanced user interfaces. Focused on user experience and interface design, ensuring responsive and visually appealing layouts.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    title: "Frontend Developer",
    location: "Copenhagen, Denmark",
    description:
      "Developed and implemented the front-end of an AI-powered Project Management Assistant, including chat interfaces, tools, and templates. Integrated emerging web technologies and AI features into the project, focusing on improving user experience and functionality.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },

] as const;



export const projectsData = [
  {
    id: 1,
    title: "NextBite",
    description:
      "NextBite is a modern web application designed to help users discover delicious recipes based on the ingredients they have at home.",
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
    demo: "https://nextbite-black.vercel.app",
    repo: "https://github.com/donxito/recipe-generator",
    imgUrl: imgNextBite,
  },
  {
    id: 2,
    title: "FounderFinder",
    description:
      "Founder Finder is a Fullstack web application where users can search for potential co-founders based on various criteria. Profile Management and user Authentication",
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

  {
    id: 5,
    title: "TravelTips",
    description:
      "This project has been created as a Single Page Application (SPA) using React. Integrated with an external API, the React application allows users to perform CRUD operations.",
    summary:
      "This project has been created as a Single Page Application (SPA) using React. The application consists of multiple views, providing a user-friendly interface for exploring and sharing travel advice. Integrated with an external API, the React application allows users to perform CRUD operations (Create, Read, Update, Delete) on travel-related content.",
    skills: ["React", "React-Router", "Axios", "Tailwind"],
    image:
      "https://res.cloudinary.com/dq08sfqpa/image/upload/v1712179182/event-slap/qjsh8yzo6mvoxyc78a3j.png",
    demo: "https://toptraveltips.netlify.app",
    repo: "https://github.com/mig-max/travel-tips",
    imgUrl: imgTravelTips,
  },

  {
    id: 6,
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