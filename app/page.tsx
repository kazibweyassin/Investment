"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { 
  Gem, Landmark, FileText, Wheat, Server, 
  CheckCircle2, ArrowRight, Shield, Building2, 
  Globe2, Clock, Award, ChevronRight,
  MapPin, DollarSign, Star, Coffee, Handshake, Scale, Target, Eye, ClipboardCheck,
  ChevronLeft, TrendingUp, HelpCircle, Users
} from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"
import BackToTop from "@/components/back-to-top"
import ShareButtons from "@/components/share-buttons"

// Hero Slides Data
const HERO_SLIDES = [
  {
    id: 1,
    title: "Navigate Uganda's Investment Landscape with Confidence",
    subtitle: "We execute complex transactions from start to finish-gold exports, government contracts, real estate acquisitions, and contract management.",
    highlights: [
      "Independent & Conflict-Free",
      "Licensed Legal Partnerships", 
      "Transaction-Based Success"
    ],
    cta: {
      primary: { text: "Explore Our Services", href: "#services" },
      secondary: { text: "Schedule Consultation", href: "/contact" }
    },
    image: "/const.webp",
    badge: "Your Gateway to Uganda Business"
  },
  {
    id: 2,
    title: "Gold & Mineral Export Solutions",
    subtitle: "End-to-end services for verified DGSM-licensed gold suppliers-from license verification to export documentation and logistics coordination.",
    highlights: [
      "12+ Verified DGSM Suppliers",
      "100% Compliance Guarantee",
      "2-3 Week Due Diligence"
    ],
    cta: {
      primary: { text: "View Gold Services", href: "/services/gold-minerals" },
      secondary: { text: "Get Started", href: "/contact" }
    },
    image: "/coffee-plantation.jpg",
    badge: "Precious Metals & Mining"
  },
  {
    id: 3,
    title: "Government Tender & Contract Implementation",
    subtitle: "Navigate Uganda's PPDA procurement process with confidence-from registration to bid submission and contract execution.",
    highlights: [
      "8+ Active Tender Opportunities",
      "Full PPDA Compliance Support",
      "Bid Preparation & Submission"
    ],
    cta: {
      primary: { text: "Explore Tenders", href: "/services/government-contracts" },
      secondary: { text: "Register Now", href: "/contact" }
    },
    image: "/bank.jpg",
    badge: "Government Procurement"
  },
  {
    id: 4,
    title: "Uganda Coffee Exports - Direct Trade",
    subtitle: "Connect with verified Arabica & Robusta exporters. Uganda is Africa's #2 coffee producer with UCDA certification and quality assurance.",
    highlights: [
      "Top 10 Global Exporter",
      "Direct Farm Partnerships",
      "UCDA Certified Suppliers"
    ],
    cta: {
      primary: { text: "Coffee Export Services", href: "/services/coffee-exports" },
      secondary: { text: "Request Samples", href: "/contact" }
    },
    image: "/mineral-resources.jpg",
    badge: "Agricultural Exports"
  },
  {
    id: 5,
    title: "Verified Land & Real Estate Acquisitions",
    subtitle: "Secure commercial, agricultural, and industrial properties with verified titles, comprehensive due diligence, and full legal support.",
    highlights: [
      "50+ Verified Properties",
      "Title Search & Verification",
      "Legal Documentation Support"
    ],
    cta: {
      primary: { text: "View Properties", href: "/services/land-real-estate" },
      secondary: { text: "Schedule Viewing", href: "/contact" }
    },
    image: "/agriculture-field.jpg",
    badge: "Real Estate & Land"
  }
]

const STATS = [
  { number: "8+", label: "Active Verified Opportunities", icon: Star },
  { number: "$4M+", label: "Total Deal Value Facilitated", icon: DollarSign },
  { number: "100%", label: "Compliance Success Rate", icon: CheckCircle2 },
  { number: "2-6", label: "Week Average Turnaround", icon: Clock },
  { number: "25+", label: "Countries Served", icon: Globe2 },
  { number: "15", label: "Years Combined Experience", icon: Award }
]

