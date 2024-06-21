"use client";

import Hero from "../components/hero";
import Divider from "@/components/divider";
import About from "@/components/about";
import {ConfettiComponentBottom, ConfettiComponentTop} from "@/components/confettiComponent";
import Projects from "@/components/projects";
import Footer from "@/components/footer";


import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Skills from "@/components/skills";
import Experience from "@/components/experience";


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
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      <aside className="socialIcon-linkedin">
        <a
          href="https://www.linkedin.com/in/miguelchito-reactdeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconLink"
        >
          <p>Linkedin</p>
          <FaLinkedin className="text-3xl" />
        </a>
      </aside>

      <aside className="socialIcon-github">
        <a
          href="https://github.com/donxito"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconLink"
        >
          <FaGithub className="text-3xl" />
          <p>GitHub</p>
        </a>
      </aside>

      <main className="flex flex-col items-center px-4">

      <ConfettiComponentTop />
        <Hero />
        <Divider />
        <About />
        <Projects />
        <Skills />
        <Experience />
      
        <Footer />
        <ConfettiComponentBottom />
        
      </main>
    </>
  );
}
