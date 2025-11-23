"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

const blogPosts = [
  {
    slug: "uganda-investment-outlook-2025",
    title: "Uganda Investment Outlook 2025: Key Sectors and Opportunities",
    excerpt: "An in-depth analysis of Uganda's investment landscape, highlighting emerging opportunities in gold, agriculture, and infrastructure sectors.",
    image: "/business-analytics.jpg",
    date: "2025-01-15",
    readTime: "12 min",
    category: "Market Insights"
  },
  {
    slug: "ppda-regulatory-updates",
    title: "PPDA Regulatory Updates: What Investors Need to Know",
    excerpt: "Recent changes to Uganda's Public Procurement and Disposal of Public Assets regulations and how they affect foreign investors.",
    image: "/corporate-building.jpg",
    date: "2025-01-10",
    readTime: "8 min",
    category: "Regulatory"
  },
  {
    slug: "gold-export-trends",
    title: "Uganda Gold Export Trends: Market Analysis and Forecast",
    excerpt: "Understanding the current state of Uganda's gold export market, pricing trends, and future projections for international buyers.",
    image: "/coffee-plantation.jpg",
    date: "2025-01-05",
    readTime: "10 min",
    category: "Market Insights"
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/blog-hero.jpg"
            alt="Blog and insights"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/85"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Breadcrumbs items={[{ label: "Blog" }]} className="mb-6 text-gray-300" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights & Market Updates
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay informed about Uganda's investment landscape, regulatory changes, and market opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-blue-600">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

