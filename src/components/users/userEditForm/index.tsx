'use client'

import { useEffect, useState } from 'react'
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
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  const initializeUser = async () => {
    const isUserStored = localStorage.getItem('user')
    if (isUserStored !== null) {
      const user: {name: string, email: string} = await JSON.parse(isUserStored)
      setUserName(user['name'])
      setEmail(user['email'])
    }
  }

  useEffect(() => {
    initializeUser()
  }, [])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }
  
  return (
    <div className={formContainer}>
      <form onSubmit={handleSubmit} className={form}>
        <div className={fieldsContainer}>
          <fieldset className={field}>
            <label htmlFor="userName">
              Nome:
            </label>
            <input 
              type="text" 
              id="userName" 
              placeholder="Altere seu Nome" 
              value={userName || ''}
              onChange={e => {setUserName(e.target.value)}}
              required
              name='name'
            />
          </fieldset>

          <fieldset className={field}>
            <label htmlFor="userEmail">
              Email:
            </label>
            <input 
              type="email" 
              id="userEmail" 
              placeholder="Altere seu email" 
              value={email || ''}
              onChange={e => {setEmail(e.target.value)}}
              required
              name='email'
            />
          </fieldset>

          <fieldset className={field}>
            <button className={btn}>
              Atualizar dados
            </button>
          </fieldset>

        </div>
      </form>
    </div>
  )
}