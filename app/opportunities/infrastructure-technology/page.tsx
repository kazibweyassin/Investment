"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Server, CheckCircle2, ArrowRight, Shield, Clock, 
  FileText, Users, Award, ChevronRight, Star,
  Scale, Globe2, DollarSign, Target, TrendingUp
} from "lucide-react"

const FEATURES = [
  {
    icon: Shield,
    title: "6 Active Projects",
    description: "Government digitization, telecom, and infrastructure development projects"
  },
  {
    icon: FileText,
    title: "PPDA Compliant",
    description: "Full PPDA registration and bid preparation support"
  },
  {
    icon: Clock,
    title: "Multi-Year Contracts",
    description: "Long-term government contracts with stable revenue streams"
  },
  {
    icon: Scale,
    title: "Local Partnership",
    description: "Structured partnerships with local companies for compliance"
  }
]

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Project Identification",
    description: "We identify government IT and infrastructure projects matching your capabilities.",
    duration: "Ongoing"
  },
  {
    number: "02",
    title: "PPDA Registration & Setup",
    description: "Complete PPDA registration, local partnership structuring, and compliance setup.",
    duration: "2-4 weeks"
  },
  {
    number: "03",
    title: "Bid Preparation",
    description: "Technical proposal writing, financial bid preparation, and documentation compilation.",
    duration: "4-8 weeks"
  },
  {
    number: "04",
    title: "Submission & Award",
    description: "Bid submission, evaluation support, contract negotiation, and award.",
    duration: "8-16 weeks"
  },
  {
    number: "05",
    title: "Contract Execution",
    description: "Project delivery management, milestone tracking, invoicing, and compliance reporting.",
    duration: "Multi-year"
  }
]

const OPPORTUNITY_HIGHLIGHTS = [
  "Government-backed projects",
  "Multi-year contracts",
  "PPDA compliance support",
  "Local partnership facilitation",
  "Technical proposal writing",
  "Post-award delivery management"
]

const FAQS = [
  {
    question: "What investment size is required?",
    answer: "Infrastructure and IT project values range from $2M to $50M+. These are typically multi-year contracts with milestone-based payments. Minimum bid bonds range from 2-5% of contract value."
  },
  {
    question: "What types of projects are available?",
    answer: "We track opportunities in government digitization, IT infrastructure, telecom projects, road infrastructure, and technology partnerships. Projects range from software development to hardware installation and network infrastructure."
  },
  {
    question: "Do I need a local partner?",
    answer: "Many government contracts require or prefer local partnerships. We facilitate introductions to qualified local companies and help structure compliant partnership arrangements."
  },
  {
    question: "How long are typical contracts?",
    answer: "Infrastructure and IT contracts typically range from 2-5 years, with some extending longer. Contracts include implementation phases and ongoing maintenance/support periods."
  },
  {
    question: "What is the payment structure?",
    answer: "Government contracts typically use milestone-based payments. Payments are made upon completion of defined project phases, with final payment upon project acceptance. We help structure payment terms and manage invoicing."
  },
  {
    question: "Can you help with project delivery?",
    answer: "Yes, we provide contract implementation and delivery services including milestone tracking, documentation, invoicing, compliance reporting, and stakeholder coordination throughout the contract term."
  }
]

const CASE_STUDY = {
  title: "Government Digitization Project - $12M IT Infrastructure",
  client: "International Technology Solutions Provider",
  challenge: "Client wanted to enter Ugandan government IT sector but lacked PPDA registration, local partnership, and bid preparation expertise.",
  solution: "Completed PPDA registration, facilitated local partnership with qualified IT company, prepared winning technical and financial bids, coordinated contract negotiation and signing.",
  results: [
    "$12M contract awarded (3-year term)",
    "PPDA registration completed in 3 weeks",
    "Local partnership structured successfully",
    "Project delivered on-time with 95% milestone completion rate"
  ]
}

export default function InfrastructureTechnologyOpportunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
            alt="Infrastructure and technology"
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
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/opportunities" className="hover:text-white transition-colors">Opportunities</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Infrastructure & Technology</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full mb-6">
              <Server className="h-4 w-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">IT & Infrastructure</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Infrastructure & Technology Investment Opportunities
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Access government IT and infrastructure projects in Uganda. We execute complete bids—from PPDA registration through multi-year contract delivery.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">6 Active Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Multi-Year Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">$2M+ Project Values</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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
              Verified Infrastructure & Technology Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We execute complete government IT and infrastructure project bids
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
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
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
              How We Execute Infrastructure & Technology Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process from project identification to multi-year delivery
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
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-500 transition-all"
              >
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                <p className="text-xs font-semibold text-indigo-600">{step.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Highlights */}
      <section className="py-20 bg-indigo-50">
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
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-indigo-200"
              >
                <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
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
            className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 md:p-12 border-2 border-indigo-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-900 uppercase tracking-wide">Success Story</span>
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
              Ready to Explore Infrastructure & Technology Opportunities?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Access government IT and infrastructure projects with full compliance support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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

