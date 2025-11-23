"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Shield, CheckCircle2, Award, Users, Building2, Target, TrendingUp, ArrowRight, Gem, FileText, ClipboardCheck, Scale } from "lucide-react"
import { COMPANY_NAME } from "@/lib/constants"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero - Split Layout */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div className="relative min-h-[500px] lg:min-h-[700px]">
              <Image
                src="https://images.unsplash.com/photo-5217918210216?w=1200"
                alt="Professional business team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
              
              <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-6">
                    Est. 2024 • Kampala, Uganda
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    About<br />{COMPANY_NAME}
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                    Your execution partner for compliant, risk-managed investments across Uganda's high-value sectors
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Company Overview */}
            <div className="bg-slate-50 px-8 lg:px-12 py-16 lg:py-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {COMPANY_NAME} executes complete investment transactions in Uganda—from regulatory 
                  compliance through deal closure. We serve international investors requiring institutional-grade 
                  due diligence and local execution expertise in gold exports, government contracts, real estate, 
                  and contract management.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { label: "Founded", value: "2024", icon: Building2 },
                    { label: "Compliance Rate", value: "100%", icon: Shield },
                    { label: "Combined Experience", value: "15+ Years", icon: Award },
                    { label: "Countries Served", value: "25+", icon: Users }
                  ].map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                          <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
                >
                  Explore our services
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Execute
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four specialized services covering Uganda's highest-value investment sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Gem,
                title: "Gold & Mineral Exports",
                description: "DGSM verification, supplier due diligence, export documentation",
                metric: "$2.1B",
                label: "Annual sector value"
              },
              {
                icon: FileText,
                title: "Government Contracts",
                description: "PPDA registration, bid preparation, contract management",
                metric: "$800M+",
                label: "Annual procurement"
              },
              {
                icon: Building2,
                title: "Real Estate Acquisition",
                description: "Property sourcing, title verification, transaction closing",
                metric: "$200M+",
                label: "Annual investment"
              },
              {
                icon: ClipboardCheck,
                title: "Contract Implementation",
                description: "Delivery tracking, compliance reporting, stakeholder coordination",
                metric: "100%",
                label: "Completion rate"
              }
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-blue-600">{service.metric}</div>
                    <div className="text-xs text-gray-600">{service.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Execution Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three-phase approach ensuring compliant, risk-managed transaction completion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                icon: Target,
                title: "Discovery & Planning",
                description: "Initial consultation, opportunity assessment, compliance requirements mapping, timeline and budget development",
                deliverables: ["Feasibility report", "Compliance checklist", "Project timeline"]
              },
              {
                number: "02",
                icon: Shield,
                title: "Due Diligence & Verification",
                description: "License verification, legal due diligence, financial audits, site inspections, regulatory compliance confirmation",
                deliverables: ["DD report", "Risk assessment", "Compliance certification"]
              },
              {
                number: "03",
                icon: CheckCircle2,
                title: "Execution & Delivery",
                description: "Transaction coordination, documentation management, stakeholder liaison, delivery tracking, final reporting",
                deliverables: ["Completed transaction", "Full documentation", "Post-deal support"]
              }
            ].map((phase, index) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all h-full">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold text-white">{phase.number}</span>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 mt-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{phase.description}</p>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 mb-2">Key Deliverables:</div>
                      <ul className="space-y-2">
                        {phase.deliverables.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Performance metrics that demonstrate our commitment to execution excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { metric: "$50M+", label: "Transactions Facilitated", icon: TrendingUp },
              { metric: "100%", label: "Regulatory Compliance", icon: Shield },
              { metric: "2-6 Weeks", label: "Average Turnaround", icon: Target },
              { metric: "25+", label: "Countries Represented", icon: Users }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.metric}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Why Clients Choose Us
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Conflict-Free Advisory", desc: "Independent execution—no investment or trading conflicts" },
                    { title: "Institutional Due Diligence", desc: "Comprehensive verification with top-tier legal partners" },
                    { title: "Long-Term Partnerships", desc: "Multi-year client relationships, not transactional" },
                    { title: "Transparent Pricing", desc: "Success-based fees with clear terms" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white mb-1">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[400px] lg:min-h-full">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                  alt="Business success"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-900/60 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Execute Your Uganda Investment?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Schedule a consultation to discuss your investment requirements and our execution approach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
              >
                Schedule consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 border-2 border-gray-300 text-slate-900 rounded-lg font-semibold transition-all"
              >
                View our services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
