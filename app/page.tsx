"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Gem, Landmark, FileText, Wheat, Server, 
  CheckCircle2, ArrowRight, Shield, Building2, 
  Globe2, Clock, Award, ChevronRight,
  MapPin, DollarSign, Star, Coffee
} from "lucide-react"

const STATS = [
  { number: "$50M+", label: "Transactions Facilitated", icon: DollarSign },
  { number: "100%", label: "Compliance Success", icon: CheckCircle2 },
  { number: "15+", label: "Countries Served", icon: Globe2 },
  { number: "98%", label: "Client Satisfaction", icon: Award }
]

const OPPORTUNITY_CATEGORIES = [
  {
    icon: Gem,
    title: "Gold & Minerals",
    description: "Verified suppliers, export licenses, quality assurance, and logistics coordination",
    stats: "12+ Active Suppliers",
    color: "border-amber-600"
  },
  {
    icon: Coffee,
    title: "Coffee Exports",
    description: "Uganda's #1 export - Arabica & Robusta, direct farm partnerships, UCDA certified",
    stats: "Top 10 Global Exporter",
    color: "border-amber-800"
  },
  {
    icon: Landmark,
    title: "Land Acquisitions",
    description: "Commercial, agricultural, and industrial properties with full title verification",
    stats: "50+ Verified Plots",
    color: "border-emerald-600"
  },
  {
    icon: FileText,
    title: "Government Contracts",
    description: "Health, infrastructure, and supply tenders with bid preparation support",
    stats: "8 Active Tenders",
    color: "border-blue-600"
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Farm partnerships, agri-processing, commodity export opportunities",
    stats: "15+ Opportunities",
    color: "border-green-600"
  },
  {
    icon: Server,
    title: "IT & Infrastructure",
    description: "Government digitization, telecom projects, and technology partnerships",
    stats: "6 Active Projects",
    color: "border-indigo-600"
  }
]

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "Browse verified opportunities or tell us what you're looking for"
  },
  {
    step: "02",
    title: "Connect",
    description: "We introduce you to pre-vetted local partners and government contacts"
  },
  {
    step: "03",
    title: "Navigate",
    description: "We handle licenses, permits, legal compliance, and due diligence"
  },
  {
    step: "04",
    title: "Execute",
    description: "We facilitate negotiations, contracts, payments, and logistics"
  },
  {
    step: "05",
    title: "Support",
    description: "Ongoing operational, compliance, and relationship management"
  }
]

const WHY_CHOOSE = [
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Comprehensive due diligence, partner verification, and compliance management"
  },
  {
    icon: Clock,
    title: "Speed & Efficiency",
    description: "Navigate bureaucracy faster with our government relationships and local expertise"
  },
  {
    icon: CheckCircle2,
    title: "Transparency",
    description: "Clear fees, no hidden costs, regular updates, and full documentation"
  },
  {
    icon: Globe2,
    title: "End-to-End Support",
    description: "From discovery to execution and ongoing operations—we're with you"
  }
]

const TESTIMONIALS = [
  {
    quote: "Their expertise in navigating Uganda's gold sector compliance was invaluable. What could have taken months was completed in weeks.",
    author: "Michael Chen",
    role: "Investment Director",
    company: "Global Resources Ltd",
    flag: "🇨🇳"
  },
  {
    quote: "Professional, transparent, and results-driven. They de-risked our entire tender process and helped us secure a significant government contract.",
    author: "Sarah Williams",
    role: "CEO",
    company: "Infrastructure Solutions",
    flag: "🇬🇧"
  },
  {
    quote: "The level of due diligence and attention to detail exceeded our expectations. We felt confident every step of the way.",
    author: "David Okonkwo",
    role: "Managing Partner",
    company: "Pan-African Ventures",
    flag: "🇳🇬"
  }
]

