"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Landmark, CheckCircle2, ArrowRight, Shield, Clock, 
  FileText, Users, Award, ChevronRight, Star,
  Scale, Globe2, DollarSign, Target, ClipboardCheck
} from "lucide-react"

const FEATURES = [
  {
    icon: FileText,
    title: "PPDA Registration",
    description: "Complete registration process with Public Procurement and Disposal of Public Assets Authority"
  },
  {
    icon: ClipboardCheck,
    title: "Bid Preparation",
    description: "Professional tender document preparation, technical proposals, and financial bids"
  },
  {
    icon: Scale,
    title: "Compliance Review",
    description: "Ensure all submissions meet PPDA regulations and tender-specific requirements"
  },
  {
    icon: Award,
    title: "Contract Implementation & Delivery",
    description: "Post-award execution support including performance bonds, delivery oversight, and payment processing"
  }
]

const PROCESS_STEPS = [
  {
    number: "01",
    title: "PPDA Registration",
    description: "Register your company with PPDA Authority. Obtain your Provider Registration Number (PRN) and setup your online portal access.",
    duration: "1-2 weeks"
  },
  {
    number: "02",
    title: "Tender Identification",
    description: "We monitor PPDA portal and identify relevant tenders matching your capabilities, capacity, and business sector.",
    duration: "Ongoing"
  },
  {
    number: "03",
    title: "Pre-Qualification",
    description: "Prepare pre-qualification documents including company profile, financial statements, tax clearance, and past performance records.",
    duration: "3-5 days"
  },
  {
    number: "04",
    title: "Bid Preparation",
    description: "Develop comprehensive tender response including technical proposal, financial bid, and all required documentation.",
    duration: "1-2 weeks"
  },
  {
    number: "05",
    title: "Submission & Follow-up",
    description: "Submit bid through PPDA portal or physical delivery. Attend bid opening and clarification meetings if required.",
    duration: "As per tender"
  },
  {
    number: "06",
    title: "Contract Award Support",
    description: "If successful, we assist with performance bonds, contract signing, and initial mobilization requirements.",
    duration: "1-2 weeks"
  }
]

const TENDER_CATEGORIES = [
  {
    title: "Infrastructure & Construction",
    examples: ["Road construction", "Building projects", "Water systems", "Electrical installations"],
    entities: ["UNRA", "KCCA", "Ministry of Works"]
  },
  {
    title: "ICT & Technology",
    examples: ["Software development", "Network infrastructure", "IT equipment supply", "System integration"],
    entities: ["NITA-U", "UCC", "Government ministries"]
  },
  {
    title: "Medical Supplies",
    examples: ["Pharmaceuticals", "Medical equipment", "Laboratory supplies", "Hospital furniture"],
    entities: ["NMS", "Regional hospitals", "Health centers"]
  },
  {
    title: "Professional Services",
    examples: ["Consultancy", "Audit services", "Training", "Research studies"],
    entities: ["All government entities"]
  }
]

const REQUIREMENTS = [
  "Company registration certificate (Certificate of Incorporation)",
  "Tax Identification Number (TIN) and current tax clearance certificate",
  "Audited financial statements (last 3 years for large contracts)",
  "PPDA Provider Registration Number (PRN) - we assist with obtaining this",
  "Company profile with details of past projects and key personnel",
  "Bank reference letter and evidence of financial capacity",
  "Valid business licenses and professional certifications (if applicable)"
]

const BENEFITS = [
  {
    title: "PPDA Compliance Expertise",
    description: "In-depth knowledge of PPDA Act and regulations. We ensure all submissions meet legal requirements.",
    icon: Shield
  },
  {
    title: "Tender Monitoring",
    description: "Daily monitoring of PPDA portal for new opportunities. Instant alerts for tenders matching your profile.",
    icon: Target
  },
  {
    title: "Professional Documentation",
    description: "High-quality tender documents with professional formatting, clear proposals, and competitive pricing strategies.",
    icon: FileText
  },
  {
    title: "Success Rate Improvement",
    description: "Our clients have 40% higher success rate compared to self-submitted bids due to quality preparation.",
    icon: Award
  }
]

