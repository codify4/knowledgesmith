import type React from "react"
import { Geist } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Knowledgesmith - Turn Notes Into Sellable Courses",
    template: "%s | Knowledgesmith"
  },
  description: "Upload PDFs, get AI-generated courses, and start earning money from your knowledge. Create premium educational content with AI assistance.",
  keywords: ["online courses", "AI education", "knowledge monetization", "PDF to course", "e-learning", "educational content"],
  authors: [{ name: "Knowledgesmith Team" }],
  creator: "Knowledgesmith",
  publisher: "Knowledgesmith",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Knowledgesmith',
    title: 'Knowledgesmith - Turn Notes Into Sellable Courses',
    description: 'Upload PDFs, get AI-generated courses, and start earning money from your knowledge.',
    url: 'https://knowledgesmith.vercel.app',
    images: [
      {
        url: 'https://knowledgesmith.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Knowledgesmith - Turn Notes Into Sellable Courses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowledgesmith - Turn Notes Into Sellable Courses',
    description: 'Upload PDFs, get AI-generated courses, and start earning money from your knowledge.',
    images: ['https://knowledgesmith.vercel.app/og-image.png'],
    site: '@knowledgesmith',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  alternates: {
    canonical: 'https://knowledgesmith.vercel.app',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="Knowledgesmith" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Knowledgesmith" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={` ${geist.variable}`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
