"use client"

import { useState, useEffect, useRef } from "react"
import { Search as SearchIcon, X, FileText, Briefcase, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

type SearchResult = {
  type: "service" | "opportunity" | "resource" | "page"
  title: string
  description: string
  href: string
}

const SEARCH_DATA: SearchResult[] = [
  // Services
  { type: "service", title: "Gold & Mineral Exports", description: "DGSM compliance, export documentation", href: "/services/gold-minerals" },
  { type: "service", title: "Government Contracts", description: "PPDA registration, bid preparation", href: "/services/government-contracts" },
  { type: "service", title: "Real Estate Acquisition", description: "Property sourcing, due diligence", href: "/services/real-estate" },
  { type: "service", title: "Contract Implementation", description: "Delivery tracking, compliance reporting", href: "/services/contract-implementation" },
  // Opportunities
  { type: "opportunity", title: "Gold & Minerals", description: "12+ verified DGSM-licensed suppliers", href: "/opportunities/gold-minerals" },
  { type: "opportunity", title: "Coffee Exports", description: "UCDA-certified Arabica & Robusta", href: "/opportunities/coffee-exports" },
  { type: "opportunity", title: "Land Acquisitions", description: "50+ verified commercial & agricultural plots", href: "/opportunities/land-acquisitions" },
  { type: "opportunity", title: "Government Contracts", description: "8 active PPDA tenders", href: "/opportunities/government-contracts" },
  // Resources
  { type: "resource", title: "DGSM Gold License Verification", description: "How to verify gold dealer licenses", href: "/resources/articles/verify-dgsm-gold-license" },
  { type: "resource", title: "PPDA Tender Checklist", description: "Complete tender application guide", href: "/resources/articles/ppda-tender-checklist" },
  { type: "resource", title: "Gold Export Requirements", description: "Legal compliance guide for exports", href: "/resources/articles/gold-export-requirements" },
  // Pages
  { type: "page", title: "About Us", description: "Our mission, story, and approach", href: "/about" },
  { type: "page", title: "Why Uganda", description: "Investment advantages and opportunities", href: "/why-uganda" },
  { type: "page", title: "Contact", description: "Get in touch with our team", href: "/contact" },
]

const getIcon = (type: SearchResult["type"]) => {
  switch (type) {
    case "service":
      return Briefcase
    case "opportunity":
      return MapPin
    case "resource":
      return FileText
    default:
      return FileText
  }
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length > 0) {
      const filtered = SEARCH_DATA.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered.slice(0, 8))
    } else {
      setResults([])
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setQuery("")
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md transition-colors"
        aria-label="Search"
      >
        <SearchIcon className="h-5 w-5" />
        <span className="hidden md:inline">Search</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-full mt-2 w-[90vw] md:w-[500px] bg-white rounded-xl shadow-2xl border border-gray-200 z-50"
            >
              <div className="p-4 border-b border-gray-200 flex items-center gap-3">
                <SearchIcon className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services, opportunities, resources..."
                  className="flex-1 outline-none text-gray-900 placeholder:text-gray-400"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setQuery("")
                  }}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              </div>

              <div className="max-h-[400px] overflow-y-auto">
                {results.length > 0 ? (
                  <div className="p-2">
                    {results.map((result, index) => {
                      const Icon = getIcon(result.type)
                      return (
                        <Link
                          key={index}
                          href={result.href}
                          onClick={() => {
                            setIsOpen(false)
                            setQuery("")
                          }}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="mt-0.5">
                            <Icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900">{result.title}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{result.description}</p>
                            <span className="inline-block mt-1 text-xs text-blue-600 capitalize">
                              {result.type}
                            </span>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                ) : query.length > 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <p>No results found for "{query}"</p>
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <p>Start typing to search...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

