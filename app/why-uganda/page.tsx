"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Building2, 
  Globe, 
  TrendingUp, 
  Network, 
  Mountain, 
  Users, 
  ArrowRight,
  CheckCircle2,
  MapPin,
  Award,
  Target,
  Shield,
  Briefcase,
  BarChart3
} from "lucide-react"

export default function WhyUgandaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section - Split Layout */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div className="relative min-h-[500px] lg:min-h-[700px]">
              <Image
                src="/uganda-landscape.jpg"
                alt="Uganda landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
              
              <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-6">
                    <MapPin className="h-4 w-4" />
                    <span>East Africa Investment Hub</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Why Invest<br />in Uganda?
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-lg mb-8">
                    Strategic location, robust economic growth, and unmatched market access across East Africa
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Key Stats Dashboard */}
            <div className="bg-slate-50 px-8 lg:px-12 py-16 lg:py-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Investment Fundamentals</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Users,
                      label: "Population",
                      value: "48M+",
                      detail: "70% under age 30",
                      trend: "+3.2% annually"
                    },
                    {
                      icon: TrendingUp,
                      label: "GDP Growth",
                      value: "5.3%",
                      detail: "Average annual rate",
                      trend: "Consistent expansion"
                    },
                    {
                      icon: Network,
                      label: "Market Access",
                      value: "1.3B",
                      detail: "People via EAC & AfCFTA",
                      trend: "Regional integration"
                    },
                    {
                      icon: Mountain,
                      label: "Key Exports",
                      value: "$3.5B",
                      detail: "Gold, coffee, agriculture",
                      trend: "Growing trade volume"
                    }
                  ].map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                            <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-700">{stat.detail}</div>
                            <div className="text-xs text-blue-600 mt-1 font-medium">{stat.trend}</div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300">
                  <Link
                    href="/opportunities"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
                  >
                    Explore investment opportunities
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Investment Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Uganda's Investment Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five core pillars that make Uganda East Africa's premier investment destination
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                icon: MapPin,
                title: "Strategic Location & Market Access",
                description: "Landlocked yet strategically positioned at the heart of East Africa with EAC and AfCFTA membership providing tariff-free access to 1.3 billion consumers across 54 African countries.",
                metrics: [
                  { label: "Regional Population", value: "300M+" },
                  { label: "Continental Access", value: "1.3B" },
                  { label: "Trade Partners", value: "54" }
                ]
              },
              {
                icon: Mountain,
                title: "Resource-Rich Economy",
                description: "Abundant natural resources including gold (top 10 global exporter), commercial oil reserves, fertile agricultural land, and renewable energy potential.",
                metrics: [
                  { label: "Gold Exports", value: "$2.1B" },
                  { label: "Coffee Production", value: "Top 10" },
                  { label: "Arable Land", value: "34M+ ha" }
                ]
              },
              {
                icon: Users,
                title: "Young, Trainable Workforce",
                description: "One of the world's youngest populations with 70% under age 30, providing a large pool of motivated, trainable talent with competitive labor costs.",
                metrics: [
                  { label: "Working Age Pop", value: "48M" },
                  { label: "Youth (Under 30)", value: "70%" },
                  { label: "Annual Growth", value: "+3.2%" }
                ]
              },
              {
                icon: Building2,
                title: "Business-Friendly Environment",
                description: "Stable macroeconomic policies, competitive tax incentives, minimal capital requirements, and streamlined company registration through URSB.",
                metrics: [
                  { label: "Corporate Tax", value: "30%" },
                  { label: "VAT Rate", value: "18%" },
                  { label: "Min. Capital", value: "None" }
                ]
              },
              {
                icon: TrendingUp,
                title: "Consistent Economic Growth",
                description: "Average GDP growth of 5.3% over the past decade with diversified economy spanning agriculture, services, manufacturing, and emerging sectors.",
                metrics: [
                  { label: "Avg GDP Growth", value: "5.3%" },
                  { label: "GDP (2024)", value: "$45B" },
                  { label: "FDI Inflows", value: "$1.3B" }
                ]
              }
            ].map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all"
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Left: Icon & Title */}
                    <div className="bg-slate-50 p-8 flex flex-col justify-center">
                      <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                    </div>

                    {/* Right: Metrics */}
                    <div className="md:col-span-2 p-8 bg-white">
                      <div className="flex items-center gap-2 mb-6">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold text-slate-900">Key Metrics</h4>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                        {pillar.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Priority Investment Sectors */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Priority Investment Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-growth opportunities across Uganda's diversified economy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                sector: "Gold & Minerals",
                value: "$2.1B",
                metric: "Annual exports",
                opportunity: "12+ verified DGSM-licensed suppliers",
                growth: "Top 10 global gold exporter",
                href: "/opportunities/gold-minerals"
              },
              {
                sector: "Government Contracts",
                value: "$800M+",
                metric: "Annual procurement",
                opportunity: "8 active PPDA tenders tracked",
                growth: "Health, infrastructure, IT sectors",
                href: "/opportunities/government-contracts"
              },
              {
                sector: "Commercial Agriculture",
                value: "$950M",
                metric: "Coffee exports",
                opportunity: "Direct farm partnerships available",
                growth: "Arabica & Robusta, top 10 exporter",
                href: "/opportunities/coffee-exports"
              },
              {
                sector: "Real Estate",
                value: "$200M+",
                metric: "Annual investment",
                opportunity: "50+ verified commercial properties",
                growth: "Kampala & industrial zones",
                href: "/opportunities/land-acquisitions"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block group bg-white border-2 border-gray-200 hover:border-blue-500 rounded-2xl p-8 hover:shadow-xl transition-all h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.sector}
                    </h3>
                    <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-1">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.metric}</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item.opportunity}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item.growth}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
            >
              View all investment opportunities
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Readiness & Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Investment Readiness Checklist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential requirements and best practices for successful Uganda investments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Shield,
                title: "Regulatory Compliance",
                items: [
                  "URSB company registration",
                  "URA tax registration (TIN)",
                  "DGSM licensing (gold sector)",
                  "PPDA registration (government contracts)"
                ]
              },
              {
                icon: Briefcase,
                title: "Due Diligence Requirements",
                items: [
                  "Verify all licenses and permits",
                  "Legal title verification",
                  "Financial audits and background checks",
                  "Regulatory compliance confirmation"
                ]
              },
              {
                icon: Award,
                title: "Local Partnership",
                items: [
                  "Engage experienced local advisors",
                  "Partner with licensed professionals",
                  "Build relationships with authorities",
                  "Understand cultural business practices"
                ]
              }
            ].map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          {/* Professional Support CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-6 w-fit">
                  Expert Guidance Available
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Navigate Uganda's Investment Landscape
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Diamond Capital Africa provides comprehensive execution services ensuring full regulatory 
                  compliance, risk mitigation, and successful transaction completion across all investment sectors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
                  >
                    Explore our services
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-semibold transition-all"
                  >
                    Schedule consultation
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[400px] lg:min-h-full">
                <Image
                  src="/business-team.jpg"
                  alt="Business consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-900/40 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}