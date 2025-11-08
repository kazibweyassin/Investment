"use client"

import { motion } from "framer-motion"
import { 
  Building2, 
  Globe, 
  Factory, 
  TrendingUp, 
  Network, 
  Lightbulb, 
  Mountain, 
  Banknote, 
  Users, 
  Heart,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Briefcase,
  MapPin,
  Award,
  Target,
  Zap
} from "lucide-react"

const reasons = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Strategic Infrastructure & Logistics",
    description: "Uganda's strategic location in East Africa, coupled with ongoing infrastructure investments, positions it as a key gateway to the region.",
    color: "blue"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Growing Multinational Presence",
    description: "Increasingly becoming the investment destination of choice for global corporates looking to expand in East Africa.",
    color: "purple"
  },
  {
    icon: <Factory className="h-8 w-8" />,
    title: "Emerging Manufacturing Hub",
    description: "Developing manufacturing sector presents opportunities to establish production facilities serving regional markets.",
    color: "green"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Lucrative Emerging Market",
    description: "Rapidly growing population and expanding middle class present attractive returns on investment opportunities.",
    color: "orange"
  },
  {
    icon: <Network className="h-8 w-8" />,
    title: "Favorable Market Access",
    description: "EAC and AfCFTA membership provides access to markets of over 1.3 billion people across Africa.",
    color: "blue"
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation & Technology Hub",
    description: "Fast becoming a technology hub in East Africa with a growing ecosystem supporting digital innovation.",
    color: "purple"
  },
  {
    icon: <Mountain className="h-8 w-8" />,
    title: "Abundant Natural Resources",
    description: "Rich in natural resources including gold, oil, and agricultural products with significant untapped potential.",
    color: "green"
  },
  {
    icon: <Banknote className="h-8 w-8" />,
    title: "Growing Financial Services",
    description: "Well-developed and growing financial sector with stable banking system and regional integration.",
    color: "orange"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Young, Trainable Workforce",
    description: "One of the youngest populations globally with over 70% under 30, offering motivated, trainable labor.",
    color: "blue"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Excellent Quality of Life",
    description: "Renowned for natural beauty, stable climate, and welcoming culture with modern amenities in major cities.",
    color: "purple"
  },
]

