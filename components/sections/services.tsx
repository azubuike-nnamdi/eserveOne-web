'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { serviceCategories } from '@/data';
import { containerVariants, statItemVariants } from '@/lib/animations';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  return (
    <section id="services" className="py-20 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From personal care to home services, find the perfect professional for your needs.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={statItemVariants}
                custom={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-card/50 backdrop-blur-sm h-full">
                  <CardHeader className="text-center">
                    <motion.div
                      className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${category.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <category.icon className="w-8 h-8" />
                    </motion.div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}