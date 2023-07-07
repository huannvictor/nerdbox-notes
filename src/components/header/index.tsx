import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../../assets/images/logo.svg'
import RegisterIcon from '../icons/RegisterIcon'
import LoginButton from '../loginButton'
import ModalHandler from '../modalHandler'
import styles from './Header.module.css'

const { header, brand, logo, navBar, navItem, cta, menu } = styles

export default function Header() {
  return (
    <div className={header}>
      <Link href="/" className={brand}>
        <Image alt="NerdBox Logo" src={LogoImg} className={logo} />
        <span className="text-purple-900">NerdBox Notes</span>
      </Link>
      <nav className={navBar}>
        <ModalHandler className={menu} />
        <LoginButton className={[cta, navItem].join(' ')} />
        <Link href="/register" className={navItem}>
          <RegisterIcon />
          Criar Conta
        </Link>
      </nav>
    </div>
  )
}
