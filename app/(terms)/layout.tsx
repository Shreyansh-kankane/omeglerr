import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Brand from '@/components/Brand'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omeglerr - terms and conditions',
  description: 'Omeglerr is a platform that connects people from different parts of the world to chat with each other.',
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
