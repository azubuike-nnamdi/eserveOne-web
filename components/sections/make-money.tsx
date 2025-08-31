'use client';

import { Button } from '@/components/ui/button';
import { handWithMoney } from '@/config/images';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function MakeMoney() {
  return (
    <section className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <motion.h2
              className="text-lg font-medium text-gray-600 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Make Money by Registering
            </motion.h2>

            {/* Main Title */}
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight dark:text-white dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Earn With EservOne
            </motion.h1>

            {/* Features List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed dark:text-white">
                  Signup as a service provider and create your profile
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed dark:text-white">
                  Receive job requests from customers in your area
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed dark:text-white">
                  Use our platform to manage your appointments, communicate with customers and track your earnings
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button size="lg" variant="link" className="px-8 py-5 bg-transparent border cursor-pointer w-full sm:w-auto">
                Browse Services
              </Button>
              <Button
                variant="link"
                size="lg"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center group dark:text-white"
              >
                Learn More
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200 dark:text-white">
                  &gt;&gt;
                </span>
              </Button>
            </motion.div>
          </motion.div>

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
        </div>
      </div>
    </section>
  );
}