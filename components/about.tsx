import React from "react";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section className="aboutText mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    >
      <GlowCapture>
        <Glow color="yellow">
          <SectionHeading>
            About me
          </SectionHeading>

          <p className="mb-3 text-black glow:text-glow/70 ">
            As a passionate introvert, I thrive on{" "}
            <span className="font-medium">building things with code.</span> My
            background in<span className="underline"> Graphic Design</span> has
            given me a unique perspective, and my culinary adventures as a{" "}
            <span className="italic">Chef</span> across Southeast Asia have
            honed my{" "}
            <span className=" font-semibold">
              problem-solving skills and adaptability.
            </span>
          </p>

          <p className="mb-3  text-black glow:text-glow/70">
            Now, as a<span className="font-bold"> Full Stack Developer </span>
            proficient in the<span className="font-semibold"> MERN </span>stack
            and <span className="underline">REST APIs</span>, I create dynamic
            and intuitive web applications.{" "}
          </p>

          <p className="mb-3  text-black glow:text-glow/70">
            My focus on{" "}
            <span className="italic">user experience and interface design</span>{" "}
            drives me to continuously learn and grow. <br />
            <span className="overline font-semibold">
              Let’s connect and build something amazing together!
            </span>
          </p>
        </Glow>
      </GlowCapture>
    </motion.section>
  );
}

export default About;
