"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants, containerVariants, itemVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { AlertCircle, Calendar, CheckCircle, ChevronRight, Clock, Eye, FileText, Globe, Info, Lock, Mail, MapPin, RefreshCw, Shield, User, Users } from "lucide-react";
import Link from "next/link";
import LegalPageHeader from "./legal-page-header";

export default function PrivacyPolicyPage() {
  const effectiveDate = "July 9, 2025";

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20 pb-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <LegalPageHeader
            title="Privacy Policy for EservOne"
            description="This Privacy Policy explains how EservOne collects, uses, and protects your personal information when you use our platform."
            effectiveDate={effectiveDate}
            icon={Shield}
          />

          {/* Table of Contents */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  Quick Navigation
                </CardTitle>
                <CardDescription className="text-lg">
                  Jump to any section of our privacy policy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      { href: "#information-we-collect", title: "Information We Collect", icon: Eye },
                      { href: "#how-we-use-information", title: "How We Use Your Information", icon: FileText },
                      { href: "#sharing-information", title: "Sharing of Information", icon: Users },
                      { href: "#cookies-tracking", title: "Cookies and Tracking", icon: Eye },
                      { href: "#data-retention", title: "Data Retention", icon: Calendar },
                      { href: "#your-rights", title: "Your Rights", icon: Shield },
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-slate-600 dark:hover:to-slate-500 transition-all duration-300 group"
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <item.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                          {index + 1}. {item.title}
                        </span>
                        <ChevronRight className="h-4 w-4 text-gray-400 ml-auto group-hover:text-blue-600 transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {[
                      { href: "#data-security", title: "Data Security", icon: Lock },
                      { href: "#children-privacy", title: "Children Privacy", icon: Users },
                      { href: "#international-transfers", title: "International Data Transfers", icon: Globe },
                      { href: "#policy-changes", title: "Changes to This Policy", icon: RefreshCw },
                      { href: "#contact-us", title: "Contact Us", icon: Mail },
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-slate-600 dark:hover:to-slate-500 transition-all duration-300 group"
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <item.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                          {index + 7}. {item.title}
                        </span>
                        <ChevronRight className="h-4 w-4 text-gray-400 ml-auto group-hover:text-blue-600 transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Information We Collect */}
          <motion.section id="information-we-collect" variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      1. Information We Collect
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      We collect various types of information to provide and improve our services.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <User className="h-5 w-5 text-blue-600" />
                      Personal Information
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      {[
                        "Full name",
                        "Email address",
                        "Phone number",
                        "Profile photo",
                        "Address or location",
                        "Payment and billing details",
                        "Identification documents (if applicable)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-green-600" />
                      Usage Data
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      {[
                        "IP address",
                        "Device and browser type",
                        "App and site usage patterns",
                        "Booking and transaction history",
                        "Communications made through the platform",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-purple-600" />
                      Location Data
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      Collected with your permission to enable features like real-time service tracking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* How We Use Your Information */}
          <motion.section id="how-we-use-information" variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      2. How We Use Your Information
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      We use the data we collect to provide and improve our services.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      Core Services
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      {[
                        "Create and manage your account",
                        "Enable service bookings and payments",
                        "Allow communication between users",
                        "Send service updates and promotional messages",
                        "Respond to support requests",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Info className="h-5 w-5 text-green-600" />
                      Platform Improvement
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      {[
                        "Improve user experience and platform functionality",
                        "Detect fraud and ensure platform security",
                        "Meet legal and regulatory requirements",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Sharing of Information */}
          <motion.section id="sharing-information" variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      3. Sharing of Information
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      We may share your information in limited circumstances as described below.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "With Other Users",
                      description: "Name, location, and profile during a booking",
                      color: "blue",
                      icon: Users,
                    },
                    {
                      title: "With Trusted Vendors",
                      description: "Third-party vendors for payments, hosting, and analytics",
                      color: "green",
                      icon: CheckCircle,
                    },
                    {
                      title: "Legal Requirements",
                      description: "With law enforcement or government agencies when legally required",
                      color: "red",
                      icon: Shield,
                    },
                    {
                      title: "Business Transfers",
                      description: "In case of a company merger, acquisition, or asset sale",
                      color: "purple",
                      icon: FileText,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border-l-4 border-${item.color}-500`}
                      whileHover={{ y: -2, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border-l-4 border-green-500">
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                    We do not sell your personal information to third parties.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Cookies and Tracking */}
          <motion.section id="cookies-tracking" variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      4. Cookies and Tracking
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      We use cookies and similar technologies to enhance your experience.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-blue-600" />
                        Authentication & Security
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Authenticate users
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          Maintain session security
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Info className="h-5 w-5 text-green-600" />
                        Analytics & Personalization
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          Analyze traffic and usage patterns
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          Personalize content
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      You can adjust your browser settings to manage cookies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Data Retention */}
          <motion.section id="data-retention" variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      5. Data Retention
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      We retain personal data only as long as necessary for specific purposes.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    {[
                      "Fulfill the purposes outlined in this policy",
                      "Comply with legal obligations",
                      "Resolve disputes",
                      "Enforce our agreements",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Your Rights */}
          <motion.section id="your-rights" variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      6. Your Rights
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      You have certain rights regarding your personal information.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-indigo-600" />
                      Data Control Rights
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      {[
                        "Access, update, or delete your data",
                        "Object to processing",
                        "Withdraw consent at any time",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-purple-600" />
                      Complaint Rights
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        File a complaint with a data protection authority
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border-l-4 border-blue-500">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    To exercise any of these rights, please contact us.
                  </p>
                  <Button variant="outline" size="sm" asChild className="bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700">
                    <Link href="/privacy/delete-account">Request Account Deletion</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Data Security */}
          <motion.section id="data-security" variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      7. Data Security
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      We take data protection seriously and implement comprehensive security measures.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-red-600" />
                      Security Measures
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      {[
                        "Encryption (SSL/TLS)",
                        "Access controls and secure storage",
                        "Regular monitoring and system audits",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                      Security Notice
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      Despite our efforts, no system is entirely immune to security risks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Children's Privacy */}
          <motion.section id="children-privacy" variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      8. Children&apos;s Privacy
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Our services are not intended for children under 13 years of age.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border-l-4 border-pink-500">
                  <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      EservOne does not knowingly collect information from children under 13.
                    </p>
                    <p>
                      If we become aware of such data, we will delete it immediately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* International Data Transfers */}
          <motion.section id="international-transfers" variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      9. International Data Transfers
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Your data may be processed in countries outside your own.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border-l-4 border-teal-500">
                  <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      Your data may be processed in countries outside your own, including Canada and other jurisdictions.
                    </p>
                    <p>
                      By using EservOne, you consent to such data transfers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Changes to This Policy */}
          <motion.section id="policy-changes" variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg">
                    <RefreshCw className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      10. Changes to This Policy
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      We may revise this Privacy Policy from time to time.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border-l-4 border-amber-500">
                  <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      Updates will be posted here and effective as of the date of posting.
                    </p>
                    <p>
                      You should review this policy regularly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Contact Us */}
          <motion.section id="contact-us" variants={itemVariants} className="mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      11. Contact Us
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      If you have any questions or concerns about this Privacy Policy, please contact us.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-teal-600" />
                      Contact Information
                    </h4>
                    <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      <p><strong>Company:</strong> EservOne</p>
                      <p><strong>Email:</strong> <span className="font-mono text-teal-600 dark:text-teal-400">Sundayodeniyi@eservone.Microsoft.com</span></p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-cyan-600" />
                      Response Time
                    </h4>
                    <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      <p>We aim to respond to privacy inquiries within 30 days.</p>
                      <p>For urgent matters, please use our support email.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border-l-4 border-teal-500">
                  <Button asChild className="w-full md:w-auto bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg">
                    <a href="mailto:Sundayodeniyi@eservone.Microsoft.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Privacy Team
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Back to Home */}
          <motion.div
            className="text-center mt-12"
            variants={buttonVariants}
          >
            <Button variant="ghost" asChild className="text-lg px-8 py-3 hover:bg-white/80 dark:hover:bg-slate-800/80">
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