'use client'

import { List } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import LogoWhite from '../../assets/images/logoWhite.svg'
import DropDown from '../DropDown'
import SidebarMenu from '../sidebarMenu'
import styles from './HeaderLogged.module.css'

const { header, brand, logo, title, navBar } = styles

export default function HeaderLogged() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div className={header}>
      <Link href="/" className={brand}>
        <Image alt="NerdBox Logo" src={LogoWhite} className={logo} />
        <span className={title}>Bem vindo usuário</span>
        <button className={'dropdownBtn'} onClick={handleClick}>
          <List />
          <SidebarMenu isOpen={isOpen} setIsOpen={() => setIsOpen(isOpen)} />
        </button>
      </Link>
      <nav className={navBar}>
        <DropDown />
      </nav>
    </div>
  )
}
