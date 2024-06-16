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

// date & greeting

let greeting = "";
const date = new Date();
let currentHour = date.getHours();

if (currentHour < 12) {
  greeting = "Good morning";
} else if (currentHour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

function Hero() {
  return (
    <section className="mb'28 max-w-[50rem] text-center sm:mb-0">
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
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold"> {greeting}, I'm Miguel</span>! A passionate
        introvert who loves building things with code. <br /> A{" "}
        <span className="font-bold">Full Stack Developer</span> with a solid
        background in <span className="underline">Graphic Design.</span> I'm
        fascinated by web applications and focus on building them with{" "}
        <span className="font-bold">React.</span>
      </motion.p>

      <div className="flex">

        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact me here <BsArrowRight />
        </Link>

        <a href="" target="_blank" rel="noopener noreferrer"
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full"
          >
          Download CV <HiDownload />
        </a>

        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full">
            <BsLinkedin />
        </a>

        <a className="bg-white p-4 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full">
            <FaGithubSquare />
        </a>

      </div>
    </section>
  );
}

export default Hero;
