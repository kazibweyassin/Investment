"use client"

import { motion } from "framer-motion"

interface StatCardProps {
  number: string
  label: string
  icon?: React.ReactNode
  delay?: number
}

export default function StatCard({ number, label, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
      role="region"
      aria-label={`Statistic: ${label}`}
    >
      {icon && (
        <div className="flex justify-center mb-6" aria-hidden="true">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        </div>
      )}
      <div className="text-5xl md:text-6xl font-bold text-secondary mb-3 tracking-tight" aria-label={number}>
        {number}
      </div>
      <div className="text-gray-700 font-medium text-lg">{label}</div>
    </motion.div>
  )
}

