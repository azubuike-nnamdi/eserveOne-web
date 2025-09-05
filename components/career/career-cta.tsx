"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CareerCta() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
        >
          Ready to Join Our Team?
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join us and be part of a team that&apos;s redefining the future of service delivery.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="mailto:career@eservone.onmicrosoft.com" className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Users className="w-4 h-4 mr-2" />
              View Open Positions
            </Button>
          </motion.div>
        </motion.div>

        {/* Email Contact */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span className="text-lg font-medium">career@eservone.onmicrosoft.com</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-muted-foreground/30"></div>
          <div className="text-sm">
            Apply or send your CV to us
          </div>
        </motion.div>
      </div>
    </section>
  )
}