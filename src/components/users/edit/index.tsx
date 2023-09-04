'use client'

import { useState } from 'react'
import styles from '../UserForm.module.css'

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

export default function UserEditForm() {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  return (
    <div className={formContainer}>
      {/* <h1 className={title}>TÍTULO</h1> */}
      <form action="" className={form}>
        <div className={fieldsContainer}>
          <fieldset className={field}>
            <label htmlFor="userName">
              Nome:
            </label>
            <input 
              type="text" 
              id="userName" 
              placeholder="Altere seu Nome" 
            />
          </fieldset>

          <fieldset className={field}>
            <label htmlFor="userPassword">
              Alterar senha: 
            </label>
            <input
              type="text"
              id="userPassword"
              placeholder="Altere sua senha"
              autoComplete='off'
            />
          </fieldset>

          <fieldset className={field}>
            <label htmlFor="ConfirmUserPassword">
              Confirme a nova senha: 
            </label>
            <input
              type="text"
              id="ConfirmUserPassword"
              placeholder="Confirme sua nova senha"
              autoComplete='off'
            />
          </fieldset>

          <fieldset className={field}>
            <span>Deletar sua conta:</span>
            <button className={btn}>
              Deletar
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  )
}