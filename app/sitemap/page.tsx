"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Info, Briefcase, MapPin, FileText, Mail, ArrowRight, ExternalLink } from "lucide-react"

type SitemapLink = {
  name: string
  href: string
  description: string
  external?: boolean
}

export default function SitemapPage() {
  const sections = [
    {
      title: "Main Pages",
      icon: <Home className="h-6 w-6" />,
      color: "blue",
      links: [
        { name: "Homepage", href: "/", description: "Investment opportunities in Uganda's gold, coffee, and government sectors", external: false },
        { name: "About Us", href: "/about", description: "Our mission, story, approach, and partnerships", external: false },
        { name: "Services", href: "/services", description: "Gold investments, coffee exports, and tender navigation", external: false },
        { name: "Why Uganda", href: "/why-uganda", description: "Uganda's investment advantages and opportunities", external: false },
        { name: "Resources", href: "/resources", description: "Guides, articles, and helpful links", external: false },
        { name: "Contact", href: "/contact", description: "Get in touch with our team", external: false },
      ] as SitemapLink[]
    },
    {
      title: "Educational Resources",
      icon: <FileText className="h-6 w-6" />,
      color: "amber",
      links: [
        { 
          name: "How to Verify a DGSM Gold Dealer License", 
          href: "/resources/articles/verify-dgsm-gold-license",
          description: "Complete guide to verifying gold dealer licenses in Uganda",
          external: false
        },
        { 
          name: "PPDA Tender Application: Complete Checklist", 
          href: "/resources/articles/ppda-tender-checklist",
          description: "Everything needed for government tender submissions",
          external: false
        },
        { 
          name: "Understanding Uganda's Gold Export Requirements", 
          href: "/resources/articles/gold-export-requirements",
          description: "Legal and regulatory requirements for exporting gold",
          external: false
        },
        { 
          name: "Common Reasons Bids Get Disqualified", 
          href: "/resources/articles/tender-disqualification-reasons",
          description: "Avoid these mistakes when bidding on government contracts",
          external: false
        },
      ] as SitemapLink[]
    },
    {
      title: "Service Sections",
      icon: <Briefcase className="h-6 w-6" />,
      color: "indigo",
      links: [
        { name: "Gold Investment Facilitation", href: "/services#gold", description: "DGSM-licensed gold dealer connections", external: false },
        { name: "Coffee Export Partnership", href: "/services#coffee", description: "UCDA-certified coffee export opportunities", external: false },
        { name: "Government Tender Navigation", href: "/services#tenders", description: "PPDA tender application support", external: false },
      ] as SitemapLink[]
    },
    {
      title: "External Resources",
      icon: <ExternalLink className="h-6 w-6" />,
      color: "green",
      links: [
        { name: "PPDA Portal", href: "https://www.ppda.go.ug", description: "Public Procurement and Disposal of Public Assets Authority", external: true },
        { name: "URSB", href: "https://ursb.go.ug", description: "Uganda Registration Services Bureau", external: true },
        { name: "Ministry of Energy & Minerals", href: "https://www.energyandminerals.go.ug", description: "Official ministry website", external: true },
        { name: "Uganda Investment Authority", href: "https://www.ugandainvest.go.ug", description: "Promoting investment in Uganda", external: true },
      ] as SitemapLink[]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">Site Navigation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sitemap
            </h1>
            <p className="text-xl text-gray-300">
              Complete overview of all pages and resources on Uganda Investment Bridge
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${
                    section.color === 'blue' ? 'bg-blue-600' :
                    section.color === 'amber' ? 'bg-amber-600' :
                    section.color === 'indigo' ? 'bg-indigo-600' :
                    'bg-green-600'
                  } flex items-center justify-center text-white shadow-lg`}>
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={linkIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: linkIndex * 0.05 }}
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {link.name}
                            </h3>
                            <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {link.description}
                          </p>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="group block p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {link.name}
                            </h3>
                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {link.description}
                          </p>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Site Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">6</div>
                <div className="text-sm text-gray-700">Main Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">4</div>
                <div className="text-sm text-gray-700">Educational Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">3</div>
                <div className="text-sm text-gray-700">Service Offerings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">4</div>
                <div className="text-sm text-gray-700">External Resources</div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-700 mb-6">
              Can't find what you're looking for? Get in touch with our team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
