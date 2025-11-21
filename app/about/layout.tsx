import type { Metadata } from "next"
import { COMPANY_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_NAME}`,
  description: `Learn about ${COMPANY_NAME}, your trusted partner for compliant investment facilitation in Uganda.`,
  openGraph: {
    title: `About Us | ${COMPANY_NAME}`,
    description: `Learn about ${COMPANY_NAME}, your trusted partner for compliant investment facilitation in Uganda.`,
    type: "website",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

