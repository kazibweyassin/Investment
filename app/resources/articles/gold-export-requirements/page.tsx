"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, AlertTriangle, Globe, FileText, TrendingUp, DollarSign } from "lucide-react"

export default function GoldExportRequirementsPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/20 border border-amber-400/30 rounded-full mb-6">
              <Globe className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-300">Export Compliance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Understanding Uganda's Gold Export Requirements
            </h1>
            <p className="text-xl text-gray-300">
              A complete guide to the legal, regulatory, and documentation requirements for exporting gold from Uganda
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>Published: November 5, 2025</span>
              <span>•</span>
              <span>10 min read</span>
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
                Uganda exported over <strong>$1.2 billion in gold in 2024</strong>, making it one of Africa's fastest-growing 
                gold exporters. However, strict regulatory requirements mean only compliant exporters can legally ship gold 
                out of the country. This guide walks you through every requirement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-amber-50 p-4 rounded-xl text-center border border-amber-200">
                  <TrendingUp className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-amber-900">$1.2B</div>
                  <div className="text-sm text-amber-700">Uganda Gold Exports (2024)</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-center border border-blue-200">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">8-12 Docs</div>
                  <div className="text-sm text-blue-700">Required per Shipment</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center border border-green-200">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-900">7-14 Days</div>
                  <div className="text-sm text-green-700">Export Approval Timeline</div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-2">Legal Warning</h3>
                    <p className="text-red-800 mb-0">
                      Exporting gold without proper licenses and documentation is <strong>illegal</strong> under the 
                      Mining Act 2003 and can result in asset seizure, criminal prosecution, and imprisonment. Always 
                      ensure full compliance before shipping.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1: Company Requirements */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-600 text-white text-xl font-bold">1</span>
                Company Registration Requirements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Before applying for export permits, your company must be properly registered and licensed:
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    DGSM Gold Dealer License
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Issued by the Directorate of Geological Survey and Mines (DGSM). This is the primary license 
                    authorizing you to buy, sell, and export gold.
                  </p>
                  <div className="bg-white p-4 rounded border border-gray-200 text-sm space-y-2">
                    <div><strong>Cost:</strong> UGX 2,000,000 - 5,000,000 (depending on volume)</div>
                    <div><strong>Validity:</strong> 1 year (renewable annually)</div>
                    <div><strong>Processing Time:</strong> 14-21 days</div>
                    <div><strong>Contact:</strong> DGSM, Plot 21-29 Johnstone Street, Entebbe</div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    URSB Company Registration
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Valid Certificate of Incorporation from Uganda Registration Services Bureau. Company must be 
                    registered specifically for minerals trading.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Tax Compliance
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Valid TIN, tax clearance certificate, and VAT registration (mandatory for exporters).
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Pre-Export Documentation */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-600 text-white text-xl font-bold">2</span>
                Pre-Export Documentation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For each gold shipment, you must obtain these documents <strong>before</strong> attempting to export:
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    Certificate of Origin
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Certifies the gold was legally sourced in Uganda. Issued by DGSM after inspection.
                  </p>
                  <div className="bg-white p-3 rounded text-sm">
                    <strong>Required Information:</strong> Source mine/dealer, quantity, purity (karat), batch ID
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    Assay Certificate
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Laboratory analysis confirming gold purity, weight, and quality. Must be from a DGSM-approved lab.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 p-3 rounded text-sm">
                    <strong>Approved Labs:</strong> Government Analytical Laboratory (Entebbe), SGS Uganda, Intertek Uganda
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    Export Permit
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Issued by the Directorate of Mines. This is the official authorization to export.
                  </p>
                  <div className="bg-white p-4 rounded border border-gray-200 text-sm space-y-2">
                    <div><strong>Application Fee:</strong> UGX 500,000 - 1,500,000 (depending on value)</div>
                    <div><strong>Processing Time:</strong> 7-10 working days</div>
                    <div><strong>Validity:</strong> 30 days from issue date</div>
                    <div><strong>Required:</strong> Proof of sale contract with foreign buyer</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    Anti-Money Laundering (AML) Declaration
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Sworn affidavit confirming the gold is not proceeds of crime and complies with Financial Intelligence 
                    Authority (FIA) regulations.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Customs & Shipping */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-600 text-white text-xl font-bold">3</span>
                Customs Clearance & Shipping Documents
              </h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Customs Declaration Form
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Filed at Uganda Revenue Authority (URA) customs office at Entebbe International Airport or land border.
                  </p>
                  <div className="bg-white p-3 rounded text-sm">
                    <strong>Must Include:</strong> HS Code (7108), declared value (FOB), destination country, transport method
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Export Tax & Royalty Payment Receipt
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Uganda charges a 5% export royalty on gold value. Payment receipt is required for clearance.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded text-sm text-blue-900">
                    <strong>Example:</strong> For $100,000 gold shipment, royalty = $5,000 (paid to URA)
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Airway Bill / Bill of Lading
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Shipping document from courier (e.g., DHL, Brink's, air cargo). Gold must be shipped via approved 
                    secure transport.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Insurance Certificate
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Comprehensive insurance covering loss, theft, or damage during transit (required by most buyers).
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Bank Requirements */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-600 text-white text-xl font-bold">4</span>
                Banking & Payment Documentation
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Uganda's foreign exchange regulations require proper banking channels:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-purple-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    Export Contract/Invoice
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Signed sales contract with foreign buyer showing price, terms (FOB/CIF), payment method, delivery date.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-purple-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    Bank of Uganda (BOU) Export Declaration
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    All export proceeds must be repatriated through a licensed Ugandan bank within 90 days.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-3 rounded text-sm text-red-800">
                    ⚠️ Failure to repatriate earnings is a violation of foreign exchange laws and can result in license revocation
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-purple-600">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    Swift Payment Confirmation
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Bank statement showing receipt of export proceeds in USD/EUR to your Ugandan bank account.
                  </p>
                </div>
              </div>
            </div>

            {/* Export Process Timeline */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Typical Export Timeline</h2>
              
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <div className="font-bold text-slate-900">Day 1-3: Source Gold & Obtain Assay</div>
                    <div className="text-sm text-gray-700">Purchase gold from licensed dealer, send to approved lab for assay</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <div className="font-bold text-slate-900">Day 4-6: Apply for Export Permit</div>
                    <div className="text-sm text-gray-700">Submit application to DGSM with assay, contract, and supporting docs</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <div className="font-bold text-slate-900">Day 7-10: DGSM Inspection & Permit Issuance</div>
                    <div className="text-sm text-gray-700">DGSM inspects gold, verifies documentation, issues export permit</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <div className="font-bold text-slate-900">Day 11-12: Pay Export Royalty & Customs Clearance</div>
                    <div className="text-sm text-gray-700">Pay 5% royalty to URA, file customs declaration at airport/border</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <div className="font-bold text-slate-900">Day 13-14: Secure Transport & Export</div>
                    <div className="text-sm text-gray-700">Arrange insured courier, ship gold to buyer's refinery/vault</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Compliance Mistakes</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                  <h4 className="font-bold text-red-900 mb-2">❌ Using Unlicensed Dealers</h4>
                  <p className="text-red-800 text-sm">
                    Gold sourced from non-DGSM-licensed dealers cannot be legally exported and will be confiscated at customs.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                  <h4 className="font-bold text-red-900 mb-2">❌ Expired Export Permits</h4>
                  <p className="text-red-800 text-sm">
                    Permits are valid for only 30 days. If shipment is delayed, you must reapply and pay fees again.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                  <h4 className="font-bold text-red-900 mb-2">❌ Undervaluing Shipments</h4>
                  <p className="text-red-800 text-sm">
                    Declaring lower values to reduce royalties is illegal and triggers audits. Always use current market prices.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                  <h4 className="font-bold text-red-900 mb-2">❌ Missing Repatriation Deadlines</h4>
                  <p className="text-red-800 text-sm">
                    Export earnings must return to Uganda within 90 days. Late repatriation can result in fines and license suspension.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Export Compliance Support?</h2>
              <p className="text-gray-700 mb-6">
                Uganda Investment Bridge provides end-to-end gold export services, including license procurement, 
                documentation, customs clearance, and compliance monitoring. We've facilitated over $250M in legal gold exports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-all text-center"
                >
                  Request Export Assistance
                </Link>
                <Link 
                  href="/services"
                  className="px-6 py-3 bg-white hover:bg-gray-50 text-slate-900 border-2 border-gray-300 rounded-lg font-semibold transition-all text-center"
                >
                  View Gold Services
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
