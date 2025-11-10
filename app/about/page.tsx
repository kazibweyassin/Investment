"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Scale, Handshake, CheckCircle2, Award, Users, Building2, Briefcase, Globe, FileCheck, Target, TrendingUp, Zap, Heart, Star, Gem, Coffee, FileText } from "lucide-react"

export default function AboutPage() {
  const approaches = [
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Independent & Conflict-Free",
      description: "We do not invest in transactions ourselves, eliminating any conflict of interest. Our sole focus is facilitating compliant, successful investments for our clients.",
      color: "blue"
    },
    {
      icon: <Eye className="h-7 w-7" />,
      title: "Transparent Processes",
      description: "Every step of our process is transparent. We provide regular updates, detailed documentation, and clear communication throughout the engagement.",
      color: "purple"
    },
    {
      icon: <Scale className="h-7 w-7" />,
      title: "Regulatory Expertise",
      description: "Our team has deep knowledge of Uganda's regulatory landscape, including DGSM requirements, PPDA processes, and international compliance standards.",
      color: "green"
    },
    {
      icon: <Handshake className="h-7 w-7" />,
      title: "Strategic Partnerships",
      description: "We work with top-tier law firms, financial institutions, and technical advisors to provide comprehensive support for complex transactions.",
      color: "orange"
    },
  ]

  const stats = [
    { number: "2025", label: "Founded", icon: <Star className="h-6 w-6" /> },
    { number: "15+", label: "Years Combined Experience", icon: <Award className="h-6 w-6" /> },
    { number: "100%", label: "Compliance Rate", icon: <Shield className="h-6 w-6" /> },
    { number: "25+", label: "Countries Served", icon: <Globe className="h-6 w-6" /> }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-secondary text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
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
              <Building2 className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-200">Est. 2024 • Kampala, Uganda</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Trusted Partner in Uganda
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              De-risking foreign direct investment through unparalleled local expertise 
              and absolute transparency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Target className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-900">Our Mission</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Investment Success Through Compliance Excellence
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be the definitive compliance and facilitation partner for foreign direct investment 
                in Uganda, de-risking high-value transactions through unparalleled local expertise and 
                absolute transparency.
              </p>
              
              <div className="space-y-4">
                {[
                  "Zero tolerance for non-compliance",
                  "Client success as our only measure",
                  "Transparent processes at every step",
                  "Long-term partnerships over short-term gains"
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1758519290800-a824cc6dd2ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331"
                  alt="Professional team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/40"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-xs font-medium">Compliant</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEuNSIgZmlsbD0icmdiYSgwLDAsMCwwLjAzKSIvPjwvc3ZnPg==')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Heart className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-900">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Born from Experience, Built on Trust
              </h2>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden mb-8 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1693064972579-0c1c85c636e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1113"
                alt="Business growth in Africa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in 2025, <span className="font-semibold text-gray-900">Uganda Investment Bridge</span> was established to address 
                the critical gap between promising investment opportunities in Uganda and the regulatory 
                complexity faced by foreign investors.
              </p>
              
              <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                <p className="text-blue-900 font-medium">
                  "We saw too many good deals fall apart—not because the opportunity wasn't real, 
                  but because investors couldn't navigate the regulatory maze with confidence."
                </p>
              </div>

              <p>
                We operate under strict international standards of due diligence, making us the trusted 
                on-the-ground presence that ensures every deal is legally secure and compliant. Our team 
                combines deep local knowledge with international best practices, providing foreign investors 
                with the confidence they need to navigate Uganda's investment landscape.
              </p>

              <p>
                We specialize in the <span className="font-semibold text-gray-900">gold sector</span> and <span className="font-semibold text-gray-900">government tenders</span> because 
                these are areas where regulatory compliance is both critical and complex. Our expertise 
                in these sectors helps our clients avoid costly mistakes and ensures their investments 
                are built on a solid, compliant foundation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
              <Zap className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-green-900">Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Four Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The foundation of everything we do for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white border-2 border-gray-200 hover:border-blue-500 rounded-2xl p-8 transition-all hover:shadow-xl"
              >
                <div className={`w-16 h-16 rounded-xl ${
                  approach.color === 'blue' ? 'bg-blue-600' :
                  approach.color === 'purple' ? 'bg-purple-600' :
                  approach.color === 'green' ? 'bg-green-600' :
                  'bg-orange-600'
                } flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {approach.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-700 leading-relaxed">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNIDQwIDAgTCA0MCA4MCBNIDAgNDAgTCA4MCA0MCIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <Users className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-900">Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Local Expertise, Global Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A diverse team combining deep local knowledge with international experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 bg-white border-2 border-blue-200 rounded-2xl">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Expertise</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our team includes Ugandan nationals with 15+ years of combined experience in regulatory 
                  compliance, government relations, and investment facilitation.
                </p>
                <div className="pt-4 border-t border-blue-200">
                  <div className="flex items-center gap-2 text-blue-700 font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Deep understanding of local business practices</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 bg-white border-2 border-purple-200 rounded-2xl">
                <div className="w-14 h-14 rounded-xl bg-purple-600 flex items-center justify-center mb-6">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">International Standards</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our international team members bring experience from major financial centers and 
                  multinational corporations, applying global best practices.
                </p>
                <div className="pt-4 border-t border-purple-200">
                  <div className="flex items-center gap-2 text-purple-700 font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>World-class compliance standards</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Office & Team Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative h-64 rounded-2xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1613"
                alt="Modern office workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold">CSR & Sustainability</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-64 rounded-2xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1573167710701-35950a41e251?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
                alt="Team collaboration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold">Collaborative Environment</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative h-64 rounded-2xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1751139846255-d0d65f3d192a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                alt="Client consultation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold">Local Expertise-Global Standards</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary text-white rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-8 w-8 text-blue-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Sector Specialization</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  We don't claim to be experts in everything. Our focused specialization in gold 
                  sector compliance and government tenders means we have deep, actionable knowledge 
                  in these areas.
                </p>
                <p className="text-blue-200 font-medium">
                  This specialization allows us to provide superior service compared to generalist firms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-10 w-80 h-80 bg-amber-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted partners providing comprehensive support for your investment needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Scale className="h-6 w-6" />,
                title: "Legal Partners",
                description: "Top-tier Kampala law firms specializing in commercial law, regulatory compliance, and international transactions.",
                status: "Partnership agreements in progress",
                color: "blue"
              },
              {
                icon: <Building2 className="h-6 w-6" />,
                title: "Banking Partners",
                description: "Major banks in Uganda for escrow services, payment guarantees, and financial documentation.",
                status: "Partnership agreements in progress",
                color: "green"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Technical Advisors",
                description: "Network of former government officials and industry experts providing technical guidance.",
                status: "Active advisory network",
                color: "purple"
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-lg ${
                  partner.color === 'blue' ? 'bg-blue-600' :
                  partner.color === 'green' ? 'bg-green-600' :
                  'bg-purple-600'
                } flex items-center justify-center text-white mb-4`}>
                  {partner.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{partner.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500 italic">{partner.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Registration & Credibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Registered & Licensed</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Government-Compliant Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Operating under Uganda's Investment Code with verified partnerships
            </p>
          </motion.div>

          {/* Registration Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">URSB Registered</h3>
                  <p className="text-blue-900 font-medium">Uganda Registration Services Bureau</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Officially registered business entity with the Uganda Registration Services Bureau, 
                ensuring legal compliance and transparency in all operations.
              </p>
              <div className="flex items-center gap-2 text-blue-700 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <span>Verified Business Registration</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Code 1991</h3>
                  <p className="text-purple-900 font-medium">Revised 2019 - Full Compliance</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Operating in full compliance with Uganda's Investment Code Act, ensuring all facilitated 
                investments meet legal requirements and regulatory standards.
              </p>
              <div className="flex items-center gap-2 text-purple-700 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <span>Legal Framework Adherence</span>
              </div>
            </motion.div>
          </div>

          {/* Licensed Partner Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 border-2 border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Licensed Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center">
                    <Gem className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">DGSM Licensed</h4>
                </div>
                <p className="text-sm text-gray-600">Directorate of Geological Survey & Mines certified gold dealers</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-amber-800 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-800 flex items-center justify-center">
                    <Coffee className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">UCDA Certified</h4>
                </div>
                <p className="text-sm text-gray-600">Uganda Coffee Development Authority approved exporters</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">PPDA Registered</h4>
                </div>
                <p className="text-sm text-gray-600">Public Procurement & Disposal of Assets Authority contractors</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance & Credentials */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZGlhZ29uYWwiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIxMDAiIHkyPSIxMDAiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RpYWdvbmFsKSIvPjwvc3ZnPg==')] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-green-900">Fully Compliant</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Regulatory Compliance & Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Maintaining the highest standards of regulatory compliance and professional conduct
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "URSB Registered",
                description: "Registered with Uganda Registration Services Bureau as a legal entity"
              },
              {
                icon: <CheckCircle2 className="h-8 w-8" />,
                title: "URA Compliant",
                description: "Fully compliant with Uganda Revenue Authority tax and business requirements"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Professional Indemnity Insured",
                description: "Fully insured for professional liability and errors & omissions"
              }
            ].map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white border-2 border-green-200 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-xl bg-green-600 flex items-center justify-center text-white mx-auto mb-4">
                  {credential.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{credential.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{credential.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-blue-200 rounded-2xl p-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <FileCheck className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Compliance Monitoring</h3>
                <p className="text-gray-700 leading-relaxed">
                  We maintain active compliance with all regulatory bodies and undergo regular audits. 
                  Our compliance status is current and verified. All licenses and registrations are 
                  renewed on time and in good standing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}