import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investment Opportunities | Uganda Investment Bridge",
  description: "Access verified investment opportunities in Uganda - gold, land, government contracts, agriculture, and IT infrastructure.",
}

export default function OpportunitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
