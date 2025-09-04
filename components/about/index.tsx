"use client";
import { handWithMoney } from "@/config/images";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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

      {/* About Us Section - Grid Layout */}
      <section className="bg-gray-50 dark:bg-gray-900 py-24">
        <AnimatePresence mode="wait">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Text Content */}
              <div className="space-y-6">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
                >
                  About Us
                </motion.h2>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-base md:text-lg text-gray-300 dark:text-gray-400">
                    At EservOne, we believe that access to trusted, affordable services should be simple and seamless. Our platform connects customers with skilled service providers across multiple industries—making it easier than ever to book the help you need, when you need it.
                  </p>
                  <p className="text-base md:text-lg text-gray-300 dark:text-gray-400">
                    Founded with a vision to empower service providers and deliver convenience to customers, EservOne bridges the gap between talent and demand. Whether it&apos;s beauty and wellness, home repairs, automotive care, or professional services, our goal is to create a reliable marketplace where quality meets accessibility.
                  </p>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/images/hero-bg.jpg"
                    alt="EservOne team working together"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatePresence>
      </section>

      {/* Mission Section - Grid Layout */}
      <section className=" py-24">
        <AnimatePresence mode="wait">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Image */}
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/images/mobile-image.png"
                    alt="EservOne mission in action"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <motion.h3
                  className="text-2xl md:text-4xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
                >
                  Our Mission
                </motion.h3>
                <motion.p
                  className="text-base md:text-lg text-gray-300 dark:text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Our mission is to connect customers with service providers by prioritizing transparency, streamlining appointment scheduling, deliver cost-effective solutions and ensure the highest standards of quality service.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </section>

      {/* Vision Section - Grid Layout */}
      <section className="bg-gray-50 dark:bg-gray-900 py-24">
        <AnimatePresence mode="wait">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Text Content */}
              <div className="space-y-6">
                <motion.h3
                  className="text-2xl md:text-4xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
                >
                  Our Vision
                </motion.h3>
                <motion.p
                  className="text-base md:text-lg text-gray-300 dark:text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Empowering individuals and businesses to reach their goals by offering seamless access to a diverse range of high-quality services, delivered with convenience, affordability, and trust.
                </motion.p>
              </div>

              {/* Image */}
              {/* Right Side - Line Art Illustration */}
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image src={handWithMoney} alt="Make Money" width={500} height={500} />
              </motion.div>
            </motion.div>
          </div>
        </AnimatePresence>
      </section>


      {/* Why Choose EservOne Section - Card Layout */}
      <section className=" py-24">
        <AnimatePresence mode="wait">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.p
                className="text-sm md:text-base text-gray-400 dark:text-gray-500 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Jump into why?
              </motion.p>
              <motion.h3
                className="text-3xl md:text-5xl font-bold text-foreground mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
              >
                Our Benefits We Can Offer to You, Dear Clients
              </motion.h3>
              <motion.p
                className="text-base md:text-lg text-gray-300 dark:text-gray-400 max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                At EservOne, we&apos;re not just a marketplace. We&apos;re building a community where skills create opportunities, and customers find peace of mind.
              </motion.p>
            </motion.div>

            {/* Main Content Grid */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Video/Image Section */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                  <Image
                    src="/assets/images/hero-bg.jpg"
                    alt="EservOne platform demonstration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Featured Card */}
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-6xl font-bold text-green-500 mb-4">01.</div>
                <h4 className="text-2xl font-bold text-foreground mb-4">Trust & Safety</h4>
                <p className="text-gray-300 dark:text-gray-400 mb-6">
                  Every provider is verified and every booking is secured. We ensure your safety and peace of mind with our comprehensive verification process and secure payment system.
                </p>
                <motion.button
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Benefits Cards Grid */}
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {[
                {
                  number: "02",
                  title: "Affordability & Quality",
                  description: "We ensure services are accessible without compromising standards. Get premium quality at fair prices."
                },
                {
                  number: "03",
                  title: "Empowerment",
                  description: "We give service providers tools to grow, thrive, and achieve independence in their careers."
                },
                {
                  number: "04",
                  title: "Innovation",
                  description: "We're constantly improving to deliver smarter, faster, and more user-friendly experiences."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.6 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="text-4xl font-bold text-foreground mb-4">{benefit.number}.</div>
                  <h5 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h5>
                  <p className="text-gray-300 dark:text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatePresence>
      </section>



      <GetStarted />
    </main>
  );
}
