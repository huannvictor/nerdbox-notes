'use client'

import HeaderHandler from '@/components/headerHandler'
import PrivateRoute from '@/components/privateRoute'
import { checkIsPublicRoute } from '@/services/isPublicRoute'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function AuthenticatedPagesLayout({
  children,
}: {
  children: ReactNode
}) {
  const pathName = usePathname()
  const isPublicPage = checkIsPublicRoute(pathName)

  return (
    <>
      <HeaderHandler />
      {isPublicPage && children}
      {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
    </>
  )
}
