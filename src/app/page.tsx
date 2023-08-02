'use client'

import HomeScreen from '@/screens/home'
import { checkUserAuthenticated } from '@/services/isUserAuthenticated'
import { useRouter } from 'next/navigation'

export default function Home() {
  const isUserAuth = checkUserAuthenticated()
  const { push } = useRouter()

  if (isUserAuth) push('/notes')

  return (
    <main>
      <HomeScreen />
    </main>
  )
}
