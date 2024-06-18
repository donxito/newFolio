import React from "react";
import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./project";


function Projects() {
  return (
    <section>
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
