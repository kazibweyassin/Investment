"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MapPin,
  Shield,
  Users,
  DollarSign,
  ArrowRight,
  ChevronRight,
} from "lucide-react"

const HIGHLIGHTS = [
  { label: "50+ Verified Listings", detail: "Commercial, industrial, and agricultural" },
  { label: "Full Due Diligence", detail: "Legal, survey, and regulatory checks" },
  { label: "End-to-End Execution", detail: "From sourcing to registered title" },
]

const PROCESS_STEPS = [
  {
    title: "Discovery & Mandate",
    description: "Define investment thesis, site criteria, budget, and timelines. Sign exclusive facilitation mandate.",
    duration: "Week 1",
  },
  {
    title: "Sourcing & Shortlisting",
    description: "Leverage our vetted network to identify on-market and off-market properties. Deliver a scored shortlist with drone imagery, location insights, and pricing guidance.",
    duration: "Weeks 2-4",
  },
  {
    title: "Comprehensive Due Diligence",
    description: "Coordinate licensed surveyors, land lawyers, and environmental specialists for title verification, boundary surveys, encumbrance searches, zoning checks, and feasibility analysis.",
    duration: "Weeks 4-8",
  },
  {
    title: "Negotiation & Transaction",
    description: "Lead price negotiations, structure payment milestones, draft agreements, manage escrow, and prepare transfer instruments.",
    duration: "Weeks 8-12",
  },
  {
    title: "Title Transfer & Handover",
    description: "Lodge documentation with the Ministry of Lands, track approvals, deliver registered title and closing report.",
    duration: "Weeks 12-20",
  },
]

const DELIVERABLES = [
  "Property shortlist and scoring matrix",
  "Comprehensive due diligence dossier (legal + survey + zoning)",
  "Risk assessment with proceed/renegotiate/exit guidance",
  "Negotiation strategy and commercial model",
  "Executed sale agreement and escrow instructions",
  "Title transfer tracking dashboard plus final closing binder",
]

const FAQS = [
  {
    question: "Do I need a local entity to purchase property?",
    answer:
      "Foreigners can own property in Uganda through a locally registered company or long-term lease. We coordinate with corporate secretaries and lawyers to set up compliant holding structures when required.",
  },
  {
    question: "How do you verify titles?",
    answer:
      "We partner with top-tier land law firms who run encumbrance searches, ownership history reviews, and authenticity checks at the Ministry of Lands. Licensed surveyors validate boundaries and produce geo-referenced surveys.",
  },
  {
    question: "Can you help with development approvals?",
    answer:
      "Yes. Our team coordinates planning permissions, environmental assessments, and utility connections through KCCA and respective district land boards.",
  },
  {
    question: "What is the fee structure?",
    answer:
      "An initial sourcing retainer (fully creditable) plus a success fee tied to transaction value. Government fees—stamp duty, registration, survey—are passed through at cost.",
  },
]

const CASE_STUDY = {
  title: "Industrial Land Acquisition - Kampala Logistics Hub",
  client: "East African Logistics Consortium",
  challenge:
    "Client needed 20 acres within 15km of Kampala with clear title, road access, and power connectivity for a regional distribution center.",
  solution:
    "Identified six viable parcels, conducted full legal/survey due diligence, negotiated a 12% discount, structured escrow, and coordinated title transfer within 14 weeks.",
  results: [
    "Registered title delivered with zero encumbrances",
    "Utility connection letters secured pre-closing",
    "$3.8M transaction completed below budget",
    "Client engaged us for ongoing construction contract administration",
  ],
}

export default function RealEstateServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/const.webp"
            alt="Uganda skyline"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Real Estate Acquisition</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/50 bg-emerald-600/20 px-4 py-2 text-xs uppercase tracking-wide text-emerald-100">
              <Building2 className="h-4 w-4 text-emerald-200" />
              Land & Property Execution
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Institutional-Grade Real Estate Acquisition in Uganda
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-200">
              We source, verify, negotiate, and register commercial, industrial, and agricultural properties on behalf of
              foreign investors. Our multidisciplinary team manages every stakeholder—lawyers, surveyors, government
              agencies, and sellers—while you receive a turnkey closing experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-600"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/opportunities"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                View Current Opportunities
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-emerald-100">{item.label}</p>
                  <p className="text-xs text-gray-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">How we work</p>
              <h2 className="text-3xl font-bold text-slate-900">End-to-End Execution Managed by One Team</h2>
            </div>
            <p className="max-w-2xl text-sm text-gray-600">
              Unlike brokers who simply introduce sellers, we act as your execution partner—aligning legal, technical,
              and commercial workstreams until you receive a registered title.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase text-gray-400">{step.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-center gap-3">
            <ClipboardCheck className="h-6 w-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">What You Receive</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {DELIVERABLES.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
            <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">{CASE_STUDY.title}</h2>
              <p className="text-sm text-gray-500">Client: {CASE_STUDY.client}</p>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Challenge</h3>
                  <p className="text-sm text-gray-600">{CASE_STUDY.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Solution</h3>
                  <p className="text-sm text-gray-600">{CASE_STUDY.solution}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Results</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    {CASE_STUDY.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900">Why Investors Choose Us</h3>
              <div className="mt-5 space-y-4 text-sm text-gray-700">
                <div className="flex gap-3">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <p>Independent facilitation with zero seller commissions or conflicts of interest.</p>
                </div>
                <div className="flex gap-3">
                  <FileText className="h-5 w-5 text-emerald-600" />
                  <p>Legal, survey, and regulatory partners embedded in every engagement.</p>
                </div>
                <div className="flex gap-3">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <p>Single point of accountability managing sellers, lawyers, and authorities.</p>
                </div>
                <div className="flex gap-3">
                  <DollarSign className="h-5 w-5 text-emerald-600" />
                  <p>Transparent fee model with milestone-based payments and escrow protection.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
                >
                  Speak to the team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">FAQs</p>
            <h2 className="mt-2 text-3xl font-bold">Answers for Serious Investors</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-base font-semibold text-white">{faq.question}</p>
                <p className="mt-2 text-sm text-gray-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

