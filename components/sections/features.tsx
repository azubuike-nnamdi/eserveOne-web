'use client'

import { features } from '@/data';
import { containerVariants, statItemVariants } from '@/lib/animations';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { GlowingEffect } from '../ui/glowing-effect';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div>
      <section id="features" className="py-20 bg-card/30" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose EservOne?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve built the most comprehensive platform to ensure quality, security, and convenience for everyone.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <AnimatePresence>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={statItemVariants}
                  custom={index}
                >
                  <div className="relative rounded-lg">
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
                    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm h-full relative rounded-lg">
                      <CardHeader>
                        <motion.div
                          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                        >
                          <feature.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground">
                          {feature.description}
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
    </div>
  )
}