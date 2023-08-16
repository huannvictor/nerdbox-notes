'use client'

import UsersService from '@/services/users'
import { CaretUpDown } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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

interface Props {
  userName: string
}

const DropDown = (props: Props) => {
  const [menuIsActive, setMenuIsActive] = useState(false)
  const { push } = useRouter()

  const handleClick = () => {
    setMenuIsActive(!menuIsActive)
  }

  const handleLogOut = () => {
    push('/')
    UsersService.logout()
  }

  return (
    <div className={menuIsActive ? [dropdown, isActive].join(' ') : dropdown}>
      <div className={dropdownTrigger}>
        <button className={dropdownBtn} onClick={handleClick}>
          <span>{props.userName}</span>
          <CaretUpDown />
        </button>
        <div className={dropdownContent}>
          <Link className={dropdownItem} href="/notes">
            Minhas Notas
          </Link>
          <Link className={dropdownItem} href="/users/edit">
            Editar Usuário
          </Link>
          <button className={dropdownItem} onClick={handleLogOut}>
            LogOut
          </button>
        </div>
      </div>
    </div>
  )
}

export default DropDown