const OPPORTUNITY_CATEGORIES = [
  {
    icon: Gem,
    title: "Gold & Minerals",
    description: "Verified DGSM-licensed suppliers, export documentation, quality assurance, and logistics",
    stats: "12+ Active Suppliers",
    color: "text-amber-600",
    image: "/coffee-plantation.jpg"
  },
  {
    icon: Coffee,
    title: "Coffee Exports",
    description: "Uganda's #1 export - Arabica & Robusta, direct farm partnerships, UCDA certified exporters",
    stats: "Top 10 Global Exporter",
    color: "text-amber-800",
    image: "/mineral-resources.jpg"
  },
  {
    icon: Landmark,
    title: "Land Acquisitions",
    description: "Commercial, agricultural, and industrial properties with verified titles and legal support",
    stats: "50+ Verified Plots",
    color: "text-emerald-600",
    image: "/agriculture-field.jpg"
  },
  {
    icon: FileText,
    title: "Government Contracts",
    description: "PPDA tenders in health, infrastructure, and supply with full bid preparation support",
    stats: "8 Active Tenders",
    color: "text-blue-600",
    image: "/corporate-building.jpg"
  },
  {
    icon: Wheat,
    title: "Agriculture & Processing",
    description: "Farm partnerships, agri-processing plants, commodity exports including grains and produce",
    stats: "15+ Opportunities",
    color: "text-green-600",
    image: "/agriculture-processing.jpg"
  },
  {
    icon: Server,
    title: "Infrastructure & Technology",
    description: "Government digitization, telecom projects, road infrastructure, and tech partnerships",
    stats: "6 Active Projects",
    color: "text-indigo-600",
    image: "/renewable-energy.jpg"
  }
]

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Discovery & Execution Planning",
    description: "Free consultation to understand objectives and create a detailed execution roadmap"
  },
  {
    step: "02",
    title: "Due Diligence & Verification",
    description: "License verification, supplier & title checks, and risk assessment by our partners"
  },
  {
    step: "03",
    title: "Full Execution & Delivery",
    description: "We manage all parties, complete all processes, and deliver final results-registered titles, signed contracts, approved exports"
  }
]

const WHY_CHOOSE = [
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Comprehensive due diligence, partner verification, and compliance management"
  },
  {
    icon: Clock,
    title: "Speed & Efficiency",
    description: "Navigate bureaucracy faster with our government relationships and local expertise"
  },
  {
    icon: CheckCircle2,
    title: "Transparency",
    description: "Clear fees, no hidden costs, regular updates, and full documentation"
  },
  {
    icon: Globe2,
    title: "End-to-End Support",
    description: "From discovery to execution and ongoing operations-we're with you"
  }
]

const TESTIMONIALS = [
  {
    quote: "Their expertise in navigating Uganda's gold sector compliance was invaluable. What could have taken months was completed in weeks.",
    author: "Michael Chen",
    role: "Investment Director",
    company: "Global Resources Ltd",
    flag: "🇨🇳"
  },
  {
    quote: "Professional, transparent, and results-driven. They de-risked our entire tender process and helped us secure a significant government contract.",
    author: "Sarah Williams",
    role: "CEO",
    company: "Infrastructure Solutions",
    flag: "🇬🇧"
  },
  {
    quote: "The level of due diligence and attention to detail exceeded our expectations. We felt confident every step of the way.",
    author: "David Okonkwo",
    role: "Managing Partner",
    company: "Pan-African Ventures",
    flag: "🇳🇬"
  }
]

