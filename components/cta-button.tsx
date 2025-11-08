import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary"
  className?: string
  ariaLabel?: string
}

export default function CTAButton({ 
  href, 
  children, 
  variant = "default",
  className,
  ariaLabel 
}: CTAButtonProps) {
  return (
    <Button 
      asChild 
      variant={variant} 
      size="lg" 
      className={`group ${className || ""}`}
    >
      <Link 
        href={href}
        aria-label={ariaLabel}
        className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {children}
        <ArrowRight 
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
          aria-hidden="true"
        />
      </Link>
    </Button>
  )
}

