"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants, containerVariants, itemVariants, transitionEaseOut } from "@/lib/animations";
import { motion } from "framer-motion";
import { AlertTriangle, Mail, Shield, Trash2, UserX } from "lucide-react";
import Link from "next/link";

export default function DeleteAccountPage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20 pb-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <motion.div
              className="flex justify-center mb-4"
              variants={itemVariants}
            >
              <motion.div
                className="h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={transitionEaseOut}
              >
                <UserX className="h-8 w-8 text-red-600 dark:text-red-400" />
              </motion.div>
            </motion.div>
            <motion.h1
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Delete Your Account
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              We&apos;re sorry to see you go. Here&apos;s how to request account deletion and what happens to their data.
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
          >
            {/* How to Request Deletion */}
            <motion.div variants={itemVariants}>
              <Card className="border-2 border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Mail className="h-5 w-5" />
                    </motion.div>
                    How to Request Deletion
                  </CardTitle>
                  <CardDescription>
                    Follow these steps to request account deletion
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <motion.div
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 dark:text-red-400 text-sm font-semibold">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Send us an email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Email us at <span className="font-mono text-blue-600 dark:text-blue-400">support@eservone.com</span> with the subject line Account Deletion Request
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 dark:text-red-400 text-sm font-semibold">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Include required information</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Provide your full name, email address, and reason for deletion
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 dark:text-red-400 text-sm font-semibold">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Verification process</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          We&apos;ll verify your identity and confirm the deletion request
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="pt-4"
                    variants={buttonVariants}
                  >
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                      <a href="mailto:support@eservone.com?subject=Account%20Deletion%20Request">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Deletion Request
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* What Happens to Your Data */}
            <motion.div variants={itemVariants}>
              <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Shield className="h-5 w-5" />
                    </motion.div>
                    Data Deletion Process
                  </CardTitle>
                  <CardDescription>
                    What happens to your information when you delete your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <motion.div
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Trash2 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Immediate Actions</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Your account will be deactivated within 24 hours of verification
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Trash2 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Data Deletion</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          All personal data will be permanently deleted within 30 days
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Trash2 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Service History</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Your service bookings and reviews will be anonymized
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Important Notice */}
          <motion.div variants={itemVariants}>
            <Card className="border-2 border-amber-200 dark:border-amber-800 mb-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertTriangle className="h-5 w-5" />
                  </motion.div>
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <motion.p
                    className="text-gray-700 dark:text-gray-300"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <strong>Irreversible Action:</strong> Account deletion is permanent and cannot be undone. Once your account is deleted, you will lose access to all your data, service history, and account information.
                  </motion.p>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <strong>Active Bookings:</strong> If you have any active service bookings, please cancel them before requesting account deletion.
                  </motion.p>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <strong>Legal Requirements:</strong> Some information may be retained for legal or regulatory purposes as required by law.
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>


          {/* Back to Home */}
          <motion.div
            className="text-center mt-8"
            variants={buttonVariants}
          >
            <Button variant="ghost" asChild>
              <Link href="/">
                ← Back to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 