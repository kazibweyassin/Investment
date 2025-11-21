"use client"

import { Share2, Twitter, Linkedin, Mail, Copy, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

type ShareButtonsProps = {
  url: string
  title: string
  description?: string
}

export default function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url

  const shareData = {
    title,
    text: description || title,
    url: fullUrl,
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback to copy
      handleCopy()
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
      "_blank"
    )
  }

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      "_blank"
    )
  }

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(fullUrl)}`
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 mr-2">Share:</span>
      <div className="flex items-center gap-2">
        <button
          onClick={handleShare}
          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          aria-label="Share"
          title="Share"
        >
          <Share2 className="h-4 w-4" />
        </button>
        <button
          onClick={shareToTwitter}
          className="p-2 text-gray-600 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition-colors"
          aria-label="Share on Twitter"
          title="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </button>
        <button
          onClick={shareToLinkedIn}
          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </button>
        <button
          onClick={shareViaEmail}
          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          aria-label="Share via Email"
          title="Share via Email"
        >
          <Mail className="h-4 w-4" />
        </button>
        <button
          onClick={handleCopy}
          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors relative"
          aria-label="Copy link"
          title="Copy link"
        >
          {copied ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </motion.div>
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  )
}

