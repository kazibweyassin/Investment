"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ClipboardCheck,
  CheckCircle2,
  Clock,
  FileText,
  Shield,
  Users,
  ArrowRight,
  ChevronRight,
  Target,
  BarChart3,
} from "lucide-react"

const SERVICE_PILLARS = [
  {
    title: "Milestone & Deliverable Tracking",
    description: "Create execution calendars, monitor dependencies, convene monthly reviews, and escalate blockers before SLAs are breached.",
    icon: Clock,
  },
  {
    title: "Financial & Documentation Control",
    description: "Prepare progress invoices, certify works, manage change orders, and maintain an auditable document vault.",
    icon: FileText,
  },
  {
    title: "Compliance & Stakeholder Management",
    description: "Coordinate inspections, manage correspondence with ministries and financiers, and ensure regulatory filings are up to date.",
    icon: Shield,
  },
]

const DASHBOARD_METRICS = [
  { label: "Active contracts under management", value: "24" },
  { label: "On-time milestone completion", value: "97%" },
  { label: "Approved invoices processed", value: "$28M+" },
  { label: "Contract disputes avoided", value: "18" },
]

const WORKSTREAMS = [
  {
    title: "Contract Mobilization",
    items: [
      "Kick-off workshops & RACI alignment",
      "Baseline schedule and work breakdown structure",
      "Risk register with mitigation owners",
      "Digital contract workspace set-up",
    ],
  },
  {
    title: "Execution Oversight",
    items: [
      "Site supervision coordination",
      "Daily/weekly reporting templates",
      "Variation order governance",
      "Performance bond and insurance tracking",
    ],
  },
  {
    title: "Financial Administration",
    items: [
      "Progress payment certification",
      "Supplier invoice reconciliation",
      "Retention and warranty management",
      "Cash flow forecasting for lenders",
    ],
  },
  {
    title: "Close-Out & Handover",
    items: [
      "Punch-list closure and acceptance testing",
      "Final account agreement",
      "Knowledge transfer and training sessions",
      "Contract archive and lessons-learned report",
    ],
  },
]

const FAQS = [
  {
    question: "Do you replace the project manager or engineer?",
    answer:
      "No. We complement technical teams by handling governance, documentation, financial control, and stakeholder communication so that engineers can focus on delivery.",
  },
  {
    question: "Can you step into an ongoing contract?",
    answer:
      "Yes. We conduct a rapid contract health check, rebuild missing documentation, and stabilize reporting before taking over recurring obligations.",
  },
  {
    question: "How are your services billed?",
    answer:
      "Monthly management fee tied to contract value plus optional success incentives for early completion or recovery of withheld payments.",
  },
  {
    question: "Do you only work on government contracts?",
    answer:
      "We manage public and private sector agreements, including EPC, supply, PPP, and service contracts across infrastructure, energy, and technology.",
  },
]

export default function ContractImplementationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=80"
            alt="Team collaborating"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="mb-6 flex items-center gap-2 text-sm text-gray-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Contract Implementation & Delivery</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-blue-100">
              Operations Control
            </div>

            <h1 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
              Contract Implementation & Delivery for High-Stakes Projects
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-200">
              Diamond Capital Africa acts as your contract command center—monitoring milestones, managing documentation,
              escalating risks, and protecting cash flow from award to close-out. We combine program management discipline
              with regulatory expertise so every stakeholder stays aligned.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                Request Support
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resources/articles/ppda-tender-checklist"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                View Compliance Guides
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-4">
              {DASHBOARD_METRICS.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <p className="text-lg font-bold text-white">{metric.value}</p>
                  <p className="text-xs text-gray-200">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Scope of service</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">The Nerve Center for Your Contracts</h2>
            <p className="mt-3 text-gray-600">
              Our dedicated contract managers coordinate engineers, finance teams, suppliers, and regulators through a single
              governance framework.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICE_PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div key={pillar.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Core Workstreams We Manage</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {WORKSTREAMS.map((stream) => (
              <div key={stream.title} className="rounded-2xl border border-white bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{stream.title}</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
                  {stream.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">Sample Engagement Timeline</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {["Weeks 1-2", "Weeks 3-12", "Weeks 12+ to Close-Out"].map((phase, index) => (
                <div key={phase} className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-blue-600">Phase {index + 1}</p>
                  <p className="text-lg font-bold text-gray-900">{phase}</p>
                  <p className="mt-3 text-sm text-gray-600">
                    {index === 0 && "Mobilization, documentation clean-up, KPI dashboard build, and stakeholder alignment."}
                    {index === 1 && "Recurring governance cadence, field inspections, invoice certifications, and risk mitigation."}
                    {index === 2 && "Retention tracking, claims resolution, knowledge transfer, and final account agreements."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 text-center">
            <Target className="mx-auto h-10 w-10 text-blue-300" />
            <h2 className="mt-4 text-3xl font-bold">Why Diamond Capital Africa</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Embedded contract controllers stationed in Kampala with sector specialists for infrastructure, energy, and technology.",
              "Digital reporting stack delivering live dashboards to sponsors, lenders, and boards.",
              "Structured escalation paths that resolve bottlenecks before they become claims or penalties.",
              "Transparent governance with audit-ready documentation and version control.",
            ].map((value) => (
              <div key={value} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <CheckCircle2 className="h-5 w-5 text-blue-300" />
                <p className="mt-3 text-sm text-gray-100">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-blue-50"
            >
              Schedule a readiness assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">FAQs</p>
            <h2 className="text-3xl font-bold text-gray-900">What Clients Ask Us</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
                <p className="text-base font-semibold text-gray-900">{faq.question}</p>
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

