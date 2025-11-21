import type { Metadata } from "next"
import { COMPANY_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Our Specialized Services | ${COMPANY_NAME}`,
  description: "Gold sector facilitation and government tender navigation services in Uganda. Expert compliance and regulatory support.",
  openGraph: {
    title: `Our Specialized Services | ${COMPANY_NAME}`,
    description: "Gold sector facilitation and government tender navigation services in Uganda.",
    type: "website",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

