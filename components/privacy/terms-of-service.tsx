"use client";

import { buttonVariants, containerVariants, itemVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, ChevronRight, FileText, Globe, Info, Lock, RefreshCw, Shield, Users } from "lucide-react";
import Link from "next/link";
import LegalPageHeader from "./legal-page-header";

const sections = [
  { id: "definitions", label: "Definitions" },
  { id: "registration", label: "Registration" },
  { id: "platform-role", label: "Platform Role & Payment" },
  { id: "verification", label: "Service Provider Verification" },
  { id: "user-obligations", label: "User Obligations" },
  { id: "suspension", label: "Suspension & Termination" },
  { id: "warranties", label: "Warranties & Disclaimers" },
  { id: "dispute", label: "Dispute Resolution" },
  { id: "governing-law", label: "Governing Law" },
  { id: "miscellaneous", label: "Miscellaneous" },
];

export default function TermsOfService() {
  const effectiveDate = "04-08-2025";

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20 pb-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <LegalPageHeader
        title="Terms of Business Agreement"
        description="This Terms of Business Agreement governs the use of the ESERVONE platform, connecting service seekers and providers."
        effectiveDate={effectiveDate}
        icon={FileText}
      />

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-5xl">
        {/* Table of Contents */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
            <div className="text-center pb-6 pt-6">
              <div className="flex items-center justify-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                Quick Navigation
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 mt-2">Jump to any section of our terms</div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 px-6 pb-6">
              {sections.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-slate-600 dark:hover:to-slate-500 transition-all duration-300 group"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {index + 1}. {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Agreement Intro */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl p-6 md:p-10">
            <p className="mb-0 text-base text-gray-700 dark:text-gray-200">
              This Terms of Business Agreement (Agreement) governs the use of the ESERVONE platform, a freelance marketplace connecting service seekers (Service Seekers) and service providers (Service Providers) for various services (Services).<br />
              By registering on ESERVONE, you agree to the terms set forth in this Agreement.
            </p>
          </div>
        </motion.div>

        {/* Sections */}
        <motion.section id="definitions" variants={itemVariants} className="mb-12">
          <motion.div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="h-7 w-7 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Definitions</h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-100">
              <li><b>1.1 Platform</b> refers to ESERVONE, the online platform connecting Service Seekers with Service Providers.</li>
              <li><b>1.2 Service Seekers</b> are users who seek services from Service Providers through the Platform.</li>
              <li><b>1.3 Service Providers</b> are users offering various services through the Platform.</li>
              <li><b>1.4 Services</b> includes but is not limited to barbing, catering, plumbing, and other services provided by Service Providers.</li>
              <li><b>1.5 Payment Processing</b> refers to the payment systems provided by Paystack (for Nigeria) and Stripe (for the US, Canada, and UK).</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section id="registration" variants={itemVariants} className="mb-12">
          <motion.div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <Users className="h-7 w-7 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Registration</h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-100">
              <li><b>2.1</b> Service Seekers must provide an email address for verification and complete account setup by agreeing to the Terms of Service, Privacy Policy, and User Agreement.</li>
              <li><b>2.2</b> Service Providers must complete similar registration procedures and provide the following:
                <ul className="list-disc pl-6 mt-1">
                  <li>A clear profile picture.</li>
                  <li>A valid government-issued ID (e.g., driver’s license, NIN, passport).</li>
                  <li>Their permanent address.</li>
                  <li>A detailed service profile with pricing and relevant experience.</li>
                </ul>
              </li>
              <li><b>2.3 Business Accounts:</b> Service Providers can upgrade to a Business Account for a monthly fee of $9.99 to upload up to five services. Personal accounts are limited to one service.</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section id="platform-role" variants={itemVariants} className="mb-12">
          <motion.div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <Info className="h-7 w-7 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Platform&apos;s Role and Payment Handling</h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-100">
              <li><b>3.1</b> ESERVONE acts solely as an intermediary between Service Seekers and Service Providers and is not liable for the outcome of any service provided.</li>
              <li><b>3.2 Payment Processing:</b> Payment for services is handled by ESERVONE and held until both parties mark the service as complete. Once the job is marked as completed, the payment is remitted to the Service Provider, minus a 10% commission.</li>
              <li><b>3.3 Payment Terms:</b> Payments are processed through Paystack (Nigeria) and Stripe (US, UK, Canada). Service Seekers must make payments prior to service commencement.</li>
              <li><b>3.4 Refunds:</b> Service Seekers are eligible for a full refund if they cancel a booking at least 3 hours before the scheduled job. Service Seekers who cancel within 2 hours of a job’s scheduled time will incur a 5% fee.</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section id="verification" variants={itemVariants} className="mb-12">
          <motion.div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <CheckCircle className="h-7 w-7 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Service Provider Verification</h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-100">
              <li><b>4.1</b> Service Providers may receive a Blue Badge for profile verification and a Green Badge for industrial certifications.</li>
              <li><b>4.2</b> Only verified Service Providers are eligible for full platform access.</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section id="user-obligations" variants={itemVariants} className="mb-12">
          <motion.div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <Users className="h-7 w-7 text-indigo-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. User Obligations</h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-100">
              <li><b>5.1 Service Seekers must:</b>
                <ul className="list-disc pl-6 mt-1">
                  <li>Provide clear, accurate service descriptions.</li>
                  <li>Make timely payments.</li>
                  <li>Honor agreed service schedules.</li>
                </ul>
              </li>
              <li><b>5.2 Service Providers must:</b>
                <ul className="list-disc pl-6 mt-1">
                  <li>Provide accurate service descriptions and pricing.</li>
                  <li>Adhere to professional standards and timelines.</li>
                  <li>Maintain an up-to-date profile with accurate information.</li>
                </ul>
              </li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section id="suspension" variants={itemVariants} className="mb-12">
          <motion.div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <AlertCircle className="h-7 w-7 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Suspension and Termination</h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-100">
              <li><b>6.1 Suspension or Ban:</b> Users may be suspended or banned for:
                <ul className="list-disc pl-6 mt-1">
                  <li>Violating platform terms.</li>
                  <li>Engaging in fraudulent activity.</li>
                  <li>Failing to provide agreed services.</li>
                  <li>Improper communication or behavior.</li>
                </ul>
              </li>
              <li><b>6.2 Termination by ESERVONE:</b> ESERVONE reserves the right to terminate accounts without notice if there is a breach of this Agreement.</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section id="warranties" variants={itemVariants} className="mb-12">
          <motion.div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <Info className="h-7 w-7 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Warranties and Disclaimers</h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-100">
              <li><b>7.1</b> ESERVONE makes no warranties regarding the quality or outcome of services provided by Service Providers. Service Seekers must evaluate and agree upon services directly with Service Providers.</li>
              <li><b>7.2</b> ESERVONE is not liable for any damages or losses incurred due to services provided or not rendered.</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section id="dispute" variants={itemVariants} className="mb-12">
          <motion.div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <Lock className="h-7 w-7 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. Dispute Resolution</h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-100">
              <li><b>8.1 Preferred Method:</b> Any disputes between Service Seekers and Service Providers should first be resolved through direct communication. If unresolved, the dispute may be escalated to mediation or arbitration.</li>
              <li><b>8.2 Applicable Jurisdictions:</b> Disputes shall be governed by the laws of the jurisdiction in which the Service Seeker resides (United States, Canada, Nigeria, or the UK).</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section id="governing-law" variants={itemVariants} className="mb-12">
          <motion.div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="h-7 w-7 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">9. Governing Law</h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-100">
              <li><b>9.1</b> This Agreement shall be governed by the laws of the country where the Service Seeker resides:
                <ul className="list-disc pl-6 mt-1">
                  <li>United States (for US users)</li>
                  <li>Nigeria (for Nigerian users)</li>
                  <li>Canada (for Canadian users)</li>
                  <li>United Kingdom (for UK users)</li>
                </ul>
              </li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section id="miscellaneous" variants={itemVariants} className="mb-12">
          <motion.div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <RefreshCw className="h-7 w-7 text-yellow-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">10. Miscellaneous</h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-100">
              <li><b>10.1 Amendments:</b> ESERVONE reserves the right to modify this Agreement at any time. Any changes will be communicated to users via email or through the Platform.</li>
              <li><b>10.2 Entire Agreement:</b> This Agreement constitutes the entire understanding between the parties and supersedes any prior agreements.</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Back to Home */}
        <motion.div
          className="text-center mt-12"
          variants={buttonVariants}
        >
          <Link href="/" className="inline-block">
            <span className="inline-block text-lg px-8 py-3 rounded-lg bg-white/80 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-700/80 text-indigo-700 dark:text-indigo-200 font-semibold shadow transition-all duration-200">
              ← Back to Home
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}