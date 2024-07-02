/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {

  const { ref } = useSectionInView("About", 0.5)

  return (
    <motion.section
      ref={ref}
      className="aboutText mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <GlowCapture>
        <Glow color="yellow">
          <SectionHeading>About me</SectionHeading>

          <p className="mb-3 glow:text-glow/70 "><span className="text-xl">Hi there!</span><br/>
          With <span className="font-semibold"> 10 years of experience in Graphic Design
            </span>{" "}
            and a background as a
            <span className="italic"> Chef in Southeast Asia</span>. My journey
            has been anything but ordinary, shaping me into a developer with a
            talent for
            <span className="underline"> creative problem-solving</span> and
            <span className="font-semibold"> adaptive innovation</span>.
            </p>

          <p className="mb-3 mt-8 glow:text-glow/70">
            <span className="font-semibold">What I Bring to the Table:</span>
          </p>
          <ul className="mb-3 glow:text-glow/70 list-disc list-inside">
            <li>
              <span className="font-semibold">Problem-Solving Prowess:</span>{" "}
              Sharpened by a spectrum of professional challenges.
            </li>
            <li>
              <span className="font-semibold">
                Adaptability and Quick Learning:
              </span>{" "}
              A constant in my ever-changing career landscape.
            </li>
          </ul>

          <p className="mb-3 mt-8  glow:text-glow/70">
            <span className="font-semibold">
              Specializing in Full-Stack Development with the MERN Stack:
            </span>
          </p>
          <ul className="mb-3 glow:text-glow/70 list-disc list-inside">
            <li>
              <span className="font-semibold">Frontend technologies:</span>{" "}
              JavaScript (ES6), React, HTML, CSS, SaSS, Bootstrap, Tailwind
            </li>
            <li>
              <span className="font-semibold">Backend technologies:</span>{" "}
              Express, Node.js, MongoDB, REST APIs, Mongoose
            </li>
            <li>
              <span className="font-semibold">Version control:</span> GitHub &
              Git
            </li>
          </ul>

          <p className="mb-3  glow:text-glow/70">
            <span className="font-semibold">Expanding Horizons: </span>
            Currently leveling up with TypeScript and Next.js.
          </p>

          <p className="mb-3 glow:text-glow/70">
            Passionate about development and driven to excel, I’m on the lookout
            for a team where
            <span className="underline"> innovation meets impact</span>.
          </p>
        </Glow>
      </GlowCapture>
    </motion.section>
  );
}

export default About;
