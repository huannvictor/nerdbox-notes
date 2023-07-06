/* eslint-disable no-unused-vars */
'use client'

import UsersService from '@/services/users'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactElement, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import styles from '../AuthForm.module.css'

const createUserFormSchema = z.object({
  name: z
    .string()
    .nonempty('o campo nome é obrigatório.')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0]
            .toLocaleUpperCase()
            .concat(word.substring(1).toLocaleLowerCase())
        })
        .join(' ')
    }),
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

export default function RegisterForm(): ReactElement {
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [Error, setError] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  const createUser = async (data: any, e: any) => {
    try {
      e.preventDefault()
      await UsersService.register({
        name: data.name,
        email: data.email,
        password: data.password,
      })
      setRedirectToLogin(true)
    } catch (error) {
      setError(true)
    }
  }

  if (redirectToLogin) router.push('/login')

  return (
    <div className={formContainer}>
      <h1 className={title}>Crie sua conta</h1>
      <form className={form} onSubmit={handleSubmit(createUser)}>
        <div className={fieldsContainer}>
          <fieldset className={field}>
            <label htmlFor="name">nome: </label>
            <input
              type="text"
              id="name"
              placeholder="seu nome"
              autoComplete="off"
              {...register('name')}
            />
            {errors.name && (
              <span className={error}>{errors.name.message}</span>
            )}
          </fieldset>
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
          <Link href="/login" className={btn}>
            Já tenho conta
          </Link>
          <button type="submit" className={[btn, btnCta].join(' ')}>
            Registrar
          </button>
        </div>
      </form>
    </div>
  )
}
