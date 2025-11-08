import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Axle Africa Partners LLC",
  description: "Get in touch with Axle Africa Partners LLC to discuss your investment facilitation needs in Uganda.",
  openGraph: {
    title: "Contact Us | Axle Africa Partners LLC",
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

