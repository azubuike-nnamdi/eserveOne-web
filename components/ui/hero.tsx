'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { stats } from '@/data';
import {
  backgroundVariants,
  buttonTransition,
  buttonVariants,
  containerVariants,
  itemVariants,
  statItemVariants,
  statsVariants,
  transitionEaseOut,
} from '@/lib/animations';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-32 relative overflow-hidden">
      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={containerVariants.visible.transition}
      >
        <motion.div
          variants={itemVariants}
          transition={transitionEaseOut}
        >
          <Badge variant="secondary" className="mb-4">
            <Smartphone className="w-3 h-3 mr-1" />
            Now Available on Mobile
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
          variants={itemVariants}
          transition={transitionEaseOut}
        >
          Connect with
          <motion.span
            className="text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            {' '}Verified{' '}
          </motion.span>
          <br />
          Service Providers
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
          transition={transitionEaseOut}
        >
          The comprehensive marketplace that bridges skilled professionals with customers seeking quality services at affordable prices.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
          transition={transitionEaseOut}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={buttonTransition}
          >
            <Button size="lg" className="w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={buttonTransition}
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Browse Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          variants={statsVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center cursor-pointer"
              variants={statItemVariants}
              whileHover="hover"
              custom={index}
            >
              <motion.div
                className="text-2xl md:text-3xl font-bold text-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1 + index * 0.1,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      />

      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.5, 0.3],
          scale: [0, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.4, 0.2],
          scale: [0, 1.1, 1],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </section>
  );
}