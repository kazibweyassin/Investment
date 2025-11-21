"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Gem, Landmark, Building2, ClipboardCheck, Coffee, MapPin, Wheat, Server } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { COMPANY_NAME } from "@/lib/constants"
import Search from "@/components/search"

type ServiceLink = {
  href: string
  label: string
  description: string
  icon: LucideIcon
}

const serviceLinks: ServiceLink[] = [
  {
    href: "/services/gold-minerals",
    label: "Gold & Mineral Exports",
    description: "DGSM verification, supply chain audits, export compliance",
    icon: Gem,
  },
  {
    href: "/services/government-contracts",
    label: "Government Contract Navigation",
    description: "PPDA registration, bid preparation, contract management",
    icon: Landmark,
  },
  {
    href: "/services/real-estate",
    label: "Real Estate Acquisition",
    description: "Property sourcing, due diligence, title transfer execution",
    icon: Building2,
  },
  {
    href: "/services/contract-implementation",
    label: "Contract Implementation & Delivery",
    description: "Execution oversight, compliance reporting, stakeholder coordination",
    icon: ClipboardCheck,
  },
]

const opportunityLinks: ServiceLink[] = [
  {
    href: "/opportunities/gold-minerals",
    label: "Gold & Minerals",
    description: "12+ verified DGSM-licensed suppliers",
    icon: Gem,
  },
  {
    href: "/opportunities/coffee-exports",
    label: "Coffee Exports",
    description: "UCDA-certified Arabica & Robusta",
    icon: Coffee,
  },
  {
    href: "/opportunities/land-acquisitions",
    label: "Land Acquisitions",
    description: "50+ verified commercial & agricultural plots",
    icon: MapPin,
  },
  {
    href: "/opportunities/government-contracts",
    label: "Government Contracts",
    description: "8 active PPDA tenders",
    icon: Landmark,
  },
  {
    href: "/opportunities/agriculture-processing",
    label: "Agriculture & Processing",
    description: "Farm partnerships & commodity exports",
    icon: Wheat,
  },
  {
    href: "/opportunities/infrastructure-technology",
    label: "Infrastructure & Technology",
    description: "IT projects & infrastructure deals",
    icon: Server,
  },
]

type NavLink = {
  href: string
  label: string
  children?: ServiceLink[]
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isOpportunitiesOpen, setIsOpportunitiesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileOpportunitiesOpen, setMobileOpportunitiesOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/opportunities", label: "Opportunities", children: opportunityLinks },
    { href: "/why-uganda", label: "Why Uganda" },
    { href: "/services", label: "Services", children: serviceLinks },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setIsServicesOpen(false)
    setIsOpportunitiesOpen(false)
    setMobileServicesOpen(false)
    setMobileOpportunitiesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isOpen) {
      setMobileServicesOpen(false)
      setMobileOpportunitiesOpen(false)
    }
  }, [isOpen])

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white/98 backdrop-blur-md shadow-sm"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 -ml-2"
              aria-label="Navigate to home"
            >
              <span className="text-lg font-bold text-secondary">
                {COMPANY_NAME}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                const isDropdown = link.children && link.children.length > 0
                const isServices = link.href === "/services"
                const isOpportunities = link.href === "/opportunities"
                const isDropdownOpen = isServices ? isServicesOpen : isOpportunities ? isOpportunitiesOpen : false
                const setIsDropdownOpen = isServices ? setIsServicesOpen : isOpportunities ? setIsOpportunitiesOpen : () => {}

                if (isDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md",
                          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                          active || isDropdownOpen
                            ? "text-primary"
                            : "text-gray-700 hover:text-primary hover:bg-gray-50"
                        )}
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                        onFocus={() => setIsDropdownOpen(true)}
                        onBlur={(event) => {
                          if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node)) {
                            setIsDropdownOpen(false)
                          }
                        }}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isDropdownOpen ? "rotate-180" : ""
                          )}
                        />
                        {(active || isDropdownOpen) && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            layoutId={`activeTab-${link.href}`}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 top-full mt-2 w-[360px] -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl"
                          >
                            <div className="space-y-2">
                              {link.children!.map((item) => {
                                const Icon = item.icon
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                                    onClick={() => setIsDropdownOpen(false)}
                                  >
                                    <div className="mt-0.5 rounded-lg bg-blue-50 p-2 text-blue-600">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-gray-900">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-gray-500">{item.description}</p>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                            <div className="mt-3 border-t pt-3">
                              <Link
                                href={link.href}
                                className="text-sm font-semibold text-primary hover:underline"
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                {isServices ? "Explore all services" : "View all opportunities"}
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      active
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    )}
                    aria-label={`Navigate to ${link.label}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        layoutId={`activeTab-${link.href}`}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                )
              })}
              <Search />
              <Button asChild size="sm" className="ml-2">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed top-16 right-0 bottom-0 z-40 w-80 max-w-[85vw] bg-white shadow-xl md:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href)
                  const isServices = link.href === "/services"
                  const isOpportunities = link.href === "/opportunities"
                  const mobileDropdownOpen = isServices ? mobileServicesOpen : isOpportunities ? mobileOpportunitiesOpen : false
                  const setMobileDropdownOpen = isServices ? setMobileServicesOpen : isOpportunities ? setMobileOpportunitiesOpen : () => {}

                  if (link.children) {
                    return (
                      <div key={link.label} className="rounded-lg border border-gray-200 px-4 py-3">
                        <button
                          className="flex w-full items-center justify-between text-sm font-semibold text-gray-800"
                          onClick={() => setMobileDropdownOpen((prev) => !prev)}
                          aria-expanded={mobileDropdownOpen}
                          aria-controls={`mobile-${link.href.replace("/", "")}-menu`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              mobileDropdownOpen ? "rotate-180" : ""
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileDropdownOpen && (
                            <motion.div
                              id={`mobile-${link.href.replace("/", "")}-menu`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-3 space-y-2 overflow-hidden text-sm"
                            >
                              <Link
                                href={link.href}
                                className="block rounded-md bg-gray-50 px-3 py-2 font-medium text-gray-800"
                                onClick={() => setIsOpen(false)}
                              >
                                {isServices ? "Service overview" : "View all opportunities"}
                              </Link>
                              {link.children.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="block rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-gray-700 hover:bg-gray-100 hover:text-primary"
                      )}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <div className="pt-4 mt-4 border-t">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Schedule Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

