"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  delay?: number
}

export default function TestimonialCard({ quote, author, role, company, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full"
    >
      <Quote className="h-8 w-8 text-primary/20 mb-4" aria-hidden="true" />
      <blockquote className="text-gray-700 mb-6 leading-relaxed">
        <p>"{quote}"</p>
      </blockquote>
      <footer className="border-t pt-4">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">
          <span className="sr-only">Role: </span>
          {role}, <span className="sr-only">Company: </span>
          {company}
        </p>
      </footer>
    </motion.article>
  )
}