const PRICING = {
  registration: {
    title: "PPDA Registration Package",
    price: "$500",
    features: [
      "Company registration with PPDA",
      "Provider Registration Number (PRN)",
      "Online portal setup and training",
      "Initial company profile creation"
    ]
  },
  bidPreparation: {
    title: "Bid Preparation Service",
    price: "3-5% of contract value",
    features: [
      "Full tender document preparation",
      "Technical and financial proposals",
      "Compliance review and verification",
      "Submission and follow-up support"
    ]
  },
  monitoring: {
    title: "Tender Monitoring (Monthly)",
    price: "$200/month",
    features: [
      "Daily PPDA portal monitoring",
      "Instant tender alerts",
      "Eligibility assessment",
      "Tender document downloads"
    ]
  }
}

const FAQS = [
  {
    question: "What is PPDA and why do I need to register?",
    answer: "The Public Procurement and Disposal of Public Assets Authority (PPDA) regulates all government procurement in Uganda. All companies wanting to bid for government contracts must register with PPDA and obtain a Provider Registration Number (PRN)."
  },
  {
    question: "How long does PPDA registration take?",
    answer: "Once we submit your application with all required documents, PPDA typically processes registration within 10-15 working days. We can expedite this by ensuring all documentation is complete and accurate on first submission."
  },
  {
    question: "What is the success rate for government tenders?",
    answer: "Industry average is 10-15% success rate. Our professionally prepared bids have achieved 40-50% success rate for clients with appropriate qualifications and competitive pricing."
  },
  {
    question: "Can foreign companies bid for Uganda government contracts?",
    answer: "Yes, but they must register a local entity in Uganda or partner with a registered Ugandan company. We assist with joint venture structuring and documentation."
  },
  {
    question: "What are the typical contract values?",
    answer: "Government contracts range from small procurements ($5,000-$50,000) to major infrastructure projects ($10M+). We help identify opportunities matching your financial capacity and technical capability."
  },
  {
    question: "Do you guarantee contract awards?",
    answer: "No service can guarantee contract awards as decisions are made by procurement committees. However, we significantly improve your chances through professional preparation, compliance, and strategic pricing guidance."
  }
]

const CASE_STUDY = {
  title: "ICT Equipment Supply - Ministry of Education",
  client: "Technology Solutions Provider",
  challenge: "Client wanted to bid for $800,000 computer supply tender but had never participated in government procurement.",
  solution: "Completed PPDA registration in 12 days, prepared comprehensive bid with detailed technical specifications, obtained performance bond, and coordinated submission with all required documentation.",
  results: [
    "Won contract valued at $785,000 (competitive pricing)",
    "Successfully delivered all equipment within 90-day period",
    "Received payment in full with no delays",
    "Client has since won 2 additional Ministry contracts"
  ]
}

export default function GovernmentContractsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center opacity-50"></div>
        
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
              <span className="text-white">Government Contracts</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
              <Landmark className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Government Procurement</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Government Tender & Contract Implementation
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Navigate Uganda's PPDA procurement process with confidence. We handle registration, 
              bid preparation, compliance review, and post-award implementation & delivery support.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">8+ Active Tenders Monthly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Full PPDA Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">40% Higher Success Rate</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                Get PPDA Registered
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete support for government procurement from registration to contract execution
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

      {/* Tender Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tender Categories We Cover
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {TENDER_CATEGORIES.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Typical Opportunities:</p>
                  <ul className="space-y-1">
                    {category.examples.map((example, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Procuring Entities:</p>
                  <p className="text-gray-600">{category.entities.join(", ")}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-20 bg-gray-50">
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
              Our step-by-step process for government contract acquisition
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
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg border border-gray-200">
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

      {/* Requirements & Benefits */}
      <section className="py-20 bg-white">
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
              
              <ul className="space-y-4">
                {REQUIREMENTS.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h3>
              
              <div className="space-y-6">
                {BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-5 w-5 text-blue-600" />
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

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(PRICING).map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {pkg.title}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl border border-blue-200"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
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
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Win Government Contracts?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get PPDA registered and start bidding for profitable government tenders
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all"
              >
                Start Registration
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
