'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      title: "Search For Services",
      description: "Enter the service you need (e.g plumbing, mechanic, e.t.c)"
    },
    {
      step: "Step 2",
      title: "Connect With Provider",
      description: "Browse a list of qualified service providers in your area and view their profile"
    },
    {
      step: "Step 3",
      title: "Provider Delivers",
      description: "Hire a provider, schedule the service and enjoy a job well done"
    }
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            How It Works
          </h2>
        </motion.div>

        {/* Steps Container */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {steps.map((stepData, index) => (
            <motion.div
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Step Content */}
              <div className="space-y-4">
                {/* Step Number */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  {stepData.step}
                </h3>

                {/* Step Title */}
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                  {stepData.title}
                </h4>

                {/* Step Description */}
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto dark:text-white">
                  {stepData.description}
                </p>
              </div>

              {/* Connecting Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-8 -right-6 lg:-right-12"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (index * 0.2) + 0.3 }}
                  viewport={{ once: true }}
                >
                  <ArrowRight className="w-8 h-8 text-gray-400 dark:text-white" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Steps with Vertical Layout */}
        <div className="md:hidden mt-12">
          {steps.map((stepData, index) => (
            <motion.div
              key={index}
              className="text-center mb-8 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Step Content */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stepData.step}
                </h3>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {stepData.title}
                </h4>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto dark:text-white">
                  {stepData.description}
                </p>
              </div>

              {/* Vertical Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (index * 0.2) + 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-0.5 h-8 bg-gray-300 mx-auto dark:bg-white "></div>
                  <div className="w-3 h-3 border-r-2 border-b-2 border-gray-300 transform rotate-45 mx-auto -mt-1"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}