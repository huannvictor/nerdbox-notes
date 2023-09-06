'use client'

import UsersService from '@/services/users'
import { useRouter } from 'next/navigation'
import styles from '../UserForm.module.css'

const {
  field,
  title,
  btnDelete
} = styles

export default function DeleteAccount() {
  const { push } = useRouter()

  const handleDelete = async () => {
    await UsersService.delete()
    push('/')
  }


  return (
    <fieldset className={field}>
      <span className={title}>Deletar sua conta:</span>
      <button className={btnDelete} onClick={handleDelete}>
        Deletar
      </button>
    </fieldset>
  )
}