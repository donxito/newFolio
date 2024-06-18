"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  summary,
  skills,
  image,
  demo,
  repo,
  imgUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-gray-700">{title}</h3>
          <p className="my-3 leading-relaxed text-gray-700">{description}</p>
          {/* <p className="mt-2 leading-relaxed text-gray-700">{summary}</p> */}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {skills.map((skill, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="flex gap-4 my-4  justify-center">
            <a
              className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outine-none focus:scale-110     hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 text-gray-700"
              href={repo}
              target="_blank"
            >
              Repo
            </a>

            <a
              className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outine-none focus:scale-110     hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 text-gray-700"
              href={demo}
              target="_blank"
            >
              Demo
            </a>
          </div>
        </div>

        <Image
          src={imgUrl}
          alt={summary}
          quality={95}
          className="absolute hidden sm:block top-16 -right-40 w-[29rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

export default Project;
