import './globals.css'
import { Syne, Space_Grotesk } from 'next/font/google'

export const metadata = {
  title: 'VeilPay — Crypto payroll made simple',
  description: 'Bulk payouts and automated payroll on Solana.',
}

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['600','700','800'] })
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', weight: ['400','500','700'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${space.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}