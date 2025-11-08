"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface TrustBadgeProps {
  text: string
  delay?: number
}

export default function TrustBadge({ text, delay = 0 }: TrustBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg card-hover"
    >
      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
      <span className="text-gray-900 font-medium text-lg">{text}</span>
    </motion.div>
  )
}

