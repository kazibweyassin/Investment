"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, XCircle, CheckCircle2, AlertTriangle, FileText, Clock } from "lucide-react"
import { COMPANY_NAME } from "@/lib/constants"

export default function BidDisqualificationPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-400/30 rounded-full mb-6">
              <XCircle className="h-4 w-4 text-red-400" />
              <span className="text-sm font-semibold text-red-300">Tender Mistakes</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Common Reasons Bids Get Disqualified
            </h1>
            <p className="text-xl text-gray-300">
              Learn from the mistakes that cost bidders millions and how to avoid disqualification in Uganda's competitive tender market
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>Published: November 12, 2025</span>
              <span>•</span>
              <span>15 min read</span>
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
                Every year, thousands of tender bids worth billions of shillings are rejected before evaluation even begins. 
                According to PPDA data, <strong>over 70% of bid disqualifications are due to preventable errors</strong> that 
                have nothing to do with technical capability or pricing.
              </p>
              
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-red-900 mb-3">Why This Matters</h3>
                <p className="text-red-800 mb-3">
                  A disqualified bid means:
                </p>
                <ul className="space-y-2 text-red-800 text-sm mb-0">
                  <li>• Wasted bid preparation costs (UGX 5-15 million average)</li>
                  <li>• Lost opportunity cost (contracts worth UGX 100M - 10B+)</li>
                  <li>• Damaged reputation with procurement entities</li>
                  <li>• Forfeited bid security if withdrawal occurs</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This guide covers the top 15 reasons bids are disqualified in Uganda, based on actual PPDA rejection cases 
                from 2024-2025.
              </p>
            </div>

            {/* Top Reasons */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Top 15 Disqualification Reasons</h2>

              {/* Reason 1 */}
              <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-sm">1</div>
                  <h3 className="text-xl font-bold text-red-900 m-0">Late Submission</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  <strong>Frequency:</strong> 25% of disqualifications | <strong>Impact:</strong> Immediate rejection
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  PPDA rules are strict: bids submitted even 1 minute after the deadline are automatically rejected, 
                  regardless of merit. No exceptions are granted.
                </p>
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2">How to Avoid:</h4>
                  <ul className="text-sm text-gray-700 space-y-1 mb-0">
                    <li>✓ Submit at least 2 hours before deadline</li>
                    <li>✓ Account for Kampala traffic (if hand-delivering)</li>
                    <li>✓ Test online portals 24 hours in advance</li>
                    <li>✓ Have backup submission plan (courier, representative)</li>
                  </ul>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-sm">2</div>
                  <h3 className="text-xl font-bold text-red-900 m-0">Missing Tax Clearance Certificate</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  <strong>Frequency:</strong> 22% of disqualifications | <strong>Impact:</strong> Immediate rejection
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  The most common missing document. URA tax clearance must be:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 mb-3">
                  <li>• Issued within the last 3 months</li>
                  <li>• Original or certified copy (not photocopy)</li>
                  <li>• Matching the bidding company's TIN exactly</li>
                  <li>• Showing "No Tax Arrears" status</li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 p-3 rounded text-sm text-amber-900">
                  <strong>⚠️ Warning:</strong> If you have outstanding tax, URA will not issue clearance. Settle arrears 
                  before tender deadlines (can take 10-14 days).
                </div>
              </div>

              {/* Reason 3 */}
              <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-sm">3</div>
                  <h3 className="text-xl font-bold text-red-900 m-0">Invalid or Expired Bid Security</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  <strong>Frequency:</strong> 18% of disqualifications | <strong>Impact:</strong> Immediate rejection
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  Common issues:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 mb-3">
                  <li>• Bid bond expires before bid validity period ends</li>
                  <li>• Amount less than specified percentage (usually 2-5%)</li>
                  <li>• Issued by non-approved bank/insurer</li>
                  <li>• Conditional clauses (must be unconditional)</li>
                  <li>• Wrong beneficiary name</li>
                </ul>
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Requirements Checklist:</h4>
                  <ul className="text-sm text-gray-700 space-y-1 mb-0">
                    <li>✓ From approved Ugandan bank/insurance company</li>
                    <li>✓ Unconditional and payable on demand</li>
                    <li>✓ Valid for bid period + 28 days minimum</li>
                    <li>✓ Exact tender reference number included</li>
                    <li>✓ Original document (not copy)</li>
                  </ul>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-sm">4</div>
                  <h3 className="text-xl font-bold text-red-900 m-0">Unsigned or Improperly Signed Documents</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  <strong>Frequency:</strong> 15% of disqualifications | <strong>Impact:</strong> Immediate rejection
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  Every page requiring signature must be signed by an authorized signatory (as per company registration).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-100 p-3 rounded text-sm">
                    <h5 className="font-bold text-red-900 mb-1">❌ Wrong:</h5>
                    <ul className="text-red-800 space-y-0.5 mb-0 text-xs">
                      <li>• Junior staff signing</li>
                      <li>• Missing initials on amendments</li>
                      <li>• Unsigned forms/declarations</li>
                      <li>• Digital signatures (if not allowed)</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-3 rounded text-sm">
                    <h5 className="font-bold text-green-900 mb-1">✓ Correct:</h5>
                    <ul className="text-green-800 space-y-0.5 mb-0 text-xs">
                      <li>• Director/authorized person signs</li>
                      <li>• All alterations initialed</li>
                      <li>• Company stamp on each page</li>
                      <li>• Date matches or predates deadline</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Reason 5 */}
              <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-sm">5</div>
                  <h3 className="text-xl font-bold text-red-900 m-0">Non-Compliance with Technical Specifications</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  <strong>Frequency:</strong> 12% of disqualifications | <strong>Impact:</strong> Technical disqualification
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  Offering products/services that don't meet minimum specifications stated in the tender.
                </p>
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Common Examples:</h4>
                  <ul className="text-sm text-gray-700 space-y-1 mb-0">
                    <li>• Offering 10-ton truck when tender requires 15-ton minimum</li>
                    <li>• Proposing consultant with 3 years experience when 5+ required</li>
                    <li>• Submitting alternative products without permission</li>
                    <li>• Missing mandatory certifications (ISO, standards compliance)</li>
                  </ul>
                </div>
              </div>

              {/* Reason 6 */}
              <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-sm">6</div>
                  <h3 className="text-xl font-bold text-red-900 m-0">Arithmetic Errors in Pricing</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  <strong>Frequency:</strong> 11% of disqualifications | <strong>Impact:</strong> Price adjustment or rejection
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  Mathematical mistakes in price schedules. While some tenders allow correction, others disqualify immediately.
                </p>
                <div className="bg-amber-50 border border-amber-200 p-3 rounded text-sm text-amber-900 mb-3">
                  <strong>Example:</strong> Unit price = UGX 10,000, Quantity = 100, but Total shows UGX 900,000 (should be 1,000,000)
                </div>
                <p className="text-gray-700 text-sm font-semibold">Prevention: Triple-check all calculations with two people before submission.</p>
              </div>

              {/* Reason 7 */}
              <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-sm">7</div>
                  <h3 className="text-xl font-bold text-red-900 m-0">Missing Financial Capacity Documents</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  <strong>Frequency:</strong> 10% of disqualifications | <strong>Impact:</strong> Financial disqualification
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  Required financial documents:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 mb-3">
                  <li>• Audited accounts (last 2-3 years)</li>
                  <li>• Bank statements (last 6 months)</li>
                  <li>• Credit reference letter from bank</li>
                  <li>• Line of credit or financing proof (for large contracts)</li>
                </ul>
                <div className="bg-red-100 border border-red-300 p-3 rounded text-sm text-red-900">
                  <strong>Red Flag:</strong> If your company's annual turnover is UGX 50M but you're bidding for a UGX 500M 
                  contract, provide proof of financing or risk financial disqualification.
                </div>
              </div>

              {/* Reason 8 */}
              <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-sm">8</div>
                  <h3 className="text-xl font-bold text-red-900 m-0">Submitting Copies Instead of Originals</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  <strong>Frequency:</strong> 9% of disqualifications | <strong>Impact:</strong> Immediate rejection
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  Most tenders specify: "Submit original or certified copies." A certified copy must be stamped by the 
                  issuing authority (not just a notary).
                </p>
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Documents That MUST Be Original/Certified:</h4>
                  <ul className="text-sm text-gray-700 space-y-1 mb-0">
                    <li>• Tax clearance certificate</li>
                    <li>• Bid security/bond</li>
                    <li>• Certificate of incorporation</li>
                    <li>• Professional licenses</li>
                    <li>• Audited financial statements (stamped by auditor)</li>
                  </ul>
                </div>
              </div>

              {/* Reason 9 */}
              <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-sm">9</div>
                  <h3 className="text-xl font-bold text-red-900 m-0">Failure to Attend Mandatory Site Visit</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  <strong>Frequency:</strong> 7% of disqualifications | <strong>Impact:</strong> Automatic rejection
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  For construction/infrastructure tenders, site visits are often mandatory. If you don't attend (or can't 
                  prove attendance), you're disqualified.
                </p>
                <p className="text-gray-700 text-sm font-semibold">
                  Always keep the signed site visit certificate and include it in your bid!
                </p>
              </div>

              {/* Reason 10 */}
              <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-sm">10</div>
                  <h3 className="text-xl font-bold text-red-900 m-0">Collusion or Conflict of Interest</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  <strong>Frequency:</strong> 5% of disqualifications | <strong>Impact:</strong> Blacklisting + legal action
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  PPDA actively screens for:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 mb-3">
                  <li>• Multiple bids from companies with same directors</li>
                  <li>• Bid documents with identical wording/formatting</li>
                  <li>• Directors related to procurement officers</li>
                  <li>• Suspicious pricing patterns (coordinated bids)</li>
                </ul>
                <div className="bg-red-100 border border-red-300 p-3 rounded text-sm text-red-900">
                  <strong>Penalty:</strong> 10-year blacklist from all government tenders + criminal prosecution
                </div>
              </div>

              {/* Reasons 11-15 (Condensed) */}
              <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-300">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Other Common Disqualification Reasons:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-xs">11</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Incomplete Past Performance Records</h4>
                      <p className="text-gray-700 text-xs mb-0">Failing to provide completion certificates for similar past contracts (6% of cases)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-xs">12</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Missing Litigation Declaration</h4>
                      <p className="text-gray-700 text-xs mb-0">Not disclosing ongoing legal cases as required by tender documents (5% of cases)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-xs">13</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Bid Validity Period Too Short</h4>
                      <p className="text-gray-700 text-xs mb-0">Offering shorter bid validity than required (e.g., 60 days when 90 required) (4% of cases)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-xs">14</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Using Wrong Bid Forms</h4>
                      <p className="text-gray-700 text-xs mb-0">Creating custom forms instead of using provided templates exactly as issued (3% of cases)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-600 text-white font-bold flex-shrink-0 text-xs">15</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Improper Bid Sealing/Labeling</h4>
                      <p className="text-gray-700 text-xs mb-0">Envelope not sealed properly or missing required markings/reference numbers (3% of cases)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prevention Checklist */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Disqualification Prevention Checklist</h2>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-green-900 mb-4">48 Hours Before Submission:</h3>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-green-900">All mandatory documents present and valid (not expired)</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-green-900">Tax clearance obtained and dated within 3 months</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-green-900">Bid security secured and valid for required period</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-green-900">All documents signed by authorized signatory</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-green-900">Price calculations verified three times by different people</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-green-900">Technical specs match tender requirements exactly</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-green-900">All required forms filled using original templates (not recreated)</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-green-900">Originals/certified copies (not plain photocopies) for critical documents</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-green-900">Site visit certificate included (if applicable)</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-green-900">Submission plan allows 2+ hour buffer before deadline</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Real Case Study */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Real Case Study: UGX 850M Contract Lost</h2>
              
              <div className="bg-amber-50 border-2 border-amber-300 p-6 rounded-xl">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-xs font-bold mb-3">
                    Actual PPDA Case (2024)
                  </span>
                </div>
                
                <p className="text-gray-700 text-sm mb-3">
                  A Kampala construction firm submitted a technically strong bid for a UGX 850 million road rehabilitation 
                  contract. They were the lowest evaluated bidder and had excellent past performance.
                </p>
                
                <p className="text-gray-700 text-sm mb-3">
                  <strong>The Problem:</strong> Their tax clearance certificate was dated 92 days before submission. 
                  The tender required certificates "not older than 90 days."
                </p>
                
                <p className="text-gray-700 text-sm mb-3">
                  <strong>The Result:</strong> Immediate disqualification. Contract awarded to the second-lowest bidder 
                  (UGX 78 million higher).
                </p>
                
                <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded mt-4">
                  <p className="text-red-900 text-sm font-bold mb-0">
                    Lesson: Date requirements are absolute. Always verify document dates against tender deadlines, 
                    even if valid by 1 day, it could cost millions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Bid Review Services</h2>
              <p className="text-gray-700 mb-6">
                {COMPANY_NAME} offers comprehensive pre-submission bid review to catch disqualification risks 
                before you submit. Our team has helped clients avoid UGX 2.3 billion in potential losses through thorough 
                compliance checks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg text-center border border-blue-200">
                  <div className="text-2xl font-bold text-blue-900">98%</div>
                  <div className="text-sm text-blue-700">Pass Rate on Reviewed Bids</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center border border-blue-200">
                  <div className="text-2xl font-bold text-blue-900">24 Hrs</div>
                  <div className="text-sm text-blue-700">Express Review Turnaround</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center border border-blue-200">
                  <div className="text-2xl font-bold text-blue-900">150+</div>
                  <div className="text-sm text-blue-700">Bids Reviewed in 2024</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all text-center"
                >
                  Request Bid Review
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
