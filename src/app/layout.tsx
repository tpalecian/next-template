import '@/styles/globals.css'

import type { Metadata } from 'next'

import { inter } from '@/styles/fonts'

import { cn } from '@/lib/utils/cn'

import { Analytics } from '@/components/analytics'
import { BreakpointsIndicator } from '@/components/breakpoints-indicator'

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}

        <BreakpointsIndicator />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
