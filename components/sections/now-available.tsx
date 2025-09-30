'use client';

import { Button } from '@/components/ui/button';
import { appleStoreIcon, googlePlayStoreIcon, mobileImage } from '@/config/images';
import { buttonTransition, buttonVariants } from '@/lib/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Spotlight } from '../ui/spotlight';

const NowAvailable = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <Spotlight />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-2xl font-semibold text-gray-600 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Now Available On Mobile
              </motion.h2>
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Find Trusted Service Providers Near You
              </motion.h1>
              <motion.p
                className="text-sm text-gray-600 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Connect with skilled professionals
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={buttonTransition}
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
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={buttonTransition}
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

            {/* Statistics Grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
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
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="bg-white rounded-lg shadow-none border border-gray-300 p-4 mb-2">
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>


          </motion.div>

          {/* Right Content - Mobile Phone Mockup */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <Image
              src={mobileImage}
              alt="Mobile Phone"
              width={300}
              height={200}
              className="mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NowAvailable;