import LoginForm from '@/components/auth/loginForm'
import Image from 'next/image'
import logoImage from '../../../assets/images/logo.png'
import styles from '../../ScreensStyles.module.css'

const { section, cardContainer, card, logo, title, divider } = styles

export default function LoginScreen() {
  return (
    <section className={section}>
      <div className={[cardContainer, divider].join(' ')}>
        <div className={card}>
          <Image src={logoImage} className={logo} alt="Logomarca NerdBox" />
          <h1 className={title}>Suas Notas na nuvem</h1>
        </div>
        <LoginForm />
      </div>
    </section>
  )
}
