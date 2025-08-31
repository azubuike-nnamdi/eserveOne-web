'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { serviceCategories } from '@/data';
import { containerVariants, statItemVariants } from '@/lib/animations';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GlowingEffect } from '../ui/glowing-effect';

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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
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
                className="h-full flex"
              >
                <div className="relative w-full rounded-lg">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.1}
                    variant="default"
                    blur={1}
                    borderWidth={2}
                  />
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-card/50 backdrop-blur-sm h-full shadow-none relative rounded-lg flex flex-col">
                    <CardHeader className="text-center flex-shrink-0">
                      <motion.div
                        className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 dark:text-white ${category.color}`}
                      >
                        <category.icon className="w-8 h-8" />
                      </motion.div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-center">
                      <CardDescription className="text-center text-muted-foreground">
                        {category.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}