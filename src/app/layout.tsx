'use client'

import Header from '@/components/header'
import HeaderLogged from '@/components/headerLogged'
import { checkIsPublicRoute } from '@/services/isPublicRoute'
import { usePathname } from 'next/navigation'
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
  const pathName = usePathname()
  const isPublicPage = checkIsPublicRoute(pathName)

  return (
    <html lang="pt-Br">
      <body className="bg-custom-purple-darker text-zinc-100 h-screen">
        {isPublicPage ? <Header /> : <HeaderLogged />}
        {header}
        {children}
      </body>
    </html>
  )
}
