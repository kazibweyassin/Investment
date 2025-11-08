"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, Phone, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()

  const footerLinks = {
    company: [
      { href: "/about", label: "About Us" },
      { href: "/why-uganda", label: "Why Uganda" },
      { href: "/services", label: "Services" },
      { href: "/resources", label: "Resources" },
      { href: "/contact", label: "Contact" },
    ],
    legal: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
    ],
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <footer className="bg-secondary text-white border-t border-gray-800" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-white">
                Uganda Investment Bridge
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Expert compliance facilitation for gold sector transactions and government tenders in Uganda.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <a
                href="https://maps.google.com/?q=Kampala,Uganda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary rounded-md px-1 -ml-1"
                aria-label="View location on map"
              >
                <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>Kampala, Uganda</span>
              </a>
              <a
                href="mailto:info@axleafricapartners.com"
                className="flex items-center gap-2 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary rounded-md px-1 -ml-1"
                aria-label="Send email"
              >
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>info@axleafricapartners.com</span>
              </a>
              <a
                href="tel:+256123456789"
                className="flex items-center gap-2 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary rounded-md px-1 -ml-1"
                aria-label="Call phone number"
              >
                <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>+256 XXX XXX XXX</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2" role="list">
              {footerLinks.company.map((link) => {
                const active = isActive(link.href)
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-block text-gray-300 transition-all duration-200 rounded-md px-2 py-1 -ml-2",
                        "hover:text-primary hover:bg-white/5",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary",
                        active && "text-primary font-medium"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-block text-gray-300 transition-all duration-200 rounded-md px-2 py-1 -ml-2",
                      "hover:text-primary hover:bg-white/5",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p className="mb-2">&copy; {currentYear} Uganda Investment Bridge. All rights reserved.</p>
          <p className="text-gray-500 text-xs">Uganda • East Africa</p>
          <p className="text-gray-500 mt-2">Uganda Investment Bridge is an Equal Opportunity Employer</p>
        </div>
      </div>
    </footer>
  )
}

