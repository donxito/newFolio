"use client";

import Hero from "../components/hero";
import Divider from "@/components/divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import NewConfetti from "@/components/confetti";
import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  // timer for showing up "aba" social icons
  useEffect(() => {
    const timer = setTimeout(() => {
      const socialIconLink = document.querySelector(".socialIcon-linkedin");
      const socialIconGitHub = document.querySelector(".socialIcon-github");
      if (socialIconLink && socialIconGitHub) {
        (socialIconLink as HTMLElement).style.opacity = "1";
        (socialIconLink as HTMLElement).style.pointerEvents = "auto"; // Enable interaction
        (socialIconGitHub as HTMLElement).style.opacity = "1";
        (socialIconGitHub as HTMLElement).style.pointerEvents = "auto"; // Enable interaction
      }
    }, 4000); // 4 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      <aside className="socialIcon-linkedin">
        <a
          href="https://www.linkedin.com/in/miguelchito-reactdeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconLink dark:bg-gray-700 dark:bg-opacity-90 dark:text-white/50"
        >
          <p>Linkedin</p>
          <FaLinkedin className="text-3xl dark:text-white/50" />
        </a>
      </aside>

      <aside className="socialIcon-github">
        <a
          href="https://github.com/donxito"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconLink mr-3 dark:bg-gray-700 dark:bg-opacity-90 dark:text-white/50"
        >
          <FaGithub className="text-3xl mr-3 dark:text-white/50" />
          <p>GitHub</p>
        </a>
      </aside>

      <main className="flex flex-col items-center px-4 ">
        <NewConfetti />
        <Hero />
        <Divider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
