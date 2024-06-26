import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProps = {
    senderMessage: string;
  senderEmail: string;
};
function ContactFormEmail({ senderMessage, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from the Next.js Portfolio Form</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">Hey boss! You just got a message </Heading>
              <Text>{senderMessage}</Text>
              <Hr />
              <Text>The sender email is: {senderEmail}</Text>
              <Text>Have a great day!</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactFormEmail;
