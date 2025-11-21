import type { Metadata } from "next"
import { COMPANY_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Resources | ${COMPANY_NAME}`,
  description: "Guides, articles, and helpful links for navigating Uganda's investment landscape and regulatory requirements.",
  openGraph: {
    title: `Resources | ${COMPANY_NAME}`,
    description: "Guides, articles, and helpful links for navigating Uganda's investment landscape.",
    type: "website",
  },
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

