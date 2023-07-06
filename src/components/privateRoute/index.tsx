import { APP_ROUTES } from '@/constants/app-routes'
import { checkUserAuthenticated } from '@/services/isUserAuthenticated'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

type PrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter()
  const isUserAuth = checkUserAuthenticated()

  useEffect(() => {
    if (!isUserAuth) push(APP_ROUTES.public.login)
  }, [isUserAuth, push])

  return (
    <>
      {!isUserAuth && null}
      {isUserAuth && children}
    </>
  )
}

export default PrivateRoute
