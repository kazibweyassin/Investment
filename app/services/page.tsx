"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Gem, FileText, DollarSign, Clock, CheckCircle2, AlertCircle, Shield, FileCheck, Users, ArrowRight, Award, Target, Zap, ChevronDown, Coffee } from "lucide-react"
import { useState } from "react"

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
          <img
            src="https://images.unsplash.com/photo-1725811641344-9bca74828fc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="Business services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Two Services. Zero Compliance Mistakes.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4">
              We specialize in gold sector compliance and government tender navigation. 
              This focus means deeper expertise, faster results, and guaranteed compliance.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              <strong className="text-white">100% Compliance Guarantee:</strong> If we miss a requirement that causes a penalty or delay, 
              we fix it at no extra cost to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Gem className="h-8 w-8" />,
                title: "Gold Sector Facilitation",
                description: "Complete compliance verification for gold transactions",
                color: "amber",
                link: "#gold"
              },
              {
                icon: <Coffee className="h-8 w-8" />,
                title: "Coffee Export Facilitation",
                description: "UCDA compliance and export support for coffee traders",
                color: "brown",
                link: "#coffee"
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Government Tender Navigation",
                description: "Expert guidance through PPDA tender processes",
                color: "indigo",
                link: "#tenders"
              }
            ].map((service, index) => (
              <motion.a
                key={index}
                href={service.link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white border-2 border-gray-200 hover:border-blue-500 rounded-2xl p-8 transition-all hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl ${
                    service.color === 'amber' ? 'bg-amber-600' : 
                    service.color === 'brown' ? 'bg-amber-800' : 
                    'bg-indigo-600'
                  } flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
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
                  Gold Sector Facilitation
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ensure complete regulatory compliance for gold transactions with DGSM license verification, 
                  supply chain due diligence, and export documentation management.
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1737815914093-becb6c9ac064?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1315"
                alt="Gold sector compliance and mining operations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

          {/* Pricing & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border-2 border-blue-200 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                  <DollarSign className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Pricing</h4>
                  <p className="text-2xl font-bold text-blue-600 mt-1">From $3,000</p>
                </div>
              </div>
              <p className="text-gray-600">Contact us for a detailed quote based on your specific requirements</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border-2 border-indigo-200 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Timeline</h4>
                  <p className="text-2xl font-bold text-indigo-600 mt-1">2-6 weeks</p>
                </div>
              </div>
              <p className="text-gray-600">Timeline depends on transaction complexity and documentation readiness</p>
            </motion.div>
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

      {/* Coffee Export Facilitation Service */}
      <section id="coffee" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-amber-800 flex items-center justify-center shadow-xl">
                <Coffee className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Coffee Export Facilitation
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Navigate Uganda's coffee export sector with UCDA compliance verification, 
                  farmer partnerships, export licensing, and quality certification support.
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200"
                alt="Coffee export facilitation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 text-white flex-wrap">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <span className="font-semibold">UCDA Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    <span className="font-semibold">Top 10 Global Exporter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    <span className="font-semibold">4-8 Week Timeline</span>
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
                  title: "UCDA Certification & Export License Support",
                  content: "We assist with Uganda Coffee Development Authority (UCDA) certification and export licensing. This includes quality grading verification, warehouse registration, and export permit applications. We ensure compliance with both Ugandan and international coffee standards."
                },
                {
                  title: "Farmer Partnership Facilitation",
                  content: "Connect with established farmer cooperatives and smallholder networks. We verify farming practices, certifications (organic, Fair Trade, Rainforest Alliance), and facilitate long-term supply agreements. Our network includes both Arabica (Mount Elgon, Rwenzori) and Robusta farmers."
                },
                {
                  title: "Quality Assessment & Logistics Coordination",
                  content: "Comprehensive quality control including cupping sessions, moisture content testing, and defect analysis. We coordinate with licensed warehouses, arrange transportation to Mombasa port, and manage export documentation for seamless international shipping."
                },
                {
                  title: "Market Linkages & Buyer Connections",
                  content: "Access our network of international coffee buyers and roasters. We facilitate sample shipments, negotiate contracts, and provide market intelligence on pricing trends. Support for both specialty coffee (Arabica) and commercial grade (Robusta) markets."
                }
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  isOpen={coffeeAccordion === index}
                  onToggle={() => setCoffeeAccordion(coffeeAccordion === index ? null : index)}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </div>
          </div>

          {/* Pricing & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border-2 border-amber-200 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-amber-800 flex items-center justify-center">
                  <DollarSign className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Pricing</h4>
                  <p className="text-2xl font-bold text-amber-800 mt-1">From $2,000</p>
                </div>
              </div>
              <p className="text-gray-600">Package pricing based on volume and certification requirements</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border-2 border-green-200 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Timeline</h4>
                  <p className="text-2xl font-bold text-green-600 mt-1">4-8 weeks</p>
                </div>
              </div>
              <p className="text-gray-600">Timeline varies by harvest season and certification requirements</p>
            </motion.div>
          </div>

          {/* Deliverables */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="h-7 w-7 text-amber-800" />
              <h3 className="text-2xl font-bold text-gray-900">What You Receive</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "UCDA export license assistance",
                "Farmer partnership agreements",
                "Quality grading & certification",
                "Export documentation package",
                "Logistics & shipping coordination",
                "Buyer connection & market access"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-5 bg-white border border-gray-200 rounded-xl hover:border-amber-300 hover:shadow-md transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-amber-800 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
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
              <img
                src="image.jpg"
                alt="Government tenders"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                  title: "Contract Management Support",
                  content: "Ongoing support after tender award, including contract negotiation assistance, compliance monitoring, and guidance on meeting contract deliverables and reporting requirements."
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

          {/* Pricing & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border-2 border-indigo-200 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center">
                  <DollarSign className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Pricing</h4>
                  <p className="text-2xl font-bold text-indigo-600 mt-1">From $2,500</p>
                </div>
              </div>
              <p className="text-gray-600">Custom pricing based on tender complexity and support level required</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white border-2 border-blue-200 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Timeline</h4>
                  <p className="text-2xl font-bold text-blue-600 mt-1">2-8 weeks</p>
                </div>
              </div>
              <p className="text-gray-600">Varies by tender cycle and submission deadlines</p>
            </motion.div>
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
                "Contract management support (if awarded)"
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