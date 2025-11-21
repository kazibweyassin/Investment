"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Breadcrumbs from "@/components/breadcrumbs"
import { Gem, FileText, DollarSign, Clock, CheckCircle2, AlertCircle, Shield, FileCheck, Users, ArrowRight, Award, Target, Zap, ChevronDown, Coffee, Building2, Home, ClipboardCheck } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const SERVICE_LINKS = [
  {
    icon: <Gem className="h-8 w-8" />,
    title: "Gold & Mineral Exports",
    description: "DGSM license verification, laboratory testing, escrow coordination, and compliant export documentation.",
    color: "amber",
    href: "/services/gold-minerals",
    tag: "Precious Metals & Mining",
    image: "https://images.unsplash.com/photo-1737815914093-becb6c9ac064?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Government Contract Navigation",
    description: "PPDA registration, bid preparation, compliance checks, and ongoing contract fulfilment support.",
    color: "indigo",
    href: "/services/government-contracts",
    tag: "Government Procurement",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Real Estate Acquisition",
    description: "Property sourcing, due diligence, legal verification, negotiation, and title transfer execution.",
    color: "emerald",
    href: "/services/real-estate",
    tag: "Land & Property",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <ClipboardCheck className="h-8 w-8" />,
    title: "Contract Implementation & Delivery",
    description: "On-the-ground execution oversight, documentation control, stakeholder alignment, and dispute prevention.",
    color: "blue",
    href: "/services/contract-implementation",
    tag: "Operations & Delivery",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
  },
]

const AccordionItem = ({ title, children, isOpen, onToggle }: { title: string; children: React.ReactNode; isOpen: boolean; onToggle: () => void }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
    <button
      onClick={onToggle}
      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
    >
      <span className="font-semibold text-gray-900">{title}</span>
      <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <div className="px-6 pb-4 text-gray-700 leading-relaxed">
        {children}
      </div>
    )}
  </div>
)

