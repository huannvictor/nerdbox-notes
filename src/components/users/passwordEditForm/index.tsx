'use client'

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

export default function PasswordEditForm() {

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
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