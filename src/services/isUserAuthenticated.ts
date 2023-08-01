'use client'

const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key)

  return data!
}

export const checkUserAuthenticated = () => {
  const userToken = getLocalStorage('token')

  return !!userToken
}
