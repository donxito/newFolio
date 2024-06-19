import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import imgFounderFinder from "../public/founderfinder4.png"
import imgTravelTips from "../public/traveltips1.png"
import imgBookClub from "../public/bookclub3.png"
import imgEventSlap from "../public/eventslap1.png"
import imgPaperboy from "../public/paperboy2.png"



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
    title: "Graduated from immersive Bootcamp",
    location: "Remote",
    description:
      "Recent graduate of Ironhack’s intensive Web Development Bootcamp.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
 
] as const;

export const projectsData = [
  {
    id: 1,
    title: "FounderFinder",
    description: "Founder Finder is a Fullstack web application where users can search for potential co-founders based on various criteria. Profile Management and user Authentication",
    summary: "Finding a co-founder is hard, we provide you with the platform to make that easier. Building a start-up is hard work. It is a journey to create something new and it takes believing in a dream each and every day, often against all odds.",
    skills: ["React", "ExpressJS", "MongoDB", "Mongoose", "NodeJS", "Tailwind", "REST API", "TypeScript"],
    image:"https://res.cloudinary.com/dq08sfqpa/image/upload/v1717886816/event-slap/gab3asumgl9kvdz1xk7k.png",
    demo: "https://founder-finder.vercel.app",
    repo: "https://github.com/donxito/founder-finder-client",
    imgUrl: imgFounderFinder
},

{
    id: 2,
    title: "Mini Book Club",
    description: "A gift for my wife and her book reading club. Mini Book Club is a place where you can share notes of your favourite books and also ratings.",
    summary: "Mini Book Club is a Full-stack application using the MERN stack (MongoDB, Express, React, and Node.JS) This repository contains the backend code for the server of this application. It is a RESTful API built with ExpressJS, MongoDB, and Mongoose. ",
    skills: ["React", "ExpressJS", "MongoDB", "Mongoose", "NodeJS", "Tailwind", "REST API"],
    image:"https://res.cloudinary.com/dq08sfqpa/image/upload/v1713993138/event-slap/clud2onbzf4gdvsikeei.png",
    demo: "https://minibookclub.netlify.app",
    repo: "https://github.com/donxito/frontend-booknotes",
    imgUrl: imgBookClub
},

{
    id: 3,
    title: "EventSlap",
    description: "Full-stack application implementing all CRUD actions, using the MERN stack. Backend REST API built with Express, MongoDB, and Mongoose.",
    summary: "It allows logged-in users to manage all the events and venues that they own in the database doing full CRUD. Anonymous users can see venues, events and free events, and also doing search by name or date. Logged-in users can create new venues and events, and view all existing ones.",
    skills: ["React", "ExpressJS", "MongoDB", "Mongoose", "NodeJS", "Tailwind", "REST API"],
    image:"https://res.cloudinary.com/dq08sfqpa/image/upload/v1712179049/event-slap/fxgzmyxmv44pjefvmjjx.png",
    demo: "https://eventslap.netlify.app",
    repo: "https://github.com/mig-max/eventManager-frontend",
    imgUrl: imgEventSlap
},

{
    id: 4,
    title: "TravelTips",
    description: "This project has been created as a Single Page Application (SPA) using React. Integrated with an external API, the React application allows users to perform CRUD operations.",
    summary: "This project has been created as a Single Page Application (SPA) using React. The application consists of multiple views, providing a user-friendly interface for exploring and sharing travel advice. Integrated with an external API, the React application allows users to perform CRUD operations (Create, Read, Update, Delete) on travel-related content.",
    skills: ["React", "React-Router", "Axios", "Tailwind"],
    image:"https://res.cloudinary.com/dq08sfqpa/image/upload/v1712179182/event-slap/qjsh8yzo6mvoxyc78a3j.png",
    demo: "https://toptraveltips.netlify.app",
    repo: "https://github.com/mig-max/travel-tips",
    imgUrl: imgTravelTips
},

{
    id: 5,
    title: "Paperboy",
    description: "Small remake of the 80's legendary paperboy arcade game.",
    summary: "This project consists in the creation of a browser-based game using HTML, CSS, JavaScript, DOM manipulation, and Object-Oriented Programming (OOP). This is a remake of the first game I ever played, back in the 80’s. Paperboy.",
    skills: ["HTML", "CSS", "JavaScript", "Object-Oriented Programming (OOP)", "DOM Manipulation"],
    image:"https://res.cloudinary.com/dq08sfqpa/image/upload/v1712179253/event-slap/y92vc5af7e4wkk5v3qxz.png",
    demo: "https://donxito.github.io/game_paperboy",
    repo: "https://github.com/donxito/game_paperboy",
    imgUrl: imgPaperboy
}
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
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Postman",
] as const;
