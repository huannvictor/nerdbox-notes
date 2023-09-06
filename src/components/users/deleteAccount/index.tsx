'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from '../UserForm.module.css'
import UsersService from '@/services/users'

const {
  field,
  title,
  btnContainer,
  btn,
  btnDelete
} = styles

export default function DeleteAccount() {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const { push } = useRouter()

  const handleDelete = async () => {
    await UsersService.delete()
    push('/')
  }

  const handleConfirmDelete = () => {
    setConfirmDelete(true)
  }



  return (
    <fieldset className={field}>
      <span className={title}>Deletar sua conta:</span>
      <button className={btnDelete} onClick={handleConfirmDelete}>
        Deletar
      </button>
      {
        confirmDelete 
        ? (<div className='absolute bg-red-400 flex flex-col justify-center items-center w-fit p-3 z-50 rounded self-center'>
            <span>Tem certeza disso?</span>
            <div className={btnContainer}>
              <button className={btnDelete} onClick={handleDelete}>Deletar</button>
              <button className={btn}>Manter Conta</button>
            </div>
          </div>)
        : null
      } 
    </fieldset>
  )
}