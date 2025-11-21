"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FileText, ExternalLink, ArrowRight, Star, Calendar, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"

export default function ResourcesPage() {
  const blogPosts = [
    {
      title: "How to Verify a DGSM Gold Dealer License",
      description: "A comprehensive guide to verifying Directorate of Geological Survey and Mines licenses for gold dealers in Uganda.",
      href: "/resources/articles/verify-dgsm-gold-license",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800"
    },
    {
      title: "PPDA Tender Application: Complete Checklist",
      description: "Everything you need to know before submitting a tender application through Uganda's Public Procurement and Disposal of Public Assets portal.",
      href: "/resources/articles/ppda-tender-checklist",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
    },
    {
      title: "Understanding Uganda's Gold Export Requirements",
      description: "Navigate the complex requirements for exporting gold from Uganda, including documentation, permits, and compliance standards.",
      href: "/resources/articles/gold-export-requirements",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800"
    },
    {
      title: "Common Reasons Bids Get Disqualified",
      description: "Learn about the most common mistakes that lead to bid disqualification and how to avoid them.",
      href: "/resources/articles/tender-disqualification-reasons",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800"
    },
  ]

  const usefulLinks = [
    {
      name: "PPDA Portal",
      url: "https://www.ppda.go.ug",
      description: "Public Procurement and Disposal of Public Assets Authority",
    },
    {
      name: "URSB",
      url: "https://ursb.go.ug",
      description: "Uganda Registration Services Bureau",
    },
    {
      name: "Ministry of Energy & Mineral Development",
      url: "https://www.energyandminerals.go.ug",
      description: "Official ministry website for energy and mineral resources",
    },
    {
      name: "Uganda Investment Authority",
      url: "https://www.ugandainvest.go.ug",
      description: "Promoting and facilitating investment in Uganda",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative section-padding-sm bg-slate-900 text-white w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600"
            alt="Resources and documents"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
        </div>
        <div className="container-full relative z-10">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] }}
              className="max-w-3xl mx-auto"
            >
              <Breadcrumbs items={[{ label: "Resources" }]} className="mb-6 text-gray-300" />
              <div className="text-center">
                <h1 className="mb-6">Resources</h1>
                <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                  Guides, articles, and helpful links for navigating Uganda's investment landscape
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog/Guide Section */}
      <section className="section-padding bg-white w-full">
        <div className="container-full">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="mb-6">Guides & Articles</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Educational resources to help you understand Uganda's regulatory requirements
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <FileText className="h-5 w-5" />
                      <span className="text-sm font-semibold">Guide</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.description}</p>
                  <Button asChild variant="ghost" className="group/btn text-blue-600 hover:text-blue-700">
                    <Link href={post.href} className="flex items-center gap-2">
                      Read Full Guide
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50 w-full">
        <div className="container-full">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] }}
              className="text-center mb-16 md:mb-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-200 rounded-full mb-6">
                <Star className="h-4 w-4 text-blue-700" />
                <span className="text-sm font-semibold text-blue-900">Latest News</span>
              </div>
              <h2 className="mb-6">Recent Success Stories & Updates</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Real deals, market insights, and regulatory updates
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {[
                {
                  title: "Diamond Capital Africa Officially Launched",
                  date: "November 2025",
                  category: "Company News",
                  description: "Launched to bridge international investors with Uganda's verified opportunities in gold, coffee, land, and government contracts.",
                  icon: "�",
                  color: "blue"
                },
                {
                  title: "8+ Verified Opportunities Now Available",
                  date: "November 2025",
                  category: "Opportunity Update",
                  description: "Curated portfolio includes DGSM-licensed gold suppliers, UCDA-certified coffee exporters, verified land plots, and active government tenders.",
                  icon: "✨",
                  color: "amber"
                },
                {
                  title: "Partnership Network Established",
                  date: "November 2025",
                  category: "Milestone",
                  description: "Built network of licensed partners including DGSM gold dealers, UCDA coffee cooperatives, and PPDA-registered contractors.",
                  icon: "🤝",
                  color: "brown"
                }
              ].map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-200"
                >
                  <div className={`h-2 ${
                    update.color === 'amber' ? 'bg-amber-600' :
                    update.color === 'brown' ? 'bg-amber-800' :
                    'bg-blue-600'
                  }`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{update.icon}</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        update.color === 'amber' ? 'bg-amber-100 text-amber-700' :
                        update.color === 'brown' ? 'bg-amber-100 text-amber-900' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {update.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{update.title}</h3>
                    <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {update.date}
                    </p>
                    <p className="text-gray-600 leading-relaxed">{update.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Market Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200 max-w-4xl mx-auto"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Uganda Investment Climate Overview</h3>
                  <p className="text-sm text-gray-500">Updated: November 2025</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700"><strong>Gold Sector:</strong> Uganda ranks among Africa's top gold producers - Export-ready suppliers available</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700"><strong>Coffee Exports:</strong> Africa's 2nd largest exporter - Both Arabica & Robusta varieties available</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700"><strong>Government Tenders:</strong> Active PPDA opportunities in health, infrastructure, and ICT sectors</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700"><strong>Investment Code 1991:</strong> Revised framework provides clear guidelines for foreign investors</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="section-padding bg-gray-50 w-full">
        <div className="container-full">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="mb-6">Useful Links</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Official government resources and regulatory portals
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {usefulLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex items-start justify-between group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <ExternalLink className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {link.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm bg-secondary text-white w-full">
        <div className="container-full text-center">
          <div className="w-full max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] }}
            >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help you navigate Uganda's investment landscape with confidence
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

