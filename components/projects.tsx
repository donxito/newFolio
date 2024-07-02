"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";


function Projects() {

  const { ref } = useSectionInView("Projects")

  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
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
