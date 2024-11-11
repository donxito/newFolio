/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About", 0.5);

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

          <p className="mb-3 glow:text-glow/70">
            <span className="text-xl">Hi there!</span>
            <br />
            With{" "}
            <span className="font-semibold">
              10 years of experience in Graphic Design
            </span>{" "}
            and a unique background as a
            <span className="italic"> Chef in Southeast Asia</span>, my journey
            has been anything but ordinary. It has shaped me into a developer
            with a knack for
            <span className="underline"> creative problem-solving</span> and a
            flair for
            <span className="font-semibold"> adaptive innovation</span>.
          </p>

          <p className="mb-3 mt-8 glow:text-glow/70">
            <span className="font-semibold">What I Bring to the Table:</span>
          </p>
          <ul className="mb-3 glow:text-glow/70 list-disc list-inside">
            <li>
              <span className="font-semibold">Problem-Solving Prowess:</span>{" "}
              Honed through diverse professional challenges, both technical and
              creative.
            </li>
            <li>
              <span className="font-semibold">
                Adaptability and Quick Learning:
              </span>{" "}
              A hallmark of my ever-evolving career journey.
            </li>
          </ul>

          <p className="mb-3 mt-8 glow:text-glow/70">
            <span className="font-semibold">
              Specializing in Full-Stack Development with the MERN Stack:
            </span>
          </p>
          <ul className="mb-3 glow:text-glow/70 list-disc list-inside">
            <li>
              <span className="font-semibold">Frontend technologies:</span>{" "}
              JavaScript (ES6), TypeScript, React, Next.js, HTML, CSS, SaSS,
              Bootstrap, Tailwind.
            </li>
            <li>
              <span className="font-semibold">Backend technologies:</span>{" "}
              Express, Node.js, MongoDB, REST APIs, Mongoose, Prisma, Firebase,
              Supabase.
            </li>
            <li>
              <span className="font-semibold">Version control:</span> GitHub &
              Git
            </li>
          </ul>

          <p className="mb-3 glow:text-glow/70">
            <span className="font-semibold">Expanding Horizons:</span> Currently
            enhancing my expertise with TypeScript and Next.js.
          </p>

          <p className="mb-3 glow:text-glow/70">
            Passionate about development and committed to growth, I’m seeking a
            team where
            <span className="underline"> innovation meets impact</span>.
          </p>
        </Glow>
      </GlowCapture>
    </motion.section>
  );
}

export default About;
