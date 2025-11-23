"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Gem, CheckCircle2, ArrowRight, Shield, Clock, 
  FileText, Users, Award, ChevronRight, Star,
  Scale, Globe2, DollarSign, Target, Eye, TrendingUp
} from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

const FEATURES = [
  {
    icon: Shield,
    title: "12+ Verified Suppliers",
    description: "Pre-vetted DGSM-licensed gold suppliers with active compliance records"
  },
  {
    icon: FileText,
    title: "Export Ready",
    description: "Complete documentation packages including permits and certificates"
  },
  {
    icon: Clock,
    title: "Fast Execution",
    description: "2-6 week transaction timeline from verification to delivery"
  },
  {
    icon: Scale,
    title: "Quality Guaranteed",
    description: "Independent laboratory testing and purity verification"
  }
]

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Opportunity Discovery",
    description: "We identify verified DGSM-licensed suppliers matching your volume and quality requirements.",
    duration: "1-3 days"
  },
  {
    number: "02",
    title: "Due Diligence & Verification",
    description: "Comprehensive background checks on supplier licenses, compliance history, and gold authenticity.",
    duration: "2-3 weeks"
  },
  {
    number: "03",
    title: "Transaction Setup",
    description: "Negotiate terms, arrange escrow, coordinate independent testing, and draft contracts.",
    duration: "5-7 days"
  },
  {
    number: "04",
    title: "Export Execution",
    description: "Obtain export permits, complete documentation, and coordinate international shipping.",
    duration: "1-2 weeks"
  },
  {
    number: "05",
    title: "Delivery & Payment",
    description: "Secure delivery coordination, final quality verification, and fund release.",
    duration: "Variable"
  }
]

const OPPORTUNITY_HIGHLIGHTS = [
  "DGSM-licensed suppliers only",
  "Export documentation ready",
  "Quality verified through independent testing",
  "Escrow-protected transactions",
  "Full compliance guarantee",
  "Post-transaction support"
]

const FAQS = [
  {
    question: "What investment size is required?",
    answer: "Minimum investment is $200K for gold transactions. Typical transactions range from $500K to $5M+ depending on volume and quality requirements."
  },
  {
    question: "How do you verify suppliers?",
    answer: "We conduct comprehensive due diligence including DGSM license verification, mining permit checks, tax compliance review, and on-site supplier assessments. All suppliers must have active, valid licenses."
  },
  {
    question: "What are the typical gold purity levels?",
    answer: "Uganda produces gold ranging from 22-24 karats (91.6%-99.9% purity). Most exports are 23-24 karat gold. We arrange independent assay testing to verify purity before purchase."
  },
  {
    question: "How long does the process take?",
    answer: "From opportunity identification to delivery: 4-8 weeks on average. This includes due diligence (2-3 weeks), documentation (1-2 weeks), and shipping (1-3 weeks depending on destination)."
  },
  {
    question: "What are the costs involved?",
    answer: "Our facilitation fee is 3-5% of transaction value. Additional costs include: assay testing ($500-1,500), export permits ($2,000-5,000), shipping/insurance (varies by destination), and escrow fees (0.5-1%)."
  },
  {
    question: "Can you help with financing?",
    answer: "We facilitate connections with trade finance providers but do not provide direct financing. Buyers typically need to show proof of funds or secure financing independently."
  }
]

const CASE_STUDY = {
  title: "UAE Trading Company - $2.3M Gold Export",
  client: "Middle East Precious Metals Trader",
  challenge: "Client needed 50kg of 24-karat gold with verified provenance and fast delivery to Dubai.",
  solution: "Matched with DGSM-licensed supplier in Mbarara, completed due diligence in 18 days, arranged independent SGS testing, and coordinated air freight delivery.",
  results: [
    "Transaction completed in 6 weeks (2 weeks ahead of schedule)",
    "Gold tested at 99.7% purity (exceeded 99.5% requirement)",
    "All export documentation approved on first submission",
    "Client has since completed 3 additional transactions"
  ]
}

export default function GoldMineralsOpportunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/coffee-plantation.jpg"
            alt="Gold mining and trading"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/85"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumbs 
              items={[
                { label: "Opportunities", href: "/opportunities" },
                { label: "Gold & Minerals" }
              ]} 
              className="mb-6 text-gray-400"
            />

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/10 border border-amber-500/20 rounded-full mb-6">
              <Gem className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">Precious Metals & Mining</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Gold & Mineral Investment Opportunities
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Access verified DGSM-licensed gold suppliers in Uganda. We execute complete transactions—from supplier verification through export delivery—with full compliance and transparency.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">12+ Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">100% DGSM Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">$200K Minimum Investment</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                Explore Opportunities
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#process"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-semibold transition-all"
              >
                See How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Verified Gold Investment Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We execute complete gold transactions with verified DGSM-licensed suppliers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Execute Gold Transactions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process from opportunity identification to final delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amber-500 transition-all"
              >
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                <p className="text-xs font-semibold text-amber-600">{step.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Highlights */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why These Opportunities Stand Out
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {OPPORTUNITY_HIGHLIGHTS.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-amber-200"
              >
                <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 md:p-12 border-2 border-amber-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-amber-600" />
              <span className="text-sm font-semibold text-amber-900 uppercase tracking-wide">Success Story</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{CASE_STUDY.title}</h3>
            <p className="text-gray-700 mb-2"><strong>Client:</strong> {CASE_STUDY.client}</p>
            <p className="text-gray-700 mb-6"><strong>Challenge:</strong> {CASE_STUDY.challenge}</p>
            <p className="text-gray-700 mb-6"><strong>Solution:</strong> {CASE_STUDY.solution}</p>
            <div className="space-y-2">
              <p className="text-gray-900 font-semibold mb-2">Results:</p>
              {CASE_STUDY.results.map((result, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Gold Investment Opportunities?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with verified DGSM-licensed suppliers and execute compliant gold transactions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/opportunities"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-semibold transition-all"
              >
                View All Opportunities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

