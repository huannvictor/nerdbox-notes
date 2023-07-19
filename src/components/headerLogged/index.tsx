import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from '../../assets/images/logoWhite.svg'
import DropDown from '../DropDown'
import styles from './HeaderLogged.module.css'

const { header, brand, logo, title, navBar } = styles

export default function HeaderLogged() {
  return (
    <div className={header}>
      <Link href="/" className={brand}>
        <Image alt="NerdBox Logo" src={LogoWhite} className={logo} />
        <span className={title}>Bem vindo usuário</span>
      </Link>
      <nav className={navBar}>
        <DropDown />
      </nav>
    </div>
  )
}
