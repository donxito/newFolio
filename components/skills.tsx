"use client";
import React from 'react'
import SectionHeading from './sectionHeading'
import { skillsData } from '@/lib/data'
import { skillsIcon } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion';

function Skills() {

    const { ref } = useSectionInView("Skills", 1)

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 * index,
            }
        })
    };


  return (
    <section ref={ref} id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-3xl text-gray-800'>
            {skillsIcon.map((skill, index) => (
                <motion.li className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                key={index}
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                >
                    {skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Skills