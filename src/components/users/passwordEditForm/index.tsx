'use client'

import Status from '@/components/status'
import UsersService from '@/services/users'
import { useState } from 'react'
import styles from '../UserForm.module.css'
import UpdateButton from '../updateBtn'

const {
  formContainer,
  title,
  form,
  fieldsContainer,
  field,
  btnContainer,
  btn,
  btnCta,
  error,
} = styles

export default function PasswordEditForm() {
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (password == passwordConfirmation ) {
      try {
        await UsersService.updatePassword({newPassWord: password})
        setStatus('success')
      } catch (error) {
        console.log(error)
        setStatus('error')
      }
    }

    if (password !== passwordConfirmation) setStatus('error_confirmation')
  }
  
  return (
    <div className={formContainer}>
      <form onSubmit={handleSubmit} className={form}>
        <div className={fieldsContainer}>
          <fieldset className={field}>
            <label htmlFor="userPassword">
              Alterar senha: 
            </label>
            <input
              type="password"
              value={password}
              id="userPassword"
              placeholder="Altere sua senha"
              autoComplete='off'
              onChange={e => setPassword(e.target.value)}
            />
          </fieldset>

          <fieldset className={field}>
            <label htmlFor="ConfirmUserPassword">
              Confirme a nova senha: 
            </label>
            <input
              type="text"
              value={passwordConfirmation}
              id="ConfirmUserPassword"
              placeholder="Confirme sua nova senha"
              autoComplete='off'
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
          </fieldset>

          <Status status={status} />

          <UpdateButton text='Atualizar Senha' />
        </div>
      </form>
    </div>
  )
}