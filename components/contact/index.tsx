"use client";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <main>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Have a question or need assistance? We&apos;d love to hear from you.
          Send us a message and we&apos;ll respond as soon as possible.
        </motion.p>
      </LampContainer>
      <ContactForm />
    </main>
  );
}
