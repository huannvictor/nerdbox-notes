'use client'

import { checkUserAuthenticated } from '@/services/isUserAuthenticated'
import { useRouter } from 'next/navigation'
import React from 'react'
import SignInIcon from '../icons/SignInIcon'

interface Props {
  className: string
  onClick?: () => void
}

const LoginButton: React.FC<Props> = ({ className, onClick }) => {
  const isUserAuth = checkUserAuthenticated()
  const { push } = useRouter()

  const handleRouterPush = () => {
    !isUserAuth ? push('/login') : push('/notes')
  }

  return (
    <button className={className} type="button" onClick={handleRouterPush}>
      <SignInIcon />
      Login
    </button>
  )
}

export default LoginButton
