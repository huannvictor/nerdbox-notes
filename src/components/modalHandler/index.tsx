'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import CloseBtnIcon from '../icons/CloseBtnIcon'
import MenuIcon from '../icons/MenuIcon'
import RegisterIcon from '../icons/RegisterIcon'
import LoginButton from '../loginButton'
import styles from './Modal.module.css'

interface Props {
  className: string
}

const { closeBtn, modalContainer, modalItemsGroup, modalItem } = styles

const ModalHandler: React.FC<Props> = ({ className }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleClick = () => {
    setModalIsOpen(!modalIsOpen)
  }

  if (!modalIsOpen)
    return (
      <button onClick={handleClick}>
        <MenuIcon className={className} />
      </button>
    )

  return (
    <>
      <div className={modalContainer}>
        <button onClick={handleClick}>
          <CloseBtnIcon className={closeBtn} />
        </button>
        <div className={modalItemsGroup}>
          <LoginButton className={modalItem} onClick={handleClick} />
          <Link href="/register" className={modalItem} onClick={handleClick}>
            <RegisterIcon />
            Criar conta
          </Link>
        </div>
      </div>
    </>
  )
}

export default ModalHandler
