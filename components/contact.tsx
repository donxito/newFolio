"use client";
import React from 'react'
import SectionHeading from './sectionHeading'
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendEmail } from "@/serverActions/sendEmail"
 
function Contact() {

    const { ref } = useSectionInView("Contact", 0.5);

    
  return (

    <motion.section 
        id='contact' 
        ref={ref} 
        className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
        <SectionHeading>Contact me</SectionHeading>
        <p
        className='text-gray-700 -mt-6'
        >Please contact me directly at <a className='underline' href='mailto:mchito@gmail.com'>mchito@gmail.com</a> or use this form.</p>

        <form 
          className='mt-10 flex flex-col'
          action={ async (FormData) => {
            await sendEmail(FormData)
        }}
        >
            <input 
            type='email' 
            name="senderEmail"
            className='h-14 px-4 rounded-lg borderBlack'
            placeholder='Your email'
            required
            maxLength={50}
            />
            <textarea 
            className='h-52 my-3 rounded-lg borderBlack p-4'
            name="senderMessage"
            placeholder="Your message"
            required
            maxLength={5000}
            />
            <button 
            type='submit'
            className='group flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          href="/Miguel_Chito_CV.pdf"'
            >Submit <FaPaperPlane className='text-xs opacity-70 transition-all 
            group-hover:translate-x-1
            group-hover:-translate-y-1'
            /></button>   
        </form>
    </motion.section>
  )
}

export default Contact