export default function WhyUgandaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539650116574-75c0c6d73bb6?w=1920')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-secondary/95"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full mb-8"
            >
              <MapPin className="h-4 w-4 text-green-300" />
              <span className="text-sm font-medium text-green-200">The Pearl of Africa</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Invest in 
              <span className="text-primary"> Uganda?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Uganda is the preferred location for strategic investment in East Africa. 
              Its unique value proposition makes it an attractive destination for a growing array 
              of investors and industries.
            </p>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              Today, Uganda is not only a resource-rich economy with access to vibrant local and 
              regional markets, but also an emerging financial, technical, and innovation hub.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:shadow-green-500/20 flex items-center justify-center gap-2">
                Explore Opportunities
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/5 rounded-lg font-semibold text-lg transition-all">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "48M+", label: "Population", description: "Fastest-growing in Africa", icon: <Users className="h-6 w-6" /> },
              { number: "5.3%", label: "Avg GDP Growth", description: "Consistent economic growth", icon: <TrendingUp className="h-6 w-6" /> },
              { number: "70%", label: "Under Age 30", description: "Young, dynamic workforce", icon: <Award className="h-6 w-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 bg-white border-2 border-gray-200 rounded-2xl text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Reasons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
              <Target className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-green-900">Investment Opportunities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              10 Reasons to Choose Uganda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the key pillars of Uganda's unique value proposition for foreign direct investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white border-2 border-gray-200 hover:border-green-500 rounded-2xl p-8 transition-all hover:shadow-xl"
              >
                <div className="absolute top-6 right-6 text-6xl font-bold text-gray-100 group-hover:text-green-50 transition-colors">
                  {index + 1}
                </div>
                
                <div className="relative">
                  <div className={`w-16 h-16 rounded-xl ${
                    reason.color === 'blue' ? 'bg-blue-600' :
                    reason.color === 'purple' ? 'bg-purple-600' :
                    reason.color === 'green' ? 'bg-green-600' :
                    'bg-orange-600'
                  } flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {reason.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 pr-12">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Investment Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse opportunities across multiple high-growth sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Gold & Mining", icon: <Mountain className="h-5 w-5" />, color: "yellow" },
              { name: "Government Tenders", icon: <FileText className="h-5 w-5" />, color: "blue" },
              { name: "Agriculture", icon: <Heart className="h-5 w-5" />, color: "green" },
              { name: "Infrastructure", icon: <Building2 className="h-5 w-5" />, color: "purple" },
              { name: "Financial Services", icon: <Banknote className="h-5 w-5" />, color: "blue" },
              { name: "Energy & Power", icon: <Zap className="h-5 w-5" />, color: "yellow" },
              { name: "Manufacturing", icon: <Factory className="h-5 w-5" />, color: "orange" },
              { name: "Technology", icon: <Lightbulb className="h-5 w-5" />, color: "purple" },
            ].map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-6 ${
                  sector.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                  sector.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                  sector.color === 'green' ? 'bg-green-50 border-green-200' :
                  sector.color === 'purple' ? 'bg-purple-50 border-purple-200' :
                  'bg-orange-50 border-orange-200'
                } border-2 rounded-xl hover:shadow-lg transition-all group cursor-pointer`}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${
                  sector.color === 'yellow' ? 'bg-yellow-600' :
                  sector.color === 'blue' ? 'bg-blue-600' :
                  sector.color === 'green' ? 'bg-green-600' :
                  sector.color === 'purple' ? 'bg-purple-600' :
                  'bg-orange-600'
                } text-white mb-3 group-hover:scale-110 transition-transform`}>
                  {sector.icon}
                </div>
                <h3 className="font-bold text-gray-900">{sector.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Best Practices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Briefcase className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Expert Guidance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Best Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key recommendations to ensure your investment success in Uganda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-7 w-7" />,
                title: "Understand Regulations",
                description: "Familiarize yourself with DGSM licensing, PPDA registration, and URSB company requirements before investing.",
                tip: "Our compliance services navigate these requirements",
                color: "blue"
              },
              {
                icon: <Users className="h-7 w-7" />,
                title: "Partner with Experts",
                description: "Work with local partners who understand the regulatory landscape and have proven compliance track records.",
                tip: "We provide local expertise with international standards",
                color: "green"
              },
              {
                icon: <AlertTriangle className="h-7 w-7" />,
                title: "Conduct Due Diligence",
                description: "Always verify licenses, registrations, and compliance status. Critical in gold sector where DGSM licenses must be current.",
                tip: "We offer comprehensive due diligence services",
                color: "orange"
              },
              {
                icon: <CheckCircle2 className="h-7 w-7" />,
                title: "Plan for Compliance",
                description: "Build compliance requirements into your timeline and budget from day one to avoid costly delays.",
                tip: "Upfront consultation identifies all needs early",
                color: "purple"
              },
              {
                icon: <Network className="h-7 w-7" />,
                title: "Leverage Market Access",
                description: "Take advantage of EAC and AfCFTA membership to access broader regional markets beyond Uganda.",
                tip: "We help understand market access opportunities",
                color: "blue"
              },
              {
                icon: <Target className="h-7 w-7" />,
                title: "Invest in Local Talent",
                description: "Uganda's young workforce is a major asset. Invest in training programs to build skilled local teams.",
                tip: "We advise on workforce development requirements",
                color: "green"
              },
            ].map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 hover:border-green-500 rounded-2xl p-8 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl ${
                  practice.color === 'blue' ? 'bg-blue-600' :
                  practice.color === 'green' ? 'bg-green-600' :
                  practice.color === 'orange' ? 'bg-orange-600' :
                  'bg-purple-600'
                } flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {practice.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{practice.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{practice.description}</p>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-700 font-medium">{practice.tip}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Guidance CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white border-2 border-blue-200 rounded-2xl p-10"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Guidance Available</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Navigating Uganda's investment landscape requires expertise in regulatory compliance, 
                  local market conditions, and business practices. Our team provides comprehensive 
                  facilitation services to ensure your investment is fully compliant and positioned for success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-all hover:shadow-xl flex items-center justify-center gap-2">
                    Explore Our Services
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-blue-600 hover:bg-blue-50 rounded-lg font-semibold text-blue-600 transition-all">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-secondary text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Invest in Uganda?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Let Axle Africa Partners help you navigate Uganda's investment landscape with 
              expert facilitation services ensuring full compliance and de-risked investments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="group px-10 py-5 bg-white text-green-900 hover:bg-gray-100 rounded-lg font-bold text-lg transition-all hover:shadow-2xl flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 rounded-lg font-bold text-lg transition-all">
                View Our Services
              </button>
            </div>
            
            <div className="pt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>100% Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Local Expertise</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}