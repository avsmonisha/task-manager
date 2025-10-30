import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
// Removed global CSS import from the repository root to avoid
// Next.js attempting to parse and build this file when running
// other workspace apps (it caused a "Module parse failed: '@'" error).
// Keep globals.css inside the app that actually runs (e.g. apps/web).

export const metadata: Metadata = {
  title: 'Task manager',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
