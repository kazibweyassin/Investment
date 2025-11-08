import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources | Uganda Investment Bridge",
  description: "Guides, articles, and helpful links for navigating Uganda's investment landscape and regulatory requirements.",
  openGraph: {
    title: "Resources | Uganda Investment Bridge",
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

