'use client'

import Header from '@/components/header'
import HeaderLogged from '@/components/headerLogged'
import { checkUserAuthenticated } from '@/services/isUserAuthenticated'

export default function HeaderHandler() {
  const isUserAuth = checkUserAuthenticated()

  if (isUserAuth) return <HeaderLogged />

  return <Header />
}
