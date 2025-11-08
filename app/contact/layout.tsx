import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Uganda Investment Bridge",
  description: "Get in touch with Uganda Investment Bridge to discuss your investment facilitation needs in Uganda.",
  openGraph: {
    title: "Contact Us | Uganda Investment Bridge",
    description: "Get in touch to discuss your investment facilitation needs in Uganda.",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

