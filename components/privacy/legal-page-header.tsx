"use client";

import { itemVariants, transitionEaseOut } from "@/lib/animations";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, LucideIcon } from "lucide-react";

interface LegalPageHeaderProps {
  title: string;
  description: string;
  effectiveDate: string;
  icon: LucideIcon;
  iconColor?: string;
}

export default function LegalPageHeader({
  title,
  description,
  effectiveDate,
  icon: Icon,

}: LegalPageHeaderProps) {
  return (
    <motion.div
      className="text-center sm:mb-16 mb-8 md:pt-16 pt-8"
      variants={itemVariants}
    >
      <motion.div
        className="flex justify-center mb-6"
        variants={itemVariants}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={transitionEaseOut}
        >
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
            <Icon className="h-10 w-10 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="h-4 w-4 text-white" />
          </div>
        </motion.div>
      </motion.div>
      <motion.h1
        className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6"
        variants={itemVariants}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed"
        variants={itemVariants}
      >
        {description}
      </motion.p>
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 rounded-full backdrop-blur-sm border border-gray-200 dark:border-slate-700"
        variants={itemVariants}
      >
        <Calendar className="h-4 w-4 text-blue-600" />
        <span className="text-sm text-gray-600 dark:text-gray-300">Effective Date: {effectiveDate}</span>
      </motion.div>
    </motion.div>
  );
} 