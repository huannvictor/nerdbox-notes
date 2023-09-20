'use client'

import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../../assets/images/logo.svg'
import RegisterIcon from '../../components/icons/RegisterIcon'
import LoginButton from '../../components/loginButton'
import ModalHandler from '../../components/modalHandler'
import styles from './Header.module.css'

const { header, brand, logo, navBar, navItem, cta, menu } = styles

export default function HeaderUnauth() {
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
