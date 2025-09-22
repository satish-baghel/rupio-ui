import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const sourceSans3 = Source_Sans_3({
  variable: '--font-source-sans-3',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rupio – Real-Time Stock Buy & Sell Tips from Expert Advisors',
  description:
    'Stay ahead in the stock market with Rupio – receive real-time buy & sell tips from expert advisors and make informed trading decisions.',
  keywords:
    'Real-time stock tips, Expert stock advice, Buy and sell stock signals, Stock market tips online, Intraday stock tips, Live stock alerts, Stock trading guidance, Rupio stock recommendations, Share market tips, Financial trading advice',

  // save default url
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000'
      : 'http://localhost:3000'
  ),

  //
  openGraph: {
    title: 'Rupio – Expert Real-Time Stock Tips & Alerts',
    description:
      "Access real-time buy & sell stock tips from Rupio's expert advisors. Make informed trading decisions with live alerts and professional recommendations.",
    url: process.env.NEXT_PUBLIC_DOMAIN_URL,
    siteName: 'Rupio',

    images: [
      {
        url: '/assets/logo-dark.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  authors: [{ name: 'Rupio', url: process.env.NEXT_PUBLIC_DOMAIN_URL }],
}

//

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rupio',
  url: process.env.NEXT_PUBLIC_DOMAIN_URL,
  description: 'Real-time stock buy & sell tips from expert advisors.',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(sourceSans3.className)}
    >
      <body>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
          className='min-h-screen bg-violet-50 dark:bg-gray-950  antialiased transition-colors duration-300'
        />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>{' '}
      </body>
    </html>
  )
}
