import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Uganda Investment Bridge",
  description: "Learn about Uganda Investment Bridge, your trusted partner for compliant investment facilitation in Uganda.",
  openGraph: {
    title: "About Us | Uganda Investment Bridge",
    description: "Learn about Uganda Investment Bridge, your trusted partner for compliant investment facilitation in Uganda.",
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

