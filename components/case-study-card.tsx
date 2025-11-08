"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  challenge: string
  solution: string
  results: string[]
  sector: string
  delay?: number
}

export default function CaseStudyCard({ title, challenge, solution, results, sector, delay = 0 }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
          {sector}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{challenge}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{solution}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
          <ul className="space-y-2" role="list">
            {results.map((result, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 
                  className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" 
                  aria-hidden="true"
                />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}

