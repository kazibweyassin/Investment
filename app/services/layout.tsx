import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Specialized Services | Axle Africa Partners LLC",
  description: "Gold sector facilitation and government tender navigation services in Uganda. Expert compliance and regulatory support.",
  openGraph: {
    title: "Our Specialized Services | Axle Africa Partners LLC",
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

