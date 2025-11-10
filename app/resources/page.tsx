"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FileText, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
  const blogPosts = [
    {
      title: "How to Verify a DGSM Gold Dealer License",
      description: "A comprehensive guide to verifying Directorate of Geological Survey and Mines licenses for gold dealers in Uganda.",
      href: "#",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800"
    },
    {
      title: "PPDA Tender Application: Complete Checklist",
      description: "Everything you need to know before submitting a tender application through Uganda's Public Procurement and Disposal of Public Assets portal.",
      href: "#",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
    },
    {
      title: "Understanding Uganda's Gold Export Requirements",
      description: "Navigate the complex requirements for exporting gold from Uganda, including documentation, permits, and compliance standards.",
      href: "#",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800"
    },
    {
      title: "Common Reasons Bids Get Disqualified",
      description: "Learn about the most common mistakes that lead to bid disqualification and how to avoid them.",
      href: "#",
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
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="mb-6">Resources</h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                Guides, articles, and helpful links for navigating Uganda's investment landscape
              </p>
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

