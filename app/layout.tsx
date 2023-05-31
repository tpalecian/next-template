import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

import { LayoutProps } from '@/types/next'

import { cn } from '@/lib/cn'

import { Analytics } from '@/components/analytics'
import { BreakpointsIndicator } from '@/components/breakpoints-indicator'

const inter = Inter({
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Next 13 template',
    template: '%s | Next 13 template',
  },
  description: 'Next.js 13 template with TypeScript, Tailwind CSS, and more',
  keywords: 'nextjs, tailwindcss, starter, boilerplate, template, typescript',
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className={cn('h-full font-sans', inter.variable)}>
        {children}
        <Analytics />
        <BreakpointsIndicator />
      </body>
    </html>
  )
}
