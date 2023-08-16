"use client"

import Header from '@/components/header'
import { checkUserAuthenticated } from '@/services/isUserAuthenticated'
import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'NerdBox Notes',
  description: 'Create, save, keep your notes',
}

const IsUserAuth = checkUserAuthenticated()

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
        <h1>{IsUserAuth ? 'autenticado' : 'não autenticado'}</h1>
        <Header
          userAuth={IsUserAuth}
        />
        {children}
      </body>
    </html>
  )
}
