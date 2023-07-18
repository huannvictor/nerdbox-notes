'use client'

import Header from '@/components/header'
import HeaderLogged from '@/components/headerLogged'
import { checkUserAuthenticated } from '@/services/isUserAuthenticated'
import { useEffect, useState } from 'react'

export default function HeaderHandler() {
  const userAuth = checkUserAuthenticated()
  const [isUserAuth, setIsUserAuth] = useState(userAuth)

  useEffect(() => {
    setIsUserAuth(userAuth)
  }, [userAuth])

  if (isUserAuth) return <HeaderLogged />
  return <Header />
}
