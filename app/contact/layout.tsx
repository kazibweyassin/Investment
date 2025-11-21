import type { Metadata } from "next"
import { COMPANY_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Contact Us | ${COMPANY_NAME}`,
  description: `Get in touch with ${COMPANY_NAME} to discuss your investment facilitation needs in Uganda.`,
  openGraph: {
    title: `Contact Us | ${COMPANY_NAME}`,
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

