import type { Metadata } from "next"
import { COMPANY_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Why Uganda? | Investment Destination | ${COMPANY_NAME}`,
  description: "Discover why Uganda is an attractive investment destination in East Africa. Explore 10 key reasons including strategic location, growing markets, natural resources, and more.",
  openGraph: {
    title: `Why Uganda? | Investment Destination | ${COMPANY_NAME}`,
    description: "Discover why Uganda is an attractive investment destination in East Africa.",
    type: "website",
  },
}

export default function WhyUgandaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}





