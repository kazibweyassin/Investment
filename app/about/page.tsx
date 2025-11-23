"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Shield, CheckCircle2, Award, Users, Building2, TrendingUp, ArrowRight, Gem, FileText, ClipboardCheck } from "lucide-react"
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
                src="/business-team.jpg"
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
                    Your business partner for compliant, risk-managed investments across Uganda's high-value sectors
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
              Complete transaction execution across Uganda's high-value investment sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Gem,
                title: "Gold & Mineral Exports",
                description: "DGSM compliance, supplier verification, export documentation",
                metric: "$1.5M+ facilitated"
              },
              {
                icon: FileText,
                title: "Government Contracts",
                description: "PPDA registration, bid preparation, contract management",
                metric: "$1.2M+ secured"
              },
              {
                icon: Building2,
                title: "Real Estate Acquisition",
                description: "Property sourcing, title verification, transaction closing",
                metric: "$800K+ closed"
              },
              {
                icon: ClipboardCheck,
                title: "Contract Implementation",
                description: "Delivery tracking, compliance reporting, stakeholder coordination",
                metric: "Multi-year partnerships"
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
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{service.description}</p>
                  <div className="text-xs font-semibold text-blue-600">{service.metric}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Award className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-900">Our Foundation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Born from Experience, Built on Trust
              </h2>
            </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2024, <span className="font-semibold text-slate-900">{COMPANY_NAME}</span> was established to address the critical gap between high-value investment opportunities in Uganda and the complex regulatory requirements that foreign investors face.
                </p>

                <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                  <p className="text-blue-900 font-medium">
                    "Too many viable deals fail—not because opportunities aren't real, but because investors can't navigate Uganda's regulatory framework with confidence."
                  </p>
                </div>

                <p>
                  We operate under strict international compliance standards, making us the trusted on-the-ground presence that ensures every transaction is legally secure. Our team combines deep local regulatory knowledge with international best practices.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  "100% Regulatory Compliance",
                  "Licensed Partner Network",
                  "Transaction Transparency",
                  "Long-term Partnerships"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden order-1 lg:order-2"
            >
              <Image
                src="/business-operations.jpg"
                alt="Business operations in Uganda"
                fill
                className="object-cover"
              />
            </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Four Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The foundation of every transaction we execute
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Absolute Compliance",
                description: "Zero tolerance for regulatory shortcuts. Every transaction executed through verified legal channels with complete documentation.",
                number: "01"
              },
              {
                title: "Transaction Transparency",
                description: "Complete visibility into every step—from initial due diligence through final delivery. Real-time progress tracking for all stakeholders.",
                number: "02"
              },
              {
                title: "Performance Accountability",
                description: "Client success is our only metric. We don't get paid until your transaction closes successfully and completely.",
                number: "03"
              },
              {
                title: "Long-term Partnerships",
                description: "Building lasting relationships over one-time transactions. Your growth in Uganda is our shared objective.",
                number: "04"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {principle.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 pr-12">{principle.title}</h3>
                <p className="text-gray-700 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Local Expertise, Global Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep local regulatory knowledge combined with international compliance standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-blue-200 rounded-xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Local Regulatory Expertise</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ugandan nationals with 15+ years of combined experience in regulatory compliance, government relations, and investment facilitation across gold exports, government contracts, and real estate.
              </p>
              <div className="space-y-3">
                {[
                  "DGSM gold export procedures",
                  "PPDA government contracting",
                  "Land title verification systems"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-blue-200 rounded-xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">International Standards</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                International team members with experience from major financial centers and multinational corporations, applying global best practices to every Uganda transaction.
              </p>
              <div className="space-y-3">
                {[
                  "International compliance protocols",
                  "Multi-jurisdiction due diligence",
                  "Cross-border transaction structure"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government Registration & Credibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Registered & Licensed</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Government-Compliant Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Operating under Uganda's Investment Code with verified partnerships
            </p>
          </motion.div>

          {/* Registration Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">URSB Registered</h3>
                  <p className="text-blue-900 font-medium">Uganda Registration Services Bureau</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Officially registered business entity with the Uganda Registration Services Bureau, 
                ensuring legal compliance and transparency in all operations.
              </p>
              <div className="flex items-center gap-2 text-blue-700 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <span>Verified Business Registration</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Code 1991</h3>
                  <p className="text-teal-900 font-medium">Revised 2019 - Full Compliance</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Operating in full compliance with Uganda's Investment Code Act, ensuring all facilitated 
                investments meet legal requirements and regulatory standards.
              </p>
              <div className="flex items-center gap-2 text-teal-700 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <span>Legal Framework Adherence</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Licensed Partner Network</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Gem,
                  title: "DGSM Licensed Gold Dealers",
                  description: "Directorate of Geological Survey & Mines certified exporters"
                },
                {
                  icon: FileText,
                  title: "PPDA Registered Contractors",
                  description: "Public Procurement & Disposal of Assets Authority verified"
                },
                {
                  icon: Building2,
                  title: "Land Title Verification",
                  description: "Ministry of Lands approved property transaction partners"
                }
              ].map((partner, index) => {
                const Icon = partner.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{partner.title}</h4>
                    <p className="text-sm text-gray-600">{partner.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Execute Your Uganda Investment?
            </h2>
            <p className="text-xl text-gray-300">
              Complete compliance, transparent execution, guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Your Transaction
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}