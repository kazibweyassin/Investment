"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, AlertTriangle, FileText, Clock, DollarSign } from "lucide-react"
import { COMPANY_NAME } from "@/lib/constants"

export default function PPDATenderChecklistPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Resources
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full mb-6">
              <FileText className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">Tender Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              PPDA Tender Application: Complete Checklist
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need to submit a winning tender bid to Uganda's Public Procurement and Disposal of Public Assets Authority
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>Published: November 8, 2025</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Uganda's Public Procurement and Disposal of Public Assets Authority (PPDA) oversees over UGX 10 trillion 
                in government contracts annually. However, <strong>70% of tender submissions are rejected due to 
                missing documents or non-compliance</strong>. This checklist ensures your application is complete.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-xl text-center border border-blue-200">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">14-21 Days</div>
                  <div className="text-sm text-blue-700">Typical Bid Preparation Time</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl text-center border border-amber-200">
                  <FileText className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-amber-900">15-25 Docs</div>
                  <div className="text-sm text-amber-700">Average Required Documents</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center border border-green-200">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-900">30%</div>
                  <div className="text-sm text-green-700">Success Rate with Full Docs</div>
                </div>
              </div>
            </div>

            {/* Section 1: Company Registration Documents */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">1</span>
                Company Registration Documents
              </h2>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    Certificate of Incorporation
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Issued by Uganda Registration Services Bureau (URSB). Must be a <strong>certified copy</strong>, not older than 6 months.
                  </p>
                  <div className="bg-white p-3 rounded border border-gray-200 text-sm">
                    <strong>Where to Get:</strong> URSB, Plot 2 Jinja Road, Kampala | ursb.go.ug
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    Business Registration Certificate (Form 20)
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Lists company directors and shareholders. Must include <strong>all amendments/changes of directors</strong>.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    Memorandum and Articles of Association
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Certified copies showing company objectives and structure.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    Trading License
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Valid trading license from Kampala Capital City Authority (KCCA) or relevant district authority.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 p-2 rounded text-xs text-amber-800 mt-2">
                    ⚠️ Must be valid for the current financial year
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Tax Compliance */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">2</span>
                Tax Compliance Documents
              </h2>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">Critical Requirement</h4>
                    <p className="text-red-800 text-sm mb-0">
                      Tax compliance is the #1 reason for tender disqualification. Missing or expired tax documents 
                      result in immediate rejection, regardless of technical merit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-green-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Tax Identification Number (TIN) Certificate
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Issued by Uganda Revenue Authority (URA). Must match company registration details exactly.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-green-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Tax Clearance Certificate
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Valid certificate (not older than 3 months) confirming no outstanding tax arrears.
                  </p>
                  <div className="bg-white p-3 rounded border border-gray-200 text-sm">
                    <strong>Processing Time:</strong> 7-10 working days at URA | <strong>Fee:</strong> Free
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-green-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    VAT Registration Certificate
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Required for contracts over UGX 50 million. Must be registered for VAT before bidding.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Financial Documents */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">3</span>
                Financial Documents
              </h2>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-purple-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    Audited Financial Statements
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Last 2-3 years of audited accounts, certified by a qualified auditor registered with ICPAU 
                    (Institute of Certified Public Accountants of Uganda).
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded text-sm text-blue-900 mt-3">
                    <strong>Must Include:</strong> Balance sheet, profit & loss statement, cash flow statement, auditor's opinion
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-purple-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    Bank Statement
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Last 6 months of bank statements showing adequate cash flow. Must be stamped/certified by bank.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 p-2 rounded text-xs text-amber-800 mt-2">
                    ⚠️ Account balance should demonstrate ability to finance at least 20% of contract value
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-purple-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    Credit Reference Letter
                  </h4>
                  <p className="text-gray-700 text-sm">
                    From your bank, dated within the last 3 months, confirming creditworthiness.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Technical Qualification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">4</span>
                Technical Qualification Documents
              </h2>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-indigo-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                    Company Profile/CV
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Detailed company history, core business, organizational structure, key personnel with CVs.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-indigo-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                    Past Performance Certificates
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Letters of completion/satisfaction from previous clients for similar contracts (last 3-5 years).
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded text-sm text-blue-900 mt-3">
                    <strong>Pro Tip:</strong> Include contracts of similar scope, value, and complexity to the tender you're applying for
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-indigo-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                    Professional Licenses/Certifications
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Industry-specific licenses (e.g., NSSF compliance, NEMA certificate, engineering licenses, etc.).
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-indigo-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                    Equipment List/Inventory
                  </h4>
                  <p className="text-gray-700 text-sm">
                    List of owned/leased equipment relevant to the tender, with proof of ownership or lease agreements.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Bid Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">5</span>
                Bid Security & Guarantees
              </h2>
              
              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-600 mb-4">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-amber-600" />
                  Bid Bond/Security
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Bank guarantee or insurance bond (typically 2-5% of tender value) valid for 90-120 days beyond bid validity period.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <strong className="text-slate-900">Acceptable Forms:</strong>
                    <ul className="mt-1 space-y-1 text-gray-700">
                      <li>• Bank guarantee</li>
                      <li>• Insurance bond</li>
                      <li>• Cash deposit (rare)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <strong className="text-slate-900">Cost Estimate:</strong>
                    <ul className="mt-1 space-y-1 text-gray-700">
                      <li>• 1-2% of bond value</li>
                      <li>• Refundable if not awarded</li>
                      <li>• Non-refundable fee</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <h4 className="font-bold text-red-900 mb-2">⚠️ Bid Security Rules</h4>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Must be from an approved Ugandan bank or insurance company</li>
                  <li>• Must be unconditional and on-demand</li>
                  <li>• Must be in the currency specified in the tender</li>
                  <li>• Late or invalid bid security = automatic disqualification</li>
                </ul>
              </div>
            </div>

            {/* Section 6: Other Documents */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">6</span>
                Additional Required Documents
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="text-slate-900">NSSF Compliance Certificate:</strong>
                    <span className="text-gray-700"> Proof of employee social security contributions (last 6 months)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="text-slate-900">PPDA Certificate:</strong>
                    <span className="text-gray-700"> Provider registration certificate (if applicable to sector)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="text-slate-900">Environmental Impact Assessment:</strong>
                    <span className="text-gray-700"> NEMA certificate (for construction/infrastructure projects)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="text-slate-900">Litigation History Declaration:</strong>
                    <span className="text-gray-700"> Sworn affidavit of ongoing legal cases involving the company</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="text-slate-900">Nationality Declaration:</strong>
                    <span className="text-gray-700"> Proof of company nationality (some tenders prioritize Ugandan firms)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Checklist */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Pre-Submission Final Checklist</h2>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 p-6 rounded-2xl">
                <h4 className="font-bold text-green-900 mb-4 text-lg">Before You Submit:</h4>
                <div className="space-y-2 text-sm">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-green-900">All documents certified/stamped by issuing authority</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-green-900">No document older than validity period specified in tender</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-green-900">All pages numbered and bound as specified</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-green-900">Bid submitted in sealed envelope with label as per tender instructions</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-green-900">Submitted before deadline (late bids are rejected immediately)</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-green-900">Bid security valid for required period</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-green-900">All forms signed by authorized signatory</span>
                  </label>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Help with PPDA Tender Preparation?</h2>
              <p className="text-gray-700 mb-6">
                {COMPANY_NAME} offers full PPDA tender preparation services, including document procurement, 
                compliance verification, and submission support. We've helped clients win over UGX 45 billion in government contracts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all text-center"
                >
                  Request Tender Support
                </Link>
                <Link 
                  href="/services"
                  className="px-6 py-3 bg-white hover:bg-gray-50 text-slate-900 border-2 border-gray-300 rounded-lg font-semibold transition-all text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
