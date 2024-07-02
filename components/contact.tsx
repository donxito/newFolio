"use client";
import React, { FormEvent, useState } from "react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/serverActions/sendEmail";
import SubmitBtn from "./submitBtn";
import toast from "react-hot-toast";


function Contact() {
  const { ref } = useSectionInView("Contact", 1);

  // const [isLoading, setIsLoading] = useState(false);
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   setMessage("");

  //   const formData = new FormData(event.currentTarget);

  //   const response = await sendEmail(formData);

  //   if (response?.error) {
  //     setMessage(`Error: ${response.error}`);
  //   } else {
  //     setMessage("Message sent successfully!");
  //   }
  //   setIsLoading(false);
  // };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mchito@gmail.com">
          mchito@gmail.com
        </a>{" "}
        or use this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        //onSubmit={handleSubmit}
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);

          if (error) {
            toast.error(error);
            ;
            return;
          }

          toast.success("Message sent successfully!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          required
          maxLength={50}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderMessage"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <SubmitBtn />
      </form>

      {/* {message && (
        <p
          className={`mt-4 ${
            message.startsWith("Error") ? "text-red-600" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )} */}
    </motion.section>
  );
}

export default Contact;
