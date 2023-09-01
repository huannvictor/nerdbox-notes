/* eslint-disable no-unused-vars */
'use client'

import UsersService from '@/services/users'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactElement, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import styles from '../AuthForm.module.css'

const createUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('o campo e-mail é obrigatório.')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
  password: z
    .string()
    .nonempty('a senha é obrigatória.')
    .min(6, 'A senha precisa conter no mínimo 6 caracteres'),
})

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

type createUserFormData = z.infer<typeof createUserFormSchema>

export default function LoginForm(): ReactElement {
  const [redirectToNotes, setRedirectToNotes] = useState(false)
  const [Error, setError] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  const login = async (data: any, e: any) => {
    try {
      e.preventDefault()
      await UsersService.login({
        email: data.email,
        password: data.password,
      })
      setRedirectToNotes(true)
      router.push('/notes')
    } catch (error) {
      setError(true)
    }
  }

  const refreshPage = (): void => {
    router.refresh()
  }

  useEffect(() => {
    if (redirectToNotes) router.push('/notes')
  }, [redirectToNotes, router])

  return (
    <div className={formContainer}>
      <h1 className={title}>Faça seu login</h1>
      <form className={form} onSubmit={handleSubmit(login)}>
        <div className={fieldsContainer}>
          <fieldset className={field}>
            <label htmlFor="email">e-mail: </label>
            <input
              type="email"
              id="email"
              placeholder="seu e-mail"
              autoComplete="off"
              {...register('email')}
            />
            {errors.email && (
              <span className={error}>{errors.email.message}</span>
            )}
          </fieldset>
          <fieldset className={field}>
            <label htmlFor="password">senha: </label>
            <input
              type="password"
              id="password"
              placeholder="sua senha"
              autoComplete="off"
              {...register('password')}
            />

            {errors.password && (
              <span className={error}>{errors.password.message}</span>
            )}
          </fieldset>
        </div>
        <div className={btnContainer}>
          <Link href="/register" className={btn}>
            Ainda não tenho conta
          </Link>
          <button
            type="submit"
            className={[btn, btnCta].join(' ')}
            onClick={refreshPage}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
