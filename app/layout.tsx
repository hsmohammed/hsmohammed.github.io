import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hossameldin Mohammed - Machine Learning Consultant',
  description: 'Senior Machine Learning Engineer and Consultant with 7+ years of experience in AI, ML, and data science. Specializing in end-to-end ML solutions, NLP, computer vision, and ML automation.',
  keywords: ['Machine Learning', 'AI Consultant', 'Data Science', 'ML Engineer', 'NLP', 'Computer Vision', 'ML Automation'],
  authors: [{ name: 'Hossameldin Mohammed' }],
  creator: 'Hossameldin Mohammed',
  openGraph: {
    title: 'Hossameldin Mohammed - Machine Learning Consultant',
    description: 'Senior Machine Learning Engineer and Consultant with 7+ years of experience in AI, ML, and data science.',
    url: 'https://hossameldinmohammed.netlify.app',
    siteName: 'Hossameldin Mohammed',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hossameldin Mohammed - ML Consultant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hossameldin Mohammed - Machine Learning Consultant',
    description: 'Senior Machine Learning Engineer and Consultant with 7+ years of experience in AI, ML, and data science.',
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