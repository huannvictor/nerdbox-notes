
import UsersService from '@/services/users'
import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from '../../assets/images/logoWhite.svg'
import DropDown from '../DropDown'
import styles from './HeaderLogged.module.css'

const { header, brand, logo, title, navBar } = styles

interface UserDataType {
  created_at: string
  email: string
  name: string
  password: string
  updated_at: string
  _id: string
}


export default function HeaderLogged() {
  const userData: UserDataType = UsersService.currentUser()

  return (
    <>
      <div className={header}>
        <div className={navBar}>
          <Link href="/" className={brand}>
            <Image alt="NerdBox Logo" src={LogoWhite} className={logo} />
            <span className={title}>Bem vindo {userData.name}</span>
          </Link>
        </div>
        <nav className={navBar}>
          <DropDown
            userName={userData.name}
          />
        </nav>
      </div>
    </>
  )
}
