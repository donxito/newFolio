import React from 'react'
import  { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './sectionHeading';
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from "@/lib/data"
function Experience() {

    const { ref } = useSectionInView("Experience", 0.5)


  return (


    <section id='experience' ref={ref}>
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline>

        </VerticalTimeline>
    </section>
  )
}

export default Experience