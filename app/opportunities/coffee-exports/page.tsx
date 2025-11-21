"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Coffee, CheckCircle2, ArrowRight, Shield, Clock, 
  FileText, Users, Award, ChevronRight, Star,
  Scale, Globe2, DollarSign, Target, TrendingUp
} from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

const FEATURES = [
  {
    icon: Shield,
    title: "UCDA Certified",
    description: "Direct partnerships with UCDA-certified coffee exporters and cooperatives"
  },
  {
    icon: Coffee,
    title: "Arabica & Robusta",
    description: "Access to both premium Arabica and high-yield Robusta varieties"
  },
  {
    icon: Clock,
    title: "Export Ready",
    description: "Complete export documentation and logistics coordination"
  },
  {
    icon: Scale,
    title: "Quality Assured",
    description: "Quality grading, cupping tests, and certification support"
  }
]

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Opportunity Discovery",
    description: "We identify UCDA-certified exporters and cooperatives matching your volume and quality requirements.",
    duration: "1-3 days"
  },
  {
    number: "02",
    title: "Supplier Verification",
    description: "Verify UCDA certification, export licenses, quality standards, and supply chain capacity.",
    duration: "1-2 weeks"
  },
  {
    number: "03",
    title: "Sample & Quality Assessment",
    description: "Coordinate sample shipments, arrange cupping tests, and verify quality grades.",
    duration: "1-2 weeks"
  },
  {
    number: "04",
    title: "Contract & Export Setup",
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
  "UCDA-certified exporters only",
  "Direct farm partnerships available",
  "Arabica and Robusta options",
  "Export documentation ready",
  "Quality grading included",
  "Long-term supply agreements"
]

const FAQS = [
  {
    question: "What investment size is required?",
    answer: "Minimum investment is $150K for coffee export transactions. Typical transactions range from $200K to $2M+ depending on volume and quality requirements."
  },
  {
    question: "What is UCDA and why is it important?",
    answer: "The Uganda Coffee Development Authority (UCDA) regulates coffee exports. All legal coffee exports must come from UCDA-certified exporters. We only work with verified, certified suppliers."
  },
  {
    question: "What coffee varieties are available?",
    answer: "Uganda produces both Arabica (premium quality, higher altitude) and Robusta (higher yield, lower altitude). We can connect you with suppliers for either variety based on your requirements."
  },
  {
    question: "How do you verify quality?",
    answer: "We coordinate sample shipments, arrange professional cupping tests, verify quality grades, and ensure all coffee meets international export standards before finalizing transactions."
  },
  {
    question: "Can I visit the farms?",
    answer: "Yes, we can arrange farm visits and direct meetings with cooperatives. This is recommended for larger transactions to build relationships and verify supply chain capacity."
  },
  {
    question: "What are typical export volumes?",
    answer: "Export volumes range from 1-2 containers (20-40 tons) for smaller transactions to 10+ containers (200+ tons) for larger deals. We match you with suppliers based on your volume needs."
  }
]

const CASE_STUDY = {
  title: "European Specialty Roaster - 10-Ton Arabica Contract",
  client: "European Specialty Coffee Roaster",
  challenge: "Client wanted direct trade with Ugandan Arabica farmers but lacked local contacts and UCDA compliance knowledge.",
  solution: "Connected buyer with verified Mount Elgon cooperative, facilitated UCDA certification process, coordinated sample shipments and quality assessment.",
  results: [
    "10-ton initial contract signed",
    "UCDA certification completed in 3 weeks",
    "Long-term supply agreement established",
    "Client has expanded to 50+ tons annually"
  ]
}

export default function CoffeeExportsOpportunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920"
            alt="Coffee farming and exports"
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
                { label: "Coffee Exports" }
              ]} 
              className="mb-6 text-gray-400"
            />

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/10 border border-amber-500/20 rounded-full mb-6">
              <Coffee className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">Agricultural Exports</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Coffee Export Investment Opportunities
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Connect with UCDA-certified coffee exporters in Uganda. We execute complete export transactions—from supplier verification through international delivery—with full compliance.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Top 10 Global Exporter</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">UCDA Certified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">$150K Minimum Investment</span>
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
              Verified Coffee Export Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We execute complete coffee export transactions with UCDA-certified suppliers
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
              How We Execute Coffee Export Transactions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process from supplier identification to international delivery
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
              Ready to Explore Coffee Export Opportunities?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with UCDA-certified exporters and execute compliant coffee export transactions
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

