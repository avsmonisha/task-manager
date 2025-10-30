import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'

// Loading a precompiled Tailwind build to avoid relying on PostCSS at dev time.
// We generate `public/tailwind.css` (minified) with the Tailwind CLI and load it
// as a static asset so Next doesn't try to parse the source `globals.css` with
// webpack/PostCSS during development.


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
      <head>
        {/* Tailwind CDN as an immediate dev-time fallback so the site gets Tailwind styles
            without requiring PostCSS to run in the dev build. This is temporary — we'll
            keep the `/tailwind.css` link for a future prebuilt file.
        */}
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="/tailwind.css" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
