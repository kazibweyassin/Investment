import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"
import { COMPANY_NAME } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Expert Investment Facilitation`,
  description: "Expert compliance facilitation for gold sector transactions and government tenders in Uganda. Navigate Uganda's investment landscape with confidence.",
  keywords: "Uganda investment, gold sector compliance, government tenders, DGSM license, PPDA, foreign investment Uganda",
  openGraph: {
    title: `${COMPANY_NAME} | Expert Investment Facilitation`,
    description: "Expert compliance facilitation for gold sector transactions and government tenders in Uganda.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Expert Investment Facilitation`,
    description: "Expert compliance facilitation for gold sector transactions and government tenders in Uganda.",
  },
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

