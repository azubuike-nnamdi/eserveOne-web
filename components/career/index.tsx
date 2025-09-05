"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Lightbulb, Sparkles, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Card } from "../ui/card";
import { GlowingEffect } from "../ui/glowing-effect";
import { WavyBackground } from "../ui/wavy-background";
import CareerCta from "./career-cta";

export function Career() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Wavy Background */}
      <AnimatePresence mode="wait">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <motion.p
            className="text-base md:text-lg text-white font-normal inter-var text-center md:mt-48 mt-36"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We&apos;re Hiring
          </motion.p>
          <motion.p
            className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
          >
            Join Our Dream Team
          </motion.p>
          <motion.p
            className="text-base md:text-lg max-w-2xl mx-auto mt-8 text-white font-normal inter-var text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Be part of an innovative team that&apos;s transforming how businesses operate with smart, seamless, and future-ready solutions
          </motion.p>
          <motion.hr
            className="my-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          />

        </WavyBackground>
      </AnimatePresence>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Building the Future of
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Service Delivery
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  At EservOne, we&apos;re building more than a service marketplace—we&apos;re creating a platform that empowers people, connects communities, and transforms how services are delivered. Our team is passionate, innovative, and driven by a mission to bring skills, security, and independence to service providers and customers everywhere.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Remote-first culture
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Flexible hours
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Growth opportunities
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Cutting-edge technology and creative solutions</p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border border-secondary/20 mt-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">Supportive team and collaborative environment</p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20 -mt-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Growth</h3>
                  <p className="text-sm text-muted-foreground">Continuous learning and career development</p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Impact</h3>
                  <p className="text-sm text-muted-foreground">Make a real difference in people&apos;s lives</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit mx-auto mb-6">
              <Sparkles className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a team that values your growth, creativity, and impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Impact",
                description: "Your work directly helps people access opportunities and build livelihoods.",
                color: "from-red-500/10 to-pink-500/5",
                borderColor: "border-red-500/20",
                iconColor: "text-red-500",
                iconBg: "bg-red-500/10"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Be part of a growing tech company that's shaping the future of digital services.",
                color: "from-yellow-500/10 to-orange-500/5",
                borderColor: "border-yellow-500/20",
                iconColor: "text-yellow-500",
                iconBg: "bg-yellow-500/10"
              },
              {
                icon: TrendingUp,
                title: "Growth",
                description: "We invest in our team's professional and personal development.",
                color: "from-green-500/10 to-emerald-500/5",
                borderColor: "border-green-500/20",
                iconColor: "text-green-500",
                iconBg: "bg-green-500/10"
              },
              {
                icon: Users,
                title: "Culture",
                description: "Collaboration, diversity, and creativity are at the heart of how we work.",
                color: "from-blue-500/10 to-cyan-500/5",
                borderColor: "border-blue-500/20",
                iconColor: "text-blue-500",
                iconBg: "bg-blue-500/10"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                  <Card className={`p-8 text-center h-full hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${item.color} border ${item.borderColor} group relative rounded-lg`}>
                    <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit mx-auto mb-6">
              <Target className="w-4 h-4" />
              Open Positions
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for innovation and impact
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Product & Project Management",
                description: "Lead product strategy and drive project execution",
                icon: Target,
                color: "from-purple-500/10 to-indigo-500/5",
                borderColor: "border-purple-500/20"
              },
              {
                title: "Software Development",
                description: "Frontend, Backend, Mobile - Build amazing experiences",
                icon: Zap,
                color: "from-blue-500/10 to-cyan-500/5",
                borderColor: "border-blue-500/20"
              },
              {
                title: "Marketing & Growth",
                description: "Drive user acquisition and brand awareness",
                icon: TrendingUp,
                color: "from-green-500/10 to-emerald-500/5",
                borderColor: "border-green-500/20"
              },
              {
                title: "Customer Experience",
                description: "Deliver exceptional support and user satisfaction",
                icon: Heart,
                color: "from-pink-500/10 to-rose-500/5",
                borderColor: "border-pink-500/20"
              },
              {
                title: "Business Development",
                description: "Build partnerships and drive business growth",
                icon: Users,
                color: "from-orange-500/10 to-amber-500/5",
                borderColor: "border-orange-500/20"
              },
              {
                title: "Data & Analytics",
                description: "Turn data into actionable insights",
                icon: Lightbulb,
                color: "from-yellow-500/10 to-orange-500/5",
                borderColor: "border-yellow-500/20"
              }
            ].map((role, index) => (
              <motion.div
                key={index}
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-lg flex-1 flex flex-col">
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
                  <Card className={`p-8 h-full hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${role.color} border ${role.borderColor} group cursor-pointer relative rounded-lg flex flex-col`}>
                    <div className="flex flex-col items-center text-center space-y-4 flex-1">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <role.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                      <p className="text-muted-foreground leading-relaxed flex-1">{role.description}</p>
                      <div className="pt-2 mt-auto">
                        <span className="text-sm text-primary font-medium group-hover:text-primary/80 transition-colors">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CareerCta />
    </main >
  );
}