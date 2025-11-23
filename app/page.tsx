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
    subtitle: "We execute complex transactions from start to finish—gold exports, government contracts, real estate acquisitions, and contract management.",
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
    title: "Gold & Mineral Export Facilitation",
    subtitle: "End-to-end facilitation for verified DGSM-licensed gold suppliers—from license verification to export documentation and logistics coordination.",
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
    subtitle: "Navigate Uganda's PPDA procurement process with confidence—from registration to bid submission and contract execution.",
    highlights: [
      "8+ Active Tender Opportunities",
      "Full PPDA Compliance Support",
      "Bid Preparation & Submission"
    ],
    cta: {
      primary: { text: "Explore Tenders", href: "/services/government-contracts" },
      secondary: { text: "Register Now", href: "/contact" }
    },
    image: "",
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
    description: "We manage all parties, complete all processes, and deliver final results—registered titles, signed contracts, approved exports"
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
    description: "From discovery to execution and ongoing operations—we're with you"
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
        className="relative overflow-hidden bg-slate-900 text-white h-[600px] md:h-[700px]"
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
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/60"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-4xl"
              >
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full mb-6"
                >
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">{currentSlideData.badge}</span>
                </motion.div>
                
                {/* Title */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                >
                  {currentSlideData.title}
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl"
                >
                  {currentSlideData.subtitle}
                </motion.p>
                
                {/* Highlights */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 mb-8 text-lg text-gray-400"
                >
                  {currentSlideData.highlights.map((highlight, index) => (
                    <span key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      {highlight}
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
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link 
                    href={currentSlideData.cta.primary.href}
                    className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    {currentSlideData.cta.primary.text}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href={currentSlideData.cta.secondary.href}
                    className="px-8 py-4 bg-white text-slate-900 hover:bg-gray-100 rounded-lg font-semibold transition-all"
                  >
                    {currentSlideData.cta.secondary.text}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Navigation Dots */}
              <div className="flex gap-2">
                {HERO_SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'w-8 bg-blue-500' 
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Prev/Next Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevSlide}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goToNextSlide}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
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

      {/* Our Services - CWG Style Slideshow */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete execution support for your Uganda investment transactions
            </p>
          </motion.div>

          {(() => {
            const services = [
              {
                icon: Gem,
                title: "Gold & Mineral Exports",
                tagline: "Export Excellence",
                description: "We execute compliant gold and mineral transactions from DGSM verification through export—handling all licensing, documentation, quality assurance, and shipping coordination for international buyers.",
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
                description: "We execute the complete PPDA tender process—from registration through contract award and delivery. Our team prepares winning bids, manages compliance, and coordinates contract fulfillment for government supply opportunities.",
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
                description: "We execute commercial and industrial property acquisitions—from sourcing verified titles through closing. Our team handles full due diligence, legal verification, negotiation, and title transfer for institutional investors.",
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
                description: "We execute ongoing contract management and delivery oversight—from mobilization through final acceptance. Our team coordinates suppliers, tracks milestones, manages invoicing, and ensures compliance for multi-party contracts.",
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
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Section - Left 50% */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentServiceIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-96 lg:h-full"
                      >
                        <Image 
                          src={currentService.image} 
                          alt={currentService.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent"></div>
                        
                        {/* Icon Badge */}
                        <div className="absolute top-8 left-8">
                          <div className="w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center">
                            <Icon className="h-8 w-8 text-blue-600" />
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Content Section - Right 50% */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentServiceIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
                            {currentService.tagline}
                          </div>
                          
                          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            {currentService.title}
                          </h3>
                          
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {currentService.description}
                          </p>

                          <ul className="space-y-3 mb-8">
                            {currentService.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <ArrowRight className="h-3 w-3 text-blue-600" />
                                </div>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <Link 
                            href={currentService.href}
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
                          >
                            Explore this service
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
                <div className="flex justify-center items-center gap-4 mt-8">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentServiceIndex(index)}
                      className={`transition-all ${
                        index === currentServiceIndex
                          ? 'w-12 h-3 bg-blue-600 rounded-full'
                          : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                      }`}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>

                {/* View All Services Link */}
                <div className="mt-10 text-center">
                  <Link 
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-all"
                  >
                    Explore all services
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </>
            )
          })()}
        </div>
      </section>

      {/* Case Studies - CWG Style Featured Showcase */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real transactions across Uganda's key investment sectors
            </p>
          </motion.div>

          {(() => {
            const activeStudy = CASE_STUDIES[activeCaseStudy]

            return (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Featured Case Study - 2/3 width */}
                <div className="lg:col-span-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCaseStudy}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl"
                    >
                      <div className="relative h-80">
                        <Image 
                          src={activeStudy.image} 
                          alt={activeStudy.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                        
                        <div className="absolute top-6 left-6">
                          <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full">
                            {activeStudy.sector}
                          </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {activeStudy.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-8 space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wide">The Challenge</h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{activeStudy.challenge}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wide">Our Solution</h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{activeStudy.solution}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wide">Results Delivered</h4>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4">
                            {activeStudy.results.map((result, i) => (
                              <div key={i} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                                <CheckCircle2 className="h-5 w-5 text-green-400 mb-2" />
                                <p className="text-sm text-gray-300">{result}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Thumbnail Navigation - 1/3 width */}
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-lg mb-4">More Success Stories</h4>
                  {CASE_STUDIES.map((study, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCaseStudy(index)}
                      className={`w-full text-left rounded-xl overflow-hidden transition-all ${
                        index === activeCaseStudy
                          ? 'ring-2 ring-blue-600 shadow-lg'
                          : 'hover:shadow-md border-2 border-gray-200 hover:border-blue-400'
                      }`}
                    >
                      <div className="relative h-32">
                        <Image 
                          src={study.image} 
                          alt={study.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <span className="text-xs font-semibold text-blue-400 mb-1 block">{study.sector}</span>
                          <h5 className="text-sm font-bold text-white line-clamp-2">{study.title}</h5>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )
          })()}

          <div className="text-center mt-12">
            <Link 
              href="/resources"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-all"
            >
              Explore all case studies
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resources & Insights - Featured Layout */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Knowledge Center
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert guides, regulatory insights, and practical resources for Uganda investments
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Resource - Large */}
            <Link
              href="/resources/articles/verify-dgsm-gold-license"
              className="lg:col-span-2 group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative h-80">
                  <Image 
                    src="/coffee-plantation.jpg"
                    alt="Gold verification guide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      Featured Guide
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Gem className="h-5 w-5 text-blue-400" />
                      <span className="text-sm font-semibold text-blue-400">Gold Sector</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      How to Verify DGSM Gold Licenses
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      Complete step-by-step guide to verifying gold dealer licenses, mining permits, and export documentation in Uganda
                    </p>
                    <div className="flex items-center gap-2 text-white font-semibold">
                      Read full guide
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Quick Access Resources - Stacked */}
            <div className="space-y-6">
              <h4 className="font-bold text-slate-900 text-lg">Quick Access</h4>
              
              {[
                {
                  icon: FileText,
                  title: "PPDA Tender Checklist",
                  description: "Essential requirements for government bids",
                  href: "/resources/articles/ppda-tender-checklist",
                  color: "blue"
                },
                {
                  icon: HelpCircle,
                  title: "Tender Disqualifications",
                  description: "Common mistakes that disqualify bids",
                  href: "/resources/articles/tender-disqualification-reasons",
                  color: "slate"
                },
                {
                  icon: TrendingUp,
                  title: "Gold Export Requirements",
                  description: "Documentation for international exports",
                  href: "/resources/articles/gold-export-requirements",
                  color: "blue"
                }
              ].map((resource, index) => {
                const Icon = resource.icon
                return (
                  <Link
                    key={index}
                    href={resource.href}
                    className="block group bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all border-2 border-gray-200 hover:border-blue-500"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-${resource.color}-100 flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`h-6 w-6 text-${resource.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {resource.title}
                          </h5>
                          <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                          <div className="flex items-center text-sm font-semibold text-blue-600">
                            Read more
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/resources"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
            >
              View all resources
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Execute
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven three-phase execution model—from analysis to completed delivery
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
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
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by International Investors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from clients who successfully navigated Uganda's business landscape with our support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:shadow-xl hover:border-blue-400 transition-all"
              >
                <div className="text-4xl mb-4">{testimonial.flag}</div>
                <p className="text-gray-700 mb-6 leading-relaxed italic text-sm">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-slate-900 text-sm">{testimonial.author}</p>
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
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Image with Overlay */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[600px] lg:min-h-[700px]"
            >
              <Image 
                src="/business-team.jpg"
                alt="Professional business partnership"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
              
              <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-6">
                    Our Advantage
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Why Work With<br />Diamond Capital Africa
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                    We execute complete transactions with institutional discipline—not just introductions or advice
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Differentiators */}
            <div className="bg-white px-8 lg:px-12 py-16 lg:py-20 flex flex-col justify-center">
              <div className="space-y-10">
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
                    description: "Multi-year client relationships with ongoing advisory support. We don't disappear after closing—we're invested in your portfolio success across Uganda."
                  },
                  {
                    icon: Target,
                    title: "Transparent Pricing",
                    description: "Success-based fees with clear terms. You pay when transactions close successfully—no hidden markups, no pressure to rush deals for commission."
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
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
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
      <section className="py-12 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Signals - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Shield,
                title: "Licensed in Uganda",
                description: "URSB registered, URA compliant, professionally insured"
              },
              {
                icon: Scale,
                title: "Independent Advisory",
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
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-base md:text-lg font-bold text-slate-900 mb-2">
                    {badge.title}
                  </div>
                  <div className="text-sm text-gray-600">{badge.description}</div>
                </motion.div>
              )
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t pt-12 border-gray-200">
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
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
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
                    <div className="text-5xl font-bold mb-2">2024 Performance</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">$4M+</div>
                      <div className="text-sm text-gray-400 font-medium">Total Deal Value</div>
                      <div className="text-xs text-blue-400 mt-1">Transactions Executed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">100%</div>
                      <div className="text-sm text-gray-400 font-medium">Compliance Rate</div>
                      <div className="text-xs text-blue-400 mt-1">Zero Failures</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">2-6 wks</div>
                      <div className="text-sm text-gray-400 font-medium">Avg Turnaround</div>
                      <div className="text-xs text-blue-400 mt-1">Transaction Speed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">25+</div>
                      <div className="text-sm text-gray-400 font-medium">Countries</div>
                      <div className="text-xs text-blue-400 mt-1">Client Base</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Link href="/resources" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all text-center">
                      <TrendingUp className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-white mb-1">Market Insights</div>
                      <div className="text-xs text-gray-400">Uganda analysis</div>
                    </Link>
                    <Link href="/resources" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all text-center">
                      <FileText className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-white mb-1">Annual Reports</div>
                      <div className="text-xs text-gray-400">Performance data</div>
                    </Link>
                    <Link href="/contact" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all text-center">
                      <Users className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-white mb-1">Partner Network</div>
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <HelpCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from international investors
            </p>
          </motion.div>

          <div className="space-y-4">
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
                answer: "Our fees are transaction-based and transparent. Typically 3-5% of transaction value for facilitation services. We provide complete cost breakdowns before you commit to any transaction."
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
                className="bg-slate-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals with deep knowledge of Uganda's investment landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                className="bg-slate-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 text-center mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 text-center mb-4">{member.description}</p>
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Licensed, registered, and partnered with Uganda's leading institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center hover:border-blue-500 transition-all"
                >
                  <div className={`w-12 h-12 ${cert.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`h-6 w-6 ${cert.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      <BackToTop />
    </div>
  )
}