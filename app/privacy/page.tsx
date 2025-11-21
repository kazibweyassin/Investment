"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/constants"

export default function PrivacyPage() {
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
              Privacy Policy
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
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_NAME} collects and processes personal information to deliver our advisory
              and facilitation services. This policy describes what we collect, how we use it, and
              the choices you have regarding your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details such as name, email, phone, and company information</li>
              <li>Investment preferences, opportunity interests, and related requirements</li>
              <li>Communications you send to us via forms, email, or phone</li>
              <li>Basic analytics data that helps improve the performance of our website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Use Information</h2>
            <p className="mb-4">
              We process personal data only for legitimate business purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing consultations, proposals, and compliance roadmaps</li>
              <li>Coordinating due diligence, legal reviews, and partner introductions</li>
              <li>Responding to inquiries and maintaining business relationships</li>
              <li>Improving our services, security, and communications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Sharing</h2>
            <p>
              We may share information with trusted legal, compliance, or technical partners strictly
              for the purpose of executing your project. We do not sell personal information or use
              it for unrelated marketing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Data Retention & Security</h2>
            <p>
              Data is retained only as long as necessary to fulfill the services you request or to
              comply with legal obligations. We implement administrative and technical safeguards to
              protect information from unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="mb-4">
              You may request access, correction, deletion, or restriction of your personal data at
              any time. You can also withdraw consent for future communications.
            </p>
            <p>
              To exercise these rights, email us at{" "}
              <Link href={`mailto:${COMPANY_EMAIL}`} className="text-blue-600 font-medium">
                {COMPANY_EMAIL}
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Contact</h2>
            <p>
              If you have questions about this policy or how we handle your information, contact us at{" "}
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

