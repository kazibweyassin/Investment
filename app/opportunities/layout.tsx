import { Metadata } from "next"
import { COMPANY_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Investment Opportunities | ${COMPANY_NAME}`,
  description: "Access verified investment opportunities in Uganda - gold, land, government contracts, agriculture, and IT infrastructure.",
}

export default function OpportunitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
