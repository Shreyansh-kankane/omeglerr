import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Brand from '@/components/Brand'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omeglerr - terms and conditions',
  description: 'Omeglerr terms and conditions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Brand />
        {children}
      </body>
    </html>
  )
}
