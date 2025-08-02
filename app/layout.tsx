import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hossameldinmohammed.netlify.app'),
  title: 'Lucira AI - AI Solutions for Clarity, Performance, and Impact',
  description: 'Lucira AI delivers cutting-edge machine learning solutions that transform businesses through ethical AI implementation, measurable results, and sustainable growth strategies.',
  keywords: ['AI Consulting', 'Machine Learning', 'ML Solutions', 'AI Strategy', 'NLP', 'Computer Vision', 'MLOps', 'Data Science'],
  authors: [{ name: 'Lucira AI' }],
  creator: 'Lucira AI',
  openGraph: {
    title: 'Lucira AI - AI Solutions for Clarity, Performance, and Impact',
    description: 'Lucira AI delivers cutting-edge machine learning solutions that transform businesses through ethical AI implementation, measurable results, and sustainable growth strategies.',
    url: 'https://hossameldinmohammed.netlify.app',
    siteName: 'Lucira AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lucira AI - AI Consulting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucira AI - AI Solutions for Clarity, Performance, and Impact',
    description: 'Lucira AI delivers cutting-edge machine learning solutions that transform businesses through ethical AI implementation, measurable results, and sustainable growth strategies.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
