"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, Send, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form data:", data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information - Left Side */}
            <motion.div
              className="space-y-8"
              variants={itemVariants}
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Reach out to us
                </h3>
                <p className="text-muted-foreground mb-8">
                  We&apos;re here to help and answer any questions you might have.
                  We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <Link href={"tel:15551234567"}>
                      <p className="text-muted-foreground">+1 (555) 123 4567</p>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <Link href={"mailto:contact@eservone.com"}> <p className="text-muted-foreground">contact@eservone.com</p>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Additional Info */}
              <motion.div
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold text-foreground mb-3">Business Hours</h4>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg"
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className={`pl-10 ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                        {...register("name")}
                      />
                    </div>
                    {errors.name && (
                      <motion.p
                        className="text-red-500 text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className={`pl-10 ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                        {...register("email")}
                      />
                    </div>
                    {errors.email && (
                      <motion.p
                        className="text-red-500 text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    rows={6}
                    className={`resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <motion.p
                      className="text-red-500 text-sm mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </motion.div>
                    )}
                  </Button>
                </motion.div>

                {/* Success Message */}
                {submitSuccess && (
                  <motion.div
                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}