import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '@/context/ModalProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://omeglerr.netlify.app/"),
  title: 'Omeglerr - Connecting lives, Connecting minds beyond borders',
  description: 'Omeglerr is a platform that connects people from different parts of the world to chat with each other.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        { process.env.NODE_ENV === 'production' && <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7951236970634483" crossOrigin="anonymous"></script>}
     
      </head>
      <body className={inter.className}>
        <ModalProvider />
        {children}
      </body>
    </html>
  )
}
