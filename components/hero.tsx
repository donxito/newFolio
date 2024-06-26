/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React from "react";
import foto from "@/public/foto.png";
//import cv from "@/public/Miguel_Chito_CV";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";


function Hero() {

   const { ref } = useSectionInView("Home", 0.5)

  const { setActiveSection, setTimeOfLastClick} = useActiveSectionContext()

  // date & greeting
  let greeting = "";
  let currentHour = new Date().getHours();
  //console.log(currentHour)

  if (currentHour < 6) {
    greeting = "Good night";
  } else if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 19) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <section
      className="mb'28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: "125",
              delay: 0.1,
              duration: 0.5,
            }}
          >
            <Image
              src={foto}
              alt="Miguel Photo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl mb-4"
            />
          </motion.div>
        </div>
      </div>
      <GlowCapture>
        <Glow color="yellow">
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-black glow:text-glow/70"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {greeting},<span className="font-bold"> I'm Miguel!</span> A{" "}
            <span className="font-bold">Full Stack Developer</span> with a solid
            background in <span className="underline">Graphic Design.</span> I'm
            fascinated by web applications and focus on building them with{" "}
            <span className="font-bold">React.</span>
          </motion.h1>
        </Glow>
      </GlowCapture>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outine-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now())
          }}
            
          
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outine-none focus:scale-110   hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/Miguel_Chito_CV.pdf"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-2 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/miguelchito-reactdeveloper"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/donxito"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