const CASE_STUDIES = [
  {
    title: "Coffee Export Partnership Setup",
    challenge: "European specialty roaster wanted direct trade with Ugandan Arabica farmers but lacked local contacts and UCDA compliance knowledge",
    solution: "Connected buyer with verified Mount Elgon cooperative, facilitated UCDA certification process, coordinated sample shipments and quality assessment",
    results: ["10-ton initial contract signed", "UCDA certification completed in 3 weeks", "Long-term supply agreement established"],
    sector: "Coffee Exports",
    image: "/mineral-resources.jpg"
  },
  {
    title: "Gold Supplier Due Diligence",
    challenge: "Dubai-based buyer needed comprehensive DGSM compliance verification for potential gold supplier before proceeding with transaction",
    solution: "Conducted full due diligence including mining license verification, export documentation review, and on-site supplier assessment",
    results: ["Supplier verified within 2 weeks", "100% regulatory compliance confirmed", "Client proceeding with $500K pilot transaction"],
    sector: "Gold Sector",
    image: "/coffee-plantation.jpg"
  },
  {
    title: "Government Tender Registration",
    challenge: "Regional contractor unfamiliar with Uganda's PPDA procurement requirements and registration process",
    solution: "Guided PPDA registration process, prepared required documentation, provided ongoing compliance advisory and opportunity tracking",
    results: ["Successfully registered with PPDA", "First bid submitted on schedule", "Client now tracking 3 additional tender opportunities"],
    sector: "Government Contracts",
    image: "/corporate-building.jpg"
  },
  {
    title: "$500M Devki Steel Mill - Tororo Industrial Project",
    challenge: "Dr Narendra Raval, a prolific Kenyan investor operating 19 steel and cement factories, sought to establish a world-class steel manufacturing plant in Uganda. The project required navigating Mineral Development Agreements, coordinating with multiple government ministries, securing favorable tax incentives, and leveraging Uganda's 500 million tonnes of iron ore deposits for value-addition strategy",
    solution: "Facilitated comprehensive investment advisory services including Mineral Development Agreement coordination with Uganda Investment Authority (signed April 2, 2025), site selection in Tororo near Kenyan border, regulatory compliance with Ministry of Energy and Mineral Development, and guidance on Uganda's investor-friendly terms including tax incentives, political stability, and infrastructure advantages. Supported the investor through the entire process culminating in presidential groundbreaking ceremony",
    results: ["$500M investment secured with groundbreaking ceremony attended by Presidents Museveni and Ruto (November 23, 2025)", "15,000 direct jobs at launch, expanding to 20,000 at full capacity by end of 2027", "1 million tonnes annual steel production using world-class blast furnace technology", "Uganda to become net exporter of steel worth 2 trillion shillings annually (reducing $500M annual import bill)", "Second project in Kabale announced creating additional 16,000+ jobs", "Regional value chain established supporting East Africa's industrialization"],
    sector: "Infrastructure & Manufacturing",
    image: "/Devki.jpeg"
  },
  {
    title: "$50M Dei Biopharma Cassava Starch Plant - Pharmaceutical Self-Reliance",
    challenge: "Uganda imports 85% of essential medicines and 99% of pharmaceutical excipients, making local drug manufacturing expensive and uncompetitive. Dr. Matthias Magoola's Dei Biopharma sought to establish Africa's first locally-sourced pharmaceutical ingredient manufacturing facility to reduce import dependence and create a competitive domestic pharmaceutical industry",
    solution: "This landmark project demonstrates Uganda's investment potential in agro-processing and pharmaceutical manufacturing. The Dei Group Advanced Agro-processing Park in Namasagali, Kamulu district, showcases strategic site selection along River Nile, integration with 3,000+ registered farmers, distribution of high-yield cassava varieties (Nilocus-1), and pharmaceutical-grade production capabilities. The facility processes 500 metric tonnes of cassava daily, producing starch, glucose, maltose, fructose, and other excipients - representing the type of value-addition opportunities available in Uganda's investment landscape",
    results: ["$50M investment commissioned by President Museveni (November 20, 2025)", "First African company to manufacture pharmaceutical excipients and APIs locally", "3,000+ registered farmers earning triple sugarcane income from cassava cultivation", "500 metric tonnes daily cassava processing capacity (50 acres equivalent)", "Production of 5+ pharmaceutical-grade products with plans for 100+ derivatives", "FDA certification pending for export to African and global markets", "Part of 5,000-acre industrial zone including fertilizer plant and vaccine facility (100M FMD vaccine doses annually)", "Positioning Uganda as regional biopharmaceutical innovation hub"],
    sector: "Agriculture & Pharmaceuticals",
    image: "/agriculture-processing.jpg"
  }
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState(0)
  
  // Services carousel state
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [isServicesPaused, setIsServicesPaused] = useState(false)
  
  // Case studies state
  const [activeCaseStudy, setActiveCaseStudy] = useState(0)

  // Auto-rotation logic for hero
  useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 40000)
    
    return () => clearInterval(timer)
  }, [isPaused])
  
  // Auto-rotation logic for services carousel
  useEffect(() => {
    if (isServicesPaused) return
    
    const timer = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 4) // 4 services
    }, 7000)
    
    return () => clearInterval(timer)
  }, [isServicesPaused])

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const goToNextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  const goToPrevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const currentSlideData = HERO_SLIDES[currentSlide]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Auto-Rotating Hero Slideshow */}
      <section 
        className="relative overflow-hidden bg-slate-900 text-white h-[500px] sm:h-[600px] md:h-[700px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: `url('${currentSlideData.image}')` }}
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-900/40"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-8 sm:py-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-4xl w-full"
              >
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600/20 border border-blue-400/30 rounded-full mb-4 sm:mb-6"
                >
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium text-blue-300">{currentSlideData.badge}</span>
                </motion.div>
                
                {/* Title */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4"
                >
                  {currentSlideData.title}
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-4 leading-relaxed max-w-2xl"
                >
                  {currentSlideData.subtitle}
                </motion.p>
                
                {/* Highlights */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base text-gray-400"
                >
                  {currentSlideData.highlights.map((highlight, index) => (
                    <span key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="leading-tight">{highlight}</span>
                      {index < currentSlideData.highlights.length - 1 && (
                        <span className="hidden sm:inline ml-4">|</span>
                      )}
                    </span>
                  ))}
                </motion.div>
                
                {/* CTAs */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
                >
                  <Link 
                    href={currentSlideData.cta.primary.href}
                    className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px] touch-manipulation"
                  >
                    {currentSlideData.cta.primary.text}
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href={currentSlideData.cta.secondary.href}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 hover:bg-gray-100 active:scale-95 rounded-lg font-semibold transition-all text-sm sm:text-base min-h-[44px] touch-manipulation text-center"
                  >
                    {currentSlideData.cta.secondary.text}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Navigation Dots */}
              <div className="flex gap-2">
                {HERO_SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 sm:h-2.5 rounded-full transition-all touch-manipulation min-w-[8px] ${
                      index === currentSlide 
                        ? 'w-8 sm:w-10 bg-blue-500' 
                        : 'w-2 sm:w-2.5 bg-white/30 hover:bg-white/50 active:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Prev/Next Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevSlide}
                  className="p-2.5 sm:p-2 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-lg transition-all touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={goToNextSlide}
                  className="p-2.5 sm:p-2 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-lg transition-all touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {!isPaused && (
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-blue-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 40, ease: 'linear' }}
            key={currentSlide}
          />
        )}
      </section>

      {/* Positioning Statement */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Heading and Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600/20 border border-blue-400/30 rounded-full mb-4 sm:mb-6"
              >
                <Globe2 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium text-blue-300">Empowering Growth Through Expert Insights</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight"
              >
                We Are Positioning Africa to<br /> Maximize the Future
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed"
              >
                <span className="font-semibold text-white">Diamond Capital Africa</span> is a leading African investment advisory and solutions company, 
                specializing in a broad range of investment services including gold exports, government contracts, coffee trade, real estate acquisitions, 
                and infrastructure development. With a strong footprint across Africa, we leverage our robust partnership network to connect businesses, 
                enterprises, governments, and investors. Through our value-added services, we help clients streamline operations, enhance efficiency, 
                and drive meaningful improvements across various sectors.
              </motion.p>
            </motion.div>

            {/* Right Side - Key Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              {[
                {
                  icon: Globe2,
                  title: "Pan-African Reach",
                  description: "Strong footprint across 25+ countries"
                },
                {
                  icon: Award,
                  title: "Two Decades",
                  description: "Of collaborative expertise driving positive impact"
                },
                {
                  icon: TrendingUp,
                  title: "Future-Focused",
                  description: "Empowering Africa's future shapers"
                }
              ].map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{highlight.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* CTA - Centered Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-8 sm:mt-10 text-center"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg font-semibold transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
            >
              Learn More About Our Impact
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Services - CWG Style Slideshow */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
              Our Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive investment solutions and advisory services across Africa
            </p>
          </motion.div>

          {(() => {
            const services = [
              {
                icon: Gem,
                title: "Gold & Mineral Exports",
                tagline: "Export Excellence",
                description: "We execute compliant gold and mineral transactions from DGSM verification through export-handling all licensing, documentation, quality assurance, and shipping coordination for international buyers.",
                features: [
                  "DGSM license verification and supplier vetting",
                  "Export documentation and customs clearance",
                  "Quality assurance and chain of custody",
                  "International shipping coordination"
                ],
                href: "/services/gold-minerals",
                image: "/government-building.jpg"
              },
              {
                icon: Landmark,
                title: "Government Contracts",
                tagline: "Public Procurement",
                description: "We execute the complete PPDA tender process-from registration through contract award and delivery. Our team prepares winning bids, manages compliance, and coordinates contract fulfillment for government supply opportunities.",
                features: [
                  "PPDA registration and compliance management",
                  "Professional bid preparation and submission",
                  "Contract negotiation and signing support",
                  "Post-award delivery and reporting coordination"
                ],
                href: "/services/government-contracts",
                image: "/bank.jpg"
              },
              {
                icon: Building2,
                title: "Real Estate Acquisition",
                tagline: "Property Investment",
                description: "We execute commercial and industrial property acquisitions-from sourcing verified titles through closing. Our team handles full due diligence, legal verification, negotiation, and title transfer for institutional investors.",
                features: [
                  "Property sourcing with verified titles",
                  "Comprehensive legal and physical due diligence",
                  "Price negotiation and transaction structuring",
                  "Title transfer and registration coordination"
                ],
                href: "/services/real-estate",
                image: "/agriculture-field.jpg"
              },
              {
                icon: ClipboardCheck,
                title: "Contract Implementation",
                tagline: "Delivery Management",
                description: "We execute ongoing contract management and delivery oversight-from mobilization through final acceptance. Our team coordinates suppliers, tracks milestones, manages invoicing, and ensures compliance for multi-party contracts.",
                features: [
                  "Contract mobilization and supplier coordination",
                  "Milestone tracking and progress reporting",
                  "Invoice processing and payment follow-up",
                  "Compliance documentation and stakeholder management"
                ],
                href: "/services/contract-implementation",
                image: "/construction.jpg"
              }
            ]

            const currentService = services[currentServiceIndex]
            const Icon = currentService.icon

            return (
              <>
                <div 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Section - Left 50% */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentServiceIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-64 sm:h-80 md:h-96 lg:h-full"
                      >
                        <Image 
                          src={currentService.image} 
                          alt={currentService.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent"></div>
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white shadow-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Content Section - Right 50% */}
                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentServiceIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-50 text-blue-600 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
                            {currentService.tagline}
                          </div>
                          
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 leading-tight">
                            {currentService.title}
                          </h3>
                          
                          <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                            {currentService.description}
                          </p>

                          <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                            {currentService.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2 sm:gap-3">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-600" />
                                </div>
                                <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <Link 
                            href={currentService.href}
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 active:text-blue-800 font-semibold group text-sm sm:text-base min-h-[44px] touch-manipulation"
                          >
                            Explore this service
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {!isPaused && (
                    <motion.div
                      className="h-1 bg-blue-600"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 7, ease: 'linear' }}
                      key={currentServiceIndex}
                    />
                  )}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentServiceIndex(index)}
                      className={`transition-all touch-manipulation ${
                        index === currentServiceIndex
                          ? 'w-10 sm:w-12 h-3 bg-blue-600 rounded-full'
                          : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 active:bg-gray-500'
                      }`}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>

                {/* View All Services Link */}
                <div className="mt-8 sm:mt-10 text-center">
                  <Link 
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-slate-900 hover:bg-slate-800 active:bg-slate-700 text-white rounded-lg font-semibold transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
                  >
                    Explore all services
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </div>
              </>
            )
          })()}
        </div>
      </section>

      {/* Case Studies - CWG Style Featured Showcase */}
      <section id="case-studies" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
              Client Success Stories
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real results from real transactions across Uganda's key investment sectors
            </p>
          </motion.div>

          {(() => {
            const activeStudy = CASE_STUDIES[activeCaseStudy]

            return (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Featured Case Study - 2/3 width */}
                <div className="lg:col-span-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCaseStudy}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
                    >
                      <div className="relative h-64 sm:h-80">
                        <Image 
                          src={activeStudy.image} 
                          alt={activeStudy.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                        
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-full">
                            {activeStudy.sector}
                          </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                            {activeStudy.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-4 sm:h-5 bg-blue-600 rounded-full"></div>
                            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide">The Challenge</h4>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{activeStudy.challenge}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-4 sm:h-5 bg-blue-600 rounded-full"></div>
                            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide">Our Solution</h4>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{activeStudy.solution}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <div className="w-1 h-4 sm:h-5 bg-blue-600 rounded-full"></div>
                            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide">Results Delivered</h4>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                            {activeStudy.results.map((result, i) => (
                              <div key={i} className="bg-slate-800 rounded-lg p-3 sm:p-4 border border-slate-700">
                                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mb-2" />
                                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{result}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Thumbnail Navigation - 1/3 width */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-3 sm:mb-4 hidden lg:block">More Success Stories</h4>
                  {/* Mobile: Horizontal scroll */}
                  <div className="flex lg:flex-col gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                  {CASE_STUDIES.map((study, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCaseStudy(index)}
                        className={`flex-shrink-0 w-full lg:w-full text-left rounded-xl overflow-hidden transition-all touch-manipulation min-h-[44px] ${
                        index === activeCaseStudy
                          ? 'ring-2 ring-blue-600 shadow-lg'
                            : 'hover:shadow-md border-2 border-gray-200 hover:border-blue-400 active:border-blue-500'
                      }`}
                        aria-label={`View case study: ${study.title}`}
                    >
                        <div className="relative h-24 sm:h-32">
                        <Image 
                          src={study.image} 
                          alt={study.title}
                          fill
                          className="object-cover"
                            sizes="(max-width: 640px) 200px, (max-width: 1024px) 200px, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                          <span className="text-xs font-semibold text-blue-400 mb-1 block">{study.sector}</span>
                            <h5 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-tight">{study.title}</h5>
                        </div>
                      </div>
                    </button>
                  ))}
                  </div>
                </div>
              </div>
            )
          })()}

          <div className="text-center mt-8 sm:mt-12">
            <Link 
              href="/resources"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-slate-900 hover:bg-slate-800 active:bg-slate-700 text-white rounded-lg font-semibold transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
            >
              Explore all case studies
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resources & Insights - Featured Layout */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
              Knowledge Center
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Expert guides, regulatory insights, and practical resources for Uganda investments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Featured Resource - Large */}
            <Link
              href="/intelligence/articles/verify-dgsm-gold-license"
              className="lg:col-span-2 group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all touch-manipulation"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 sm:h-80">
                  <Image 
                    src="/coffee-plantation.jpg"
                    alt="Gold verification guide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-full">
                      Featured Guide
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Gem className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                      <span className="text-xs sm:text-sm font-semibold text-blue-400">Gold Sector</span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                      How to Verify DGSM Gold Licenses
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed mb-2 sm:mb-3">
                      Complete step-by-step guide to verifying gold dealer licenses, mining permits, and export documentation in Uganda
                    </p>
                    <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                      Read full guide
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Quick Access Resources - Stacked */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">Quick Access</h4>
              
              {[
                {
                  icon: FileText,
                  title: "PPDA Tender Checklist",
                  description: "Essential requirements for government bids",
                  href: "/intelligence/articles/ppda-tender-checklist",
                  color: "blue"
                },
                {
                  icon: HelpCircle,
                  title: "Tender Disqualifications",
                  description: "Common mistakes that disqualify bids",
                  href: "/intelligence/articles/tender-disqualification-reasons",
                  color: "slate"
                },
                {
                  icon: TrendingUp,
                  title: "Gold Export Requirements",
                  description: "Documentation for international exports",
                  href: "/intelligence/articles/gold-export-requirements",
                  color: "blue"
                }
              ].map((resource, index) => {
                const Icon = resource.icon
                return (
                  <Link
                    key={index}
                    href={resource.href}
                    className="block group bg-white rounded-xl p-4 sm:p-6 shadow hover:shadow-lg transition-all border-2 border-gray-200 hover:border-blue-500 active:border-blue-600 touch-manipulation min-h-[44px]"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-${resource.color}-100 flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${resource.color}-600`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors text-sm sm:text-base">
                            {resource.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">{resource.description}</p>
                          <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600">
                            Read more
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link 
              href="/intelligence"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg font-semibold transition-all text-sm sm:text-base min-h-[44px] touch-manipulation"
            >
              View all intelligence
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
              How We Execute
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A proven three-phase execution model-from analysis to completed delivery
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
              {/* Connection line for desktop */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300" style={{ width: 'calc(100% - 80px)', marginLeft: '40px' }}></div>
              
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative z-10"
                >
                  <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full text-lg sm:text-xl font-bold mb-3 sm:mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-2">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
              Trusted by International Investors
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hear from clients who successfully navigated Uganda's business landscape with our support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 sm:p-6 bg-white border-2 border-gray-200 rounded-xl hover:shadow-xl hover:border-blue-400 transition-all"
              >
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{testimonial.flag}</div>
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed italic text-xs sm:text-sm">"{testimonial.quote}"</p>
                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  <p className="font-bold text-slate-900 text-xs sm:text-sm">{testimonial.author}</p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Diamond Capital Africa - Split Hero Layout */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image with Overlay */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
            >
              <Image 
                src="/business-team.jpg"
                alt="Professional business partnership"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
              
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-8 sm:py-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
                    Our Advantage
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    Why Work With<br />Diamond Capital Africa
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-lg">
                    We execute complete transactions with institutional discipline-not just introductions or advice
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Differentiators */}
            <div className="bg-white px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 flex flex-col justify-center">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                {[
                  {
                    icon: Scale,
                    title: "Conflict-Free Advisory",
                    description: "We don't invest, trade, or compete with clients. Independent execution means we're paid for results, not commissions that incentivize overpricing."
                  },
                  {
                    icon: Shield,
                    title: "Institutional Due Diligence",
                    description: "Comprehensive verification with Kampala's leading law firms, surveyors, and specialists. We catch regulatory issues, title defects, and compliance gaps that brokers miss."
                  },
                  {
                    icon: Handshake,
                    title: "Long-Term Partnerships",
                    description: "Multi-year client relationships with ongoing advisory support. We don't disappear after closing-we're invested in your portfolio success across Uganda."
                  },
                  {
                    icon: Target,
                    title: "Transparent Pricing",
                    description: "Success-based fees with clear terms. You pay when transactions close successfully-no hidden markups, no pressure to rush deals for commission."
                  }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Signals - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              {
                icon: Shield,
                title: "Licensed in Uganda",
                description: "URSB registered, URA compliant, professionally insured"
              },
              {
                icon: Scale,
                title: "Independent Advisory Services",
                description: "We don't invest, trade, or compete with clients"
              },
              {
                icon: Handshake,
                title: "Top-Tier Partnerships",
                description: "Kampala's leading law firms, surveyors, and specialists"
              },
              {
                icon: Target,
                title: "Transaction Success",
                description: "Transparent pricing. Paid on results."
              }
            ].map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
                  <div className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-1 sm:mb-2">
                    {badge.title}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">{badge.description}</div>
                </motion.div>
              )
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 border-t pt-8 sm:pt-12 border-gray-200">
            {STATS.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business Highlights - CWG Style */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/corporate-building.jpg"
            alt="Corporate building"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/95"></div>
        </div>
        
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Corporate Image */}
            <div className="h-96 lg:h-auto">
              <img
                src="/corporate-building.jpg"
                alt="Business growth"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Right: Business Highlights Card */}
            <div className="flex items-center justify-center p-8 lg:p-16">
              <div className="w-full max-w-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-8">
                    <div className="text-sm font-semibold text-gray-400 mb-2">DIAMOND CAPITAL AFRICA</div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">2024 Performance</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">$4M+</div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium">Total Deal Value</div>
                      <div className="text-xs text-blue-400 mt-1">Transactions Executed</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium">Compliance Rate</div>
                      <div className="text-xs text-blue-400 mt-1">Zero Failures</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2-6 wks</div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium">Avg Turnaround</div>
                      <div className="text-xs text-blue-400 mt-1">Transaction Speed</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">25+</div>
                      <div className="text-sm text-gray-400 font-medium">Countries</div>
                      <div className="text-xs text-blue-400 mt-1">Client Base</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Link href="/intelligence" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all text-center">
                      <TrendingUp className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-xs sm:text-sm font-semibold text-white mb-1">Market Intelligence</div>
                      <div className="text-xs text-gray-400">Weekly reports</div>
                    </Link>
                    <Link href="/intelligence" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all text-center">
                      <FileText className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-xs sm:text-sm font-semibold text-white mb-1">Due Diligence</div>
                      <div className="text-xs text-gray-400">Verification service</div>
                    </Link>
                    <Link href="/contact" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all text-center">
                      <Users className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-xs sm:text-sm font-semibold text-white mb-1">Partner Network</div>
                      <div className="text-xs text-gray-400">Join us</div>
                    </Link>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="text-sm text-gray-400 mb-3">Performance Period • Jan - Nov 2025</div>
                    <Link href="/contact">
                      <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-3 sm:mb-4">
              <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Common questions from international investors
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                question: "What is the minimum investment required?",
                answer: "Minimum investments vary by sector: Gold & Minerals ($200K), Coffee Exports ($150K), Government Contracts ($500K bid value), and Land Acquisitions ($300K). We work with investors across all sizes."
              },
              {
                question: "How long does the transaction process take?",
                answer: "Typical timelines range from 2-8 weeks depending on the transaction type. Gold exports: 4-8 weeks, Government contracts: 8-16 weeks for bid process, Land acquisitions: 3-6 months for title transfer."
              },
              {
                question: "Do you provide financing?",
                answer: "We facilitate connections with trade finance providers but do not provide direct financing. Buyers typically need to show proof of funds or secure financing independently."
              },
              {
                question: "How do you verify suppliers and opportunities?",
                answer: "We conduct comprehensive due diligence including license verification (DGSM, UCDA, PPDA), on-site assessments, title searches, and compliance reviews. All opportunities are pre-vetted before presentation."
              },
              {
                question: "What are your fees?",
                answer: "Our fees are transaction-based and transparent. Typically 3-5% of transaction value for advisory services. We provide complete cost breakdowns before you commit to any transaction."
              },
              {
                question: "Can foreigners own property in Uganda?",
                answer: "Yes, foreigners can own property through a locally registered company or long-term lease. We coordinate with corporate secretaries and lawyers to set up compliant holding structures when required."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-gray-200"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
              Our Team
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experienced professionals with deep knowledge of Uganda's investment landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Leadership Team",
                role: "Investment Advisory",
                description: "15+ years combined experience in cross-border transactions and regulatory compliance",
                expertise: ["Gold Sector", "Government Contracts", "Real Estate"]
              },
              {
                name: "Legal Partners",
                role: "Compliance & Due Diligence",
                description: "Top-tier Kampala law firms specializing in corporate law, land transactions, and regulatory compliance",
                expertise: ["Title Verification", "Corporate Structuring", "Regulatory Compliance"]
              },
              {
                name: "Technical Advisors",
                role: "Due Diligence & Verification",
                description: "Licensed surveyors, auditors, and technical experts ensuring comprehensive verification",
                expertise: ["Land Surveys", "Financial Audits", "Quality Assurance"]
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-gray-200"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mx-auto">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 text-center mb-1">{member.name}</h3>
                <p className="text-xs sm:text-sm text-blue-600 text-center mb-2 sm:mb-3">{member.role}</p>
                <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 sm:mb-4 leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-white text-xs font-medium text-gray-700 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
              Certifications & Partnerships
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Licensed, registered, and partnered with Uganda's leading institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "URSB Registered",
                description: "Uganda Registration Services Bureau",
                icon: FileText,
                bgColor: "bg-blue-100",
                iconColor: "text-blue-600"
              },
              {
                title: "URA Compliant",
                description: "Uganda Revenue Authority",
                icon: Shield,
                bgColor: "bg-green-100",
                iconColor: "text-green-600"
              },
              {
                title: "Licensed Partners",
                description: "DGSM, UCDA, PPDA certified partners",
                icon: Award,
                bgColor: "bg-amber-100",
                iconColor: "text-amber-600"
              },
              {
                title: "Professional Insurance",
                description: "Fully insured and bonded",
                icon: Scale,
                bgColor: "bg-indigo-100",
                iconColor: "text-indigo-600"
              }
            ].map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 sm:p-6 border-2 border-gray-200 text-center hover:border-blue-500 transition-all"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${cert.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                    <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${cert.iconColor}`} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 sm:mb-2">{cert.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      <BackToTop />
    </div>
  )
}