"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Landmark, CheckCircle2, ArrowRight, Shield, Clock, 
  FileText, Users, Award, ChevronRight, Star,
  Scale, Globe2, DollarSign, Target, TrendingUp
} from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

const FEATURES = [
  {
    icon: Shield,
    title: "8 Active Tenders",
    description: "Pre-qualified PPDA tenders across health, infrastructure, and supply sectors"
  },
  {
    icon: FileText,
    title: "PPDA Compliant",
    description: "Full PPDA registration and compliance support for all bids"
  },
  {
    icon: Clock,
    title: "Bid Preparation",
    description: "Complete bid documentation, technical proposals, and financial submissions"
  },
  {
    icon: Scale,
    title: "Contract Execution",
    description: "Post-award contract management and delivery oversight"
  }
]

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Tender Identification",
    description: "We identify PPDA tenders matching your capabilities and track upcoming opportunities.",
    duration: "Ongoing"
  },
  {
    number: "02",
    title: "PPDA Registration",
    description: "Complete PPDA supplier registration, category selection, and compliance setup.",
    duration: "2-4 weeks"
  },
  {
    number: "03",
    title: "Bid Preparation",
    description: "Technical proposal writing, financial bid preparation, and documentation compilation.",
    duration: "2-6 weeks"
  },
  {
    number: "04",
    title: "Submission & Evaluation",
    description: "Bid submission coordination, evaluation support, and clarification responses.",
    duration: "4-12 weeks"
  },
  {
    number: "05",
    title: "Contract Award & Execution",
    description: "Contract negotiation, signing, and post-award delivery management.",
    duration: "Variable"
  }
]

const OPPORTUNITY_HIGHLIGHTS = [
  "PPDA pre-qualification support",
  "Active tender tracking",
  "Complete bid documentation",
  "Technical proposal writing",
  "Financial bid preparation",
  "Post-award contract management"
]

const FAQS = [
  {
    question: "What investment size is required?",
    answer: "Government contract values range from $200K to $50M+. Minimum bid bonds typically range from 2-5% of contract value. We work with clients across all contract sizes."
  },
  {
    question: "What is PPDA and why is registration required?",
    answer: "The Public Procurement and Disposal of Public Assets Authority (PPDA) regulates all government procurement in Uganda. All suppliers must be registered with PPDA to bid on government contracts. We handle complete registration and compliance."
  },
  {
    question: "How long does PPDA registration take?",
    answer: "PPDA registration typically takes 2-4 weeks. This includes document preparation, submission, and approval. We expedite the process by ensuring all documentation is complete and compliant on first submission."
  },
  {
    question: "What types of contracts are available?",
    answer: "We track tenders across multiple sectors: medical equipment and supplies, infrastructure development, IT systems, agricultural inputs, construction, and general supplies. We match opportunities to your capabilities."
  },
  {
    question: "Can you guarantee contract awards?",
    answer: "We cannot guarantee awards, but we significantly improve your chances through proper PPDA registration, competitive bid preparation, and compliance. Our success rate for properly qualified clients is strong."
  },
  {
    question: "What are typical contract durations?",
    answer: "Government contracts typically range from 6 months to 3 years, depending on the sector and project scope. We help structure delivery plans and manage contract execution throughout the term."
  }
]

const CASE_STUDY = {
  title: "Health Sector Supply Contract - $4.2M Medical Equipment",
  client: "International Medical Equipment Supplier",
  challenge: "Client wanted to enter Ugandan government health sector but lacked PPDA registration and local bid preparation expertise.",
  solution: "Completed PPDA registration in 3 weeks, prepared winning technical and financial bids for medical equipment tender, coordinated contract negotiation and signing.",
  results: [
    "$4.2M contract awarded (largest in client's portfolio)",
    "PPDA registration completed ahead of deadline",
    "Contract executed with 98% on-time delivery",
    "Client now has 5 active government contracts"
  ]
}

export default function GovernmentContractsOpportunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
            alt="Government contracts and procurement"
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
                { label: "Government Contracts" }
              ]} 
              className="mb-6 text-gray-400"
            />

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
              <Landmark className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Public Procurement</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Government Contract Investment Opportunities
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Access PPDA tenders and execute government contracts in Uganda. We handle complete bid preparation, submission, and post-award contract management.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">8 Active Tenders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">PPDA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">$200K+ Contract Values</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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
              Verified Government Contract Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We execute complete government contract bids with PPDA compliance
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
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
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
              How We Execute Government Contract Bids
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process from tender identification to contract execution
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
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                <p className="text-xs font-semibold text-blue-600">{step.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Highlights */}
      <section className="py-20 bg-blue-50">
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
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-blue-200"
              >
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
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
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 border-2 border-blue-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900 uppercase tracking-wide">Success Story</span>
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
              Ready to Explore Government Contract Opportunities?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Access PPDA tenders and execute government contracts with full compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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

