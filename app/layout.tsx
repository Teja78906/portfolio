import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Allu Teja Swaroop - Blockchain Developer | AI/ML Enthusiast | Cybersecurity Explorer",
  description:
    "Portfolio of Allu Teja Swaroop, a passionate Blockchain Developer, AI/ML Intern, and CEH-certified Cybersecurity Explorer with a strong foundation in cloud-native development and full-stack engineering.",
  keywords: "Blockchain, AI/ML, Cybersecurity, Rust, Go, Smart Contracts, Rego, AWS, Docker, Full-Stack, dApps, CEH",
  authors: [{ name: "Allu Teja Swaroop" }],
  openGraph: {
    title: "Allu Teja Swaroop - Blockchain Developer | AI/ML Enthusiast",
    description:
      "Explore the portfolio of Allu Teja Swaroop – Blockchain and AI Developer with a focus on scalable, secure systems and decentralized technologies.",
    url: "https://yourdomain.dev", // replace with your deployed portfolio domain
    siteName: "Allu Teja Swaroop Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allu Teja Swaroop - Blockchain | AI/ML | Security",
    description:
      "Tech enthusiast building secure, scalable systems across blockchain, AI, and cybersecurity.",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
