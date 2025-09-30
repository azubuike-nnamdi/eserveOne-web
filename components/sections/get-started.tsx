"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { appleStoreIcon, googlePlayStoreIcon } from "../../config/images";
import { Button } from "../ui/button";

export default function GetStarted() {
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
          Ready to Get Started?
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of satisfied customers and service providers on EservOne today.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
            <Link
              href="https://play.google.com/store/apps/details?id=com.nnamdi.azubuike.eservone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto px-5 py-5 cursor-pointer"

              >

                <Image
                  src={googlePlayStoreIcon}
                  alt="Google Play Store"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                Download on Google Store
              </Button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto cursor-pointer px-5 py-5"
              asChild
            >
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={appleStoreIcon}
                  alt="Apple App Store"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                Download on Apple Store
              </Link>
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}