"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Wheat, CheckCircle2, ArrowRight, Shield, Clock, 
  FileText, Users, Award, ChevronRight, Star,
  Scale, Globe2, DollarSign, Target, TrendingUp
} from "lucide-react"

const FEATURES = [
  {
    icon: Shield,
    title: "15+ Opportunities",
    description: "Farm partnerships, processing plants, and commodity export deals"
  },
  {
    icon: FileText,
    title: "Export Ready",
    description: "Complete export documentation and certification support"
  },
  {
    icon: Clock,
    title: "Fast Execution",
    description: "2-8 week transaction timeline from identification to delivery"
  },
  {
    icon: Scale,
    title: "Quality Assured",
    description: "Quality grading, certification, and supply chain verification"
  }
]

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Opportunity Discovery",
    description: "We identify farm partnerships, processing facilities, and commodity export opportunities matching your requirements.",
    duration: "1-3 days"
  },
  {
    number: "02",
    title: "Supplier Verification",
    description: "Verify farm certifications, processing licenses, export permits, and supply chain capacity.",
    duration: "1-2 weeks"
  },
  {
    number: "03",
    title: "Quality Assessment",
    description: "Coordinate sample shipments, quality testing, and certification verification.",
    duration: "1-2 weeks"
  },
  {
    number: "04",
    title: "Transaction Setup",
    description: "Negotiate terms, draft contracts, arrange export documentation and logistics.",
    duration: "1 week"
  },
  {
    number: "05",
    title: "Delivery & Payment",
    description: "Coordinate shipping, manage export documentation, and facilitate payment processing.",
    duration: "Variable"
  }
]

const OPPORTUNITY_HIGHLIGHTS = [
  "Certified farm partnerships",
  "Processing facility access",
  "Export license support",
  "Quality certification included",
  "Long-term supply agreements",
  "Direct farm access"
]

const FAQS = [
  {
    question: "What investment size is required?",
    answer: "Minimum investment is $200K for agriculture transactions. Typical transactions range from $300K to $3M+ depending on commodity type, volume, and processing requirements."
  },
  {
    question: "What agricultural commodities are available?",
    answer: "We facilitate transactions for coffee, grains (maize, rice, wheat), pulses, fruits, vegetables, and processed agricultural products. We match opportunities to your commodity focus."
  },
  {
    question: "Can I invest in processing facilities?",
    answer: "Yes, we identify opportunities for investing in or partnering with existing processing facilities, including coffee processing, grain milling, and fruit processing plants."
  },
  {
    question: "How do you verify farm quality?",
    answer: "We coordinate farm visits, verify certifications (organic, fair trade, etc.), review production capacity, and arrange quality testing through certified laboratories."
  },
  {
    question: "What export documentation is required?",
    answer: "Export documentation varies by commodity but typically includes phytosanitary certificates, certificates of origin, quality certificates, and shipping documents. We handle complete documentation."
  },
  {
    question: "Can I visit farms before committing?",
    answer: "Yes, we strongly recommend farm visits for larger transactions. We coordinate site visits, introduce you to farm owners, and facilitate direct relationship building."
  }
]

const CASE_STUDY = {
  title: "Grain Export Partnership - 500-Ton Maize Contract",
  client: "East African Food Trading Company",
  challenge: "Client needed reliable maize supply from certified farms with export documentation and quality assurance.",
  solution: "Connected buyer with verified cooperative in Eastern Uganda, coordinated quality testing, arranged export permits, and facilitated 500-ton initial contract.",
  results: [
    "500-ton contract executed successfully",
    "Quality exceeded international standards",
    "Long-term supply agreement established",
    "Client expanded to 2,000+ tons annually"
  ]
}

export default function AgricultureProcessingOpportunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920"
            alt="Agriculture and farming"
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
              <span className="text-white">Agriculture & Processing</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/10 border border-green-500/20 rounded-full mb-6">
              <Wheat className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium text-green-300">Agricultural Exports</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Agriculture & Processing Investment Opportunities
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Connect with certified farms, processing facilities, and commodity exporters in Uganda. We execute complete agricultural transactions with full compliance.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">15+ Opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Certified Farms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">$200K Minimum Investment</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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
              Verified Agriculture Investment Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We execute complete agricultural transactions with certified suppliers
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
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
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
              How We Execute Agriculture Transactions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process from opportunity identification to delivery
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
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 transition-all"
              >
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                <p className="text-xs font-semibold text-green-600">{step.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Highlights */}
      <section className="py-20 bg-green-50">
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
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-green-200"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
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
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12 border-2 border-green-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-green-600" />
              <span className="text-sm font-semibold text-green-900 uppercase tracking-wide">Success Story</span>
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
              Ready to Explore Agriculture Investment Opportunities?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with certified farms and execute compliant agricultural transactions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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

