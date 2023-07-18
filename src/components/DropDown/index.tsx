'use client'

import { CaretUpDown } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState } from 'react'
import styles from './DropDown.module.css'

const {
  dropdown,
  isActive,
  dropdownTrigger,
  dropdownBtn,
  dropdownContent,
  dropdownItem,
} = styles

const DropDown = () => {
  const [menuIsActive, setMenuIsActive] = useState(false)

  const handleClick = () => {
    setMenuIsActive(!menuIsActive)
  }

  return (
    <div className={menuIsActive ? [dropdown, isActive].join(' ') : dropdown}>
      <div className={dropdownTrigger}>
        <button className={dropdownBtn} onClick={handleClick}>
          <span>Huann Almeida</span>
          <CaretUpDown />
        </button>
        <div className={dropdownContent}>
          <Link className={dropdownItem} href="/users/edit">
            Editar Usuário
          </Link>
          <Link className={dropdownItem} href="#">
            LogOut
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DropDown
