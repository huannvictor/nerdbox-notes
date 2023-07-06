import RegisterForm from '@/components/auth/registerForm'
import Image from 'next/image'
import logoImage from '../../../assets/images/logo.png'
import styles from '../AuthStyles.module.css'

const { section, cardContainer, card, logo, title, divider } = styles

export default function RegisterScreen() {
  return (
    <section className={section}>
      <div className={[cardContainer, divider].join(' ')}>
        <div className={card}>
          <Image src={logoImage} className={logo} alt="Logomarca NerdBox" />
          <h1 className={title}>Suas Notas na nuvem</h1>
        </div>
        <RegisterForm />
      </div>
    </section>
  )
}
