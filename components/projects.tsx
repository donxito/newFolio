"use client";

import React, { useEffect } from "react";
import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSectionContext";


function Projects() {

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }

  },[inView, setActiveSection])


  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((projects, index) => (
          // <React.Fragment key={index}>
          <Project key={index} {...projects} />
          // </React.Fragment>
        ))}
      </div>
    </section>
  );
}



export default Projects;
