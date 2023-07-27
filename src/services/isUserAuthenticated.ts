'use client'

const getSessionStorage = (key: string) => {
  const data = window.sessionStorage.getItem(key)

  return data!
}

export const checkUserAuthenticated = () => {
  const userToken = getSessionStorage('token')

  return !!userToken
}
