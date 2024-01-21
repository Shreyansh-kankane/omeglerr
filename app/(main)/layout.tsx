
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Omeglerr - Connecting lives, Connecting minds beyond borders',
  description: 'free video calling | talk with stranger | video call | chat with people | random call',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
    </div>
  )
}
