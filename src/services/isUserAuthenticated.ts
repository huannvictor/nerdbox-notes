'use client'

export const checkUserAuthenticated = () => {
  const userToken = window.localStorage.getItem('token')
  return !!userToken
}
