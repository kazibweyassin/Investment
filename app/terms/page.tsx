"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/constants"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-widest text-blue-200">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Terms of Service
            </h1>
            <p className="text-gray-300 mt-6 text-lg">
              Last updated: {new Date().toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Scope of Services</h2>
            <p>
              {COMPANY_NAME} provides advisory, facilitation, and compliance coordination services for
              investments in Uganda. Engagements are defined in individual statements of work or
              engagement letters that outline deliverables, timelines, and fees.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. No Investment Advice</h2>
            <p>
              We do not act as brokers, dealers, or financial advisors. All investment decisions remain
              the responsibility of the client. Clients should seek independent legal and financial advice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Confidentiality</h2>
            <p>
              Both parties agree to keep all non-public information confidential. Non-disclosure agreements
              are provided prior to sharing sensitive documentation or proprietary data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Fees & Payment</h2>
            <p>
              Fees may include retainers, project-based payments, or success fees. Payment terms are defined
              in the engagement documentation. Late payments may result in paused services or additional
              charges as specified.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Compliance & Eligibility</h2>
            <p>
              Clients must provide accurate information and certify they are legally permitted to engage in
              the requested transactions. We reserve the right to decline or terminate engagements if compliance,
              anti-money laundering, or ethical risks are identified.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, our liability is limited to the amount paid for the
              specific services giving rise to a claim. We are not responsible for indirect, incidental, or
              consequential losses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of Uganda. Any disputes shall be handled through negotiation
              and, if necessary, arbitration or courts located in Kampala.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Contact</h2>
            <p>
              Questions about these terms may be sent to{" "}
              <Link href={`mailto:${COMPANY_EMAIL}`} className="text-blue-600 font-medium">
                {COMPANY_EMAIL}
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

