import HeaderHandler from '@/components/headerHandler'
import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'NerdBox Notes',
  description: 'Create, save, keep your notes',
}

export default function RootLayout({
  header,
  children,
}: {
  header: ReactNode
  children: ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className="bg-custom-purple-darker text-zinc-100 h-screen">
        <HeaderHandler />
        {children}
      </body>
    </html>
  )
}
