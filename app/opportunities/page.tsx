"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Gem, Landmark, FileText, Wheat, Server, Building2,
  MapPin, DollarSign, Calendar, TrendingUp, Lock,
  CheckCircle2, ArrowRight, Filter, Search, Star
} from "lucide-react"

// Mock opportunity data (would come from database)
const OPPORTUNITIES = [
  {
    id: 1,
    type: "gold",
    title: "Verified Gold Supplier - Export Ready",
    location: "Kampala, Uganda",
    sector: "Gold & Minerals",
    investmentSize: "$500K - $2M",
    stage: "Active",
    highlights: ["DGSM Licensed", "Export Documentation Ready", "Quality Verified"],
    description: "Established gold supplier with full DGSM compliance seeking international buyers...",
    isPremium: true,
    postedDate: "2024-11-01"
  },
  {
    id: 2,
    type: "land",
    title: "50-Acre Commercial Land - Prime Location",
    location: "Entebbe, Uganda",
    sector: "Land Acquisition",
    investmentSize: "$1M - $5M",
    stage: "Active",
    highlights: ["Title Verified", "Near Airport", "Utilities Available"],
    description: "Prime commercial land near Entebbe International Airport, perfect for...",
    isPremium: true,
    postedDate: "2024-10-28"
  },
  {
    id: 3,
    type: "government",
    title: "Health Sector Supply Tender - Medical Equipment",
    location: "Nationwide, Uganda",
    sector: "Government Contracts",
    investmentSize: "$2M - $10M",
    stage: "Pre-Qualified",
    highlights: ["PPDA Registered", "Pre-Qualification Met", "Closing Soon"],
    description: "Major tender for medical equipment supply to government hospitals...",
    isPremium: true,
    postedDate: "2024-10-25"
  },
  {
    id: 4,
    type: "agriculture",
    title: "Coffee Export Partnership - Established Network",
    location: "Mbale, Uganda",
    sector: "Agriculture",
    investmentSize: "$100K - $500K",
    stage: "Active",
    highlights: ["Export License", "Buyer Network", "Quality Arabica"],
    description: "Partner with established coffee exporter with direct farmer relationships...",
    isPremium: false,
    postedDate: "2024-10-20"
  },
  {
    id: 5,
    type: "it",
    title: "Government Digitization Project - IT Infrastructure",
    location: "Kampala, Uganda",
    sector: "IT & Infrastructure",
    investmentSize: "$5M+",
    stage: "Upcoming",
    highlights: ["Government Backed", "Multi-Year Contract", "Local Partnership Required"],
    description: "Large-scale digitization project for government ministries...",
    isPremium: true,
    postedDate: "2024-10-15"
  },
  {
    id: 6,
    type: "land",
    title: "Agricultural Land - 200 Acres with Water Access",
    location: "Jinja, Uganda",
    sector: "Land Acquisition",
    investmentSize: "$300K - $800K",
    stage: "Active",
    highlights: ["Water Source", "Fertile Soil", "Road Access"],
    description: "Ideal for commercial farming with natural water source and excellent soil...",
    isPremium: false,
    postedDate: "2024-10-10"
  }
]

const SUBSCRIPTION_PLANS = [
  {
    name: "Explorer",
    price: "$99",
    period: "per month",
    features: [
      "Access to basic opportunities",
      "Monthly market reports",
      "Email support",
      "Limited deal details"
    ],
    cta: "Start Exploring",
    popular: false
  },
  {
    name: "Professional",
    price: "$299",
    period: "per month",
    features: [
      "Full access to all opportunities",
      "Priority introductions",
      "Weekly market insights",
      "Due diligence templates",
      "Direct partner contacts",
      "24/7 support"
    ],
    cta: "Go Professional",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Dedicated account manager",
      "Custom deal sourcing",
      "Exclusive opportunities",
      "On-ground support",
      "Legal & compliance assistance",
      "White-glove service"
    ],
    cta: "Contact Sales",
    popular: false
  }
]

export default function OpportunitiesPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from auth context
  const [selectedSector, setSelectedSector] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredOpportunities = OPPORTUNITIES.filter(opp => {
    const matchesSector = selectedSector === "all" || opp.type === selectedSector
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          opp.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSector && matchesSearch
  })

  const OpportunityCard = ({ opportunity, isBlurred }: { opportunity: typeof OPPORTUNITIES[0], isBlurred: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all ${
        isBlurred ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      {isBlurred && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex items-center justify-center">
          <div className="text-center p-6">
            <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Subscribe to View</h3>
            <p className="text-gray-600 mb-4">Get full access to verified opportunities</p>
            <Link href="#subscription">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all">
                View Plans
              </button>
            </Link>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
            {opportunity.sector}
          </div>
          {opportunity.isPremium && (
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{opportunity.title}</h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <MapPin className="h-4 w-4" />
          <span>{opportunity.location}</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700">{opportunity.investmentSize}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4 text-gray-400" />
            <span className={`font-medium ${
              opportunity.stage === 'Active' ? 'text-green-600' : 
              opportunity.stage === 'Upcoming' ? 'text-blue-600' : 
              'text-orange-600'
            }`}>
              {opportunity.stage}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {opportunity.highlights.map((highlight, idx) => (
            <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
              <CheckCircle2 className="h-3 w-3" />
              {highlight}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {opportunity.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-xs text-gray-500">
            Posted: {new Date(opportunity.postedDate).toLocaleDateString()}
          </span>
          {!isBlurred ? (
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View Details
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <Lock className="h-4 w-4 text-gray-400" />
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16">
        <div className="absolute inset-0 opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Verified Investment Opportunities
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Access pre-vetted, compliance-ready opportunities across gold, land, government contracts, and more
            </p>
            
            {!isLoggedIn && (
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 border border-blue-500/30 rounded-lg">
                <Lock className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">
                  Subscribe to unlock {OPPORTUNITIES.length} opportunities
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{OPPORTUNITIES.length}</div>
              <div className="text-sm text-gray-600">Active Opportunities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">$50M+</div>
              <div className="text-sm text-gray-600">Total Deal Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">Verified & Vetted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">48hrs</div>
              <div className="text-sm text-gray-600">Avg. Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search opportunities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Sector Filter */}
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="all">All Sectors</option>
              <option value="gold">Gold & Minerals</option>
              <option value="land">Land Acquisitions</option>
              <option value="government">Government Contracts</option>
              <option value="agriculture">Agriculture</option>
              <option value="it">IT & Infrastructure</option>
            </select>

            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
              <Filter className="h-5 w-5" />
              More Filters
            </button>
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity, index) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
                isBlurred={!isLoggedIn && index >= 2} // Show first 2 free, rest locked
              />
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No opportunities found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="subscription" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get unlimited access to verified opportunities and connect with the right partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SUBSCRIPTION_PLANS.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-xl p-8 ${
                  plan.popular
                    ? 'border-2 border-blue-600 shadow-xl'
                    : 'border border-gray-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            All plans include a 14-day money-back guarantee • Cancel anytime
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Access Exclusive Opportunities?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of investors already benefiting from our verified deal flow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#subscription">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                View Subscription Plans
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-slate-900 hover:bg-gray-100 rounded-lg font-semibold transition-all">
                Schedule Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
