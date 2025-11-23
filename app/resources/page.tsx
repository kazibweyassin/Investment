"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, ExternalLink, ArrowRight, TrendingUp, Users } from "lucide-react"

export default function ResourcesPage() {
  const guides = [
    {
      title: "Tax & Non-Tax Incentives for Investors",
      description: "Complete guide to investment incentives available for foreign and local investors in Uganda",
      href: "/Tax-Incentive-Guide-2.pdf",
      category: "Investment Incentives",
      isDownload: true
    },
    {
      title: "How to Verify a DGSM Gold Dealer License",
      description: "Step-by-step verification process for DGSM licenses",
      href: "/resources/articles/verify-dgsm-gold-license",
      category: "Gold Sector"
    },
    {
      title: "PPDA Tender Application Checklist",
      description: "Complete documentation requirements for PPDA tenders",
      href: "/resources/articles/ppda-tender-checklist",
      category: "Government Tenders"
    },
    {
      title: "Uganda Gold Export Requirements",
      description: "Compliance requirements for gold export transactions",
      href: "/resources/articles/gold-export-requirements",
      category: "Gold Sector"
    },
    {
      title: "Common Tender Disqualification Reasons",
      description: "Avoid these mistakes in your bid submissions",
      href: "/resources/articles/tender-disqualification-reasons",
      category: "Government Tenders"
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section with Business Highlights - CWG Style */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/corporate-building.jpg"
            alt="Corporate building"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/95"></div>
        </div>
        
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Corporate Image */}
            <div className="h-96 lg:h-auto">
              <img
                src="/corporate-building.jpg"
                alt="Business growth"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Right: Business Highlights Card - CWG Style */}
            <div className="flex items-center justify-center p-8 lg:p-16">
              <div className="w-full max-w-lg">
                <div className="mb-8">
                  <div className="text-sm font-semibold text-gray-400 mb-2">DIAMOND CAPITAL AFRICA</div>
                  <div className="text-5xl font-bold mb-2">2024 Performance</div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">$4M+</div>
                    <div className="text-sm text-gray-400 font-medium">Total Deal Value</div>
                    <div className="text-xs text-blue-400 mt-1">Transactions Executed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-sm text-gray-400 font-medium">Compliance Rate</div>
                    <div className="text-xs text-blue-400 mt-1">Zero Failures</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">2-6 wks</div>
                    <div className="text-sm text-gray-400 font-medium">Avg Turnaround</div>
                    <div className="text-xs text-blue-400 mt-1">Transaction Speed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">25+</div>
                    <div className="text-sm text-gray-400 font-medium">Countries</div>
                    <div className="text-xs text-blue-400 mt-1">Client Base</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="text-sm text-gray-400 mb-3">Performance Period • Jan - Nov 2025</div>
                  <Link href="/contact">
                    <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Cards Section - CWG Style */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Market Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Market Insights</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Access comprehensive analysis of Uganda's investment landscape and sector trends.
                </p>
                <div className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                  <span>Explore Insights</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Compliance Guides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 overflow-hidden cursor-pointer hover:border-blue-500 hover:shadow-2xl transition-all"
            >
              <Link href="#guides">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Compliance Guides</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Step-by-step guides for DGSM licensing, PPDA tenders, and regulatory requirements.
                </p>
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Read Guides</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>

            {/* Card 3: Partner Network */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
            >
              <Link href="/contact">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Partner with Us</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Connect with our network of legal experts, surveyors, and government contacts.
                  </p>
                  <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    <span>Get in Touch</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compliance & Investment Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources for navigating Uganda's regulatory landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                {guide.isDownload ? (
                  <a href={guide.href} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-blue-600 mb-2">{guide.category}</div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                        <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold group-hover:gap-3 transition-all">
                          <span>Download PDF</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link href={guide.href}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-blue-600 mb-2">{guide.category}</div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                        <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold group-hover:gap-3 transition-all">
                          <span>Read Guide</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Resources Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Essential Government Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Direct links to Uganda's key regulatory and investment authorities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "PPDA Portal", url: "https://www.ppda.go.ug", desc: "Tender opportunities" },
              { name: "URSB", url: "https://ursb.go.ug", desc: "Business registration" },
              { name: "DGSM", url: "https://www.energyandminerals.go.ug", desc: "Mining licenses" },
              { name: "UIA", url: "https://www.ugandainvest.go.ug", desc: "Investment authority" }
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-600">{link.desc}</p>
              </motion.a>
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
              Need Help Navigating Uganda's Investment Landscape?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Talk to our team about executing your transaction with complete compliance
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
