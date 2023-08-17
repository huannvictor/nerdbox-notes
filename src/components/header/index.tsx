'use client'

import { checkUserAuthenticated } from '@/services/isUserAuthenticated'
import UsersService from '@/services/users'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LogoImg from '../../assets/images/logo.svg'
import LogoWhite from '../../assets/images/logoWhite.svg'
import DropDown from '../DropDown'
import RegisterIcon from '../icons/RegisterIcon'
import LoginButton from '../loginButton'
import ModalHandler from '../modalHandler'
import stylesNotAuth from './Header.module.css'
import stylesAuth from './HeaderAuth.module.css'

const { header, brand, logo, navBar, navItem, cta, menu } = stylesNotAuth
const { headerAuth, brandAuth, logoAuth, titleAuth, navBarAuth } = stylesAuth

interface Props {
  userAuth: boolean
}
interface UserDataType {
  created_at: string
  email: string
  name: string
  password: string
  updated_at: string
  _id: string
}

export default function Header() {
  const isAuth = checkUserAuthenticated()
  const userData = UsersService.currentUser()
  const length = window.localStorage.length
  const [newLocalStorageLength, setNewLocalStorageLength] = useState<number>()

  useEffect(() => {

    // const getLocalStorageLength = () => {
    //   const length = window.localStorage.length
    //   return length
    // }

    const handleSetNewLocalStorage = () => {
      setNewLocalStorageLength(length)
      return newLocalStorageLength
    }

    console.log('useefect scope', length)

    window.addEventListener('storage', handleSetNewLocalStorage)
  }, [length, newLocalStorageLength])

  return (
    <div className={isAuth ? headerAuth : header}>
      <h1 className='text-slate-800'>LocalStorage: {newLocalStorageLength}</h1>
      {
        isAuth
          ? (
            <div className={navBarAuth}>
              <Link href="/" className={brandAuth}>
                <Image alt="NerdBox Logo" src={LogoWhite} className={logoAuth} />
                <span className={titleAuth}>Bem vindo!</span>
              </Link>
            </div>
          ) : (
            <Link href="/" className={brand}>
              <Image alt="NerdBox Logo" src={LogoImg} className={logo} />
              <span className="text-purple-900">NerdBox Notes</span>
            </Link>
          )
      }

      {
        isAuth
          ? (
            <nav className={navBarAuth}>
              <DropDown
                userName={userData.name}
              />
            </nav>
          ) : (
            <nav className={navBar}>
              <ModalHandler className={menu} />
              <LoginButton className={[cta, navItem].join(' ')} />
              <Link href="/register" className={navItem}>
                <RegisterIcon />
                Criar Conta
              </Link>
            </nav>
          )
      }

    </div>
  )
}
