import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KAZEO — Enseignes, signalétique & impression grand format',
  description: 'KAZEO donne forme aux idées : enseignes lumineuses, signalétique, impression numérique et événementiel en Tunisie.',
  generator: 'KAZEO',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0D12',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