export default function ServicesPage() {
  const [goldAccordion, setGoldAccordion] = useState<number | null>(null)
  const [coffeeAccordion, setCoffeeAccordion] = useState<number | null>(null)
  const [tenderAccordion, setTenderAccordion] = useState<number | null>(null)
  const [faqAccordion, setFaqAccordion] = useState<number | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1725811641344-9bca74828fc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="Business services"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} className="mb-6 text-gray-300" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6"
            >
              <Award className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-200">Comprehensive Compliance Solutions</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Complete Transaction Execution Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4">
              We execute complex transactions from initiation to completion—eliminating regulatory risks, 
              fraudulent documentation, transactional disputes, and contract mismanagement through hands-on delivery.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg font-semibold transition-all text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Overview Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {SERVICE_LINKS.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={service.href}
                  className="relative block h-full bg-white border-2 border-gray-200 hover:border-blue-500 rounded-2xl overflow-hidden transition-all hover:shadow-xl"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg",
                          service.color === "amber"
                            ? "bg-amber-600"
                            : service.color === "emerald"
                            ? "bg-emerald-600"
                            : service.color === "blue"
                            ? "bg-blue-600"
                            : "bg-indigo-600"
                        )}
                      >
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase text-gray-400 tracking-widest mb-1">
                      {service.tag}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sector Service */}
      <section id="gold" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-xl">
                <Gem className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Gold Sector Transaction Execution
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We execute compliant gold transactions from verification through export—handling all DGSM licensing, 
                  supply chain audits, documentation, and regulatory filings to deliver export-ready, compliant deals.
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1737815914093-becb6c9ac064?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1315"
                alt="Gold sector compliance and mining operations"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 text-white flex-wrap">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <span className="font-semibold">100% Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    <span className="font-semibold">DGSM Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    <span className="font-semibold">2-6 Week Timeline</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What We Do */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h3>
            <div className="space-y-3">
              {[
                {
                  title: "DGSM License Verification",
                  content: "We verify that all parties hold valid Directorate of Geological Survey and Mines (DGSM) licenses. This includes checking license status, expiration dates, and compliance history. We provide detailed verification reports and flag any issues before transactions proceed."
                },
                {
                  title: "Supply Chain Due Diligence",
                  content: "Comprehensive due diligence on the entire supply chain, from mine to export. We verify the origin of gold, ensure chain of custody documentation is complete, and identify any potential compliance risks or red flags in the supply chain."
                },
                {
                  title: "Transaction Facilitation & Escrow Coordination",
                  content: "We facilitate secure transactions between buyers and sellers, coordinating with escrow services when needed. We ensure all documentation is in order, payment terms are clear, and regulatory requirements are met before funds are released."
                },
                {
                  title: "Export Documentation Management",
                  content: "Complete management of all export documentation requirements, including export permits, customs declarations, and any other regulatory paperwork needed for gold export from Uganda. We ensure all documentation is accurate and submitted on time."
                }
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  isOpen={goldAccordion === index}
                  onToggle={() => setGoldAccordion(goldAccordion === index ? null : index)}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="h-7 w-7 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">What You Receive</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "DGSM license verification report",
                "Supply chain due diligence report",
                "Transaction facilitation documentation",
                "Export documentation package",
                "Compliance certificate",
                "Ongoing support during transaction"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Acquisition Service */}
      <section id="realestate" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-xl">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Real Estate Acquisition Execution
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We execute complete property acquisitions—finding properties, conducting full legal and physical due diligence, 
                  negotiating deals, and completing title transfers. You receive registered ownership, not just advice.
                </p>
              </div>
            </div>

            {/* Emphasis Callout */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-amber-900 font-semibold mb-1">Unlike traditional brokers</p>
                  <p className="text-amber-800 text-sm">We provide institutional-grade due diligence and work exclusively for you—never representing sellers or earning undisclosed commissions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What We Do - 4 Stages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h3>
            <div className="space-y-3">
              <AccordionItem
                title="STAGE 1: Property Search & Sourcing (Retainer: $5,000)"
                isOpen={coffeeAccordion === 0}
                onToggle={() => setCoffeeAccordion(coffeeAccordion === 0 ? null : 0)}
              >
                <p className="mb-4"><strong>Timeline:</strong> 2-6 weeks</p>
                <p className="mb-4">In-depth consultation on requirements (property type, location, size, budget, intended use). Property sourcing through vetted agents, online listings, personal networks, and off-market opportunities.</p>
                <p className="mb-4"><strong>Deliverable:</strong> Property shortlist (5-10 properties) with photos, asking price, basic title details, location assessment, and our preliminary recommendation. Site visit coordination included.</p>
                <p className="text-sm text-emerald-700 font-semibold">✓ $5,000 retainer is fully refundable if no suitable property is identified within 90 days.</p>
              </AccordionItem>

              <AccordionItem
                title="STAGE 2: Comprehensive Due Diligence"
                isOpen={coffeeAccordion === 1}
                onToggle={() => setCoffeeAccordion(coffeeAccordion === 1 ? null : 1)}
              >
                <p className="mb-4"><strong>Timeline:</strong> 3-6 weeks per property | <strong>Included in transaction fee</strong></p>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">TITLE VERIFICATION (Legal Partner):</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Title authenticity verification with Ministry of Lands</li>
                      <li>Current ownership confirmation</li>
                      <li>Encumbrance search (mortgages, caveats, court orders)</li>
                      <li>Ownership history review (minimum 12 years back)</li>
                      <li>Legal opinion on title validity</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">PHYSICAL VERIFICATION (Licensed Surveyor):</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Boundary verification against title description</li>
                      <li>Encroachment identification</li>
                      <li>GPS coordinates and site mapping</li>
                      <li>Physical condition report</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">REGULATORY COMPLIANCE:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Zoning verification (KCCA or district land board)</li>
                      <li>Approved land use confirmation</li>
                      <li>Environmental restrictions check (NEMA)</li>
                      <li>Development potential assessment</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4"><strong>Deliverable:</strong> Comprehensive due diligence report with legal title assessment, survey report, regulatory compliance summary, risk rating (LOW/MEDIUM/HIGH), and clear recommendation: PROCEED / NEGOTIATE / WALK AWAY.</p>
              </AccordionItem>

              <AccordionItem
                title="STAGE 3: Negotiation & Transaction Management"
                isOpen={coffeeAccordion === 2}
                onToggle={() => setCoffeeAccordion(coffeeAccordion === 2 ? null : 2)}
              >
                <p className="mb-4"><strong>Timeline:</strong> 4-12 weeks | <strong>Included in transaction fee</strong></p>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">PRICE NEGOTIATION:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Market data presentation for fair pricing</li>
                      <li>Negotiation strategy development</li>
                      <li>Direct negotiation with seller/agent on your behalf</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">PURCHASE AGREEMENT:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Partner law firm drafts Sale Agreement</li>
                      <li>Seller warranties on clear ownership</li>
                      <li>Payment milestones with escrow protection</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">TITLE TRANSFER PROCESS:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Transfer documents preparation</li>
                      <li>Stamp duty payment coordination (4% of property value)</li>
                      <li>Submission to Commissioner of Land Registration</li>
                      <li>Processing follow-up (2-6 months tracking)</li>
                      <li>New title certificate collection and handover</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4"><strong>Deliverable:</strong> Fully executed Sale Agreement, escrow confirmations, stamp duty receipt, new title certificate in your name, and post-acquisition advisory.</p>
              </AccordionItem>

              <AccordionItem
                title="STAGE 4: Post-Acquisition Support (Optional - Separate Fees)"
                isOpen={coffeeAccordion === 3}
                onToggle={() => setCoffeeAccordion(coffeeAccordion === 3 ? null : 3)}
              >
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">Development Permits: $3,000-5,000</p>
                    <p className="text-gray-700">Building plan approval, NEMA environmental assessment, utility connections.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Construction Coordination: $5,000-10,000 or monthly retainer</p>
                    <p className="text-gray-700">Contractor vetting, project coordination, quality assurance, payment verification.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Property Management Setup: $2,000-5,000</p>
                    <p className="text-gray-700">Property manager identification, rental agreements, tenant placement.</p>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Makes Our Real Estate Service Different</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional Brokers */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Traditional Brokers</h4>
                <div className="space-y-3">
                  {[
                    "Commission-driven (earn more if you overpay)",
                    "Minimal due diligence (surface checks only)",
                    "Represent both buyer and seller (dual agency conflict)",
                    "Disappear after closing",
                    "No legal backing"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-red-600 text-xl">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Approach */}
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h4>
                <div className="space-y-3">
                  {[
                    "Fixed percentage + minimum (aligned interests)",
                    "Institutional-grade due diligence (law firm + surveyor)",
                    "Work exclusively for you (never dual agency)",
                    "Post-acquisition support available",
                    "Licensed law firm conducts all legal work"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Client Protection & Disclosures */}
          <div className="mb-16">
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-gray-900">Important Disclosures</h3>
              </div>
              
              <div className="space-y-4 text-gray-800">
                <div>
                  <p className="font-semibold mb-1">1. Commission Structure:</p>
                  <p className="text-sm">We earn 2.5-3.5% of the final purchase price. To mitigate potential conflicts, we commit to providing honest risk assessments, recommending you walk away from unsuitable properties, disclosing any relationships with sellers or brokers, and never representing both buyer and seller.</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">2. Limitations:</p>
                  <p className="text-sm">While we conduct thorough due diligence through licensed lawyers and surveyors, we cannot guarantee absence of future boundary disputes, undiscoverable title defects, changes in zoning regulations, or property value appreciation.</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">3. Independent Legal Review:</p>
                  <p className="text-sm">We strongly recommend you engage your own independent lawyer to review all transaction documents, in addition to our coordinating law firm.</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">4. Insurance:</p>
                  <p className="text-sm">We maintain professional indemnity insurance covering errors and omissions in our advisory services.</p>
                </div>

                <p className="text-xs text-gray-600 mt-4 italic">Client acknowledges these disclosures and agrees that Axle Africa Advisory's liability is limited to gross negligence or willful misconduct.</p>
              </div>
            </div>
          </div>

          {/* What We Don't Do */}
          <div className="mb-16">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What We Don't Do</h3>
              <div className="space-y-2">
                {[
                  "We don't buy, sell, or develop property ourselves",
                  "We don't guarantee property is dispute-free (we assess current risk)",
                  "We don't guarantee property value appreciation",
                  "We don't provide property management (we coordinate setup only)",
                  "We don't inflate prices for higher commission (reputation is paramount)"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-700 font-semibold">Our reputation depends on your satisfaction. We've walked clients away from 30%+ of properties we assess due to unacceptable risks—even though it costs us the commission.</p>
            </div>
          </div>

          {/* Typical Timeline */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Typical Timeline</h3>
            <div className="space-y-2 text-gray-700">
              <p>• Property search: <strong>2-6 weeks</strong></p>
              <p>• Due diligence: <strong>3-6 weeks per property</strong></p>
              <p>• Negotiation & agreement: <strong>2-4 weeks</strong></p>
              <p>• Title transfer: <strong>2-6 months</strong> (government processing time)</p>
              <p className="text-lg font-bold mt-4">TOTAL: <span className="text-blue-600">4-10 months typical</span></p>
              <p className="text-sm text-gray-600 italic">Note: Uganda's land registry processing is slow but we track weekly and push for timely completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Tenders Service */}
      <section id="tenders" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-xl">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Government Tender Navigation
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Expert guidance through Uganda's PPDA system, from registration to contract management, 
                  ensuring your bids are compliant and professionally prepared.
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1315"
                alt="Government tenders"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <span className="font-semibold">PPDA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    <span className="font-semibold">Full Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">Expert Guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What We Do */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h3>
            <div className="space-y-3">
              {[
                {
                  title: "Company Registration & PPDA Portal Setup",
                  content: "We assist with company registration in Uganda (if needed) and guide you through the PPDA portal registration process. This includes obtaining all necessary documentation, setting up your portal account, and ensuring you meet all pre-qualification requirements."
                },
                {
                  title: "Tender Identification & Pre-qualification",
                  content: "We help identify relevant tenders that match your capabilities and guide you through the pre-qualification process. We assess your eligibility, review requirements, and advise on whether to proceed with specific tenders."
                },
                {
                  title: "Bid Preparation Support",
                  content: "Comprehensive support for bid preparation, including documentation review, compliance checks, and guidance on meeting all technical and financial requirements. We ensure your bid is complete, compliant, and submitted on time."
                },
                {
                  title: "Contract Implementation Support",
                  content: "Ongoing support after tender award, including ramp-up planning, compliance monitoring, and guidance on meeting contract deliverables and reporting requirements."
                }
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  isOpen={tenderAccordion === index}
                  onToggle={() => setTenderAccordion(tenderAccordion === index ? null : index)}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="h-7 w-7 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">What You Receive</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "PPDA portal registration and setup",
                "Tender identification and eligibility assessment",
                "Bid preparation support and documentation review",
                "Submission coordination",
                "Contract implementation support (if awarded)"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-5 bg-white border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contract Implementation & Delivery */}
      <section id="contracts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl">
                <ClipboardCheck className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Contract Implementation & Delivery
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We lead every aspect of delivery after award—mobilizing teams, coordinating documentation, aligning stakeholders, and protecting cash flow so projects finish on schedule.
                </p>
              </div>
            </div>

            {/* Overview Callout */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-blue-900 font-semibold mb-1">Why Implementation & Delivery Matters</p>
                  <p className="text-blue-800 text-sm">
                    Winning a tender or closing a deal is just the beginning. Without disciplined implementation, 
                    you risk missed deadlines, withheld payments, compliance penalties, and contract termination. 
                    We keep every stream synchronized from day one through close-out.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What We Do */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h3>
            <div className="space-y-3">
              {[
                {
                  title: "Delivery Control Room",
                  content: "We build and run execution calendars, synchronize site progress with schedules, flag slippage early, and chair coordination meetings so every delivery team stays aligned."
                },
                {
                  title: "Commercial & Payment Governance",
                  content: "We prepare compliant invoices, chase approvals, manage variation orders, reconcile retention, and maintain lender-ready financial packs that prove delivery progress."
                },
                {
                  title: "Compliance & Documentation",
                  content: "We maintain an audit-ready data room with drawings, correspondence, inspection reports, insurance, and certifications so you stay compliant with contract and regulatory requirements."
                },
                {
                  title: "Stakeholder Communication & Reporting",
                  content: "We serve as the single point of contact for clients, subcontractors, and financiers—issuing weekly dashboards, convening review sessions, and logging all formal communications."
                },
                {
                  title: "Issue & Claim Management",
                  content: "We track risks and potential claims in real time, document resolutions, and coordinate with legal advisers so disputes are prevented—or resolved fast when escalation is unavoidable."
                },
                {
                  title: "Close-Out & Knowledge Transfer",
                  content: "We coordinate punch-lists, acceptance testing, warranty packages, and lessons-learned reviews, then hand over a full project archive for future audits or renewals."
                }
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  isOpen={tenderAccordion === index + 10}
                  onToggle={() => setTenderAccordion(tenderAccordion === index + 10 ? null : index + 10)}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </div>
          </div>

          {/* What We Don't Do */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What We Don't Do</h3>
            <div className="space-y-2">
              {[
                "We don't execute the actual contract work (construction, supply, etc.)",
                "We don't provide legal representation (we coordinate with your lawyers)",
                "We don't guarantee contract renewals or extensions",
                "We don't make binding decisions without your approval"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-700 font-semibold">
              We run the implementation office—your technical teams still execute the works while we keep governance tight.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Protection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Real Cost of Getting Compliance Wrong
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              One compliance mistake can derail your entire investment. Here's what happens when you try to navigate Uganda's regulations alone:
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              <strong className="text-gray-900">Our services cost $2,500-$3,000.</strong> The cost of non-compliance? 
              Fines up to $50,000+, months of delays, lost opportunities, and damaged business relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <AlertCircle className="h-8 w-8" />,
                title: "Regulatory Penalties",
                description: "Fines up to $50,000+ and potential license revocation for non-compliant transactions",
                color: "red"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Transaction Delays",
                description: "Months of delays and lost opportunities due to incomplete documentation",
                color: "yellow"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Reputation Risk",
                description: "Damage to business relationships and future investment opportunities",
                color: "orange"
              }
            ].map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 ${
                  risk.color === 'red' ? 'bg-red-50 border-red-200' :
                  risk.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-orange-50 border-orange-200'
                } border-2 rounded-2xl hover:shadow-lg transition-shadow`}
              >
                <div className={`w-14 h-14 rounded-xl ${
                  risk.color === 'red' ? 'bg-red-100' :
                  risk.color === 'yellow' ? 'bg-yellow-100' :
                  'bg-orange-100'
                } flex items-center justify-center mb-4`}>
                  <div className={
                    risk.color === 'red' ? 'text-red-600' :
                    risk.color === 'yellow' ? 'text-yellow-600' :
                    'text-orange-600'
                  }>
                    {risk.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{risk.title}</h3>
                <p className="text-gray-700">{risk.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Guarantee</h3>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  We guarantee that all work performed meets or exceeds Uganda's regulatory requirements. 
                  If we miss a compliance requirement that results in a penalty or delay, we'll work to 
                  resolve it at no additional cost to you.
                </p>
                <p className="text-sm text-gray-600">
                  *Subject to terms and conditions outlined in our engagement agreement
                </p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to frequently asked questions about our services
            </p>
          </motion.div>

          <div className="space-y-3">
            {[
              {
                title: "Do you guarantee tender wins?",
                content: "No, we do not guarantee tender wins. Tender awards are made by government entities based on multiple factors including technical capability, pricing, and compliance. We ensure your bid is properly prepared, compliant, and submitted correctly, but we cannot guarantee the outcome of the evaluation process. Our role is to maximize your chances by ensuring full compliance and proper presentation."
              },
              {
                title: "Can you guarantee gold supply?",
                content: "No, we do not guarantee gold supply. We are a compliance and facilitation firm, not a supplier or broker. We verify that suppliers have valid DGSM licenses and meet regulatory requirements. We facilitate connections between buyers and verified sellers, but we do not guarantee supply availability, quantities, or prices. Our role is to ensure regulatory compliance and facilitate compliant transactions."
              },
              {
                title: "What are your payment terms?",
                content: "Our standard payment terms are 50% upfront upon engagement and 50% upon completion of services. For longer-term projects, we may agree to milestone-based payments. All payment terms are clearly outlined in our engagement agreement. We accept bank transfers and require payment in USD or UGX."
              },
              {
                title: "Do you work with local companies?",
                content: "Yes, we work with local companies, but we specialize in serving foreign investors who need assistance navigating Uganda's regulatory landscape. Local companies that work with foreign partners or need specialized compliance support are welcome. We have extensive experience with cross-border transactions and international compliance standards."
              }
            ].map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                isOpen={faqAccordion === index}
                onToggle={() => setFaqAccordion(faqAccordion === index ? null : index)}
              >
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-5"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Contact us today to discuss your specific needs and receive a detailed quote 
              tailored to your investment requirements
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <button className="group px-10 py-5 bg-white text-slate-900 hover:bg-gray-100 rounded-lg font-bold text-lg transition-all hover:shadow-2xl flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/#case-studies">
                <button className="px-10 py-5 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 rounded-lg font-bold text-lg transition-all">
                  View Case Studies
                </button>
              </Link>
            </div>
            
            <div className="pt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>Free Initial Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>Custom Quote in 24hrs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}