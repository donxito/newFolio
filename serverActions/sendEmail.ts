"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
  const senderMessage = formData.get("senderMessage");
  const senderEmail = formData.get("senderEmail");

  console.log(senderEmail);
  console.log(senderMessage);

  // server side form validation
  if (!validateString(senderMessage, 50)) {
    return {
      error: "Please provide a message",
    };
  }

  if (!validateString(senderMessage, 5000)) {
    return {
      error: "Please provide an email",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "mchito@gmail.com",
      subject: "Message from Portfolio Contact Form",
      reply_to: senderEmail as string,
      text: senderMessage as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
