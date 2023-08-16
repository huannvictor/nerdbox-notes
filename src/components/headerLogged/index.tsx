
import UsersService from '@/services/users'
import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from '../../assets/images/logoWhite.svg'
import DropDown from '../DropDown'
import styles from './HeaderLogged.module.css'

const { headerAuth, brandAuth, logoAuth, titleAuth, navBarAuth } = styles

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
      <div className={headerAuth}>
        <div className={navBarAuth}>
          <Link href="/" className={brandAuth}>
            <Image alt="NerdBox Logo" src={LogoWhite} className={logoAuth} />
            <span className={titleAuth}>Bem vindo {userData.name}</span>
          </Link>
        </div>
        <nav className={navBarAuth}>
          <DropDown
            userName={userData.name}
          />
        </nav>
      </div>
    </>
  )
}
