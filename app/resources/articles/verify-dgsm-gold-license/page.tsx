"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, AlertTriangle, ExternalLink, Shield, FileText } from "lucide-react"

export default function VerifyDGSMLicensePage() {
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
              <Shield className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-300">Gold Sector Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How to Verify a DGSM Gold Dealer License
            </h1>
            <p className="text-xl text-gray-300">
              A comprehensive guide to verifying Directorate of Geological Survey and Mines licenses for gold dealers in Uganda
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>Published: November 10, 2025</span>
              <span>•</span>
              <span>8 min read</span>
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
                Uganda's gold sector is booming, but with opportunity comes risk. Before engaging with any gold dealer 
                in Uganda, verifying their DGSM (Directorate of Geological Survey and Mines) license is critical to 
                ensure you're dealing with legitimate, compliant operators.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">Why This Matters</h3>
                    <p className="text-amber-800 mb-0">
                      Operating with unlicensed dealers can result in confiscated gold, legal liability, and financial losses. 
                      DGSM licenses ensure dealers meet regulatory standards for quality, export, and anti-money laundering compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">1</span>
                Request the License Number
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every legitimate gold dealer in Uganda must have a DGSM license number. This is typically a format like: 
                <strong> DGSM/GD/2024/001</strong>
              </p>
              <div className="bg-slate-50 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-slate-900 mb-3">What to Ask For:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Full DGSM license number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Issue date and expiry date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Copy of physical license certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Business registration number (URSB)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">2</span>
                Visit the DGSM Office
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most reliable verification method is visiting the DGSM office in person or calling their licensing department.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-blue-900 mb-3">DGSM Contact Information:</h4>
                <div className="space-y-2 text-blue-800">
                  <p><strong>Address:</strong> Plot 21-29 Johnstone Street, Entebbe, Uganda</p>
                  <p><strong>Phone:</strong> +256 (0) 417 320 530</p>
                  <p><strong>Email:</strong> dgsm@energyandminerals.go.ug</p>
                  <p><strong>Office Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                When you visit or call, provide the license number and request confirmation of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                <li>License validity and current status</li>
                <li>Registered business name and owner</li>
                <li>Authorized trading volumes and export permissions</li>
                <li>Any compliance violations or suspensions</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">3</span>
                Check the Physical License Certificate
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A genuine DGSM license certificate has specific security features:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Genuine Features
                  </h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Government of Uganda seal/stamp</li>
                    <li>• DGSM Director's signature</li>
                    <li>• Embossed or watermarked paper</li>
                    <li>• Holographic security strip</li>
                    <li>• Clear issue and expiry dates</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Red Flags
                  </h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Poor print quality or faded text</li>
                    <li>• Missing security features</li>
                    <li>• Expired dates</li>
                    <li>• Photocopies only (no original)</li>
                    <li>• Spelling errors or wrong letterhead</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">4</span>
                Verify Business Registration
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cross-reference with Uganda Registration Services Bureau (URSB) to confirm the business entity exists and is in good standing.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-3">Online URSB Verification:</h4>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>Visit: <a href="https://ursb.go.ug" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">ursb.go.ug <ExternalLink className="h-4 w-4" /></a></li>
                  <li>Navigate to "Business Name Search"</li>
                  <li>Enter the company name or registration number</li>
                  <li>Verify registration status and directors</li>
                  <li>Check for any business name similarity to avoid fraud</li>
                </ol>
              </div>
            </div>

            {/* Step 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl font-bold">5</span>
                Request References and Track Record
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Legitimate dealers should have:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Export History:</strong>
                    <span className="text-gray-700"> Ask for past export certificates showing successful transactions</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Bank References:</strong>
                    <span className="text-gray-700"> Reputable dealers work with major Ugandan banks</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Client References:</strong>
                    <span className="text-gray-700"> Contact previous buyers to verify successful deals</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Physical Premises:</strong>
                    <span className="text-gray-700"> Visit their office/warehouse to verify operations</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Common Scams */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Scams to Avoid</h2>
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                  <h4 className="font-bold text-red-900 mb-2">🚨 Fake License Certificates</h4>
                  <p className="text-red-800 text-sm">
                    Scammers create convincing forgeries. Always verify directly with DGSM—never rely solely on documents provided by the dealer.
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                  <h4 className="font-bold text-red-900 mb-2">🚨 "License Pending" Claims</h4>
                  <p className="text-red-800 text-sm">
                    If a dealer says their license is "in process" or "pending renewal," do not proceed. Only deal with currently licensed operators.
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                  <h4 className="font-bold text-red-900 mb-2">🚨 Pressure Tactics</h4>
                  <p className="text-red-800 text-sm">
                    Legitimate dealers won't rush you. If someone pressures you to "act now" before verification, it's likely a scam.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Professional Verification Assistance?</h2>
              <p className="text-gray-700 mb-6">
                Uganda Investment Bridge provides comprehensive due diligence services for gold transactions, 
                including DGSM license verification, supplier background checks, and transaction monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all text-center"
                >
                  Request Verification Service
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
