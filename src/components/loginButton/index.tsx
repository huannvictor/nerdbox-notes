'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import SignInIcon from '../icons/SignInIcon'

interface Props {
  className: string
  onClick?: () => void
}

const LoginButton: React.FC<Props> = ({ className, onClick }) => {
  const { push } = useRouter()

  const handleRouterPush = () => {
    push('/login')
  }

  return (
    <button className={className} type="button" onClick={handleRouterPush}>
      <SignInIcon />
      Login
    </button>
  )
}

export default LoginButton
