"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus("success")
        setMessage("Thank you! You've been subscribed successfully.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Mail className="h-8 w-8" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Stay Updated on Uganda Investment Opportunities
        </h3>
        <p className="text-blue-100 mb-8 text-lg">
          Get weekly insights on new opportunities, regulatory updates, and market trends delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
          />
          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Subscribed!
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-sm ${
              status === "success" ? "text-green-200" : "text-red-200"
            }`}
          >
            {message}
          </motion.p>
        )}

        <p className="text-xs text-blue-200 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </motion.div>
  )
}

