"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Clock, CheckCircle2, XCircle, Loader2, ArrowRight, ArrowLeft, Building2, Gem, Landmark, FileText, Wheat, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"

// Multi-step form validation schemas
const step1Schema = z.object({
  opportunityType: z.enum(["gold", "land", "government", "agriculture", "it", "business-setup"], {
    required_error: "Please select an opportunity type",
  }),
})

const step2Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  country: z.string().min(2, "Country is required"),
})

const step3Schema = z.object({
  investmentSize: z.enum(["under-100k", "100k-500k", "500k-2m", "over-2m"], {
    required_error: "Please select an investment size",
  }),
  timeline: z.enum(["immediate", "1-3months", "3-6months", "exploring"], {
    required_error: "Please select a timeline",
  }),
  message: z.string().min(20, "Please provide more details (minimum 20 characters)"),
  agreeToNDA: z.boolean().refine((val) => val === true, {
    message: "You must agree to sign an NDA to proceed",
  }),
})

type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>
type Step3Data = z.infer<typeof step3Schema>
type FormData = Step1Data & Step2Data & Step3Data

const OPPORTUNITY_TYPES = [
  { value: "gold", label: "Gold & Minerals", icon: Gem, description: "Mining, export, and trading" },
  { value: "land", label: "Land Acquisitions", icon: Landmark, description: "Commercial, agricultural, industrial" },
  { value: "government", label: "Government Contracts", icon: FileText, description: "Tenders and procurement" },
  { value: "agriculture", label: "Agriculture", icon: Wheat, description: "Farm partnerships, exports" },
  { value: "it", label: "IT & Infrastructure", icon: Server, description: "Technology projects" },
  { value: "business-setup", label: "Business Setup", icon: Building2, description: "Registration and licensing" },
]

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState<Partial<FormData>>({})

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(
      currentStep === 1 ? step1Schema : currentStep === 2 ? step2Schema : step3Schema
    ),
  })

  const selectedOpportunity = watch("opportunityType")

  const nextStep = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data })
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const onSubmit = async (data: Partial<FormData>) => {
    if (currentStep < 3) {
      nextStep(data)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    const finalData = { ...formData, ...data }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        reset()
        setFormData({})
        setCurrentStep(1)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative bg-slate-900 text-white py-16">
        <div className="absolute inset-0 opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Consultation</h1>
            <p className="text-xl text-gray-300 mb-4">
              Tell us about your investment plans and we'll provide a detailed compliance roadmap—no obligation, no pressure.
            </p>
            <p className="text-lg text-gray-400">
              <strong className="text-white">What happens next:</strong> We'll review your request, send you an NDA within 24 hours, 
              and schedule a free 30-minute consultation to discuss your specific needs and provide a custom quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                        step <= currentStep
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step < currentStep ? <CheckCircle2 className="h-6 w-6" /> : step}
                    </div>
                    <span className="text-xs mt-2 font-medium text-gray-600">
                      {step === 1 && "Opportunity"}
                      {step === 2 && "Your Info"}
                      {step === 3 && "Details"}
                    </span>
                  </div>
                  {step < 3 && (
                    <div
                      className={`h-0.5 flex-1 transition-all ${
                        step < currentStep ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Opportunity Type */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      What opportunity are you interested in?
                    </h2>
                    <p className="text-gray-600">Select the type of business opportunity you'd like to explore</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {OPPORTUNITY_TYPES.map((type) => {
                      const Icon = type.icon
                      return (
                        <label
                          key={type.value}
                          className={`relative flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                            selectedOpportunity === type.value
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-200 hover:border-blue-300"
                          }`}
                        >
                          <input
                            type="radio"
                            {...register("opportunityType")}
                            value={type.value}
                            className="sr-only"
                            aria-invalid={errors.opportunityType ? "true" : "false"}
                          />
                          <div className="flex items-start gap-4 flex-1">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              selectedOpportunity === type.value ? "bg-blue-600" : "bg-slate-100"
                            }`}>
                              <Icon className={`h-6 w-6 ${
                                selectedOpportunity === type.value ? "text-white" : "text-slate-700"
                              }`} aria-hidden="true" />
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-slate-900">{type.label}</div>
                              <div className="text-sm text-gray-600">{type.description}</div>
                            </div>
                          </div>
                          {selectedOpportunity === type.value && (
                            <CheckCircle2 className="h-5 w-5 text-blue-600 absolute top-4 right-4" aria-hidden="true" />
                          )}
                        </label>
                      )
                    })}
                  </div>
                  {errors.opportunityType && (
                    <p id="opportunity-error" className="text-sm text-red-600" role="alert">
                      {errors.opportunityType.message}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      Tell us about yourself
                    </h2>
                    <p className="text-gray-600">We'll use this information to connect you with the right partners</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="John Doe"
                        className="mt-2"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-red-600 mt-1" role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@company.com"
                        className="mt-2"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-red-600 mt-1" role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+1 234 567 8900"
                        className="mt-2"
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-sm text-red-600 mt-1" role="alert">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        {...register("company")}
                        placeholder="Company Ltd"
                        className="mt-2"
                        aria-invalid={errors.company ? "true" : "false"}
                        aria-describedby={errors.company ? "company-error" : undefined}
                      />
                      {errors.company && (
                        <p id="company-error" className="text-sm text-red-600 mt-1" role="alert">
                          {errors.company.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        {...register("country")}
                        placeholder="United States"
                        className="mt-2"
                        aria-invalid={errors.country ? "true" : "false"}
                        aria-describedby={errors.country ? "country-error" : undefined}
                      />
                      {errors.country && (
                        <p id="country-error" className="text-sm text-red-600 mt-1" role="alert">
                          {errors.country.message}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Investment Details */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      Investment Details
                    </h2>
                    <p className="text-gray-600">Help us understand your investment capacity and timeline</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label>Investment Size *</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                        {[
                          { value: "under-100k", label: "< $100K" },
                          { value: "100k-500k", label: "$100K - $500K" },
                          { value: "500k-2m", label: "$500K - $2M" },
                          { value: "over-2m", label: "> $2M" },
                        ].map((size) => (
                          <label
                            key={size.value}
                            className={`px-4 py-3 border-2 rounded-lg cursor-pointer text-center transition-all ${
                              watch("investmentSize") === size.value
                                ? "border-blue-600 bg-blue-50 text-blue-900 font-semibold"
                                : "border-gray-200 hover:border-blue-300"
                            }`}
                          >
                            <input
                              type="radio"
                              {...register("investmentSize")}
                              value={size.value}
                              className="sr-only"
                            />
                            {size.label}
                          </label>
                        ))}
                      </div>
                      {errors.investmentSize && (
                        <p id="investment-error" className="text-sm text-red-600 mt-1" role="alert">
                          {errors.investmentSize.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label>Timeline *</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                        {[
                          { value: "immediate", label: "Immediate" },
                          { value: "1-3months", label: "1-3 Months" },
                          { value: "3-6months", label: "3-6 Months" },
                          { value: "exploring", label: "Exploring" },
                        ].map((time) => (
                          <label
                            key={time.value}
                            className={`px-4 py-3 border-2 rounded-lg cursor-pointer text-center transition-all ${
                              watch("timeline") === time.value
                                ? "border-blue-600 bg-blue-50 text-blue-900 font-semibold"
                                : "border-gray-200 hover:border-blue-300"
                            }`}
                          >
                            <input
                              type="radio"
                              {...register("timeline")}
                              value={time.value}
                              className="sr-only"
                            />
                            {time.label}
                          </label>
                        ))}
                      </div>
                      {errors.timeline && (
                        <p id="timeline-error" className="text-sm text-red-600 mt-1" role="alert">
                          {errors.timeline.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Details *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        rows={5}
                        placeholder="Tell us more about your investment goals, specific requirements, or any questions you have..."
                        className="mt-2"
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-sm text-red-600 mt-1" role="alert">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register("agreeToNDA")}
                          className="mt-1"
                          aria-invalid={errors.agreeToNDA ? "true" : "false"}
                          aria-describedby={errors.agreeToNDA ? "nda-error" : "nda-description"}
                        />
                        <span id="nda-description" className="text-sm text-gray-700">
                          I agree to sign an NDA before accessing detailed opportunity information and understand that all shared information will be kept confidential.
                        </span>
                      </label>
                      {errors.agreeToNDA && (
                        <p id="nda-error" className="text-sm text-red-600 mt-2" role="alert">
                          {errors.agreeToNDA.message}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              {currentStep > 1 && (
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              )}
              
              {currentStep < 3 ? (
                <Button
                  type="submit"
                  className="ml-auto flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>

          {/* Success/Error Messages */}
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900">Request Submitted Successfully!</p>
                  <p className="text-sm text-green-700 mt-1">
                    We'll review your request and send you an NDA within 24 hours. Check your email for next steps.
                  </p>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
              >
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900">Submission Failed</p>
                  <p className="text-sm text-red-700 mt-1">
                    There was an error submitting your request. Please try again or contact us directly.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Or Contact Us Directly
            </h2>
            <p className="text-gray-600">Prefer to reach out another way? We're here to help</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Email</h3>
              <a href="mailto:info@axleafrica.com" className="text-blue-600 hover:underline">
                info@axleafrica.com
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
              <a href="tel:+256123456789" className="text-blue-600 hover:underline">
                +256 123 456 789
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Location</h3>
              <p className="text-gray-600">Kampala, Uganda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
