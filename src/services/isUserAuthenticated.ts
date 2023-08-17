'use client'

export const checkUserAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const userToken = window.localStorage.getItem('token')
    return !!userToken
  }

  return false
}
