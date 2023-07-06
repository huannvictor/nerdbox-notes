'use client'

import { checkIsPublicRoute } from '@/services/isPublicRoute'
import { redirect, usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function UserPageLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname()
  const isPublicPage = checkIsPublicRoute(pathName)

  console.log(isPublicPage)

  if (!isPublicPage) return redirect('/login')
  return <>{children}</>
}
