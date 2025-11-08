"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  delay?: number
}

export default function ServiceCard({ title, description, icon, href, delay = 0 }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg border border-gray-200 p-8 card-hover h-full flex flex-col focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
    >
      <div 
        className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mb-6"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
      <Button 
        asChild 
        variant="ghost" 
        className="group self-start focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <Link 
          href={href}
          aria-label={`Learn more about ${title}`}
        >
          Learn More
          <ArrowRight 
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
            aria-hidden="true"
          />
        </Link>
      </Button>
    </motion.article>
  )
}

