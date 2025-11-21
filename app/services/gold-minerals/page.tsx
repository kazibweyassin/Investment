"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Gem, CheckCircle2, ArrowRight, Shield, Clock, 
  FileText, Users, Award, ChevronRight, Star,
  Scale, Globe2, DollarSign, Target, Eye
} from "lucide-react"

const FEATURES = [
  {
    icon: Shield,
    title: "Verified DGSM Suppliers",
    description: "Access to 12+ pre-vetted gold suppliers with active DGSM licenses and compliance records"
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    description: "Export permits, certificates of origin, shipping documents, and customs clearance"
  },
  {
    icon: Clock,
    title: "Fast Due Diligence",
    description: "2-3 week comprehensive background checks on suppliers, licenses, and gold authenticity"
  },
  {
    icon: Scale,
    title: "Quality Assurance",
    description: "Independent laboratory testing, purity verification, and weight certification"
  }
]

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We assess your requirements, budget, and timeline. Discuss gold grades, quantities, and delivery terms.",
    duration: "1-2 days"
  },
  {
    number: "02",
    title: "Supplier Matching",
    description: "We connect you with verified DGSM-licensed suppliers that match your specifications and volume needs.",
    duration: "3-5 days"
  },
  {
    number: "03",
    title: "Due Diligence",
    description: "Comprehensive verification of DGSM license, mining permits, tax compliance, and gold authenticity testing.",
    duration: "2-3 weeks"
  },
  {
    number: "04",
    title: "Transaction Setup",
    description: "Negotiate terms, draft contracts, arrange escrow, and coordinate independent assay testing.",
    duration: "5-7 days"
  },
  {
    number: "05",
    title: "Export Documentation",
    description: "Obtain export permits from DGSM, certificates of origin, and arrange international shipping logistics.",
    duration: "1-2 weeks"
  },
  {
    number: "06",
    title: "Delivery & Payment",
    description: "Coordinate secure delivery, final quality verification, and release of funds from escrow.",
    duration: "Variable"
  }
]

const REQUIREMENTS = [
  "Company registration documents (Certificate of Incorporation)",
  "Business plan outlining intended use of gold",
  "Bank reference letter and proof of funds",
  "Valid identification (passport/national ID)",
  "Import license from destination country (if applicable)",
  "End-user certificate or buyer confirmation"
]

const BENEFITS = [
  {
    title: "100% Legal Compliance",
    description: "All suppliers have active DGSM licenses. We verify mining permits, tax clearance, and export authorization.",
    icon: Shield
  },
  {
    title: "Risk Mitigation",
    description: "Independent laboratory testing, escrow arrangements, and comprehensive insurance coverage.",
    icon: Target
  },
  {
    title: "Transparent Pricing",
    description: "Clear pricing structure with no hidden fees. Competitive rates based on London Bullion Market prices.",
    icon: DollarSign
  },
  {
    title: "Post-Transaction Support",
    description: "Ongoing supplier relationship management and assistance with repeat orders.",
    icon: Users
  }
]

const FAQS = [
  {
    question: "What is DGSM and why is it important?",
    answer: "The Directorate of Geological Survey and Mines (DGSM) is Uganda's regulatory authority for mining. All legal gold exports must come from DGSM-licensed suppliers. We only work with verified license holders."
  },
  {
    question: "What are typical gold purity levels in Uganda?",
    answer: "Uganda produces gold ranging from 22-24 karats (91.6%-99.9% purity). Most exports are 23-24 karat gold. We arrange independent assay testing to verify purity before purchase."
  },
  {
    question: "How long does the entire process take?",
    answer: "From initial consultation to delivery: 4-8 weeks on average. This includes due diligence (2-3 weeks), documentation (1-2 weeks), and shipping (1-3 weeks depending on destination)."
  },
  {
    question: "What are the costs involved?",
    answer: "Our facilitation fee is 3-5% of transaction value. Additional costs include: assay testing ($500-1,500), export permits ($2,000-5,000), shipping/insurance (varies by destination), and escrow fees (0.5-1%)."
  },
  {
    question: "Can you help with financing?",
    answer: "We facilitate connections with trade finance providers but do not provide direct financing. Buyers typically need to show proof of funds or secure financing independently."
  },
  {
    question: "What happens if the gold fails quality tests?",
    answer: "If independent testing reveals the gold doesn't meet agreed specifications, the transaction is cancelled and your funds are returned from escrow. We absorb due diligence costs in such cases."
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

export default function GoldMineralsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('/agri.webp')] bg-cover bg-center opacity-80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Gold & Mineral Exports</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600/10 border border-yellow-500/20 rounded-full mb-6">
              <Gem className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-300">Precious Metals & Mining</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Gold & Mineral Export Facilitation
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Connect with verified DGSM-licensed gold suppliers in Uganda. We handle due diligence, 
              export documentation, quality assurance, and logistics coordination for legitimate gold exports.
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
                <span className="text-gray-300">Independent Testing</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group px-8 py-4 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                Start Your Transaction
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
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end facilitation for legitimate gold exports with full compliance and transparency
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
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
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
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 6-step process for secure and compliant gold exports
            </p>
          </motion.div>

          <div className="space-y-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-600 text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What You'll Need
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Required documentation for gold export transactions. We'll guide you through each requirement.
              </p>
              
              <ul className="space-y-4">
                {REQUIREMENTS.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Benefits
              </h3>
              
              <div className="space-y-6">
                {BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 md:p-12 rounded-2xl border border-yellow-200"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">
                Success Story
              </span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {CASE_STUDY.title}
            </h2>
            <p className="text-gray-600 mb-8">{CASE_STUDY.client}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                <p className="text-gray-600">{CASE_STUDY.challenge}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                <p className="text-gray-600">{CASE_STUDY.solution}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Results</h3>
              <ul className="space-y-3">
                {CASE_STUDY.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Gold Export Transaction?
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Connect with verified DGSM suppliers and complete your transaction with full compliance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-yellow-600 hover:bg-gray-100 rounded-lg font-semibold transition-all"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-semibold transition-all"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
