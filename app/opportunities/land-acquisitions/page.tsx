"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  MapPin, CheckCircle2, ArrowRight, Shield, Clock, 
  FileText, Users, Award, ChevronRight, Star,
  Scale, Globe2, DollarSign, Target, Building2
} from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

const FEATURES = [
  {
    icon: Shield,
    title: "50+ Verified Properties",
    description: "Commercial, agricultural, and industrial properties with verified titles"
  },
  {
    icon: FileText,
    title: "Title Verified",
    description: "Complete title verification and land survey conducted by licensed professionals"
  },
  {
    icon: Clock,
    title: "Fast Execution",
    description: "2-6 month acquisition timeline from sourcing to registered title"
  },
  {
    icon: Scale,
    title: "Full Due Diligence",
    description: "Legal, survey, and regulatory compliance checks included"
  }
]

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Property Sourcing",
    description: "We identify properties matching your criteria through our vetted network of agents and off-market opportunities.",
    duration: "2-6 weeks"
  },
  {
    number: "02",
    title: "Due Diligence",
    description: "Comprehensive title verification, boundary surveys, encumbrance searches, and regulatory compliance checks.",
    duration: "3-6 weeks"
  },
  {
    number: "03",
    title: "Negotiation & Agreement",
    description: "Price negotiation, contract drafting, escrow setup, and payment milestone structuring.",
    duration: "4-12 weeks"
  },
  {
    number: "04",
    title: "Title Transfer",
    description: "Complete title transfer process including stamp duty payment and registration with Ministry of Lands.",
    duration: "2-6 months"
  },
  {
    number: "05",
    title: "Handover",
    description: "Final documentation delivery, registered title transfer, and closing report.",
    duration: "1 week"
  }
]

const OPPORTUNITY_HIGHLIGHTS = [
  "Title verified by licensed lawyers",
  "Boundary surveys included",
  "Encumbrance-free properties",
  "Zoning and regulatory compliance",
  "Full legal documentation",
  "Registered title guarantee"
]

const FAQS = [
  {
    question: "What investment size is required?",
    answer: "Minimum investment is $300K for land acquisitions. Typical transactions range from $500K to $10M+ depending on property type, size, and location."
  },
  {
    question: "How do you verify property titles?",
    answer: "We partner with top-tier land law firms who conduct encumbrance searches, ownership history reviews, and authenticity checks at the Ministry of Lands. Licensed surveyors validate boundaries and produce geo-referenced surveys."
  },
  {
    question: "Can foreigners own property in Uganda?",
    answer: "Foreigners can own property in Uganda through a locally registered company or long-term lease. We coordinate with corporate secretaries and lawyers to set up compliant holding structures when required."
  },
  {
    question: "What types of properties are available?",
    answer: "We source commercial, industrial, and agricultural properties. This includes office buildings, warehouses, manufacturing sites, farmland, and development land across Uganda."
  },
  {
    question: "How long does the acquisition process take?",
    answer: "From property identification to registered title: 3-6 months on average. This includes due diligence (3-6 weeks), negotiation (4-12 weeks), and title transfer (2-6 months depending on government processing times)."
  },
  {
    question: "What are the government fees?",
    answer: "Government fees include stamp duty (4% of property value), registration fees, survey fees, and legal fees. We provide a complete cost breakdown before you commit to any transaction."
  }
]

const CASE_STUDY = {
  title: "Industrial Land Acquisition - Kampala Logistics Hub",
  client: "East African Logistics Consortium",
  challenge: "Client needed 20 acres within 15km of Kampala with clear title, road access, and power connectivity for a regional distribution center.",
  solution: "Identified six viable parcels, conducted full legal/survey due diligence, negotiated a 12% discount, structured escrow, and coordinated title transfer within 14 weeks.",
  results: [
    "Registered title delivered with zero encumbrances",
    "Utility connection letters secured pre-closing",
    "$3.8M transaction completed below budget",
    "Client engaged us for ongoing construction contract administration"
  ]
}

export default function LandAcquisitionsOpportunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/agriculture-field.jpg"
            alt="Land and real estate"
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
                { label: "Land Acquisitions" }
              ]} 
              className="mb-6 text-gray-400"
            />

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/10 border border-emerald-500/20 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">Real Estate & Land</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Land Acquisition Investment Opportunities
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Access verified commercial, agricultural, and industrial properties in Uganda. We execute complete acquisitions—from property sourcing through registered title transfer.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">50+ Verified Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Title Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">$300K Minimum Investment</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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
              Verified Property Investment Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We execute complete property acquisitions with verified titles and full due diligence
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
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
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
              How We Execute Property Acquisitions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process from property sourcing to registered title
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
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-all"
              >
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                <p className="text-xs font-semibold text-emerald-600">{step.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Highlights */}
      <section className="py-20 bg-emerald-50">
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
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-emerald-200"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
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
            className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 md:p-12 border-2 border-emerald-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-900 uppercase tracking-wide">Success Story</span>
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
              Ready to Explore Property Investment Opportunities?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Access verified properties and execute complete acquisitions with full due diligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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

