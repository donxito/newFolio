"use client";

import Hero from "../components/hero";

import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  // timer for showing up "aba"
  useEffect(() => {
    const timer = setTimeout(() => {
      const socialIcon = document.querySelector(".socialIcon-linkedin");
      if (socialIcon) {
        (socialIcon as HTMLElement).style.display = "block"; // Cast socialIcon to an HTML element
      }
    }, 2000); // 2 seconds delay

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

      <main className="flex flex-col items-center px-4">
        <Hero />
      </main>
    </>
  );
}
