'use client'

import PrivateRoute from '@/components/privateRoute'
import { checkIsPublicRoute } from '@/services/isPublicRoute'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function UserPageLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname()
  const isPublicPage = checkIsPublicRoute(pathName)

  return (
    <>
      {isPublicPage && children}
      {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
    </>
  )
}
