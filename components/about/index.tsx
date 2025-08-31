"use client";
import { AnimatePresence, motion } from "framer-motion";
import GetStarted from "../sections/get-started";
import { WavyBackground } from "../ui/wavy-background";

export function AboutPage() {
  return (
    <main>
      <AnimatePresence mode="wait">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <motion.p
            className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center md:mt-36"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet the Community
          </motion.p>
          <motion.p
            className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
          >
            We proudly serve a growing network.
          </motion.p>
          <motion.p
            className="text-base md:text-lg max-w-2xl mx-auto mt-8 text-white font-normal inter-var text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Our strength lies in the people who use it- everyday individuals, skilled professionals, and growing businesses that form a vibrant, supportive community.
          </motion.p>
          <motion.hr
            className="my-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          />
          {/* Statistics Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '5K+', label: 'Service Providers' },
              { value: '50K+', label: 'Services Completed' },
              { value: '4.8', label: 'Average Rating' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="bg-transparent rounded-lg shadow-none  p-4 mb-2">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </div>
                <div className="text-sm text-gray-300 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </WavyBackground>
      </AnimatePresence>

      <section className="bg-gray-50 dark:bg-gray-900 py-24 ">
        <AnimatePresence mode="wait">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-center"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
            >
              Empowering Connections. Simplifying Services
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-gray-300 dark:text-gray-400 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              At EservOne, we believe getting help and offering help should be easy, trusted and efficient. That&apos;s why we created a platform that brings together people who need services with the skilled professionals who provide them.
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-gray-300 dark:text-gray-400 text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              From home repairs and beauty services to tech support and event planning, our mission is to make everyday task easier by bridging the gap between service seekers and trusted providers in their community.
            </motion.p>
          </div>
        </AnimatePresence>
      </section>

      <GetStarted />
    </main>
  );
}
