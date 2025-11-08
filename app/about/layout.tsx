import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Axle Africa Partners LLC",
  description: "Learn about Axle Africa Partners LLC, your trusted partner for compliant investment facilitation in Uganda.",
  openGraph: {
    title: "About Us | Axle Africa Partners LLC",
    description: "Learn about Axle Africa Partners LLC, your trusted partner for compliant investment facilitation in Uganda.",
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