const CASE_STUDIES = [
  {
    title: "Gold Export Facilitation",
    challenge: "International investor needed to verify gold supplier compliance and facilitate export documentation",
    solution: "Complete DGSM compliance verification, supplier due diligence, and export coordination",
    results: ["$2.5M transaction completed", "100% regulatory compliance", "14-day turnaround"],
    sector: "Gold Sector"
  },
  {
    title: "Infrastructure Tender Success",
    challenge: "Foreign contractor lacked local expertise for PPDA tender process",
    solution: "Full PPDA registration, bid preparation, and stakeholder coordination",
    results: ["$8M contract secured", "Zero compliance issues", "Ongoing support provided"],
    sector: "Government Tenders"
  }
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1920')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Your Gateway to Uganda Business</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Navigate Uganda's Investment Landscape <br />With Zero Compliance Risk
            </h1>
            
            <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl">
              We're the only compliance facilitation firm specializing in gold sector transactions and government tenders. 
              We verify every detail, handle all documentation, and guarantee 100% regulatory compliance—so you can invest with confidence.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
              <strong className="text-white">No surprises. No penalties. No delays.</strong> Just compliant, successful transactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/opportunities"
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Explore investment opportunities"
              >
                Explore Opportunities
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-slate-900 hover:bg-gray-100 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Schedule a consultation"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-green-400" aria-hidden="true" />
                <span><strong className="text-white">100% Compliance Guarantee</strong> — We fix any compliance issues at no extra cost</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-green-400" aria-hidden="true" />
                <span><strong className="text-white">2-6 Week Turnaround</strong> — Fast-track your investment timeline</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-green-400" aria-hidden="true" />
                <span><strong className="text-white">Zero Conflict of Interest</strong> — We don't invest, we only facilitate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => {
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
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Opportunity Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Opportunities We Facilitate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From commodities to contracts—we connect you to verified opportunities across key sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPPORTUNITY_CATEGORIES.map((category, index) => {
              const Icon = category.icon
              return (
                <Link
                  key={index}
                  href="/opportunities"
                  className={`group p-6 bg-white border-2 ${category.color} rounded-xl hover:shadow-lg transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 block`}
                  aria-label={`View ${category.title} opportunities`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform" aria-hidden="true">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {category.stats}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{category.description}</p>
                  <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                    View Opportunities
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                  </motion.div>
                </Link>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="/opportunities"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="View all investment opportunities"
            >
              View All Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Two Specialized Services That Protect Your Investment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't do everything—we do two things exceptionally well: gold sector compliance and government tender navigation. 
              This specialization means deeper expertise, faster results, and zero compliance mistakes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gold Sector Service */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-white border-2 border-amber-200 rounded-2xl p-8 hover:border-amber-400 hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Gem className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Gold Sector Facilitation</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold">
                      <DollarSign className="h-3 w-3" />
                      From $3,000
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                      <Clock className="h-3 w-3" />
                      2-6 weeks
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong className="text-gray-900">The Problem:</strong> Gold transactions in Uganda require complex DGSM compliance, 
                supply chain verification, and export documentation. One mistake can cost you $50,000+ in penalties or months of delays.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong className="text-gray-900">Our Solution:</strong> We verify every license, audit the entire supply chain, 
                coordinate secure transactions, and handle all export paperwork. You get a complete compliance package in 2-6 weeks, 
                guaranteed compliant or we fix it at no extra cost.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">DGSM license verification reports</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Supply chain due diligence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Transaction & escrow coordination</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Export documentation package</span>
                </div>
              </div>

              <Link 
                href="/services#gold"
                className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group-hover:gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Learn more about gold sector facilitation"
              >
                Learn More
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Government Tenders Service */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-white border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <FileText className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Government Tender Navigation</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">
                      <DollarSign className="h-3 w-3" />
                      From $2,500
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                      <Clock className="h-3 w-3" />
                      2-8 weeks
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong className="text-gray-900">The Problem:</strong> Uganda's PPDA tender system is complex and unforgiving. 
                Missing documentation, incorrect submissions, or compliance errors mean automatic disqualification—even for qualified bidders.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong className="text-gray-900">Our Solution:</strong> We handle PPDA registration, identify the right tenders, 
                prepare compliant bids, and coordinate submissions. We've helped clients secure $8M+ in government contracts. 
                Your bid is professionally prepared, fully compliant, and submitted on time—every time.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">PPDA portal registration & setup</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Tender identification & pre-qualification</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Bid preparation & compliance checks</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Contract management support</span>
                </div>
              </div>

              <Link 
                href="/services#tenders"
                className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group-hover:gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Learn more about government tender navigation"
              >
                Learn More
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* Service Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">100% Compliance Guarantee</h3>
                <p className="text-gray-700 leading-relaxed">
                  We guarantee that all work performed meets or exceeds Uganda's regulatory requirements. 
                  If we miss a compliance requirement that results in a penalty or delay, we'll work to 
                  resolve it at no additional cost to you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A clear, transparent process from discovery to successful execution
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {/* Connection line for desktop */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300" style={{ width: 'calc(100% - 80px)', marginLeft: '40px' }}></div>
              
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative z-10"
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Foreign Investors Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep local expertise, transparent processes, and proven track record
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-500 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real transactions—see how we help investors succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {CASE_STUDIES.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                    {study.sector}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{study.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">Challenge</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">Solution</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by International Investors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from clients who successfully navigated Uganda's business landscape with our support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{testimonial.flag}</div>
                <p className="text-gray-700 mb-6 leading-relaxed italic text-sm">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-slate-900 text-sm">{testimonial.author}</p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Invest in Uganda Without the Compliance Headaches?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
              Stop worrying about regulatory compliance. We handle it all—from license verification to export documentation. 
              You focus on your investment; we ensure it's 100% compliant.
            </p>
            
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              <strong className="text-white">Free 30-minute consultation</strong> to discuss your specific needs. 
              Get a detailed quote within 24 hours. No obligation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg hover:shadow-xl"
                aria-label="Schedule a free consultation"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 bg-white text-slate-900 hover:bg-gray-100 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="View our services and pricing"
              >
                View Services & Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
