import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fizzloo -- Bath Bombs Kids Love',
  description: 'Fizzing bath bombs with surprise toys inside -- for kids who can\'t wait for bath time',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Baloo+2:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Nunito', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
